import type { Tarif } from '@/types/tarif';

// Köfte, kebap ve et yemekleri — özgün Tencere tarifleri.
export const KOFTE_KEBAP: Tarif[] = [
  {
    id: 'kuru-kofte',
    baslik: 'Klasik Kuru Köfte',
    altBaslik: 'Bayat ekmekli, bol baharatlı harçtan tavada kızaran ev köftesinin temel hali',
    kategori: 'ana-yemek',
    koleksiyonlar: ['101'],
    emoji: '🧆',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 460,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 500, birim: 'g', not: 'orta yağlı dana' },
      { ad: 'bayat ekmek', miktar: 3, birim: 'dilim', not: 'kabukları alınmış, ufalanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'rendelenmiş, suyu hafif sıkılmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'yumurta', miktar: 1, birim: 'adet' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 100, birim: 'ml', not: 'kızartmak için' },
    ],
    adimlar: [
      {
        baslik: 'Harcı hazırla',
        aciklama:
          'Geniş bir kaba kıymayı al; ufalanmış bayat ekmeği, rendelenmiş soğanı, ezilmiş sarımsağı, yumurtayı, kıyılmış maydanozu ve tüm baharatları ekle.',
      },
      {
        baslik: 'İyice yoğur',
        aciklama:
          'Harcı avuç içinle bastıra bastıra 5-6 dakika yoğur. Harç kabın kenarından temiz ayrılıp macun kıvamına geldiğinde hazırdır.',
        sureSn: 360,
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama:
          'Kabın üzerini kapatıp harcı buzdolabında en az yarım saat dinlendir. Dinlenen harç şekil verirken dağılmaz, köfteler pişerken formunu korur.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Köftelere şekil ver',
        aciklama:
          'Elini hafif ıslatıp harçtan ceviz büyüklüğünde parçalar kopar. Avucunda yuvarlayıp iki yanından bastırarak klasik yassı köfte formu ver.',
      },
      {
        baslik: 'Tavada kızart',
        aciklama:
          'Yağı geniş tavada iyice kızdır. Köfteleri aralıklı diz, her yüzünü 3-4 dakika kızart. Tavayı kalabalık etme; gerekirse iki partide pişir.',
        sureSn: 480,
      },
      {
        baslik: 'Süzüp servis et',
        aciklama:
          'Pişen köfteleri kağıt havlulu tabağa alıp fazla yağını süzdür. Piyaz ya da fırın patatesle sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Soğanın suyunu hafifçe sıkmadan harca katarsan köfteler tavada gevşer. Sulu kısmı at, posayı kullan; hem lezzet kalır hem form bozulmaz.',
  },
  {
    id: 'dalyan-kofte',
    baslik: 'Dalyan Köfte',
    altBaslik: 'Haşlanmış yumurta, havuç ve bezelye dolgulu fırın köfte rulosu; sofranın yıldızı',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🥩',
    porsiyon: 6,
    hazirlikDk: 35,
    pisirmeDk: 45,
    zorluk: 'zor',
    kaloriPerPorsiyon: 510,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 600, birim: 'g', grup: 'Harcı için', not: 'orta yağlı' },
      { ad: 'galeta unu', miktar: 4, birim: 'yemek kaşığı', grup: 'Harcı için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Harcı için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Harcı için', not: 'rendelenmiş' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Harcı için', not: 'ezilmiş' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'Harcı için' },
      { ad: 'yumurta', miktar: 3, birim: 'adet', grup: 'İç dolgu için', not: 'haşlanmış, soyulmuş' },
      { ad: 'havuç', miktar: 1, birim: 'adet', grup: 'İç dolgu için', not: 'çubuk doğranıp haşlanmış' },
      { ad: 'bezelye', miktar: 100, birim: 'g', grup: 'İç dolgu için', not: 'haşlanmış' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 100, birim: 'ml', grup: 'Sosu için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'İç malzemeyi hazırla',
        aciklama:
          'Yumurtaları 10 dakika haşlayıp soy. Havuç çubuklarını ve bezelyeyi tuzlu suda 5 dakika haşlayıp süz. Tümünü bir kenarda soğumaya bırak.',
        sureSn: 600,
      },
      {
        baslik: 'Köfte harcını yoğur',
        aciklama:
          'Kıymayı galeta unu, çiğ yumurta, rendelenmiş soğan, sarımsak ve baharatlarla 6-7 dakika iyice yoğur. Harç toparlanıp parlamaya başlamalı.',
        sureSn: 400,
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama:
          'Harcın üzerini kapatıp buzdolabında yarım saat dinlendir. Bu bekleme, rulo sarılırken harcın çatlamamasını sağlar.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Harcı yağlı kağıda yay',
        aciklama:
          'Tezgaha serdiğin yağlı kağıdın üzerine harcı koy. Islak elle bastırarak yaklaşık 1 cm kalınlığında, 25x30 cm boyutunda bir dikdörtgen yap.',
      },
      {
        baslik: 'Dolguyu dizip rulo yap',
        aciklama:
          'Uzun kenara yakın bir hat boyunca haşlanmış yumurtaları uç uca diz; iki yanına havuç ve bezelyeyi yerleştir. Kağıttan destek alarak sıkıca sar, uçlarını kapat.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Ruloyu ek yeri alta gelecek şekilde fırın kabına al. Salça, zeytinyağı ve sıcak suyu çırpıp üzerine gezdir. Önceden ısıtılmış 190 derece fırında 40-45 dakika pişir.',
        sureSn: 2600,
      },
      {
        baslik: 'Dinlendirip dilimle',
        aciklama:
          'Fırından çıkan ruloyu 10 dakika dinlendir; böylece dilimler dağılmadan kesilir. Keskin bıçakla 2 cm kalınlığında dilimleyip sosuyla servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Ruloyu sarmadan önce yumurtaları harca hafifçe gömerek diz; boşluk kalırsa dilimlerde yumurta yerinden oynar. Sıkı sarılmış rulo fırında asla yarılmaz.',
  },
  {
    id: 'eksili-kofte',
    baslik: 'Ekşili Köfte',
    altBaslik: 'Pirinçli minik köfteler limonlu terbiyeyle buluşuyor; kaşık kaşık içilen köfte',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍋',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 30,
    zorluk: 'orta',
    kaloriPerPorsiyon: 420,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 400, birim: 'g', grup: 'Köfteler için' },
      { ad: 'pirinç', miktar: 3, birim: 'yemek kaşığı', grup: 'Köfteler için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Köfteler için', not: 'rendelenmiş' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'Köfteler için', not: 'ince kıyılmış' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'un', miktar: 3, birim: 'yemek kaşığı', grup: 'Köfteler için', not: 'bulamak için' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 1, birim: 'lt', grup: 'Sosu için', not: 'sıcak' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Terbiyesi için', not: 'sadece sarısı' },
      { ad: 'limon', miktar: 1, birim: 'adet', grup: 'Terbiyesi için', not: 'suyu sıkılmış' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı', grup: 'Terbiyesi için' },
    ],
    adimlar: [
      {
        baslik: 'Köfte harcını karıştır',
        aciklama:
          'Kıymayı yıkanmış pirinç, rendelenmiş soğan, maydanoz, tuz ve karabiberle karıştırıp 3-4 dakika yoğur. Pirinç taneleri harca eşit dağılmalı.',
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama:
          'Harcı buzdolabında 15 dakika dinlendir. Kısa bekleme bile minik köftelerin suda dağılma riskini belirgin azaltır.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Minik köfteleri yuvarla',
        aciklama:
          'Harçtan fındık büyüklüğünde parçalar koparıp yuvarla. Köfteleri una bulayıp fazlasını silkele; un, terbiyeli suyun hafif kıvam almasına da yardım eder.',
      },
      {
        baslik: 'Sosu kaynat, köfteleri at',
        aciklama:
          'Tencerede tereyağını erit, salçayı 1 dakika kavur, sıcak suyu ekleyip kaynat. Kaynayan sosa köfteleri tek tek bırak ve kısık ateşte 20-25 dakika pişir.',
        sureSn: 1400,
      },
      {
        baslik: 'Terbiyeyi hazırla',
        aciklama:
          'Kasede yumurta sarısını, limon suyunu ve 1 kaşık unu pürüzsüz olana dek çırp. Tencereden aldığın birkaç kepçe sıcak suyu azar azar ekleyerek ılıştır.',
      },
      {
        baslik: 'Terbiyeyi ekleyip kapat',
        aciklama:
          'Ilıştırılmış terbiyeyi karıştırarak tencereye dök, bir taşım kaynayınca ocağı kapat. Üzerine pul biber serpip sıcak servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Terbiyeyi doğrudan kaynayan tencereye dökersen yumurta çiçeklenir. Terbiye kasesine önce tencereden sıcak su alıp ısısını dengele; sonuç ipeksi bir kıvam olur.',
  },
  {
    id: 'cop-sis',
    baslik: 'Çöp Şiş',
    altBaslik: 'Yoğurtlu marinede beklemiş minik kuşbaşılar; evde döküm tavada, mangal keyfinde',
    kategori: 'ana-yemek',
    koleksiyonlar: ['sokak-lezzeti'],
    emoji: '🍢',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 12,
    zorluk: 'orta',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 600, birim: 'g', not: 'küçük küpler halinde doğranmış' },
      { ad: 'yoğurt', miktar: 2, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Marine için', not: 'rendelenip sadece suyu' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Marine için', not: 'ezilmiş' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', not: 'pişirmeye yakın eklenecek' },
      { ad: 'kırmızı soğan', miktar: 1, birim: 'adet', grup: 'Servis için', not: 'piyaz doğranmış' },
      { ad: 'sumak', miktar: 1, birim: 'çay kaşığı', grup: 'Servis için' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'Servis için' },
      { ad: 'lavaş', miktar: 2, birim: 'adet', grup: 'Servis için' },
    ],
    adimlar: [
      {
        baslik: 'Eti küçük doğra',
        aciklama:
          'Kuşbaşıyı çöp şişe uygun, yaklaşık 1,5 cm boyutunda küplere böl. Küçük parçalar hem çabuk pişer hem marineyi daha iyi çeker.',
      },
      {
        baslik: 'Marineyi karıştır',
        aciklama:
          'Kapaklı kapta yoğurdu, zeytinyağını, soğan suyunu, sarımsağı, kekiği, pul biberi ve karabiberi çırp. Etleri ekleyip sosun her parçayı kaplamasını sağla.',
      },
      {
        baslik: 'Marinede beklet',
        aciklama:
          'Kabın kapağını kapatıp eti buzdolabında en az 2 saat, ideali bir gece beklet. Yoğurtlu marine eti hem yumuşatır hem tavada kabuk tutmasını kolaylaştırır.',
        sureSn: 7200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Şişlere diz',
        aciklama:
          'Etleri suya batırılmış tahta şişlere aralarında hafif boşluk kalacak şekilde diz. Dizmeden hemen önce tuzunu serp.',
      },
      {
        baslik: 'Yüksek ateşte pişir',
        aciklama:
          'Döküm tavayı ya da ızgarayı iyice kızdır. Şişleri her yüzü 2-3 dakika olacak şekilde çevirerek toplam 10-12 dakika, dışı hafif kömürleşene dek pişir.',
        sureSn: 700,
      },
      {
        baslik: 'Sumaklı soğanla servis et',
        aciklama:
          'Kırmızı soğanı sumak, kıyılmış maydanoz ve tutam tuzla ovup hafif ısıtılmış lavaşın yanına al. Şişleri bekletmeden sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Tuzu marineye değil dizme aşamasında ete ekle; erken tuzlanan et suyunu salar ve tavada haşlanır. Kızgın tavada az sayıda şişle çalışmak kabuk tutmanın sırrıdır.',
  },
  {
    id: 'adana-kofte',
    baslik: 'Ev Usulü Adana Köfte',
    altBaslik: 'Zırh yerine yoğurma tekniğiyle; kuyruk yağlı, pul biberli uzun köfteler tavada',
    kategori: 'ana-yemek',
    koleksiyonlar: ['sokak-lezzeti'],
    emoji: '🌶️',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 15,
    zorluk: 'orta',
    kaloriPerPorsiyon: 620,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 500, birim: 'g', not: 'yağlı, tercihen iri çekilmiş' },
      { ad: 'kuyruk yağı', miktar: 100, birim: 'g', not: 'kasapta kıymayla birlikte çektirilmiş' },
      { ad: 'pul biber', miktar: 1, birim: 'yemek kaşığı', not: 'tercihen acı' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'domates', miktar: 2, birim: 'adet', grup: 'Servis için', not: 'ikiye bölünmüş' },
      { ad: 'sivri biber', miktar: 4, birim: 'adet', grup: 'Servis için' },
      { ad: 'lavaş', miktar: 2, birim: 'adet', grup: 'Servis için' },
      { ad: 'kırmızı soğan', miktar: 1, birim: 'adet', grup: 'Servis için', not: 'piyaz doğranmış' },
      { ad: 'sumak', miktar: 1, birim: 'çay kaşığı', grup: 'Servis için' },
    ],
    adimlar: [
      {
        baslik: 'Harcı soğuk tut, yoğur',
        aciklama:
          'Kıymayı ve kuyruk yağını buz gibi soğuk halde geniş kaba al. Pul biber, toz biber ve tuzu ekleyip elini ara ara soğuk suya batırarak 8-10 dakika yoğur.',
        sureSn: 540,
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama:
          'Harcı streçleyip buzdolabında 1 saat dinlendir. Soğuyan yağ harcı sıkılaştırır; köfte şişte ve tavada akmaz.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Şişe sıva ya da uzun şekil ver',
        aciklama:
          'Islak elle harçtan portakal büyüklüğünde parça al. Yassı şişin etrafına parmak uçlarınla bastırarak sıva; şiş yoksa tezgahta 15 cm uzunluğunda yassı köfteler yap.',
      },
      {
        baslik: 'Döküm tavada pişir',
        aciklama:
          'Tavayı yağsız olarak iyice kızdır. Köfteleri her yüzü 3-4 dakika olacak şekilde çevirerek pişir; kendi yağını salarak kızarır. Kenara domates ve biberleri de at.',
        sureSn: 600,
      },
      {
        baslik: 'Lavaşa sarıp dinlendir',
        aciklama:
          'Pişen köfteleri lavaşın arasına alıp 2-3 dakika dinlendir; lavaş köftenin yağını ve buharını çekerek yumuşar. Sumaklı soğan ve közlenmiş sebzelerle servis et.',
        sureSn: 180,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Zırh yoksa lezzetin anahtarı sıcaklıktır: harç, elin ısısıyla yağı çözülmeden hep soğuk çalışılmalı. Elini sık sık buzlu suya batır; köfte tavada asla dağılmaz.',
  },
  {
    id: 'misket-kofte',
    baslik: 'Domates Soslu Misket Köfte',
    altBaslik: 'Fındık büyüklüğünde minik köfteler sarımsaklı domates sosunda pişiyor; pilav dostu',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍅',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'kıyma', miktar: 400, birim: 'g', grup: 'Köfteler için' },
      { ad: 'galeta unu', miktar: 3, birim: 'yemek kaşığı', grup: 'Köfteler için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Köfteler için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Köfteler için', not: 'rendelenmiş' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'domates', miktar: 3, birim: 'adet', grup: 'Sosu için', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Sosu için', not: 'ince kıyılmış' },
      { ad: 'su', miktar: 200, birim: 'ml', grup: 'Sosu için', not: 'sıcak' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
    ],
    adimlar: [
      {
        baslik: 'Harcı yoğur',
        aciklama:
          'Kıymayı galeta unu, yumurta, rendelenmiş soğan ve baharatlarla 4-5 dakika yoğur. Harç yumuşak ama şekil alacak kıvamda olmalı.',
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama:
          'Harcı buzdolabında 20 dakika dinlendir; galeta unu nemi çekince minicik köfteler bile pişerken formunu korur.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Misketleri yuvarla',
        aciklama:
          'Islak elle harçtan fındık büyüklüğünde parçalar koparıp avucunda yuvarla. Eşit boy misketler sosun içinde aynı anda pişer.',
      },
      {
        baslik: 'Sosu pişir',
        aciklama:
          'Tencerede tereyağını erit, sarımsağı kokusu çıkana dek çevir. Salçayı ekleyip 1 dakika kavur; rendelenmiş domatesi, sıcak suyu, şekeri ve tuzu katıp 5 dakika kaynat.',
        sureSn: 420,
      },
      {
        baslik: 'Köfteleri sosta pişir',
        aciklama:
          'Misketleri kaynayan sosa tek tek bırak. Kapağı kapatıp kısık ateşte, tencereyi sallayarak karıştırmak suretiyle 15-18 dakika pişir. Kaşık kullanma; misketler dağılmasın.',
        sureSn: 1000,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ocağı kapatıp 5 dakika demlendir. Pirinç pilavı ya da patates püresi üzerine sosuyla birlikte servis et.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Sosa şeker eklemek domatesin asidini yumuşatır; miskete lezzetini veren de bu dengedir. Karıştırma işini kaşıkla değil tencereyi çevirerek yaparsan tek misket bile dağılmaz.',
  },
  {
    id: 'sebzeli-kebap-dizmesi',
    baslik: 'Fırında Sebzeli Kebap Dizmesi',
    altBaslik: 'Marine kuşbaşı, patlıcan, kabak ve biber şişlere dizilip fırında közleniyor',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🍆',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 450,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 500, birim: 'g', not: 'iri küpler halinde' },
      { ad: 'patlıcan', miktar: 1, birim: 'adet', not: 'alacalı soyulup iri küp doğranmış' },
      { ad: 'kabak', miktar: 1, birim: 'adet', not: 'kalın halkalar halinde' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'iri parçalar' },
      { ad: 'dolmalık biber', miktar: 2, birim: 'adet', not: 'dörde bölünmüş' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'dörde bölünüp katları ayrılmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'dörde bölünmüş' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Marine için', not: 'ezilmiş' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Marine için' },
    ],
    adimlar: [
      {
        baslik: 'Marineyi hazırla',
        aciklama:
          'Geniş kapta zeytinyağını, salçayı, ezilmiş sarımsağı, kekiği, pul biberi, tuzu ve karabiberi karıştır. Etleri ekleyip sosu iyice yedir.',
      },
      {
        baslik: 'Eti marinede beklet',
        aciklama:
          'Kabın üzerini kapatıp eti buzdolabında en az yarım saat beklet. Bu sırada sebzeleri doğrayıp kalan marineden bir kaşık ayırarak sebzelere bula.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Şişlere sırayla diz',
        aciklama:
          'Suya batırılmış tahta şişlere bir parça et, bir parça sebze gelecek şekilde sırayla diz. Parçaları sıkıştırmadan yerleştir ki fırın harı her yüzeye ulaşsın.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Şişleri fırın tepsisine yerleştirilmiş tel ızgaranın üzerine diz. Önceden ısıtılmış 200 derece fırında, yarısında bir kez çevirerek 30-35 dakika pişir.',
        sureSn: 2000,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Fırından çıkan şişleri folyoyla örtüp 5 dakika dinlendir; et suyunu geri toplar. Bulgur pilavı ve yoğurtla servis et.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Şişleri doğrudan tepsiye değil tepsiye oturtulmuş tel ızgaraya dizersen alttan da hava alır; sebzeler sulanmak yerine kenarlarından hafifçe közlenir.',
  },
  {
    id: 'sac-kavurma',
    baslik: 'Saç Kavurma',
    altBaslik: 'Yüksek ateşte mühürlenen kuşbaşı, biber ve domatesle döküm tavada kavruluyor',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🔥',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 500,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 500, birim: 'g', not: 'küçük doğranmış dana ya da kuzu' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ince kıyılmış' },
      { ad: 'sivri biber', miktar: 3, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Eti kuru mühürle',
        aciklama:
          'Döküm tavayı ya da sacı yağsız olarak iyice kızdır. Etleri tek kat halinde yayıp karıştırmadan 2 dakika bekle; renk alınca çevir.',
        sureSn: 240,
      },
      {
        baslik: 'Suyunu çektir',
        aciklama:
          'Et salınan suyunun içinde orta ateşte pişsin; kapak kapatma. Su tamamen çekilip et cızırdamaya başlayana dek yaklaşık 20 dakika ara ara karıştır.',
        sureSn: 1200,
      },
      {
        baslik: 'Tereyağı ve soğanı ekle',
        aciklama:
          'Tereyağını tavaya alıp eritince soğanı ve sarımsağı ekle. Soğanlar şeffaflaşıp kenarları hafif kızarana dek 4-5 dakika kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Biber ve domatesi kat',
        aciklama:
          'Sivri biberleri ekleyip 2 dakika çevir; ardından domatesleri ve tüm baharatları kat. Domatesler suyunu salıp çekene dek 8-10 dakika harlı ateşte kavur.',
        sureSn: 600,
      },
      {
        baslik: 'Sıcak servis et',
        aciklama:
          'Ocaktan almadan tuzunu kontrol et. Saç kavurma bekledikçe yağı donuklaşır; tavasıyla birlikte, yanında lavaş ve ayranla hemen servis et.',
      },
    ],
    pufNoktasi:
      'Kavurmanın lezzeti iki aşamalı pişirmede saklı: önce et kendi suyunda yumuşar, sonra su çekilince tereyağında kavrulur. Suyu çekilmeden yağ eklersen et haşlanmış kalır.',
  },
  {
    id: 'ciger-tava',
    baslik: 'Soğanlı Sumaklı Ciğer Tava',
    altBaslik: 'Sütte dinlenmiş kuzu ciğeri hafif unla çıtır kızarıyor; sumaklı soğan eşliğinde',
    kategori: 'ana-yemek',
    koleksiyonlar: ['sokak-lezzeti'],
    emoji: '🧅',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 10,
    zorluk: 'orta',
    kaloriPerPorsiyon: 460,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuzu ciğeri', miktar: 500, birim: 'g', not: 'zarı alınmış, kuşbaşı doğranmış' },
      { ad: 'süt', miktar: 200, birim: 'ml', not: 'ciğeri dinlendirmek için' },
      { ad: 'un', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 200, birim: 'ml', not: 'kızartmak için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'Servis için', not: 'piyaz doğranmış' },
      { ad: 'sumak', miktar: 1, birim: 'yemek kaşığı', grup: 'Servis için' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'Servis için', not: 'iri kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'Ciğeri sütte dinlendir',
        aciklama:
          'Doğranmış ciğeri kaseye al, üzerini örtecek kadar süt ekle ve buzdolabında yarım saat beklet. Süt, ciğerin keskin kokusunu alıp dokusunu yumuşatır.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Sumaklı soğanı hazırla',
        aciklama:
          'Piyaz doğranmış soğanı sumak ve bir tutam tuzla elinle ovarak yumuşat. Kıyılmış maydanozu ekleyip servise kadar kenarda beklet.',
      },
      {
        baslik: 'Ciğeri süzüp una bula',
        aciklama:
          'Ciğerleri süzgeçte iyice süzdür, kağıt havluyla kurula. Unu geniş kaba al; ciğerleri azar azar una bulayıp fazlasını eleyerek silkele.',
      },
      {
        baslik: 'Kızgın yağda kızart',
        aciklama:
          'Yağı derin tavada iyice kızdır. Ciğerleri küçük partiler halinde 60-90 saniye, dışı kızarıp içi pembeliğini yeni kaybedene dek kızart; kevgirle havluya al.',
        sureSn: 400,
      },
      {
        baslik: 'Baharatlayıp servis et',
        aciklama:
          'Sıcak ciğerlerin üzerine tuz, kimyon ve pul biberi kızartmadan hemen sonra serp. Sumaklı soğanla birlikte bekletmeden servis et.',
      },
    ],
    pufNoktasi:
      'Ciğerde tuzun yeri pişirme sonrasıdır; una ya da çiğ ciğere tuz katarsan su salar, un hamurlaşır ve çıtırlık gider. Kızartma süresini de kısa tut: uzun pişen ciğer kauçuklaşır.',
  },
  {
    id: 'kuzu-guvec',
    baslik: 'Sebzeli Kuzu Güveç',
    altBaslik: 'Kuzu kuşbaşı, yaz sebzeleriyle toprak kapta ağır ateşte saatlerce buluşuyor',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', 'misafir'],
    emoji: '🍲',
    porsiyon: 6,
    hazirlikDk: 25,
    pisirmeDk: 100,
    zorluk: 'orta',
    kaloriPerPorsiyon: 540,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 600, birim: 'g', not: 'kuzu' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'iri yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', not: 'bütün' },
      { ad: 'patlıcan', miktar: 1, birim: 'adet', not: 'alacalı soyulup iri küp' },
      { ad: 'kabak', miktar: 1, birim: 'adet', not: 'iri küp doğranmış' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'iri küp doğranmış' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'iri doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'biri rendelenmiş, biri dilimlenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 150, birim: 'ml', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Eti mühürle',
        aciklama:
          'Zeytinyağını tavada kızdırıp kuzu kuşbaşıyı yüksek ateşte her yüzü renk alana dek 5-6 dakika mühürle. Etin suyu içinde kalır, güveçte lokum gibi dağılır.',
        sureSn: 360,
      },
      {
        baslik: 'Güvece katmanla',
        aciklama:
          'Toprak güvecin dibine soğanları ser; üzerine mühürlenmiş eti, sonra patlıcan, kabak, patates, biber ve bütün sarımsakları katmanlar halinde yerleştir.',
      },
      {
        baslik: 'Sosunu gezdir',
        aciklama:
          'Rendelenmiş domatesi salça, baharatlar, tuz ve sıcak suyla çırpıp güvece gezdir. En üste domates dilimlerini kapak gibi diz.',
      },
      {
        baslik: 'Fırında ağır pişir',
        aciklama:
          'Güvecin kapağını kapat ya da folyoyla sıkıca ört. Soğuk fırına yerleştirip 180 dereceye ayarla ve 90 dakika pişir; son 15 dakika kapağı aç, üzeri hafif kızarsın.',
        sureSn: 5400,
      },
      {
        baslik: 'Dinlendirip kapta servis et',
        aciklama:
          'Fırından çıkan güveci 10 dakika dinlendir; kaynama durulunca lezzetler oturur. Toprak kabıyla sofraya taşı, yanına pirinç pilavı koy.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Toprak güveci daima soğuk fırına koy; ani ısı farkı kabı çatlatır. Sebzeleri iri doğramak da uzun pişirmede ezilmeden kalmalarının tek yoludur.',
  },
  {
    id: 'et-haslama',
    baslik: 'Sebzeli Et Haşlama',
    altBaslik: 'Kuzu incik köklü sebzelerle kısık ateşte demleniyor; suyu çorba kıvamında şifa',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🥕',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 120,
    zorluk: 'orta',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'kuzu incik', miktar: 800, birim: 'g', not: 'kemikli, 4 parça' },
      { ad: 'su', miktar: 2, birim: 'lt' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'bütün, soyulmuş' },
      { ad: 'sarımsak', miktar: 4, birim: 'diş', not: 'bütün' },
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'dörde bölünmüş' },
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'iri parçalar halinde' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'iri doğranmış' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', grup: 'Servis için', not: 'dilimlenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Eti soğuk suda kaynat',
        aciklama:
          'İncikleri tencereye al, soğuk suyu ekleyip orta ateşte kaynamaya bırak. Soğuk başlayan haşlama, etin lezzetini suya dengeli verir.',
      },
      {
        baslik: 'Köpüğünü al',
        aciklama:
          'Kaynamayla birlikte yüzeyde biriken köpüğü kevgirle sabırla topla. Berrak bir haşlama suyunun tek koşulu bu temizliktir.',
        sureSn: 300,
      },
      {
        baslik: 'Kısık ateşte demlendir',
        aciklama:
          'Bütün soğanı ve sarımsakları ekle, kapağı arala ve tencereyi kaynatmadan, tek tük kabarcıkla 90 dakika kısık ateşte pişir.',
        sureSn: 5400,
      },
      {
        baslik: 'Sebzeleri ekle',
        aciklama:
          'Patates, havuç ve biberleri tencereye yerleştir; tuzu ve tereyağını şimdi ekle. Sebzeler yumuşayana dek 25-30 dakika daha pişir.',
        sureSn: 1700,
      },
      {
        baslik: 'Suyuyla servis et',
        aciklama:
          'Etleri ve sebzeleri derin tabaklara paylaştır, sıcak suyundan bolca gezdir. Karabiber serpip limon dilimiyle servis et.',
      },
    ],
    pufNoktasi:
      'Tuz en başta değil sebzelerle birlikte girmeli; erken tuzlanan haşlama eti kasar ve geç yumuşatır. Suyu hiç harlı kaynatma; berraklık da yumuşaklık da kısık ateşin işidir.',
  },
  {
    id: 'yogurtlu-kofte-kasesi',
    baslik: 'Sarımsaklı Yoğurtlu Köfte Kasesi',
    altBaslik: 'Tereyağlı ekmek küpleri, sarımsaklı yoğurt ve mini köftelerle doyurucu tek kase',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🥣',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 560,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 400, birim: 'g', grup: 'Köfteler için' },
      { ad: 'galeta unu', miktar: 2, birim: 'yemek kaşığı', grup: 'Köfteler için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Köfteler için' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Köfteler için' },
      { ad: 'süzme yoğurt', miktar: 300, birim: 'g', grup: 'Yoğurt sosu için', not: 'oda sıcaklığında' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Yoğurt sosu için', not: 'ezilmiş' },
      { ad: 'ekmek', miktar: 4, birim: 'dilim', grup: 'Taban için', not: 'küp doğranmış' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Üstü için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Üstü için' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı', grup: 'Üstü için' },
    ],
    adimlar: [
      {
        baslik: 'Harcı yoğur ve dinlendir',
        aciklama:
          'Kıymayı galeta unu, yumurta ve baharatlarla 4-5 dakika yoğur; buzdolabında 20 dakika dinlendir. Bu arada yoğurdu ezilmiş sarımsak ve tutam tuzla çırpıp oda sıcaklığında beklet.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Mini köfteleri pişir',
        aciklama:
          'Harçtan ceviz yarısı kadar parçalar koparıp hafif yassı mini köfteler yap. Az yağla kızdırdığın tavada her yüzünü 3 dakika kızart.',
        sureSn: 420,
      },
      {
        baslik: 'Ekmekleri kızart',
        aciklama:
          'Aynı tavaya tereyağının 1 kaşığını ekle; küp ekmekleri köftenin kaldığı yağda altın rengi alana dek çevirerek kızart.',
        sureSn: 240,
      },
      {
        baslik: 'Kaseyi kur',
        aciklama:
          'Servis kaselerinin dibine kızarmış ekmekleri paylaştır, üzerine sarımsaklı yoğurdu yay ve mini köfteleri sıcak sıcak yerleştir.',
      },
      {
        baslik: 'Kızgın tereyağını gezdir',
        aciklama:
          'Kalan tereyağını küçük tavada köpürene dek eritip pul biber ve kuru naneyi ekle; cızırdayan yağı kaselerin üzerine gezdirip hemen servis et.',
        sureSn: 90,
      },
    ],
    pufNoktasi:
      'Yoğurdu buzdolabından çıkar çıkmaz kullanma; oda sıcaklığına gelmesi sıcak köfteyle buluşunca kesilmesini önler ve kasenin ısısını dengede tutar.',
  },
  {
    id: 'tepsi-koftesi',
    baslik: 'Biberli Soğanlı Tepsi Köftesi',
    altBaslik: 'Fırın tepsisinde soğan halkaları ve biberlerle salçalı sosta pişen pratik köfte',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍽️',
    porsiyon: 5,
    hazirlikDk: 25,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 500, birim: 'g', grup: 'Köfteler için' },
      { ad: 'bayat ekmek', miktar: 2, birim: 'dilim', grup: 'Köfteler için', not: 'ufalanmış' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Köfteler için' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Köfteler için', not: 'ezilmiş' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'Köfteler için', not: 'ince kıyılmış' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'Tepsi için', not: 'kalın halka doğranmış' },
      { ad: 'sivri biber', miktar: 4, birim: 'adet', grup: 'Tepsi için', not: 'ikiye bölünmüş' },
      { ad: 'domates', miktar: 2, birim: 'adet', grup: 'Tepsi için', not: 'dilimlenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 150, birim: 'ml', grup: 'Sosu için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Harcı yoğur',
        aciklama:
          'Kıymayı ufalanmış bayat ekmek, yumurta, sarımsak, maydanoz ve baharatlarla 5 dakika yoğur. Harç yumuşak ve homojen olmalı.',
        sureSn: 300,
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama:
          'Üzerini kapatıp harcı buzdolabında 20 dakika dinlendir; fırında köftelerin büzülmeden pişmesini sağlar.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Tepsiye diz',
        aciklama:
          'Harçtan iri ceviz büyüklüğünde yassı köfteler yap. Yağlanmış tepsiye köfteleri diz; aralarına soğan halkalarını, biberleri ve domates dilimlerini yerleştir.',
      },
      {
        baslik: 'Sosu gezdirip fırınla',
        aciklama:
          'Salçayı zeytinyağı ve sıcak suyla çırpıp tepsiye eşit gezdir. Önceden ısıtılmış 200 derece fırında, üzeri kızarana dek 30-35 dakika pişir.',
        sureSn: 2000,
      },
      {
        baslik: 'Demlendirip servis et',
        aciklama:
          'Tepsiyi fırından çıkarıp folyoyla örterek 5 dakika demlendir; sos köftelere iyice çekilir. Yanına pirinç pilavı ya da bol ekmekle servis et.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Soğan halkalarını köftelerin arasına dik değil yatık yerleştir; sosun içinde kalan soğan tatlanarak sosa karamel derinliği verir, üstte kalan ise yanar.',
  },
  {
    id: 'dana-rosto',
    baslik: 'Patates Püreli Dana Rosto',
    altBaslik: 'Bütün mühürlenen dana bonfile kısık ateşte sosunda pişip ipeksi püreyle servis ediliyor',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🥔',
    porsiyon: 6,
    hazirlikDk: 30,
    pisirmeDk: 90,
    zorluk: 'orta',
    kaloriPerPorsiyon: 590,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'dana bonfile', miktar: 800, birim: 'g', grup: 'Rosto için', not: 'bütün, oda sıcaklığında' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Rosto için' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Rosto için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Rosto için', not: 'yemeklik doğranmış' },
      { ad: 'havuç', miktar: 1, birim: 'adet', grup: 'Rosto için', not: 'halka doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', grup: 'Rosto için', not: 'bütün' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Rosto için' },
      { ad: 'su', miktar: 400, birim: 'ml', grup: 'Rosto için', not: 'sıcak' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı', grup: 'Rosto için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'Rosto için' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'Rosto için' },
      { ad: 'patates', miktar: 4, birim: 'adet', grup: 'Püre için', not: 'soyulup iri doğranmış' },
      { ad: 'süt', miktar: 150, birim: 'ml', grup: 'Püre için', not: 'sıcak' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Püre için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Püre için' },
    ],
    adimlar: [
      {
        baslik: 'Eti bağla ve mühürle',
        aciklama:
          'Bonfileyi mutfak ipiyle aralıklı bağlayıp tuz ve karabiberle ov. Tencerede yağı kızdır; etin her yüzünü 2-3 dakika, koyu kabuk tutana dek mühürle.',
        sureSn: 600,
      },
      {
        baslik: 'Sos tabanını kavur',
        aciklama:
          'Eti tabağa al. Aynı tencereye tereyağını, soğanı, havucu ve sarımsağı ekleyip 5 dakika kavur; salçayı katıp 1 dakika daha çevir.',
        sureSn: 360,
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Eti sebzelerin üzerine yerleştir, sıcak suyu ve kekiği ekle. Kapağı kapatıp kısık ateşte, yarısında bir kez çevirerek 75-80 dakika pişir.',
        sureSn: 4600,
      },
      {
        baslik: 'Püreyi hazırla',
        aciklama:
          'Patatesleri tuzlu suda yumuşayana dek haşlayıp süz. Sıcakken ez; sıcak sütü ve tereyağını ekleyip ipeksi kıvam alana dek çırp, tuzuyla tatlandır.',
        sureSn: 1500,
      },
      {
        baslik: 'Sosunu süz ve yoğunlaştır',
        aciklama:
          'Pişen eti kesme tahtasına al. Tenceredeki sosu tel süzgeçten geçirip sebzeleri kaşıkla ezerek suyuna kat; sosu harlı ateşte 5 dakika kaynatıp koyulaştır.',
        sureSn: 300,
      },
      {
        baslik: 'Dinlendir, dilimle, servis et',
        aciklama:
          'Eti folyo altında 10 dakika dinlendir; ipini alıp keskin bıçakla 1 cm dilimle. Tabaklara püreyi yay, dilimleri yasla ve sıcak sostan gezdir.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Rostoyu pişer pişmez dilimleme; dinlenmeden kesilen et tüm suyunu tahtaya bırakır. On dakikalık folyo dinlenmesi dilimlerin pembe ve sulu kalmasının garantisidir.',
  },
];
