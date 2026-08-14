import type { Tarif } from '@/types/tarif';

// Trend & Fit paketi — protein ağırlıklı fit tabaklar, kavanoz salataları,
// tost yükseltmeleri ve tek kap pratikler. Tüm metinler özgündür;
// ölçüler ev mutfağında denenmiş oranlardır.
export const TREND_FIT: Tarif[] = [
  // ---------------------------------------------------------------
  // PROTEİN AĞIRLIKLI FİT TABAKLAR
  // ---------------------------------------------------------------
  {
    id: 'izgara-tavuklu-bulgur-kase',
    baslik: 'Izgara Tavuklu Bulgur Kase',
    altBaslik: 'Kekikli ızgara tavuk dilimleri, limonlu bulgur ve bol yeşillikle doyurucu fit kase',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'fit'],
    emoji: '🥗',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: ['laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 300, birim: 'g', not: 'iki yassı fileto halinde' },
      { ad: 'bulgur', miktar: 1, birim: 'su bardağı' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', not: 'bulgur için, sıcak' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'salatalık', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'roka', miktar: 0.5, birim: 'demet', not: 'ayıklanmış' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Tavukları marine et',
        aciklama:
          'Yassı tavuk filetoları zeytinyağının yarısı, kekik, tatlı toz biber, tuzun yarısı ve karabiberle iyice ovala. Tezgahta 10 dakika beklet ki baharat ete işlesin.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Bulguru demlendir',
        aciklama:
          'Bulguru geniş bir kaseye al, üzerine sıcak suyu ve kalan tuzu ekle. Kapağını kapatıp suyunu çekene dek beklet, sonra çatalla havalandır.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Tavukları ızgarada pişir',
        aciklama:
          'Döküm tava ya da ızgara tavasını iyice kızdır. Filetoları her yüzü 4-5 dakika olacak şekilde, üzerinde ızgara izleri oluşana ve içi tam pişene kadar pişir. Kesmeden önce 5 dakika dinlendirip parmak kalınlığında dilimle.',
        sureSn: 600,
      },
      {
        baslik: 'Kaseleri hazırla',
        aciklama:
          'Demlenen bulguru limon suyu ve kalan zeytinyağıyla harmanla. Kaselerin tabanına bulguru yay; üzerine domates, salatalık, roka ve dilimlenmiş tavuğu bölümler halinde yerleştir.',
      },
    ],
    pufNoktasi:
      'Tavuğu dilimlemeden önce dinlendirmek suyunun içeride kalmasını sağlar; sıcakken kesersen kuru olur. Bulguru haşlamak yerine demlendirmek tane tane kalmasının sırrıdır.',
  },
  {
    id: 'firinda-baharatli-tavuk-sebze',
    baslik: 'Fırında Baharatlı Tavuk ve Sebze',
    altBaslik: 'Tek tepside baharatlı tavuk göğsü ve renkli sebzeler; haftalık öğün hazırlığına uygun',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'fit', 'meal-prep'],
    emoji: '🍗',
    porsiyon: 3,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 390,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 450, birim: 'g', not: 'iri kuşbaşı doğranmış' },
      { ad: 'brokoli', miktar: 300, birim: 'g', not: 'çiçeklerine ayrılmış' },
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'verev dilimlenmiş' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'iri doğranmış' },
      { ad: 'kırmızı soğan', miktar: 1, birim: 'adet', not: 'sekize bölünmüş' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'tatlı toz biber', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'sarımsak tozu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Baharat karışımını hazırla',
        aciklama:
          'Küçük bir kasede tatlı toz biber, sarımsak tozu, kimyon, kekik, tuz ve karabiberi karıştır. Fırını 200 dereceye ayarla.',
      },
      {
        baslik: 'Tavuk ve sebzeleri harmanla',
        aciklama:
          'Geniş bir kasede tavukları zeytinyağının yarısı ve baharatın yarısıyla ovala. Ayrı bir kasede sebzeleri kalan yağ ve baharatla harmanla; böylece sebzeler tavuğun suyuyla yumuşamaz.',
      },
      {
        baslik: 'Tepside fırınla',
        aciklama:
          'Yağlı kağıt serili geniş tepsiye tavuk ve sebzeleri tek kat halinde, üst üste bindirmeden yay. Önceden ısınmış fırında sebzelerin kenarları hafif kızarana ve tavuk tam pişene kadar pişir; sürenin yarısında bir kez karıştır.',
        sureSn: 1500,
      },
      {
        baslik: 'Porsiyonlara ayır',
        aciklama:
          'Tepsiyi fırından alıp 10 dakika soğut. Sıcak servis edebilir ya da eşit porsiyonlar halinde saklama kaplarına paylaştırabilirsin.',
      },
    ],
    pufNoktasi:
      'Malzemeleri tepsiye seyrek yaymak kızarmanın anahtarıdır; kalabalık tepside sebzeler buharda haşlanır. Kaplarda buzdolabında 3 güne kadar saklanır; yeniden ısıtırken birkaç damla su ekle.',
  },
  {
    id: 'ton-balikli-yumurtali-fit-kase',
    baslik: 'Ton Balıklı Yumurtalı Fit Kase',
    altBaslik: 'Haşlanmış yumurta, ton balığı ve çıtır sebzelerle limon soslu pratik protein kasesi',
    kategori: 'salata',
    koleksiyonlar: ['yeni-nesil', 'fit', '15-dakika'],
    emoji: '🐟',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'ton balığı (konserve)', miktar: 160, birim: 'g', not: 'suyu süzülmüş' },
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'marul', miktar: 0.5, birim: 'adet', not: 'iri parçalanmış' },
      { ad: 'salatalık', miktar: 1, birim: 'adet', not: 'yarım ay dilimlenmiş' },
      { ad: 'kırmızı soğan', miktar: 0.5, birim: 'adet', not: 'ince piyazlık' },
      { ad: 'zeytin', miktar: 30, birim: 'g', not: 'çekirdeksiz' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Yumurtaları haşla',
        aciklama:
          'Yumurtaları kaynayan suya bırak ve orta katılıkta olacak şekilde 8-9 dakika haşla. Soğuk suya alıp soy, dörde böl.',
        sureSn: 510,
      },
      {
        baslik: 'Sebzeleri yerleştir',
        aciklama:
          'Kaselerin tabanına marulu yay; üzerine salatalık, kırmızı soğan ve zeytinleri paylaştır. Ton balığını çatalla iri parçalara ayırıp ortaya yerleştir.',
      },
      {
        baslik: 'Sosla ve tamamla',
        aciklama:
          'Zeytinyağı, limon suyu, tuz ve karabiberi küçük bir kavanozda çalkalayıp kaselerin üzerine gezdir. Haşlanmış yumurta dilimlerini en üste yerleştirip hemen servis et.',
      },
    ],
    pufNoktasi:
      'Kırmızı soğanı doğradıktan sonra bir tutam tuzla ovup soğuk sudan geçirirsen keskinliği gider, salataya tatlımsı bir çıtırlık katar.',
  },
  {
    id: 'firinda-mercimekli-fit-kofte',
    baslik: 'Fırında Mercimekli Fit Köfte',
    altBaslik: 'Kırmızı mercimek ve yulafla hazırlanan, fırında pişen etsiz köfte; hafif ve doyurucu',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'fit'],
    emoji: '🧆',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 350,
    beslenmeEtiketleri: ['vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kırmızı mercimek', miktar: 1, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'haşlama için' },
      { ad: 'yulaf ezmesi', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'yumurta', miktar: 1, birim: 'adet' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'rendelenmiş, suyu sıkılmış' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş', not: 'rendelenmiş' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı', not: 'üzerine sürmek için' },
    ],
    adimlar: [
      {
        baslik: 'Mercimeği haşla',
        aciklama:
          'Yıkanmış mercimeği suyla tencereye al; suyunu tamamen çekip ezilecek kıvama gelene dek kısık ateşte pişir. Kapağı açık bırak ki fazla su uçsun; sulu kalırsa köfte dağılır.',
        sureSn: 900,
      },
      {
        baslik: 'Harcı yoğur',
        aciklama:
          'Ilınan mercimeği geniş bir kaseye al. Yulaf ezmesi, yumurta, rendelenmiş soğan, sarımsak, maydanoz ve baharatları ekleyip elle yoğur. Harcı 10 dakika dinlendir; yulaf nemi çekince şekil alacak kıvama gelir.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Köfteleri şekillendir',
        aciklama:
          'Fırını 190 dereceye ayarla. Harçtan ceviz büyüklüğünde parçalar kopar, avucunda hafif bastırarak yassı köfteler yap ve yağlı kağıt serili tepsiye diz. Üzerlerine fırça ile zeytinyağı sür.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Köfteleri önceden ısınmış fırında altları kızarana kadar pişir; sürenin sonuna doğru bir kez çevir ki iki yüzü de renk alsın. Yoğurt ya da yeşillikli salata ile servet et.',
        sureSn: 1200,
      },
    ],
    pufNoktasi:
      'Rendelenen soğanın suyunu iyice sıkmak kritik; fazla nem köfteyi yumuşatıp dağıtır. Harç eline yapışıyorsa bir kaşık daha yulaf ekleyip 5 dakika beklet.',
  },

  // ---------------------------------------------------------------
  // MEAL-PREP KAVANOZ SALATALARI
  // ---------------------------------------------------------------
  {
    id: 'kavanozda-nohutlu-salata',
    baslik: 'Kavanozda Nohutlu Salata',
    altBaslik: 'Nar ekşili sos, nohut ve taze sebzelerle katman katman dizilen dayanıklı kavanoz salatası',
    kategori: 'salata',
    koleksiyonlar: ['yeni-nesil', 'meal-prep'],
    emoji: '🫙',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 380,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'nohut', miktar: 2, birim: 'su bardağı', not: 'haşlanmış, süzülmüş' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'salatalık', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'kırmızı soğan', miktar: 0.5, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'kıyılmış' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'nar ekşisi', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kimyon', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sosu kavanoz dibine koy',
        aciklama:
          'Zeytinyağı, limon suyu, nar ekşisi, kimyon ve tuzu küçük bir kasede çırp. Sosu iki temiz kavanozun dibine eşit paylaştır; sos her zaman en altta durmalı.',
      },
      {
        baslik: 'Dayanıklı malzemeleri diz',
        aciklama:
          'Sosun üzerine önce kırmızı soğanı, ardından nohutu ekle. Soğan sosun içinde beklerken yumuşar, nohut ise sosu emerek lezzetlenir.',
      },
      {
        baslik: 'Sulu sebzeleri katmanla',
        aciklama:
          'Nohudun üzerine domates ve salatalık küplerini yerleştir. Bu katman sosa değmediği sürece diriliğini korur.',
      },
      {
        baslik: 'Yeşillikle kapat',
        aciklama:
          'En üste kıyılmış maydanozu gevşekçe yerleştir ve kapağı sıkıca kapat. Yerken kavanozu ters çevirip çalkala ya da geniş bir kaseye boşalt.',
      },
    ],
    pufNoktasi:
      'Kavanoz salatasının kuralı basit: ıslak malzeme alta, yeşillik üste. Bu düzenle buzdolabında 3 gün tazeliğini korur; kavanozu servise kadar hiç ters çevirme.',
  },
  {
    id: 'kavanozda-bulgurlu-sebzeli-salata',
    baslik: 'Kavanozda Bulgurlu Sebzeli Salata',
    altBaslik: 'Limon soslu bulgur, rendelenmiş havuç ve renkli sebzelerle taşınabilir öğle yemeği',
    kategori: 'salata',
    koleksiyonlar: ['yeni-nesil', 'meal-prep'],
    emoji: '🥕',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 360,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'bulgur', miktar: 1, birim: 'su bardağı' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', not: 'sıcak, demleme için' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'küçük küp doğranmış' },
      { ad: 'mısır (konserve)', miktar: 80, birim: 'g', not: 'süzülmüş' },
      { ad: 'taze soğan', miktar: 2, birim: 'adet', not: 'ince kıyılmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'kıyılmış' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Bulguru demle ve soğut',
        aciklama:
          'Bulguru sıcak su ve tuzun yarısıyla kapaklı bir kapta suyunu çekene dek demlendir. Çatalla havalandırıp geniş bir tepsiye yayarak oda sıcaklığına gelmesini bekle; sıcak bulgur kavanozda buhar yapar.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Sosu hazırla ve dibe dök',
        aciklama:
          'Zeytinyağı, limon suyu, pul biber ve kalan tuzu çırp. İki kavanozun dibine eşit şekilde paylaştır.',
      },
      {
        baslik: 'Katmanları diz',
        aciklama:
          'Sosun üzerine sırasıyla rendelenmiş havucu, kırmızı biberi ve mısırı yerleştir. En üste soğumuş bulguru gevşekçe doldur; bastırma, taneler ezilmesin.',
      },
      {
        baslik: 'Yeşillikleri ekle ve kapat',
        aciklama:
          'Bulgurun üzerine taze soğan ve maydanozu serpiştir, kapağı sıkıca kapat. Yemeden hemen önce kavanozu iyice çalkalayıp bir kaseye boşalt.',
      },
    ],
    pufNoktasi:
      'Islak malzeme alta, tahıl ortaya, yeşillik üste — bu sıra bozulmadıkça salata buzdolabında 3 gün dipdiri kalır. Havuç sosun içinde bekledikçe tatlanır, bu yüzden en alt sebze katmanı hep havuç olsun.',
  },
  {
    id: 'kavanozda-ton-balikli-makarna',
    baslik: 'Kavanozda Ton Balıklı Makarna',
    altBaslik: 'Yoğurtlu hafif sos, ton balığı ve turşulu makarna salatası; ofis öğünü için ideal',
    kategori: 'salata',
    koleksiyonlar: ['yeni-nesil', 'meal-prep'],
    emoji: '🍝',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 450,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'makarna', miktar: 200, birim: 'g', not: 'kısa kesim; burgu ya da kelebek' },
      { ad: 'ton balığı (konserve)', miktar: 160, birim: 'g', not: 'suyu süzülmüş' },
      { ad: 'kornişon turşu', miktar: 4, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'mısır (konserve)', miktar: 80, birim: 'g', not: 'süzülmüş' },
      { ad: 'yoğurt', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'mayonez', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'hardal', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'taze soğan', miktar: 2, birim: 'adet', not: 'ince kıyılmış' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Makarnayı haşla ve soğut',
        aciklama:
          'Makarnayı bol tuzlu kaynar suda paket süresinden bir dakika az haşla. Süzüp soğuk sudan geçir; böylece pişmesi durur ve taneler birbirine yapışmaz.',
        sureSn: 600,
      },
      {
        baslik: 'Sosu kavanoz dibine paylaştır',
        aciklama:
          'Yoğurt, mayonez, hardal, kuru nane, tuz ve karabiberi pürüzsüz olana dek karıştır. Sosu iki kavanozun dibine eşit dök.',
      },
      {
        baslik: 'Katmanları oluştur',
        aciklama:
          'Sosun üzerine önce kornişon ve mısırı, ardından ton balığını iri parçalar halinde yerleştir. En üste soğumuş makarnayı doldurup taze soğanı serp.',
      },
      {
        baslik: 'Kapat ve servis öncesi karıştır',
        aciklama:
          'Kapağı sıkıca kapat. Yerken kavanozu geniş bir kaseye boşaltıp sosun her taneye bulanmasını sağlayarak karıştır.',
      },
    ],
    pufNoktasi:
      'Islak malzeme alta, makarna üste; sos makarnaya servisten önce değmezse salata buzdolabında 2 gün taptaze kalır. Makarnayı soğuk sudan geçirmeyi atlama, yoksa kavanozda topaklanır.',
  },

  // ---------------------------------------------------------------
  // TOST & SANDVİÇ YÜKSELTMELERİ
  // ---------------------------------------------------------------
  {
    id: 'uc-peynirli-tost',
    baslik: 'Üç Peynirli Tost',
    altBaslik: 'Kaşar, beyaz peynir ve cheddar üçlüsüyle dışı çıtır içi uzayan peynirli tost',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['yeni-nesil', '15-dakika'],
    emoji: '🧀',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 8,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 520,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'ekmek', miktar: 4, birim: 'dilim', not: 'kalın kesilmiş' },
      { ad: 'kaşar peyniri', miktar: 60, birim: 'g', not: 'rendelenmiş' },
      { ad: 'cheddar peyniri', miktar: 40, birim: 'g', not: 'rendelenmiş' },
      { ad: 'beyaz peynir', miktar: 40, birim: 'g', not: 'ufalanmış' },
      { ad: 'tereyağı', miktar: 20, birim: 'g', not: 'oda sıcaklığında' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', not: 'isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Peynir karışımını hazırla',
        aciklama:
          'Rendelenmiş kaşar ve cheddar ile ufalanmış beyaz peyniri bir kasede pul biberle karıştır. Üç peynirin karışması hem tuz dengesini hem de erime kıvamını kurar.',
      },
      {
        baslik: 'Tostları kur',
        aciklama:
          'Ekmek dilimlerinin dış yüzeylerine ince bir kat tereyağı sür. Yağsız yüzler içeride kalacak şekilde peynir karışımını iki dilimin arasına eşit paylaştır.',
      },
      {
        baslik: 'Kızart ve servis et',
        aciklama:
          'Tost makinesinde ya da ağırlık koyduğun tavada, dış yüzeyler derin altın rengi alana ve peynir tamamen eriyene kadar pişir. İkiye kesip sıcakken servis et.',
        sureSn: 360,
      },
    ],
    pufNoktasi:
      'Tereyağını ekmeğin içine değil dışına sürmek, kafe tostlarındaki o derin kızarmış kabuğun sırrıdır. Peyniri buzdolabından çıkar çıkmaz değil, 10 dakika bekletip kullanırsan daha dengeli erir.',
  },
  {
    id: 'sucuklu-kasarli-firin-tost',
    baslik: 'Sucuklu Kaşarlı Fırın Tost',
    altBaslik: 'Salçalı tereyağı sürülmüş ekmekte bol kaşarlı sucuklu, fırında pişen kalabalık tostu',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🥪',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 560,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'sandviç ekmeği', miktar: 2, birim: 'adet', not: 'ortadan ikiye açılmış' },
      { ad: 'sucuk', miktar: 80, birim: 'g', not: 'ince dilimlenmiş' },
      { ad: 'kaşar peyniri', miktar: 100, birim: 'g', not: 'rendelenmiş' },
      { ad: 'tereyağı', miktar: 20, birim: 'g', not: 'eritilmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Salçalı yağı hazırla',
        aciklama:
          'Eritilmiş tereyağını domates salçası ve kekikle karıştırıp macun kıvamına getir. Fırını 200 dereceye ayarla.',
      },
      {
        baslik: 'Sucukları terlet',
        aciklama:
          'Sucuk dilimlerini yağsız tavada orta ateşte, yağını salıp kenarları hafif kıvrılana kadar kısaca çevir. Bu ön pişirme tostun içinin yağ göllenmesini önler.',
        sureSn: 120,
      },
      {
        baslik: 'Tostları doldur',
        aciklama:
          'Ekmeklerin iç yüzeylerine salçalı yağı sür. Alt yarıya kaşarın yarısını, üzerine sucukları, en üste kalan kaşarı yerleştirip ekmeğin üst yarısıyla kapat.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Tostları tepsiye alıp üzerlerine kalan salçalı yağı sür. Önceden ısınmış fırında ekmekler kızarıp içindeki kaşar eriyene kadar pişir. Dilimleyip sıcak servis et.',
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Tostun üzerine ağır bir tepsi kapatarak fırınlarsan tost makinesindeki gibi bastırılmış, her ısırıkta eşit dolgulu bir sonuç alırsın. Sucuğu önceden terletmek ekmeğin yağlanıp yumuşamasını engeller.',
  },
  {
    id: 'akdeniz-usulu-sebzeli-sandvic',
    baslik: 'Akdeniz Usulü Sebzeli Sandviç',
    altBaslik: 'Labne sürülmüş ekmekte zeytinli, domatesli ve rokalı ferah vejetaryen sandviç',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['yeni-nesil', '15-dakika'],
    emoji: '🥙',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 4,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 400,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'sandviç ekmeği', miktar: 2, birim: 'adet' },
      { ad: 'labne', miktar: 60, birim: 'g' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'ince dilimlenmiş' },
      { ad: 'salatalık', miktar: 1, birim: 'adet', not: 'boyuna ince dilimlenmiş' },
      { ad: 'zeytin', miktar: 40, birim: 'g', not: 'çekirdeği çıkarılmış, iri kıyılmış' },
      { ad: 'roka', miktar: 0.5, birim: 'demet', not: 'ayıklanmış' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Ekmekleri hafif kızart',
        aciklama:
          'Sandviç ekmeklerini ortadan ikiye açıp kesik yüzleri kuru tavada ya da tost makinesinde hafifçe kızart. Ilık ekmek labneyi güzelce taşır.',
        sureSn: 240,
      },
      {
        baslik: 'Zeytinli ezmeyi yap',
        aciklama:
          'İri kıyılmış zeytini zeytinyağı, kekik ve karabiberle karıştır. Ekmeklerin alt yarısına labneyi sür, üzerine zeytinli karışımı yay.',
      },
      {
        baslik: 'Sandviçi kur',
        aciklama:
          'Labneli tabanın üzerine sırasıyla domates ve salatalık dilimlerini, en üste rokayı yerleştir. Ekmeğin üst yarısıyla kapatıp hafifçe bastır ve ikiye keserek servis et.',
      },
    ],
    pufNoktasi:
      'Domates dilimlerini sandviçe koymadan önce kağıt havlu üzerinde bir dakika bekletirsen fazla suyu çekilir, ekmek yumuşamadan yenir. Yanına ayran ile birebir gider.',
  },

  // ---------------------------------------------------------------
  // TEK KAP & PRATİK
  // ---------------------------------------------------------------
  {
    id: 'tek-kasede-yulafli-muzlu-kek',
    baslik: 'Tek Kasede Yulaflı Muzlu Kek',
    altBaslik: 'Tek kasede karışan, rafine şekersiz ballı yulaflı muzlu kek; mikser gerektirmez',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'tek-tencere'],
    emoji: '🍌',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 300,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'muz', miktar: 2, birim: 'adet', not: 'iyi olgunlaşmış' },
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'yulaf ezmesi', miktar: 150, birim: 'g' },
      { ad: 'süt', miktar: 100, birim: 'ml' },
      { ad: 'bal', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'ceviz içi', miktar: 40, birim: 'g', not: 'iri kırılmış' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Muzları ez',
        aciklama:
          'Fırını 170 dereceye ayarla. Muzları geniş bir kasede çatalla püre kıvamına gelene kadar ez; ufak parçalar kalması kekin dokusuna yarar.',
      },
      {
        baslik: 'Islak malzemeleri çırp',
        aciklama:
          'Aynı kaseye yumurtaları, sütü ve balı ekleyip çırpma teliyle homojen olana kadar karıştır.',
      },
      {
        baslik: 'Kuruları ekle',
        aciklama:
          'Yulaf ezmesi, kabartma tozu, tarçın ve tuzu kasenin üzerine ekle; spatulayla alttan üste, un görünmeyene kadar karıştır. Cevizin çoğunu harca kat, bir avucunu üste ayır.',
      },
      {
        baslik: 'Kalıba dök ve pişir',
        aciklama:
          'Harcı yağlı kağıt serili küçük bir kek kalıbına dök, ayırdığın cevizi üzerine serp. Önceden ısınmış fırında ortasına batırılan kürdan temiz çıkana kadar pişir. Kalıpta 10 dakika dinlendirip dilimle.',
        sureSn: 2100,
      },
    ],
    pufNoktasi:
      'Kabuğu kararmaya başlamış muzlar bu kekin en tatlısını verir; sarı sert muzla yaparsan bir kaşık bal daha ekle. Harç tek kasede karıştığı için bulaşık da tek kalır.',
  },
  {
    id: 'tek-tavada-sebzeli-brunch-tavasi',
    baslik: 'Sebzeli Yumurtalı Brunch Tavası',
    altBaslik: 'Tek tavada kızaran patates ve sebzelerin üzerinde göz yumurtalarla hafta sonu tavası',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['yeni-nesil', 'tek-tencere'],
    emoji: '🍳',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 400,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'küçük küp doğranmış' },
      { ad: 'kabak', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'yumurta', miktar: 3, birim: 'adet' },
      { ad: 'kaşar peyniri', miktar: 50, birim: 'g', not: 'rendelenmiş' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Patatesleri kızart',
        aciklama:
          'Geniş tavada zeytinyağını ısıt, patates küplerini tek kat halinde yay. Orta ateşte, ara sıra çevirerek kenarları kızarıp içi yumuşayana kadar pişir.',
        sureSn: 600,
      },
      {
        baslik: 'Sebzeleri ekle',
        aciklama:
          'Soğanı ekleyip şeffaflaşana kadar kavur; ardından kabak ve kırmızı biberi kat. Sebzeler diri kalacak kadar, 5-6 dakika daha pişir. Tuz, karabiber ve pul biberle tatlandır.',
        sureSn: 360,
      },
      {
        baslik: 'Yumurtalar için yuva aç',
        aciklama:
          'Kaşığın sırtıyla sebzelerin arasında üç çukur aç, her birine bir yumurta kır. Tavanın kapağını kapat ve beyazlar tutup sarılar akışkan kalana dek kısık ateşte pişir.',
        sureSn: 300,
      },
      {
        baslik: 'Peynirle tamamla',
        aciklama:
          'Ocağı kapat, rendelenmiş kaşarı sıcak tavanın üzerine serp ve kapağı bir dakika daha kapalı tut. Tavayı doğrudan sofraya taşıyıp ekmekle servis et.',
      },
    ],
    pufNoktasi:
      'Patatesi diğer sebzelerden önce, acele etmeden kızartmak tavanın karakterini belirler; hepsini aynı anda atarsan patates haşlanmış kalır. Kapak, yumurtanın üstünü ocakta buğuda pişirir.',
  },
  {
    id: 'bes-malzemeli-tavuk-noodle-tava',
    baslik: '5 Malzemeli Tavuk Noodle Tava',
    altBaslik: 'Soya soslu tavuk, biber ve noodle ile yağ ve tuz hariç 5 malzemeyle hızlı wok tavası',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', '15-dakika', 'tek-tencere'],
    emoji: '🍜',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 490,
    beslenmeEtiketleri: ['laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 250, birim: 'g', not: 'ince şeritler halinde' },
      { ad: 'noodle', miktar: 2, birim: 'adet' },
      { ad: 'soya sosu', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'ince şerit doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ince dilimlenmiş' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', not: 'sos için' },
    ],
    adimlar: [
      {
        baslik: 'Noodle suyunu kaynat',
        aciklama:
          'Noodle için bir tencerede su kaynat, paket süresinden bir dakika az haşlayıp süz. Yapışmaması için üzerine birkaç damla yağ gezdir.',
        sureSn: 240,
      },
      {
        baslik: 'Tavukları mühürle',
        aciklama:
          'Geniş tava ya da wokta yağı iyice kızdır. Tavuk şeritlerini tek kat halinde yayıp karıştırmadan bir dakika bekle, sonra yüksek ateşte renk alana kadar çevirerek pişir.',
        sureSn: 240,
      },
      {
        baslik: 'Biber ve sarımsağı kat',
        aciklama:
          'Kırmızı biber şeritlerini ve sarımsağı tavaya ekle; biberler diri kalacak şekilde 2 dakika yüksek ateşte çevir.',
        sureSn: 120,
      },
      {
        baslik: 'Sosla ve harmanla',
        aciklama:
          'Soya sosunu ve yarım bardak suyu tavaya dök, kaynayınca haşlanmış noodle ekle. Sos noodle tarafından emilip parlak bir kıvam alana dek maşayla harmanla ve hemen servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Tavuğun mühürlenmesi için tavanın gerçekten kızgın olması şart; soğuk tavada tavuk suyunu salıp haşlanır. Soya sosu yeterince tuzlu olduğundan ekstra tuz gerekmez.',
  },
];
