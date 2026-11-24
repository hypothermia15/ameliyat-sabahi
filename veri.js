'use strict';
/* veri.js — uret.py ile kaynak belgeden üretilir; elle düzenlemeyin. */
const VERI = {
 "kaynak": {
  "tam": "Oprea AD, Keshock MC, O’Glasser AY, ve ark. Preoperative Management of Medications for Psychiatric Diseases: Society for Perioperative Assessment and Quality Improvement (SPAQI) Consensus Statement. Mayo Clin Proc. 2022;97(2):397-416.",
  "doi": "10.1016/j.mayocp.2021.11.011"
 },
 "giris": "Sayın Anesteziyoloji ve Reanimasyon Kliniği,[Ad Soyad], [yaş] yaşında, [tanı] tanısıyla kliniğimizce takip edilmektedir. Güncel psikotrop tedavisi: [ilaç – doz – uygulama saati].Yapılan ruhsal durum değerlendirmesinde planlanan operasyona engel bir psikiyatrik durum gözlenmemiştir.",
 "kapanis": "Postoperatif dönemde deliryum, ajitasyon, kesilme belirtileri veya psikiyatrik belirtilerde artış olması halinde kliniğimize yeniden danışılması önerilir. Saygılarımızla.",
 "notlar": [
  "Öneriler, randomize kontrollü çalışma bulunmadığı için çok disiplinli uzman grubunun modifiye Delphi yöntemiyle oluşturduğu uzlaşı önerileridir; bağlayıcı bir kılavuz değildir.",
  "Bildirge erişkin (≥18 yaş) literatürüne dayanır. Çocuk ve ergen hastalarda aynı ilkeler klinik yargıyla uygulanır; dozlar kiloya göredir ve pediatrik veriler sınırlıdır.",
  "Genel ilke: Psikotrop ilaçların büyük çoğunluğu operasyon günü dahil sürdürülmelidir. Kesmenin getirdiği nüks, kesilme sendromu ve postoperatif deliryum/ajitasyon riski, çoğu etkileşim riskinden daha ağır basar. Kesme önerilen başlıca istisnalar: majör cerrahide lityum, operasyon günü metilfenidat ve atomoksetin.",
  "Kronik tedavide izlem parametreleri: Bildirgede verilen tetkikler kronik tedavi izlemine yöneliktir; preoperatif dönemde rutin olarak istenmeleri gerekmez, klinik duruma göre uygulanır. İstisna: lityumla devam eden hastalarda preoperatif EKG, böbrek fonksiyonları, elektrolitler ve tiroid fonksiyonları önerilir.",
  "Ticari adlar örnek amaçlıdır; güncel ruhsat ve piyasa durumu TİTCK listelerinden kontrol edilmelidir. Bildirgede adı geçmeyen ilaçlar için yapılan uyarlamalar metinde ayrıca belirtilmiştir.",
  "Postoperatif dönemde ilaçlar, hasta oral alabildiği anda önceki dozla yeniden başlanmalıdır (lityum için ayrıca bkz. ilgili bölüm)."
 ],
 "ilaclar": [
  {
   "id": "alprazolam",
   "ad": "Alprazolam",
   "grup": "Anksiyolitikler",
   "karar": "ver",
   "madde": [
    "Alprazolam tedavisine operasyon günü dahil devam edilmesi önerilir. İlacın ani kesilmesi yoksunluk belirtilerine (anksiyete, baş dönmesi, tremor) yol açabileceğinden kesilmemesi önerilir.",
    "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
    "Kronik benzodiazepin kullanımı olan vakalarda inhalasyon anesteziği gereksinimi artabilir.",
    "Oral alım mümkün değilse tedavinin eşdeğer dozda IV lorazepam, diazepam veya midazolam ile sürdürülmesi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ],
     [
      3,
      "Oral alım mümkün değilse tedavinin eşdeğer dozda IV lorazepam, diazepam veya midazolam ile sürdürülmesi önerilir.",
      [],
      true
     ]
    ],
    "sevofluran": [
     [
      2,
      "Kronik benzodiazepin kullanımı olan vakalarda inhalasyon anesteziği gereksinimi artabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "klonazepam",
   "ad": "Klonazepam",
   "grup": "Anksiyolitikler",
   "karar": "ver",
   "madde": [
    "Klonazepam tedavisine operasyon günü dahil devam edilmesi önerilir. İlacın ani kesilmesi yoksunluk belirtilerine (anksiyete, baş dönmesi, tremor) yol açabileceğinden kesilmemesi önerilir.",
    "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
    "Kronik benzodiazepin kullanımı olan vakalarda inhalasyon anesteziği gereksinimi artabilir.",
    "Oral alım mümkün değilse tedavinin eşdeğer dozda IV lorazepam, diazepam veya midazolam ile sürdürülmesi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ],
     [
      3,
      "Oral alım mümkün değilse tedavinin eşdeğer dozda IV lorazepam, diazepam veya midazolam ile sürdürülmesi önerilir.",
      [],
      true
     ]
    ],
    "sevofluran": [
     [
      2,
      "Kronik benzodiazepin kullanımı olan vakalarda inhalasyon anesteziği gereksinimi artabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "diazepam",
   "ad": "Diazepam",
   "grup": "Anksiyolitikler",
   "karar": "ver",
   "madde": [
    "Diazepam tedavisine operasyon günü dahil devam edilmesi önerilir. İlacın ani kesilmesi yoksunluk belirtilerine (anksiyete, baş dönmesi, tremor) yol açabileceğinden kesilmemesi önerilir.",
    "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
    "Kronik benzodiazepin kullanımı olan vakalarda inhalasyon anesteziği gereksinimi artabilir.",
    "Oral alım mümkün değilse tedavinin eşdeğer dozda IV diazepam ile sürdürülmesi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Kronik benzodiazepin kullanımı olan vakalarda inhalasyon anesteziği gereksinimi artabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "lorazepam",
   "ad": "Lorazepam",
   "grup": "Anksiyolitikler",
   "karar": "ver",
   "madde": [
    "Lorazepam tedavisine operasyon günü dahil devam edilmesi önerilir. İlacın ani kesilmesi yoksunluk belirtilerine (anksiyete, baş dönmesi, tremor) yol açabileceğinden kesilmemesi önerilir.",
    "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
    "Kronik benzodiazepin kullanımı olan vakalarda inhalasyon anesteziği gereksinimi artabilir.",
    "Oral alım mümkün değilse tedavinin eşdeğer dozda IV lorazepam ile sürdürülmesi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      1,
      "Opioidler ve diğer SSS depresanlarıyla birlikte kullanımda ek sedasyon ve solunum depresyonu açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Kronik benzodiazepin kullanımı olan vakalarda inhalasyon anesteziği gereksinimi artabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "buspiron",
   "ad": "Buspiron",
   "grup": "Anksiyolitikler",
   "karar": "ver",
   "madde": [
    "Buspiron tedavisine operasyon günü dahil devam edilmesi önerilir. Anlamlı kesilme belirtisi beklenmez.",
    "Ondansetron, granisetron ve palonosetron gibi serotonerjik antiemetiklerle birlikte serotonin sendromu açısından izlem önerilir.",
    "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon açısından izlem önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "ondansetron": [
     [
      1,
      "Ondansetron, granisetron ve palonosetron gibi serotonerjik antiemetiklerle birlikte serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      1,
      "Ondansetron, granisetron ve palonosetron gibi serotonerjik antiemetiklerle birlikte serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "metadon": [
     [
      2,
      "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "hidroksizin",
   "ad": "Hidroksizin",
   "grup": "Anksiyolitikler",
   "karar": "ver",
   "madde": [
    "Hidroksizin tedavisine operasyon günü dahil devam edilmesi önerilir.",
    "Prometazin, proklorperazin, ondansetron, granisetron ve sevofluran gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon ve deliryum açısından izlem önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "ondansetron": [
     [
      1,
      "Prometazin, proklorperazin, ondansetron, granisetron ve sevofluran gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      1,
      "Prometazin, proklorperazin, ondansetron, granisetron ve sevofluran gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "prometazin": [
     [
      1,
      "Prometazin, proklorperazin, ondansetron, granisetron ve sevofluran gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Prometazin, proklorperazin, ondansetron, granisetron ve sevofluran gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon ve deliryum açısından izlem önerilir.",
      [
       "Sedasyon",
       "Deliryum / antikolinerjik"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon ve deliryum açısından izlem önerilir.",
      [
       "Sedasyon",
       "Deliryum / antikolinerjik"
      ],
      false
     ]
    ],
    "metadon": [
     [
      2,
      "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon ve deliryum açısından izlem önerilir.",
      [
       "Sedasyon",
       "Deliryum / antikolinerjik"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon ve deliryum açısından izlem önerilir.",
      [
       "Sedasyon",
       "Deliryum / antikolinerjik"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon ve deliryum açısından izlem önerilir.",
      [
       "Sedasyon",
       "Deliryum / antikolinerjik"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioidler ve diğer SSS depresanlarıyla birlikte ek sedasyon ve deliryum açısından izlem önerilir.",
      [
       "Sedasyon",
       "Deliryum / antikolinerjik"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "sertralin",
   "ad": "Sertralin",
   "grup": "Antidepresanlar: SSRI",
   "karar": "ver",
   "madde": [
    "Sertralin tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi antidepresan kesilme sendromuna yol açabilir.",
    "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması; analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
    "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
    "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
    "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir; yüksek kanama riskli cerrahide (ortopedi, nöroşirürji) bu açıdan dikkatli olunması önerilir. İlacın bu nedenle rutin olarak kesilmesi önerilmez.",
    "Uygunsuz ADH (antidiüretik hormon) salınımı sendromuna bağlı hiponatremi gelişebileceğinden (özellikle hipovolemi ve diüretik kullanımında) elektrolit takibi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "morfin": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "ondansetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metronidazol": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ],
    "nsaii": [
     [
      4,
      "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir;",
      [
       "Kanama"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "fluoksetin",
   "ad": "Fluoksetin",
   "grup": "Antidepresanlar: SSRI",
   "karar": "ver",
   "madde": [
    "Fluoksetin tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi antidepresan kesilme sendromuna yol açabilir.",
    "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması; analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir. Fluoksetin CYP2D6 enzimini inhibe ettiğinden kodein, tramadol, oksikodon ve hidrokodonun analjezik etkisi azalabilir; bu nedenle de analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
    "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
    "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
    "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir; yüksek kanama riskli cerrahide (ortopedi, nöroşirürji) bu açıdan dikkatli olunması önerilir. İlacın bu nedenle rutin olarak kesilmesi önerilmez.",
    "Uygunsuz ADH (antidiüretik hormon) salınımı sendromuna bağlı hiponatremi gelişebileceğinden (özellikle hipovolemi ve diüretik kullanımında) elektrolit takibi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      1,
      "Fluoksetin CYP2D6 enzimini inhibe ettiğinden kodein, tramadol, oksikodon ve hidrokodonun analjezik etkisi azalabilir;",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ],
     [
      1,
      "bu nedenle de analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "morfin": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ],
     [
      1,
      "bu nedenle de analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "ondansetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metronidazol": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ],
    "nsaii": [
     [
      4,
      "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir;",
      [
       "Kanama"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "essitalopram",
   "ad": "Essitalopram",
   "grup": "Antidepresanlar: SSRI",
   "karar": "ver",
   "madde": [
    "Essitalopram tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi antidepresan kesilme sendromuna yol açabilir.",
    "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması; analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
    "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
    "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
    "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir; yüksek kanama riskli cerrahide (ortopedi, nöroşirürji) bu açıdan dikkatli olunması önerilir. İlacın bu nedenle rutin olarak kesilmesi önerilmez.",
    "Uygunsuz ADH (antidiüretik hormon) salınımı sendromuna bağlı hiponatremi gelişebileceğinden (özellikle hipovolemi ve diüretik kullanımında) elektrolit takibi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "morfin": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "ondansetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metronidazol": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ],
    "nsaii": [
     [
      4,
      "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir;",
      [
       "Kanama"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "sitalopram",
   "ad": "Sitalopram",
   "grup": "Antidepresanlar: SSRI",
   "karar": "ver",
   "madde": [
    "Sitalopram tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi antidepresan kesilme sendromuna yol açabilir.",
    "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması; analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
    "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
    "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
    "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir; yüksek kanama riskli cerrahide (ortopedi, nöroşirürji) bu açıdan dikkatli olunması önerilir. İlacın bu nedenle rutin olarak kesilmesi önerilmez.",
    "Uygunsuz ADH (antidiüretik hormon) salınımı sendromuna bağlı hiponatremi gelişebileceğinden (özellikle hipovolemi ve diüretik kullanımında) elektrolit takibi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "morfin": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "ondansetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metronidazol": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ],
    "nsaii": [
     [
      4,
      "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir;",
      [
       "Kanama"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "paroksetin",
   "ad": "Paroksetin",
   "grup": "Antidepresanlar: SSRI",
   "karar": "ver",
   "madde": [
    "Paroksetin tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi antidepresan kesilme sendromuna yol açabilir.",
    "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması; analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir. Paroksetin CYP2D6 enzimini inhibe ettiğinden kodein, tramadol, oksikodon ve hidrokodonun analjezik etkisi azalabilir; bu nedenle de analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
    "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
    "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
    "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir; yüksek kanama riskli cerrahide (ortopedi, nöroşirürji) bu açıdan dikkatli olunması önerilir. İlacın bu nedenle rutin olarak kesilmesi önerilmez.",
    "Uygunsuz ADH (antidiüretik hormon) salınımı sendromuna bağlı hiponatremi gelişebileceğinden (özellikle hipovolemi ve diüretik kullanımında) elektrolit takibi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      1,
      "Paroksetin CYP2D6 enzimini inhibe ettiğinden kodein, tramadol, oksikodon ve hidrokodonun analjezik etkisi azalabilir;",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ],
     [
      1,
      "bu nedenle de analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "morfin": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ],
     [
      1,
      "bu nedenle de analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "ondansetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metronidazol": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ],
    "nsaii": [
     [
      4,
      "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir;",
      [
       "Kanama"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "fluvoksamin",
   "ad": "Fluvoksamin",
   "grup": "Antidepresanlar: SSRI",
   "karar": "ver",
   "madde": [
    "Fluvoksamin tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi antidepresan kesilme sendromuna yol açabilir.",
    "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması; analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
    "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
    "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
    "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir; yüksek kanama riskli cerrahide (ortopedi, nöroşirürji) bu açıdan dikkatli olunması önerilir. İlacın bu nedenle rutin olarak kesilmesi önerilmez.",
    "Uygunsuz ADH (antidiüretik hormon) salınımı sendromuna bağlı hiponatremi gelişebileceğinden (özellikle hipovolemi ve diüretik kullanımında) elektrolit takibi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "morfin": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "ondansetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metronidazol": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte kullanımda QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ],
    "nsaii": [
     [
      4,
      "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir;",
      [
       "Kanama"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "venlafaksin",
   "ad": "Venlafaksin",
   "grup": "Antidepresanlar: SNRI",
   "karar": "ver",
   "madde": [
    "Venlafaksin tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi kesilme sendromuna yol açabileceğinden kesilmemesi önerilir.",
    "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması; analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
    "Ondansetron, haloperidol, metadon ve halojenli inhalasyon anestezikleri gibi QT uzatan ilaçlarla birlikte aritmi riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir. 5-HT3 antagonistleri kullanılırsa serotonin sendromu açısından da izlem önerilir.",
    "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
    "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir; yüksek kanama riskli cerrahide (ortopedi, nöroşirürji) bu açıdan dikkatli olunması önerilir. İlacın bu nedenle rutin olarak kesilmesi önerilmez.",
    "Hipertansiyon ve taşikardiyi artırabileceğinden hemodinamik izlem; Uygunsuz ADH (antidiüretik hormon) salınımı sendromuna bağlı hiponatremi açısından elektrolit takibi önerilir. Böbrek fonksiyon bozukluğunda doz ayarı gerekir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      2,
      "Ondansetron, haloperidol, metadon ve halojenli inhalasyon anestezikleri gibi QT uzatan ilaçlarla birlikte aritmi riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "morfin": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "ondansetron": [
     [
      2,
      "Ondansetron, haloperidol, metadon ve halojenli inhalasyon anestezikleri gibi QT uzatan ilaçlarla birlikte aritmi riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "5-HT3 antagonistleri kullanılırsa serotonin sendromu açısından da izlem önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Ondansetron, haloperidol, metadon ve halojenli inhalasyon anestezikleri gibi QT uzatan ilaçlarla birlikte aritmi riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "haloperidol": [
     [
      2,
      "Ondansetron, haloperidol, metadon ve halojenli inhalasyon anestezikleri gibi QT uzatan ilaçlarla birlikte aritmi riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      2,
      "5-HT3 antagonistleri kullanılırsa serotonin sendromu açısından da izlem önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ],
    "nsaii": [
     [
      4,
      "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir;",
      [
       "Kanama"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "duloksetin",
   "ad": "Duloksetin",
   "grup": "Antidepresanlar: SNRI",
   "karar": "ver",
   "madde": [
    "Duloksetin tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi kesilme sendromuna yol açabileceğinden kesilmemesi önerilir.",
    "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması; analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
    "Ondansetron ve diğer 5-HT3 antagonistleri kullanılırsa serotonin sendromu açısından izlem önerilir.",
    "Duloksetin CYP2D6 inhibitörü olduğundan prometazin, proklorperazin, tramadol ve tapentadol toksisitesi riski artabilir.",
    "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
    "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir; yüksek kanama riskli cerrahide (ortopedi, nöroşirürji) bu açıdan dikkatli olunması önerilir. İlacın bu nedenle rutin olarak kesilmesi önerilmez.",
    "Hipertansiyon ve taşikardiyi artırabileceğinden hemodinamik izlem; Uygunsuz ADH (antidiüretik hormon) salınımı sendromuna bağlı hiponatremi açısından elektrolit takibi önerilir. Böbrek fonksiyon bozukluğunda doz ayarı gerekir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      3,
      "Duloksetin CYP2D6 inhibitörü olduğundan prometazin, proklorperazin, tramadol ve tapentadol toksisitesi riski artabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "morfin": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "ondansetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri kullanılırsa serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      2,
      "Ondansetron ve diğer 5-HT3 antagonistleri kullanılırsa serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "prometazin": [
     [
      3,
      "Duloksetin CYP2D6 inhibitörü olduğundan prometazin, proklorperazin, tramadol ve tapentadol toksisitesi riski artabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      4,
      "Metoklopramid, ekstrapiramidal reaksiyon ve nöroleptik malign sendrom riski nedeniyle dikkatli kullanılmalıdır.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ],
    "nsaii": [
     [
      5,
      "Antikoagülan, antiplatelet ve NSAİİ ile birlikte perioperatif kanama riski artabilir;",
      [
       "Kanama"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "amitriptilin",
   "ad": "Amitriptilin",
   "grup": "Antidepresanlar: diğerleri",
   "karar": "ver",
   "madde": [
    "Amitriptilin tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi kesilme belirtilerine yol açabilir.",
    "Efedrin gibi indirekt etkili sempatomimetikler ile epinefrin, norepinefrin ve dobutamin birlikte kullanıldığında ani kan basıncı artışı ve aritmi gelişebileceğinden dikkatli titrasyon önerilir. Kronik kullanım perioperatif hipotansiyona yol açabilir; bu durumda vazopressör olarak norepinefrin tercih edilmesi önerilir.",
    "Kardiyak iletim üzerine etkileri (QRS genişlemesi, QTc uzaması, dal bloğu) nedeniyle preoperatif EKG değerlendirmesi önerilir. Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
    "Glikopirolat, skopolamin ve atropin gibi antikolinerjik ilaçlarla ek antikolinerjik etki ve postoperatif deliryum riski artabilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; tramadol ile serotonin sendromu; NSAİİ ile kanama riski açısından dikkatli olunması önerilir. Ketamin ve pankuronyum dikkatli kullanılmalıdır.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "efedrin": [
     [
      1,
      "Efedrin gibi indirekt etkili sempatomimetikler ile epinefrin, norepinefrin ve dobutamin birlikte kullanıldığında ani kan basıncı artışı ve aritmi gelişebileceğinden dikkatli titrasyon önerilir.",
      [
       "QT ve aritmi",
       "Kan basıncı / kalp hızı"
      ],
      false
     ]
    ],
    "norepinefrin": [
     [
      1,
      "Efedrin gibi indirekt etkili sempatomimetikler ile epinefrin, norepinefrin ve dobutamin birlikte kullanıldığında ani kan basıncı artışı ve aritmi gelişebileceğinden dikkatli titrasyon önerilir.",
      [
       "QT ve aritmi",
       "Kan basıncı / kalp hızı"
      ],
      false
     ],
     [
      1,
      "bu durumda vazopressör olarak norepinefrin tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "ondansetron": [
     [
      2,
      "Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      2,
      "Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metronidazol": [
     [
      2,
      "Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "atropin": [
     [
      3,
      "Glikopirolat, skopolamin ve atropin gibi antikolinerjik ilaçlarla ek antikolinerjik etki ve postoperatif deliryum riski artabilir.",
      [
       "Deliryum / antikolinerjik"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ],
     [
      4,
      "tramadol ile serotonin sendromu;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "metadon": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "nsaii": [
     [
      4,
      "NSAİİ ile kanama riski açısından dikkatli olunması önerilir.",
      [
       "Kanama"
      ],
      false
     ]
    ],
    "ketamin": [
     [
      4,
      "Ketamin ve pankuronyum dikkatli kullanılmalıdır.",
      [],
      false
     ]
    ],
    "rokuronyum": [
     [
      4,
      "Ketamin ve pankuronyum dikkatli kullanılmalıdır.",
      [],
      false
     ]
    ]
   }
  },
  {
   "id": "klomipramin",
   "ad": "Klomipramin",
   "grup": "Antidepresanlar: diğerleri",
   "karar": "ver",
   "madde": [
    "Klomipramin tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi kesilme belirtilerine yol açabilir.",
    "Efedrin gibi indirekt etkili sempatomimetikler ile epinefrin, norepinefrin ve dobutamin birlikte kullanıldığında ani kan basıncı artışı ve aritmi gelişebileceğinden dikkatli titrasyon önerilir. Kronik kullanım perioperatif hipotansiyona yol açabilir; bu durumda vazopressör olarak norepinefrin tercih edilmesi önerilir.",
    "Kardiyak iletim üzerine etkileri (QRS genişlemesi, QTc uzaması, dal bloğu) nedeniyle preoperatif EKG değerlendirmesi önerilir. Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
    "Glikopirolat, skopolamin ve atropin gibi antikolinerjik ilaçlarla ek antikolinerjik etki ve postoperatif deliryum riski artabilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; tramadol ile serotonin sendromu; NSAİİ ile kanama riski açısından dikkatli olunması önerilir. Ketamin ve pankuronyum dikkatli kullanılmalıdır.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "efedrin": [
     [
      1,
      "Efedrin gibi indirekt etkili sempatomimetikler ile epinefrin, norepinefrin ve dobutamin birlikte kullanıldığında ani kan basıncı artışı ve aritmi gelişebileceğinden dikkatli titrasyon önerilir.",
      [
       "QT ve aritmi",
       "Kan basıncı / kalp hızı"
      ],
      false
     ]
    ],
    "norepinefrin": [
     [
      1,
      "Efedrin gibi indirekt etkili sempatomimetikler ile epinefrin, norepinefrin ve dobutamin birlikte kullanıldığında ani kan basıncı artışı ve aritmi gelişebileceğinden dikkatli titrasyon önerilir.",
      [
       "QT ve aritmi",
       "Kan basıncı / kalp hızı"
      ],
      false
     ],
     [
      1,
      "bu durumda vazopressör olarak norepinefrin tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "ondansetron": [
     [
      2,
      "Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      2,
      "Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metronidazol": [
     [
      2,
      "Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "atropin": [
     [
      3,
      "Glikopirolat, skopolamin ve atropin gibi antikolinerjik ilaçlarla ek antikolinerjik etki ve postoperatif deliryum riski artabilir.",
      [
       "Deliryum / antikolinerjik"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ],
     [
      4,
      "tramadol ile serotonin sendromu;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "metadon": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "nsaii": [
     [
      4,
      "NSAİİ ile kanama riski açısından dikkatli olunması önerilir.",
      [
       "Kanama"
      ],
      false
     ]
    ],
    "ketamin": [
     [
      4,
      "Ketamin ve pankuronyum dikkatli kullanılmalıdır.",
      [],
      false
     ]
    ],
    "rokuronyum": [
     [
      4,
      "Ketamin ve pankuronyum dikkatli kullanılmalıdır.",
      [],
      false
     ]
    ]
   }
  },
  {
   "id": "imipramin",
   "ad": "İmipramin",
   "grup": "Antidepresanlar: diğerleri",
   "karar": "ver",
   "madde": [
    "İmipramin tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi kesilme belirtilerine yol açabilir.",
    "Efedrin gibi indirekt etkili sempatomimetikler ile epinefrin, norepinefrin ve dobutamin birlikte kullanıldığında ani kan basıncı artışı ve aritmi gelişebileceğinden dikkatli titrasyon önerilir. Kronik kullanım perioperatif hipotansiyona yol açabilir; bu durumda vazopressör olarak norepinefrin tercih edilmesi önerilir.",
    "Kardiyak iletim üzerine etkileri (QRS genişlemesi, QTc uzaması, dal bloğu) nedeniyle preoperatif EKG değerlendirmesi önerilir. Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
    "Glikopirolat, skopolamin ve atropin gibi antikolinerjik ilaçlarla ek antikolinerjik etki ve postoperatif deliryum riski artabilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; tramadol ile serotonin sendromu; NSAİİ ile kanama riski açısından dikkatli olunması önerilir. Ketamin ve pankuronyum dikkatli kullanılmalıdır.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "efedrin": [
     [
      1,
      "Efedrin gibi indirekt etkili sempatomimetikler ile epinefrin, norepinefrin ve dobutamin birlikte kullanıldığında ani kan basıncı artışı ve aritmi gelişebileceğinden dikkatli titrasyon önerilir.",
      [
       "QT ve aritmi",
       "Kan basıncı / kalp hızı"
      ],
      false
     ]
    ],
    "norepinefrin": [
     [
      1,
      "Efedrin gibi indirekt etkili sempatomimetikler ile epinefrin, norepinefrin ve dobutamin birlikte kullanıldığında ani kan basıncı artışı ve aritmi gelişebileceğinden dikkatli titrasyon önerilir.",
      [
       "QT ve aritmi",
       "Kan basıncı / kalp hızı"
      ],
      false
     ],
     [
      1,
      "bu durumda vazopressör olarak norepinefrin tercih edilmesi önerilir.",
      [],
      true
     ]
    ],
    "ondansetron": [
     [
      2,
      "Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      2,
      "Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metronidazol": [
     [
      2,
      "Halojenli inhalasyon anestezikleri, 5-HT3 antagonistleri ve metronidazol gibi QT uzatan ilaçlarla birlikte aritmi riski artar.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "atropin": [
     [
      3,
      "Glikopirolat, skopolamin ve atropin gibi antikolinerjik ilaçlarla ek antikolinerjik etki ve postoperatif deliryum riski artabilir.",
      [
       "Deliryum / antikolinerjik"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ],
     [
      4,
      "tramadol ile serotonin sendromu;",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "metadon": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      4,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "nsaii": [
     [
      4,
      "NSAİİ ile kanama riski açısından dikkatli olunması önerilir.",
      [
       "Kanama"
      ],
      false
     ]
    ],
    "ketamin": [
     [
      4,
      "Ketamin ve pankuronyum dikkatli kullanılmalıdır.",
      [],
      false
     ]
    ],
    "rokuronyum": [
     [
      4,
      "Ketamin ve pankuronyum dikkatli kullanılmalıdır.",
      [],
      false
     ]
    ]
   }
  },
  {
   "id": "mirtazapin",
   "ad": "Mirtazapin",
   "grup": "Antidepresanlar: diğerleri",
   "karar": "ver",
   "madde": [
    "Mirtazapin tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmemesi önerilir.",
    "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması; analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
    "Ondansetron, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
    "Benzodiazepinler ve diğer SSS depresanlarıyla ek sedasyon açısından izlem önerilir.",
    "Varfarin ile birlikte kanama riski artabilir; hiponatremi açısından elektrolit takibi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      3,
      "Benzodiazepinler ve diğer SSS depresanlarıyla ek sedasyon açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      3,
      "Benzodiazepinler ve diğer SSS depresanlarıyla ek sedasyon açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Serotonin sendromu riski nedeniyle perioperatif dönemde tramadol, meperidin ve metadondan kaçınılması;",
      [
       "Serotonin sendromu"
      ],
      false
     ],
     [
      2,
      "Ondansetron, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ],
     [
      3,
      "Benzodiazepinler ve diğer SSS depresanlarıyla ek sedasyon açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ],
     [
      3,
      "Benzodiazepinler ve diğer SSS depresanlarıyla ek sedasyon açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      1,
      "analjezide morfin, hidromorfon veya fentanil tercih edilmesi önerilir.",
      [],
      true
     ],
     [
      3,
      "Benzodiazepinler ve diğer SSS depresanlarıyla ek sedasyon açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      2,
      "Ondansetron, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      2,
      "Ondansetron, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metronidazol": [
     [
      2,
      "Ondansetron, halojenli inhalasyon anestezikleri, metadon ve metronidazol gibi QT uzatan/serotonerjik ilaçlarla birlikte QT uzaması, aritmi ve serotonin sendromu açısından izlem önerilir.",
      [
       "Serotonin sendromu",
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      3,
      "Benzodiazepinler ve diğer SSS depresanlarıyla ek sedasyon açısından izlem önerilir.",
      [
       "Sedasyon"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "trazodon",
   "ad": "Trazodon",
   "grup": "Antidepresanlar: diğerleri",
   "karar": "ver",
   "madde": [
    "Trazodon tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi belirgin kesilme belirtilerine yol açabileceğinden kesilmemesi önerilir.",
    "Halojenli inhalasyon anestezikleri, sevofluran, metadon, droperidol, metronidazol ve 5-HT3 antagonistleri gibi QT uzatan ilaçlarla birlikte aritmi riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Serotonerjik opioidler (tramadol, meperidin, metadon) ve antiemetiklerle (ondansetron, granisetron) serotonin sendromu açısından dikkatli olunması önerilir.",
    "Aşırı sedasyon ve postüral hipotansiyon açısından izlem; hipovolemide hiponatremi açısından elektrolit takibi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "metadon": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, sevofluran, metadon, droperidol, metronidazol ve 5-HT3 antagonistleri gibi QT uzatan ilaçlarla birlikte aritmi riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Serotonerjik opioidler (tramadol, meperidin, metadon) ve antiemetiklerle (ondansetron, granisetron) serotonin sendromu açısından dikkatli olunması önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, sevofluran, metadon, droperidol, metronidazol ve 5-HT3 antagonistleri gibi QT uzatan ilaçlarla birlikte aritmi riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Serotonerjik opioidler (tramadol, meperidin, metadon) ve antiemetiklerle (ondansetron, granisetron) serotonin sendromu açısından dikkatli olunması önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, sevofluran, metadon, droperidol, metronidazol ve 5-HT3 antagonistleri gibi QT uzatan ilaçlarla birlikte aritmi riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Serotonerjik opioidler (tramadol, meperidin, metadon) ve antiemetiklerle (ondansetron, granisetron) serotonin sendromu açısından dikkatli olunması önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "droperidol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, sevofluran, metadon, droperidol, metronidazol ve 5-HT3 antagonistleri gibi QT uzatan ilaçlarla birlikte aritmi riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, sevofluran, metadon, droperidol, metronidazol ve 5-HT3 antagonistleri gibi QT uzatan ilaçlarla birlikte aritmi riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "metronidazol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, sevofluran, metadon, droperidol, metronidazol ve 5-HT3 antagonistleri gibi QT uzatan ilaçlarla birlikte aritmi riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Serotonerjik opioidler (tramadol, meperidin, metadon) ve antiemetiklerle (ondansetron, granisetron) serotonin sendromu açısından dikkatli olunması önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Serotonerjik opioidler (tramadol, meperidin, metadon) ve antiemetiklerle (ondansetron, granisetron) serotonin sendromu açısından dikkatli olunması önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "bupropion",
   "ad": "Bupropion",
   "grup": "Antidepresanlar: diğerleri",
   "karar": "ver",
   "madde": [
    "Bupropion tedavisine operasyon günü dahil devam edilmesi önerilir.",
    "Bupropion nöbet eşiğini düşürür. Ketamin, lidokain, bupivakain, sistemik steroidler, penisilin grubu antibiyotikler, prometazin, neostigmin ve antikolinerjikler gibi nöbet eşiğini düşüren ilaçlarla birlikte nöbet riski açısından dikkatli olunması önerilir.",
    "Bupropion CYP2D6 inhibitörü olduğundan oksikodon, kodein, tramadol, ondansetron, metoklopramid, metoprolol, propranolol ve karvedilol düzeyleri artabilir.",
    "Böbrek veya karaciğer fonksiyon bozukluğunda doz ayarı gerekir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "prometazin": [
     [
      1,
      "Ketamin, lidokain, bupivakain, sistemik steroidler, penisilin grubu antibiyotikler, prometazin, neostigmin ve antikolinerjikler gibi nöbet eşiğini düşüren ilaçlarla birlikte nöbet riski açısından dikkatli olunması önerilir.",
      [
       "Nöbet"
      ],
      false
     ]
    ],
    "ketamin": [
     [
      1,
      "Ketamin, lidokain, bupivakain, sistemik steroidler, penisilin grubu antibiyotikler, prometazin, neostigmin ve antikolinerjikler gibi nöbet eşiğini düşüren ilaçlarla birlikte nöbet riski açısından dikkatli olunması önerilir.",
      [
       "Nöbet"
      ],
      false
     ]
    ],
    "lokal": [
     [
      1,
      "Ketamin, lidokain, bupivakain, sistemik steroidler, penisilin grubu antibiyotikler, prometazin, neostigmin ve antikolinerjikler gibi nöbet eşiğini düşüren ilaçlarla birlikte nöbet riski açısından dikkatli olunması önerilir.",
      [
       "Nöbet"
      ],
      false
     ]
    ],
    "neostigmin": [
     [
      1,
      "Ketamin, lidokain, bupivakain, sistemik steroidler, penisilin grubu antibiyotikler, prometazin, neostigmin ve antikolinerjikler gibi nöbet eşiğini düşüren ilaçlarla birlikte nöbet riski açısından dikkatli olunması önerilir.",
      [
       "Nöbet"
      ],
      false
     ]
    ],
    "atropin": [
     [
      1,
      "Ketamin, lidokain, bupivakain, sistemik steroidler, penisilin grubu antibiyotikler, prometazin, neostigmin ve antikolinerjikler gibi nöbet eşiğini düşüren ilaçlarla birlikte nöbet riski açısından dikkatli olunması önerilir.",
      [
       "Nöbet"
      ],
      false
     ]
    ],
    "steroid": [
     [
      1,
      "Ketamin, lidokain, bupivakain, sistemik steroidler, penisilin grubu antibiyotikler, prometazin, neostigmin ve antikolinerjikler gibi nöbet eşiğini düşüren ilaçlarla birlikte nöbet riski açısından dikkatli olunması önerilir.",
      [
       "Nöbet"
      ],
      false
     ]
    ],
    "penisilin": [
     [
      1,
      "Ketamin, lidokain, bupivakain, sistemik steroidler, penisilin grubu antibiyotikler, prometazin, neostigmin ve antikolinerjikler gibi nöbet eşiğini düşüren ilaçlarla birlikte nöbet riski açısından dikkatli olunması önerilir.",
      [
       "Nöbet"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Bupropion CYP2D6 inhibitörü olduğundan oksikodon, kodein, tramadol, ondansetron, metoklopramid, metoprolol, propranolol ve karvedilol düzeyleri artabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      2,
      "Bupropion CYP2D6 inhibitörü olduğundan oksikodon, kodein, tramadol, ondansetron, metoklopramid, metoprolol, propranolol ve karvedilol düzeyleri artabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      2,
      "Bupropion CYP2D6 inhibitörü olduğundan oksikodon, kodein, tramadol, ondansetron, metoklopramid, metoprolol, propranolol ve karvedilol düzeyleri artabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "lityum",
   "ad": "Lityum",
   "grup": "Duygudurum düzenleyiciler",
   "islemeGore": {
    "minor": {
     "karar": "ver",
     "madde": [
      "Planlanan işlem minör olduğundan lityum tedavisine operasyon günü dahil devam edilmesi önerilir.",
      "Preoperatif EKG, böbrek fonksiyon testleri, elektrolitler ve TSH değerlendirilmesi önerilir.",
      "NSAİİ, diüretik, ACE inhibitörü/ARB, diltiazem, verapamil ve metronidazol lityum düzeyini artırabileceğinden mümkünse kaçınılması ve hidrasyonun korunması önerilir.",
      "Nondepolarizan kas gevşeticiler ve süksinilkolinin etkisi artabilir. Serotonerjik ilaçlarla (tramadol, meperidin, metadon, ondansetron vb.) serotonin sendromu; haloperidol, droperidol, prometazin ve proklorperazin ile ekstrapiramidal belirtiler açısından dikkatli olunması önerilir.",
      "Postoperatif dönemde BUN/kreatinin, elektrolitler, idrar çıkışı ve lityum düzeyi takibi; ataksi, kaba tremor, ajitasyon, deliryum, letarji ve miyoklonus gibi toksisite bulguları açısından izlem önerilir.",
      "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
     ],
     "tepsi": {
      "nsaii": [
       [
        2,
        "NSAİİ, diüretik, ACE inhibitörü/ARB, diltiazem, verapamil ve metronidazol lityum düzeyini artırabileceğinden mümkünse kaçınılması ve hidrasyonun korunması önerilir.",
        [
         "İlaç etkisi değişir"
        ],
        false
       ]
      ],
      "metronidazol": [
       [
        2,
        "NSAİİ, diüretik, ACE inhibitörü/ARB, diltiazem, verapamil ve metronidazol lityum düzeyini artırabileceğinden mümkünse kaçınılması ve hidrasyonun korunması önerilir.",
        [
         "İlaç etkisi değişir"
        ],
        false
       ]
      ],
      "rokuronyum": [
       [
        3,
        "Nondepolarizan kas gevşeticiler ve süksinilkolinin etkisi artabilir.",
        [
         "İlaç etkisi değişir"
        ],
        false
       ]
      ],
      "suksinilkolin": [
       [
        3,
        "Nondepolarizan kas gevşeticiler ve süksinilkolinin etkisi artabilir.",
        [
         "İlaç etkisi değişir"
        ],
        false
       ]
      ],
      "tramadol": [
       [
        3,
        "Serotonerjik ilaçlarla (tramadol, meperidin, metadon, ondansetron vb.) serotonin sendromu;",
        [
         "Serotonin sendromu"
        ],
        false
       ]
      ],
      "meperidin": [
       [
        3,
        "Serotonerjik ilaçlarla (tramadol, meperidin, metadon, ondansetron vb.) serotonin sendromu;",
        [
         "Serotonin sendromu"
        ],
        false
       ]
      ],
      "metadon": [
       [
        3,
        "Serotonerjik ilaçlarla (tramadol, meperidin, metadon, ondansetron vb.) serotonin sendromu;",
        [
         "Serotonin sendromu"
        ],
        false
       ]
      ],
      "ondansetron": [
       [
        3,
        "Serotonerjik ilaçlarla (tramadol, meperidin, metadon, ondansetron vb.) serotonin sendromu;",
        [
         "Serotonin sendromu"
        ],
        false
       ]
      ],
      "droperidol": [
       [
        3,
        "haloperidol, droperidol, prometazin ve proklorperazin ile ekstrapiramidal belirtiler açısından dikkatli olunması önerilir.",
        [
         "EPS / NMS"
        ],
        false
       ]
      ],
      "prometazin": [
       [
        3,
        "haloperidol, droperidol, prometazin ve proklorperazin ile ekstrapiramidal belirtiler açısından dikkatli olunması önerilir.",
        [
         "EPS / NMS"
        ],
        false
       ]
      ],
      "haloperidol": [
       [
        3,
        "haloperidol, droperidol, prometazin ve proklorperazin ile ekstrapiramidal belirtiler açısından dikkatli olunması önerilir.",
        [
         "EPS / NMS"
        ],
        false
       ]
      ]
     }
    },
    "major": {
     "karar": "kes72",
     "madde": [
      "Planlanan işlem sıvı kayması, kan kaybı ve akut böbrek hasarı riski taşıyan majör cerrahi olduğundan lityum tedavisinin operasyondan 72 saat önce kesilmesi önerilir.",
      "Preoperatif EKG, böbrek fonksiyon testleri, elektrolitler ve TSH değerlendirilmesi önerilir.",
      "Nondepolarizan kas gevşeticiler ve süksinilkolinin etkisi artabilir. Serotonerjik ilaçlarla (tramadol, meperidin, metadon, ondansetron vb.) serotonin sendromu; haloperidol, droperidol, prometazin ve proklorperazin ile ekstrapiramidal belirtiler açısından dikkatli olunması önerilir.",
      "Lityuma bağlı nefrojenik diabetes insipidus postoperatif dönemde ortaya çıkabileceğinden idrar çıkışı ve sıvı-elektrolit takibi önerilir.",
      "Postoperatif dönemde oral alım sağlanıp sıvı dengesi stabil olduğunda lityuma önceki dozla yeniden başlanması ve 5–7 gün içinde serum lityum düzeyi bakılması önerilir. Yeniden başlandıktan sonra NSAİİ, diüretik ve ACE inhibitörü/ARB kullanımından mümkünse kaçınılması önerilir."
     ],
     "tepsi": {
      "rokuronyum": [
       [
        2,
        "Nondepolarizan kas gevşeticiler ve süksinilkolinin etkisi artabilir.",
        [
         "İlaç etkisi değişir"
        ],
        false
       ]
      ],
      "suksinilkolin": [
       [
        2,
        "Nondepolarizan kas gevşeticiler ve süksinilkolinin etkisi artabilir.",
        [
         "İlaç etkisi değişir"
        ],
        false
       ]
      ],
      "tramadol": [
       [
        2,
        "Serotonerjik ilaçlarla (tramadol, meperidin, metadon, ondansetron vb.) serotonin sendromu;",
        [
         "Serotonin sendromu"
        ],
        false
       ]
      ],
      "meperidin": [
       [
        2,
        "Serotonerjik ilaçlarla (tramadol, meperidin, metadon, ondansetron vb.) serotonin sendromu;",
        [
         "Serotonin sendromu"
        ],
        false
       ]
      ],
      "metadon": [
       [
        2,
        "Serotonerjik ilaçlarla (tramadol, meperidin, metadon, ondansetron vb.) serotonin sendromu;",
        [
         "Serotonin sendromu"
        ],
        false
       ]
      ],
      "ondansetron": [
       [
        2,
        "Serotonerjik ilaçlarla (tramadol, meperidin, metadon, ondansetron vb.) serotonin sendromu;",
        [
         "Serotonin sendromu"
        ],
        false
       ]
      ],
      "droperidol": [
       [
        2,
        "haloperidol, droperidol, prometazin ve proklorperazin ile ekstrapiramidal belirtiler açısından dikkatli olunması önerilir.",
        [
         "EPS / NMS"
        ],
        false
       ]
      ],
      "prometazin": [
       [
        2,
        "haloperidol, droperidol, prometazin ve proklorperazin ile ekstrapiramidal belirtiler açısından dikkatli olunması önerilir.",
        [
         "EPS / NMS"
        ],
        false
       ]
      ],
      "haloperidol": [
       [
        2,
        "haloperidol, droperidol, prometazin ve proklorperazin ile ekstrapiramidal belirtiler açısından dikkatli olunması önerilir.",
        [
         "EPS / NMS"
        ],
        false
       ]
      ],
      "nsaii": [
       [
        4,
        "Yeniden başlandıktan sonra NSAİİ, diüretik ve ACE inhibitörü/ARB kullanımından mümkünse kaçınılması önerilir.",
        [],
        false
       ]
      ]
     }
    }
   }
  },
  {
   "id": "karbamazepin",
   "ad": "Karbamazepin",
   "grup": "Duygudurum düzenleyiciler",
   "karar": "ver",
   "madde": [
    "Karbamazepin tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi nöbet eşiğini düşürebilir.",
    "Karbamazepin güçlü bir enzim indükleyicisidir; midazolam, alprazolam, klonazepam, haloperidol ve kortikosteroidlerin etkinliği azalabilir, doz gereksinimi artabilir. Varfarin, apiksaban ve dabigatranın etkisi de azalabilir.",
    "Nondepolarizan kas gevşeticilerin etki süresi kısalabilir.",
    "Omeprazol, metronidazol, simetidin ve siprofloksasin karbamazepin düzeyini artırarak toksisiteye yol açabilir.",
    "Serotonerjik opioidler, tramadol, tapentadol ve 5-HT3 antagonistleriyle serotonin sendromu açısından dikkatli olunması önerilir.",
    "Hiponatremi ve lökopeni yapabileceğinden güncel elektrolit ve hemogram değerlendirilmesi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "midazolam": [
     [
      1,
      "midazolam, alprazolam, klonazepam, haloperidol ve kortikosteroidlerin etkinliği azalabilir, doz gereksinimi artabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "haloperidol": [
     [
      1,
      "midazolam, alprazolam, klonazepam, haloperidol ve kortikosteroidlerin etkinliği azalabilir, doz gereksinimi artabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "steroid": [
     [
      1,
      "midazolam, alprazolam, klonazepam, haloperidol ve kortikosteroidlerin etkinliği azalabilir, doz gereksinimi artabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "rokuronyum": [
     [
      2,
      "Nondepolarizan kas gevşeticilerin etki süresi kısalabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "metronidazol": [
     [
      3,
      "Omeprazol, metronidazol, simetidin ve siprofloksasin karbamazepin düzeyini artırarak toksisiteye yol açabilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      4,
      "Serotonerjik opioidler, tramadol, tapentadol ve 5-HT3 antagonistleriyle serotonin sendromu açısından dikkatli olunması önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      4,
      "Serotonerjik opioidler, tramadol, tapentadol ve 5-HT3 antagonistleriyle serotonin sendromu açısından dikkatli olunması önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "metadon": [
     [
      4,
      "Serotonerjik opioidler, tramadol, tapentadol ve 5-HT3 antagonistleriyle serotonin sendromu açısından dikkatli olunması önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      4,
      "Serotonerjik opioidler, tramadol, tapentadol ve 5-HT3 antagonistleriyle serotonin sendromu açısından dikkatli olunması önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ],
    "granisetron": [
     [
      4,
      "Serotonerjik opioidler, tramadol, tapentadol ve 5-HT3 antagonistleriyle serotonin sendromu açısından dikkatli olunması önerilir.",
      [
       "Serotonin sendromu"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "valproat",
   "ad": "Valproat",
   "grup": "Duygudurum düzenleyiciler",
   "karar": "ver",
   "madde": [
    "Valproat tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi nöbet eşiğini düşürebilir.",
    "Valproat propofol maruziyetini artırarak sedasyon ve kardiyorespiratuvar depresyonu artırabilir; benzodiazepin ve barbitürat düzeylerini yükseltir. Bu ajanların dozlarının buna göre ayarlanması önerilir.",
    "Nondepolarizan kas gevşeticilere (rokuronyum, vekuronyum) direnç gelişebilir.",
    "Trombositopeni ve karaciğer enzim yüksekliği yapabileceğinden güncel hemogram (trombosit) ve KCFT değerlendirilmesi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "propofol": [
     [
      1,
      "Valproat propofol maruziyetini artırarak sedasyon ve kardiyorespiratuvar depresyonu artırabilir;",
      [
       "Sedasyon",
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      1,
      "benzodiazepin ve barbitürat düzeylerini yükseltir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ],
    "rokuronyum": [
     [
      2,
      "Nondepolarizan kas gevşeticilere (rokuronyum, vekuronyum) direnç gelişebilir.",
      [
       "İlaç etkisi değişir"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "lamotrijin",
   "ad": "Lamotrijin",
   "grup": "Duygudurum düzenleyiciler",
   "karar": "ver",
   "madde": [
    "Lamotrijin tedavisine operasyon günü dahil devam edilmesi önerilir.",
    "Anestezik ilaçlarla bilinen bir etkileşimi yoktur.",
    "Ani kesilmesi nöbet riskini artırabileceğinden kesilmemesi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {}
  },
  {
   "id": "topiramat",
   "ad": "Topiramat",
   "grup": "Duygudurum düzenleyiciler",
   "karar": "ver",
   "madde": [
    "Topiramat tedavisine operasyon günü dahil devam edilmesi önerilir.",
    "Ani kesilmesi nöbet eşiğini düşürebileceğinden kesilmemesi önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {}
  },
  {
   "id": "klorpromazin",
   "ad": "Klorpromazin",
   "grup": "Antipsikotikler",
   "karar": "ver",
   "madde": [
    "Klorpromazin tedavisine operasyon günü dahil devam edilmesi önerilir. Operasyondan kısa süre önce kesilmesi psikotik belirtilerin yinelemesi ve postoperatif konfüzyon/ajitasyon riskini artırır.",
    "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
    "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
    "Antikolinerjik ve alfa-adrenerjik blokaj etkileri nedeniyle belirgin hipotansiyon, taşikardi, ileus ve idrar retansiyonu açısından dikkatli olunması önerilir.",
    "Termoregülasyon bozukluğu (hipotermi/hipertermi), hiperglisemi ve nöroleptik malign sendrom (ateş, kas rijiditesi, otonomik instabilite, bilinç değişikliği, CK artışı) açısından izlem önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "metadon": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "droperidol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "vazopressin": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "propofol": [
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "haloperidol",
   "ad": "Haloperidol",
   "grup": "Antipsikotikler",
   "karar": "ver",
   "madde": [
    "Haloperidol tedavisine operasyon günü dahil devam edilmesi önerilir. Operasyondan kısa süre önce kesilmesi psikotik belirtilerin yinelemesi ve postoperatif konfüzyon/ajitasyon riskini artırır.",
    "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
    "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
    "Perioperatif dönemde ek haloperidol veya droperidol uygulanacaksa QT uzaması açısından toplam yük dikkate alınmalıdır.",
    "Termoregülasyon bozukluğu (hipotermi/hipertermi), hiperglisemi ve nöroleptik malign sendrom (ateş, kas rijiditesi, otonomik instabilite, bilinç değişikliği, CK artışı) açısından izlem önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "metadon": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "droperidol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      4,
      "Perioperatif dönemde ek haloperidol veya droperidol uygulanacaksa QT uzaması açısından toplam yük dikkate alınmalıdır.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "vazopressin": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "propofol": [
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ],
    "haloperidol": [
     [
      4,
      "Perioperatif dönemde ek haloperidol veya droperidol uygulanacaksa QT uzaması açısından toplam yük dikkate alınmalıdır.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "aripiprazol",
   "ad": "Aripiprazol",
   "grup": "Antipsikotikler",
   "karar": "ver",
   "madde": [
    "Aripiprazol tedavisine operasyon günü dahil devam edilmesi önerilir. Operasyondan kısa süre önce kesilmesi psikotik belirtilerin yinelemesi ve postoperatif konfüzyon/ajitasyon riskini artırır.",
    "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
    "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
    "Güçlü CYP3A4 ve CYP2D6 inhibitörleriyle birlikte aripiprazol düzeyi artabilir.",
    "Termoregülasyon bozukluğu (hipotermi/hipertermi), hiperglisemi ve nöroleptik malign sendrom (ateş, kas rijiditesi, otonomik instabilite, bilinç değişikliği, CK artışı) açısından izlem önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "metadon": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "droperidol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "vazopressin": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "propofol": [
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "risperidon",
   "ad": "Risperidon",
   "grup": "Antipsikotikler",
   "karar": "ver",
   "madde": [
    "Risperidon tedavisine operasyon günü dahil devam edilmesi önerilir. Operasyondan kısa süre önce kesilmesi psikotik belirtilerin yinelemesi ve postoperatif konfüzyon/ajitasyon riskini artırır.",
    "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
    "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
    "Risperidon belirgin QT uzamasına yol açabilir. CYP2D6/CYP3A4 inhibitör veya indükleyicileriyle birlikte düzeyi değişebilir; böbrek fonksiyonu bozulursa doz azaltılmalıdır.",
    "Termoregülasyon bozukluğu (hipotermi/hipertermi), hiperglisemi ve nöroleptik malign sendrom (ateş, kas rijiditesi, otonomik instabilite, bilinç değişikliği, CK artışı) açısından izlem önerilir.",
    "Uzun etkili enjektabl form kullanılıyorsa planlanan enjeksiyon takviminin aksatılmaması önerilir. Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "metadon": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "droperidol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "vazopressin": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "propofol": [
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "paliperidon",
   "ad": "Paliperidon",
   "grup": "Antipsikotikler",
   "karar": "ver",
   "madde": [
    "Paliperidon tedavisine operasyon günü dahil devam edilmesi önerilir. Operasyondan kısa süre önce kesilmesi psikotik belirtilerin yinelemesi ve postoperatif konfüzyon/ajitasyon riskini artırır.",
    "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
    "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
    "Antihipertansif ilaçlarla birlikte ortostatik hipotansiyon etkisi artabilir; böbrek fonksiyonu bozulursa doz azaltılmalıdır.",
    "Termoregülasyon bozukluğu (hipotermi/hipertermi), hiperglisemi ve nöroleptik malign sendrom (ateş, kas rijiditesi, otonomik instabilite, bilinç değişikliği, CK artışı) açısından izlem önerilir.",
    "Uzun etkili enjektabl form kullanılıyorsa planlanan enjeksiyon takviminin aksatılmaması önerilir. Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "metadon": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "droperidol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "vazopressin": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "propofol": [
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "klozapin",
   "ad": "Klozapin",
   "grup": "Antipsikotikler",
   "karar": "ver",
   "madde": [
    "Klozapin tedavisine operasyon günü dahil devam edilmesi önerilir. Operasyondan kısa süre önce kesilmesi psikotik belirtilerin yinelemesi ve postoperatif konfüzyon/ajitasyon riskini artırır.",
    "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
    "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
    "Belirgin antikolinerjik etkisi (ileus, idrar retansiyonu) nedeniyle antikolinerjik ilaçlardan mümkünse kaçınılması önerilir.",
    "Nötropeni riski nedeniyle güncel hemogram (nötrofil sayısı) değerlendirilmesi önerilir. Miyokardit açısından göğüs ağrısı, taşikardi veya ateş varlığında değerlendirme yapılmalıdır.",
    "Termoregülasyon bozukluğu (hipotermi/hipertermi), hiperglisemi ve nöroleptik malign sendrom (ateş, kas rijiditesi, otonomik instabilite, bilinç değişikliği, CK artışı) açısından izlem önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "metadon": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "droperidol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "vazopressin": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "propofol": [
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ],
    "atropin": [
     [
      4,
      "Belirgin antikolinerjik etkisi (ileus, idrar retansiyonu) nedeniyle antikolinerjik ilaçlardan mümkünse kaçınılması önerilir.",
      [
       "Deliryum / antikolinerjik"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "olanzapin",
   "ad": "Olanzapin",
   "grup": "Antipsikotikler",
   "karar": "ver",
   "madde": [
    "Olanzapin tedavisine operasyon günü dahil devam edilmesi önerilir. Operasyondan kısa süre önce kesilmesi psikotik belirtilerin yinelemesi ve postoperatif konfüzyon/ajitasyon riskini artırır.",
    "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
    "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
    "Antikolinerjik ilaçlarla birlikte ek antikolinerjik etki ve deliryum riski artabilir.",
    "Termoregülasyon bozukluğu (hipotermi/hipertermi), hiperglisemi ve nöroleptik malign sendrom (ateş, kas rijiditesi, otonomik instabilite, bilinç değişikliği, CK artışı) açısından izlem önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "metadon": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "droperidol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "vazopressin": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "propofol": [
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ],
    "atropin": [
     [
      4,
      "Antikolinerjik ilaçlarla birlikte ek antikolinerjik etki ve deliryum riski artabilir.",
      [
       "Deliryum / antikolinerjik"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "ketiapin",
   "ad": "Ketiapin",
   "grup": "Antipsikotikler",
   "karar": "ver",
   "madde": [
    "Ketiapin tedavisine operasyon günü dahil devam edilmesi önerilir. Operasyondan kısa süre önce kesilmesi psikotik belirtilerin yinelemesi ve postoperatif konfüzyon/ajitasyon riskini artırır.",
    "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
    "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
    "Ortostatik hipotansiyon ve sedasyon belirgin olabilir; antikolinerjik ilaçlarla birlikte ek antikolinerjik etki görülebilir.",
    "Termoregülasyon bozukluğu (hipotermi/hipertermi), hiperglisemi ve nöroleptik malign sendrom (ateş, kas rijiditesi, otonomik instabilite, bilinç değişikliği, CK artışı) açısından izlem önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "metadon": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "droperidol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "vazopressin": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "propofol": [
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ],
    "atropin": [
     [
      4,
      "antikolinerjik ilaçlarla birlikte ek antikolinerjik etki görülebilir.",
      [
       "Deliryum / antikolinerjik"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "lurasidon",
   "ad": "Lurasidon",
   "grup": "Antipsikotikler",
   "karar": "ver",
   "madde": [
    "Lurasidon tedavisine operasyon günü dahil devam edilmesi önerilir. Operasyondan kısa süre önce kesilmesi psikotik belirtilerin yinelemesi ve postoperatif konfüzyon/ajitasyon riskini artırır.",
    "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
    "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
    "Normalde yemekle birlikte alınan bir ilaçtır; açlık nedeniyle dozun atlanmaması önerilir. Eritromisin, siprofloksasin, verapamil ve diltiazem gibi orta düzey CYP3A4 inhibitörleri lurasidon toksisitesi riskini artırır.",
    "Termoregülasyon bozukluğu (hipotermi/hipertermi), hiperglisemi ve nöroleptik malign sendrom (ateş, kas rijiditesi, otonomik instabilite, bilinç değişikliği, CK artışı) açısından izlem önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "metadon": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "droperidol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "vazopressin": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "propofol": [
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "amisulpirid",
   "ad": "Amisülpirid",
   "grup": "Antipsikotikler",
   "karar": "ver",
   "madde": [
    "Amisülpirid tedavisine operasyon günü dahil devam edilmesi önerilir. Operasyondan kısa süre önce kesilmesi psikotik belirtilerin yinelemesi ve postoperatif konfüzyon/ajitasyon riskini artırır.",
    "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
    "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
    "Böbrek yoluyla atıldığından böbrek fonksiyonu bozulursa doz ayarı gerekebilir.",
    "Termoregülasyon bozukluğu (hipotermi/hipertermi), hiperglisemi ve nöroleptik malign sendrom (ateş, kas rijiditesi, otonomik instabilite, bilinç değişikliği, CK artışı) açısından izlem önerilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "metadon": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "droperidol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "vazopressin": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "propofol": [
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "zuklopentiksol",
   "ad": "Zuklopentiksol",
   "grup": "Antipsikotikler",
   "karar": "ver",
   "madde": [
    "Zuklopentiksol tedavisine operasyon günü dahil devam edilmesi önerilir. Operasyondan kısa süre önce kesilmesi psikotik belirtilerin yinelemesi ve postoperatif konfüzyon/ajitasyon riskini artırır.",
    "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
    "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
    "Termoregülasyon bozukluğu (hipotermi/hipertermi), hiperglisemi ve nöroleptik malign sendrom (ateş, kas rijiditesi, otonomik instabilite, bilinç değişikliği, CK artışı) açısından izlem önerilir.",
    "Uzun etkili enjektabl form kullanılıyorsa planlanan enjeksiyon takviminin aksatılmaması önerilir. Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "metadon": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "ondansetron": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "droperidol": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "sevofluran": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ],
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "vazopressin": [
     [
      1,
      "Halojenli inhalasyon anestezikleri, ondansetron, droperidol, metadon ve vazopressin gibi QT uzatan ilaçlarla birlikte torsade de pointes riski nedeniyle EKG ile QTc ve potasyum/magnezyum değerlendirmesi önerilir.",
      [
       "QT ve aritmi"
      ],
      false
     ]
    ],
    "tramadol": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      2,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "propofol": [
     [
      2,
      "genel anesteziklerin hipotansif etkisinde artış ve ortostatik hipotansiyon açısından izlem önerilir.",
      [
       "Hipotansiyon"
      ],
      false
     ]
    ],
    "metoklopramid": [
     [
      3,
      "Metoklopramid ile birlikte ekstrapiramidal belirti riski artar.",
      [
       "EPS / NMS"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "metilfenidat",
   "ad": "Metilfenidat",
   "grup": "DEHB ilaçları",
   "karar": "verme",
   "madde": [
    "Metilfenidatın operasyon günü verilmemesi önerilir.",
    "Hastanın ilacı operasyon günü almış olması tek başına operasyonun iptalini gerektirmez; karar sorumlu anestezi hekimince bireysel olarak verilebilir.",
    "Halojenli inhalasyon anestezikleriyle birlikte ani kan basıncı ve kalp hızı artışı riski nedeniyle hemodinamik izlem önerilir. İlaç nöbet eşiğini düşürebilir.",
    "Postoperatif dönemde hasta oral alabildiğinde (genellikle ertesi sabah) olağan dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "sevofluran": [
     [
      2,
      "Halojenli inhalasyon anestezikleriyle birlikte ani kan basıncı ve kalp hızı artışı riski nedeniyle hemodinamik izlem önerilir.",
      [
       "Kan basıncı / kalp hızı"
      ],
      false
     ]
    ]
   }
  },
  {
   "id": "atomoksetin",
   "ad": "Atomoksetin",
   "grup": "DEHB ilaçları",
   "karar": "verme",
   "madde": [
    "Atomoksetinin operasyon günü verilmemesi önerilir.",
    "Hastanın ilacı operasyon günü almış olması tek başına operasyonun iptalini gerektirmez; karar sorumlu anestezi hekimince bireysel olarak verilebilir.",
    "Anestezik ilaçlarla bilinen bir etkileşimi yoktur; sempatomimetik etkisine bağlı kan basıncı ve kalp hızı artışı açısından izlem önerilir.",
    "Postoperatif dönemde hasta oral alabildiğinde olağan dozla devam edilmesi önerilir."
   ],
   "tepsi": {}
  },
  {
   "id": "guanfasin",
   "ad": "Guanfasin",
   "grup": "DEHB ilaçları",
   "karar": "ver",
   "madde": [
    "Guanfasin tedavisine operasyon günü dahil devam edilmesi önerilir. Ani kesilmesi rebound hipertansiyona yol açabileceğinden kesilmemesi önerilir.",
    "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon; hipotansiyon açısından hemodinamik izlem önerilir.",
    "Eritromisin, klaritromisin, diltiazem ve verapamil gibi CYP3A4 inhibitörleri guanfasin düzeyini artırabilir.",
    "Hasta oral alabildiğinde tedavisine önceki dozla devam edilmesi önerilir."
   ],
   "tepsi": {
    "tramadol": [
     [
      1,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "meperidin": [
     [
      1,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "metadon": [
     [
      1,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "fentanil": [
     [
      1,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "morfin": [
     [
      1,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ],
    "midazolam": [
     [
      1,
      "Opioid, benzodiazepin ve diğer SSS depresanlarıyla ek sedasyon;",
      [
       "Sedasyon"
      ],
      false
     ]
    ]
   }
  }
 ],
 "tepsi": [
  {
   "grup": "Ağrı",
   "id": "tramadol",
   "ad": "Tramadol"
  },
  {
   "grup": "Ağrı",
   "id": "meperidin",
   "ad": "Meperidin"
  },
  {
   "grup": "Ağrı",
   "id": "metadon",
   "ad": "Metadon"
  },
  {
   "grup": "Ağrı",
   "id": "fentanil",
   "ad": "Fentanil"
  },
  {
   "grup": "Ağrı",
   "id": "morfin",
   "ad": "Morfin"
  },
  {
   "grup": "Ağrı",
   "id": "nsaii",
   "ad": "NSAİİ"
  },
  {
   "grup": "Bulantı",
   "id": "ondansetron",
   "ad": "Ondansetron"
  },
  {
   "grup": "Bulantı",
   "id": "granisetron",
   "ad": "Granisetron"
  },
  {
   "grup": "Bulantı",
   "id": "metoklopramid",
   "ad": "Metoklopramid"
  },
  {
   "grup": "Bulantı",
   "id": "droperidol",
   "ad": "Droperidol"
  },
  {
   "grup": "Bulantı",
   "id": "prometazin",
   "ad": "Prometazin"
  },
  {
   "grup": "Anestezi ve sedasyon",
   "id": "sevofluran",
   "ad": "Sevofluran (halojenli inhalasyon anesteziği)"
  },
  {
   "grup": "Anestezi ve sedasyon",
   "id": "propofol",
   "ad": "Propofol"
  },
  {
   "grup": "Anestezi ve sedasyon",
   "id": "midazolam",
   "ad": "Midazolam"
  },
  {
   "grup": "Anestezi ve sedasyon",
   "id": "ketamin",
   "ad": "Ketamin"
  },
  {
   "grup": "Anestezi ve sedasyon",
   "id": "lokal",
   "ad": "Lidokain / bupivakain"
  },
  {
   "grup": "Anestezi ve sedasyon",
   "id": "haloperidol",
   "ad": "Haloperidol (ek doz)"
  },
  {
   "grup": "Kas gevşetici",
   "id": "rokuronyum",
   "ad": "Rokuronyum (nondepolarizan)"
  },
  {
   "grup": "Kas gevşetici",
   "id": "suksinilkolin",
   "ad": "Süksinilkolin"
  },
  {
   "grup": "Kas gevşetici",
   "id": "neostigmin",
   "ad": "Neostigmin"
  },
  {
   "grup": "Dolaşım",
   "id": "efedrin",
   "ad": "Efedrin"
  },
  {
   "grup": "Dolaşım",
   "id": "norepinefrin",
   "ad": "Norepinefrin"
  },
  {
   "grup": "Dolaşım",
   "id": "vazopressin",
   "ad": "Vazopressin"
  },
  {
   "grup": "Dolaşım",
   "id": "atropin",
   "ad": "Atropin (antikolinerjik)"
  },
  {
   "grup": "Diğer",
   "id": "steroid",
   "ad": "Deksametazon (steroid)"
  },
  {
   "grup": "Diğer",
   "id": "metronidazol",
   "ad": "Metronidazol"
  },
  {
   "grup": "Diğer",
   "id": "penisilin",
   "ad": "Penisilin grubu antibiyotik"
  }
 ],
 "etiketler": [
  "Serotonin sendromu",
  "QT ve aritmi",
  "EPS / NMS",
  "Sedasyon",
  "Nöbet",
  "Kanama",
  "Hipotansiyon",
  "Kan basıncı / kalp hızı",
  "İlaç etkisi değişir",
  "Deliryum / antikolinerjik"
 ]
};
