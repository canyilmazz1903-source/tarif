import type { Tarif } from '@/types/tarif';

// Klasik hamur işleri ek paketi — 15 özgün tarif.
// Tüm metinler özgün olarak yazılmıştır; ölçüler ev mutfağına göre ayarlanmıştır.
export const HAMUR_ISLERI_EK: Tarif[] = [
  {
    id: 'su-boregi',
    baslik: 'Su Böreği',
    altBaslik: 'Haşlanmış el açması yufkalarla katman katman, bol tereyağlı bayram klasiği',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🥧',
    porsiyon: 8,
    hazirlikDk: 60,
    pisirmeDk: 45,
    zorluk: 'zor',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'yumurta', miktar: 4, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'nişasta', miktar: 1, birim: 'su bardağı', grup: 'Açmak için' },
      { ad: 'beyaz peynir', miktar: 350, birim: 'g', grup: 'İç harcı için', not: 'ezilmiş' },
      { ad: 'maydanoz', miktar: 1, birim: 'demet', grup: 'İç harcı için', not: 'ince kıyılmış' },
      { ad: 'tereyağı', miktar: 150, birim: 'g', grup: 'Katları için', not: 'eritilmiş' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Unu geniş bir kaba alıp ortasını havuz gibi aç. Yumurtaları, tuzu ve suyu ekleyip önce kaşıkla, sonra elle toparla. Kulak memesinden biraz sert, pürüzsüz bir hamur elde edene dek 10 dakika yoğur.',
      },
      {
        baslik: 'Bezelere ayır ve dinlendir',
        aciklama:
          'Hamuru 8 eşit bezeye ayır, üzerini nemli bezle örtüp tezgâhta dinlendir. Dinlenen hamur çok daha kolay açılır.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Yufkaları aç',
        aciklama:
          'Her bezeyi nişasta serpilmiş tezgâhta, tepsinden biraz büyük olacak şekilde oklava ile incecik aç. Açtığın yufkaları yapışmaması için aralarına nişasta serperek üst üste bekletme, tek tek kullan.',
      },
      {
        baslik: 'Yufkaları haşla',
        aciklama:
          'Geniş bir tencerede tuzlu suyu kaynat, yanına da soğuk su dolu bir kap hazırla. Yufkaları teker teker kaynar suda 30 saniye haşlayıp hemen soğuk suya al, sonra temiz bir bezin üzerinde süz.',
      },
      {
        baslik: 'Katları diz',
        aciklama:
          'Yağlanmış tepsiye önce haşlanmamış bir yufka ser. Üzerine haşlanmış yufkaları buruşturarak yerleştir, her katı eritilmiş tereyağı ile yağla. Ortaya gelince peynir ve maydanoz karışımını yay, kalan yufkalarla kapat.',
      },
      {
        baslik: 'Üstünü kapat ve yağla',
        aciklama:
          'En üste yine haşlanmamış bir yufka ser, kenarları içe kıvırarak börek sınırını topla. Kalan tereyağının tamamını üzerine gezdir ve dilim izlerini bıçakla hafifçe belirginleştir.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 180 °C fırında üstü kızarana kadar yaklaşık 45 dakika pişir. İlk yarıda alt katın da pişmesi için tepsiyi alt rafa yakın tut.',
        sureSn: 2700,
      },
      {
        baslik: 'Dinlendirip dilimle',
        aciklama:
          'Fırından çıkan böreği 15 dakika dinlendirmeden kesme; katlar bu sürede oturur ve dilimler dağılmadan çıkar.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Haşlanan yufkayı soğuk suya almak pişmeyi anında durdurur; bu şok işlemi katların hamursu değil, ipeksi olmasının sırrıdır.',
  },
  {
    id: 'kiymali-pide',
    baslik: 'Kıymalı Pide',
    altBaslik: 'İncecik mayalı hamur üzerinde sulu kıymalı harç; fırıncı usulü kapalı kenarlı',
    kategori: 'hamur-isi',
    koleksiyonlar: ['ramazan'],
    emoji: '🫓',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 15,
    zorluk: 'orta',
    kaloriPerPorsiyon: 490,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'süt', miktar: 0.5, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'instant maya', miktar: 1, birim: 'paket', grup: 'Hamuru için' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'kıyma', miktar: 300, birim: 'g', grup: 'Harcı için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Harcı için', not: 'çok ince doğranmış' },
      { ad: 'domates', miktar: 1, birim: 'adet', grup: 'Harcı için', not: 'küçük küp' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', grup: 'Harcı için', not: 'ince kıyılmış' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Harcı için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Üzeri için', not: 'sarısı, kenarlara' },
      { ad: 'tereyağı', miktar: 30, birim: 'g', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru hazırla',
        aciklama:
          'Ilık su, süt, şeker ve mayayı karıştırıp 5 dakika beklet. Unu ve tuzu ekleyip yoğurmaya başla; zeytinyağını da katıp ele yapışmayan yumuşak bir hamur elde et.',
      },
      {
        baslik: 'Mayalanmaya bırak',
        aciklama:
          'Hamurun üzerini örtüp oda sıcaklığında hacmi iki katına çıkana kadar mayalandır.',
        sureSn: 2700,
        beklemeAdimi: true,
      },
      {
        baslik: 'Harcı karıştır',
        aciklama:
          'Kıymayı çiğ olarak soğan, domates, biber, salça ve baharatlarla bir kapta iyice yoğur. Harç hafif sulu kalmalı; kuruysa 2-3 kaşık su ekle.',
      },
      {
        baslik: 'Pideleri şekillendir',
        aciklama:
          'Hamuru 4 bezeye ayır. Her bezeyi unlu tezgâhta uzunca oval aç, harcı ortaya yay ve kenarları içe kıvırıp uçlarını sıkıştırarak kayık formu ver.',
      },
      {
        baslik: 'Kenarlarına yumurta sür',
        aciklama:
          'Pideleri yağlı kâğıt serili tepsiye al. Kıvrılan kenarlara fırça ile yumurta sarısı sür; böylece kenarlar parlak ve kızarmış çıkar.',
      },
      {
        baslik: 'Yüksek ısıda pişir',
        aciklama:
          'Önceden ısıtılmış 230 °C fırında kenarlar kızarıp harç pişene kadar 12-15 dakika pişir.',
        sureSn: 840,
      },
      {
        baslik: 'Tereyağı ile parlat',
        aciklama:
          'Fırından çıkar çıkmaz sıcak pidelerin kenarlarına tereyağı gezdir, dilimleyip bekletmeden servis et.',
      },
    ],
    pufNoktasi:
      'Harca çiğ soğanın suyunu sıkmadan eklemek pişerken kıymayı nemli tutar; kuru pide olmasın istiyorsan harcı asla önceden kavurma.',
  },
  {
    id: 'kasarli-pide',
    baslik: 'Kaşarlı Pide',
    altBaslik: 'Bol kaşarlı, tereyağıyla parlatılmış yumuşacık kayık pide; çocukların favorisi',
    kategori: 'hamur-isi',
    koleksiyonlar: ['ramazan'],
    emoji: '🫓',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 15,
    zorluk: 'orta',
    kaloriPerPorsiyon: 510,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'süt', miktar: 0.5, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'instant maya', miktar: 1, birim: 'paket', grup: 'Hamuru için' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'kaşar peyniri', miktar: 300, birim: 'g', grup: 'İçi için', not: 'rendelenmiş' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Üzeri için', not: 'sarısı' },
      { ad: 'tereyağı', miktar: 40, birim: 'g', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Mayalı hamuru yoğur',
        aciklama:
          'Ilık su ve sütte şekerle mayayı çözüp 5 dakika beklet. Un, tuz ve zeytinyağını ekleyerek yumuşak, ele yapışmayan bir hamur yoğur.',
      },
      {
        baslik: 'Hamuru mayalandır',
        aciklama: 'Üzerini kapatıp ılık bir köşede hacmi ikiye katlanana kadar beklet.',
        sureSn: 2700,
        beklemeAdimi: true,
      },
      {
        baslik: 'Pideleri aç',
        aciklama:
          'Hamuru 4 bezeye böl, her birini unlu tezgâhta uzun oval şekilde yarım santim kalınlığında aç.',
      },
      {
        baslik: 'Kaşarı doldur ve kapat',
        aciklama:
          'Rendelenmiş kaşarın çoğunu ortalara paylaştır, kenarları içe kıvırıp uçları sıkıca birleştir. Kalan kaşarı üstlere serp, kenarlara yumurta sarısı sür.',
      },
      {
        baslik: 'Fırında kızart',
        aciklama:
          'Önceden ısıtılmış 230 °C fırında kaşar eriyip kenarlar altın rengi olana kadar 12-15 dakika pişir.',
        sureSn: 840,
      },
      {
        baslik: 'Tereyağla ve dilimle',
        aciklama:
          'Sıcak pidelerin üzerine tereyağı gezdir, birkaç dakika dinlendirip enine dilimleyerek servis et.',
      },
    ],
    pufNoktasi:
      'Kaşarın bir kısmını içine, bir kısmını üstüne koymak hem akışkan bir iç hem de kızarmış peynir kabuğu verir; tamamını içe saklama.',
  },
  {
    id: 'ev-usulu-lahmacun',
    baslik: 'Ev Usulü Lahmacun',
    altBaslik: 'Tavada ya da fırın tepsisinde incecik açılan hamur ve baharatlı kıymalı harç',
    kategori: 'hamur-isi',
    koleksiyonlar: ['ramazan'],
    emoji: '🫓',
    porsiyon: 6,
    hazirlikDk: 35,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 360,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 1.25, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'instant maya', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'kıyma', miktar: 250, birim: 'g', grup: 'Harcı için', not: 'yağlı' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Harcı için' },
      { ad: 'domates', miktar: 1, birim: 'adet', grup: 'Harcı için' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', grup: 'Harcı için' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'Harcı için' },
      { ad: 'biber salçası', miktar: 1.5, birim: 'yemek kaşığı', grup: 'Harcı için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'kimyon', miktar: 0.5, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Harcı için' },
      { ad: 'limon', miktar: 1, birim: 'adet', grup: 'Servis için' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğurup dinlendir',
        aciklama:
          'Un, tuz, maya ve ılık suyu karıştırıp pürüzsüz, orta yumuşaklıkta bir hamur yoğur. Üzerini örtüp mayalanması için beklet.',
        sureSn: 2400,
        beklemeAdimi: true,
      },
      {
        baslik: 'Harcı çek',
        aciklama:
          'Soğan, domates, biber ve maydanozu robottan geçir ya da bıçakla çok ince kıy; fazla suyunu hafifçe süz. Kıyma, salça, baharatlar ve zeytinyağı ile macun kıvamında bir harç elde edene kadar yoğur.',
      },
      {
        baslik: 'Bezeleri aç',
        aciklama:
          'Hamuru 6 bezeye ayır. Her bezeyi unlu tezgâhta tabak büyüklüğünde ve neredeyse şeffaf incelikte aç; lahmacunun sırrı ince hamurdur.',
      },
      {
        baslik: 'Harcı incecik yay',
        aciklama:
          'Harçtan 2-3 kaşık alıp parmak uçlarınla hamurun her yerine, kenarlarda boşluk bırakmadan ince bir tabaka hâlinde yay. Kalın harç hamuru pişirmeden ıslatır.',
      },
      {
        baslik: 'Yüksek ısıda pişir',
        aciklama:
          'Fırını 250 °C\'de tepsiyle birlikte ısıt. Lahmacunları kızgın tepsiye alıp kenarları benek benek kızarana kadar 4-5 dakika pişir; sırayla hepsini pişir.',
        sureSn: 300,
      },
      {
        baslik: 'Dürüp servis et',
        aciklama:
          'Sıcak lahmacunlara limon sık, dilersen maydanoz koyup rulo yaparak bekletmeden servis et.',
      },
    ],
    pufNoktasi:
      'Sebzelerin suyunu süzmeden harca katarsan hamur pişerken vıcık olur; harç ne kadar kuru yayılırsa taban o kadar çıtır kalır.',
  },
  {
    id: 'manti',
    baslik: 'Mantı',
    altBaslik: 'Minik bohçalar hâlinde kapatılan kıymalı hamur; sarımsaklı yoğurt ve kızgın sos ile',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🥟',
    porsiyon: 4,
    hazirlikDk: 75,
    pisirmeDk: 20,
    zorluk: 'zor',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'kıyma', miktar: 250, birim: 'g', grup: 'İç harcı için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'İç harcı için', not: 'rendelenmiş' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'yoğurt', miktar: 400, birim: 'g', grup: 'Üzeri için' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Üzeri için' },
      { ad: 'tereyağı', miktar: 50, birim: 'g', grup: 'Sosu için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
    ],
    adimlar: [
      {
        baslik: 'Sert bir hamur yoğur',
        aciklama:
          'Un, yumurta, tuz ve suyu karıştırıp mantıya özgü sertlikte, kulak memesinden katı bir hamur yoğur. Üzerini örtüp dinlendir.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'İç harcı hazırla',
        aciklama:
          'Kıymayı rendelenmiş soğan, karabiber ve tuzla iyice karıştır. Soğanın suyu harcı yumuşatır; ayrıca su ekleme.',
      },
      {
        baslik: 'Hamuru aç ve karelere böl',
        aciklama:
          'Hamuru ikiye böl, her parçayı unlu tezgâhta 1-2 mm incelikte aç. Bıçak ya da hamur kesici ile 2-3 cm\'lik küçük karelere böl.',
      },
      {
        baslik: 'Bohçaları kapat',
        aciklama:
          'Her karenin ortasına nohut büyüklüğünde harç koy. Dört köşeyi ortada birleştirip parmak uçlarınla sıkıca yapıştır; açık kalan bohça haşlamada dağılır.',
      },
      {
        baslik: 'Mantıları haşla',
        aciklama:
          'Geniş tencerede bol tuzlu suyu kaynat. Mantıları atıp ara sıra karıştırarak yumuşayana kadar 10-12 dakika haşla, delikli kepçeyle süz.',
        sureSn: 720,
      },
      {
        baslik: 'Yoğurdu ve sosu hazırla',
        aciklama:
          'Yoğurdu ezilmiş sarımsak ve bir tutam tuzla çırp. Küçük tavada tereyağını eritip pul biber ve naneyi ekle, köpürünce ocaktan al.',
      },
      {
        baslik: 'Tabakları kur',
        aciklama:
          'Sıcak mantıyı tabaklara paylaştır, sarımsaklı yoğurdu üzerine yay ve kızgın biberli tereyağını gezdirerek hemen servis et.',
      },
    ],
    pufNoktasi:
      'Hamur ne kadar ince, bohça ne kadar küçükse mantı o kadar makbuldür; harcı az koymak bohçayı küçük kapatmanın tek yoludur.',
  },
  {
    id: 'ev-ekmegi',
    baslik: 'Ev Ekmeği',
    altBaslik: 'Dört malzemeyle çıtır kabuklu, pamuk içli günlük ekmek; tavada ya da fırında',
    kategori: 'hamur-isi',
    koleksiyonlar: ['101'],
    emoji: '🍞',
    porsiyon: 8,
    hazirlikDk: 20,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 280,
    beslenmeEtiketleri: ['vegan', 'vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 4, birim: 'su bardağı' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', not: 'ılık' },
      { ad: 'instant maya', miktar: 1, birim: 'paket' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Mayayı uyandır',
        aciklama:
          'Ilık suya şekeri ve mayayı karıştırıp üzeri köpürene kadar 5 dakika beklet. Su parmağını yakmayacak sıcaklıkta olmalı; sıcak su mayayı öldürür.',
      },
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Unu ve tuzu geniş kaba al, mayalı suyu ve zeytinyağını ekleyerek 8-10 dakika yoğur. Hafif yapışkan ama toparlanan, esnek bir hamur hedefle.',
      },
      {
        baslik: 'İlk mayalanma',
        aciklama: 'Hamurun üzerini örtüp ılık bir yerde hacmi iki katına çıkana kadar mayalandır.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Şekil ver ve tekrar beklet',
        aciklama:
          'Kabaran hamurun havasını alıp yuvarlak somun şekli ver. Yağlı kâğıt serili tepsiye al, üzerini örtüp 30 dakika daha kabart, sonra keskin bıçakla üstüne çizik at.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Buharlı fırında pişir',
        aciklama:
          'Fırını 220 °C\'ye ısıt, alt rafa küçük bir kapta sıcak su koy. Ekmeği kabuğu derin altın rengi olana dek 35 dakika pişir; buhar çıtır kabuk yapar.',
        sureSn: 2100,
      },
      {
        baslik: 'Telin üzerinde soğut',
        aciklama:
          'Ekmeği tepsiden alıp tel ızgara üzerinde en az 30 dakika soğut. Sıcakken kesilen ekmeğin içi hamurlaşır; sabret.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Fırına atmadan önce atılan çizik süs değildir; ekmeğin buharı kontrollü çıkar ve kabuk rastgele patlamak yerine güzelce açılır.',
  },
  {
    id: 'evde-simit',
    baslik: 'Evde Simit',
    altBaslik: 'Pekmezli suya batırılıp bol susama bulanan, fırıncı çıtırlığında ev simidi',
    kategori: 'hamur-isi',
    koleksiyonlar: [],
    emoji: '🥯',
    porsiyon: 8,
    hazirlikDk: 30,
    pisirmeDk: 18,
    zorluk: 'orta',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: ['vegan', 'vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 4, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'instant maya', miktar: 1, birim: 'paket', grup: 'Hamuru için' },
      { ad: 'toz şeker', miktar: 1, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'pekmez', miktar: 3, birim: 'yemek kaşığı', grup: 'Kaplama için' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', grup: 'Kaplama için' },
      { ad: 'susam', miktar: 1.5, birim: 'su bardağı', grup: 'Kaplama için' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur ve mayalandır',
        aciklama:
          'Ilık su, maya ve şekeri karıştırıp 5 dakika beklet. Un, tuz ve zeytinyağını ekleyip pürüzsüz bir hamur yoğur; üzerini örtüp iki katına çıkana kadar beklet.',
        sureSn: 3000,
        beklemeAdimi: true,
      },
      {
        baslik: 'Susamı kavur',
        aciklama:
          'Hamur mayalanırken susamı yağsız tavada, sürekli karıştırarak hafif pembeleşene kadar kavur ve geniş bir tabağa yay. Kavrulmuş susam simide fırıncı kokusunu verir.',
      },
      {
        baslik: 'Halkaları şekillendir',
        aciklama:
          'Hamuru 8 bezeye ayır. Her bezeyi ikiye bölüp iki ince fitil aç, fitilleri birbirine sarmalayıp uçlarını birleştirerek halka yap.',
      },
      {
        baslik: 'Pekmezli suya batır',
        aciklama:
          'Pekmezi yarım bardak suyla aç. Her halkayı önce pekmezli suya batır, sonra iki yüzünü de kavrulmuş susama iyice bula.',
      },
      {
        baslik: 'Kısa bir ön kabartma yap',
        aciklama:
          'Simitleri yağlı kâğıtlı tepsiye dizip 15 dakika dinlendir; bu kısa bekleme halkaların fırında çatlamadan kabarmasını sağlar.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Fırında kızart',
        aciklama:
          'Önceden ısıtılmış 210 °C fırında koyu altın rengini alana kadar 16-18 dakika pişir. Sıcakken telin üzerinde birkaç dakika dinlendir.',
        sureSn: 1080,
      },
    ],
    pufNoktasi:
      'Simide rengini ve o karakteristik tadını veren şey fırın değil, pekmezli su banyosudur; pekmezi atlarsan simit değil susamlı poğaça olur.',
  },
  {
    id: 'pacanga-boregi',
    baslik: 'Paçanga Böreği',
    altBaslik: 'Pastırmalı, kaşarlı çıtır rulolar; meyhane klasiği ev tavasında',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🥟',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 420,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yufka', miktar: 2, birim: 'adet' },
      { ad: 'pastırma', miktar: 100, birim: 'g', not: 'ince dilim' },
      { ad: 'kaşar peyniri', miktar: 150, birim: 'g', not: 'rendelenmiş' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'ince kıyılmış' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'küp doğranmış, suyu süzülmüş' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', not: 'akı, kenarları yapıştırmak için' },
      { ad: 'ayçiçek yağı', miktar: 1.5, birim: 'su bardağı', grup: 'Kızartmak için' },
    ],
    adimlar: [
      {
        baslik: 'Yufkaları dilimle',
        aciklama:
          'Her yufkayı önce ikiye, sonra her yarımı ikiye keserek toplam 8 üçgen parça elde et. Kurumamaları için üzerlerini nemli bezle ört.',
      },
      {
        baslik: 'İç malzemeyi hazırla',
        aciklama:
          'Pastırma dilimlerini ince şeritler hâlinde kes. Kaşar, biber ve suyu süzülmüş domatesi bir kapta harmanla.',
      },
      {
        baslik: 'Ruloları sar',
        aciklama:
          'Her üçgenin geniş kenarına pastırma ve peynirli karışımdan bir sıra diz. Önce yanları içe katla, sonra sıkıca rulo yap ve uç kısmı yumurta akı ile yapıştır.',
      },
      {
        baslik: 'Kızgın yağda kızart',
        aciklama:
          'Yağı tavada orta ateşte kızdır. Ruloları ek yeri alta gelecek şekilde yağa bırak, iki tarafını da altın sarısı olana kadar 2-3 dakikada çevirerek kızart.',
        sureSn: 360,
      },
      {
        baslik: 'Süzdürüp sıcak servis et',
        aciklama:
          'Börekleri kâğıt havlu üzerine alıp fazla yağını süzdür. Kaşar akışkanken, bekletmeden servis et.',
      },
    ],
    pufNoktasi:
      'Domatesin suyunu iyice süzmezsen rulo kızarırken açılır ve yağ sıçratır; kuru iç harç paçanganın çıtırlığının garantisidir.',
  },
  {
    id: 'cig-borek',
    baslik: 'Çiğ Börek',
    altBaslik: 'Çiğ kıymalı harçla kapatılıp kızgın yağda pişen incecik yarım ay börek',
    kategori: 'hamur-isi',
    koleksiyonlar: [],
    emoji: '🥟',
    porsiyon: 6,
    hazirlikDk: 35,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 440,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 1.25, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'kıyma', miktar: 250, birim: 'g', grup: 'Harcı için', not: 'yağlı' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Harcı için', not: 'rendelenmiş' },
      { ad: 'su', miktar: 4, birim: 'yemek kaşığı', grup: 'Harcı için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'su bardağı', grup: 'Kızartmak için' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur ve dinlendir',
        aciklama:
          'Un, tuz, zeytinyağı ve ılık suyla yumuşak, esnek bir hamur yoğur. 6 beze yapıp üzerini örterek dinlendir.',
        sureSn: 1500,
        beklemeAdimi: true,
      },
      {
        baslik: 'Sulu harcı hazırla',
        aciklama:
          'Kıymayı rendelenmiş soğan, tuz, karabiber ve 4 kaşık suyla iyice karıştır. Harç kaşıktan zor düşen, sürülebilir bir kıvamda olmalı; bu sululuk böreğin içini buharda pişirir.',
      },
      {
        baslik: 'Bezeleri aç ve doldur',
        aciklama:
          'Her bezeyi tabak büyüklüğünde ince aç. Yarısına harcı ince bir tabaka hâlinde sür, kenarlarda iki parmak boşluk bırak.',
      },
      {
        baslik: 'Yarım ay kapat',
        aciklama:
          'Hamurun boş yarısını harcın üzerine kapat. Kenarları önce parmakla bastır, sonra kenarından keserek yarım ay şeklinde düzelt ve çatalla ya da parmakla iyice mühürle.',
      },
      {
        baslik: 'Bol yağda pişir',
        aciklama:
          'Yağı geniş tavada iyice kızdır. Börekleri tek tek yağa bırak, üzerine kaşıkla kızgın yağ gezdirerek her yüzünü 2 dakika kabarıp kızarana dek pişir.',
        sureSn: 240,
      },
      {
        baslik: 'Süzüp sıcak servis et',
        aciklama:
          'Kâğıt havluda yağını aldıktan sonra ayranla, bekletmeden servis et; çiğ börek soğumayı affetmez.',
      },
    ],
    pufNoktasi:
      'Harcın çiğ ve sulu konulması bu böreğin tanımıdır; kıyma incecik hamurun içinde kendi buharıyla piştiği için asla önceden kavrulmaz.',
  },
  {
    id: 'ev-usulu-katmer',
    baslik: 'Ev Usulü Şekerli Katmer',
    altBaslik: 'Sacda ya da tavada kat kat açılan, tereyağlı ve şekerli nostaljik köy katmeri',
    kategori: 'hamur-isi',
    koleksiyonlar: [],
    emoji: '🫓',
    porsiyon: 6,
    hazirlikDk: 30,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 450,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'tereyağı', miktar: 125, birim: 'g', grup: 'Katları için', not: 'oda sıcaklığında' },
      { ad: 'toz şeker', miktar: 6, birim: 'yemek kaşığı', grup: 'Katları için' },
    ],
    adimlar: [
      {
        baslik: 'Yumuşak hamur yoğur',
        aciklama:
          'Un, tuz, zeytinyağı ve ılık suyla ele yapışmayan, yumuşak bir hamur yoğur. 6 bezeye ayırıp üzerini örterek dinlendir.',
        sureSn: 1500,
        beklemeAdimi: true,
      },
      {
        baslik: 'Bezeleri incecik aç',
        aciklama:
          'Her bezeyi hafif unlu tezgâhta olabildiğince ince, neredeyse şeffaf bir daire hâlinde aç. Küçük yırtıklar dert değil; katlarda kaybolur.',
      },
      {
        baslik: 'Yağla ve şekerle',
        aciklama:
          'Açtığın hamurun her yerine yumuşak tereyağı sür, üzerine 1 yemek kaşığı toz şekeri eşit serp.',
      },
      {
        baslik: 'Kat kat katla',
        aciklama:
          'Hamuru önce sağdan ve soldan içe, sonra alttan ve üstten katlayarak kare bir bohça yap. Bohçayı oklava ile hafifçe bastırarak yarım santim kalınlığa getir.',
      },
      {
        baslik: 'Tavada pişir',
        aciklama:
          'Genişçe bir tavayı orta ateşte ısıt. Katmeri her yüzü benek benek kızarana kadar 3-4 dakika, ara ara tereyağı sürerek pişir; kalan bezelere aynı işlemi uygula.',
        sureSn: 480,
      },
      {
        baslik: 'Dilimleyip sıcak sun',
        aciklama:
          'Sıcak katmeri dilimle ve istersen üzerine bir tutam toz şeker daha serperek hemen servis et.',
      },
    ],
    pufNoktasi:
      'Şekeri pişirmeden hemen önce serpmek gerekir; erken şekerlenen hamur su salar ve katlar birbirine yapışıp çıtırlığını kaybeder.',
  },
  {
    id: 'patatesli-tepsi-boregi',
    baslik: 'Patatesli Tepsi Böreği',
    altBaslik: 'Soğanla kavrulmuş baharatlı patates harcı ve sütlü sosla yumuşacık yufka katları',
    kategori: 'hamur-isi',
    koleksiyonlar: ['ramazan'],
    emoji: '🥧',
    porsiyon: 8,
    hazirlikDk: 30,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 380,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yufka', miktar: 3, birim: 'adet' },
      { ad: 'patates', miktar: 4, birim: 'adet', grup: 'Harcı için' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'Harcı için', not: 'yemeklik doğranmış' },
      { ad: 'ayçiçek yağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Harcı için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', grup: 'Sosu için' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı', grup: 'Sosu için' },
      { ad: 'ayçiçek yağı', miktar: 0.5, birim: 'çay bardağı', grup: 'Sosu için' },
      { ad: 'çörek otu', miktar: 1, birim: 'çay kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Patatesleri haşla',
        aciklama:
          'Patatesleri kabuklarıyla yumuşayana kadar haşla, soğuyunca soyup çatalla iri parçalı ezilecek şekilde ez.',
        sureSn: 1200,
      },
      {
        baslik: 'Harcı kavur',
        aciklama:
          'Soğanları yağda pembeleşene kadar kavur. Ezilmiş patatesi, tuzu ve baharatları ekleyip 2 dakika karıştırarak harcı birleştir, ocaktan alıp ılıt.',
      },
      {
        baslik: 'Sosu çırp',
        aciklama:
          'Bir kâsede yumurtaları, sütü ve yağı çırp. Bir yemek kaşığı sosu böreğin üstü için ayır.',
      },
      {
        baslik: 'Katları döşe',
        aciklama:
          'Yağlanmış tepsiye ilk yufkayı kenarlardan taşacak şekilde ser ve sosla ıslat. İkinci yufkayı buruşturarak yerleştir, sos gezdir ve harcın yarısını yay; aynı sırayla devam edip taşan kenarları içe kapat.',
      },
      {
        baslik: 'Üstünü hazırla',
        aciklama:
          'Son yufkayı üste ser, ayırdığın sosu sür ve çörek otu serp. Böreği pişmeden önce dilimlersen servisi çok kolaylaşır.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama: 'Önceden ısıtılmış 190 °C fırında üzeri kızarana kadar 35-40 dakika pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama: 'Böreği 10 dakika dinlendirdikten sonra dilimlerini tazeleyip sıcak servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Patatesi püre gibi ezmek yerine iri parçalı bırakmak, harcın katlar arasında ezik bir tabakaya dönüşmesini engeller.',
  },
  {
    id: 'puf-boregi',
    baslik: 'Puf Böreği',
    altBaslik: 'Kızgın yağda balon gibi kabaran, içi peynirli el açması çarşı böreği',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🥟',
    porsiyon: 6,
    hazirlikDk: 40,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 410,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 4, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'sirke', miktar: 1, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'nişasta', miktar: 0.5, birim: 'su bardağı', grup: 'Açmak için' },
      { ad: 'beyaz peynir', miktar: 250, birim: 'g', grup: 'İçi için', not: 'ezilmiş' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'İçi için', not: 'ince kıyılmış' },
      { ad: 'ayçiçek yağı', miktar: 2.5, birim: 'su bardağı', grup: 'Kızartmak için' },
    ],
    adimlar: [
      {
        baslik: 'Sirkeli hamuru yoğur',
        aciklama:
          'Un, yumurta, sirke, tuz ve ılık suyla orta sertlikte bir hamur yoğur. Sirke hamurun kızarırken kabarcıklanıp puflamasına yardım eder. Üzerini örtüp dinlendir.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'İç harcı karıştır',
        aciklama: 'Ezilmiş beyaz peyniri kıyılmış maydanozla karıştır; peynir tuzluysa ekstra tuz ekleme.',
      },
      {
        baslik: 'Hamuru ince aç',
        aciklama:
          'Hamuru ikiye böl, her parçayı nişastalı tezgâhta 2 mm incelikte büyükçe aç. İnce açılmayan hamur yağda puf yapmaz.',
      },
      {
        baslik: 'Doldur ve kalıpla kes',
        aciklama:
          'Hamurun bir yarısına aralıklarla birer tatlı kaşığı harç koy. Boş yarısını üzerine kapat, harçların çevresine parmakla bastır ve su bardağı ya da kalıpla yarım ay şeklinde kes.',
      },
      {
        baslik: 'Kızgın yağda pufla',
        aciklama:
          'Yağı derin bir tavada iyice kızdır. Börekleri yağa bırakıp üzerlerine sürekli kızgın yağ gezdir; kabarıp iki yüzü de altın rengi olunca 2-3 dakikada al.',
        sureSn: 300,
      },
      {
        baslik: 'Süzdürüp sıcak sun',
        aciklama: 'Kâğıt havluda fazla yağını verdikten sonra çayın yanında sıcak sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Üzerine kaşıkla sıcak yağ gezdirmek puf böreğini balon gibi şişiren asıl harekettir; yağ yeterince kızgın değilse hamur yağ çeker ve sönük kalır.',
  },
  {
    id: 'hashasli-corek',
    baslik: 'Haşhaşlı Çörek',
    altBaslik: 'Mayalı hamurun içinde kat kat dönen tatlı haşhaş ezmesi; çay saatinin baş tacı',
    kategori: 'hamur-isi',
    koleksiyonlar: [],
    emoji: '🥐',
    porsiyon: 8,
    hazirlikDk: 40,
    pisirmeDk: 30,
    zorluk: 'orta',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 4.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'instant maya', miktar: 1, birim: 'paket', grup: 'Hamuru için' },
      { ad: 'toz şeker', miktar: 3, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'ayçiçek yağı', miktar: 0.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'haşhaş', miktar: 100, birim: 'g', grup: 'İçi için', not: 'öğütülmüş' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'su bardağı', grup: 'İçi için' },
      { ad: 'tereyağı', miktar: 75, birim: 'g', grup: 'İçi için', not: 'eritilmiş' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Üzeri için', not: 'sarısı' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru kur',
        aciklama:
          'Ilık süte şekeri ve mayayı karıştırıp 5 dakika beklet. Yumurtayı, yağı, tuzu ve unu azar azar ekleyerek yumuşak, toparlanan bir hamur yoğur.',
      },
      {
        baslik: 'Mayalanmasını bekle',
        aciklama: 'Üzerini örtüp ılık bir yerde hacmi ikiye katlanana kadar mayalandır.',
        sureSn: 3000,
        beklemeAdimi: true,
      },
      {
        baslik: 'Haşhaş ezmesini hazırla',
        aciklama:
          'Öğütülmüş haşhaşı, şekeri ve eritilmiş tereyağını karıştırarak sürülebilir bir ezme yap.',
      },
      {
        baslik: 'Aç, sür, rulola',
        aciklama:
          'Hamuru ikiye böl. Her parçayı tezgâhta büyük ve ince bir dikdörtgen hâlinde aç, haşhaş ezmesinin yarısını her yerine sür ve uzun kenardan sıkıca rulo yap.',
      },
      {
        baslik: 'Çöreklere şekil ver',
        aciklama:
          'Ruloları spiral hâlinde sarıp yağlı kâğıtlı tepsiye al ya da dilimleyip yan yana diz. Üzerini örtüp 20 dakika daha kabart, sonra yumurta sarısı sür.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 180 °C fırında üzeri kızarana kadar 25-30 dakika pişir; ılık ya da soğuk dilimleyerek servis et.',
        sureSn: 1650,
      },
    ],
    pufNoktasi:
      'Haşhaşı sürmeden önce hamurun bir tık ince açılması gerekir; kalın hamur ruloda ezmeyi dışarı iter, ince hamur ise her dilimde spiral deseni ortaya çıkarır.',
  },
  {
    id: 'misir-ekmegi',
    baslik: 'Mısır Ekmeği',
    altBaslik: 'Karadeniz sofralarının mis kokulu, mısır unundan yapılan glutensiz köy ekmeği',
    kategori: 'hamur-isi',
    koleksiyonlar: [],
    emoji: '🌽',
    porsiyon: 8,
    hazirlikDk: 10,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 300,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'mısır unu', miktar: 2.5, birim: 'su bardağı' },
      { ad: 'yoğurt', miktar: 1, birim: 'su bardağı' },
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'ayçiçek yağı', miktar: 0.5, birim: 'çay bardağı' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'paket' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', not: 'gerekirse, kıvam için' },
    ],
    adimlar: [
      {
        baslik: 'Islak malzemeleri çırp',
        aciklama: 'Geniş bir kapta yumurtaları, yoğurdu ve yağı pürüzsüz olana kadar çırp.',
      },
      {
        baslik: 'Kuruları ekle',
        aciklama:
          'Mısır ununu, tuzu ve kabartma tozunu ekleyip spatulayla karıştır. Kek hamurundan biraz koyu bir kıvam hedefle; katıysa yarım bardağa kadar su ekle.',
      },
      {
        baslik: 'Kalıba dök',
        aciklama:
          'Harcı yağlanmış küçük bir kek kalıbına ya da dökme tavaya dök ve üstünü düzelt. Harç dinlenmeden fırına girmeli; kabartma tozu beklemeyi sevmez.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 180 °C fırında üzeri kızarıp ortasına batırılan kürdan temiz çıkana kadar 35-40 dakika pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Ilıtıp dilimle',
        aciklama:
          'Ekmeği kalıbında 15 dakika dinlendirip ılıkken dilimle. Karalahana sarması, hamsi ya da çay yanında harikadır.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Mısır unu glüten içermediği için hamur yoğrulmaz, sadece karıştırılır; fazla karıştırmak da gerekmez, homojen olduğu an bırak.',
  },
  {
    id: 'dereotlu-peynirli-muska-boregi',
    baslik: 'Dereotlu Peynirli Muska Böreği',
    altBaslik: 'Üçgen sarılan minik yufka bohçaları; dereotlu peynir dolgusuyla çıtır çıtır',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🥟',
    porsiyon: 6,
    hazirlikDk: 25,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 370,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yufka', miktar: 2, birim: 'adet' },
      { ad: 'beyaz peynir', miktar: 250, birim: 'g', grup: 'İçi için', not: 'ezilmiş' },
      { ad: 'dereotu', miktar: 1, birim: 'demet', grup: 'İçi için', not: 'ince kıyılmış' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'İçi için', not: 'akı harca, sarısı kenara' },
      { ad: 'karabiber', miktar: 0.25, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'ayçiçek yağı', miktar: 1.5, birim: 'su bardağı', grup: 'Kızartmak için' },
    ],
    adimlar: [
      {
        baslik: 'Harcı karıştır',
        aciklama:
          'Ezilmiş beyaz peyniri kıyılmış dereotu, yumurta akı ve karabiberle karıştır. Yumurta sarısını şeritlerin ucunu yapıştırmak için ayır.',
      },
      {
        baslik: 'Yufkaları şeritlere kes',
        aciklama:
          'Her yufkayı ortadan geçen kesimlerle 6 eşit uzun şeride ayır; toplam 12 şerit elde edeceksin. Kurumaması için üstünü nemli bezle ört.',
      },
      {
        baslik: 'Muskaları katla',
        aciklama:
          'Her şeridin ucuna bir tatlı kaşığı harç koy. Köşeyi çapraz kapatarak üçgen oluştur ve şeridin sonuna kadar üçgeni katlayarak ilerle; açık ucu yumurta sarısıyla yapıştır.',
      },
      {
        baslik: 'Kızgın yağda kızart',
        aciklama:
          'Yağı orta ateşte kızdır. Muskaları ek yeri alta gelecek şekilde bırakıp her iki yüzünü altın sarısı olana kadar 2-3 dakikada çevirerek kızart.',
        sureSn: 300,
      },
      {
        baslik: 'Süzdür ve servis et',
        aciklama:
          'Börekleri kâğıt havluya alıp yağını süzdür; çay saatinde ya da çorbaların yanında sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Üçgeni her katlayışta hafifçe bastırarak ilerlersen içeride hava boşluğu kalmaz; boşluklu muska yağda açılıp harcını dökebilir.',
  },
];
