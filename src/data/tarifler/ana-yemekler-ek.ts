import type { Tarif } from '@/types/tarif';

// Ana yemekler — ek paket: klasik etli ve tavuklu ev yemekleri.
// Tüm tarifler özgün metinlerle yazılmıştır; ölçüler 4 porsiyon esas alınarak dengelenmiştir.
export const ANA_YEMEKLER_EK: Tarif[] = [
  {
    id: 'tas-kebabi',
    baslik: 'Tas Kebabı',
    altBaslik: 'Kısık ateşte ağır ağır pişen, salçalı suyuyla lokum gibi kuşbaşı et',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🥘',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 90,
    zorluk: 'orta',
    kaloriPerPorsiyon: 520,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 600, birim: 'g', not: 'iri küpler halinde' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'patates', miktar: 3, birim: 'adet', not: 'iri küp doğranmış' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'kalın halkalar' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Eti mühürle',
        aciklama:
          'Tencerede tereyağını erit, etleri yüksek ateşte ekle. Et suyunu salıp geri çekene, taneler her yüzünden renk alana kadar karıştırarak kavur.',
        sureSn: 600,
      },
      {
        baslik: 'Soğanı ve sarımsağı kavur',
        aciklama:
          'Ateşi orta kısığa al; doğranmış soğanı etin üzerine ekle. Soğanlar pembeleşince ezilmiş sarımsağı kat, bir iki dakika daha çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Salçayı kokusu çıkana dek pişir',
        aciklama:
          'Salçayı tencerenin ortasına al, yağla buluşup kokusu yükselene kadar bir dakika kavur; sonra etle harmanla.',
        sureSn: 60,
      },
      {
        baslik: 'Sıcak suyla kısık ateşte pişir',
        aciklama:
          'Sıcak suyu ekle, tuz ve karabiberi serp. Kapağı kapat, en kısık ateşte et yumuşayana kadar yaklaşık bir saat pişir. Ara sıra kontrol et, su azalırsa sıcak su ilave et.',
        sureSn: 3600,
      },
      {
        baslik: 'Patates ve havucu ekle',
        aciklama:
          'Küp patates ile havucu tencereye yerleştir, kekiği serp. Kapağı kapatıp sebzeler yumuşayana kadar 20-25 dakika daha pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ocaktan aldıktan sonra kapağı açmadan 10 dakika dinlendir; suyu toparlanır. Yanında sade pilavla sıcak servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Etin lokum kıvamı tutması tamamen ateşin kısıklığına bağlı: kaynama, yüzeyde tek tük baloncuk görülecek kadar hafif olmalı. Harlı ateş eti kasar.',
  },
  {
    id: 'orman-kebabi',
    baslik: 'Orman Kebabı',
    altBaslik: 'Bezelye, havuç ve patatesle zenginleşen sulu kuşbaşı; tam bir kış klasiği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🍲',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 80,
    zorluk: 'orta',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 600, birim: 'g' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'iri küp' },
      { ad: 'bezelye', miktar: 1.5, birim: 'su bardağı', not: 'taze ya da dondurulmuş' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Eti suyunu çekene dek kavur',
        aciklama:
          'Tereyağını tencerede erit, kuşbaşıları ekle. Et önce suyunu bırakır; o su tamamen çekilip taneler kızarmaya başlayana kadar orta ateşte kavur.',
        sureSn: 720,
      },
      {
        baslik: 'Soğanı ekleyip yumuşat',
        aciklama: 'Soğanı etin yanına al, şeffaflaşana kadar birlikte çevir.',
        sureSn: 240,
      },
      {
        baslik: 'Salça ve domatesi pişir',
        aciklama:
          'Salçayı kavur, rendelenmiş domatesi ekle; domates suyunu çekene kadar birkaç dakika pişir.',
        sureSn: 240,
      },
      {
        baslik: 'Eti suyla yumuşat',
        aciklama:
          'Sıcak suyu ekle, kapağı kapat ve kısık ateşte et çatalla dağılacak yumuşaklığa gelene kadar 45-50 dakika pişir.',
        sureSn: 2700,
      },
      {
        baslik: 'Sebzeleri sırayla kat',
        aciklama:
          'Önce havuçları ekleyip 10 dakika pişir; ardından patates ve bezelyeyi, tuzu ve karabiberi kat. Sebzeler yumuşayana kadar 20 dakika daha kısık ateşte tut.',
        sureSn: 1800,
      },
      {
        baslik: 'Kapalı dinlendir ve servis et',
        aciklama:
          'Ocağı kapatıp 5-10 dakika demlenmeye bırak. Suyuyla birlikte derin tabaklarda servis et.',
        sureSn: 480,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Sebzeleri aynı anda değil kademeli eklemek hepsinin aynı dakikada diri-yumuşak olmasını sağlar; bezelye en son girmeli ki rengi solmasın.',
  },
  {
    id: 'et-sote',
    baslik: 'Et Sote',
    altBaslik: 'Bol biberli, domatesli ve kekik kokulu; tavada hızlıca toparlanan akşam kurtarıcısı',
    kategori: 'ana-yemek',
    koleksiyonlar: ['101'],
    emoji: '🍳',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 500, birim: 'g', not: 'küçük küpler halinde' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'sivri biber', miktar: 3, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'şerit doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Tavayı iyice kızdır',
        aciklama:
          'Geniş bir tavada ayçiçek yağı ile tereyağını birlikte kızdır. Yağ dalgalanmaya başlamadan et eklenmemeli; soğuk tavada et haşlanır.',
        sureSn: 120,
      },
      {
        baslik: 'Eti yüksek ateşte mühürle',
        aciklama:
          'Etleri tek katman olacak şekilde tavaya yay. İlk iki dakika karıştırmadan bekle, sonra çevirerek tüm yüzeyleri kızart.',
        sureSn: 360,
      },
      {
        baslik: 'Kısık ateşte suyunu çektir',
        aciklama:
          'Ateşi kıs, kapağı kapat ve etin kendi suyunda yumuşamasını bekle. Su tamamen çekilene kadar ara ara karıştır.',
        sureSn: 900,
      },
      {
        baslik: 'Soğan ve biberleri ekle',
        aciklama:
          'Soğan ve biberleri etin üzerine al, orta ateşte biberler hafif yumuşayıp kokusu çıkana kadar sotele.',
        sureSn: 300,
      },
      {
        baslik: 'Domatesi kat, harmanla',
        aciklama:
          'Küp domatesi, tuzu ve karabiberi ekle. Domatesler salıp hafif çekene kadar pişir; sote sulu değil şuruplu görünmeli.',
        sureSn: 420,
      },
      {
        baslik: 'Kekikle tamamla',
        aciklama: 'Ocağı kapatmadan hemen önce kekiği serp, bir kez harmanla ve sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Kekik ısıyla uzun temas edince acılaşır; en sonda eklemek hem kokuyu hem rengi korur. Et suyunu çektirmeden sebze eklersen sote yemeğe döner.',
  },
  {
    id: 'ali-nazik',
    baslik: 'Ali Nazik',
    altBaslik: 'Közlenmiş patlıcanlı yoğurt yatağında tereyağlı kıyma; Gaziantep usulü şölen',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🍆',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 40,
    zorluk: 'zor',
    kaloriPerPorsiyon: 540,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'patlıcan', miktar: 4, birim: 'adet' },
      { ad: 'süzme yoğurt', miktar: 300, birim: 'g', grup: 'Yoğurtlu taban için' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Yoğurtlu taban için', not: 'ezilmiş' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Yoğurtlu taban için' },
      { ad: 'kıyma', miktar: 400, birim: 'g', grup: 'Üstü için', not: 'orta yağlı' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Üstü için' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Üstü için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Üstü için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Üstü için' },
    ],
    adimlar: [
      {
        baslik: 'Patlıcanları közle',
        aciklama:
          'Patlıcanları çatalla birkaç yerinden delip ocak alevinde ya da 220 derece fırında kabukları kömürleşene, içleri tamamen çökene kadar közle.',
        sureSn: 1500,
      },
      {
        baslik: 'Közleri soyup süz',
        aciklama:
          'Közlenen patlıcanları soy, saplarını al ve bir süzgeçte 10 dakika bekleterek acı suyunu bırakmasını sağla.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Patlıcanı ılıkken çek',
        aciklama:
          'Süzülen patlıcanları bıçakla incecik kıy. Ilık patlıcanı geniş tavada bir kaşık tereyağıyla iki dakika çevirerek fazla nemini uçur.',
        sureSn: 120,
      },
      {
        baslik: 'Yoğurtlu tabanı hazırla',
        aciklama:
          'Süzme yoğurdu ezilmiş sarımsak ve tuzla çırp, ılık patlıcanla harmanla. Karışım soğuk değil oda sıcaklığında olmalı; servis tabağına yay.',
      },
      {
        baslik: 'Kıymayı susuz kavur',
        aciklama:
          'Ayrı tavada kıymayı yağsız olarak kendi suyunu salıp çekene kadar kavur; sonra iki kaşık tereyağı ve biber salçasını ekleyip taneler parlayana dek pişir. Karabiberi kat.',
        sureSn: 720,
      },
      {
        baslik: 'Pul biberli yağla birleştir',
        aciklama:
          'Küçük bir tavada kalan tereyağını köpürt, pul biberi ekleyip ocaktan al. Kıymayı yoğurtlu patlıcanın üzerine yay, kızgın biberli yağı gezdirerek hemen servis et.',
        sureSn: 60,
      },
    ],
    pufNoktasi:
      'Patlıcanın közlendikten sonra süzülmesi tarifin gizli kahramanı: suyu alınmayan patlıcan yoğurdu sulandırır ve közün is kokusunu bastırır.',
  },
  {
    id: 'kadinbudu-kofte',
    baslik: 'Kadınbudu Köfte',
    altBaslik: 'Pirinçli iç harcı yumurtaya bulanıp kızaran, dışı çıtır içi yumuşak saray köftesi',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli', 'misafir'],
    emoji: '🍖',
    porsiyon: 4,
    hazirlikDk: 35,
    pisirmeDk: 30,
    zorluk: 'zor',
    kaloriPerPorsiyon: 560,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 500, birim: 'g', grup: 'Harç için' },
      { ad: 'pirinç', miktar: 0.5, birim: 'su bardağı', grup: 'Harç için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Harç için', not: 'rendelenmiş' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'Harç için', not: 'ince kıyılmış' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Harç için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Harç için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Harç için' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', grup: 'Kızartmak için', not: 'çırpılmış' },
      { ad: 'un', miktar: 0.5, birim: 'su bardağı', grup: 'Kızartmak için' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'su bardağı', grup: 'Kızartmak için' },
    ],
    adimlar: [
      {
        baslik: 'Pirinci haşla',
        aciklama:
          'Yıkanmış pirinci bir buçuk su bardağı kaynar suda diri kalacak şekilde 10 dakika haşla, süzüp soğumaya bırak.',
        sureSn: 600,
      },
      {
        baslik: 'Kıymanın yarısını kavur',
        aciklama:
          'Kıymanın yarısını rendelenmiş soğanla birlikte yağsız tavada suyunu çekene kadar kavur; kavrulan kıyma köfteye derinlik verir. Soğumaya al.',
        sureSn: 480,
      },
      {
        baslik: 'Harcı yoğur',
        aciklama:
          'Çiğ kıyma, kavrulmuş kıyma, haşlanmış pirinç, maydanoz, bir yumurta, tuz ve karabiberi derin kapta harç toparlanana kadar yoğur.',
      },
      {
        baslik: 'Köftelere şekil verip dinlendir',
        aciklama:
          'Harçtan yumurta büyüklüğünde parçalar al, oval köfteler yap. Köfteleri tepside buzdolabında 15 dakika dinlendir; soğuyan harç kızartmada dağılmaz.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Una ve yumurtaya bula',
        aciklama:
          'Her köfteyi önce una, ardından çırpılmış yumurtaya bula. Sıralamayı bozma; un yumurtanın tutunmasını sağlar.',
      },
      {
        baslik: 'Kızgın yağda kızart',
        aciklama:
          'Ayçiçek yağını orta-yüksek ateşte kızdır. Köfteleri azar azar yağa bırak, her yüzü altın sarısı olana kadar çevirerek kızart; kağıt havluya al.',
        sureSn: 900,
      },
    ],
    pufNoktasi:
      'Yumurtalı kaplamanın kabarık ve pürüzsüz olması için yağ tam kıvamında kızgın olmalı: bir damla yumurta yağa değince hemen yüzüyorsa köfteler girebilir.',
  },
  {
    id: 'terbiyeli-sulu-kofte',
    baslik: 'Terbiyeli Sulu Köfte',
    altBaslik: 'Limonlu yumurta terbiyesiyle kadife kıvamında, kaşık kaşık içilen köfte yemeği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['101', 'ramazan'],
    emoji: '🍜',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 420,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 400, birim: 'g', grup: 'Köfteler için' },
      { ad: 'pirinç', miktar: 2, birim: 'yemek kaşığı', grup: 'Köfteler için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Köfteler için', not: 'rendelenmiş, suyu sıkılmış' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Köfteler için' },
      { ad: 'un', miktar: 0.5, birim: 'su bardağı', grup: 'Köfteler için', not: 'bulamak için' },
      { ad: 'patates', miktar: 1, birim: 'adet', grup: 'Suyu için', not: 'küp doğranmış' },
      { ad: 'havuç', miktar: 1, birim: 'adet', grup: 'Suyu için', not: 'küp doğranmış' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Suyu için' },
      { ad: 'su', miktar: 5, birim: 'su bardağı', grup: 'Suyu için', not: 'sıcak' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Terbiye için' },
      { ad: 'limon', miktar: 1, birim: 'adet', grup: 'Terbiye için', not: 'suyu sıkılmış' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı', grup: 'Terbiye için' },
    ],
    adimlar: [
      {
        baslik: 'Köfte harcını yoğur',
        aciklama:
          'Kıymayı pirinç, rendelenmiş soğan, tuz ve karabiberle iyice yoğur. Fındıktan biraz büyük minik köfteler yuvarla ve hepsini hafifçe una bula.',
      },
      {
        baslik: 'Sebzeli suyu kaynat',
        aciklama:
          'Tencerede tereyağını erit, patates ve havucu iki dakika çevir. Sıcak suyu ekleyip kaynamaya bırak.',
        sureSn: 300,
      },
      {
        baslik: 'Köfteleri suya bırak',
        aciklama:
          'Kaynayan suya unlu köfteleri teker teker bırak. İlk dakikalarda karıştırma; köfteler kendini toparladıktan sonra nazikçe çevirebilirsin. Kısık ateşte pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Terbiyeyi hazırla',
        aciklama:
          'Kasede yumurta, limon suyu ve bir kaşık unu pürüzsüz olana kadar çırp.',
      },
      {
        baslik: 'Terbiyeyi ılıştırarak ekle',
        aciklama:
          'Tencerenin sıcak suyundan bir kepçe alıp çırparak terbiyeye karıştır; bir kepçe daha ekleyip ılıştır. Ateşi kısıp terbiyeyi tencereye ince akıtarak sürekli karıştır.',
        sureSn: 120,
      },
      {
        baslik: 'Kaynatmadan tamamla',
        aciklama:
          'Terbiye girdikten sonra yemeği kaynatmadan iki üç dakika daha ocakta tut, kıvam alınca kapat. Dilersen üzerine kuru naneli tereyağı gezdirerek servis et.',
        sureSn: 180,
      },
    ],
    pufNoktasi:
      'Terbiye doğrudan sıcak tencereye dökülürse yumurta çiçeklenir; kepçe kepçe ılıştırmak kadifemsi kıvamın tek güvencesidir.',
  },
  {
    id: 'kislik-sebzeli-guvec',
    baslik: 'Kışlık Sebzeli Güveç',
    altBaslik: 'Pırasa, kereviz ve kök sebzelerle fırında ağır pişen kuşbaşılı kış güveci',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🫕',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 100,
    zorluk: 'orta',
    kaloriPerPorsiyon: 450,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 500, birim: 'g' },
      { ad: 'pırasa', miktar: 1, birim: 'adet', not: 'kalın halkalar' },
      { ad: 'kereviz', miktar: 0.5, birim: 'adet', not: 'iri küp doğranmış' },
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'kalın halkalar' },
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'iri küp' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Eti soteleyip renklendir',
        aciklama:
          'Zeytinyağının iki kaşığını tencerede kızdır, etleri yüksek ateşte her yanı renk alana kadar kavur.',
        sureSn: 600,
      },
      {
        baslik: 'Soğan ve salçayı ekle',
        aciklama:
          'Soğanı ete kat, yumuşayınca salçayı ekleyip kokusu çıkana kadar bir dakika çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Güveç kabına yerleştir',
        aciklama:
          'Eti güveç kabına ya da fırın kabına aktar. Pırasa, kereviz, havuç, patates ve bütün sarımsak dişlerini aralarına yerleştir; kalan zeytinyağını gezdir.',
      },
      {
        baslik: 'Baharatla ve suyu ekle',
        aciklama:
          'Tuz, karabiber ve kekiği serp, sıcak suyu kenardan dök. Kapağını ya da folyosunu kapat.',
      },
      {
        baslik: 'Fırında ağır ağır pişir',
        aciklama:
          '180 derece fırında 80 dakika kapalı pişir. Son 15 dakika kapağı açarak sebzelerin üzerinin hafif kızarmasını sağla.',
        sureSn: 4800,
      },
      {
        baslik: 'Dinlendirerek servis et',
        aciklama:
          'Fırından çıkan güveci 10 dakika dinlendir; kaynayan suyu durulunca sebzeler dağılmadan servis edilir.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Kereviz güvecin kokusunu belirler; az koyup iri doğramak keskinliği dengeleyip yemeğe derin bir kış aroması verir.',
  },
  {
    id: 'kagit-kebabi',
    baslik: 'Kağıt Kebabı',
    altBaslik: 'Yağlı kağıda sarılıp fırında kendi buharında pişen sebzeli kuşbaşı bohçası',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '📜',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 60,
    zorluk: 'orta',
    kaloriPerPorsiyon: 490,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 600, birim: 'g', not: 'küçük doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'ince küp doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Eti harçla buluştur',
        aciklama:
          'Derin kapta eti soğan, biber, domates, patates, sarımsak, zeytinyağı, salça ve tüm baharatlarla iyice harmanla; salça her taneyi kaplasın.',
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama:
          'Karışımın üzerini kapatıp buzdolabında en az 20 dakika marine et; et baharatı çeker, sebzeler suyunu dengeler.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Bohçaları hazırla',
        aciklama:
          'İki kat yağlı kağıdı fırın kabına taşacak şekilde ser. Harcı ortasına yığ, üzerine tereyağı parçalarını dağıt.',
      },
      {
        baslik: 'Kağıdı sıkıca kapat',
        aciklama:
          'Kağıdın kenarlarını bohça gibi toplayıp kıvırarak kapat; buhar kaçmamalı. İstersen fırın poşeti kullanıp ağzını bağla ve poşete iki küçük delik aç.',
      },
      {
        baslik: 'Fırında buharda pişir',
        aciklama:
          'Önceden ısıtılmış 190 derece fırında 50-55 dakika pişir. Bohça içindeki buhar eti kendi suyuyla yumuşatır.',
        sureSn: 3300,
      },
      {
        baslik: 'Bohçayı sofrada aç',
        aciklama:
          'Kebabı bohçasıyla servis tabağına al; kağıdı sofrada açarak buram buram buharıyla lavaş ya da pilav eşliğinde sun.',
      },
    ],
    pufNoktasi:
      'Bohçanın sırrı kapalı kalması: kağıt gevşek kapatılırsa buhar kaçar ve et kurur. Kenarları iki kez kıvırıp uçlarını alta almak en garantili yöntem.',
  },
  {
    id: 'patlican-musakka',
    baslik: 'Patlıcan Musakka',
    altBaslik: 'Kızarmış patlıcan dilimleri üzerine kıymalı domates soslu, fırın tamamlamalı klasik',
    kategori: 'ana-yemek',
    koleksiyonlar: ['101'],
    emoji: '🍆',
    porsiyon: 4,
    hazirlikDk: 35,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 460,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'patlıcan', miktar: 4, birim: 'adet' },
      { ad: 'kıyma', miktar: 400, birim: 'g' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'doğranmış' },
      { ad: 'domates', miktar: 3, birim: 'adet', not: '2 tanesi rendelenmiş, 1 tanesi dilim' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'su bardağı', not: 'kızartmak için' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Patlıcanları tuzlu suda beklet',
        aciklama:
          'Patlıcanları alacalı soyup parmak kalınlığında halkalar kes. Tuzlu suda 15 dakika bekleterek acısını al, sonra kurula.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Patlıcanları kızart',
        aciklama:
          'Kızgın ayçiçek yağında dilimleri iki yüzü de hafif kızarana kadar kızart; kağıt havluya alıp fazla yağını süzdür.',
        sureSn: 900,
      },
      {
        baslik: 'Kıymalı sosu pişir',
        aciklama:
          'Bir kaşık kızartma yağıyla kıymayı suyunu çekene kadar kavur. Soğan, sarımsak ve biberi ekleyip yumuşat; salça ve rendelenmiş domatesi kat, beş dakika pişir. Tuz ve baharatları ekle.',
        sureSn: 900,
      },
      {
        baslik: 'Katları diz',
        aciklama:
          'Fırın kabına patlıcan dilimlerini tek kat ser, kıymalı sosu üzerine yay. Domates dilimlerini en üste yerleştir.',
      },
      {
        baslik: 'Fırında birleştir',
        aciklama:
          'Sıcak suyu kenardan ekle. 190 derece fırında sos kaynayıp domatesler kızarana kadar 25 dakika pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Fırından çıkınca 10 dakika dinlendir; katlar oturunca pilav eşliğinde servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Kızaran patlıcanı iyice süzdürmek musakkayı yağ gölünden kurtarır; hafif versiyon isteyenler dilimleri fırında da kızartabilir, tat kaybı en aza iner.',
  },
  {
    id: 'kiymali-bezelye',
    baslik: 'Kıymalı Bezelye',
    altBaslik: 'Havuçlu, salçalı ve bol suyuyla ekmek banarak yenen en tatlı ev yemeği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🫛',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 380,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 300, birim: 'g' },
      { ad: 'bezelye', miktar: 500, birim: 'g', not: 'taze ya da dondurulmuş' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 2.5, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Kıymayı kavur',
        aciklama:
          'Tencerede yağı kızdır, kıymayı ekleyip suyunu salıp çekene kadar orta ateşte kavur.',
        sureSn: 480,
      },
      {
        baslik: 'Soğanı yumuşat',
        aciklama: 'Soğanı kıymaya kat, şeffaflaşana kadar birlikte çevir.',
        sureSn: 240,
      },
      {
        baslik: 'Salçayı ve sebzeleri ekle',
        aciklama:
          'Salçayı kavur; havuç, patates ve bezelyeyi ekleyip iki dakika harmanla.',
        sureSn: 180,
      },
      {
        baslik: 'Suyla kısık ateşte pişir',
        aciklama:
          'Sıcak suyu, tuzu, karabiberi ve bir çay kaşığı şekeri ekle. Kapağı kapat, bezelyeler ve patatesler yumuşayana kadar kısık ateşte pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Demlenince servis et',
        aciklama:
          'Ocağı kapatıp 5 dakika dinlendir. Yanına pilav ya da cacıkla sıcak servis et.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Bir çay kaşığı şeker bezelyenin doğal tatlılığını öne çıkarır ve salçanın ekşisini yumuşatır; anne yemeği tadının görünmez dokunuşu budur.',
  },
  {
    id: 'kiymali-ispanak',
    baslik: 'Kıymalı Ispanak',
    altBaslik: 'Pirinçli, kıymalı klasik ıspanak yemeği; sarımsaklı yoğurduyla efsane ikili',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🥬',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 360,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'ıspanak', miktar: 750, birim: 'g', not: 'ayıklanıp yıkanmış' },
      { ad: 'kıyma', miktar: 250, birim: 'g' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'pirinç', miktar: 2, birim: 'yemek kaşığı', not: 'yıkanmış' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'süzme yoğurt', miktar: 200, birim: 'g', grup: 'Servis için' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş', grup: 'Servis için', not: 'ezilmiş' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Servis için' },
    ],
    adimlar: [
      {
        baslik: 'Kıymayı soğanla kavur',
        aciklama:
          'Zeytinyağını tencerede kızdır, kıymayı suyunu çekene kadar kavur; soğanı ekleyip pembeleşene kadar çevir.',
        sureSn: 600,
      },
      {
        baslik: 'Salçayı aç',
        aciklama: 'Salçayı ekleyip bir dakika kavur, kokusu çıkınca karıştır.',
        sureSn: 60,
      },
      {
        baslik: 'Ispanağı kat',
        aciklama:
          'Iri doğranmış ıspanağı tencereye kademeli ekle; her parti çöktükçe yenisini kat. Ispanak kendi suyunu bırakacak.',
        sureSn: 300,
      },
      {
        baslik: 'Pirinçle birlikte pişir',
        aciklama:
          'Pirinci, tuzu, karabiberi ve sıcak suyu ekle. Kapağı kapatıp pirinçler yumuşayana kadar kısık ateşte pişir.',
        sureSn: 1200,
      },
      {
        baslik: 'Sarımsaklı yoğurtla sun',
        aciklama:
          'Süzme yoğurdu ezilmiş sarımsakla çırp. Yemeği kaselere al, yanına ya da üzerine yoğurdu koy, pul biber serperek servis et.',
      },
    ],
    pufNoktasi:
      'Ispanağı haşlayıp süzmek yerine doğrudan tencerede söndürmek hem vitamini hem koyu yeşil rengi yemeğin içinde tutar.',
  },
  {
    id: 'firinda-kofte-patates',
    baslik: 'Fırında Köfte Patates',
    altBaslik: 'Domates soslu tepside yan yana dizilen köfte ve patates; tek tepsiyle tam sofra',
    kategori: 'ana-yemek',
    koleksiyonlar: ['101'],
    emoji: '🧆',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 45,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 550,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 500, birim: 'g', grup: 'Köfte için', not: 'orta yağlı' },
      { ad: 'bayat ekmek', miktar: 2, birim: 'dilim', grup: 'Köfte için', not: 'rendelenmiş' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Köfte için', not: 'rendelenmiş' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Köfte için', not: 'ezilmiş' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Köfte için' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'patates', miktar: 4, birim: 'adet', grup: 'Tepsi için', not: 'elma dilimi' },
      { ad: 'sivri biber', miktar: 3, birim: 'adet', grup: 'Tepsi için' },
      { ad: 'domates', miktar: 2, birim: 'adet', grup: 'Tepsi için', not: 'dilimlenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sos için' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Sos için' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Sos için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Köfte harcını yoğur',
        aciklama:
          'Kıymayı rendelenmiş bayat ekmek, soğan, sarımsak, yumurta ve baharatlarla en az beş dakika yoğur; harç yapışkan bir bütün olmalı.',
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama:
          'Üzeri kapalı harcı buzdolabında 15 dakika dinlendir; dinlenen harç fırında formunu korur.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Tepsiyi diz',
        aciklama:
          'Harçtan ceviz büyüklüğünde köfteler yuvarla. Yağlanmış tepsiye köfteleri, elma dilimi patatesleri, biberleri ve domates dilimlerini aralıklı diz.',
      },
      {
        baslik: 'Salçalı sosu gezdir',
        aciklama:
          'Salçayı zeytinyağı ve sıcak suyla çırp, tuzunu ayarla; sosu tepsinin her yerine gezdir.',
      },
      {
        baslik: 'Fırında kızart',
        aciklama:
          'Önceden ısıtılmış 200 derece fırında patatesler yumuşayıp köfteler kızarana kadar 40-45 dakika pişir. Ara katta bir kez tepsiyi döndür.',
        sureSn: 2700,
      },
      {
        baslik: 'Tepsiden sıcak servis et',
        aciklama:
          'Tepsiyi fırından alınca 5 dakika bekle, sosuyla birlikte kaşıklayarak servis et.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Patatesleri köftelerle aynı boyda kesmek pişme sürelerini eşitler; ince kesilen patates köfteden önce dağılır, kalın kesilen çiğ kalır.',
  },
  {
    id: 'arnavut-cigeri',
    baslik: 'Arnavut Ciğeri',
    altBaslik: 'Una bulanıp kızgın yağda saniyelerle pişen küp ciğer; sumaklı soğan şart',
    kategori: 'ana-yemek',
    koleksiyonlar: ['101', 'misafir'],
    emoji: '🍢',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 15,
    zorluk: 'orta',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuzu ciğeri', miktar: 500, birim: 'g', not: 'zarı alınmış, küp doğranmış' },
      { ad: 'un', miktar: 1, birim: 'su bardağı' },
      { ad: 'ayçiçek yağı', miktar: 1.5, birim: 'su bardağı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kimyon', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'kırmızı soğan', miktar: 2, birim: 'adet', grup: 'Sumaklı soğan için', not: 'piyazlık doğranmış' },
      { ad: 'sumak', miktar: 1, birim: 'tatlı kaşığı', grup: 'Sumaklı soğan için' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'Sumaklı soğan için', not: 'iri kıyılmış' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Sumaklı soğan için' },
    ],
    adimlar: [
      {
        baslik: 'Ciğeri hazırla ve kurula',
        aciklama:
          'Küp ciğerleri süzgeçte yıka, kağıt havluyla iyice kurula. Islak ciğer un tutmaz ve yağı sıçratır.',
      },
      {
        baslik: 'Sumaklı soğanı ov',
        aciklama:
          'Piyazlık soğanı tuz ve sumakla elinle ovarak yumuşat, maydanozla harmanla ve servis vaktine kadar kenara al.',
      },
      {
        baslik: 'Ciğeri una bula ve ele',
        aciklama:
          'Ciğerleri unla dolu kaba at, karıştırarak her yüzünü unla. Sonra süzgece alıp silkele; fazla un yağı çamurlaştırır.',
      },
      {
        baslik: 'Kızgın yağda hızla kızart',
        aciklama:
          'Ayçiçek yağını iyice kızdır. Ciğerleri iki üç partide, her partiyi 60-90 saniye tutarak kızart; delikli kepçeyle kağıt havluya al.',
        sureSn: 360,
      },
      {
        baslik: 'Baharatla ve dinlendirme',
        aciklama:
          'Sıcak ciğerlerin üzerine tuz, kimyon ve pul biberi hemen serp; baharat sıcak yüzeye yapışır. Bekletmeden ilerle.',
      },
      {
        baslik: 'Sumaklı soğanla servis et',
        aciklama:
          'Ciğerleri tabağın ortasına yığ, sumaklı soğanı yanına yasla. Dilersen yanına haşlanıp dilimlenmiş patates ekle.',
      },
    ],
    pufNoktasi:
      'Ciğerin yumuşaklığı süreyle ters orantılı: kızgın yağda 90 saniyeyi geçen her an ciğeri lastikleştirir. Tuzun sonda atılması da suyunu içinde tutar.',
  },
  {
    id: 'sebzeli-tavuk-guvec',
    baslik: 'Sebzeli Tavuk Güveç',
    altBaslik: 'Mantar, biber ve patatesle fırında pişen sulu tavuk güveci; kaşık kaşık sos',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍗',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 70,
    zorluk: 'orta',
    kaloriPerPorsiyon: 440,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk but', miktar: 600, birim: 'g', not: 'kemiksiz, kuşbaşı doğranmış' },
      { ad: 'mantar', miktar: 250, birim: 'g', not: 'dörde bölünmüş' },
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'iri küp' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'iri doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Tavukları mühürle',
        aciklama:
          'Zeytinyağının yarısını tavada kızdır, tavuk parçalarını yüksek ateşte her yüzü renk alana kadar mühürle.',
        sureSn: 420,
      },
      {
        baslik: 'Soğan ve salçayı çevir',
        aciklama:
          'Soğanı tavuğa kat, şeffaflaşınca salçayı ekleyip bir dakika kavur ve rendelenmiş domatesi ilave et.',
        sureSn: 300,
      },
      {
        baslik: 'Güveci doldur',
        aciklama:
          'Karışımı güveç kabına aktar; mantar, patates, biberler ve bütün sarımsakları aralara yerleştir. Kalan zeytinyağını, tuzu, karabiberi ve kekiği ekle.',
      },
      {
        baslik: 'Suyu ekleyip kapat',
        aciklama: 'Sıcak suyu kenardan dök, kapağını ya da folyoyu sıkıca kapat.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          '190 derece fırında 50 dakika kapalı pişir; son 10 dakika kapağı açıp üzerini hafif kızart.',
        sureSn: 3600,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Güveci fırından alınca 10 dakika dinlendir; sosu koyulaşınca pilav ya da bol ekmekle servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Mantarları yıkamak yerine nemli bezle silmek güvecin suyunu berrak tutar; sünger gibi su çeken mantar yemeği bulandırır.',
  },
  {
    id: 'tavuklu-sebzeli-sote',
    baslik: 'Tavuklu Sebzeli Sote',
    altBaslik: 'Renkli biberler ve mantarla yüksek ateşte diri diri sotelenen tavuk göğsü',
    kategori: 'ana-yemek',
    koleksiyonlar: ['101'],
    emoji: '🥡',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 390,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 500, birim: 'g', not: 'kuşbaşı doğranmış' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'şerit doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'mantar', miktar: 200, birim: 'g', not: 'dilimlenmiş' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'dilimlenmiş' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Tavuğu baharatla dinlendir',
        aciklama:
          'Kuşbaşı tavuğu bir kaşık zeytinyağı, kekik ve karabiberle harmanlayıp 15 dakika oda sıcaklığında dinlendir.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Tavuğu yüksek ateşte sotele',
        aciklama:
          'Kalan yağın yarısını geniş tavada kızdır. Tavukları tek katman yay, kenarları beyazlaşıp altları kızarana kadar az karıştırarak sotele; tabağa al.',
        sureSn: 420,
      },
      {
        baslik: 'Mantarları susuz kızart',
        aciklama:
          'Aynı tavaya kalan yağı ekle, mantarları suyunu salıp çekene ve kenarları kızarana kadar sotele.',
        sureSn: 300,
      },
      {
        baslik: 'Soğan ve biberleri diri bırak',
        aciklama:
          'Soğan, sarımsak ve biberleri ekleyip yüksek ateşte iki üç dakika çevir; sebzeler renkli ve diri kalmalı.',
        sureSn: 180,
      },
      {
        baslik: 'Tavuğu geri al ve birleştir',
        aciklama:
          'Tavukları biriken suyuyla tavaya geri al, küp domatesi ve tuzu ekle. Domates hafif çekene kadar iki dakika birlikte sotele.',
        sureSn: 180,
      },
      {
        baslik: 'Pul biberle tamamla',
        aciklama:
          'Ocağı kapat, pul biber serpip son kez harmanla. Pilav ya da makarna eşliğinde bekletmeden servis et.',
      },
    ],
    pufNoktasi:
      'Tavuk ve sebzeyi ayrı ayrı soteleyip sonda birleştirmek her malzemenin kendi dokusunu korur; hepsi birden atılırsa tava soğur ve yemek haşlanır.',
  },
];
