# -*- coding: utf-8 -*-
"""uret.py — kaynak belgeden (Word metni) veri.js üretir.
Kullanım: python3 uret.py /yol/belge.txt
Belgedeki öneri cümleleri DEĞİŞTİRİLMEDEN alınır; tepsi eşleşmeleri ve risk etiketleri cümlelerin içindeki
sözcüklerden türetilir (aşağıdaki TEPSI ve ETIKET tabloları)."""
import re, json, sys
t = open(sys.argv[1], encoding='utf-8').read()
sab = t[:t.find('İLAÇ GRUPLARINA GÖRE AYRINTILI ÖNERİLER')]
L = [l.strip() for l in sab.split('\n')]
GR = ['ANKSİYOLİTİKLER', 'ANTİDEPRESANLAR – SSRI', 'ANTİDEPRESANLAR – SNRI', 'ANTİDEPRESANLAR – DİĞERLERİ',
      'DUYGUDURUM DÜZENLEYİCİLER', 'ANTİPSİKOTİKLER', 'DEHB İLAÇLARI']
GR_AD = {'ANKSİYOLİTİKLER': 'Anksiyolitikler', 'ANTİDEPRESANLAR – SSRI': 'Antidepresanlar: SSRI', 'ANTİDEPRESANLAR – SNRI': 'Antidepresanlar: SNRI',
         'ANTİDEPRESANLAR – DİĞERLERİ': 'Antidepresanlar: diğerleri', 'DUYGUDURUM DÜZENLEYİCİLER': 'Duygudurum düzenleyiciler',
         'ANTİPSİKOTİKLER': 'Antipsikotikler', 'DEHB İLAÇLARI': 'DEHB ilaçları'}
def kucuk(s): return s.replace('İ', 'i').replace('I', 'ı').lower()
def baslik(s): s = kucuk(s); return ('İ' if s[0] == 'i' else s[0].upper()) + s[1:]
ASCII = str.maketrans('çğıöşüâ', 'cgiosua')
def kimlik(s): return re.sub(r'[^a-z]', '', kucuk(s).translate(ASCII))

ham, grp, cur, giris, kapanis = [], None, None, None, None
for l in L:
    if not l: continue
    if l in GR: grp = l; cur = None; continue
    if l.startswith('OG: operasyon günü'): break          # özet tablosu: şablonların sonu
    if l == l.upper() and re.search(r'[A-ZÇĞİÖŞÜ]{4}', l) and grp and not l.startswith('SAYIN'):
        cur = {'bas': l, 'grup': grp, 'madde': []}; ham.append(cur); continue
    if cur is None: continue
    m = re.match(r'^(\d+)\.\s*(.+)', l)
    if m: cur['madde'].append(m.group(2))
    elif l.startswith('Sayın'): giris = l
    elif l.startswith('Postoperatif dönemde deliryum'): kapanis = l
assert len(ham) == 40, len(ham)

def karar(ilk):
    if '72 saat önce kesilmesi' in ilk: return 'kes72'
    if 'verilmemesi' in ilk: return 'verme'
    assert 'devam edilmesi' in ilk, ilk
    return 'ver'

ilaclar = []
for h in ham:
    if h['bas'].startswith('LİTYUM'):
        tur = 'minor' if 'MİNÖR' in h['bas'] else 'major'
        li = next((x for x in ilaclar if x['id'] == 'lityum'), None)
        if not li: li = {'id': 'lityum', 'ad': 'Lityum', 'grup': GR_AD[h['grup']], 'islemeGore': {}}; ilaclar.append(li)
        li['islemeGore'][tur] = {'karar': karar(h['madde'][0]), 'madde': h['madde']}
    else:
        ilaclar.append({'id': kimlik(h['bas']), 'ad': baslik(h['bas']), 'grup': GR_AD[h['grup']], 'karar': karar(h['madde'][0]), 'madde': h['madde']})
assert len(ilaclar) == 39

# Anestezi tepsisi: her ajan için belgedeki cümlelerde aranacak kalıplar. "tercih": belgenin o ajanı önerdiği kalıp.
SSS = r'SSS depresan'
TEPSI = [
 ('Ağrı', 'tramadol', 'Tramadol', [r'tramadol', r'Serotonerjik opioidler', SSS], []),
 ('Ağrı', 'meperidin', 'Meperidin', [r'meperidin', r'Serotonerjik opioidler', SSS], []),
 ('Ağrı', 'metadon', 'Metadon', [r'metadon', r'Serotonerjik opioidler', SSS], []),
 ('Ağrı', 'fentanil', 'Fentanil', [SSS], [r'fentanil tercih']),
 ('Ağrı', 'morfin', 'Morfin', [SSS], [r'morfin, hidromorfon veya fentanil tercih']),
 ('Ağrı', 'nsaii', 'NSAİİ', [r'NSAİİ'], []),
 ('Bulantı', 'ondansetron', 'Ondansetron', [r'ondansetron', r'5-HT3', r'serotonerjik antiemetik', r'antiemetiklerle'], []),
 ('Bulantı', 'granisetron', 'Granisetron', [r'granisetron', r'5-HT3', r'serotonerjik antiemetik', r'antiemetiklerle'], []),
 ('Bulantı', 'metoklopramid', 'Metoklopramid', [r'metoklopramid'], []),
 ('Bulantı', 'droperidol', 'Droperidol', [r'droperidol'], []),
 ('Bulantı', 'prometazin', 'Prometazin', [r'prometazin'], []),
 ('Anestezi ve sedasyon', 'sevofluran', 'Sevofluran (halojenli inhalasyon anesteziği)', [r'halojenli', r'sevofluran', r'inhalasyon anesteziği', r'genel anesteziklerin'], []),
 ('Anestezi ve sedasyon', 'propofol', 'Propofol', [r'propofol', r'genel anesteziklerin'], []),
 ('Anestezi ve sedasyon', 'midazolam', 'Midazolam', [r'midazolam(?! ile sürdürülmesi)', r'benzodiazepin(?! kullanımı)(?!ler ve diğer)', r'Benzodiazepinler ve diğer', SSS], [r'midazolam ile sürdürülmesi']),
 ('Anestezi ve sedasyon', 'ketamin', 'Ketamin', [r'ketamin'], []),
 ('Anestezi ve sedasyon', 'lokal', 'Lidokain / bupivakain', [r'lidokain', r'bupivakain'], []),
 ('Anestezi ve sedasyon', 'haloperidol', 'Haloperidol (ek doz)', [r'haloperidol(?! tedavisine)'], []),
 ('Kas gevşetici', 'rokuronyum', 'Rokuronyum (nondepolarizan)', [r'nondepolarizan', r'rokuronyum', r'pankuronyum'], []),
 ('Kas gevşetici', 'suksinilkolin', 'Süksinilkolin', [r'süksinilkolin'], []),
 ('Kas gevşetici', 'neostigmin', 'Neostigmin', [r'neostigmin'], []),
 ('Dolaşım', 'efedrin', 'Efedrin', [r'efedrin', r'sempatomimetikler ile'], []),
 ('Dolaşım', 'norepinefrin', 'Norepinefrin', [r'epinefrin, norepinefrin'], [r'norepinefrin tercih']),
 ('Dolaşım', 'vazopressin', 'Vazopressin', [r'vazopressin'], []),
 ('Dolaşım', 'atropin', 'Atropin (antikolinerjik)', [r'atropin', r'antikolinerjik ilaç', r'antikolinerjikler'], []),
 ('Diğer', 'steroid', 'Deksametazon (steroid)', [r'steroid'], []),
 ('Diğer', 'metronidazol', 'Metronidazol', [r'metronidazol'], []),
 ('Diğer', 'penisilin', 'Penisilin grubu antibiyotik', [r'penisilin'], []),
]
ETIKET = [
 ('Serotonin sendromu', r'serotonin sendromu'), ('QT ve aritmi', r'QT|torsade|aritmi'), ('EPS / NMS', r'ekstrapiramidal|nöroleptik malign'),
 ('Sedasyon', r'sedasyon|solunum depresyonu|kardiyorespiratuvar'), ('Nöbet', r'nöbet'), ('Kanama', r'kanama'), ('Hipotansiyon', r'hipotansi'),
 ('Kan basıncı / kalp hızı', r'kan basıncı|kalp hızı|hipertansiyon|taşikardi'),
 ('İlaç etkisi değişir', r'düzey|etkisi azal|etkinliği azal|toksisite|maruziyet|direnç|etki süresi|etkisi artabilir|gereksinimi'),
 ('Deliryum / antikolinerjik', r'antikolinerjik etki|deliryum'),
]
def tumceler(m): return [c.strip() for c in re.split(r'(?<=[.;])\s+', m) if c.strip()]
def ara(pat, s): return re.search(pat, s, flags=0 if 'NSAİİ' in pat else re.I)

def eslesme(maddeler):
    """bir ilacın madde listesi için {ajan: [[maddeNo, tümce, etiketler, tercih]]}"""
    out = {}
    for i, m in enumerate(maddeler):
        if i == 0 or m.startswith('Hasta oral alabildiğinde') or m.startswith('Postoperatif dönemde hasta oral'): continue
        for c in tumceler(m):
            for _, aid, _, risk, tercih in TEPSI:
                r = any(ara(p, c) for p in risk); tc = any(ara(p, c) for p in tercih)
                if not (r or tc): continue
                et = [ad for ad, p in ETIKET if re.search(p, c, flags=re.I)]
                out.setdefault(aid, []).append([i, c, et, bool(tc and not r)])
    return out
for x in ilaclar:
    if 'islemeGore' in x:
        for v in x['islemeGore'].values(): v['tepsi'] = eslesme(v['madde'])
    else: x['tepsi'] = eslesme(x['madde'])

notlar = [l[1:].strip() for l in L if l.startswith('•')][:6]
veri = {'kaynak': {'tam': 'Oprea AD, Keshock MC, O’Glasser AY, ve ark. Preoperative Management of Medications for Psychiatric Diseases: Society for Perioperative Assessment and Quality Improvement (SPAQI) Consensus Statement. Mayo Clin Proc. 2022;97(2):397-416.', 'doi': '10.1016/j.mayocp.2021.11.011'},
        'giris': giris, 'kapanis': kapanis, 'notlar': notlar, 'ilaclar': ilaclar,
        'tepsi': [{'grup': g, 'id': i, 'ad': a} for g, i, a, _, _ in TEPSI], 'etiketler': [a for a, _ in ETIKET]}
open('veri.js', 'w', encoding='utf-8').write("'use strict';\n/* veri.js — uret.py ile kaynak belgeden üretilir; elle düzenlemeyin. */\nconst VERI = " + json.dumps(veri, ensure_ascii=False, indent=1) + ";\n")
if '--rapor' in sys.argv:
    for x in ilaclar:
        v = x['tepsi'] if 'tepsi' in x else x['islemeGore']['major']['tepsi']
        print(x['ad'].ljust(15), x.get('karar', 'islem'), '|', ' '.join(k + ('+' if all(e[3] for e in es) else '') + ':' + str(len(es)) for k, es in v.items()))
    print(len(notlar), 'not;', giris[:50], '|', kapanis[:40])
