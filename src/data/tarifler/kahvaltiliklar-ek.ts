import type { Tarif } from '@/types/tarif';

// Kahvaltılık ek paketi — 8 özgün tarif.
export const KAHVALTILIKLAR_EK: Tarif[] = [
  {
    id: 'kaygana-otlu',
    baslik: 'Otlu Kaygana',
    altBaslik: 'Bol yeşillikli, tavada kabaran Karadeniz usulü yumuşacık yumurtalı kahvaltı böreği',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika'],
    emoji: '🌿',
    porsiyon: 2,
    hazirlikDk: 7,
    pisirmeDk: 8,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 330,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 3, birim: 'adet' },
      { ad: 'un', miktar: 3, birim: 'yemek kaşığı', not: 'silme' },
      { ad: 'süt', miktar: 1, birim: 'çay bardağı' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'dereotu', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'taze soğan', miktar: 2, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Harcı hazırla',
        aciklama:
          'Yumurtaları derin bir kapta çırp. Unu ve sütü ekleyip topak kalmayana dek karıştır; akışkan ama boza kıvamında bir harç elde et.',
      },
      {
        baslik: 'Yeşillikleri kat',
        aciklama:
          'Kıyılmış maydanoz, dereotu ve taze soğanı harca ekle. Tuz ve karabiberle tatlandırıp bir kez daha karıştır.',
      },
      {
        baslik: 'İlk yüzü pişir',
        aciklama:
          'Yağı geniş tavada orta ateşte kızdır. Harcı dökerek tavaya yay; kapağını kapatıp altı hafifçe kızarana kadar pişir.',
        sureSn: 240,
      },
      {
        baslik: 'Çevirip tamamla',
        aciklama:
          'Kayganayı geniş bir tabak yardımıyla ters çevirip tavaya geri kaydır. İkinci yüzü de 3 dakika pişirip dilimleyerek sıcak servis et.',
        sureSn: 180,
      },
    ],
    pufNoktasi:
      'Harç çok koyu olursa kaygana hamurlaşır; kaşıktan şerit halinde akacak kıvamda tutarsan içi pamuk gibi kalır.',
  },
  {
    id: 'pastirmali-sahanda-yumurta',
    baslik: 'Pastırmalı Sahanda Yumurta',
    altBaslik: 'Tereyağında yumuşayan çemenli pastırma üzerine göz yumurta; pazar kahvaltısının yıldızı',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika'],
    emoji: '🍳',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 8,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 4, birim: 'adet' },
      { ad: 'pastırma', miktar: 60, birim: 'g', not: 'ince dilim' },
      { ad: 'tereyağı', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Pastırmayı yumuşat',
        aciklama:
          'Tereyağını sahanda kısık ateşte erit. Pastırma dilimlerini tek kat halinde dizip her iki yüzünü, kenarları hafif kıvrılana dek çevirerek ısıt.',
        sureSn: 120,
      },
      {
        baslik: 'Yumurtaları kır',
        aciklama:
          'Yumurtaları pastırmaların aralarına tek tek kır. Sarıları dağıtmamaya özen göster; ateşi kısık tut.',
      },
      {
        baslik: 'Kapaklı pişir',
        aciklama:
          'Sahanın kapağını kapat ve beyazlar tutup sarılar akışkan kalana kadar pişir. Karabiber ve pul biber serpip sahanla sofraya al.',
        sureSn: 240,
      },
    ],
    pufNoktasi:
      'Pastırmayı yüksek ateşte kavurma; çemeni acılaşır ve dilimler sertleşir. Kısık ateşte sadece ısınıp yağı salması yeterli.',
  },
  {
    id: 'cilbir-klasik',
    baslik: 'Klasik Çılbır',
    altBaslik: 'Sarımsaklı yoğurt yatağında poşe yumurta, üzerinde pul biberli kızgın tereyağı',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika', 'osmanli'],
    emoji: '🥚',
    porsiyon: 2,
    hazirlikDk: 8,
    pisirmeDk: 7,
    zorluk: 'orta',
    kaloriPerPorsiyon: 360,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 4, birim: 'adet', not: 'mümkünse günlük' },
      { ad: 'yoğurt', miktar: 300, birim: 'g', not: 'oda sıcaklığında' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'sirke', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kuru nane', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Yoğurdu hazırla',
        aciklama:
          'Yoğurdu ezilmiş sarımsak ve tuzla pürüzsüz olana dek çırp. Servis tabaklarına yayarak yatak oluştur; kenarda beklet.',
      },
      {
        baslik: 'Suyu kaynat',
        aciklama:
          'Geniş bir tencerede suyu kaynatıp sirkeyi ekle. Ateşi, su hafifçe kıpırdayacak kadar kıs; fokur fokur kaynayan su yumurtayı dağıtır.',
        sureSn: 300,
      },
      {
        baslik: 'Yumurtaları poşe et',
        aciklama:
          'Her yumurtayı önce küçük bir kaseye kır, suyu kaşıkla döndürüp oluşan girdabın ortasına bırak. Beyazı toplanıp sarısı akışkan kalana dek 3 dakika pişir.',
        sureSn: 180,
      },
      {
        baslik: 'Tereyağını kızdır',
        aciklama:
          'Küçük tavada tereyağını köpürene dek erit; ateşten alıp pul biberi ve kuru naneyi ekle. Birkaç saniye çevirip kokusunu sal.',
        sureSn: 60,
      },
      {
        baslik: 'Birleştir ve servis et',
        aciklama:
          'Poşe yumurtaları delikli kepçeyle süzerek yoğurt yatağına yerleştir. Kızgın biberli tereyağını üzerinde gezdirip hemen servis et.',
      },
    ],
    pufNoktasi:
      'Taze yumurtanın beyazı suda dağılmaz; tazeliğinden emin değilsen yumurtayı kırmadan önce 10 saniye kaynar suda bekletmek beyazı toparlar.',
  },
  {
    id: 'acuka',
    baslik: 'Acuka',
    altBaslik: 'Cevizli, salçalı ve baharatlı ekmek üstü ezme; kahvaltının iddialı mezesi',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika', 'misafir'],
    emoji: '🌶️',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'ceviz içi', miktar: 150, birim: 'g' },
      { ad: 'biber salçası', miktar: 2, birim: 'yemek kaşığı', not: 'tatlı ya da acı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş' },
      { ad: 'pekmez', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Cevizi çek',
        aciklama:
          'Ceviz içini rondoda kesik kesik çalıştırarak iri kırıntı boyutuna getir. Yağ salıp macunlaşmadan durdur; dokulu kalması acukanın karakteridir.',
      },
      {
        baslik: 'Salçalı harcı yoğur',
        aciklama:
          'Cevizin üzerine biber salçası, domates salçası, ezilmiş sarımsak, pekmez ve tüm baharatları ekle. Zeytinyağını azar azar ilave ederek kaşıkla yoğur.',
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ezmeyi kapaklı kapta buzdolabında yarım saat dinlendirerek lezzetlerin kaynaşmasını sağla. Servis kabına alıp üzerine zeytinyağı gezdir.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Rondoyu aralıksız çalıştırırsan ceviz yağlanıp hamura döner; kesik kesik, kısa vuruşlarla çekmek taneli dokuyu korur.',
  },
  {
    id: 'cilek-receli',
    baslik: 'Çilek Reçeli',
    altBaslik: 'Tane tane, parlak kırmızı klasik çilek reçeli; bir gece şekerde dinlenerek kıvam bulur',
    kategori: 'kahvaltilik',
    koleksiyonlar: [],
    emoji: '🍓',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 190,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [4, 5, 6],
    malzemeler: [
      { ad: 'çilek', miktar: 1, birim: 'kg', not: 'sapları ayıklanmış' },
      { ad: 'toz şeker', miktar: 1, birim: 'kg' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu sıkılmış' },
    ],
    adimlar: [
      {
        baslik: 'Çilekleri şekerle',
        aciklama:
          'Yıkanıp süzülen çilekleri tencereye al, şekeri kat kat aralarına serp. Karıştırmadan kapağını kapat.',
      },
      {
        baslik: 'Bir gece dinlendir',
        aciklama:
          'Tencereyi serin bir yerde bir gece beklet; çilekler suyunu salıp şekeri kendiliğinden eritsin. Bu bekleme tanelerin diri kalmasını sağlar.',
        sureSn: 28800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kaynat ve köpüğünü al',
        aciklama:
          'Tencereyi orta ateşe al, kaynayınca yüzeyde biriken pembe köpüğü kaşıkla topla. Orta kaynarda, ara sıra tencereyi sallayarak pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Limonu ekle, kıvam al',
        aciklama:
          'Limon suyunu ekleyip 5 dakika daha kaynat. Soğuk tabağa damlattığın reçel yayılmadan duruyorsa ocaktan al.',
        sureSn: 300,
      },
      {
        baslik: 'Sıcakken kavanozla',
        aciklama:
          'Reçeli sıcakken temiz kavanozlara doldur, kapaklarını kapatıp ters çevirerek soğumaya bırak; vakumlanan kavanoz uzun süre dayanır.',
      },
    ],
    pufNoktasi:
      'Reçeli kaşıkla karıştırmak yerine tencereyi iki kulpundan tutup sallamak taneleri ezilmeden döndürür; renk de berrak kalır.',
  },
  {
    id: 'kayisi-receli',
    baslik: 'Kayısı Reçeli',
    altBaslik: 'Yaz kayısısının kokusunu kavanoza hapseden, iri parçalı altın sarısı klasik reçel',
    kategori: 'kahvaltilik',
    koleksiyonlar: [],
    emoji: '🧡',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 185,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8],
    malzemeler: [
      { ad: 'kayısı', miktar: 25, birim: 'adet', not: 'çekirdeği çıkarılıp ikiye bölünmüş (yaklaşık 1 kg)' },
      { ad: 'toz şeker', miktar: 1, birim: 'kg' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu sıkılmış' },
    ],
    adimlar: [
      {
        baslik: 'Kayısıları şekerle',
        aciklama:
          'Çekirdekleri çıkarılmış kayısı yarımlarını tencereye diz, şekeri üzerlerine yay. Kapağını kapatıp karıştırmadan bırak.',
      },
      {
        baslik: 'Bir gece beklet',
        aciklama:
          'Tencereyi serin yerde bir gece dinlendir; kayısılar suyunu salınca şeker şerbete dönüşür ve meyve pişerken dağılmaz.',
        sureSn: 28800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Orta ateşte kaynat',
        aciklama:
          'Tencereyi ocağa al, kaynayınca köpüğünü alarak orta ateşte pişir. Kayısılar şeffaflaşıp şurup hafifçe koyulaşana dek sürdür.',
        sureSn: 1500,
      },
      {
        baslik: 'Limonla parlat',
        aciklama:
          'Limon suyunu ekleyip 5 dakika daha kaynat; limon hem şekerlenmeyi önler hem rengi parlatır. Soğuk tabak testinden geçince ocağı kapat.',
        sureSn: 300,
      },
      {
        baslik: 'Kavanozlara doldur',
        aciklama:
          'Sıcak reçeli kaynar suyla haşlanmış kavanozlara paylaştır, kapatıp ters çevir ve oda sıcaklığında soğut.',
      },
    ],
    pufNoktasi:
      'Kayısıları tam olgun değil, bir gün alacalı sertlikte seçersen reçelde tane tane kalır; aşırı olgun kayısı marmelata döner.',
  },
  {
    id: 'kahvaltilik-patates-kavurmasi',
    baslik: 'Kahvaltılık Patates Kavurması',
    altBaslik: 'Dışı çıtır içi yumuşak, kekikli pul biberli tava patatesi; serpme kahvaltının yıldızı',
    kategori: 'kahvaltilik',
    koleksiyonlar: [],
    emoji: '🥔',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 240,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'patates', miktar: 4, birim: 'adet', not: 'orta boy' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Patatesleri ön haşla',
        aciklama:
          'Patatesleri soyup küp doğra, kaynar tuzlu suda 6 dakika haşlayıp süz. Tam pişirme; sadece dış yüzeyleri yumuşasın.',
        sureSn: 360,
      },
      {
        baslik: 'Buharını uçur',
        aciklama:
          'Süzülen küpleri geniş bir tepsiye yayıp 5 dakika kurumaya bırak; yüzeyleri kurursa tavada su çekmez, çıtır kızarır.',
        sureSn: 300,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kızgın yağda kavur',
        aciklama:
          'Ayçiçek yağını geniş tavada iyice kızdır, patatesleri tek kat yay. Az karıştırarak her yüzü altın rengi olana kadar kavur.',
        sureSn: 600,
      },
      {
        baslik: 'Tereyağı ve baharatla bitir',
        aciklama:
          'Ateşi kısıp tereyağını ekle; kekik, pul biber, tuz ve karabiberi serp. Tavayı sallayarak yağı patateslere yedirip sıcak servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Kavururken sık karıştırmak patatesin kabuk tutmasını engeller; her yüz kızarana kadar sabırla bekleyip öyle çevir.',
  },
  {
    id: 'peynirli-sahanda-yumurta',
    baslik: 'Peynirli Sahanda Yumurta',
    altBaslik: 'Tereyağında eriyen beyaz peynir üzerine göz yumurta; iki malzemeyle mahalle kahvaltısı',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika'],
    emoji: '🧀',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 7,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 310,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 4, birim: 'adet' },
      { ad: 'beyaz peynir', miktar: 100, birim: 'g', not: 'iri küp doğranmış' },
      { ad: 'tereyağı', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Peyniri yumuşat',
        aciklama:
          'Tereyağını sahanda kısık ateşte erit, peynir küplerini yay. Kenarları hafifçe eriyip yumuşayana dek 1-2 dakika ısıt.',
        sureSn: 90,
      },
      {
        baslik: 'Yumurtaları kır',
        aciklama:
          'Yumurtaları peynirlerin aralarına kır. Peynir zaten tuzlu olduğu için tuz ekleme; ateşi kısık tut.',
      },
      {
        baslik: 'Kapaklı pişirip servis et',
        aciklama:
          'Kapağı kapatıp beyazlar tutana, sarılar akışkan kalana kadar pişir. Karabiber ve pul biber serpip sahanla sıcak servis et.',
        sureSn: 240,
      },
    ],
    pufNoktasi:
      'Tam yağlı, olgunlaşmış beyaz peynir ısıyla krema gibi yumuşar; tuzu az peynir kullanırsan bir tutam tuzu yumurta beyazlarına serp.',
  },
];
