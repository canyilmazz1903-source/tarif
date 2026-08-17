import type { Tarif } from '@/types/tarif';

// Yöresel mutfak — Karadeniz. 4-6 porsiyon standart.
// Ölçü standartları: su bardağı = 200 ml, yemek kaşığı = 15 ml, çay kaşığı = 5 ml.
export const YORESEL_KARADENIZ: Tarif[] = [
  {
    id: 'karalahana-corbasi',
    baslik: 'Karalahana Çorbası',
    altBaslik: 'Barbunyalı, mısır unuyla kıvam alan Karadeniz sofralarının kış klasiği',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🥬',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 55,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 165,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'karalahana', miktar: 1, birim: 'demet', not: 'kalın damarları ayıklanıp ince kıyılmış' },
      { ad: 'barbunya (kuru)', miktar: 0.5, birim: 'su bardağı' },
      { ad: 'mısır unu', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 8, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Barbunyayı ıslat',
        aciklama:
          'Kuru barbunyayı bol suda bir gece önceden ıslat. Vaktin yoksa 1 saat kaynar suda beklet.',
        sureSn: 28800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Barbunyayı haşla',
        aciklama:
          'Islatma suyunu dök, barbunyayı temiz suda yumuşayana kadar haşlayıp süz.',
        sureSn: 1800,
      },
      {
        baslik: 'Soğanı ve salçayı kavur',
        aciklama:
          'Tencerede zeytinyağını kızdır, soğanı pembeleşene kadar kavur. Biber salçasını ekleyip kokusu çıkana dek 1 dakika çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Lahanayı ekle',
        aciklama:
          'Kıyılmış karalahanayı tencereye ekle. Yaprakların hacmi inip parlaklaşana kadar birkaç dakika soteleyerek yağla buluştur.',
        sureSn: 240,
      },
      {
        baslik: 'Suyu ve barbunyayı ilave et',
        aciklama:
          'Sıcak suyu, haşlanmış barbunyayı ve tuzu ekle. Kaynayınca kısık ateşte, lahanalar iyice yumuşayana kadar pişir.',
        sureSn: 1200,
      },
      {
        baslik: 'Mısır unuyla kıvam ver',
        aciklama:
          'Mısır ununu 1 su bardağı soğuk suyla pürüzsüzce aç. Karıştırarak çorbaya ekle, pul biberi de ilave edip 10 dakika daha kaynat.',
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Mısır unu bulamacını mutlaka soğuk suyla açıp azar azar dök; doğrudan una boca edersen çorbada topaklar oluşur.',
  },
  {
    id: 'karalahana-sarmasi',
    baslik: 'Karalahana Sarması',
    altBaslik: 'Kıymalı pirinç içiyle sarılan, salçalı suyunda pişen Karadeniz usulü sarma',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🫔',
    porsiyon: 6,
    hazirlikDk: 45,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 320,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'karalahana', miktar: 2, birim: 'demet', not: 'iri, sağlam yapraklı' },
      { ad: 'kıyma', miktar: 300, birim: 'g', grup: 'İçi için' },
      { ad: 'pirinç', miktar: 1, birim: 'su bardağı', grup: 'İçi için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İçi için', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Yaprakları haşla',
        aciklama:
          'Karalahana yapraklarının kalın orta damarlarını kes. Kaynar tuzlu suda 2-3 dakika haşlayıp soğuk suya al; yapraklar sarılacak yumuşaklığa gelsin.',
        sureSn: 300,
      },
      {
        baslik: 'İç harcı hazırla',
        aciklama:
          'Kıymayı, yıkanmış pirinci, rendelenmiş soğanı, domates salçasını ve baharatları derin bir kapta özleşene kadar yoğur.',
        sureSn: 300,
      },
      {
        baslik: 'Sarmaları sar',
        aciklama:
          'Her yaprağı ikiye böl, geniş kenarına bir tatlı kaşığı harç koyup yanlarını içe kıvırarak sıkıca sar. Karadeniz usulü biraz tombul olabilir.',
        sureSn: 1200,
      },
      {
        baslik: 'Tencereye diz',
        aciklama:
          'Tencerenin tabanına artan yaprakları ser, sarmaları aralıksız diz. Tereyağını biber salçasıyla eritip sıcak suyla karıştır, üzerine gezdir.',
        sureSn: 300,
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Üzerine ters bir tabak kapat, kaynayınca ateşi kıs. Pirinçler yumuşayıp suyunu çekene kadar kapağı kapalı pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ocaktan alıp 10 dakika demlenmeye bırak. Sıcak servis et; dileyen yanına yoğurt alabilir.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Haşlanan yaprakları hemen soğuk suya almak hem rengini korur hem sararken yırtılmasını önler.',
  },
  {
    id: 'karalahana-diblesi',
    baslik: 'Karalahana Diblesi',
    altBaslik: 'Pirinçle harmanlanıp kendi suyunda pişen, Rize mutfağının mütevazı lezzeti',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🥘',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'karalahana', miktar: 1, birim: 'demet', not: 'ayıklanıp iri kıyılmış' },
      { ad: 'pirinç', miktar: 0.5, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı yumuşat',
        aciklama:
          'Geniş bir tencerede zeytinyağını ısıt. Soğanı ve sarımsağı ekleyip orta ateşte şeffaflaşana kadar sotele.',
        sureSn: 300,
      },
      {
        baslik: 'Lahanayı çevir',
        aciklama:
          'Kıyılmış karalahanayı ekle, yapraklar çökene kadar ara ara karıştırarak 5 dakika kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Pirinci ve suyu ekle',
        aciklama:
          'Pirinci, tuzu ve sıcak suyu ilave et. Bir kez karıştırıp kapağı kapat.',
      },
      {
        baslik: 'Kısık ateşte demlendir',
        aciklama:
          'Pirinçler suyunu çekip yumuşayana kadar en kısık ateşte pişir. Kapağı sık açma; dible buharıyla pişer.',
        sureSn: 1200,
      },
      {
        baslik: 'Pul biberle servis et',
        aciklama:
          'Ocaktan alıp 10 dakika dinlendir. Üzerine pul biber serpip ılık servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Dible sulu bir yemek değildir; su ölçüsünü aşma ki pirinç lapalaşmadan lahanaya sarılsın.',
  },
  {
    id: 'taze-fasulye-diblesi',
    baslik: 'Taze Fasulye Diblesi',
    altBaslik: 'Yaz fasulyesinin pirinçle buluştuğu, az sulu Karadeniz usulü sebze yemeği',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🫛',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 220,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'taze fasulye', miktar: 500, birim: 'g', not: 'kılçıkları alınıp verev doğranmış' },
      { ad: 'pirinç', miktar: 0.5, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'zeytinyağı', miktar: 5, birim: 'yemek kaşığı' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı sotele',
        aciklama:
          'Tencerede zeytinyağını ısıtıp soğanı pembeleşene kadar kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Fasulyeyi kavur',
        aciklama:
          'Doğranmış fasulyeleri ekle, renkleri canlanana kadar 5-6 dakika birlikte çevir.',
        sureSn: 360,
      },
      {
        baslik: 'Domatesi ekle',
        aciklama:
          'Rendelenmiş domatesi, şekeri ve tuzu ilave et. Domates suyunu salıp çekene kadar pişir.',
        sureSn: 300,
      },
      {
        baslik: 'Pirinçle pişir',
        aciklama:
          'Pirinci ve sıcak suyu ekle, bir kez karıştır. Kapağı kapatıp en kısık ateşte fasulyeler ve pirinç yumuşayana kadar pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ocaktan alıp kapağı açmadan 10 dakika dinlendir. Ilık ya da oda sıcaklığında servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Bir çay kaşığı şeker domatesin ekşisini dengeleyip fasulyenin rengini canlı tutar; atlamamaya değer.',
  },
  {
    id: 'hamsili-pilav',
    baslik: 'Hamsili Pilav',
    altBaslik: 'İç pilavı hamsi zırhıyla saran, fırından ters çevrilerek çıkan kıyı klasiği',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['misafir'],
    emoji: '🐟',
    porsiyon: 6,
    hazirlikDk: 40,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'hamsi', miktar: 750, birim: 'g', not: 'kılçığı çıkarılıp açılmış (kelebek)' },
      { ad: 'pirinç', miktar: 2, birim: 'su bardağı', grup: 'İç pilavı için' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İç pilavı için', not: 'ince doğranmış' },
      { ad: 'tereyağı', miktar: 4, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'çam fıstığı', miktar: 2, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'kuş üzümü', miktar: 2, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', grup: 'İç pilavı için', not: 'sıcak' },
      { ad: 'dereotu', miktar: 0.5, birim: 'demet', grup: 'İç pilavı için', not: 'ince kıyılmış' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', not: 'kalıbı yağlamak için' },
    ],
    adimlar: [
      {
        baslik: 'Pirinci ıslat',
        aciklama:
          'Pirinci ılık tuzlu suda 20 dakika beklet, ardından nişastası akana kadar yıkayıp süz.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'İç pilavı pişir',
        aciklama:
          'Tereyağında çam fıstığını pembeleştir, soğanı ekleyip yumuşat. Pirinci 3-4 dakika kavur; kuş üzümü, tarçın, karabiber, tuz ve sıcak suyu ekleyip suyunu çekene kadar pişir. Dereotunu karıştır.',
        sureSn: 1500,
      },
      {
        baslik: 'Hamsileri hazırla',
        aciklama:
          'Açılmış hamsileri yıkayıp kurula, hafifçe tuzla. Yayvan bir fırın kabını zeytinyağıyla yağla.',
        sureSn: 600,
      },
      {
        baslik: 'Kalıbı diz',
        aciklama:
          'Hamsilerin yarısını derileri kaba bakacak şekilde, hafif üst üste bindirerek tabana ve kenarlara diz. İç pilavı yayıp kalan hamsilerle üzerini kapat.',
        sureSn: 600,
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 190 derece fırında hamsiler kızarana kadar pişir.',
        sureSn: 1800,
      },
      {
        baslik: 'Ters çevirip servis et',
        aciklama:
          'Fırından çıkınca 5 dakika dinlendir. Üzerine servis tabağı kapatıp tek hamlede ters çevir, dilimleyerek sıcak servis et.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Hamsileri dizerken kuyrukları kabın ortasına gelecek şekilde yelpaze gibi bindir; ters çevirince pilav bütün bir hamsi zırhıyla çıkar.',
  },
  {
    id: 'hamsi-bugulama',
    baslik: 'Hamsi Buğulama',
    altBaslik: 'Domates ve biber yatağında kendi buharıyla pişen en hafif hamsi hali',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🐠',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 280,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'hamsi', miktar: 600, birim: 'g', not: 'temizlenmiş' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'halka dilimlenmiş' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'dilimlenmiş' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'yarısı suyu, yarısı dilim' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'kıyılmış' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 0.5, birim: 'çay bardağı' },
    ],
    adimlar: [
      {
        baslik: 'Sebze yatağını kur',
        aciklama:
          'Geniş ve sığ bir tencerenin tabanına zeytinyağının yarısını gezdir. Soğan, sarımsak, domates ve biberleri yay, hafifçe tuzla.',
        sureSn: 300,
      },
      {
        baslik: 'Hamsileri diz',
        aciklama:
          'Temizlenmiş hamsileri sebzelerin üzerine tek sıra diz. Kalan zeytinyağını, limon suyunu, tuzu ve karabiberi üzerine gezdir.',
        sureSn: 300,
      },
      {
        baslik: 'Buğuda pişir',
        aciklama:
          'Yarım çay bardağı suyu kenardan ekle, kapağı kapat. Kısık ateşte hamsilerin etleri beyazlaşıp sebzeler yumuşayana kadar pişir; hiç karıştırma.',
        sureSn: 900,
      },
      {
        baslik: 'Maydanozla servis et',
        aciklama:
          'Ocaktan alıp maydanozu serp, limon dilimleriyle tencereden sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Buğulamada kaşık kullanma; tencereyi tutup çevirerek suyunu dolaştır, hamsiler dağılmadan pişer.',
  },
  {
    id: 'hamsili-misir-ekmegi',
    baslik: 'Mısır Unlu Hamsili Ekmek',
    altBaslik: 'İçine hamsi gömülü, mısır unlu fırın ekmeği — Doğu Karadeniz ev hali',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🍞',
    porsiyon: 6,
    hazirlikDk: 25,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 390,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'mısır unu', miktar: 2.5, birim: 'su bardağı' },
      { ad: 'hamsi', miktar: 500, birim: 'g', not: 'kılçığı çıkarılmış' },
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı', not: 'ılık' },
      { ad: 'ayçiçek yağı', miktar: 0.5, birim: 'çay bardağı' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'paket' },
      { ad: 'taze soğan', miktar: 3, birim: 'adet', not: 'ince kıyılmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Hamsileri hazırla',
        aciklama:
          'Kılçığı alınmış hamsileri yıkayıp kâğıt havluyla iyice kurula, hafifçe tuzla.',
        sureSn: 600,
      },
      {
        baslik: 'Harcı karıştır',
        aciklama:
          'Derin bir kapta yumurtaları, ılık sütü ve yağı çırp. Mısır ununu, kabartma tozunu, tuzu ve pul biberi ekleyip koyu bir kek kıvamında harç elde et.',
        sureSn: 300,
      },
      {
        baslik: 'Yeşillikleri ve hamsiyi kat',
        aciklama:
          'Taze soğanı, maydanozu ve hamsilerin yarısını iri parçalar halinde harca karıştır.',
        sureSn: 180,
      },
      {
        baslik: 'Kalıba dök',
        aciklama:
          'Yağlanmış orta boy fırın kabına harcı yay. Kalan hamsileri üzerine ışın gibi diz, hafifçe bastır.',
        sureSn: 300,
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 180 derece fırında üzeri kızarıp kürdan temiz çıkana kadar pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Dinlendirip dilimle',
        aciklama:
          'Fırından çıkınca 10 dakika dinlendir; kare dilimleyip ılık servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Hamsileri harca katmadan önce iyice kurulamak ekmeğin dibinin ıslak kalmasını önler.',
  },
  {
    id: 'laz-boregi',
    baslik: 'Laz Böreği',
    altBaslik: 'Muhallebi dolgulu, hafif şerbetli katlı tatlı börek — üzerine bir tutam karabiber',
    kategori: 'tatli',
    koleksiyonlar: ['misafir', 'ramazan'],
    emoji: '🍮',
    porsiyon: 6,
    hazirlikDk: 35,
    pisirmeDk: 45,
    zorluk: 'zor',
    kaloriPerPorsiyon: 460,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yufka', miktar: 4, birim: 'adet', grup: 'Katları için' },
      { ad: 'tereyağı', miktar: 150, birim: 'g', grup: 'Katları için', not: 'eritilmiş' },
      { ad: 'süt', miktar: 1, birim: 'lt', grup: 'Muhallebisi için' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'su bardağı', grup: 'Muhallebisi için' },
      { ad: 'un', miktar: 3, birim: 'yemek kaşığı', grup: 'Muhallebisi için' },
      { ad: 'nişasta', miktar: 3, birim: 'yemek kaşığı', grup: 'Muhallebisi için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Muhallebisi için' },
      { ad: 'vanilin', miktar: 1, birim: 'paket', grup: 'Muhallebisi için' },
      { ad: 'toz şeker', miktar: 1.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam', not: 'servis için, geleneksel' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti kaynat',
        aciklama:
          'Şekeri ve suyu kaynatıp limon suyunu ekle, 10 dakika kaynattıktan sonra ocaktan alıp soğumaya bırak.',
        sureSn: 900,
      },
      {
        baslik: 'Muhallebiyi pişir',
        aciklama:
          'Sütü, şekeri, unu, nişastayı ve yumurtayı soğukken tencerede çırp. Orta ateşte sürekli karıştırarak koyu bir muhallebi kıvamına getir; vanilini ekleyip ocaktan al.',
        sureSn: 900,
      },
      {
        baslik: 'Alt katları döşe',
        aciklama:
          'Yağlanmış fırın kabına 2 yufkayı, her katın arasına eritilmiş tereyağı sürerek buruşturarak yerleştir; kenarlardan taşan uçları bırak.',
        sureSn: 300,
      },
      {
        baslik: 'Muhallebiyi yay ve kapat',
        aciklama:
          'Ilık muhallebiyi yufkanın üzerine eşit yay. Taşan uçları içe kıvır, kalan 2 yufkayı yine tereyağlayarak üstüne ört ve kenarları içe sıkıştır.',
        sureSn: 300,
      },
      {
        baslik: 'Dilimleyip fırınla',
        aciklama:
          'Üzerine kalan tereyağını sür, keskin bıçakla kare dilimle. Önceden ısıtılmış 180 derece fırında üzeri altın rengi olana kadar pişir.',
        sureSn: 2100,
      },
      {
        baslik: 'Şerbetini dök',
        aciklama:
          'Fırından çıkan sıcak böreğe soğuk şerbeti kaşık kaşık, dilim aralarına gelecek şekilde gezdir.',
        sureSn: 180,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Şerbetini çekmesi için en az 30 dakika dinlendir. Geleneksel usul, servis ederken üzerine bir tutam karabiber serp.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Sıcak böreğe soğuk şerbet Laz böreğinin altın kuralı; ikisi de sıcak olursa katlar hamurlaşır.',
  },
  {
    id: 'trabzon-kuru-fasulyesi',
    baslik: 'Trabzon Kuru Fasulyesi',
    altBaslik: 'Bol tereyağlı, çift salçalı ve tane tane — güveç tadında Karadeniz fasulyesi',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', '101', 'ramazan'],
    emoji: '🍲',
    porsiyon: 6,
    hazirlikDk: 10,
    pisirmeDk: 90,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuru fasulye', miktar: 2, birim: 'su bardağı' },
      { ad: 'tereyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'doğranmış' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Fasulyeyi ıslat',
        aciklama:
          'Kuru fasulyeyi bol suda bir gece önceden ıslat.',
        sureSn: 28800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Ön haşlama yap',
        aciklama:
          'Islatma suyunu dök, fasulyeyi temiz suda diri kalacak şekilde 25-30 dakika haşlayıp süz.',
        sureSn: 1800,
      },
      {
        baslik: 'Tereyağında soğanı kavur',
        aciklama:
          'Tencerede tereyağını erit, soğanı kaşık kaşık ezerek pembeleşene kadar kavur. Sivri biberleri ekleyip 2 dakika daha çevir.',
        sureSn: 420,
      },
      {
        baslik: 'Salçaları çiğlikten kurtar',
        aciklama:
          'İki salçayı da ekleyip kokusu çıkana kadar kavur; pul biberi ilave et.',
        sureSn: 120,
      },
      {
        baslik: 'Fasulyeyle buluştur',
        aciklama:
          'Haşlanmış fasulyeyi, tuzu ve sıcak suyu ekle. Kaynayınca kapağı aralık, en kısık ateşte suyu koyulaşıp fasulyeler yumuşayana kadar pişir.',
        sureSn: 3000,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ocaktan alıp 10 dakika dinlendir; pilav ve turşu eşliğinde sıcak servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Trabzon usulünün sırrı bol tereyağı ve soğanı neredeyse eriyene kadar kavurmak; suyu kıvamını soğandan alır.',
  },
  {
    id: 'isirgan-corbasi',
    baslik: 'Isırgan Çorbası',
    altBaslik: 'Bahar ısırganıyla, mısır unuyla koyulaşan şifalı Karadeniz çorbası',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🌿',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 140,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [3, 4, 5],
    malzemeler: [
      { ad: 'ısırgan otu', miktar: 2, birim: 'demet', not: 'eldivenle ayıklanıp yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş', not: 'ezilmiş' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'mısır unu', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 6, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Isırganı haşlayıp kıy',
        aciklama:
          'Isırgan yapraklarını kaynar suda 2 dakika haşla; hem yakıcılığı gider hem rengi sabitlenir. Süzüp ince kıy.',
        sureSn: 300,
      },
      {
        baslik: 'Soğanı kavur',
        aciklama:
          'Tencerede tereyağını erit, soğanı ve sarımsağı yumuşayana kadar kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Mısır ununu çevir',
        aciklama:
          'Mısır ununu ekleyip kokusu hafifçe çıkana kadar 1-2 dakika kavur.',
        sureSn: 120,
      },
      {
        baslik: 'Su ve ısırganla pişir',
        aciklama:
          'Sıcak suyu azar azar, çırparak ekle. Kıyılmış ısırganı ve tuzu ilave et; kısık ateşte ara ara karıştırarak koyulaşana kadar pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Baharatla servis et',
        aciklama:
          'Karabiberi ekleyip bir taşım kaynat, sıcak servis et. Dileyen üzerine tereyağı gezdirebilir.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Isırganı toplarken ve ayıklarken mutlaka eldiven kullan; haşlandığı anda yakıcılığı tamamen kaybolur.',
  },
  {
    id: 'pazi-sarmasi',
    baslik: 'Pazı Sarması',
    altBaslik: 'Yumuşacık pazı yapraklarında kıymalı iç — Karadeniz usulü, yoğurt eşliğinde',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🍃',
    porsiyon: 6,
    hazirlikDk: 35,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 310,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3, 4],
    malzemeler: [
      { ad: 'pazı', miktar: 2, birim: 'demet', not: 'geniş yapraklı' },
      { ad: 'kıyma', miktar: 250, birim: 'g', grup: 'İçi için' },
      { ad: 'pirinç', miktar: 1, birim: 'su bardağı', grup: 'İçi için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İçi için', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
      { ad: 'yoğurt', miktar: 1, birim: 'su bardağı', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Yaprakları hazırla',
        aciklama:
          'Pazı yapraklarının saplarını kes, kaynar suya 30 saniye batırıp çıkararak yumuşat. Sapları atma; tencerenin tabanına serilecek.',
        sureSn: 480,
      },
      {
        baslik: 'İç harcı yoğur',
        aciklama:
          'Kıymayı, pirinci, rendelenmiş soğanı, salçayı ve baharatları özleşene kadar karıştır.',
        sureSn: 300,
      },
      {
        baslik: 'Sarmaları sar',
        aciklama:
          'Büyük yaprakları ikiye böl. Her parçaya bir tatlı kaşığı harç koyup yanlarını kapatarak gevşek olmayan rulolar sar; pazı naziktir, fazla sıkma.',
        sureSn: 1200,
      },
      {
        baslik: 'Tencereye diz ve pişir',
        aciklama:
          'Tabana pazı saplarını ser, sarmaları diz. Eritilmiş tereyağını ve sıcak suyu ekle, üzerine tabak kapat. Kısık ateşte pirinçler yumuşayana kadar pişir.',
        sureSn: 2100,
      },
      {
        baslik: 'Yoğurtla servis et',
        aciklama:
          'Ocaktan alıp 10 dakika dinlendir. Yanında yoğurtla sıcak servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Pazı, lahanadan çok daha hızlı pişer; suyu az tut ve ateşi hep kısık bırak ki yapraklar erimeden içi pişsin.',
  },
  {
    id: 'pazili-misir-yemegi',
    baslik: 'Pazılı Mısır Yemeği',
    altBaslik: 'Taze mısır taneleriyle pazının aynı tencerede buluştuğu yayla yemeği',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🥣',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 230,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [8, 9, 10],
    malzemeler: [
      { ad: 'pazı', miktar: 2, birim: 'demet', not: 'yaprakları iri, sapları ince doğranmış' },
      { ad: 'taze mısır', miktar: 2, birim: 'adet', not: 'taneleri bıçakla sıyrılmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'dilimlenmiş' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı ve sapları sotele',
        aciklama:
          'Tencerede zeytinyağını ısıt; soğanı, sarımsağı ve doğranmış pazı saplarını yumuşayana kadar kavur.',
        sureSn: 360,
      },
      {
        baslik: 'Mısırı ekle',
        aciklama:
          'Sıyrılmış mısır tanelerini ilave et, 3-4 dakika birlikte çevirerek tatlılığını çıkar.',
        sureSn: 240,
      },
      {
        baslik: 'Pazıyı ve suyu ilave et',
        aciklama:
          'İri doğranmış pazı yapraklarını, tuzu ve sıcak suyu ekle. Kapağı kapatıp kısık ateşte mısırlar yumuşayana kadar pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Pul biberle tamamla',
        aciklama:
          'Pul biberi ekleyip bir tur karıştır. Ilık servis et; dileyen üzerine yoğurt alabilir.',
      },
    ],
    pufNoktasi:
      'Mısır tanelerini sıyırdıktan sonra koçanı da tencereye at, pişince çıkar; suya inanılmaz bir tat bırakır.',
  },
  {
    id: 'taze-misir-haslama',
    baslik: 'Taze Mısır Haşlama',
    altBaslik: 'Sütlü suda haşlanan yaz mısırı — sokak klasiğinin evde en lezzetli hali',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🌽',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 180,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'taze mısır', miktar: 4, birim: 'adet', not: 'süt mısır, kabukları soyulmuş' },
      { ad: 'su', miktar: 3, birim: 'lt' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı' },
      { ad: 'toz şeker', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', not: 'servis için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Mısırları hazırla',
        aciklama:
          'Mısırların kabuklarını ve püsküllerini ayıkla. En taze birkaç iç kabuğu ayır; suya atınca aroma verir.',
        sureSn: 300,
      },
      {
        baslik: 'Sütlü suyu kaynat',
        aciklama:
          'Derin tencerede suyu, sütü ve şekeri kaynat. Ayırdığın iç kabukları da tencereye at.',
        sureSn: 600,
      },
      {
        baslik: 'Mısırları haşla',
        aciklama:
          'Mısırları kaynayan suya bırak. Orta ateşte, taneler tırnakla bastırınca süt gibi patlayacak yumuşaklığa gelene kadar haşla.',
        sureSn: 1500,
      },
      {
        baslik: 'Tereyağıyla servis et',
        aciklama:
          'Mısırları süzüp sıcakken üzerlerine tereyağı sür, tuzu servis sırasında serp.',
      },
    ],
    pufNoktasi:
      'Tuzu asla haşlama suyuna atma; taneleri sertleştirir. Tatlılığı süt ve bir kaşık şeker verir, tuz tabakta serpilir.',
  },
];
