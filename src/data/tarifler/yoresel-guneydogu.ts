import type { Tarif } from '@/types/tarif';

// Yöresel mutfak — Güneydoğu Anadolu (Antep, Urfa, Adana, Mardin).
// Tüm tarifler özgün metinle, ev mutfağına uyarlanmış ölçülerle yazılmıştır.
export const YORESEL_GUNEYDOGU: Tarif[] = [
  {
    id: 'icli-kofte-haslama',
    baslik: 'Haşlama İçli Köfte',
    altBaslik: 'Antep usulü ince bulgur kabuğunda cevizli kıymalı iç; suda haşlanan hafif klasik',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🧆',
    porsiyon: 6,
    hazirlikDk: 80,
    pisirmeDk: 30,
    zorluk: 'zor',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'ince bulgur', miktar: 3, birim: 'su bardağı', grup: 'Kabuğu için' },
      { ad: 'irmik', miktar: 2, birim: 'yemek kaşığı', grup: 'Kabuğu için' },
      { ad: 'un', miktar: 3, birim: 'yemek kaşığı', grup: 'Kabuğu için' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Kabuğu için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Kabuğu için' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Kabuğu için', not: 'ılık, azar azar' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Kabuğu için' },
      { ad: 'kıyma', miktar: 400, birim: 'g', grup: 'İç harcı için', not: 'yağlı' },
      { ad: 'soğan', miktar: 3, birim: 'adet', grup: 'İç harcı için', not: 'ince doğranmış' },
      { ad: 'ceviz içi', miktar: 1, birim: 'su bardağı', grup: 'İç harcı için', not: 'irice dövülmüş' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'İç harcı için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'İç harcı için', not: 'ince kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'İç harcı kavur',
        aciklama:
          'Kıymayı yağsız tavada suyunu salıp çekene kadar kavur. Tereyağı ile soğanları ekleyip soğanlar pembeleşene dek pişirmeye devam et.',
        sureSn: 900,
      },
      {
        baslik: 'Cevizi ve baharatı kat',
        aciklama:
          'Ocağı kapat; dövülmüş cevizi, karabiberi, pul biberi ve tuzu karıştır. Ilıyınca kıyılmış maydanozu ekle.',
        sureSn: 300,
      },
      {
        baslik: 'Harcı soğut',
        aciklama:
          'Harcı geniş bir tepsiye yay ve tamamen soğumaya bırak. Sıcak harç kabuğu yumuşatıp köfteyi dağıtır.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Bulguru ıslat',
        aciklama:
          'İnce bulguru geniş bir kaba al, üzerine ılık suyun yarısını gezdir ve üstünü kapatarak şişmesi için bekle.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kabuk hamurunu yoğur',
        aciklama:
          'Şişen bulgura irmiği, unu, salçayı, yumurtayı ve tuzu ekle. Kalan ılık suyu azar azar vererek macun kıvamına gelene kadar en az 15 dakika yoğur.',
        sureSn: 1200,
      },
      {
        baslik: 'Köfteleri şekillendir',
        aciklama:
          'Islak elle ceviz büyüklüğünde parça al, baş parmağınla oyarak ince cidarlı bir çanak aç. İçine bir tatlı kaşığı harç koy, ağzını kapatıp mekik biçimi ver.',
        sureSn: 1800,
      },
      {
        baslik: 'Köfteleri haşla',
        aciklama:
          'Geniş tencerede tuzlu suyu kaynat. Köfteleri partiler halinde bırak; yüzeye çıktıktan sonra 4-5 dakika daha haşlayıp delikli kepçeyle al.',
        sureSn: 600,
      },
      {
        baslik: 'Servis et',
        aciklama: 'Sıcak köfteleri süzüp servis tabağına al; yanında limon dilimleri ve sumaklı salata ile sun.',
      },
    ],
    pufNoktasi:
      'Yoğururken avucunu sık sık ıslat: kabuk hem toparlanır hem haşlamada çatlamaz. Kapanmayan yerleri ıslak parmakla sıvazla.',
  },
  {
    id: 'etsiz-cig-kofte',
    baslik: 'Etsiz Çiğ Köfte',
    altBaslik: 'Urfa usulü bol isotlu; patatesle bağlanan, yoğurdukça kıvam alan meze köfte',
    kategori: 'salata',
    koleksiyonlar: ['sokak-lezzeti'],
    emoji: '🥙',
    porsiyon: 6,
    hazirlikDk: 55,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 310,
    beslenmeEtiketleri: ['vegan'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'ince bulgur', miktar: 3, birim: 'su bardağı' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'haşlanıp ezilmiş' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'rendelenmiş, suyu sıkılmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'isot', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'nar ekşisi', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'taze soğan', miktar: 3, birim: 'adet', not: 'ince kıyılmış' },
      { ad: 'maydanoz', miktar: 1, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'marul', miktar: 1, birim: 'adet', grup: 'Servis için' },
      { ad: 'limon', miktar: 2, birim: 'adet', grup: 'Servis için' },
    ],
    adimlar: [
      {
        baslik: 'Patatesi haşla',
        aciklama: 'Patatesi kabuğuyla yumuşayana kadar haşla; sıcakken soyup çatalla püre haline getir.',
        sureSn: 1200,
      },
      {
        baslik: 'Bulguru nemlendir',
        aciklama:
          'İnce bulguru geniş bir leğene al, üzerine yarım su bardağı sıcak su serpip karıştır. Üstünü nemli bezle örtüp yumuşaması için bekle.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Salçalı harcı yoğur',
        aciklama:
          'Bulgurun üzerine iki salçayı, patates ezmesini, soğan rendesini ve sarımsağı ekle. Avuç içiyle bastıra bastıra 15 dakika yoğur.',
        sureSn: 900,
      },
      {
        baslik: 'İsotu işleyerek yoğur',
        aciklama:
          'İsotu, kimyonu, karabiberi ve tuzu ekle; renk koyulaşıp taneler kırılana dek yoğurmayı sürdür. Kuru gelirse parmak ucuyla su serp.',
        sureSn: 900,
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama: 'Yoğrulan harcın üstünü kapat ve baharatın bulgura işlemesi için oda sıcaklığında dinlendir.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Ekşi ve yeşillikle bitir',
        aciklama:
          'Nar ekşisini ve zeytinyağını ekleyip birkaç dakika daha yoğur. En son taze soğanı ve maydanozu katıp dağılmayacak kadar karıştır.',
        sureSn: 300,
      },
      {
        baslik: 'Sıkıp servis et',
        aciklama: 'Avucunda sıkarak parmak izli köfteler yap; marul yaprakları ve limon dilimleriyle sun.',
      },
    ],
    pufNoktasi:
      'İsotu yoğurmanın ortasında ekle, sonda değil: nem ve sıcaklıkla açılan isot hem rengi koyulaştırır hem acıyı dengeler.',
  },
  {
    id: 'beyran-corbasi',
    baslik: 'Beyran Çorbası',
    altBaslik: 'Gaziantep sabahlarının bol sarımsaklı, acılı kuzu incik çorbası; ev uyarlaması',
    kategori: 'corba',
    koleksiyonlar: ['sokak-lezzeti'],
    emoji: '🍲',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 150,
    zorluk: 'orta',
    kaloriPerPorsiyon: 420,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuzu incik', miktar: 800, birim: 'g', not: 'kemikli' },
      { ad: 'su', miktar: 2, birim: 'lt' },
      { ad: 'pirinç', miktar: 1, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'sarımsak', miktar: 8, birim: 'diş', not: 'ezilmiş' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'isot', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 2, birim: 'adet', grup: 'Servis için' },
    ],
    adimlar: [
      {
        baslik: 'İnciği haşla',
        aciklama:
          'İnciği soğuk suyla tencereye al; kaynayınca köpüğünü ala ala kısık ateşte et kemikten ayrılana kadar yaklaşık 2 saat haşla.',
        sureSn: 7200,
      },
      {
        baslik: 'Eti didikle',
        aciklama: 'Eti sudan çıkarıp ılıyınca kemiğinden ayır ve iri parçalar halinde didikle. Haşlama suyunu süz, kenarda sıcak tut.',
        sureSn: 600,
      },
      {
        baslik: 'Pirinci pişir',
        aciklama: 'Yıkanmış pirinci haşlama suyunun 2 su bardağıyla ayrı bir cezvede diri kalacak şekilde haşla.',
        sureSn: 900,
      },
      {
        baslik: 'Sarımsaklı yağı kızdır',
        aciklama: 'Küçük tavada tereyağını erit; ezilmiş sarımsağı ve salçayı kokusu çıkana kadar 1-2 dakika çevir.',
        sureSn: 120,
      },
      {
        baslik: 'Çorbayı birleştir',
        aciklama:
          'Derin tencerede eti, pirinci, sarımsaklı yağı ve süzülmüş et suyunu buluştur. İsot, pul biber, karabiber ve tuzu ekle.',
        sureSn: 120,
      },
      {
        baslik: 'Harlı ateşte kaynat',
        aciklama:
          'Çorbayı harlı ateşte 5 dakika fokurdatarak kaynat; yüzeyde kırmızı yağı görünce ocaktan al.',
        sureSn: 300,
      },
      {
        baslik: 'Bol limonla servis et',
        aciklama: 'Kâselere sıcak sıcak paylaştır; yanına bol limon koy, dileyen ekstra isot serpsin.',
      },
    ],
    pufNoktasi:
      'Beyranın kimliği et suyunda saklı: haşlama suyunu asla dökme, kısık ateşte uzun haşlayıp yağıyla birlikte kullan.',
  },
  {
    id: 'anali-kizli',
    baslik: 'Analı Kızlı',
    altBaslik: 'İçli iri köfteler ve minik yavrularıyla nohutlu salçalı suda pişen Antep klasiği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🥘',
    porsiyon: 6,
    hazirlikDk: 70,
    pisirmeDk: 45,
    zorluk: 'zor',
    kaloriPerPorsiyon: 460,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'ince bulgur', miktar: 2, birim: 'su bardağı', grup: 'Köfte hamuru için' },
      { ad: 'irmik', miktar: 2, birim: 'yemek kaşığı', grup: 'Köfte hamuru için' },
      { ad: 'un', miktar: 2, birim: 'yemek kaşığı', grup: 'Köfte hamuru için' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Köfte hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte hamuru için' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', grup: 'Köfte hamuru için', not: 'ılık, azar azar' },
      { ad: 'kıyma', miktar: 250, birim: 'g', grup: 'İç harcı için' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İç harcı için', not: 'ince doğranmış' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'kuşbaşı et', miktar: 200, birim: 'g', grup: 'Sosu için', not: 'küçük doğranmış' },
      { ad: 'nohut', miktar: 1, birim: 'su bardağı', grup: 'Sosu için', not: 'haşlanmış' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'domates salçası', miktar: 1.5, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 6, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'Sosu için' },
    ],
    adimlar: [
      {
        baslik: 'İç harcı hazırla',
        aciklama:
          'Kıymayı kavurup soğanı ekle; soğan yumuşayınca karabiberle tatlandır ve harcı soğumaya bırak.',
        sureSn: 900,
      },
      {
        baslik: 'Köfte hamurunu yoğur',
        aciklama:
          'Bulguru ılık suyla 10 dakika ıslat; irmik, un, salça ve tuzu ekleyip kulak memesi kıvamına gelene dek yoğur.',
        sureSn: 1200,
      },
      {
        baslik: 'Analı köfteleri doldur',
        aciklama:
          'Hamurun yarısından ceviz iriliğinde parçalar aç, içine harç doldurup mekik gibi kapat. Bunlar sofranın analarıdır.',
        sureSn: 1200,
      },
      {
        baslik: 'Kızlı köfteleri yuvarla',
        aciklama: 'Kalan hamurdan fındıktan küçük içsiz toplar yuvarla; hepsini unlu tepside beklet.',
        sureSn: 900,
      },
      {
        baslik: 'Sos suyunu pişir',
        aciklama:
          'Tereyağında kuşbaşı eti mühürle, salçayı kavur. Sıcak suyu ve haşlanmış nohudu ekleyip et yumuşayana kadar kaynat.',
        sureSn: 1500,
      },
      {
        baslik: 'Köfteleri suya bırak',
        aciklama:
          'Kaynayan sosa önce iri analı köfteleri, 5 dakika sonra minik kızlı köfteleri bırak; karıştırmadan tencereyi sallayarak pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Naneyle tatlandır',
        aciklama: 'Tuzunu ayarla, kuru naneyi serp ve kısık ateşte 5 dakika daha demlendirerek pişir.',
        sureSn: 300,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama: 'Ocaktan alıp 10 dakika dinlendir; suyu hafif çeken yemeği derin tabaklarda servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Köfteler suya girdikten sonra kaşık değdirme; tencereyi kulplarından tutup sallamak köfteleri dağıtmadan döndürür.',
  },
  {
    id: 'yuvalama',
    baslik: 'Yuvalama',
    altBaslik: 'Gaziantep bayramlarının minik pirinç köfteli, nohutlu, naneli yoğurtlu yemeği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['ramazan', 'misafir'],
    emoji: '🍚',
    porsiyon: 6,
    hazirlikDk: 75,
    pisirmeDk: 50,
    zorluk: 'zor',
    kaloriPerPorsiyon: 410,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'pirinç', miktar: 1.5, birim: 'su bardağı', grup: 'Yuvalamalar için', not: 'bir gece ıslatılmış' },
      { ad: 'ince bulgur', miktar: 0.5, birim: 'su bardağı', grup: 'Yuvalamalar için' },
      { ad: 'kıyma', miktar: 250, birim: 'g', grup: 'Yuvalamalar için', not: 'yağsız' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Yuvalamalar için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'Yuvalamalar için' },
      { ad: 'kuşbaşı et', miktar: 300, birim: 'g', grup: 'Yemeği için' },
      { ad: 'nohut', miktar: 1, birim: 'su bardağı', grup: 'Yemeği için', not: 'haşlanmış' },
      { ad: 'su', miktar: 7, birim: 'su bardağı', grup: 'Yemeği için', not: 'sıcak' },
      { ad: 'yoğurt', miktar: 900, birim: 'g', grup: 'Terbiyesi için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Terbiyesi için' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı', grup: 'Terbiyesi için' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'kuru nane', miktar: 1, birim: 'yemek kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Pirinci dövülecek kıvama getir',
        aciklama:
          'Bir gece ıslatılmış pirinci süz ve mutfak robotunda ince bulgurla birlikte pirinç taneleri kırılana dek çek.',
        sureSn: 300,
      },
      {
        baslik: 'Köfte hamurunu yoğur',
        aciklama:
          'Çekilmiş karışıma kıymayı, tuzu ve karabiberi ekle; parçalar birbirini tutana kadar 10 dakika yoğur.',
        sureSn: 600,
      },
      {
        baslik: 'Nohut kadar yuvala',
        aciklama:
          'Islak avuçla hamurdan leblebi iriliğinde parçalar kopar ve tek tek yuvarla. Sabır işidir; küçüldükçe yemek güzelleşir.',
        sureSn: 2400,
      },
      {
        baslik: 'Eti haşla',
        aciklama: 'Kuşbaşı eti sıcak suyla tencereye al; köpüğünü alarak yumuşayana kadar kısık ateşte pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Yuvalamaları haşla',
        aciklama:
          'Kaynayan et suyuna nohudu ve yuvalamaları bırak; toplar yüzeye çıkıp 10 dakika pişene kadar kaynat.',
        sureSn: 900,
      },
      {
        baslik: 'Yoğurt terbiyesini bağla',
        aciklama:
          'Yoğurdu, yumurtayı ve unu pürüzsüz çırp. Tencereden aldığın sıcak sudan kepçe kepçe ekleyerek ılıştır, sonra karıştırarak tencereye dök.',
        sureSn: 600,
      },
      {
        baslik: 'Kesilmeden kaynat',
        aciklama: 'Hep aynı yönde karıştırarak yemeği bir taşım kaynat; tuzunu ayarlayıp ocağı kapat.',
        sureSn: 300,
      },
      {
        baslik: 'Naneli yağla tamamla',
        aciklama: 'Tereyağını kızdırıp kuru naneyle buluştur ve yemeğin üzerine gezdirerek servis et.',
      },
    ],
    pufNoktasi:
      'Terbiye tencereye girdikten sonra kaynayana kadar başından ayrılma ve tek yönde karıştır; yoğurdun kesilmemesinin sırrı budur.',
  },
  {
    id: 'antep-patlican-kebabi',
    baslik: 'Antep Patlıcan Kebabı',
    altBaslik: 'Fırın uyarlaması: köfte ve patlıcan dizisi, közlenmiş domates ve biberle',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🍆',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 50,
    zorluk: 'orta',
    kaloriPerPorsiyon: 440,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'patlıcan', miktar: 3, birim: 'adet', not: 'kemer, kalın halka' },
      { ad: 'kıyma', miktar: 400, birim: 'g', grup: 'Köftesi için', not: 'yağlı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Köftesi için' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Köftesi için', not: 'rendelenmiş' },
      { ad: 'isot', miktar: 1, birim: 'çay kaşığı', grup: 'Köftesi için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'Köftesi için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köftesi için' },
      { ad: 'domates', miktar: 2, birim: 'adet', grup: 'Üzeri için', not: 'iri dilimlenmiş' },
      { ad: 'sivri biber', miktar: 4, birim: 'adet', grup: 'Üzeri için' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'lavaş', miktar: 2, birim: 'adet', grup: 'Servis için' },
    ],
    adimlar: [
      {
        baslik: 'Köfte harcını yoğur',
        aciklama:
          'Kıymayı salça, sarımsak, isot, karabiber ve tuzla 5 dakika yoğur; yağın harca yayılmasını sağla.',
        sureSn: 300,
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama: 'Harcın üstünü kapatıp buzdolabında dinlendir; toparlanan harç şişte dağılmaz.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Patlıcanları hazırla',
        aciklama: 'Patlıcanları alacalı soyup iki parmak kalınlığında halkalara kes; acısı için tuzlu suda 10 dakika bekletip kurula.',
        sureSn: 900,
      },
      {
        baslik: 'Kebabı diz',
        aciklama:
          'Harçtan patlıcan halkası çapında köfteler hazırla. Yağlanmış fırın kabına bir patlıcan bir köfte olacak biçimde sıkıca diz.',
        sureSn: 600,
      },
      {
        baslik: 'Sebzeleri yerleştir',
        aciklama: 'Dizinin üzerine domates dilimlerini ve sivri biberleri yay; sıcak suyu kenardan ekleyip zeytinyağı gezdir.',
        sureSn: 180,
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Üstü folyoyla kapalı 200 derece fırında 35 dakika, folyoyu açıp patlıcanlar renk alana kadar 15 dakika daha pişir.',
        sureSn: 3000,
      },
      {
        baslik: 'Lavaşla servis et',
        aciklama: 'Kebabı tepsinin suyuna banılacak sıcak lavaş dilimleriyle birlikte sun.',
      },
    ],
    pufNoktasi:
      'Patlıcan ve köfte halkalarını aynı çapta kesersen diziliş fırında devrilmez, her çatala bir et bir patlıcan gelir.',
  },
  {
    id: 'urfa-tepsi-kebabi',
    baslik: 'Urfa Usulü Tepsi Kebabı',
    altBaslik: 'Elle yayılan baharatlı kıyma üzerine patates, domates ve biberle fırında ev kebabı',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🥘',
    porsiyon: 5,
    hazirlikDk: 25,
    pisirmeDk: 55,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 500, birim: 'g', not: 'orta yağlı' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Harcı için', not: 'rendelenmiş' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', grup: 'Harcı için', not: 'rendelenmiş' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'Harcı için', not: 'ince kıyılmış' },
      { ad: 'biber salçası', miktar: 1.5, birim: 'yemek kaşığı', grup: 'Harcı için' },
      { ad: 'isot', miktar: 1, birim: 'yemek kaşığı', grup: 'Harcı için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'patates', miktar: 2, birim: 'adet', grup: 'Üzeri için', not: 'halka kesilmiş' },
      { ad: 'domates', miktar: 3, birim: 'adet', grup: 'Üzeri için', not: 'halka kesilmiş' },
      { ad: 'sivri biber', miktar: 5, birim: 'adet', grup: 'Üzeri için' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Kebap harcını yoğur',
        aciklama:
          'Kıymayı rendelenmiş soğan, sarımsak, maydanoz, salça ve baharatlarla hamur gibi olana dek yoğur.',
        sureSn: 480,
      },
      {
        baslik: 'Harcı tepsiye yay',
        aciklama: 'Harcı yağlanmış fırın tepsisine ıslak elle bir parmak kalınlığında bastırarak yay; kenarlarını hafif yükselt.',
        sureSn: 300,
      },
      {
        baslik: 'Sebzeleri döşe',
        aciklama: 'Patates halkalarını harca hafif gömerek yerleştir; aralarına domates dilimlerini ve biberleri döşe.',
        sureSn: 300,
      },
      {
        baslik: 'Suyunu ekle',
        aciklama: 'Sıcak suyu tepsinin kenarından gezdir, üzerine zeytinyağı damlat; dilersen tuz serp.',
        sureSn: 60,
      },
      {
        baslik: 'Kapalı pişir',
        aciklama: 'Tepsiyi folyoyla kapatıp önceden ısınmış 190 derece fırında 35 dakika pişir; patatesler yumuşasın.',
        sureSn: 2100,
      },
      {
        baslik: 'Üzerini kızart',
        aciklama: 'Folyoyu al, fırını 210 dereceye çıkar ve sebzeler kızarana kadar 15-20 dakika daha pişir.',
        sureSn: 1200,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama: 'Tepsiyi 5 dakika dinlendir; kare kare kesip suyuyla birlikte pilav ya da ekmek eşliğinde sun.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Harcı tepsiye yaymadan önce 10 dakika buzdolabında bekletirsen kesim çizgileri pişerken dağılmaz, dilimler düzgün çıkar.',
  },
  {
    id: 'eksili-ufak-kofte',
    baslik: 'Ekşili Ufak Köfte',
    altBaslik: 'Antep sofralarının nar ekşili salçalı suyunda pişen fındık büyüklüğünde bulgur köftesi',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍲',
    porsiyon: 5,
    hazirlikDk: 50,
    pisirmeDk: 30,
    zorluk: 'orta',
    kaloriPerPorsiyon: 360,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'ince bulgur', miktar: 2, birim: 'su bardağı', grup: 'Köftesi için' },
      { ad: 'kıyma', miktar: 200, birim: 'g', grup: 'Köftesi için', not: 'yağsız' },
      { ad: 'un', miktar: 2, birim: 'yemek kaşığı', grup: 'Köftesi için' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Köftesi için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köftesi için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'Köftesi için' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', grup: 'Köftesi için', not: 'ılık' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'Sosu için', not: 'ince doğranmış' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'nar ekşisi', miktar: 4, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 5, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
    ],
    adimlar: [
      {
        baslik: 'Bulguru ıslat',
        aciklama: 'İnce bulguru ılık suyla nemlendirip üstü kapalı şekilde yumuşamaya bırak.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Köfte hamurunu yoğur',
        aciklama:
          'Bulgura kıymayı, unu, salçayı, tuzu ve karabiberi ekle; tutkallı bir hamur olana dek 10-12 dakika yoğur.',
        sureSn: 720,
      },
      {
        baslik: 'Ufak köfteleri yuvarla',
        aciklama: 'Islak elle fındıktan küçük toplar yuvarla; ne kadar ufak olursa yemek o kadar makbuldür.',
        sureSn: 1500,
      },
      {
        baslik: 'Sos suyunu hazırla',
        aciklama:
          'Tereyağında soğanı pembeleştir; iki salçayı ekleyip kavur, sıcak suyu döküp kaynamaya bırak.',
        sureSn: 600,
      },
      {
        baslik: 'Köfteleri pişir',
        aciklama: 'Kaynayan sosa köfteleri tane tane bırak; kaşık değdirmeden tencereyi sallayarak 15 dakika pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Ekşisini ekle',
        aciklama: 'Nar ekşisini, kuru naneyi ve tuzu ekleyip 5 dakika daha kaynat; tadına bakıp ekşisini dengele.',
        sureSn: 300,
      },
      {
        baslik: 'Sıcak servis et',
        aciklama: 'Kâselere suyuyla birlikte paylaştır; yanında ekmek ve taze yeşillikle sun.',
      },
    ],
    pufNoktasi:
      'Nar ekşisini pişirmenin sonunda ekle: uzun kaynayan ekşi acılaşır, sonda eklenen ise yemeğe parlak bir tat verir.',
  },
  {
    id: 'adana-bicak-arasi-ezme',
    baslik: 'Adana Bıçak Arası Ezme',
    altBaslik: 'Kebapçı usulü satırla incecik kıyılan domatesli acılı ezme; ateş görmeden hazır',
    kategori: 'salata',
    koleksiyonlar: ['15-dakika', 'sokak-lezzeti'],
    emoji: '🍅',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 80,
    beslenmeEtiketleri: ['vegan', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'domates', miktar: 4, birim: 'adet', not: 'olgun, çekirdeği alınmış' },
      { ad: 'sivri biber', miktar: 3, birim: 'adet', not: 'acı' },
      { ad: 'kırmızı soğan', miktar: 1, birim: 'adet' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet' },
      { ad: 'biber salçası', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'nar ekşisi', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'sumak', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kuru nane', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri iri doğra',
        aciklama: 'Domatesin çekirdeklerini al; domatesi, biberi, soğanı ve sarımsağı kaba parçalara böl.',
        sureSn: 300,
      },
      {
        baslik: 'Bıçakla incecik kıy',
        aciklama:
          'Tüm sebzeleri geniş kesme tahtasında büyük bıçakla ya da satırla üst üste getirerek ezme kıvamına gelene dek kıy. Robot kullanma; sulanır.',
        sureSn: 900,
      },
      {
        baslik: 'Maydanozu ekle',
        aciklama: 'Maydanozu da aynı tahtada kıyıp karışıma kat; birkaç bıçak darbesiyle harmanla.',
        sureSn: 120,
      },
      {
        baslik: 'Sos ve baharatla yoğur',
        aciklama:
          'Karışımı kaba al; salça, nar ekşisi, zeytinyağı, limon suyu, sumak, pul biber, nane ve tuzla kaşık sırtıyla ezerek karıştır.',
        sureSn: 180,
      },
      {
        baslik: 'Soğukta demlendir',
        aciklama: 'Ezmeyi buzdolabında dinlendir; tatların birbirine geçmesi için yarım saat ideal.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Servis et',
        aciklama: 'Üzerine bir tur zeytinyağı gezdir; kebap yanında ya da lavaş içinde sun.',
      },
    ],
    pufNoktasi:
      'Domatesin çekirdek yatağını mutlaka çıkar: ezmenin sulanmadan bıçak arasında ezilmesinin tek şartı susuz domatestir.',
  },
  {
    id: 'mardin-sembusek',
    baslik: 'Mardin Usulü Sembusek',
    altBaslik: 'Kıymalı baharatlı içiyle yarım ay kapatılıp tavada pişen incecik Mardin böreği',
    kategori: 'hamur-isi',
    koleksiyonlar: ['sokak-lezzeti'],
    emoji: '🥟',
    porsiyon: 6,
    hazirlikDk: 60,
    pisirmeDk: 25,
    zorluk: 'orta',
    kaloriPerPorsiyon: 390,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 4, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'instant maya', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'kıyma', miktar: 300, birim: 'g', grup: 'İç harcı için' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İç harcı için', not: 'çok ince doğranmış' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'İç harcı için' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'İç harcı için', not: 'ince kıyılmış' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'kimyon', miktar: 0.5, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'ayçiçek yağı', miktar: 0.5, birim: 'çay bardağı', grup: 'Pişirmek için' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Unu, mayayı ve tuzu karıştır; ılık suyu ve zeytinyağını ekleyip ele yapışmayan yumuşak bir hamur yoğur.',
        sureSn: 600,
      },
      {
        baslik: 'Hamuru mayalandır',
        aciklama: 'Üstünü nemli bezle örtüp ılık bir köşede hacmi belirgin artana kadar mayalanmaya bırak.',
        sureSn: 2700,
        beklemeAdimi: true,
      },
      {
        baslik: 'İç harcı karıştır',
        aciklama:
          'Kıymayı ince soğan, salça, maydanoz ve baharatlarla çiğden yoğur; harç sürülecek kıvamda yumuşak olsun.',
        sureSn: 300,
      },
      {
        baslik: 'Bezeleri aç',
        aciklama: 'Hamuru 12 eşit bezeye ayır; her bezeyi unlu zeminde tabak genişliğinde ince aç.',
        sureSn: 900,
      },
      {
        baslik: 'Yarım ay kapat',
        aciklama:
          'Açtığın hamurun yarısına ince bir kat harç sür, boş yarıyı üzerine kapat ve kenarlarını parmakla bastırarak yapıştır.',
        sureSn: 600,
      },
      {
        baslik: 'Tavada pişir',
        aciklama:
          'Az yağla ısıttığın geniş tavada sembusekleri iki yüzü de benek benek kızarana kadar orta ateşte pişir.',
        sureSn: 1200,
      },
      {
        baslik: 'Sıcak servis et',
        aciklama: 'Pişenleri temiz beze sarıp yumuşat; limon ve ayranla sıcak sıcak sun.',
      },
    ],
    pufNoktasi:
      'Harcı pişmiş değil çiğ sür: ince hamurla aynı sürede pişen çiğ harç, sembuseğe suyunu ve lezzetini içeriden verir.',
  },
  {
    id: 'fistikli-sillik',
    baslik: 'Fıstıklı Şıllık Tatlısı',
    altBaslik: 'Antepʼin krep katları arasına bol fıstık serpilen, şerbetle ıslanan tepsi tatlısı',
    kategori: 'tatli',
    koleksiyonlar: ['misafir'],
    emoji: '🥞',
    porsiyon: 6,
    hazirlikDk: 30,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 2, birim: 'su bardağı', grup: 'Krepleri için' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', grup: 'Krepleri için' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı', grup: 'Krepleri için' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Krepleri için' },
      { ad: 'tuz', miktar: 1, birim: 'tutam', grup: 'Krepleri için' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Krepleri için' },
      { ad: 'toz şeker', miktar: 2.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 2.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu' },
      { ad: 'antep fıstığı', miktar: 1.5, birim: 'su bardağı', grup: 'Arası için', not: 'iri çekilmiş' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti kaynat',
        aciklama:
          'Şekeri ve suyu kaynatıp limon suyunu ekle; 10 dakika kaynayan şerbeti ocaktan alıp ılımaya bırak.',
        sureSn: 900,
      },
      {
        baslik: 'Krep hamurunu çırp',
        aciklama: 'Yumurtaları, sütü, suyu, tuzu ve unu pürüzsüz olana dek çırp; akışkan bir hamur elde et.',
        sureSn: 300,
      },
      {
        baslik: 'Hamuru dinlendir',
        aciklama: 'Hamurun üstünü kapatıp dinlendir; unun suyu emmesi krepleri delik deşik olmaktan kurtarır.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Krepleri pişir',
        aciklama:
          'Yağlanmış yapışmaz tavada kepçe kepçe döktüğün hamurdan iki yüzü hafif kızarmış ince krepler pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Katları diz',
        aciklama:
          'Tepsiye bir krep ser, üzerine çekilmiş fıstık serp; tüm krepler bitene kadar katlamaya devam et. En üste bolca fıstık ayır.',
        sureSn: 300,
      },
      {
        baslik: 'Şerbeti dök',
        aciklama: 'Ilık şerbeti sıcak katların üzerine kepçeyle yavaşça gezdir; tatlının çekmesini bekle.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kızgın yağla bitir',
        aciklama: 'Tereyağını köpürene kadar kızdırıp tatlının üzerinde gezdir; ayırdığın fıstıkla süsleyip dilimle.',
      },
    ],
    pufNoktasi:
      'Şerbet ılık, krepler sıcakken buluşmalı: ikisi de aynı ısıda olursa şıllık ne hamurlaşır ne kayış gibi olur.',
  },
  {
    id: 'antep-peynir-helvasi',
    baslik: 'Antep Usulü Peynir Helvası',
    altBaslik: 'Tuzsuz taze peynirle lif lif çekilen irmikli sıcak tatlı; fıstıkla taçlanır',
    kategori: 'tatli',
    koleksiyonlar: ['misafir'],
    emoji: '🍮',
    porsiyon: 6,
    hazirlikDk: 10,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tuzsuz taze peynir', miktar: 500, birim: 'g', not: 'Antep peyniri ya da tuzsuz lor' },
      { ad: 'irmik', miktar: 1, birim: 'su bardağı' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'toz şeker', miktar: 1.5, birim: 'su bardağı' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'antep fıstığı', miktar: 0.5, birim: 'su bardağı', not: 'çekilmiş' },
    ],
    adimlar: [
      {
        baslik: 'İrmiği kavur',
        aciklama:
          'Tereyağını geniş tavada erit; irmiği kokusu çıkıp rengi hafif dönene kadar orta ateşte karıştırarak kavur.',
        sureSn: 600,
      },
      {
        baslik: 'Şekeri erit',
        aciklama: 'Toz şekeri ve sıcak suyu ekleyip şeker tamamen eriyene kadar karıştır.',
        sureSn: 180,
      },
      {
        baslik: 'Peyniri ekle',
        aciklama:
          'Ufaladığın tuzsuz peyniri tavaya al; peynir eridikçe tahta kaşıkla çeke çeke karıştır.',
        sureSn: 480,
      },
      {
        baslik: 'Lif lif çek',
        aciklama:
          'Karışım tavadan sıyrılıp kaşıktan uzayarak düşmeye başlayınca helva hazırdır; 1-2 dakika daha çekerek pişir.',
        sureSn: 300,
      },
      {
        baslik: 'Demlendir',
        aciklama: 'Ocağı kapat, kapağını örtüp helvayı kısa bir süre demlendir.',
        sureSn: 300,
        beklemeAdimi: true,
      },
      {
        baslik: 'Fıstıkla servis et',
        aciklama: 'Sıcak helvayı kaşıkla tabaklara al; üzerine bolca çekilmiş fıstık serperek hemen sun.',
      },
    ],
    pufNoktasi:
      'Peynir tuzsuz olmalı; tuzlu peynir kullanacaksan bir gece bol suda bekletip suyunu birkaç kez değiştir, yoksa tatlı acılaşır.',
  },
  {
    id: 'sumakli-tepsi-koftesi',
    baslik: 'Sumaklı Piyazlı Tepsi Köftesi',
    altBaslik: 'Fırında tek parça pişen baharatlı köfte; sumaklı soğan piyazı ve lavaş eşliğinde',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🥩',
    porsiyon: 5,
    hazirlikDk: 25,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 450,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 600, birim: 'g', grup: 'Köftesi için', not: 'orta yağlı' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Köftesi için', not: 'rendelenmiş, suyu sıkılmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Köftesi için', not: 'rendelenmiş' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'Köftesi için', not: 'ince kıyılmış' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Köftesi için' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı', grup: 'Köftesi için' },
      { ad: 'isot', miktar: 1, birim: 'çay kaşığı', grup: 'Köftesi için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'Köftesi için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'Köftesi için' },
      { ad: 'kırmızı soğan', miktar: 2, birim: 'adet', grup: 'Piyazı için', not: 'piyazlık doğranmış' },
      { ad: 'sumak', miktar: 1, birim: 'yemek kaşığı', grup: 'Piyazı için' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'Piyazı için', not: 'iri kıyılmış' },
      { ad: 'nar ekşisi', miktar: 1, birim: 'yemek kaşığı', grup: 'Piyazı için' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Piyazı için' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Piyazı için' },
      { ad: 'lavaş', miktar: 2, birim: 'adet', grup: 'Servis için' },
    ],
    adimlar: [
      {
        baslik: 'Köfte harcını yoğur',
        aciklama:
          'Kıymayı suyu sıkılmış soğan, sarımsak, maydanoz, salça ve baharatlarla en az 5 dakika özleşene kadar yoğur.',
        sureSn: 480,
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama: 'Harcı streçleyip buzdolabında dinlendir; soğuyan yağ köfteyi fırında toparlar.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Tepsiye yay',
        aciklama: 'Harcı yağlı kâğıt serili tepsiye bir parmak kalınlığında yay; ıslak elle yüzeyini düzle ve baklava dilimi çiz.',
        sureSn: 300,
      },
      {
        baslik: 'Fırında pişir',
        aciklama: 'Önceden ısınmış 200 derece fırında üzeri kızarıp suyunu toplayana kadar 25-30 dakika pişir.',
        sureSn: 1650,
      },
      {
        baslik: 'Sumaklı piyazı ovala',
        aciklama:
          'Kırmızı soğanı tuz ve sumakla avucunda ovalayıp acısını al; maydanoz, nar ekşisi ve zeytinyağıyla harmanla.',
        sureSn: 300,
      },
      {
        baslik: 'Lavaşla buluştur',
        aciklama: 'Lavaşları köftenin suyuna hafifçe bandırıp tepsinin kenarına diz; köfteyi çizgilerinden ayır.',
        sureSn: 120,
      },
      {
        baslik: 'Servis et',
        aciklama: 'Dilimleri lavaş üzerine al, yanına bolca sumaklı piyaz koyarak sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Soğanı sumak ve tuzla ovmak piyazın sırrıdır: keskinliği gider, sumağın ekşisi soğana işler ve köftenin yağını dengeler.',
  },
];
