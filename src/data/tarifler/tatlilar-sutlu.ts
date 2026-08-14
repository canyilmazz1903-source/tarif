import type { Tarif } from '@/types/tarif';

// Klasik sütlü tatlılar — muhallebi ailesi, Osmanlı saray tatlıları ve fırın klasikleri.
// Tüm metinler özgün; ölçüler ev tipi tencere/fırın için dengelendi.
export const SUTLU_TATLILAR: Tarif[] = [
  {
    id: 'kazandibi',
    baslik: 'Kazandibi',
    altBaslik: 'Dibi mühürlenip karamelize edilen, rulo yapılarak servis edilen Osmanlı muhallebisi',
    kategori: 'tatli',
    koleksiyonlar: ['osmanli', 'misafir'],
    emoji: '🍮',
    porsiyon: 8,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 290,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'süt', miktar: 1, birim: 'lt', grup: 'Muhallebisi için' },
      { ad: 'toz şeker', miktar: 1, birim: 'su bardağı', grup: 'Muhallebisi için' },
      { ad: 'nişasta', miktar: 100, birim: 'g', grup: 'Muhallebisi için' },
      { ad: 'vanilin', miktar: 1, birim: 'paket', grup: 'Muhallebisi için' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Tabanı için', not: 'oda sıcaklığında' },
      { ad: 'pudra şekeri', miktar: 3, birim: 'yemek kaşığı', grup: 'Tabanı için' },
    ],
    adimlar: [
      {
        baslik: 'Muhallebiyi pişir',
        aciklama:
          'Nişastayı soğuk sütün bir kısmında pütürsüz açın. Kalan süt ve toz şekerle birlikte tencereye alıp orta ateşte sürekli karıştırarak koyu, kaşıktan güç dökülen bir muhallebi kıvamına getirin. Ocaktan almadan vanilini karıştırın.',
        sureSn: 900,
      },
      {
        baslik: 'Tepsinin tabanını hazırla',
        aciklama:
          'Küçük dikdörtgen bir tepsinin tabanına tereyağını fırça ile sürün. Üzerine pudra şekerini elekten geçirerek eşit bir katman hâlinde serpin; şeker her yeri kaplasın.',
      },
      {
        baslik: 'Dibini karamelize et',
        aciklama:
          'Sıcak muhallebiyi tepsiye dökün ve spatulayla düzeltin. Tepsiyi doğrudan orta ateşe oturtun; öne arkaya kaydırarak her bölgenin ısı almasını sağlayın. Şeker cızırdayıp koyu kahve lekeler oluştuğunda ateşten alın.',
        sureSn: 600,
      },
      {
        baslik: 'Soğut ve dinlendir',
        aciklama:
          'Tepsi oda sıcaklığına gelince üzerini kapatıp buzdolabında iyice soğutun; dibin tepsiden kolay ayrılması için bu dinlenme şart.',
        beklemeAdimi: true,
        sureSn: 10800,
      },
      {
        baslik: 'Rulo yapıp servis et',
        aciklama:
          'Soğuyan tatlıyı spatulayla enine şeritler hâlinde kesin. Her şeridi yanık yüzü dışta kalacak şekilde rulo yaparak tabaklara alın.',
      },
    ],
    pufNoktasi:
      'Tepsiyi ateşte sabit tutmayın; sürekli kaydırın. Cızırtı sesi kesilip hafif yanık koku geldiği an doğru kıvamdır — birkaç saniye daha beklerseniz acılaşır.',
  },
  {
    id: 'sade-muhallebi',
    baslik: 'Sade Muhallebi',
    altBaslik: 'Bir tencerede hazırlanan, tarçınla servis edilen en temel sütlü tatlı',
    kategori: 'tatli',
    koleksiyonlar: ['101', 'tek-tencere'],
    emoji: '🥣',
    porsiyon: 6,
    hazirlikDk: 5,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 250,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'süt', miktar: 1, birim: 'lt' },
      { ad: 'toz şeker', miktar: 1, birim: 'su bardağı' },
      { ad: 'nişasta', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'un', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'vanilin', miktar: 1, birim: 'paket' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Kuru malzemeleri sütle aç',
        aciklama:
          'Nişasta, un ve toz şekeri tencereye alın. Soğuk sütü azar azar ekleyip telle çırparak topak kalmayan bir karışım elde edin.',
      },
      {
        baslik: 'Kıvam alana dek pişir',
        aciklama:
          'Tencereyi orta ateşe alın; telle hep aynı yönde karıştırarak pişirin. Fokurdamaya başladıktan sonra 2-3 dakika daha pişirip çiğ un tadını uçurun.',
        sureSn: 900,
      },
      {
        baslik: 'Tereyağı ve vanilini ekle',
        aciklama:
          'Ocaktan aldığınız muhallebiye tereyağı ile vanilini ekleyin; tereyağı eriyene kadar karıştırın. Sıcakken kaselere paylaştırın.',
      },
      {
        baslik: 'Buzdolabında soğut',
        aciklama:
          'Kaseler oda sıcaklığına gelince buzdolabına alın ve iyice soğutun. Servis ederken üzerine tarçın serpin.',
        beklemeAdimi: true,
        sureSn: 7200,
      },
    ],
    pufNoktasi:
      'Kaseleri doldurduktan sonra üzerine streç filmi muhallebiye değecek şekilde kapatırsanız yüzeyde kalın kaymak tabakası oluşmaz; kaymağı sevenler filmi açık bırakabilir.',
  },
  {
    id: 'irmikli-muhallebi',
    baslik: 'İrmikli Muhallebi',
    altBaslik: 'İrmiğin dokusuyla doyurucu hâle gelen, hindistan cevizli klasik kase tatlısı',
    kategori: 'tatli',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🥛',
    porsiyon: 6,
    hazirlikDk: 5,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 280,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'süt', miktar: 1, birim: 'lt' },
      { ad: 'toz şeker', miktar: 1, birim: 'su bardağı' },
      { ad: 'irmik', miktar: 0.5, birim: 'su bardağı' },
      { ad: 'nişasta', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'vanilin', miktar: 1, birim: 'paket' },
      { ad: 'hindistan cevizi', miktar: 2, birim: 'yemek kaşığı', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Malzemeleri tencerede buluştur',
        aciklama:
          'İrmik, nişasta ve toz şekeri tencereye alın. Soğuk sütü ekleyip telle karıştırarak nişastanın dibe çökmeden dağılmasını sağlayın.',
      },
      {
        baslik: 'Karıştırarak pişir',
        aciklama:
          'Orta ateşte, tel ile sürekli karıştırarak pişirin. İrmik taneleri şişip karışım kaşığın arkasını kaplayacak kıvama gelince 2 dakika daha pişirip ocaktan alın, vanilini karıştırın.',
        sureSn: 900,
      },
      {
        baslik: 'Kaselere paylaştır',
        aciklama:
          'Sıcak muhallebiyi ıslattığınız kaselere ya da tek büyük kaba dökün, yüzeyini düzleyin.',
      },
      {
        baslik: 'Soğut ve süsle',
        aciklama:
          'Oda sıcaklığına gelen kaseleri buzdolabında iyice soğutun. Servis öncesi üzerine hindistan cevizi serpin.',
        beklemeAdimi: true,
        sureSn: 7200,
      },
    ],
    pufNoktasi:
      'İrmiği sütle birlikte soğuk başlatmak topaklanmayı önler; kaynayan süte irmik atarsanız pütür pütür olur.',
  },
  {
    id: 'gullac',
    baslik: 'Güllaç',
    altBaslik: 'Gül suyu kokulu ılık sütle ıslanan yapraklar arasına ceviz serilen Ramazan klasiği',
    kategori: 'tatli',
    koleksiyonlar: ['ramazan', 'osmanli'],
    emoji: '🌙',
    porsiyon: 8,
    hazirlikDk: 25,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 300,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    mevsimAylari: [3, 4, 5],
    malzemeler: [
      { ad: 'güllaç yaprağı', miktar: 10, birim: 'adet' },
      { ad: 'süt', miktar: 1.5, birim: 'lt' },
      { ad: 'toz şeker', miktar: 1.5, birim: 'su bardağı' },
      { ad: 'gül suyu', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'ceviz içi', miktar: 1, birim: 'su bardağı', not: 'iri çekilmiş' },
      { ad: 'antep fıstığı', miktar: 2, birim: 'yemek kaşığı', not: 'servis için, dövülmüş' },
    ],
    adimlar: [
      {
        baslik: 'Şekerli sütü ılıt',
        aciklama:
          'Süt ile toz şekeri tencereye alın; şeker eriyene kadar karıştırarak elinizi yakmayacak sıcaklığa gelene dek ısıtın. Kaynatmayın. Ocaktan alınca gül suyunu ekleyin.',
        sureSn: 300,
      },
      {
        baslik: 'Yaprakları tek tek ıslat',
        aciklama:
          'Derin bir tepsiye ilk güllaç yaprağını mat yüzü üste gelecek şekilde yerleştirin. Üzerine kepçeyle ılık sütten gezdirin; yaprak yumuşayınca bir sonrakini koyup aynı işlemi tekrarlayın.',
      },
      {
        baslik: 'Ceviz katmanını ser',
        aciklama:
          'Beş yaprağı ıslattıktan sonra üzerine çekilmiş cevizi eşit şekilde yayın. Kalan beş yaprağı da aynı yöntemle ıslatıp cevizin üzerine dizin.',
      },
      {
        baslik: 'Kalan sütü dök',
        aciklama:
          'Kalan ılık sütün tamamını tepsinin kenarlarından ve üstünden gezdirin; yapraklar sütü çekerek kabaracak.',
      },
      {
        baslik: 'Soğutup dinlendir',
        aciklama:
          'Tepsiyi oda sıcaklığında yarım saat beklettikten sonra buzdolabına alın; yapraklar sütü tamamen çekene kadar soğutun. Dilimleyip antep fıstığı ile servis edin.',
        beklemeAdimi: true,
        sureSn: 7200,
      },
    ],
    pufNoktasi:
      'Süt kaynar olursa yaprakları eritip hamurlaştırır; ideal sıcaklık parmağınızı rahatça tutabildiğiniz ılıklıktır. Gül suyunu ocaktan aldıktan sonra eklemek kokusunu korur.',
  },
  {
    id: 'profiterol',
    baslik: 'Profiterol',
    altBaslik: 'Krema dolgulu minik hamur topları, üzerinde parlak bitter çikolata sosu',
    kategori: 'tatli',
    koleksiyonlar: ['misafir'],
    emoji: '🧁',
    porsiyon: 8,
    hazirlikDk: 35,
    pisirmeDk: 40,
    zorluk: 'zor',
    kaloriPerPorsiyon: 420,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'su', miktar: 1, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'tereyağı', miktar: 100, birim: 'g', grup: 'Hamuru için' },
      { ad: 'un', miktar: 1, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'yumurta', miktar: 3, birim: 'adet', grup: 'Hamuru için', not: 'oda sıcaklığında' },
      { ad: 'tuz', miktar: 1, birim: 'tutam', grup: 'Hamuru için' },
      { ad: 'süt', miktar: 500, birim: 'ml', grup: 'Kreması için' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'su bardağı', grup: 'Kreması için' },
      { ad: 'nişasta', miktar: 2, birim: 'yemek kaşığı', grup: 'Kreması için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Kreması için', not: 'sadece sarısı' },
      { ad: 'vanilin', miktar: 1, birim: 'paket', grup: 'Kreması için' },
      { ad: 'çikolata (bitter)', miktar: 150, birim: 'g', grup: 'Sosu için' },
      { ad: 'krema', miktar: 200, birim: 'ml', grup: 'Sosu için' },
    ],
    adimlar: [
      {
        baslik: 'Hamurun tabanını pişir',
        aciklama:
          'Su, tereyağı ve tuzu tencerede kaynatın. Kaynayınca unu bir seferde ekleyip tahta kaşıkla hızla karıştırın; hamur toparlanıp tencerenin dibinde ince bir film bırakana kadar 2-3 dakika pişirin.',
        sureSn: 180,
      },
      {
        baslik: 'Yumurtaları yedir',
        aciklama:
          'Hamuru geniş bir kaba alıp 10 dakika soğutun. Yumurtaları teker teker ekleyin; her yumurtayı hamur tamamen emene kadar çırpın. Parlak, kaşıktan şerit hâlinde akan bir kıvam hedefleyin.',
      },
      {
        baslik: 'Şekillendirip fırınla',
        aciklama:
          'Hamuru sıkma torbasına doldurun; yağlı kâğıtlı tepsiye aralıklı, ceviz büyüklüğünde toplar sıkın. Önceden ısıtılmış 190 derece fırında kabarıp altın rengi alana kadar pişirin; ilk 20 dakika fırın kapağını açmayın.',
        sureSn: 1500,
      },
      {
        baslik: 'Pastacı kremasını hazırla',
        aciklama:
          'Süt, toz şeker, nişasta ve yumurta sarısını soğukken çırpıp orta ateşte koyulaşana dek pişirin. Vanilini ekleyip ocaktan alın; üzerine streç film kapatarak soğutun.',
        sureSn: 600,
      },
      {
        baslik: 'Topları doldur',
        aciklama:
          'Soğuyan topların yan tarafından küçük bir delik açın ya da ikiye kesin. Kremayı sıkma torbasıyla içlerine doldurup servis kabına dizin.',
      },
      {
        baslik: 'Soğukta dinlendir',
        aciklama: 'Dolgulu topların üzerini kapatıp buzdolabında dinlendirin.',
        beklemeAdimi: true,
        sureSn: 7200,
      },
      {
        baslik: 'Çikolata sosuyla kapla',
        aciklama:
          'Kremayı kaynama noktasına getirip doğranmış bitter çikolatanın üzerine dökün; 1 dakika bekleyip parlak bir sos olana dek karıştırın. Ilık sosu servisten hemen önce topların üzerine gezdirin.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Toplar fırından çıkar çıkmaz birinin altına kürdanla delik açın; buhar çıkarsa birkaç dakika daha pişirin. İçi nemli kalan toplar soğurken söner.',
  },
  {
    id: 'keskul',
    baslik: 'Keşkül',
    altBaslik: 'Öğütülmüş bademle koyulaşan, fıstık ve hindistan ceviziyle süslenen saray muhallebisi',
    kategori: 'tatli',
    koleksiyonlar: ['osmanli', 'misafir'],
    emoji: '🥥',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 310,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'badem', miktar: 100, birim: 'g', not: 'kabuksuz' },
      { ad: 'süt', miktar: 1, birim: 'lt' },
      { ad: 'toz şeker', miktar: 1, birim: 'su bardağı' },
      { ad: 'nişasta', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'vanilin', miktar: 1, birim: 'paket' },
      { ad: 'hindistan cevizi', miktar: 1, birim: 'yemek kaşığı', not: 'servis için' },
      { ad: 'antep fıstığı', miktar: 2, birim: 'yemek kaşığı', not: 'servis için, dövülmüş' },
    ],
    adimlar: [
      {
        baslik: 'Bademleri öğüt',
        aciklama:
          'Kabuksuz bademleri rondoda un inceliğine yaklaşana dek çekin. Birkaç kaşık sütle tekrar çekerseniz krema gibi pürüzsüz olur.',
      },
      {
        baslik: 'Muhallebi tabanını pişir',
        aciklama:
          'Nişastayı soğuk sütte açın; toz şekeri ekleyip orta ateşte sürekli karıştırarak koyulaşana kadar pişirin.',
        sureSn: 600,
      },
      {
        baslik: 'Bademi ekleyip demlendir',
        aciklama:
          'Öğütülmüş bademi tencereye ekleyin; kısık ateşte 5 dakika daha karıştırarak badem aromasının süte geçmesini sağlayın. Ocaktan alıp vanilini karıştırın.',
        sureSn: 300,
      },
      {
        baslik: 'Soğut ve süsleyerek sun',
        aciklama:
          'Kaselere paylaştırdığınız keşkülü buzdolabında iyice soğutun. Servis ederken üzerine hindistan cevizi ve dövülmüş antep fıstığı serpin.',
        beklemeAdimi: true,
        sureSn: 7200,
      },
    ],
    pufNoktasi:
      'Bademlerin acı olanı bir tanesiyle bile tadı bozar; öğütmeden önce tek tek tadına bakmasanız da kokusu keskin olanları ayıklayın. Sıcak suda 5 dakika bekletilen badem daha kolay çekilir.',
  },
  {
    id: 'supangle',
    baslik: 'Supangle',
    altBaslik: 'Bitter çikolatayla zenginleşen yoğun kakaolu puding; soğuk servis edilir',
    kategori: 'tatli',
    koleksiyonlar: ['misafir'],
    emoji: '🍫',
    porsiyon: 6,
    hazirlikDk: 10,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 350,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'süt', miktar: 1, birim: 'lt' },
      { ad: 'toz şeker', miktar: 1, birim: 'su bardağı' },
      { ad: 'un', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'nişasta', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'kakao', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'çikolata (bitter)', miktar: 100, birim: 'g', not: 'doğranmış' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'fındık içi', miktar: 2, birim: 'yemek kaşığı', not: 'servis için, dövülmüş' },
    ],
    adimlar: [
      {
        baslik: 'Kakaolu tabanı hazırla',
        aciklama:
          'Un, nişasta, kakao ve toz şekeri tencerede karıştırın. Soğuk sütü azar azar ekleyip telle çırparak pürüzsüz bir karışım elde edin.',
      },
      {
        baslik: 'Koyulaşana dek pişir',
        aciklama:
          'Orta ateşte sürekli karıştırarak pişirin; fokurdadıktan sonra 2 dakika daha kaynatıp kakaonun çiğliğini alın.',
        sureSn: 900,
      },
      {
        baslik: 'Çikolata ve tereyağını erit',
        aciklama:
          'Tencereyi ocaktan alın; doğranmış bitter çikolata ile tereyağını ekleyip eriyene kadar karıştırın. Puding parlak ve akışkan bir görünüm alacak.',
      },
      {
        baslik: 'Soğutup servis et',
        aciklama:
          'Kaselere paylaştırın; oda sıcaklığına gelince buzdolabında iyice soğutun. Üzerine dövülmüş fındık serperek servis edin.',
        beklemeAdimi: true,
        sureSn: 10800,
      },
    ],
    pufNoktasi:
      'Çikolatayı ocakta değil ocaktan aldıktan sonra eritmek supanglenin cilalı parlaklığının sırrıdır; kaynayan pudingde eritilen çikolata matlaşır.',
  },
  {
    id: 'tavukgogsu',
    baslik: 'Tavukgöğsü',
    altBaslik: 'Tel tel ayrılmış tavuk lifleriyle yapılan, tarçınla sunulan efsane saray tatlısı',
    kategori: 'tatli',
    koleksiyonlar: ['osmanli', 'misafir'],
    emoji: '🥄',
    porsiyon: 6,
    hazirlikDk: 30,
    pisirmeDk: 45,
    zorluk: 'zor',
    kaloriPerPorsiyon: 320,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 150, birim: 'g', not: 'tek parça, derisiz' },
      { ad: 'süt', miktar: 1, birim: 'lt' },
      { ad: 'toz şeker', miktar: 1, birim: 'su bardağı' },
      { ad: 'nişasta', miktar: 100, birim: 'g' },
      { ad: 'vanilin', miktar: 1, birim: 'paket' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Tavuğu haşla',
        aciklama:
          'Tavuk göğsünü bütün hâlde, tuzsuz suda liflerine ayrılacak yumuşaklığa gelene kadar haşlayın. Suyundan çıkarıp ılınmaya bırakın.',
        sureSn: 1200,
      },
      {
        baslik: 'Lifleri ayır ve yıka',
        aciklama:
          'Ilık tavuğu elinizle iplik inceliğinde liflere ayırın. Lifleri soğuk suda birkaç kez yıkayıp yarım saat suda bekletin; süzüp temiz bir bezle kurulayın. Bu adım tavuk kokusunu tamamen alır.',
      },
      {
        baslik: 'Muhallebiyi pişir',
        aciklama:
          'Nişastayı soğuk sütte açın; toz şekerle birlikte orta ateşte sürekli karıştırarak koyu bir muhallebi kıvamına getirin.',
        sureSn: 900,
      },
      {
        baslik: 'Lifleri çırparak yedir',
        aciklama:
          'Tavuk liflerini muhallebiye ekleyin; kısık ateşte telle kuvvetlice çırparak liflerin görünmez şekilde dağılmasını sağlayın. Vanilini ekleyip 3-4 dakika daha pişirin.',
        sureSn: 300,
      },
      {
        baslik: 'Soğut ve dinlendir',
        aciklama:
          'Karışımı ıslatılmış bir tepsiye dökün, yüzeyini düzleyin. Oda sıcaklığına gelince buzdolabında iyice soğutun.',
        beklemeAdimi: true,
        sureSn: 10800,
      },
      {
        baslik: 'Dilimleyip servis et',
        aciklama:
          'Soğuyan tatlıyı kare dilimler hâlinde kesin ya da şeritler kesip rulo yapın. Üzerine tarçın serperek servis edin.',
      },
    ],
    pufNoktasi:
      'Sır liflerde: kalın kalan tek bir parça bile ağızda hissedilir. Lifleri iki elinizle keçeleştirir gibi ince ince didikleyin; suda bekletme hem kokuyu alır hem lifleri yumuşatır.',
  },
  {
    id: 'sakizli-muhallebi',
    baslik: 'Sakızlı Muhallebi',
    altBaslik: 'Dövülmüş damla sakızının ferah aromasıyla klasik muhallebinin zarif hâli',
    kategori: 'tatli',
    koleksiyonlar: ['osmanli'],
    emoji: '🍦',
    porsiyon: 6,
    hazirlikDk: 10,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'süt', miktar: 1, birim: 'lt' },
      { ad: 'toz şeker', miktar: 1, birim: 'su bardağı' },
      { ad: 'nişasta', miktar: 5, birim: 'yemek kaşığı' },
      { ad: 'damla sakızı', miktar: 2, birim: 'g' },
      { ad: 'antep fıstığı', miktar: 1, birim: 'yemek kaşığı', not: 'servis için, dövülmüş' },
    ],
    adimlar: [
      {
        baslik: 'Damla sakızını döv',
        aciklama:
          'Damla sakızını bir tatlı kaşığı toz şekerle birlikte havanda toz hâline gelene kadar dövün; şeker, sakızın havana yapışmasını önler.',
      },
      {
        baslik: 'Muhallebiyi pişir',
        aciklama:
          'Nişastayı soğuk sütte pütürsüz açın; kalan toz şekeri ekleyip orta ateşte sürekli karıştırarak koyulaşana kadar pişirin.',
        sureSn: 900,
      },
      {
        baslik: 'Sakızı ekle',
        aciklama:
          'Dövülmüş sakızı kaynayan muhallebiye ekleyin; 2-3 dakika daha karıştırarak sakızın tamamen erimesini ve aromasını salmasını sağlayın.',
        sureSn: 180,
      },
      {
        baslik: 'Soğutup servis et',
        aciklama:
          'Kaselere paylaştırın, oda sıcaklığına gelince buzdolabında soğutun. Üzerine dövülmüş antep fıstığı serperek sunun.',
        beklemeAdimi: true,
        sureSn: 7200,
      },
    ],
    pufNoktasi:
      'Damla sakızında az çoktur: 1 litre süte 2-3 küçük damladan fazlası tatlıyı sabun gibi acılaştırır. Sakızı dondurucuda 10 dakika beklettikten sonra dövmek çok daha kolaydır.',
  },
  {
    id: 'trilece',
    baslik: 'Trileçe',
    altBaslik: 'Sütlü sosu emen pamuk kek üzerine akışkan karamel; Balkan usulü soğuk servis',
    kategori: 'tatli',
    koleksiyonlar: ['misafir'],
    emoji: '🍰',
    porsiyon: 8,
    hazirlikDk: 25,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 380,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 4, birim: 'adet', grup: 'Keki için', not: 'oda sıcaklığında' },
      { ad: 'toz şeker', miktar: 1, birim: 'su bardağı', grup: 'Keki için' },
      { ad: 'un', miktar: 1.5, birim: 'su bardağı', grup: 'Keki için', not: 'elenmiş' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'paket', grup: 'Keki için' },
      { ad: 'vanilin', miktar: 1, birim: 'paket', grup: 'Keki için' },
      { ad: 'süt', miktar: 500, birim: 'ml', grup: 'Sütlü sosu için' },
      { ad: 'krema', miktar: 200, birim: 'ml', grup: 'Sütlü sosu için' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'su bardağı', grup: 'Karameli için' },
      { ad: 'krema', miktar: 150, birim: 'ml', grup: 'Karameli için', not: 'oda sıcaklığında' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Karameli için' },
    ],
    adimlar: [
      {
        baslik: 'Kek harcını çırp',
        aciklama:
          'Yumurta ile toz şekeri, hacmi üç katına çıkıp krem rengine dönene kadar yüksek devirde çırpın. Elenmiş un, kabartma tozu ve vanilini spatulayla alttan üste, söndürmeden yedirin.',
        sureSn: 300,
      },
      {
        baslik: 'Keki fırında pişir',
        aciklama:
          'Harcı yağlı kâğıt serili orta boy borcama dökün. Önceden ısıtılmış 170 derece fırında, kürdan temiz çıkana kadar pişirin.',
        sureSn: 1500,
      },
      {
        baslik: 'Sütlü sosu emdir',
        aciklama:
          'Süt ile kremayı karıştırıp hafif ılıtın. Fırından çıkan sıcak kekin her yerine çatalla delikler açın; sosu kepçe kepçe, her seferinde emmesini bekleyerek dökün.',
      },
      {
        baslik: 'Buzdolabında dinlendir',
        aciklama:
          'Kek oda sıcaklığına gelince üzerini kapatıp buzdolabında dinlendirin; sosun tamamen dokuya işlemesi için bu süre gerekli.',
        beklemeAdimi: true,
        sureSn: 10800,
      },
      {
        baslik: 'Karameli hazırla ve kapla',
        aciklama:
          'Toz şekeri tencerede karıştırmadan, kehribar rengini alana kadar eritin. Ocaktan alıp oda sıcaklığındaki krema ile tereyağını dikkatlice ekleyin, pürüzsüzleşene dek karıştırın. Ilıyan karameli kekin üzerine yayıp dilimleyerek servis edin.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Sos sıcak keke değil, ılık sos sıcak keke buluşmalı: kek fırından çıkar çıkmaz emdirin, sos ılık olsun. Soğuk kek sosu emmez, göllenir.',
  },
  {
    id: 'krem-karamel',
    baslik: 'Krem Karamel',
    altBaslik: 'Benmaride pişen ipeksi yumurtalı krema, ters çevrilince akan karamel örtüsü',
    kategori: 'tatli',
    koleksiyonlar: ['misafir', '101'],
    emoji: '🍯',
    porsiyon: 8,
    hazirlikDk: 15,
    pisirmeDk: 50,
    zorluk: 'orta',
    kaloriPerPorsiyon: 270,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'toz şeker', miktar: 0.5, birim: 'su bardağı', grup: 'Karameli için' },
      { ad: 'su', miktar: 2, birim: 'yemek kaşığı', grup: 'Karameli için' },
      { ad: 'süt', miktar: 1, birim: 'lt', grup: 'Kreması için' },
      { ad: 'yumurta', miktar: 5, birim: 'adet', grup: 'Kreması için' },
      { ad: 'toz şeker', miktar: 1, birim: 'su bardağı', grup: 'Kreması için' },
      { ad: 'vanilin', miktar: 1, birim: 'paket', grup: 'Kreması için' },
    ],
    adimlar: [
      {
        baslik: 'Karameli kalıplara dök',
        aciklama:
          'Yarım bardak toz şekeri su ile tencereye alın; karıştırmadan, kehribar rengine dönene kadar eritin. Sıcak karameli 8 küçük kalıbın tabanına hızlıca paylaştırın.',
        sureSn: 300,
      },
      {
        baslik: 'Kremayı hazırla',
        aciklama:
          'Sütü hafif ılıtın. Ayrı kapta yumurta, toz şeker ve vanilini köpürtmeden, sadece şeker eriyene kadar çırpın. Ilık sütü ince akıtarak yumurtaya karıştırın.',
      },
      {
        baslik: 'Süzerek kalıplara doldur',
        aciklama:
          'Karışımı ince süzgeçten geçirerek karamelli kalıplara paylaştırın; süzmek hem pürüzsüzlük hem cam gibi kesit sağlar.',
      },
      {
        baslik: 'Benmaride pişir',
        aciklama:
          'Kalıpları derin bir tepsiye dizin; tepsiye kalıpların yarısına gelecek kadar sıcak su dökün. Önceden ısıtılmış 160 derece fırında, ortası hafif titrek kalacak kıvama gelene dek pişirin.',
        sureSn: 2400,
      },
      {
        baslik: 'Soğutup dinlendir',
        aciklama:
          'Kalıpları sudan çıkarıp oda sıcaklığına getirin; ardından buzdolabında iyice soğutun. Dinlenme karamelin krema tarafından çözülüp sos hâline gelmesini sağlar.',
        beklemeAdimi: true,
        sureSn: 14400,
      },
      {
        baslik: 'Ters çevirip servis et',
        aciklama:
          'Kalıbın kenarından ince bir bıçak gezdirin; üzerine servis tabağını kapatıp tek hamlede ters çevirin. Karamel sos kremanın üzerinden akacaktır.',
      },
    ],
    pufNoktasi:
      'Yumurtaları köpürterek çırparsanız pişerken yüzeyde delikli, süngerimsi bir doku oluşur. Benmari suyu fırında asla kaynamamalı; kaynarsa fırın ısısını bir miktar düşürün.',
  },
];
