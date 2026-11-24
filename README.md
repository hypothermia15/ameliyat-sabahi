# Ameliyat Sabahı

Psikotrop ilaç kullanan hastada ameliyat öncesi yönetim için eğitim sayfası. Hekimler ve asistanlar içindir.

Canlı sayfa: https://hypothermia15.github.io/ameliyat-sabahi/

Yazar: Doç. Dr. Miraç Barış Usta (çocuk ve ergen psikiyatrisi), 2026.

## Bölümler

| Sekme | Ne yapar |
|---|---|
| Ameliyat sabahı | Kurgusal hasta. 1) Her ilaç için sabah kararı: ver, verme, 72 saat önce kes. 2) Anestezi tepsisine ilaç ekledikçe belgedeki etkileşim uyarıları ve risk etiketleri görünür. 3) Konsültasyon notu oluşur. |
| Sürdür mü, kes mi? | 40 kartlık hızlı tur (39 ilaç; lityum minör ve majör işlem için ayrı kart). Klavye: 1, 2, 3, Enter. |
| Not üretici | İlaçları ve işlem türünü seçin, konsültasyon notu oluşsun. |

## İçerik nereden geliyor

Bütün klinik cümleler yazarın "Psikotrop İlaçların Preoperatif Yönetimi" adlı konsültasyon şablonu belgesinden **değiştirilmeden** alınmıştır. Belgenin dayanağı:

Oprea AD, Keshock MC, O'Glasser AY, ve ark. Preoperative Management of Medications for Psychiatric Diseases: Society for Perioperative Assessment and Quality Improvement (SPAQI) Consensus Statement. Mayo Clin Proc. 2022;97(2):397-416. doi:10.1016/j.mayocp.2021.11.011 (künye PubMed kaydıyla doğrulandı; bildirgenin tam metni bu sayfa hazırlanırken okunmadı, şablonlar yazarın belgesinden alındı).

`veri.js`, `uret.py` ile belgenin metninden üretilir (`python3 uret.py belge.txt`). Belgenin kendisi depoda değildir.

## Otomatik türetilenler (belgede yazmayan, sayfanın eklediği)

- **Sabah kararı:** her şablonun birinci maddesindeki ifadeden okunur ("devam edilmesi" → ver, "verilmemesi" → verme, "72 saat önce kesilmesi" → 72 saat önce kes).
- **Anestezi tepsisi eşleşmeleri:** `uret.py` içindeki `TEPSI` tablosu, her ajan için belgedeki cümlelerde aranacak sözcükleri tanımlar (örneğin fentanil ve morfin, "opioidler ve diğer SSS depresanları" cümleleriyle eşleşir). Eşleşen tümce olduğu gibi gösterilir.
- **Risk etiketleri:** eşleşen tümcenin içindeki sözcüklerden (`ETIKET` tablosu).
- **"Belgenin önerdiği seçenek":** tümcede o ajan için "tercih edilmesi" ya da "ile sürdürülmesi" geçiyorsa.
- **Not birleştirme:** birden çok ilaçta aynı cümle bir kez yazılır; giriş cümlesindeki ilaç listesi seçilen ilaçlarla doldurulur.

Sözcük eşleştirmesi bir kolaylıktır, klinik bir etkileşim veritabanı değildir. Bir ajan için uyarı çıkmaması, etkileşim olmadığını göstermez: yalnızca belgede o ajanın adının geçmediğini gösterir.

## Sınırlar

- Öneriler uzman uzlaşısıdır, bağlayıcı kılavuz değildir; bildirge erişkin (18 yaş ve üzeri) literatürüne dayanır.
- Vakalar kurgusaldır. İki vakada ergen yaşı kullanılmıştır; pediatrik veri sınırlıdır ve aynı ilkeler klinik yargıyla uygulanır.
- Sayfa hasta bilgisi istemez; nottaki köşeli ayraçlar kayıt sisteminde doldurulur. Hiçbir veri kaydedilmez ya da gönderilmez.
- Ticari adlar ve belgenin ayrıntılı öneriler bölümü sayfaya alınmadı.

## Lisans

Henüz bir lisans seçilmedi. Lisans eklenene kadar tüm hakları yazarında saklıdır.
