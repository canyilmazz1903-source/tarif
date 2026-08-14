import type { Tarif } from '@/types/tarif';

// Demlik & Fincan koleksiyonu — kahveler, çaylar, şerbetler ve limonatalar.
// Tüm tarifler özgün metinlerle yazılmıştır; ölçüler ev mutfağına göre dengelenmiştir.
export const DEMLIK_FINCAN: Tarif[] = [
  {
    id: 'klasik-turk-kahvesi',
    baslik: 'Klasik Türk Kahvesi',
    altBaslik: 'Soğuk suyla başlayan, bol köpüklü ve telvesi dibinde duran geleneksel pişirme',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '☕',
    porsiyon: 2,
    hazirlikDk: 2,
    pisirmeDk: 4,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 10,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'su', miktar: 140, birim: 'ml', not: 'soğuk, kişi başı 70 ml' },
      { ad: 'türk kahvesi', miktar: 2, birim: 'çay kaşığı', not: 'tepeleme, kişi başı 1' },
      { ad: 'toz şeker', miktar: 2, birim: 'çay kaşığı', not: 'isteğe bağlı, orta şekerli için' },
    ],
    adimlar: [
      {
        baslik: 'Cezvede soğuk suyla karıştır',
        aciklama:
          'Soğuk suyu, kahveyi ve isterseniz şekeri cezveye alın. Ocağa koymadan önce kahve suya iyice karışana dek karıştırın; köpüğün sırrı bu ön karıştırmadadır.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Cezveyi en kısık ateşe oturtun ve karıştırmadan bekleyin. Yüzeyde kalın bir köpük tabakası toplanıp kenarlardan yükselmeye başlayınca cezveyi ateşten alın; asla taşırmayın.',
        sureSn: 180,
      },
      {
        baslik: 'Köpüğü bölüştür ve servis et',
        aciklama:
          'Önce köpüğü kaşıkla fincanlara eşit paylaştırın, sonra kahveyi yavaşça üzerine dökün. Yanında bir bardak su ile servis edin; telve dibe çökene dek bir dakika bekletin.',
      },
    ],
    pufNoktasi:
      'Kahveyi mutlaka soğuk suyla ve karıştırılmış halde ateşe koyun; kaynama noktasına gelmeden almak köpüğü korur, ikinci kez kaynatmak köpüğü söndürür.',
  },
  {
    id: 'damla-sakizli-turk-kahvesi',
    baslik: 'Damla Sakızlı Türk Kahvesi',
    altBaslik: 'Cezvede eriyen minik sakız taneleriyle hafif reçineli, kokulu bir fincan',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '☕',
    porsiyon: 2,
    hazirlikDk: 3,
    pisirmeDk: 4,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 12,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'su', miktar: 140, birim: 'ml', not: 'soğuk' },
      { ad: 'türk kahvesi', miktar: 2, birim: 'çay kaşığı', not: 'tepeleme' },
      { ad: 'damla sakızı', miktar: 1, birim: 'g', not: 'pirinç tanesi büyüklüğünde 2-3 parça' },
      { ad: 'toz şeker', miktar: 2, birim: 'çay kaşığı', not: 'isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Sakızı dövüp inceltin',
        aciklama:
          'Damla sakızı parçalarını bir tutam şekerle birlikte havanda hafifçe dövün; şeker, sakızın havana yapışmasını önler ve cezvede daha kolay erimesini sağlar.',
      },
      {
        baslik: 'Malzemeleri cezvede buluştur',
        aciklama:
          'Soğuk su, kahve, dövülmüş sakız ve kalan şekeri cezveye alıp iyice karıştırın. Sakız taneleri dibe çökebilir; sorun değil, pişerken kendiliğinden erir.',
      },
      {
        baslik: 'Kısık ateşte köpürene dek pişir',
        aciklama:
          'En kısık ateşte, karıştırmadan pişirin. Köpük kabarıp kenarlardan yükselince ateşten alın, köpüğü fincanlara paylaştırıp kahveyi üzerine süzün.',
        sureSn: 200,
      },
    ],
    pufNoktasi:
      'Damla sakızında az çoktur: iki küçük tane aroma verir, fazlası kahveyi sakız kokusuna boğar ve dilde acımsı bir iz bırakır.',
  },
  {
    id: 'sutlu-turk-kahvesi',
    baslik: 'Sütlü Türk Kahvesi',
    altBaslik: 'Su yerine sütle pişen, kadifemsi içimli ve yumuşak telveli fincan',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '☕',
    porsiyon: 2,
    hazirlikDk: 2,
    pisirmeDk: 6,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 55,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'süt', miktar: 140, birim: 'ml', not: 'soğuk' },
      { ad: 'türk kahvesi', miktar: 2, birim: 'çay kaşığı', not: 'tepeleme' },
      { ad: 'toz şeker', miktar: 2, birim: 'çay kaşığı', not: 'isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Sütle kahveyi karıştır',
        aciklama:
          'Soğuk sütü, kahveyi ve isterseniz şekeri cezvede iyice karıştırın. Süt soğuk başlamazsa kahve topaklanır; bu yüzden buzdolabından çıkmış süt idealdir.',
      },
      {
        baslik: 'Çok kısık ateşte sabırla pişir',
        aciklama:
          'Süt, sudan çok daha hızlı taşar; cezveyi en kısık ateşte tutun ve başından ayrılmayın. Yüzey kabarcıklanıp yükselmeye başladığı anda ateşten çekin.',
        sureSn: 240,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Kahveyi fincanlara paylaştırın ve telvenin oturması için bir dakika bekletin. Sütlü telve daha yavaş çöker; acele etmeden için.',
      },
    ],
    pufNoktasi:
      'Cezveyi ocaktan almadan hemen önce bir tur daha kaşıklayıp kabartırsanız sütün kremamsı köpüğü fincanın yüzeyini tamamen kaplar.',
  },
  {
    id: 'dibek-tarzi-kahve',
    baslik: 'Dibek Tarzı Kahve',
    altBaslik: 'Kalın öğütülmüş kahveyle pişen, yoğun gövdeli ve az telveli yudum',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '☕',
    porsiyon: 2,
    hazirlikDk: 3,
    pisirmeDk: 5,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 10,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      {
        ad: 'türk kahvesi',
        miktar: 3,
        birim: 'çay kaşığı',
        not: 'kalın (iri) öğütüm — değirmende taş dibek kıvamında kalın çektirin',
      },
      { ad: 'su', miktar: 160, birim: 'ml', not: 'soğuk' },
      { ad: 'toz şeker', miktar: 2, birim: 'çay kaşığı', not: 'isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Kalın öğütümle harmanla',
        aciklama:
          'Kalın öğütülmüş kahveyi soğuk su ve isterseniz şekerle cezvede karıştırın. İri taneler suyu daha yavaş emer; bir dakika kadar bekletmek aromayı derinleştirir.',
      },
      {
        baslik: 'Kısık ateşte ağır ağır pişir',
        aciklama:
          'En kısık ateşte, klasik kahveden biraz daha uzun pişirin; iri öğütüm aromasını geç bırakır. Köpük kabarınca ateşten alın, on saniye dinlendirip bir kez daha kabartın.',
        sureSn: 240,
      },
      {
        baslik: 'Telveyi dinlendirip servis et',
        aciklama:
          'Fincanlara paylaştırdıktan sonra iki dakika bekleyin: kalın taneler hızla dibe çöker ve fincanda neredeyse telvesiz, yoğun gövdeli bir kahve kalır.',
      },
    ],
    pufNoktasi:
      'Dibek lezzetinin anahtarı öğütümdür: toz inceliğinde değil, irmik gibi kalın çekilmiş kahve hem köpüğü kremsi yapar hem de dipte sert telve bırakmaz.',
  },
  {
    id: 'salep',
    baslik: 'Salep',
    altBaslik: 'Sütle koyulaşan, üzeri bol tarçınlı, kış akşamlarının kadife içeceği',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '🥛',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 180,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2],
    malzemeler: [
      { ad: 'süt', miktar: 400, birim: 'ml', not: 'soğuk' },
      { ad: 'salep tozu', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'toz şeker', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı', not: 'servis için, toz' },
    ],
    adimlar: [
      {
        baslik: 'Salebi soğuk sütte aç',
        aciklama:
          'Salep tozunu ve şekeri soğuk sütün içine eleyerek ekleyin ve telle pürüzsüz olana dek çırpın. Sıcak süte atılan salep anında topaklanır; mutlaka soğuk başlayın.',
      },
      {
        baslik: 'Karıştırarak koyulaştır',
        aciklama:
          'Tencereyi kısık ateşe alın ve sürekli karıştırarak pişirin. Karışım önce hafif kaynar, sonra kaşığın arkasını kaplayan akışkan bir muhallebi kıvamına gelir.',
        sureSn: 600,
      },
      {
        baslik: 'Tarçınla taçlandırıp sun',
        aciklama:
          'Salebi fincanlara paylaştırın ve üzerine bolca tarçın serpin. Dilerseniz bir tutam hindistan cevizi veya dövülmüş antep fıstığı ile zenginleştirebilirsiniz.',
      },
    ],
    pufNoktasi:
      'Salep piştikçe koyulaşmaya devam eder; ocaktan biraz akışkan haldeyken alın, fincanda dinlenirken tam kıvamını bulur.',
  },
  {
    id: 'tarcinli-kis-cayi',
    baslik: 'Tarçınlı Kış Çayı',
    altBaslik: 'Ihlamur, taze zencefil ve tarçınla demlenen, balla tatlanan boğaz dostu',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '🫖',
    porsiyon: 4,
    hazirlikDk: 5,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 40,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2],
    malzemeler: [
      { ad: 'su', miktar: 1000, birim: 'ml' },
      { ad: 'ıhlamur', miktar: 2, birim: 'yemek kaşığı', not: 'kuru yaprak ve çiçek' },
      { ad: 'zencefil', miktar: 4, birim: 'dilim', not: 'taze, soyulmuş ince dilim' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı', not: 'çubuk tarçın varsa 1 adet kullanın' },
      { ad: 'karanfil', miktar: 3, birim: 'adet' },
      { ad: 'bal', miktar: 2, birim: 'yemek kaşığı', not: 'servis sırasında' },
    ],
    adimlar: [
      {
        baslik: 'Baharatlı suyu kaynat',
        aciklama:
          'Suyu zencefil dilimleri, tarçın ve karanfille birlikte tencereye alın. Kaynadıktan sonra kısık ateşte beş dakika daha pıtırdatın ki baharatlar aromasını suya bıraksın.',
        sureSn: 300,
      },
      {
        baslik: 'Ihlamuru demle',
        aciklama:
          'Ocağı kapatıp ıhlamuru ekleyin ve kapağı kapatın. Ihlamur kaynatılmaz, demlenir; on dakikalık kapalı demleme rengi altın sarısına çevirir.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Süzüp balla tatlandır',
        aciklama:
          'Çayı süzgeçten bardaklara aktarın. Bal, çok sıcak suda aromasını yitirir; içmeden hemen önce, hafif ılımışken karıştırarak ekleyin.',
      },
    ],
    pufNoktasi:
      'Ihlamuru asla kaynar suda haşlamayın; ocak kapandıktan sonra eklemek hem burukluğu önler hem çiçeğin ince kokusunu korur.',
  },
  {
    id: 'kusburnu-cayi',
    baslik: 'Kuşburnu Çayı',
    altBaslik: 'Kuru kuşburnuyla kısık ateşte pişen, koyu mercan renkli, hafif ekşi kış çayı',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '🫖',
    porsiyon: 4,
    hazirlikDk: 3,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 15,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2],
    malzemeler: [
      { ad: 'kuşburnu (kuru)', miktar: 4, birim: 'yemek kaşığı', not: 'hafifçe kırılmış' },
      { ad: 'su', miktar: 1000, birim: 'ml' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı', not: 'isteğe bağlı, servis için' },
    ],
    adimlar: [
      {
        baslik: 'Kuşburnuyu kısık ateşte pişir',
        aciklama:
          'Kuru kuşburnuları suyla birlikte tencereye alın, kaynayınca ateşi kısın. Kapağı aralık bırakıp on dakika pıtır pıtır kaynatın; su koyu mercan rengine döner.',
        sureSn: 600,
      },
      {
        baslik: 'Kapalı kapakta demlendir',
        aciklama:
          'Ocağı kapatın, kapağı kapatıp beş dakika dinlendirin. Bu bekleme, meyvenin ekşi-tatlı aromasının suya tam geçmesini sağlar.',
        sureSn: 300,
        beklemeAdimi: true,
      },
      {
        baslik: 'Süzerek servis et',
        aciklama:
          'İnce süzgeçten bardaklara süzün; tanelerin tüylü çekirdekleri bardağa geçmemeli. Dileyen ılık bardağına bal karıştırabilir.',
      },
    ],
    pufNoktasi:
      'Kuşburnuyu hafifçe ezerek kaynatmak rengi ve aromayı iki katına çıkarır; ama uzun süre harlı kaynatmak C vitaminini azalttığı için ateş hep kısık kalmalı.',
  },
  {
    id: 'sicak-nane-limon',
    baslik: 'Sıcak Nane-Limon',
    altBaslik: 'Taze nane ve limon dilimleriyle demlenen, ferahlatıcı klasik kış içeceği',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '🍋',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 10,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2],
    malzemeler: [
      { ad: 'su', miktar: 500, birim: 'ml' },
      { ad: 'taze nane', miktar: 0.5, birim: 'demet', not: 'yıkanmış, saplarıyla' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'yarısı dilim, yarısının suyu' },
    ],
    adimlar: [
      {
        baslik: 'Suyu kaynatıp ocağı kapat',
        aciklama:
          'Suyu tencerede kaynatın ve ocağı kapatın. Nane ve limon kaynar suda uzun süre pişerse acılaşır; bu yüzden demleme kapalı ocakta yapılır.',
      },
      {
        baslik: 'Nane ve limonu demle',
        aciklama:
          'Nane dallarını ve limon dilimlerini sıcak suya bırakın, kapağı kapatıp demlenmeye alın. Süre sonunda kalan limonun suyunu sıkıp karıştırın.',
        sureSn: 420,
        beklemeAdimi: true,
      },
      {
        baslik: 'Süzüp sıcak servis et',
        aciklama:
          'Bardaklara süzerek paylaştırın, üzerine birer taze nane yaprağı bırakın. Dileyen bal ya da bir tutam taze rendelenmiş zencefille koyulaştırabilir.',
      },
    ],
    pufNoktasi:
      'Limon dilimlerini kabuğuyla atmadan önce kabuğu bir kez yıkayıp kurulayın ve suya beyaz zarı ezmeden bırakın; acılık zarın ezilmesinden gelir.',
  },
  {
    id: 'demlikte-cay-demleme',
    baslik: 'Demlikte Klasik Çay',
    altBaslik: 'Tavşan kanı rengin ve buruk olmayan içimin adım adım 101 rehberi',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan', '101'],
    emoji: '🫖',
    porsiyon: 6,
    hazirlikDk: 3,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 5,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'siyah çay', miktar: 3, birim: 'yemek kaşığı', not: 'silme, dökme çay' },
      { ad: 'su', miktar: 1200, birim: 'ml', not: 'mümkünse yumuşak içme suyu' },
    ],
    adimlar: [
      {
        baslik: 'Suyu kaynat, demliği ısıt',
        aciklama:
          'Alt demlikteki suyu kaynatın. Üst demliğe çayı koyup alttaki buharın üzerinde iki dakika bekletin; ısınan yapraklar kokusunu açar, buna çayın kavrulması denir.',
      },
      {
        baslik: 'Çayın üzerine suyu dök',
        aciklama:
          'Kaynar suyun bir çay bardağı kadarını yavaşça çayın üzerine gezdirerek dökün, yapraklar ıslanınca kalan suyla üst demliği tamamlayın. Alt demliğe taze su ekleyip kısık ateşe alın.',
      },
      {
        baslik: 'Kısık ateşte demlenmeye bırak',
        aciklama:
          'Demliği en kısık ateşte, kaynatmadan on beş dakika demlendirin. Çay asla fokurdamamalı; alt su hafif tıngırdarken üstteki yapraklar dibe çökmüş olmalı.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Açık-koyu ayarlayıp servis et',
        aciklama:
          'İnce belli bardağa önce demi, sonra alt demlikten sıcak suyu ekleyin. Tavşan kanı renk için yaklaşık yarı yarıya oran iyi bir başlangıçtır; dem dibe değil bardağın üçte birine kadar gelmeli.',
      },
    ],
    pufNoktasi:
      'Demlenen çay yarım saatten uzun ocakta kalırsa buruklaşır; büyük kalabalık yoksa küçük demlikle sık sık taze demlemek her zaman daha lezzetlidir.',
  },
  {
    id: 'buzlu-sutlu-soguk-kahve',
    baslik: 'Buzlu Sütlü Soğuk Kahve',
    altBaslik: 'Soğutulmuş filtre kahve, soğuk süt ve bol buzla üç dakikalık serinlik',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '🧊',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 95,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'filtre kahve', miktar: 200, birim: 'ml', not: 'demlenmiş ve buzdolabında soğutulmuş' },
      { ad: 'süt', miktar: 200, birim: 'ml', not: 'buz gibi soğuk' },
      { ad: 'toz şeker', miktar: 2, birim: 'çay kaşığı', not: 'isteğe bağlı' },
      { ad: 'buz', miktar: 8, birim: 'adet' },
    ],
    adimlar: [
      {
        baslik: 'Kahveyi şekerle çırp',
        aciklama:
          'Soğutulmuş filtre kahveyi ve şekeri kapaklı bir kavanoza alıp on saniye kuvvetlice çalkalayın; ufak bir köpük tabakası oluşur ve şeker tamamen erir.',
      },
      {
        baslik: 'Bardakları buzla doldur',
        aciklama:
          'İki uzun bardağa dörder buz küpü yerleştirin ve soğuk sütü paylaştırın. Süt önce, kahve sonra: iki katman birbirine yavaşça karışırken güzel bir geçiş oluşturur.',
      },
      {
        baslik: 'Kahveyi süzerek ekle',
        aciklama:
          'Çalkaladığınız kahveyi buzun üzerinden yavaşça dökün, kısa bir kaşık turuyla karıştırıp hemen servis edin. Dileyen üzerine bir tutam tarçın serpebilir.',
      },
    ],
    pufNoktasi:
      'Kahveyi asla sıcakken buzun üzerine dökmeyin; buz anında eriyip içeceği sulandırır. Sabah demleyip dolapta soğutmak en pratik yoldur.',
  },
  {
    id: 'soguk-demleme-kahve',
    baslik: 'Soğuk Demleme Kahve',
    altBaslik: 'Kalın öğütülmüş kahvenin 12 saatte suya bıraktığı yumuşak, asiditesi düşük içim',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '☕',
    porsiyon: 4,
    hazirlikDk: 5,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 5,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      {
        ad: 'filtre kahve',
        miktar: 1,
        birim: 'su bardağı',
        not: 'çekilmiş kahve, kalın (iri) öğütüm',
      },
      { ad: 'su', miktar: 1000, birim: 'ml', not: 'oda sıcaklığında içme suyu' },
      { ad: 'buz', miktar: 8, birim: 'adet', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Kahveyi suyla buluştur',
        aciklama:
          'Kalın öğütülmüş kahveyi geniş bir kavanoza koyun, suyu üzerine dökün ve tüm taneler ıslanana dek nazikçe karıştırın. Kapağını kapatın.',
      },
      {
        baslik: 'Buzdolabında 12 saat beklet',
        aciklama:
          'Kavanozu buzdolabına kaldırın ve karıştırmadan bekletin. Soğuk su aromayı yavaş çeker: acılık ve ekşilik geride kalır, çikolatamsı yumuşak bir içim öne çıkar.',
        sureSn: 43200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Çift kat süzüp servis et',
        aciklama:
          'Önce ince süzgeçten, ardından süzgece serdiğiniz tülbent ya da kağıt filtreden geçirin. Buzlu bardaklara paylaştırın; dolapta ağzı kapalı bir hafta tazeliğini korur.',
      },
    ],
    pufNoktasi:
      'Öğütüm ne kadar ince olursa içim o kadar bulanık ve acı olur; irmik kalınlığında öğütüm hem berrak süzülür hem dengeli tat verir.',
  },
  {
    id: 'ev-limonatasi',
    baslik: 'Ev Limonatası',
    altBaslik: 'Kabuğu şekerle dinlendirilen limonlardan, aroması derin klasik limonata',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '🍋',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 100,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'limon', miktar: 4, birim: 'adet', not: 'iyice yıkanmış' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'su bardağı' },
      { ad: 'su', miktar: 1000, birim: 'ml', not: 'soğuk' },
      { ad: 'buz', miktar: 8, birim: 'adet' },
    ],
    adimlar: [
      {
        baslik: 'Kabukları şekerle dinlendir',
        aciklama:
          'Limonların sarı kabuklarını beyaz kısma inmeden rendeleyin, şekerle bir kapta karıştırıp on dakika bekletin. Şeker, kabuktaki kokulu yağları çekerek limonatanın ruhunu oluşturur.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Limon suyunu sık ve karıştır',
        aciklama:
          'Limonların suyunu sıkıp kokulu şekerin üzerine ekleyin, şeker tamamen eriyene dek karıştırın. Ardından soğuk suyu ilave edip bir kez daha karıştırın.',
      },
      {
        baslik: 'Süzüp buzla servis et',
        aciklama:
          'Limonatayı süzgeçten sürahiye aktarın, buz küplerini ekleyin. Yarım saat buzdolabında dinlenirse aroması oturur; servis öncesi limon dilimiyle süsleyin.',
      },
    ],
    pufNoktasi:
      'Limonatanın sırrı suyunda değil kabuğundadır; rendelenmiş kabuğu şekerle ovup dinlendirmek, hazır şerbet tadını ev limonatasından ayıran o derin aromayı verir.',
  },
  {
    id: 'naneli-limonata',
    baslik: 'Naneli Limonata',
    altBaslik: 'Taze nane yapraklarıyla hafifçe dövülüp yeşillenen ferah yaz klasiği',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '🍋',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 100,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'limon', miktar: 4, birim: 'adet', not: 'iyice yıkanmış' },
      { ad: 'taze nane', miktar: 0.5, birim: 'demet', not: 'yaprakları ayıklanmış' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'su bardağı' },
      { ad: 'su', miktar: 1000, birim: 'ml', not: 'soğuk' },
      { ad: 'buz', miktar: 8, birim: 'adet' },
    ],
    adimlar: [
      {
        baslik: 'Naneyi şekerle hafifçe döv',
        aciklama:
          'Nane yapraklarını ve şekeri geniş bir kabın dibinde kaşığın arkasıyla hafifçe ezin. Amaç yaprakları parçalamak değil, kokulu yağların şekere geçmesini sağlamak.',
      },
      {
        baslik: 'Limon suyu ve kabuğu ekle',
        aciklama:
          'Bir limonun kabuğunu rendeleyip hepsinin suyunu sıkın; naneli şekere ekleyip eriyene kadar karıştırın. Soğuk suyu ilave edin.',
      },
      {
        baslik: 'Dinlendir, süz ve sun',
        aciklama:
          'Sürahiyi on dakika buzdolabında dinlendirin, ardından süzerek buzlu bardaklara paylaştırın. Üzerine birer nane dalı bırakın.',
      },
    ],
    pufNoktasi:
      'Nane bıçakla kıyılırsa kararır ve acılaşır; sadece ezerek aromasını bırakması, limonatanın hem taze yeşil kokusunu hem berrak rengini korur.',
  },
  {
    id: 'cilekli-limonata',
    baslik: 'Çilekli Limonata',
    altBaslik: 'Püre edilmiş taze çileklerle pembeleşen, tatlı-ekşi dengeli bahar içeceği',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '🍓',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 120,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [4, 5, 6],
    malzemeler: [
      { ad: 'çilek', miktar: 300, birim: 'g', not: 'sapları ayıklanmış' },
      { ad: 'limon', miktar: 3, birim: 'adet' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'su bardağı' },
      { ad: 'su', miktar: 800, birim: 'ml', not: 'soğuk' },
      { ad: 'buz', miktar: 8, birim: 'adet' },
    ],
    adimlar: [
      {
        baslik: 'Çilekleri püre haline getir',
        aciklama:
          'Yıkanmış çilekleri şekerin yarısıyla birlikte blenderdan pürüzsüz olana dek geçirin. Çekirdek istemeyenler püreyi ince süzgeçten geçirebilir.',
      },
      {
        baslik: 'Limonlu şerbeti hazırla',
        aciklama:
          'Limonların suyunu sıkın, kalan şekerle eriyene dek karıştırın ve soğuk suyu ekleyin. Çilek püresini bu karışıma döküp iyice çırpın.',
      },
      {
        baslik: 'Soğutup buzla servis et',
        aciklama:
          'Sürahiyi en az on beş dakika buzdolabında dinlendirin. Buzlu bardaklara paylaştırıp birer çilek dilimi ve limon halkasıyla süsleyin.',
      },
    ],
    pufNoktasi:
      'Çileklerin en olgunlarını, hatta hafif yumuşamış olanlarını seçin; olgun çilek hem daha az şeker gerektirir hem limonataya kendiliğinden koyu pembe rengini verir.',
  },
  {
    id: 'portakalli-kis-serbeti',
    baslik: 'Portakallı Kış Şerbeti',
    altBaslik: 'Tarçın ve karanfille kaynayan, sıcak servis edilen portakallı Osmanlı esintisi',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan', 'ramazan'],
    emoji: '🍊',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 110,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2],
    malzemeler: [
      { ad: 'portakal', miktar: 3, birim: 'adet', not: '2 tanesinin suyu, 1 tanesinin kabuğu ve dilimleri' },
      { ad: 'su', miktar: 1000, birim: 'ml' },
      { ad: 'toz şeker', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı', not: 'çubuk tarçın varsa 1 adet' },
      { ad: 'karanfil', miktar: 4, birim: 'adet' },
    ],
    adimlar: [
      {
        baslik: 'Baharatlı şerbeti kaynat',
        aciklama:
          'Suyu, şekeri, tarçını, karanfili ve bir portakalın ince soyulmuş kabuklarını tencereye alın. Kaynadıktan sonra kısık ateşte on dakika pişirin; mutfağı baharat kokusu sarar.',
        sureSn: 600,
      },
      {
        baslik: 'Portakal suyunu ekle',
        aciklama:
          'Ocağı kısıp taze sıkılmış portakal suyunu ilave edin ve kaynatmadan iki üç dakika ısıtın. Kaynatmak taze sıkılmış suyun aromasını ve rengini soldurur.',
        sureSn: 180,
      },
      {
        baslik: 'Süzüp sıcak servis et',
        aciklama:
          'Şerbeti süzgeçten ısıya dayanıklı bardaklara aktarın. Her bardağa birer ince portakal dilimi bırakın; iftar sofrasında çorbadan önce küçük bardaklarda sunabilirsiniz.',
      },
    ],
    pufNoktasi:
      'Portakal kabuğunu soyarken beyaz kısmı bıçağa bulaştırmayın; şerbete acılık veren tek şey o beyaz zardır, ince sarı kabuksa tüm kokunun kaynağıdır.',
  },
];
