import type { Tarif } from '@/types/tarif';

// Yeni nesil — airfryer & pratik fırın tarifleri.
// Airfryer'ı olmayanlar için her tarifin pufNoktasi'nda fanlı fırın alternatifi verilir.
export const AIRFRYER_PRATIK: Tarif[] = [
  {
    id: 'airfryer-elma-dilim-patates',
    baslik: 'Çıtır Elma Dilim Patates',
    altBaslik: 'Mısır unu hilesiyle dışı çıtır içi yumuşak, bir tas yağa bulaşmadan patates keyfi',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['yeni-nesil', 'airfryer'],
    emoji: '🍟',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 19,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 290,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'patates', miktar: 4, birim: 'adet', not: 'orta boy, elma dilim' },
      { ad: 'mısır unu', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'sarımsak tozu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Patatesleri elma dilim doğra',
        aciklama:
          'Patatesleri yıka, dilersen kabuklu bırak. Her patatesi önce ikiye, sonra kalın elma dilimleri halinde 6-8 parçaya böl. Dilimlerin kalınlığı birbirine yakın olsun ki aynı anda pişsinler.',
      },
      {
        baslik: 'Nişastasını suya bırak',
        aciklama:
          'Dilimleri soğuk suda 10 dakika beklet. Fazla nişasta suya geçer, çıtırlık belirgin şekilde artar. Süre sonunda süz ve temiz bir bezle iyice kurula; ıslak patates çıtır olmaz.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Baharatlı harçla kapla',
        aciklama:
          'Geniş bir kapta patatesleri önce zeytinyağıyla, sonra mısır unu, tatlı toz biber, sarımsak tozu ve tuz karışımıyla harmanla. Her dilim ince bir katmanla kaplanmalı; topaklanan un olursa silkeleyerek at.',
      },
      {
        baslik: 'Airfryer sepetinde pişir',
        aciklama:
          'Dilimleri 190°C\'ye ısıtılmış airfryer sepetine üst üste binmeyecek şekilde yay. 18-20 dakika pişir; yarıda bir kez sepeti sallayarak çevir. Kenarları kızarıp içi yumuşayınca hazır.',
        sureSn: 1140,
      },
    ],
    pufNoktasi:
      'Sepeti asla tıka basa doldurma; iki partide pişirmek tek kalabalık partiden daha hızlı çıtırlatır. Airfryer yoksa 200°C fanlı fırında yağlı kağıt üzerinde tek sıra dizip 28-30 dakika pişir, yarıda çevir.',
  },
  {
    id: 'airfryer-aci-soslu-tavuk-kanat',
    baslik: 'Acı Soslu Tavuk Kanat',
    altBaslik: 'Bal ile yumuşatılmış acı sosla kaplanan, derisi çıtır çıtır kanatlar',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'airfryer'],
    emoji: '🍗',
    porsiyon: 3,
    hazirlikDk: 10,
    pisirmeDk: 22,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk kanat', miktar: 800, birim: 'g', not: 'orta parçaları, uçları alınmış' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'sarımsak tozu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'acı sos', miktar: 3, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
    ],
    adimlar: [
      {
        baslik: 'Kanatları kurula ve baharatla',
        aciklama:
          'Kanatları kağıt havluyla iyice kurula; kuru deri çıtırlığın ön şartı. Zeytinyağı, sarımsak tozu, tatlı toz biber ve tuzla elleyerek ov, her parça eşit kaplansın.',
      },
      {
        baslik: 'Marine olmaya bırak',
        aciklama:
          'Kapağını kapatıp buzdolabında 30 dakika dinlendir. Baharatlar ete işlerken deri de biraz daha kurur; acelen varsa 15 dakikayla da idare eder.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kanatları çevirerek pişir',
        aciklama:
          '200°C\'ye ısıtılmış airfryer sepetine kanatları tek sıra diz. 20-22 dakika pişir; 12. dakikada maşayla hepsini çevir. Deri koyu altın rengini alıp kemikten hafif çekilince hazır.',
        sureSn: 1320,
      },
      {
        baslik: 'Sıcak sosla kapla',
        aciklama:
          'Küçük bir tavada acı sosla balı kısık ateşte 1-2 dakika ısıtıp pürüzsüzleştir. Sıcak kanatları geniş bir kaba al, sosu üzerine dök ve kabı sallayarak her kanadı parlak sosla kapla.',
      },
    ],
    pufNoktasi:
      'Sos pişirme sırasında değil sonda eklenir; erken sürülen bal airfryer içinde yanar. Airfryer yoksa 210°C fanlı fırında tel ızgara üzerinde 35-40 dakika pişirip aynı şekilde sosla.',
  },
  {
    id: 'airfryer-citir-karnabahar',
    baslik: 'Çıtır Karnabahar',
    altBaslik: 'Galeta ununa bulanan çiçekler airfryer\'da kızarır; et yemeklerine gösterişli eş',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['yeni-nesil', 'airfryer'],
    emoji: '🥦',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'karnabahar', miktar: 1, birim: 'adet', not: 'orta boy' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'galeta unu', miktar: 5, birim: 'yemek kaşığı' },
      { ad: 'sarımsak tozu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Karnabaharı çiçeklerine ayır',
        aciklama:
          'Karnabaharı lokma büyüklüğünde çiçeklere ayır, yıkayıp çok iyi süz. Üzerinde su kalırsa galeta unu hamurlaşır; gerekirse temiz bezle tampon yaparak kurula.',
      },
      {
        baslik: 'Önce yağla, sonra unla kapla',
        aciklama:
          'Çiçekleri geniş bir kapta zeytinyağıyla iyice harmanla. Ayrı bir kapta galeta unu, sarımsak tozu, tatlı toz biber, tuz ve karabiberi karıştır; yağlı çiçekleri bu karışıma bulayıp fazlasını silkele.',
      },
      {
        baslik: 'Sallayarak kızart',
        aciklama:
          '190°C airfryer sepetine çiçekleri tek kat yay ve 14-15 dakika pişir. 7. dakikada sepeti sallayarak çevir. Kenarlar kahverengileşip çatal batınca hafif direnç bırakıyorsa tamamdır.',
        sureSn: 900,
      },
      {
        baslik: 'Sıcakken servis et',
        aciklama:
          'Karnabahar bekledikçe yumuşar; sepetten çıkar çıkmaz servis tabağına al. Yanına limonlu tahin sosu ya da nar ekşili bir salata çok yakışır.',
      },
    ],
    pufNoktasi:
      'Galeta ununu yağdan sonra eklemek kaplamanın dökülmesini engeller; ıslak çiçeğe un asla tutmaz. Airfryer yoksa 200°C fanlı fırında 22-25 dakika pişir, yarıda bir kez karıştır.',
  },
  {
    id: 'airfryer-sarimsakli-mantar',
    baslik: 'Sarımsaklı Mantar',
    altBaslik: 'On dakikada kekikli, sarımsaklı, suyu içinde kalmış diri mantarlar',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['yeni-nesil', 'airfryer', '15-dakika'],
    emoji: '🍄',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 205,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'mantar', miktar: 400, birim: 'g', not: 'kültür mantarı, bütün ya da ikiye bölünmüş' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', not: 'ince kıyılmış' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Mantarları silerek temizle',
        aciklama:
          'Mantarları yıkamak yerine nemli bir bezle sil; su çeken mantar pişerken haşlanır. Küçükleri bütün bırak, irileri ikiye böl.',
      },
      {
        baslik: 'Sarımsaklı yağla harmanla',
        aciklama:
          'Bir kapta zeytinyağı, kıyılmış sarımsak, kekik, pul biber ve tuzu karıştır. Mantarları ekleyip her tarafı yağlanana kadar nazikçe harmanla.',
      },
      {
        baslik: 'Kısa ve sıcak pişir',
        aciklama:
          '190°C airfryer sepetinde 9-10 dakika pişir; 5. dakikada bir kez salla. Mantarlar büzüşmeden hafif kızarınca çıkar, salınan sarımsaklı suyuyla birlikte servis et.',
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Tuzu erken atmaktan çekinme ama sepeti kalabalık etme; üst üste binen mantar buharda pişer. Airfryer yoksa 220°C fanlı fırında geniş tepside 15-18 dakika kavur.',
  },
  {
    id: 'airfryer-soya-balli-somon',
    baslik: 'Soya-Ballı Somon Fileto',
    altBaslik: 'Dokuz dakikada parlak glazeli, ortası pembe kalan somon; hafta içi kurtarıcısı',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'airfryer', '15-dakika'],
    emoji: '🐟',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 9,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 450,
    beslenmeEtiketleri: ['laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'somon', miktar: 400, birim: 'g', not: '2 fileto, derili' },
      { ad: 'soya sosu', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'rendelenmiş' },
      { ad: 'zencefil', miktar: 1, birim: 'çay kaşığı', not: 'taze rendelenmiş' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
    ],
    adimlar: [
      {
        baslik: 'Glaze sosunu karıştır',
        aciklama:
          'Küçük bir kapta soya sosu, bal, rendelenmiş sarımsak, zencefil ve limon suyunu çırp. Sosun yarısını fırçalamak, yarısını servis için ayır.',
      },
      {
        baslik: 'Somonu sosla fırçala',
        aciklama:
          'Filetoları kağıt havluyla kurulayıp derili yüzleri alta gelecek şekilde yağlı kağıda yerleştir. Ayırdığın ilk yarım sosun tamamını üst yüzeylerine fırçayla sür.',
      },
      {
        baslik: 'Yüksek ısıda parlat',
        aciklama:
          '200°C airfryer\'da 8-9 dakika pişir; son 2 dakikada kalan sostan bir kat daha sürerek glazeyi parlat. Çatalla bastırınca etin katmanları kolayca ayrılıyorsa hazır.',
        sureSn: 510,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Somonu 2 dakika dinlendir; ısı merkeze eşit dağılır. Pilav ya da haşlanmış sebze üzerine alıp ayırdığın sostan gezdirerek servis et.',
      },
    ],
    pufNoktasi:
      'Somonu ölçüsünden uzun pişirmek en sık yapılan hata; 9 dakikayı geçme, dinlenirken pişmeye devam eder. Airfryer yoksa 220°C fanlı fırında 12-14 dakika pişir, glazeyi yine son dakikalarda tazele.',
  },
  {
    id: 'airfryer-kofte',
    baslik: 'Airfryer Köfte',
    altBaslik: 'Tava başında durmadan, damlayan yağı sepette bırakan yumuşacık ev köftesi',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'airfryer'],
    emoji: '🥩',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 13,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: ['laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 500, birim: 'g', not: 'orta yağlı dana' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'rendelenmiş, suyu sıkılmış' },
      { ad: 'galeta unu', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'yumurta', miktar: 1, birim: 'adet' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Köfte harcını yoğur',
        aciklama:
          'Kıymayı rendelenmiş soğan, galeta unu, yumurta, maydanoz, kimyon, karabiber ve tuzla 3-4 dakika yoğur. Harç ele yapışmayı bırakıp toparlanınca kıvamındadır; fazla yoğurmak köfteyi sertleştirir.',
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama:
          'Üzerini kapatıp buzdolabında 15 dakika beklet. Galeta unu nemi çeker, köfteler pişerken dağılmaz ve şekil vermek kolaylaşır.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Eşit boyda şekil ver',
        aciklama:
          'Elini hafifçe ıslatıp harçtan ceviz büyüklüğünde parçalar kopar, yassı yuvarlak köfteler yap. Hepsinin kalınlığı aynı olsun; kalın olan çiğ, ince olan kuru kalır.',
      },
      {
        baslik: 'Çevirerek pişir',
        aciklama:
          '190°C airfryer sepetine köfteleri aralıklı diz, 12-14 dakika pişir. 7. dakikada tek tek çevir. Üzerleri kızarıp ortası bastırınca diri hissettirdiğinde hazırdır.',
        sureSn: 780,
      },
    ],
    pufNoktasi:
      'Soğanın suyunu mutlaka sık; suyu kalan soğan harcı gevşetir ve köfte sepette yayılır. Airfryer yoksa 200°C fanlı fırında yağlı kağıtta 18-20 dakika pişir, yarıda çevir.',
  },
  {
    id: 'airfryer-citir-tavuk-parcalari',
    baslik: 'Çıtır Tavuk Parçaları',
    altBaslik: 'Kızartma tadında ama fritöz yağı olmadan; çocukların bayıldığı ev usulü nugget',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'airfryer'],
    emoji: '🍗',
    porsiyon: 3,
    hazirlikDk: 20,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 400,
    beslenmeEtiketleri: ['laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 500, birim: 'g' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', not: 'çırpılmış' },
      { ad: 'galeta unu', miktar: 1, birim: 'su bardağı' },
      { ad: 'mısır unu', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'sarımsak tozu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı', not: 'üzerine fırçalamak için' },
    ],
    adimlar: [
      {
        baslik: 'Tavuğu lokma boyu kes',
        aciklama:
          'Tavuk göğsünü iki parmak eninde lokmalık parçalara kes ve kağıt havluyla kurula. Parçalar eşit boyda olursa hepsi aynı dakikada pişer.',
      },
      {
        baslik: 'Panelemeyi hazırla',
        aciklama:
          'Bir kapta yumurtayı çırp. Ayrı bir kapta galeta unu, mısır unu, sarımsak tozu, tatlı toz biber ve tuzu karıştır; mısır unu kaplamaya ekstra çıtırlık verir.',
      },
      {
        baslik: 'Parçaları sırayla panele',
        aciklama:
          'Her tavuk parçasını önce yumurtaya, sonra baharatlı galeta karışımına bula; kaplamayı avucunla hafifçe bastırarak yapıştır. Panelenen parçaları tepsiye tek sıra diz.',
      },
      {
        baslik: 'Yağla fırçalayıp kızart',
        aciklama:
          'Parçaların üzerine fırçayla incecik zeytinyağı sür; kuru galeta yağsız kızarmaz. 200°C airfryer\'da 11-12 dakika pişir, 6. dakikada çevir. Kaplama derin altın rengini alınca hazır.',
        sureSn: 720,
      },
    ],
    pufNoktasi:
      'Panelemeden sonra 10 dakika bekletirsen kaplama tavuğa daha iyi tutunur ve dökülmez. Airfryer yoksa 210°C fanlı fırında tel ızgara üzerinde 18-20 dakika pişir.',
  },
  {
    id: 'airfryer-patlican-cips',
    baslik: 'Patlıcan Cips',
    altBaslik: 'İncecik dilimlenip mısır unuyla kızaran patlıcan; çıtır çıtır bir akşam atıştırması',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['yeni-nesil', 'airfryer'],
    emoji: '🍆',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 14,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 200,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'patlıcan', miktar: 2, birim: 'adet', not: 'ince kabuklu' },
      { ad: 'mısır unu', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Patlıcanları ince dilimle',
        aciklama:
          'Patlıcanları alacalı soyup yarım santimden ince yuvarlak dilimler kes. Dilimler ne kadar eşit olursa cips o kadar düzgün kızarır; mandolin varsa işini kolaylaştırır.',
      },
      {
        baslik: 'Tuzlayıp acısını al',
        aciklama:
          'Dilimleri tuzlayıp süzgeçte 10 dakika beklet. Salınan koyu su acılıkla birlikte fazla nemi de götürür. Süre sonunda dilimleri kağıt havluyla bastırarak kurula.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Yağ ve unla harmanla',
        aciklama:
          'Dilimleri zeytinyağıyla harmanla; sonra mısır unu, tatlı toz biber ve kekik karışımına tek tek bulayıp fazla unu silkele.',
      },
      {
        baslik: 'Tek kat dizip kızart',
        aciklama:
          '180°C airfryer sepetine dilimleri üst üste gelmeden diz, 12-14 dakika pişir; 7. dakikada çevir. Kenarları kıvrılıp koyulaşınca çıkar; soğudukça daha da çıtırlaşır.',
        sureSn: 780,
      },
    ],
    pufNoktasi:
      'Cipsler sepetten yumuşak çıkmış gibi görünse de panikleme; tel üzerinde 5 dakika soğuyunca sertleşir. Airfryer yoksa 200°C fanlı fırında yağlı kağıtta 18-20 dakika pişir, yarıda çevir.',
  },
  {
    id: 'airfryer-sebzeli-tavuk-sis',
    baslik: 'Sebzeli Tavuk Şiş',
    altBaslik: 'Salçalı marineli tavuk ve renkli sebzeler mini şişlerde; mangal tadı balkonsuz',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'airfryer'],
    emoji: '🍢',
    porsiyon: 3,
    hazirlikDk: 20,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 380,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 500, birim: 'g', not: 'iri kuşbaşı' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'kare doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'iri parçalar' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'zar zar ayrılmış' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Marinesi için' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Marinesi için' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'Marinesi için' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı', grup: 'Marinesi için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Marinesi için' },
    ],
    adimlar: [
      {
        baslik: 'Marineyi hazırla',
        aciklama:
          'Geniş bir kapta zeytinyağı, biber salçası, kekik, tatlı toz biber ve tuzu karıştır. Kuşbaşı tavukları ekleyip marineyi elinle her parçaya iyice yedir.',
      },
      {
        baslik: 'Tavuğu dinlenmeye bırak',
        aciklama:
          'Kabın üzerini kapatıp buzdolabında 30 dakika marine et. Salçalı yağ ete işledikçe tavuk hem renklenir hem sulu kalır.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Şişlere dizerek sırala',
        aciklama:
          'Airfryer sepetine sığan kısa ahşap şişlere bir parça tavuk, bir parça biber ve soğan yaprağı sırasıyla diz. Parçaları sıkıştırma; aralarında hava dolaşırsa eşit pişer.',
      },
      {
        baslik: 'Şişleri çevirerek pişir',
        aciklama:
          '200°C airfryer\'da 14-15 dakika pişir; 8. dakikada şişleri çevir. Tavuğun kenarları kızarıp en kalın parçanın içi beyazlaşınca hazır. Lavaş ve söğüş eşliğinde servis et.',
        sureSn: 870,
      },
    ],
    pufNoktasi:
      'Ahşap şişleri dizmeden önce 10 dakika suda beklet; kuru şiş sıcak havada kararır. Airfryer yoksa 220°C fanlı fırında tepsiye aralıklı dizip 20-22 dakika pişir, yarıda çevir.',
  },
  {
    id: 'airfryer-falafel',
    baslik: 'Airfryer Falafel',
    altBaslik: 'Islatılmış nohut ve bol yeşillikle klasik doku; kızartma yağına hiç girmeden',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'airfryer'],
    emoji: '🧆',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 320,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'nohut', miktar: 250, birim: 'g', not: 'kuru; haşlanmamış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'iri doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş' },
      { ad: 'maydanoz', miktar: 1, birim: 'demet' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', not: 'üzerine fırçalamak için' },
    ],
    adimlar: [
      {
        baslik: 'Nohudu bir gece ıslat',
        aciklama:
          'Kuru nohudu bol suda en az 12 saat beklet; hacmi iki katına çıkar. Falafelde haşlanmış nohut kullanılmaz, harç dağılır — ıslatılmış çiğ nohut şart.',
        beklemeAdimi: true,
      },
      {
        baslik: 'Harcı robottan geçir',
        aciklama:
          'Süzülmüş nohudu soğan, sarımsak, maydanoz, kimyon, karabiber ve tuzla mutfak robotunda çek. Püre değil, avuçta sıkınca dağılmayan iri kumlu bir doku hedefle; ara ara kenarları sıyır.',
      },
      {
        baslik: 'Köfteleri şekillendir',
        aciklama:
          'Harçtan yemek kaşığı büyüklüğünde parçalar alıp avucunda sıkıca yassı toplar yap. Harç gevşek gelirse buzdolabında 15 dakika dinlendir; kesinlikle un ekleme.',
      },
      {
        baslik: 'Fırçalayıp kızart',
        aciklama:
          'Falafellerin iki yüzüne fırçayla zeytinyağı sür ve 190°C airfryer sepetine aralıklı diz. 14-15 dakika pişir, 8. dakikada çevir. Dışları koyu kahve, içleri yeşilimsi ve nemli kalmalı.',
        sureSn: 900,
      },
    ],
    pufNoktasi:
      'Robotta fazla çekilen harç hamura döner ve içi macun gibi olur; iri kumlu dokuda durmak falafelin sırrı. Airfryer yoksa 200°C fanlı fırında yağlı kağıtta 20-22 dakika pişir, yarıda çevir.',
  },
  {
    id: 'airfryer-kok-sebze-kavurmasi',
    baslik: 'Fırın Kök Sebze Kavurması',
    altBaslik: 'Patates, havuç ve soğan kekikli zeytinyağıyla karamelize; her yemeğin yanına gider',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['yeni-nesil', 'airfryer'],
    emoji: '🥕',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 240,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'iri küp' },
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'kalın halka' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'dörde bölünmüş' },
      { ad: 'sarımsak', miktar: 4, birim: 'diş', not: 'zarıyla, bütün' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri eşit boyda doğra',
        aciklama:
          'Patatesi iri küp, havucu kalın halka kes; soğanı dörde bölüp yapraklarına ayır. Parçalar ceviz boyunda ve birbirine yakın olursa hepsi aynı anda yumuşar.',
      },
      {
        baslik: 'Baharatlı yağla kapla',
        aciklama:
          'Sebzeleri ve zarlı sarımsak dişlerini geniş bir kapta zeytinyağı, kekik, tatlı toz biber ve tuzla harmanla. Her parça parlayana kadar elinle karıştır.',
      },
      {
        baslik: 'Karamelize olana dek pişir',
        aciklama:
          '190°C airfryer sepetinde 18-20 dakika pişir; 10. dakikada sepeti sallayarak karıştır. Patates kenarları kızarıp havuçlar tatlanınca hazır.',
        sureSn: 1140,
      },
      {
        baslik: 'Sarımsağı ezerek servis et',
        aciklama:
          'Pişen sarımsak dişlerini zarından çıkarıp çatalla ezerek sebzelerin arasına karıştır; kavurmaya kremamsı bir tat verir. Sıcak veya oda sıcaklığında servis edebilirsin.',
      },
    ],
    pufNoktasi:
      'Havuç patatesle aynı sürede pişsin diye halkaları patates küplerinden biraz kalın kes; havuç daha dayanıklıdır. Airfryer yoksa 200°C fanlı fırında geniş tepside 30-35 dakika pişir, yarıda karıştır.',
  },
];
