import type { Tarif } from '@/types/tarif';

// Klasik Türk çorbaları — 4 porsiyon standart.
// Ölçü standartları: su bardağı = 200 ml, yemek kaşığı = 15 ml, çay kaşığı = 5 ml.
export const CORBALAR: Tarif[] = [
  {
    id: 'mercimek-corbasi',
    baslik: 'Mercimek Çorbası',
    altBaslik: 'Lokanta kıvamında, ipek gibi süzme kırmızı mercimek çorbası',
    kategori: 'corba',
    koleksiyonlar: ['101', 'tek-tencere', 'ramazan'],
    emoji: '🍲',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 170,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kırmızı mercimek', miktar: 1, birim: 'su bardağı', not: 'yıkanıp süzülmüş' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'iri doğranmış' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 6, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kimyon', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'servis için, dilimlenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Soğanları kavur',
        aciklama:
          'Tencerede zeytinyağını kızdır. Doğranmış soğanı ekleyip orta ateşte pembeleşene kadar kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Havuç ve mercimeği ekle',
        aciklama:
          'Havuçları ekleyip 2-3 dakika çevir. Yıkanmış mercimeği ilave et, bir tur karıştırarak yağla buluştur.',
        sureSn: 180,
      },
      {
        baslik: 'Suyu ekleyip pişir',
        aciklama:
          'Sıcak suyu ve tuzu ekle. Kaynayınca kısık ateşe al, mercimekler iyice dağılana kadar kapağı aralık pişir. Ara ara köpüğünü al.',
        sureSn: 1500,
      },
      {
        baslik: 'Çorbayı pürüzsüzleştir',
        aciklama:
          'Ocaktan alıp el blenderıyla pürüzsüz olana kadar çek. Kıvamı koyu geldiyse az sıcak su ekleyerek aç.',
      },
      {
        baslik: 'Baharatla ve servis et',
        aciklama:
          'Kimyon ve karabiberi ekleyip bir taşım daha kaynat. Yanında limon dilimleriyle sıcak servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Mercimeği pişirmeden önce nişastası akana kadar yıkarsan çorba hem daha parlak olur hem dibi tutmaz.',
  },
  {
    id: 'ezogelin-corbasi',
    baslik: 'Ezogelin Çorbası',
    altBaslik: 'Bol naneli, salçalı ve pul biberli efsane Antep çorbası',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'ramazan'],
    emoji: '🌶️',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 195,
    beslenmeEtiketleri: ['vegan', 'vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kırmızı mercimek', miktar: 1, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'pirinç', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'ince bulgur', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 7, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Soğan ve sarımsağı kavur',
        aciklama:
          'Zeytinyağını tencerede kızdır. Soğanı ekleyip yumuşayana kadar kavur, sarımsağı ilave edip kokusu çıkana dek çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Salçaları kavur',
        aciklama:
          'Domates ve biber salçasını ekle, kokusu çıkana kadar 1-2 dakika kavur. Salçanın çiğliği gitmeden su ekleme.',
        sureSn: 120,
      },
      {
        baslik: 'Taneleri ve suyu ekle',
        aciklama:
          'Mercimek, pirinç ve bulguru ekleyip karıştır. Sıcak suyu ve tuzu ilave et, kaynamaya bırak.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kaynadıktan sonra kısık ateşte, ara ara karıştırarak taneler iyice yumuşayana kadar pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Nane ve pul biberle tatlandır',
        aciklama:
          'Kuru nane ve pul biberi ekleyip bir taşım kaynat. Dileyen üzerine limon sıkarak servis edebilir.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Ezogelin blenderdan geçirilmez; taneli dokusu bu çorbanın imzasıdır, dinlendikçe koyulaşırsa sıcak suyla aç.',
  },
  {
    id: 'yayla-corbasi',
    baslik: 'Yayla Çorbası',
    altBaslik: 'Naneli tereyağı sosuyla taçlanan, mideye dost yoğurtlu pirinç çorbası',
    kategori: 'corba',
    koleksiyonlar: ['ramazan', 'misafir'],
    emoji: '🌿',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 30,
    zorluk: 'orta',
    kaloriPerPorsiyon: 185,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'pirinç', miktar: 0.5, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'su', miktar: 5, birim: 'su bardağı' },
      { ad: 'yoğurt', miktar: 2, birim: 'su bardağı', not: 'oda sıcaklığında' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', not: 'sadece sarısı' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'kuru nane', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Pirinci haşla',
        aciklama:
          'Yıkanmış pirinci su ve tuzla tencereye al. Kaynadıktan sonra kısık ateşte pirinçler yumuşayana kadar haşla.',
        sureSn: 900,
      },
      {
        baslik: 'Terbiyeyi hazırla',
        aciklama:
          'Bir kasede yoğurt, un ve yumurta sarısını pürüzsüz olana kadar çırp. Topak kalmamasına dikkat et.',
      },
      {
        baslik: 'Terbiyeyi ılıştırarak ekle',
        aciklama:
          'Kaynayan çorbadan bir kepçe sıcak suyu çırparak terbiyeye ekle. Ilınan terbiyeyi ince ince akıtıp sürekli karıştırarak tencereye ver.',
      },
      {
        baslik: 'Kesilmeden pişir',
        aciklama:
          'Çorbayı sürekli aynı yönde karıştırarak kısık ateşte bir taşım kaynat, sonra ocaktan al.',
        sureSn: 300,
      },
      {
        baslik: 'Naneli sosu gezdir',
        aciklama:
          'Küçük tavada tereyağını erit, kuru naneyi ekleyip köpürünce ocaktan al. Sosu çorbanın üzerinde gezdirerek servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Terbiye eklerken çorbanın altını kısıp sürekli tek yönde karıştırırsan yoğurt asla kesilmez.',
  },
  {
    id: 'tarhana-corbasi',
    baslik: 'Tarhana Çorbası',
    altBaslik: 'Anadolu kışlarının şifa deposu; ev tarhanasıyla mis kokulu bir klasik',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'ramazan'],
    emoji: '🥘',
    porsiyon: 4,
    hazirlikDk: 5,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 160,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'tarhana', miktar: 6, birim: 'yemek kaşığı', not: 'ev yapımı toz tarhana' },
      { ad: 'su', miktar: 5, birim: 'su bardağı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş', not: 'ezilmiş' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Tarhanayı ıslat',
        aciklama:
          'Tarhanayı 1 su bardağı ılık suyla bir kasede ez ve topaksız bir bulamaç olana kadar dinlendir.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Salçayı kavur',
        aciklama:
          'Tencerede tereyağını erit. Salçayı ve ezilmiş sarımsağı ekleyip kokusu çıkana kadar kavur.',
        sureSn: 120,
      },
      {
        baslik: 'Tarhanayı suyla aç',
        aciklama:
          'Islanmış tarhanayı tencereye al, kalan suyu azar azar ekleyerek çırp. Tuzunu ilave et.',
      },
      {
        baslik: 'Karıştırarak pişir',
        aciklama:
          'Sürekli karıştırarak kaynamaya getir; dibinin tutmaması için kısık ateşte koyulaşana kadar pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Nane ile servis et',
        aciklama:
          'Kuru naneyi ekleyip bir taşım kaynat. Dileyen üzerine pul biberli tereyağı gezdirebilir.',
        sureSn: 60,
      },
    ],
    pufNoktasi:
      'Tarhanayı önceden ıslatmak hem topaklanmayı önler hem pişme süresini yarıya indirir.',
  },
  {
    id: 'domates-corbasi',
    baslik: 'Domates Çorbası',
    altBaslik: 'Közlenmiş tadında taze domateslerle, kaşar peynirli klasik lezzet',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'misafir'],
    emoji: '🍅',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 175,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: false,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'domates', miktar: 6, birim: 'adet', not: 'olgun, rendelenmiş' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'un', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 4, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı', not: 'oda sıcaklığında' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
      { ad: 'kaşar peyniri', miktar: 60, birim: 'g', not: 'servis için rendelenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Unu kavur',
        aciklama:
          'Tencerede tereyağını erit, unu ekleyip kokusu çıkana kadar orta ateşte karıştırarak kavur.',
        sureSn: 180,
      },
      {
        baslik: 'Salça ve domatesi ekle',
        aciklama:
          'Salçayı ekleyip bir tur çevir. Rendelenmiş domatesleri ilave et, suyunu salıp çekene kadar pişir.',
        sureSn: 480,
      },
      {
        baslik: 'Su ekleyip kaynat',
        aciklama:
          'Sıcak suyu azar azar ekleyip çırp. Tuz ve şekeri ilave et; kısık ateşte kaynamaya bırak.',
        sureSn: 900,
      },
      {
        baslik: 'Pürüzsüzleştir ve sütü ekle',
        aciklama:
          'Çorbayı el blenderıyla pürüzsüz hale getir. Sütü ekleyip karıştırarak bir taşım daha kaynat, karabiberi serp.',
        sureSn: 180,
      },
      {
        baslik: 'Kaşarla servis et',
        aciklama:
          'Kaseleri doldurup üzerine rendelenmiş kaşar peyniri serperek sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Bir çay kaşığı şeker domatesin asidini dengeler; çorba közlenmiş gibi yumuşak bir tat alır.',
  },
  {
    id: 'sehriyeli-tavuk-corbasi',
    baslik: 'Şehriyeli Tavuk Çorbası',
    altBaslik: 'Kendi suyuyla pişen tavuk ve tel şehriyeyle içini ısıtan şifa çorbası',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'misafir'],
    emoji: '🍗',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 300, birim: 'g' },
      { ad: 'şehriye', miktar: 0.5, birim: 'su bardağı', not: 'tel şehriye' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'küçük küpler halinde' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'bütün, haşlama suyu için' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 7, birim: 'su bardağı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu sıkılmış' },
    ],
    adimlar: [
      {
        baslik: 'Tavuğu haşla',
        aciklama:
          'Tavuk göğsünü bütün soğan ve suyla tencereye al. Kaynadıktan sonra köpüğünü alarak kısık ateşte haşla.',
        sureSn: 1200,
      },
      {
        baslik: 'Tavuğu didikle',
        aciklama:
          'Haşlanan tavuğu suyundan çıkarıp bir çatalla ince ince didikle. Soğanı suyun içinden alıp at, suyu süz.',
      },
      {
        baslik: 'Havuç ve şehriyeyi pişir',
        aciklama:
          'Süzülen tavuk suyunu tencereye geri al, tereyağı ve havuçları ekleyip kaynat. Şehriyeyi ilave et ve yumuşayana kadar pişir.',
        sureSn: 600,
      },
      {
        baslik: 'Tavuğu ekleyip tatlandır',
        aciklama:
          'Didiklenmiş tavuğu, tuzu ve karabiberi ekle. Bir taşım kaynatıp ocaktan al.',
        sureSn: 180,
      },
      {
        baslik: 'Limonla servis et',
        aciklama:
          'Limon suyunu ekleyip karıştır. Sıcak sıcak, dileyene ekstra limon dilimiyle servis et.',
      },
    ],
    pufNoktasi:
      'Haşlama suyuna atılan bütün bir soğan tavuğun kokusunu alır ve suya derinlik katar.',
  },
  {
    id: 'karnabahar-corbasi',
    baslik: 'Karnabahar Çorbası',
    altBaslik: 'Kadife dokulu, sütlü ve hafif; kış sofralarının zarif çorbası',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🥦',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 145,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: false,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'karnabahar', miktar: 0.5, birim: 'adet', not: 'orta boy, çiçeklerine ayrılmış' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 4, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı yumuşat',
        aciklama:
          'Tencerede tereyağını erit, soğanı ekleyip şeffaflaşana kadar orta ateşte kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Sebzeleri ekle',
        aciklama:
          'Karnabahar çiçeklerini ve küp patatesleri ekleyip 2-3 dakika çevirerek yağla buluştur.',
        sureSn: 180,
      },
      {
        baslik: 'Suyla pişir',
        aciklama:
          'Sıcak su ve tuzu ekle. Kaynadıktan sonra kısık ateşte, sebzeler çatalla ezilecek yumuşaklığa gelene kadar pişir.',
        sureSn: 1200,
      },
      {
        baslik: 'Pürüzsüzleştir',
        aciklama:
          'Çorbayı el blenderıyla kadife kıvamında olana kadar çek. Sütü ekleyip bir taşım daha kaynat.',
        sureSn: 180,
      },
      {
        baslik: 'Baharatla servis et',
        aciklama:
          'Karabiberi karıştır, kaselere al. Üzerine bir fıske pul biber serperek sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Patates çorbaya un kullanmadan doğal bir koyuluk verir; kıvam için una gerek kalmaz.',
  },
  {
    id: 'sarimsakli-tirit-corbasi',
    baslik: 'Sarımsaklı Tirit Çorbası',
    altBaslik: 'Bayat ekmeği taçlandıran, salçalı ve sarımsaklı israf önleyici lezzet',
    kategori: 'corba',
    koleksiyonlar: ['artan', 'tek-tencere', '15-dakika'],
    emoji: '🍞',
    porsiyon: 4,
    hazirlikDk: 5,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 180,
    beslenmeEtiketleri: ['vegan', 'vejetaryen'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'bayat ekmek', miktar: 6, birim: 'dilim', not: 'kabuklarıyla, iri küpler halinde' },
      { ad: 'sarımsak', miktar: 4, birim: 'diş', not: 'ince dilimlenmiş' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 5, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış, servis için' },
    ],
    adimlar: [
      {
        baslik: 'Ekmekleri kızart',
        aciklama:
          'Zeytinyağının yarısını geniş tencerede kızdır. Küp doğranmış bayat ekmekleri altın rengi alana kadar çevirerek kızart ve kenara al.',
        sureSn: 300,
      },
      {
        baslik: 'Sarımsağı kavur',
        aciklama:
          'Kalan zeytinyağını aynı tencereye ekle. Dilimlenmiş sarımsakları yakmadan, kokusu çıkana kadar kavur.',
        sureSn: 120,
      },
      {
        baslik: 'Salçaları aç',
        aciklama:
          'Domates ve biber salçasını ekleyip 1-2 dakika kavur; pul biberi ve kekiği serpip bir tur çevir.',
        sureSn: 120,
      },
      {
        baslik: 'Suyu ekleyip kaynat',
        aciklama:
          'Sıcak suyu ve tuzu ekle, karıştırarak kısık ateşte kaynat. Tatların oturması için birkaç dakika pişir.',
        sureSn: 480,
      },
      {
        baslik: 'Ekmekle buluştur, servis et',
        aciklama:
          'Kızarmış ekmekleri kaselere paylaştır, üzerine kaynar çorbayı gezdir. Kıyılmış maydanoz serpip bekletmeden servis et.',
      },
    ],
    pufNoktasi:
      'Ekmekleri çorbanın içinde kaynatmak yerine servis anında eklersen dibi lapa olmaz, üstü çıtır kalır.',
  },
];
