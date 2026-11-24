'use strict';
/* app.js — Ameliyat Sabahı. Üç bölüm: karar oyunu + anestezi tepsisi + not, hızlı tur, not üretici.
   Bütün klinik metin veri.js'ten gelir (kaynak belgeden üretilir). Dış istek yok, veri saklanmaz. */
(function () {
  const $ = id => document.getElementById(id);
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const dugme = (cls, text, fn) => { const b = el('button', cls, text); b.type = 'button'; b.addEventListener('click', fn); return b; };
  const ILAC = {}; VERI.ilaclar.forEach(x => ILAC[x.id] = x);
  const KARAR = { ver: 'Bu sabah ver', verme: 'Bu sabah verme', kes72: '72 saat önce kes' };
  const KARAR_KISA = { ver: 'Sürdür', verme: 'O sabah verme', kes72: '72 saat önce kes' };
  const govde = $('govde');

  // işlem türüne göre ilacın kaydı (yalnızca lityumda fark eder)
  const kayit = (id, tur) => { const x = ILAC[id]; return x.islemeGore ? x.islemeGore[tur] : x; };

  const VAKA = [
    { id: 'v1', yas: 16, islem: 'Laparoskopik apendektomi', tur: 'minor', ilac: ['metilfenidat', 'sertralin'] },
    { id: 'v2', yas: 34, islem: 'Majör karın cerrahisi', tur: 'major', ilac: ['lityum', 'ketiapin'] },
    { id: 'v3', yas: 45, islem: 'Total diz protezi', tur: 'major', ilac: ['paroksetin', 'alprazolam'] },
    { id: 'v4', yas: 28, islem: 'Günübirlik endoskopi', tur: 'minor', ilac: ['lityum', 'lamotrijin'] },
    { id: 'v5', yas: 52, islem: 'Laparoskopik kolesistektomi', tur: 'minor', ilac: ['klozapin', 'valproat'] },
    { id: 'v6', yas: 15, islem: 'Tonsillektomi', tur: 'minor', ilac: ['atomoksetin', 'guanfasin', 'risperidon'] }
  ];
  const TUR_AD = { minor: 'minör işlem (günübirlik, ayaktan, endoskopi vb.)', major: 'majör cerrahi (sıvı kayması, kan kaybı, akut böbrek hasarı riski)' };

  // ── konsültasyon notu ──
  function notMetni(ids, tur) {
    if (!ids.length) return '';
    const liste = ids.map(id => `${ILAC[id].ad.toLocaleLowerCase('tr')} – [doz] – [uygulama saati]`).join('; ');
    const giris = VERI.giris.replace('Kliniği,[', 'Kliniği,\n\n[').replace('].Yapılan', ']. Yapılan').replace('[ilaç – doz – uygulama saati]', liste);
    const gorulen = new Set(), satir = []; let n = 0;
    ids.forEach(id => kayit(id, tur).madde.forEach(m => { if (gorulen.has(m)) return; gorulen.add(m); satir.push(`${++n}. ${m}`); }));
    return `${giris}\n\nÖneriler:\n${satir.join('\n')}\n\n${VERI.kapanis}`;
  }
  function notKutusu(ids, tur) {
    const kap = el('div', 'not-kap');
    const ta = el('textarea', 'not'); ta.readOnly = true; ta.value = notMetni(ids, tur); ta.rows = Math.min(28, ta.value.split('\n').length + 4);
    ta.setAttribute('aria-label', 'Konsültasyon notu');
    const durum = el('span', 'kopya-durum');
    const kopya = dugme('ana', 'Notu kopyala', () => {
      const tamam = () => { durum.textContent = 'Kopyalandı.'; };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(ta.value).then(tamam, () => { ta.select(); durum.textContent = 'Metin seçildi, Ctrl+C ile kopyalayın.'; });
      else { ta.select(); durum.textContent = 'Metin seçildi, Ctrl+C ile kopyalayın.'; }
    });
    const ust = el('div', 'not-ust'); ust.append(kopya, durum);
    kap.append(ust, ta, el('p', 'kucuk', 'Köşeli ayraçları kendi kayıt sisteminizde doldurun. Aynı cümle birden çok ilaçta geçiyorsa bir kez yazılır. Not, hastayı değerlendiren hekimin sorumluluğundadır.'));
    return kap;
  }

  // ── 1. Ameliyat sabahı ──
  const O = { vaka: null, adim: 0, karar: {}, kontrol: false, tepsi: new Set(), ozel: { tur: 'minor', ilac: new Set() } };

  function ilacSecici(secili, degisti) {
    const kap = el('div', 'secici'); const gruplar = [];
    VERI.ilaclar.forEach(x => { if (!gruplar.includes(x.grup)) gruplar.push(x.grup); });
    gruplar.forEach(g => {
      const kutu = el('div', 'grup'); kutu.append(el('h3', null, g)); const sira = el('div', 'grup-sira');
      VERI.ilaclar.filter(x => x.grup === g).forEach(x => {
        const b = dugme('hap', x.ad, () => { secili.has(x.id) ? secili.delete(x.id) : secili.add(x.id); b.setAttribute('aria-pressed', String(secili.has(x.id))); degisti(); });
        b.setAttribute('aria-pressed', String(secili.has(x.id))); sira.append(b);
      });
      kutu.append(sira); kap.append(kutu);
    });
    return kap;
  }
  function turSecici(deger, degisti) {
    const kap = el('div', 'tur-sec'); kap.append(el('span', 'tur-ad', 'İşlem türü:'));
    ['minor', 'major'].forEach(t => { const b = dugme('hap', t === 'minor' ? 'Minör işlem' : 'Majör cerrahi', () => degisti(t)); b.setAttribute('aria-pressed', String(deger === t)); kap.append(b); });
    return kap;
  }

  function oyunBasla(v) { O.vaka = v; O.adim = 1; O.karar = {}; O.kontrol = false; O.tepsi = new Set(); ciz(); govde.scrollIntoView({ block: 'start' }); }

  function hastaKarti(v, kararGoster) {
    const k = el('div', 'hasta');
    k.append(el('p', 'tur', 'Kurgusal hasta'), el('h2', null, `${v.yas ? v.yas + ' yaş · ' : ''}${v.islem}`));
    k.append(el('p', 'kucuk', 'İşlem türü: ' + TUR_AD[v.tur]));
    const ul = el('ul', 'hasta-ilac');
    v.ilac.forEach(id => { const li = el('li', null, ILAC[id].ad); if (kararGoster) li.append(el('span', 'rozet ' + kayit(id, v.tur).karar, KARAR_KISA[kayit(id, v.tur).karar])); ul.append(li); });
    k.append(ul); return k;
  }

  function cizOyun() {
    govde.textContent = '';
    if (O.adim === 0) {
      const kap = el('section', 'kutu');
      kap.append(el('h2', null, 'Bir hasta seçin'), el('p', null, 'Üç adım: sabah kararı, anestezi tepsisi, konsültasyon notu. Vakalar kurgusaldır.'));
      const izg = el('div', 'vakalar');
      VAKA.forEach(v => { const b = dugme('vaka', null, () => oyunBasla(v)); b.append(el('strong', null, `${v.yas} yaş · ${v.islem}`), el('span', null, v.ilac.map(id => ILAC[id].ad).join(', '))); izg.append(b); });
      const rast = dugme('vaka', null, () => { const hav = VERI.ilaclar.map(x => x.id).sort(() => Math.random() - 0.5).slice(0, 2 + Math.floor(Math.random() * 2)); const tur = Math.random() < 0.5 ? 'minor' : 'major'; oyunBasla({ id: 'r', islem: tur === 'minor' ? 'Günübirlik işlem' : 'Majör cerrahi', tur, ilac: hav }); });
      rast.append(el('strong', null, 'Rastgele hasta'), el('span', null, 'İki ya da üç ilaç, rastgele işlem')); izg.append(rast);
      kap.append(izg);
      const oz = el('details', 'ozel'); oz.append(el('summary', null, 'Kendi ilaç listemi kurayım'));
      const turKap = el('div'); const yenile = () => { turKap.textContent = ''; turKap.append(turSecici(O.ozel.tur, t => { O.ozel.tur = t; yenile(); })); }; yenile();
      const basla = dugme('ana', 'Bu listeyle başla', () => { if (O.ozel.ilac.size) oyunBasla({ id: 'o', islem: O.ozel.tur === 'minor' ? 'Minör işlem' : 'Majör cerrahi', tur: O.ozel.tur, ilac: [...O.ozel.ilac] }); });
      oz.append(turKap, ilacSecici(O.ozel.ilac, () => {}), basla); kap.append(oz);
      govde.append(kap); return;
    }
    const v = O.vaka;
    const adimlar = el('ol', 'adimlar'); ['Sabah kararı', 'Anestezi tepsisi', 'Konsültasyon notu'].forEach((a, i) => { const li = el('li', O.adim === i + 1 ? 'simdi' : O.adim > i + 1 ? 'gecti' : '', a); adimlar.append(li); });
    const bas = el('div', 'oyun-bas'); bas.append(adimlar, dugme('bag', 'Başka hasta', () => { O.adim = 0; ciz(); })); govde.append(bas);
    const alan = el('div', 'iki'); govde.append(alan);

    if (O.adim === 1) {
      alan.append(hastaKarti(v, O.kontrol));
      const sag = el('section', 'kutu'); sag.append(el('h2', null, 'Ameliyat sabahı hangi ilaç ne olacak?'));
      let dogru = 0;
      v.ilac.forEach(id => {
        const k = kayit(id, v.tur), satir = el('div', 'karar-satir'); satir.append(el('h3', null, ILAC[id].ad));
        const sec = el('div', 'karar-sec');
        Object.keys(KARAR).forEach(c => { const b = dugme('hap', KARAR[c], () => { if (O.kontrol) return; O.karar[id] = c; ciz(); }); b.setAttribute('aria-pressed', String(O.karar[id] === c)); if (O.kontrol) b.disabled = true; sec.append(b); });
        satir.append(sec);
        if (O.kontrol) { const ok = O.karar[id] === k.karar; if (ok) dogru++; const g = el('p', 'geri ' + (ok ? 'ok' : 'hata')); g.append(el('strong', null, ok ? 'Doğru. ' : `Belgedeki öneri: ${KARAR[k.karar]}. `), k.madde[0]); satir.append(g); }
        sag.append(satir);
      });
      if (!O.kontrol) { const b = dugme('ana', 'Kontrol et', () => { O.kontrol = true; ciz(); }); b.disabled = v.ilac.some(id => !O.karar[id]); sag.append(b); }
      else { sag.append(el('p', 'sonuc-bas', `${dogru} / ${v.ilac.length} doğru`), dugme('ana', 'Anestezi tepsisine geç', () => { O.adim = 2; ciz(); })); }
      alan.append(sag);
    }

    if (O.adim === 2) {
      const sol = el('div', 'sol'); sol.append(hastaKarti(v, true));
      // bu hastada risk uyarısı çıkaran ajanlar
      const esle = aid => { const out = []; v.ilac.forEach(id => (kayit(id, v.tur).tepsi[aid] || []).forEach(e => out.push({ ilac: ILAC[id].ad, tumce: e[1], etiket: e[2], tercih: e[3] }))); return out; };
      const riskli = VERI.tepsi.filter(a => esle(a.id).some(e => !e.tercih)).map(a => a.id);
      const etiketler = new Set(); let bulunan = 0;
      O.tepsi.forEach(aid => { const es = esle(aid); if (es.some(e => !e.tercih)) bulunan++; es.forEach(e => { if (!e.tercih) e.etiket.forEach(t => etiketler.add(t)); }); });
      const rk = el('div', 'riskler'); rk.append(el('h3', null, 'Tepside şu an yanan riskler'));
      const rs = el('div', 'risk-sira'); VERI.etiketler.forEach(t => rs.append(el('span', 'risk' + (etiketler.has(t) ? ' yanik' : ''), t))); rk.append(rs);
      rk.append(el('p', 'kucuk', `Bu hastada belgede uyarısı olan ajan: ${bulunan} / ${riskli.length} bulundu.`)); sol.append(rk);
      alan.append(sol);

      const sag = el('section', 'kutu'); sag.append(el('h2', null, 'Anestezi tepsisi'), el('p', null, 'Tepsiye ilaç ekleyin. Hastanın psikotropuyla ilgili belgedeki uyarı varsa altta görünür.'));
      const gruplar = []; VERI.tepsi.forEach(a => { if (!gruplar.includes(a.grup)) gruplar.push(a.grup); });
      gruplar.forEach(g => { const kutu = el('div', 'grup'); kutu.append(el('h3', null, g)); const sira = el('div', 'grup-sira');
        VERI.tepsi.filter(a => a.grup === g).forEach(a => { const b = dugme('hap', a.ad, () => { O.tepsi.has(a.id) ? O.tepsi.delete(a.id) : O.tepsi.add(a.id); ciz(); }); b.setAttribute('aria-pressed', String(O.tepsi.has(a.id))); sira.append(b); });
        kutu.append(sira); sag.append(kutu); });
      const uy = el('div', 'uyarilar');
      if (!O.tepsi.size) uy.append(el('p', 'bos', 'Tepsi boş.'));
      VERI.tepsi.filter(a => O.tepsi.has(a.id)).forEach(a => {
        const es = esle(a.id), blok = el('div', 'uyari-blok'); blok.append(el('h3', null, a.ad));
        if (!es.length) blok.append(el('p', 'bos', 'Bu hastanın ilaçları için belgede bu ajanla ilgili bir uyarı yok.'));
        es.forEach(e => { const p = el('p', 'uyari-satir' + (e.tercih ? ' tercih' : '')); p.append(el('strong', null, e.ilac + ': '), e.tumce);
          if (e.tercih) p.append(el('span', 'cip iyi', 'belgenin önerdiği seçenek')); e.etiket.forEach(t => { if (!e.tercih) p.append(el('span', 'cip', t)); }); blok.append(p); });
        uy.append(blok);
      });
      sag.append(uy, dugme('ana', 'Konsültasyon notunu oluştur', () => { O.adim = 3; ciz(); }), dugme('bag', 'Tepsiyi boşalt', () => { O.tepsi.clear(); ciz(); }));
      alan.append(sag);
    }

    if (O.adim === 3) {
      alan.append(hastaKarti(v, true));
      const sag = el('section', 'kutu'); sag.append(el('h2', null, 'Konsültasyon notu'), notKutusu(v.ilac, v.tur), dugme('bag', 'Tepsiye dön', () => { O.adim = 2; ciz(); }), dugme('ana ikinci', 'Yeni hasta', () => { O.adim = 0; ciz(); }));
      alan.append(sag);
    }
  }

  // ── 2. Hızlı tur ──
  const H = { kart: [], i: 0, dogru: 0, yanlis: [], cevap: null, t0: 0, sure: 0, bitti: false };
  function hizliBasla() {
    H.kart = []; VERI.ilaclar.forEach(x => { if (x.islemeGore) ['minor', 'major'].forEach(t => H.kart.push({ ad: `${x.ad} (${t === 'minor' ? 'minör işlem' : 'majör cerrahi'})`, k: x.islemeGore[t] })); else H.kart.push({ ad: x.ad, k: x }); });
    H.kart.sort(() => Math.random() - 0.5); H.i = 0; H.dogru = 0; H.yanlis = []; H.cevap = null; H.t0 = Date.now(); H.bitti = false; ciz();
  }
  function hizliCevap(c) { if (H.cevap || H.bitti) return; const k = H.kart[H.i]; H.cevap = c; if (c === k.k.karar) H.dogru++; else H.yanlis.push(k); ciz(); }
  function hizliIleri() { if (!H.cevap) return; H.i++; H.cevap = null; if (H.i >= H.kart.length) { H.bitti = true; H.sure = Math.round((Date.now() - H.t0) / 1000); } ciz(); }
  function cizHizli() {
    govde.textContent = ''; const kap = el('section', 'kutu hizli');
    if (!H.kart.length) { kap.append(el('h2', null, 'Sürdür mü, kes mi?'), el('p', null, `${VERI.ilaclar.length + 1} kart. Her ilaç için ameliyat sabahı kararını verin. Klavye: 1, 2, 3 ve Enter.`), dugme('ana', 'Başla', hizliBasla)); govde.append(kap); return; }
    if (H.bitti) {
      kap.append(el('p', 'tur', 'Bitti'), el('h2', null, `${H.dogru} / ${H.kart.length} doğru · ${H.sure} sn`));
      if (H.yanlis.length) { kap.append(el('h3', null, 'Yeniden bakılacaklar')); const ul = el('ul', 'yanlislar'); H.yanlis.forEach(k => { const li = el('li'); li.append(el('strong', null, `${k.ad}: ${KARAR_KISA[k.k.karar]}. `), k.k.madde[0]); ul.append(li); }); kap.append(ul); }
      else kap.append(el('p', null, 'Hepsi doğru.'));
      kap.append(el('p', 'ders', 'Ana ilke: psikotrop ilaçların büyük çoğunluğu operasyon günü dahil sürdürülür. Belgedeki istisnalar: majör cerrahide lityum, operasyon günü metilfenidat ve atomoksetin.'), dugme('ana', 'Yeniden oyna', hizliBasla));
      govde.append(kap); return;
    }
    const k = H.kart[H.i];
    kap.append(el('p', 'tur', `Kart ${H.i + 1} / ${H.kart.length} · ${H.dogru} doğru`), el('h2', 'kart-ad', k.ad));
    const sec = el('div', 'karar-sec buyuk');
    Object.keys(KARAR_KISA).forEach((c, n) => { const b = dugme('hap', `${n + 1} · ${KARAR_KISA[c]}`, () => hizliCevap(c)); if (H.cevap) { b.disabled = true; if (c === k.k.karar) b.classList.add('dogru'); else if (c === H.cevap) b.classList.add('yanlis'); } sec.append(b); });
    kap.append(sec);
    if (H.cevap) { const ok = H.cevap === k.k.karar, g = el('p', 'geri ' + (ok ? 'ok' : 'hata')); g.append(el('strong', null, ok ? 'Doğru. ' : 'Yanlış. '), k.k.madde[0]); const ileri = dugme('ana', H.i + 1 < H.kart.length ? 'Sonraki' : 'Sonucu gör', hizliIleri); kap.append(g, ileri); govde.append(kap); ileri.focus(); return; }
    govde.append(kap);
  }
  document.addEventListener('keydown', e => { if (sekme !== 'hizli' || !H.kart.length || H.bitti) return; const c = { 1: 'ver', 2: 'verme', 3: 'kes72' }[e.key]; if (c && !H.cevap) hizliCevap(c); });

  // ── 3. Not üretici ──
  const N = { tur: 'minor', ilac: new Set() };
  function cizNot() {
    govde.textContent = ''; const alan = el('div', 'iki'); govde.append(alan);
    const sol = el('section', 'kutu'); sol.append(el('h2', null, 'İlaçları seçin'));
    const turKap = el('div'), sag = el('section', 'kutu');
    const yaz = () => { turKap.textContent = ''; turKap.append(turSecici(N.tur, t => { N.tur = t; yaz(); })); sag.textContent = ''; sag.append(el('h2', null, 'Konsültasyon notu'));
      if (!N.ilac.size) sag.append(el('p', 'bos', 'Not, ilaç seçtikçe burada oluşur.')); else sag.append(notKutusu([...N.ilac], N.tur)); };
    sol.append(turKap, el('p', 'kucuk', 'İşlem türü yalnızca lityum önerisini değiştirir.'), ilacSecici(N.ilac, yaz), dugme('bag', 'Seçimi temizle', () => { N.ilac.clear(); cizNot(); }));
    alan.append(sol, sag); yaz();
  }

  // ── sekmeler ──
  let sekme = 'oyun';
  function ciz() { sekme === 'oyun' ? cizOyun() : sekme === 'hizli' ? cizHizli() : cizNot(); }
  document.querySelectorAll('.sekme button').forEach(b => b.addEventListener('click', () => {
    sekme = b.dataset.sekme; document.querySelectorAll('.sekme button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    try { history.replaceState(null, '', '#' + sekme); } catch (e) { /* önemsiz */ } ciz();
  }));
  VERI.notlar.forEach(n => $('notlar').append(el('li', null, n)));
  { const p = $('kaynak'), a = el('a', null, 'doi:' + VERI.kaynak.doi); a.href = 'https://doi.org/' + VERI.kaynak.doi; a.target = '_blank'; a.rel = 'noopener'; p.append(VERI.kaynak.tam + ' ', a); }
  const ilk = (location.hash || '').slice(1); if (['hizli', 'not'].includes(ilk)) { sekme = ilk; document.querySelectorAll('.sekme button').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.sekme === ilk))); }
  ciz();
  window.__as = { notMetni, O, H, N, VAKA };   // sınama için
})();
