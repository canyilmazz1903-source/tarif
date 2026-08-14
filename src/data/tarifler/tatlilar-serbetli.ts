import type { Tarif } from '@/types/tarif';

// Şerbetli klasikler — 11 özgün tarif.
// Şerbet standardı: şeker:su 1:1, birkaç damla limonla kristalleşme önlenir.

export const SERBETLI_TATLILAR: Tarif[] = [
  {
    id: 'ev-baklavasi',
    baslik: 'Ev Baklavası',
    altBaslik: 'Hazır yufkayla açma derdi olmadan, bol cevizli ve çıtır katlı pratik baklava',
    kategori: 'tatli',
    koleksiyonlar: ['ramazan', 'misafir', 'osmanli'],
    emoji: '🥮',
    porsiyon: 10,
    hazirlikDk: 30,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 520,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'toz şeker', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu sıkılmış' },
      { ad: 'yufka', miktar: 5, birim: 'adet', grup: 'Baklava için' },
      { ad: 'tereyağı', miktar: 200, birim: 'g', grup: 'Baklava için', not: 'eritilmiş' },
      { ad: 'ceviz içi', miktar: 300, birim: 'g', grup: 'Baklava için', not: 'iri çekilmiş' },
      { ad: 'süt', miktar: 0.5, birim: 'su bardağı', grup: 'Baklava için' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti kaynatıp soğut',
        aciklama:
          'Şeker ve suyu tencerede karıştır, kaynayınca kısık ateşte 10 dakika pişir. Limon suyunu ekleyip iki dakika daha kaynat, ocaktan alıp tamamen soğumaya bırak.',
        sureSn: 600,
      },
      {
        baslik: 'Yufkaları hazırla',
        aciklama:
          'Yufkaları tezgaha ser, her birini tepsi boyuna göre kabaca ikiye kes. Erimiş tereyağının 2-3 kaşığını sütle karıştırarak sürme harcını hazırla.',
      },
      {
        baslik: 'Katları döşe',
        aciklama:
          'Yağlanmış tepsiye iki kat yufka ser, her katın arasına fırçayla tereyağlı karışım sür. Ortaya cevizin tamamını yay, kalan yufkaları aynı şekilde yağlayarak üst üste kapat.',
      },
      {
        baslik: 'Dilimle ve yağla',
        aciklama:
          'Keskin bıçakla baklava dilimleri çıkacak şekilde önce boyuna, sonra çapraz kes. Kalan erimiş tereyağını dilim aralarına işleyecek şekilde üzerine gezdir.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 180 derece fırında üzeri kızarana kadar 40-45 dakika pişir. Katlar kabarıp yaprak yaprak açılmalı.',
        sureSn: 2400,
      },
      {
        baslik: 'Soğuk şerbeti dök',
        aciklama:
          'Fırından çıkan sıcak baklavanın üzerine soğuk şerbeti kepçe kepçe, dilim aralarına gelecek şekilde yavaşça gezdir. Cızırtı sesi kıvamın doğru olduğunun işareti.',
      },
      {
        baslik: 'Şerbeti çekmesini bekle',
        aciklama:
          'Tepsinin üzerini örtmeden oda sıcaklığında beklet; dilimler şerbeti çekip parlayınca servise hazır.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Altın kural: sıcak baklavaya soğuk şerbet. İkisi de sıcak olursa baklava hamurlaşır, çıtırlığını kaybeder. Şerbeti ilk iş olarak pişirip soğutman bu yüzden şart.',
  },
  {
    id: 'tulumba-tatlisi',
    baslik: 'Tulumba Tatlısı',
    altBaslik: 'Dışı kıtır içi süngerimsi, soğuk yağda kızartma tekniğiyle çarşı lezzetinde tulumba',
    kategori: 'tatli',
    koleksiyonlar: ['ramazan'],
    emoji: '🍩',
    porsiyon: 8,
    hazirlikDk: 35,
    pisirmeDk: 35,
    zorluk: 'zor',
    kaloriPerPorsiyon: 450,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'toz şeker', miktar: 3.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 3.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu sıkılmış' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'un', miktar: 2, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'irmik', miktar: 1, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'nişasta', miktar: 2, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'yumurta', miktar: 3, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'tutam', grup: 'Hamuru için' },
      { ad: 'ayçiçek yağı', miktar: 3, birim: 'su bardağı', grup: 'Kızartmak için' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti pişirip soğut',
        aciklama:
          'Şekeri ve suyu kaynatıp kısık ateşte 12-15 dakika, hafif yoğunlaşana kadar pişir. Limonu sıkıp iki dakika daha kaynat ve tamamen soğut; tulumba şerbeti diğerlerinden biraz koyu olmalı.',
        sureSn: 900,
      },
      {
        baslik: 'Hamuru haşla',
        aciklama:
          'Suyu, tereyağını ve tuzu kaynat. Unu bir seferde döküp tahta kaşıkla hızla karıştır; hamur tencere dibinden toplanıp top olana kadar kısık ateşte 3-4 dakika pişir.',
      },
      {
        baslik: 'Hamuru ılıklaştır',
        aciklama:
          'Haşlanmış hamuru geniş bir kaba al ve el yakmayacak sıcaklığa gelene kadar ara ara yoğurarak dinlendir. Sıcak hamura yumurta kırılırsa pişer, bu adımı atlama.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Yumurtaları yedir',
        aciklama:
          'Yumurtaları teker teker ekleyip her birini hamura tamamen yedir. İrmik ve nişastayı ilave et; parlak, kaşıktan ağır ağır akan sıkı bir kıvam elde etmelisin.',
      },
      {
        baslik: 'Soğuk yağa sık',
        aciklama:
          'Hamuru yıldız uçlu sıkma torbasına doldur. Tencereye soğuk ayçiçek yağını koy ve ocağı yakmadan hamuru 3-4 cm boyunda parçalar halinde keserek yağa sık.',
      },
      {
        baslik: 'Kısık ateşte kızart',
        aciklama:
          'Ocağı en kısıkta yak; tulumbalar yavaş yavaş ısınan yağda önce kabarır, sonra çıtırlaşır. Ara ara karıştırarak koyu altın rengini alana kadar 12-15 dakika kızart.',
        sureSn: 900,
      },
      {
        baslik: 'Şerbete atıp dinlendir',
        aciklama:
          'Kızaran tulumbaları süzüp doğrudan soğuk şerbete aktar. Şerbeti iyice çekip parlayana kadar içinde beklet, sonra süzerek servis tabağına al.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Tulumbanın sırrı soğuk yağda başlamak: hamur yağla birlikte ısınınca içi boşalıp kıtırlaşır, kızgın yağa atılırsa dışı yanar içi çiğ kalır. Şerbet mutlaka soğuk, tulumba sıcak olmalı.',
  },
  {
    id: 'kunefe',
    baslik: 'Künefe',
    altBaslik: 'Tel kadayıf arasında uzayan tuzsuz peynir; tavada iki yüzü kızarmış Hatay usulü',
    kategori: 'tatli',
    koleksiyonlar: ['ramazan', 'misafir', 'osmanli'],
    emoji: '🧀',
    porsiyon: 6,
    hazirlikDk: 25,
    pisirmeDk: 25,
    zorluk: 'orta',
    kaloriPerPorsiyon: 540,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'toz şeker', miktar: 2.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 2.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu sıkılmış' },
      { ad: 'kadayıf', miktar: 400, birim: 'g', grup: 'Künefe için' },
      { ad: 'tereyağı', miktar: 150, birim: 'g', grup: 'Künefe için', not: 'eritilmiş' },
      { ad: 'lor peyniri', miktar: 300, birim: 'g', grup: 'Künefe için', not: 'tuzsuz, künefelik' },
      { ad: 'antep fıstığı', miktar: 40, birim: 'g', grup: 'Üzeri için', not: 'çekilmiş' },
      { ad: 'kaymak', miktar: 60, birim: 'g', grup: 'Üzeri için', not: 'isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti hazırla',
        aciklama:
          'Şeker ve suyu kaynatıp kısık ateşte 10 dakika pişir, limon suyunu ekle. Künefe için şerbeti buz gibi değil, oda sıcaklığında ılık bekletmen yeterli.',
        sureSn: 600,
      },
      {
        baslik: 'Kadayıfı yağla',
        aciklama:
          'Tel kadayıfı bıçakla 1-2 cm boyunda ince ince kıy. Erimiş tereyağını üzerine döküp her teli parlayana kadar elinle iyice harmanla.',
      },
      {
        baslik: 'Alt katı bastır',
        aciklama:
          'Yağlanmış künefe tepsisine ya da geniş sahana kadayıfın yarısını ser ve bir bardak tabanıyla sıkıca bastırarak sıkıştır. Ne kadar sıkı bastırırsan o kadar bütün çıkar.',
      },
      {
        baslik: 'Peyniri yay',
        aciklama:
          'Tuzsuz peyniri kenarlarda birer parmak boşluk bırakarak ortaya yay; kenarlara taşan peynir pişerken akıp yapışır. Kalan kadayıfı üzerine kapatıp yeniden bastır.',
      },
      {
        baslik: 'İki yüzünü kızart',
        aciklama:
          'Sahanı kısık ateşe al; alt yüz koyu altın rengi alınca geniş bir tabak yardımıyla künefeyi çevir ve diğer yüzünü de aynı renge gelene kadar pişir. Toplam 20-25 dakika sürer.',
        sureSn: 1500,
      },
      {
        baslik: 'Şerbetle buluştur',
        aciklama:
          'Ocaktan alır almaz ılık şerbeti künefenin üzerine kepçeyle gezdir; cızırdayarak çekmesini 2-3 dakika bekle.',
      },
      {
        baslik: 'Fıstıkla servis et',
        aciklama:
          'Üzerine çekilmiş antep fıstığı serp, istersen ortasına bir kaşık kaymak koy. Künefe bekletilmeden, peynir uzarken sıcak yenir.',
      },
    ],
    pufNoktasi:
      'Künefe şerbetli tatlıların istisnasıdır: soğuk şerbet peyniri aniden sertleştirir, bu yüzden şerbet ılık dökülür. Peynirin tuzsuz olması şart; tuzlu peynir kullanacaksan bir gece suda beklet.',
  },
  {
    id: 'lokma-tatlisi',
    baslik: 'Lokma Tatlısı',
    altBaslik: 'Mayalı cıvık hamurdan kaşıkla dökülen, dışı çıtır içi boşluklu hayrat lokması',
    kategori: 'tatli',
    koleksiyonlar: ['ramazan'],
    emoji: '🍡',
    porsiyon: 8,
    hazirlikDk: 20,
    pisirmeDk: 25,
    zorluk: 'orta',
    kaloriPerPorsiyon: 390,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'toz şeker', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu sıkılmış' },
      { ad: 'un', miktar: 3, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'instant maya', miktar: 10, birim: 'g', grup: 'Hamuru için' },
      { ad: 'toz şeker', miktar: 1, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'nişasta', miktar: 1, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'ayçiçek yağı', miktar: 3, birim: 'su bardağı', grup: 'Kızartmak için' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti kaynatıp soğut',
        aciklama:
          'Şeker ve suyu 10 dakika kaynatıp limon suyunu ekle, ocaktan al ve tamamen soğut. Lokmalar kızarana kadar şerbet buzdolabında beklerse daha iyi.',
        sureSn: 600,
      },
      {
        baslik: 'Cıvık hamuru yoğur',
        aciklama:
          'Un, maya, şeker, tuz ve nişastayı karıştır; ılık suyu azar azar ekleyerek çırpıcıyla pürüzsüz, kek hamurundan biraz koyu, akışkan bir hamur elde et.',
      },
      {
        baslik: 'Hamuru mayalandır',
        aciklama:
          'Kabın üzerini örtüp ılık bir yerde hacmi iki katına çıkıp yüzeyi kabarcıklanana kadar mayalanmaya bırak.',
        sureSn: 2700,
        beklemeAdimi: true,
      },
      {
        baslik: 'Hamuru yağa dök',
        aciklama:
          'Yağı geniş tencerede orta ateşte kızdır. Avucuna aldığın hamuru başparmakla işaret parmağın arasından sıkıp yağlanmış tatlı kaşığıyla keserek kızgın yağa bırak.',
      },
      {
        baslik: 'Altın rengine kızart',
        aciklama:
          'Lokmaları kevgirle ara ara çevirerek her yanı eşit altın rengi alana kadar 4-5 dakika kızart; tencereyi kalabalıklaştırma, partiler halinde ilerle.',
        sureSn: 300,
      },
      {
        baslik: 'Şerbete daldır',
        aciklama:
          'Kızaran lokmaları süzüp sıcak sıcak soğuk şerbete at; 3-4 dakika çevirerek beklet ve delikli kepçeyle süzerek servis tabağına al. Üzerine istersen tarçın serpebilirsin.',
      },
    ],
    pufNoktasi:
      'Elinle sıktığın hamurun düzgün top olması için kaşığı her seferinde su ya da yağa batır; kuru kaşık hamuru sündürür. Sıcak lokma soğuk şerbete girer, tersini yaparsan çıtırlık gider.',
  },
  {
    id: 'vezir-parmagi',
    baslik: 'Vezir Parmağı',
    altBaslik: 'Haşlanmış hamurdan parmak biçiminde kesilen, kızarınca şerbetle taçlanan saray tatlısı',
    kategori: 'tatli',
    koleksiyonlar: ['osmanli', 'misafir'],
    emoji: '🫰',
    porsiyon: 8,
    hazirlikDk: 30,
    pisirmeDk: 30,
    zorluk: 'orta',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'toz şeker', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu sıkılmış' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'tereyağı', miktar: 60, birim: 'g', grup: 'Hamuru için' },
      { ad: 'un', miktar: 2.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'irmik', miktar: 2, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'yumurta', miktar: 3, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'tutam', grup: 'Hamuru için' },
      { ad: 'ayçiçek yağı', miktar: 3, birim: 'su bardağı', grup: 'Kızartmak için' },
      { ad: 'ceviz içi', miktar: 30, birim: 'g', grup: 'Üzeri için', not: 'çekilmiş' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti pişirip soğut',
        aciklama:
          'Şeker ve suyu kaynatıp kısık ateşte 10-12 dakika pişir, limon suyunu ekleyip ocaktan al. Hamurla uğraşırken şerbet soğusun.',
        sureSn: 720,
      },
      {
        baslik: 'Hamuru haşla',
        aciklama:
          'Su, tereyağı ve tuzu kaynat; unu ve irmiği bir seferde ekleyip tahta kaşıkla hızla karıştır. Hamur dibinden toplanana kadar kısık ateşte 3-4 dakika pişir.',
      },
      {
        baslik: 'Ilıtıp yumurtaları ekle',
        aciklama:
          'Hamuru geniş kaba alıp el sıcaklığına gelene kadar dinlendir. Yumurtaları teker teker kırıp her seferinde hamura tamamen yedir; parlak ve toparlanan bir kıvam almalı.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Parmakları şekillendir',
        aciklama:
          'Eline az yağ sürüp cevizden büyük parçalar kopar; avucunda yuvarlayıp parmak kalınlığında 6-7 cm çubuklar yap. İstersen çatal sırtıyla üzerine çizgi desenleri çek.',
      },
      {
        baslik: 'Kısık ateşte kızart',
        aciklama:
          'Parmakları ılık yağa bırak ve ocağı kıs; yavaş yavaş kabarıp her yanı koyu altın rengi olana kadar çevirerek 12-15 dakika kızart.',
        sureSn: 900,
      },
      {
        baslik: 'Şerbete yatır',
        aciklama:
          'Sıcak parmakları süzüp soğuk şerbetin içine sırala; şerbeti iyice çekip yumuşayana kadar içinde beklet.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Cevizle süsleyip sun',
        aciklama:
          'Süzdüğün vezir parmaklarını servis tabağına dizip üzerine çekilmiş ceviz serp. Yanına kaymak da çok yakışır.',
      },
    ],
    pufNoktasi:
      'Hamur kızgın yağa girerse dışı hemen kabuk bağlar, içi çiğ kalır; ılık yağda başlayıp ateşi kısık tutmak parmakların içini süngerimsi yapar. Şerbet daima soğuk, tatlı daima sıcak.',
  },
  {
    id: 'hanim-gobegi',
    baslik: 'Hanım Göbeği',
    altBaslik: 'Ortası parmakla çukurlaştırılan haşlama hamur toplarından yumuşacık şerbetli klasik',
    kategori: 'tatli',
    koleksiyonlar: ['osmanli', 'misafir'],
    emoji: '🍮',
    porsiyon: 8,
    hazirlikDk: 30,
    pisirmeDk: 30,
    zorluk: 'orta',
    kaloriPerPorsiyon: 440,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'toz şeker', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu sıkılmış' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'tereyağı', miktar: 50, birim: 'g', grup: 'Hamuru için' },
      { ad: 'un', miktar: 2.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'nişasta', miktar: 1, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'yumurta', miktar: 3, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'tutam', grup: 'Hamuru için' },
      { ad: 'ayçiçek yağı', miktar: 3, birim: 'su bardağı', grup: 'Kızartmak için' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti hazırlayıp soğut',
        aciklama:
          'Şekerle suyu kaynatıp 10 dakika kısık ateşte pişir, limon suyunu ekle ve kenarda tamamen soğumaya bırak.',
        sureSn: 600,
      },
      {
        baslik: 'Hamuru pişir',
        aciklama:
          'Su, tereyağı ve tuzu kaynat; unu bir seferde döküp tahta kaşıkla topak kalmayana kadar hızla karıştır. Hamur tencereden sıyrılınca ocaktan al.',
      },
      {
        baslik: 'Soğutup yumurta yedir',
        aciklama:
          'Hamuru el yakmayacak sıcaklığa gelene kadar dinlendir; yumurtaları teker teker ve nişastayı ekleyerek pürüzsüz, yumuşak bir hamur elde et.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Göbekleri şekillendir',
        aciklama:
          'Yağlı elle cevizden biraz büyük parçalar koparıp yuvarla; her topun ortasına parmağınla bastırarak çukur aç. Bu çukur pişerken şerbeti tutan göbeği oluşturur.',
      },
      {
        baslik: 'Yavaş yavaş kızart',
        aciklama:
          'Topları ılık yağa bırakıp ocağı kıs; kabarıp iki yanı da koyu altın rengi olana kadar ara ara çevirerek 12-15 dakika kızart.',
        sureSn: 900,
      },
      {
        baslik: 'Şerbette dinlendir',
        aciklama:
          'Kızaran göbekleri süzüp sıcakken soğuk şerbete aktar; şerbeti emip iyice yumuşayana kadar arada çevirerek beklet.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Servis et',
        aciklama:
          'Göbekleri süzerek tabağa al; çukurlarına birer tutam çekilmiş fıstık ya da bir parça kaymak koyarak sun.',
      },
    ],
    pufNoktasi:
      'Ortadaki çukuru derin açmaktan çekinme; hamur kızarırken kabarır ve çukur yarı yarıya kapanır. Soğuk şerbet-sıcak hamur buluşması burada da geçerli, yoksa göbekler hamur kokar.',
  },
  {
    id: 'kalburabasti',
    baslik: 'Kalburabastı',
    altBaslik: 'Kalbur izli yumuşak hamurunun içinde ceviz saklayan, fırında kızaran şerbetli tatlı',
    kategori: 'tatli',
    koleksiyonlar: ['misafir', '101'],
    emoji: '🥠',
    porsiyon: 8,
    hazirlikDk: 30,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'toz şeker', miktar: 2.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 2.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu sıkılmış' },
      { ad: 'tereyağı', miktar: 125, birim: 'g', grup: 'Hamuru için', not: 'oda sıcaklığında' },
      { ad: 'yoğurt', miktar: 3, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'ayçiçek yağı', miktar: 0.5, birim: 'çay bardağı', grup: 'Hamuru için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'irmik', miktar: 2, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'paket', grup: 'Hamuru için' },
      { ad: 'un', miktar: 3, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'ceviz içi', miktar: 100, birim: 'g', grup: 'İçi için', not: 'iri çekilmiş' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti kaynatıp soğut',
        aciklama:
          'Şeker ve suyu 10 dakika kaynat, limon suyunu ekleyip ocaktan al. Tatlı fırındayken şerbetin tamamen soğumuş olması gerekiyor.',
        sureSn: 600,
      },
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Tereyağı, yoğurt, sıvı yağ ve yumurtayı bir kapta karıştır. İrmiği, kabartma tozunu ve unu azar azar ekleyerek ele yapışmayan, kulak memesinden biraz sıkı bir hamur yoğur.',
      },
      {
        baslik: 'Cevizle doldur',
        aciklama:
          'Hamurdan ceviz büyüklüğünde parçalar kopar, avucunda açıp ortasına bir tatlı kaşığı çekilmiş ceviz koy ve kenarlarını birleştirip mekik biçiminde kapat.',
      },
      {
        baslik: 'Kalbur izini ver',
        aciklama:
          'Her parçayı kalburun ya da delikli süzgecin sırtına hafifçe bastırıp kendine doğru çekerek desenli yüzünü çıkar; izler şerbeti tutan kanalları oluşturur.',
      },
      {
        baslik: 'Fırında kızart',
        aciklama:
          'Parçaları yağlı kağıtlı tepsiye aralıklı diz; önceden ısıtılmış 170 derece fırında altları ve üstleri koyu altın rengi olana kadar 25-30 dakika pişir.',
        sureSn: 1800,
      },
      {
        baslik: 'Sıcakken şerbete al',
        aciklama:
          'Fırından çıkan sıcak tatlıları teker teker soğuk şerbetin içine yatır ve üzerlerini bir kez çevir.',
      },
      {
        baslik: 'Şerbeti çekmesini bekle',
        aciklama:
          'Kalburabastılar şerbeti emip koyulaşana ve yumuşayana kadar arada bir çevirerek dinlendir; sonra süzüp servis tabağına diz.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Tatlının rengi fırında ne kadar koyuysa şerbeti o kadar güzel çeker; açık renk çıkarırsan içi sert kalır. Sıcak tatlı soğuk şerbete girmeli, ikisi de aynı sıcaklıkta olursa dağılır.',
  },
  {
    id: 'sam-tatlisi',
    baslik: 'Şam Tatlısı',
    altBaslik: 'Yoğurtlu irmikli kolay dökme kek tabanı, bol şerbet ve hindistan cevizli örtüsüyle',
    kategori: 'tatli',
    koleksiyonlar: ['misafir', '101'],
    emoji: '🍰',
    porsiyon: 10,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 410,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'toz şeker', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu sıkılmış' },
      { ad: 'yumurta', miktar: 3, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'yoğurt', miktar: 1, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'ayçiçek yağı', miktar: 0.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'irmik', miktar: 1, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'un', miktar: 1.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'paket', grup: 'Hamuru için' },
      { ad: 'vanilin', miktar: 1, birim: 'paket', grup: 'Hamuru için' },
      { ad: 'hindistan cevizi', miktar: 3, birim: 'yemek kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti pişirip soğut',
        aciklama:
          'Şeker ve suyu kaynatıp kısık ateşte 10 dakika pişir, limon suyunu ekleyip soğumaya bırak.',
        sureSn: 600,
      },
      {
        baslik: 'Hamuru çırp',
        aciklama:
          'Yumurta ve şekeri rengi açılana kadar çırp; yoğurt ve yağı ekleyip karıştır. İrmik, un, kabartma tozu ve vanilini ilave ederek akışkan bir kek hamuru hazırla.',
      },
      {
        baslik: 'Tepsiye dök ve pişir',
        aciklama:
          'Hamuru yağlanmış orta boy tepsiye yayıp önceden ısıtılmış 170 derece fırında üzeri kızarana ve kürdan temiz çıkana kadar 30-35 dakika pişir.',
        sureSn: 2100,
      },
      {
        baslik: 'Sıcakken dilimle',
        aciklama:
          'Fırından çıkan keki 2-3 dakika dinlendirip kare ya da baklava dilimi şeklinde kes; kesikler şerbetin içine işlemesini kolaylaştırır.',
      },
      {
        baslik: 'Soğuk şerbeti dök',
        aciklama:
          'Soğuk şerbeti sıcak kekin üzerine kepçe kepçe, her dilimin üzerinden geçerek dök.',
      },
      {
        baslik: 'Dinlendir',
        aciklama:
          'Tepsinin üzerini kapatmadan tatlı şerbetin tamamını çekene kadar oda sıcaklığında beklet.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Hindistan ceviziyle kapla',
        aciklama:
          'Dilimleri tabağa alırken her birinin üzerine bolca hindistan cevizi serp; istersen dilimleri hindistan cevizine bulayarak da kaplayabilirsin.',
      },
    ],
    pufNoktasi:
      'İrmiği çok ince değil, standart irmik olarak kullan; iri taneler şerbeti süngercesine emer. Sıcak keke soğuk şerbet dökmek dilimlerin dağılmadan ıslanmasını sağlar.',
  },
  {
    id: 'kemalpasa-tatlisi',
    baslik: 'Kemalpaşa Tatlısı',
    altBaslik: 'Tuzsuz taze peynirli minik hamur topları; fırında kızarıp şerbette pişen Bursa klasiği',
    kategori: 'tatli',
    koleksiyonlar: ['misafir', '101'],
    emoji: '🟤',
    porsiyon: 8,
    hazirlikDk: 25,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 380,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'toz şeker', miktar: 4, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 4, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu sıkılmış' },
      { ad: 'lor peyniri', miktar: 250, birim: 'g', grup: 'Hamuru için', not: 'tuzsuz, taze' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'tereyağı', miktar: 25, birim: 'g', grup: 'Hamuru için', not: 'yumuşamış' },
      { ad: 'irmik', miktar: 2, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'un', miktar: 1.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'paket', grup: 'Hamuru için' },
      { ad: 'kaymak', miktar: 100, birim: 'g', grup: 'Üzeri için', not: 'isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Tuzsuz peyniri çatalla iyice ez; yumurta, tereyağı ve irmikle karıştır. Unu ve kabartma tozunu azar azar ekleyerek yumuşak, ele hafif yapışan bir hamur elde et.',
      },
      {
        baslik: 'Topları yuvarla',
        aciklama:
          'Hamurdan ceviz küçüklüğünde parçalar koparıp avucunda pürüzsüz toplar yap; pişince iki katına çıkacaklarını unutmadan tepsiye aralıklı diz.',
      },
      {
        baslik: 'Fırında kızart',
        aciklama:
          'Önceden ısıtılmış 170 derece fırında topların üzeri koyu altın rengi olana kadar 20-25 dakika pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Şerbeti kaynat',
        aciklama:
          'Tatlılar fırındayken geniş bir tencerede şeker ve suyu kaynat, limon suyunu ekle. Kemalpaşa diğer tatlıların aksine kaynayan şerbette pişer, o yüzden şerbet ocakta kalsın.',
        sureSn: 600,
      },
      {
        baslik: 'Şerbette pişir',
        aciklama:
          'Kızaran topları kaynamakta olan şerbete tek sıra halinde bırak; kısık ateşte, arada tencereyi sallayarak toplar şişip şerbeti çekmeye başlayana kadar 8-10 dakika pişir.',
        sureSn: 600,
      },
      {
        baslik: 'Dinlendir',
        aciklama:
          'Ocağı kapatıp tencerenin kapağını arala; tatlılar kalan şerbeti emip iyice kabarana kadar dinlendir.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kaymakla servis et',
        aciklama:
          'Kemalpaşaları bir miktar şerbetiyle kaselere al, üzerine birer kaşık kaymak koyarak ılık servis et.',
      },
    ],
    pufNoktasi:
      'Bu tarif "sıcağa soğuk şerbet" kuralının ikinci istisnası: kemalpaşa kaynayan şerbetin içinde pişerek şişer. Peynir ne kadar taze ve tuzsuzsa toplar o kadar çok kabarır; tuzlu peynir hamuru ağırlaştırır.',
  },
  {
    id: 'irmik-tatlisi-serbetli',
    baslik: 'Şerbetli İrmik Tatlısı',
    altBaslik: 'Şambali usulü yoğurtlu irmik tabanı; fırından çıkar çıkmaz şerbetlenen dilim dilim tatlı',
    kategori: 'tatli',
    koleksiyonlar: ['101', 'artan'],
    emoji: '🍥',
    porsiyon: 10,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 390,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'toz şeker', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu sıkılmış' },
      { ad: 'irmik', miktar: 2.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'yoğurt', miktar: 1.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'paket', grup: 'Hamuru için' },
      { ad: 'vanilin', miktar: 1, birim: 'paket', grup: 'Hamuru için' },
      { ad: 'antep fıstığı', miktar: 30, birim: 'g', grup: 'Üzeri için', not: 'çekilmiş' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti hazırlayıp soğut',
        aciklama:
          'Şeker ve suyu kaynatıp 10 dakika kısık ateşte pişir, limon suyunu ekle ve tamamen soğumaya bırak.',
        sureSn: 600,
      },
      {
        baslik: 'Harcı karıştır',
        aciklama:
          'İrmik, şeker, yoğurt, kabartma tozu ve vanilini bir kapta spatulayla karıştır; yumurtasız, koyu ve dökülebilir bir harç elde edeceksin.',
      },
      {
        baslik: 'Tepsiye yay ve dinlendir',
        aciklama:
          'Harcı yağlanmış tepsiye düzgünce yay; irmiğin yoğurdu emmesi için fırına vermeden önce 15 dakika tezgahta beklet.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Dilimleyip fıstık koy',
        aciklama:
          'Harcı pişirmeden önce bıçakla baklava dilimi şeklinde çiz, istersen her dilimin ortasına birer fıstık ya da badem yerleştir.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 180 derece fırında üzeri koyu altın rengi olana kadar 30-35 dakika pişir; renk koyulaştıkça tatlı şerbeti daha iyi çeker.',
        sureSn: 2100,
      },
      {
        baslik: 'Şerbetle buluştur',
        aciklama:
          'Fırından çıkan sıcak tatlının çizgilerini bıçakla derinleştir ve soğuk şerbeti üzerine yavaşça gezdir.',
      },
      {
        baslik: 'Çekmesini bekle',
        aciklama:
          'Tatlı şerbetin tamamını emip yumuşayana kadar oda sıcaklığında dinlendir; sonra dilimleri fıstıkla süsleyerek servis et.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Harcı fırın öncesi dinlendirmek irmiğin şişmesini sağlar; bu adımı atlarsan tatlı kumlu olur. Sıcak tatlıya soğuk şerbet kuralı burada da geçerli — şerbet ılık olursa dilimler lapalaşır.',
  },
  {
    id: 'fistikli-burma-kadayif',
    baslik: 'Fıstıklı Burma Kadayıf',
    altBaslik: 'Oklavaya sarılıp burulan tel kadayıfın içinde bol antep fıstığı; çıtır şerbetli rulolar',
    kategori: 'tatli',
    koleksiyonlar: ['misafir', 'osmanli'],
    emoji: '🥜',
    porsiyon: 8,
    hazirlikDk: 35,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 545,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'toz şeker', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu sıkılmış' },
      { ad: 'kadayıf', miktar: 500, birim: 'g', grup: 'Burma için' },
      { ad: 'tereyağı', miktar: 200, birim: 'g', grup: 'Burma için', not: 'eritilmiş' },
      { ad: 'antep fıstığı', miktar: 200, birim: 'g', grup: 'Burma için', not: 'iri çekilmiş' },
      { ad: 'antep fıstığı', miktar: 30, birim: 'g', grup: 'Üzeri için', not: 'toz çekilmiş' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti kaynatıp soğut',
        aciklama:
          'Şeker ve suyu kaynatıp kısık ateşte 10 dakika pişir, limon suyunu ekleyip tatlı fırından çıkana kadar soğumaya bırak.',
        sureSn: 600,
      },
      {
        baslik: 'Kadayıfı şerit yap',
        aciklama:
          'Tel kadayıfı tezgaha aç ve telleri koparmadan yaklaşık bir karış eninde uzun şeritlere ayır; kuruyup kırılmaması için üzerini nemli bezle ört.',
      },
      {
        baslik: 'Yağla ve fıstıkla',
        aciklama:
          'Her şeridin üzerine fırçayla erimiş tereyağı sür ve boydan boya bir sıra çekilmiş fıstık yay.',
      },
      {
        baslik: 'Oklavaya sarıp bur',
        aciklama:
          'Şeridin ucuna oklavayı koyup kadayıfı gevşek olmayacak şekilde sar; iki ucundan ortaya doğru bastırıp büzdükten sonra oklavayı çekerek burmayı çıkar ve tepsiye diz.',
      },
      {
        baslik: 'Kalan yağı gezdir',
        aciklama:
          'Tepsiye dizdiğin burmaların üzerine kalan erimiş tereyağını kaşıkla gezdir; teller yağla parlamalı.',
      },
      {
        baslik: 'Fırında kızart',
        aciklama:
          'Önceden ısıtılmış 170 derece fırında burmalar üstten ve alttan altın rengi olana kadar 35-40 dakika pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Şerbetleyip dinlendir',
        aciklama:
          'Fırından çıkan sıcak burmaların üzerine soğuk şerbeti gezdir ve tatlı şerbeti çekene kadar üzeri açık şekilde beklet.',
        sureSn: 2700,
        beklemeAdimi: true,
      },
      {
        baslik: 'Toz fıstıkla sun',
        aciklama:
          'Burmaları ikişer parmak eninde dilimleyip servis tabağına al; üzerlerine toz fıstık serperek sun.',
      },
    ],
    pufNoktasi:
      'Burmayı oklavadan çıkarmadan önce iki uçtan ortaya doğru büzmek tellerin akordeon gibi kıvrılmasını sağlar; bu kıvrımlar hem çıtırlığı hem şerbet kanallarını oluşturur. Şerbet soğuk, burma fırından yeni çıkmış olmalı.',
  },
];
