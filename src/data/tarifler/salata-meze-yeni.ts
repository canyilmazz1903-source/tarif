import type { Tarif } from '@/types/tarif';

// Salata & meze genişleme paketi — özgün içerik, sözlük adlarıyla hizalı.
export const SALATA_MEZE_YENI: Tarif[] = [
  {
    id: 'fava',
    baslik: 'Fava',
    altBaslik: 'Dereotlu, limonlu bakla ezmesi; kalıpta soğutulup dilimlenen klasik Ege mezesi',
    kategori: 'salata',
    koleksiyonlar: ['misafir', 'fit'],
    emoji: '🫘',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 190,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'bakla', miktar: 250, birim: 'g', not: 'kuru iç bakla, yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'dört parçaya bölünmüş' },
      { ad: 'su', miktar: 4, birim: 'su bardağı' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı', not: '1 kaşığı servise' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'dereotu', miktar: 1, birim: 'demet', not: 'yarısı içine, yarısı üzerine' },
    ],
    adimlar: [
      {
        baslik: 'Baklaları yumuşayana dek haşla',
        aciklama:
          'Yıkanmış iç baklayı soğan, su ve zeytinyağının 3 kaşığıyla tencereye al. Kapağı aralık bırakıp kısık ateşte, baklalar ezilecek kıvama gelene ve su iyice çekilene kadar pişir. Ara ara karıştırıp köpüğünü al.',
        sureSn: 2100,
      },
      {
        baslik: 'Sıcakken pürüzsüzce ezerek çek',
        aciklama:
          'Tuz, şeker ve limon suyunu ekle; tencerenin içinde el blenderıyla tamamen pürüzsüz olana kadar çek. Kıvam, kaşıktan yavaşça akan boza yoğunluğunda olmalı. İnce kıyılmış dereotunun yarısını karıştır.',
      },
      {
        baslik: 'Kalıba dök ve soğumaya bırak',
        aciklama:
          'Ezmeyi hafif yağlanmış dikdörtgen bir kaba dök, spatulayla düzle. Oda sıcaklığına indikten sonra üzerini kapatıp buzdolabında iyice katılaşana kadar beklet.',
        sureSn: 10800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Dilimleyip soslayarak servis et',
        aciklama:
          'Katılaşan favayı kalıptan ters çevirerek çıkar, baklava dilimi şeklinde kes. Kalan zeytinyağını gezdir, kalan dereotunu serperek soğuk servis et.',
      },
    ],
    pufNoktasi:
      'Fava blenderdan geçtikten sonra bir taşım daha kaynatılırsa nişastası açılır ve kalıpta jöle gibi kesme kıvamı tutar; bu adımı atlamayın.',
  },
  {
    id: 'humus',
    baslik: 'Humus',
    altBaslik: 'Tahinli, kimyonlu ipeksi nohut ezmesi; üzeri pul biberli kızgın zeytinyağlı',
    kategori: 'salata',
    koleksiyonlar: ['misafir'],
    emoji: '🧆',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 60,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'nohut', miktar: 200, birim: 'g', not: 'kuru' },
      { ad: 'su', miktar: 5, birim: 'su bardağı', not: 'haşlama için' },
      { ad: 'tahin', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', not: '1 kaşığı servise' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', not: 'servise' },
    ],
    adimlar: [
      {
        baslik: 'Nohutları bir gece suda beklet',
        aciklama:
          'Nohutları bol suyla kaplayıp oda sıcaklığında bir gece şişmeye bırak. Ertesi gün suyunu süzüp durula; böylece hem pişme süresi kısalır hem ezme daha ipeksi olur.',
        beklemeAdimi: true,
      },
      {
        baslik: 'Nohutları iyice dağılana dek haşla',
        aciklama:
          'Nohutları 5 bardak suyla düdüklüde ya da tencerede, parmak arasında ezilecek kadar yumuşayana dek haşla. Haşlama suyundan yarım bardak ayırıp gerisini süz. Dileyenler kabuklarını ovarak ayıklayabilir.',
        sureSn: 3600,
      },
      {
        baslik: 'Tahin ve baharatla pürüzsüz çek',
        aciklama:
          'Sıcak nohudu tahin, limon suyu, sarımsak, kimyon, tuz ve zeytinyağının 2 kaşığıyla robota al. Ayırdığın haşlama suyunu azar azar ekleyerek krema kıvamına gelene kadar en az iki dakika çek.',
      },
      {
        baslik: 'Kızgın yağla süsleyip servis et',
        aciklama:
          'Humusu tabağa yayıp kaşık sırtıyla havuz aç. Kalan zeytinyağını küçük tavada ısıt, pul biberi ekleyip ocaktan alır almaz humusun üzerine gezdir. Oda sıcaklığında servis et.',
      },
    ],
    pufNoktasi:
      'Nohut sıcakken çekilirse tahinle çok daha kolay bağlanır; soğuk nohuttan yapılan humus asla aynı ipeksiliğe ulaşmaz.',
  },
  {
    id: 'muhammara',
    baslik: 'Muhammara',
    altBaslik: 'Közlenmiş biberli, cevizli Antakya usulü acılı ezme; nar ekşisiyle dengelenir',
    kategori: 'salata',
    koleksiyonlar: ['misafir'],
    emoji: '🌶️',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 270,
    beslenmeEtiketleri: ['vegan', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kırmızı biber', miktar: 2, birim: 'adet', not: 'közlenecek' },
      { ad: 'ceviz içi', miktar: 100, birim: 'g' },
      { ad: 'galeta unu', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'nar ekşisi', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Biberleri ocakta közle',
        aciklama:
          'Kırmızı biberleri ocak alevinde ya da yüksek ısılı fırında, kabukları her yanından kararıp kabarana dek çevirerek közle.',
        sureSn: 900,
      },
      {
        baslik: 'Buharda terlet ve kabuklarını soy',
        aciklama:
          'Sıcak biberleri kapaklı bir kaba alıp terlemeye bırak; buhar kabukları gevşetir. Ilıyınca kabuklarını ve çekirdeklerini ayıkla, sapını at.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Tüm malzemeyi robotta çek',
        aciklama:
          'Közlenmiş biberleri ceviz, galeta unu, biber salçası, sarımsak, kimyon, pul biber ve tuzla robota al. Nar ekşisi ve zeytinyağını ekleyip hafif taneli, sürülebilir bir kıvam alana kadar aralıklarla çek; ezmeyi püre gibi tamamen ezme.',
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Muhammarayı kaseye alıp üzerini kapat, tatların oturması için buzdolabında en az yarım saat dinlendir. Üzerine birkaç damla nar ekşisi ve ceviz kırığı ile servis et.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Galeta ununu ezmeye kattıktan sonra beş dakika bekleyip kıvama öyle karar verin; galeta biber suyunu çekince muhammara belirgin şekilde koyulaşır.',
  },
  {
    id: 'atom-mezesi',
    baslik: 'Atom',
    altBaslik: 'Sarımsaklı süzme yoğurt üzerine kızgın yağda çevrilmiş kuru acı biberli meze',
    kategori: 'salata',
    koleksiyonlar: ['misafir', '15-dakika'],
    emoji: '🔥',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 5,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'süzme yoğurt', miktar: 400, birim: 'g', not: 'soğuk' },
      { ad: 'kuru acı biber', miktar: 8, birim: 'adet', not: 'saplı, bütün' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı', not: 'servise' },
    ],
    adimlar: [
      {
        baslik: 'Yoğurdu sarımsakla çırp',
        aciklama:
          'Süzme yoğurdu ezilmiş sarımsak ve tuzla, krema gibi parlayana kadar bir kaşıkla iyice çırp. Geniş bir servis tabağına yayıp ortasını hafif çukurlaştır.',
      },
      {
        baslik: 'Kuru biberleri yağda çevir',
        aciklama:
          'Zeytinyağını küçük bir tavada kızdır. Kuru acı biberleri bütün halde yağa at ve renkleri koyulaşıp hafifçe kabarana dek iki tarafını da çevirerek kızart; yakmamaya dikkat et, acılaşır.',
        sureSn: 120,
      },
      {
        baslik: 'Biberleri yoğurda yerleştir',
        aciklama:
          'Kızaran biberleri tavadaki yağıyla birlikte yoğurdun üzerine yerleştir. Kalan kızgın yağı gezdirip kuru naneyi serp; bekletmeden, yağı sıcakken servis et.',
      },
    ],
    pufNoktasi:
      'Biberleri kızartmadan önce birkaç saniye suya batırıp kurulayın; nemli biber yağda yanmadan kabarır ve içi kart kalmaz.',
  },
  {
    id: 'pancarli-yogurt-mezesi',
    baslik: 'Pancarlı Yoğurt Mezesi',
    altBaslik: 'Haşlanmış pancar rendesiyle pembeye bürünen sarımsaklı süzme yoğurt mezesi',
    kategori: 'salata',
    koleksiyonlar: ['misafir', 'fit'],
    emoji: '🩷',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 140,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'pancar', miktar: 2, birim: 'adet' },
      { ad: 'su', miktar: 4, birim: 'su bardağı', not: 'haşlama için' },
      { ad: 'süzme yoğurt', miktar: 300, birim: 'g' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'ceviz içi', miktar: 30, birim: 'g', not: 'iri kırılmış, servise' },
    ],
    adimlar: [
      {
        baslik: 'Pancarları kabuklu haşla',
        aciklama:
          'Pancarları yıkayıp kabuklarını soymadan tencereye al, suyu ekle ve bıçak rahatça girene kadar kısık ateşte haşla. Kabuklu haşlamak rengini ve tadını içinde tutar.',
        sureSn: 2100,
      },
      {
        baslik: 'Soğutup soy ve rendele',
        aciklama:
          'Haşlanan pancarları süzüp ılımaya bırak. Elini boyamaması için eldivenle kabuklarını sıyır ve rendenin ince tarafından rendele; salan suyunu hafifçe sık.',
      },
      {
        baslik: 'Yoğurtla harmanla',
        aciklama:
          'Süzme yoğurdu sarımsak, limon suyu, zeytinyağı ve tuzla çırp. Rendelenmiş pancarı ekleyip meze pembe bir renk alana kadar karıştır.',
      },
      {
        baslik: 'Dolapta dinlendirip servis et',
        aciklama:
          'Mezeyi üzeri kapalı şekilde buzdolabında dinlendir; renk ve tat bu sürede birbirine iyice geçer. Servis ederken üzerine ceviz kırığı serp.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Pancarın bir tanesini rendelemek yerine minik küpler halinde doğrayıp karıştırırsanız meze hem desen hem doku kazanır.',
  },
  {
    id: 'yogurtlu-kabak-mezesi',
    baslik: 'Yoğurtlu Kabak Mezesi',
    altBaslik: 'Zeytinyağında sotelenip soğutulan rendelenmiş kabak; sarımsaklı, dereotlu',
    kategori: 'salata',
    koleksiyonlar: ['misafir'],
    emoji: '🥒',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 130,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [5, 6, 7, 8],
    malzemeler: [
      { ad: 'kabak', miktar: 3, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'süzme yoğurt', miktar: 300, birim: 'g' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'dereotu', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.25, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Kabakları rendele ve suyunu sık',
        aciklama:
          'Kabakları yıkayıp rendenin iri tarafından rendele. Bir tutam tuz serpip beş dakika beklet, sonra avucunla iyice sıkarak acı suyunu at; bu adım mezeyi sulanmaktan kurtarır.',
      },
      {
        baslik: 'Kabakları zeytinyağında sotele',
        aciklama:
          'Zeytinyağını tavada ısıt, sıkılmış kabak rendesini ekle. Orta ateşte, kabaklar hafif renk alıp tamamen çökene dek ara ara karıştırarak sotele ve ocaktan al.',
        sureSn: 480,
      },
      {
        baslik: 'Soğumaya bırak',
        aciklama:
          'Sotelenmiş kabağı geniş bir kaba yayıp oda sıcaklığına gelene kadar soğut. Sıcak kabak yoğurdu kestireceği için bu beklemeyi atlama.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Yoğurt ve dereotuyla karıştır',
        aciklama:
          'Soğuyan kabağa süzme yoğurdu, sarımsağı, dereotunu, tuzu ve karabiberi ekleyip harmanla. Üzerine bir kaşık zeytinyağı gezdirerek soğuk servis et.',
      },
    ],
    pufNoktasi:
      'Kabak suyunu sıktıktan sonra sotelerken tavaya yayıp az karıştırın; hafif kızaran taneler mezeye közlenmiş bir derinlik katar.',
  },
  {
    id: 'yogurtlu-makarna-salatasi',
    baslik: 'Yoğurtlu Makarna Salatası',
    altBaslik: 'Mısır, kornişon ve havuçlu; yoğurt-mayonez soslu doyurucu soğuk salata',
    kategori: 'salata',
    koleksiyonlar: ['misafir', 'meal-prep'],
    emoji: '🥗',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 300,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'makarna', miktar: 250, birim: 'g', not: 'burgu ya da kelebek' },
      { ad: 'su', miktar: 6, birim: 'su bardağı', not: 'haşlama için' },
      { ad: 'yoğurt', miktar: 200, birim: 'g' },
      { ad: 'mayonez', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'hardal', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'mısır (konserve)', miktar: 100, birim: 'g', not: 'süzülmüş' },
      { ad: 'kornişon turşu', miktar: 6, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'dereotu', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.25, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Makarnayı diri haşla',
        aciklama:
          'Suyu tuzlayıp kaynat, makarnayı paket süresinden bir dakika az haşla. Süzüp soğuk sudan geçir ve yapışmaması için zeytinyağıyla harmanlayarak soğut.',
        sureSn: 540,
      },
      {
        baslik: 'Sosu hazırla',
        aciklama:
          'Yoğurt, mayonez, hardal, tuz ve karabiberi bir kasede pürüzsüz olana kadar çırp. Sos koyu gelirse bir kaşık soğuk su ile aç.',
      },
      {
        baslik: 'Sebzelerle birleştir',
        aciklama:
          'Soğuyan makarnayı geniş bir kaba al; mısırı, kornişonu, havuç rendesini ve dereotunu ekle. Sosu üzerine döküp tüm taneler kaplanana dek nazikçe karıştır.',
      },
      {
        baslik: 'Dolapta dinlendirip servis et',
        aciklama:
          'Salatanın üzerini kapatıp buzdolabında dinlendir; sos bu sürede makarnaya iyice işler. Servisten önce bir kez daha karıştır.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Sosun yarısını makarna ılıkken, kalanını servisten hemen önce ekleyin; ilk yarı taneye işler, ikinci yarı salatayı kremamsı tutar.',
  },
  {
    id: 'rokali-parmesan-salatasi',
    baslik: 'Roka Parmesan Salatası',
    altBaslik: 'Nar ekşili zeytinyağı sosuyla harmanlanmış roka, parmesan tirbuşonu ve ceviz',
    kategori: 'salata',
    koleksiyonlar: ['15-dakika', 'fit'],
    emoji: '🌿',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 150,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'roka', miktar: 2, birim: 'demet', not: 'ayıklanmış' },
      { ad: 'parmesan', miktar: 40, birim: 'g', not: 'soyucuyla ince dilinmiş' },
      { ad: 'ceviz içi', miktar: 30, birim: 'g', not: 'iri kırılmış' },
      { ad: 'nar ekşisi', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'tuz', miktar: 0.25, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Rokaları yıka ve kurut',
        aciklama:
          'Rokaların kalın saplarını ayıkla, bol suda yıka ve salata kurutucusunda ya da temiz bir bez arasında iyice kurut. Islak yaprak sos tutmaz.',
      },
      {
        baslik: 'Nar ekşili sosu çırp',
        aciklama:
          'Zeytinyağı, nar ekşisi, limon suyu ve tuzu küçük bir kavanoza koyup kapağını kapat; sos hafifçe koyulaşıp bağlanana kadar çalkala.',
      },
      {
        baslik: 'Servisten hemen önce harmanla',
        aciklama:
          'Rokaları geniş bir kaba al, sosu gezdirip ellerinle nazikçe harmanla. Tabağa aktarıp parmesan dilimlerini ve ceviz kırığını üzerine dağıtarak hemen servis et.',
      },
    ],
    pufNoktasi:
      'Parmesanı rendelemek yerine sebze soyucusuyla ince yapraklar halinde alın; dilimler dilde eriyerek rokanın acılığını yumuşatır.',
  },
  {
    id: 'izgara-hellim-salatasi',
    baslik: 'Izgara Hellim Salatası',
    altBaslik: 'Tavada mühürlenmiş hellim dilimleri; rokalı, domatesli, nar ekşili yeşillik',
    kategori: 'salata',
    koleksiyonlar: ['15-dakika', 'misafir'],
    emoji: '🧀',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 5,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 290,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'hellim peyniri', miktar: 250, birim: 'g', not: 'parmak kalınlığında dilimlenmiş' },
      { ad: 'roka', miktar: 1, birim: 'demet', not: 'ayıklanmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'irice doğranmış' },
      { ad: 'kırmızı soğan', miktar: 0.5, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'nar ekşisi', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Yeşillik tabanını hazırla',
        aciklama:
          'Rokayı, doğranmış domatesi ve kırmızı soğanı geniş bir servis tabağına yay. Zeytinyağının 2 kaşığını nar ekşisi ve limon suyuyla çalkalayıp sosu hazırla.',
      },
      {
        baslik: 'Hellimi tavada mühürle',
        aciklama:
          'Kalan zeytinyağını döküm tavada iyice kızdır. Hellim dilimlerini her iki yüzü karamelize çizgiler alana kadar çevirerek kızart; peynir yumuşayınca hemen ocaktan al.',
        sureSn: 240,
      },
      {
        baslik: 'Sıcak hellimle birleştir',
        aciklama:
          'Kızaran hellimleri yeşilliğin üzerine sıcak sıcak yerleştir. Sosu gezdir, kekiği serp ve hellim sertleşmeden bekletmeden servis et.',
      },
    ],
    pufNoktasi:
      'Hellim dilimlerini kızartmadan önce soğuk suda beş dakika bekletirseniz fazla tuzu çıkar ve dışı daha güzel karamelize olur.',
  },
  {
    id: 'elmali-kirmizi-lahana-salatasi',
    baslik: 'Elmalı Kırmızı Lahana Salatası',
    altBaslik: 'Tuzla ovulup yumuşatılan kırmızı lahana, rendelenmiş elma ve limonlu sos',
    kategori: 'salata',
    koleksiyonlar: ['fit', 'misafir'],
    emoji: '🍎',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 110,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'kırmızı lahana', miktar: 0.5, birim: 'adet', not: 'incecik kıyılmış' },
      { ad: 'elma', miktar: 1, birim: 'adet', not: 'ekşi tercih edilir' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'ceviz içi', miktar: 30, birim: 'g', not: 'iri kırılmış, servise' },
    ],
    adimlar: [
      {
        baslik: 'Lahanayı tuzla ovarak yumuşat',
        aciklama:
          'İncecik kıydığın kırmızı lahanayı geniş bir kaba al; tuzu ve limon suyunun yarısını ekleyip ellerinle sıkarak iki dakika ov. Lahana parlayıp hacmi inene dek devam et.',
      },
      {
        baslik: 'Dinlenmeye bırak',
        aciklama:
          'Ovulan lahanayı tezgahta dinlendir; bu sürede lifleri iyice yumuşar ve rengi koyulaşır. Salan fazla suyu hafifçe süz.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Elmayı rendeleyip sosla birleştir',
        aciklama:
          'Elmayı kabuklu rendele ve kararmaması için kalan limon suyuyla hemen karıştır. Zeytinyağı ve şekerle birlikte lahanaya ekleyip harmanla.',
      },
      {
        baslik: 'Cevizle tazeleyip servis et',
        aciklama:
          'Salatayı servis kabına al, üzerine ceviz kırığını serp. Soğuk servis et; dolapta bir gece beklemiş hali daha da lezzetlidir.',
      },
    ],
    pufNoktasi:
      'Limon kırmızı lahananın morunu parlak pembeye çevirir; sosu servisten önce değil ovma aşamasında eklemek rengin sırrıdır.',
  },
  {
    id: 'kozlenmis-biber-mezesi',
    baslik: 'Közlenmiş Biber Mezesi',
    altBaslik: 'Sarımsaklı, sirkeli zeytinyağı sosunda dinlenen közlenmiş kapya dilimleri',
    kategori: 'salata',
    koleksiyonlar: ['misafir', 'fit'],
    emoji: '🫑',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 100,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'salçalık biber', miktar: 5, birim: 'adet' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ince dilimlenmiş' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'sirke', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'maydanoz', miktar: 0.25, birim: 'demet', not: 'ince kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'Biberleri her yanından közle',
        aciklama:
          'Salçalık biberleri ocak alevinde ya da ızgara ayarlı fırında, kabukları tamamen kararıp kabarana dek maşayla çevirerek közle.',
        sureSn: 900,
      },
      {
        baslik: 'Kapalı kapta terlet',
        aciklama:
          'Sıcak biberleri kapaklı bir kaba ya da ağzı bağlı poşete al ve terlemeye bırak; buhar sayesinde kabuklar zahmetsizce sıyrılır.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Soy, ayıkla ve şerit doğra',
        aciklama:
          'Ilıyan biberlerin kabuklarını elle sıyır, sap ve çekirdeklerini ayıkla. Biberleri yıkamadan parmak kalınlığında şeritler halinde doğra; yıkamak köz aromasını götürür.',
      },
      {
        baslik: 'Sosla harmanlayıp dinlendir',
        aciklama:
          'Şeritleri zeytinyağı, sirke, sarımsak ve tuzla harmanla. Üzerini kapatıp buzdolabında dinlendir, servis ederken maydanoz serp.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Közlenen biberlerin kabında biriken suyu dökmeyin; süzüp sosa katarsanız mezenin köz aroması ikiye katlanır.',
  },
  {
    id: 'misirli-citir-salata',
    baslik: 'Mısırlı Çıtır Salata',
    altBaslik: 'Buz gibi marul, tatlı mısır ve sarımsaklı ev krutonu; limonlu hardal sosla',
    kategori: 'salata',
    koleksiyonlar: ['15-dakika'],
    emoji: '🌽',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 6,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 180,
    beslenmeEtiketleri: ['vegan', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'marul', miktar: 1, birim: 'adet', not: 'yaprakları elle koparılmış' },
      { ad: 'mısır (konserve)', miktar: 150, birim: 'g', not: 'süzülmüş' },
      { ad: 'ekmek', miktar: 4, birim: 'dilim', not: 'küp doğranmış' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı', not: '2 kaşığı kruton için' },
      { ad: 'sarımsak tozu', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu' },
      { ad: 'hardal', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.25, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Krutonları tavada kızart',
        aciklama:
          'Küp doğranmış ekmekleri zeytinyağının 2 kaşığı ve sarımsak tozuyla harmanla. Geniş tavada orta ateşte, her yüzü altın rengi alana dek çevirerek kızart ve kağıt havluya al.',
        sureSn: 360,
      },
      {
        baslik: 'Limonlu hardal sosunu çırp',
        aciklama:
          'Kalan zeytinyağını limon suyu, hardal, tuz ve karabiberle küçük bir kasede, sos hafifçe koyulaşana kadar çatalla çırp.',
      },
      {
        baslik: 'Salatayı birleştir',
        aciklama:
          'Elle koparılmış marul yapraklarını ve süzülmüş mısırı geniş bir kaba al, sosu gezdirip harmanla. Krutonları en son ekleyip bir kez karıştırarak hemen servis et; çıtırlığı kaybolmadan tüket.',
      },
    ],
    pufNoktasi:
      'Marulu bıçakla kesmek yerine elle koparın ve servise dek buzlu suda bekletin; yapraklar cam gibi dik ve çıtır kalır.',
  },
  {
    id: 'cevizli-gavurdagi',
    baslik: 'Cevizli Gavurdağı',
    altBaslik: 'İncecik doğranmış domates, soğan ve cevizin nar ekşisiyle buluştuğu Antep klasiği',
    kategori: 'salata',
    koleksiyonlar: ['misafir', 'fit'],
    emoji: '🍅',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 160,
    beslenmeEtiketleri: ['vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'domates', miktar: 4, birim: 'adet', not: 'sıkı etli, çekirdeği alınmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet' },
      { ad: 'ceviz içi', miktar: 50, birim: 'g', not: 'iri kırılmış' },
      { ad: 'nar ekşisi', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'sumak', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri incecik doğra',
        aciklama:
          'Domateslerin çekirdekli sulu kısmını ayıklayıp etli kısmını minik küpler halinde doğra. Soğanı, sivri biberi ve maydanozu da mümkün olan en ince şekilde kıy; bu salatanın kimliği bıçak işçiliğidir.',
      },
      {
        baslik: 'Sosuyla harmanla',
        aciklama:
          'Doğranmış sebzeleri geniş bir kapta nar ekşisi, zeytinyağı, sumak ve tuzla nazikçe karıştır. Ceviz kırığının çoğunu ekleyip bir kez daha harmanla.',
      },
      {
        baslik: 'Kısa dinlendirip servis et',
        aciklama:
          'Salatayı tatların kaynaşması için tezgahta dinlendir. Servis tabağına alıp kalan cevizi üzerine serp; kebapların ve ızgaraların yanında soğuk servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Domates çekirdeklerini atmayıp süzgeçten geçirin; süzülen o yoğun domates suyu nar ekşisiyle karışınca salatanın doğal sosu olur.',
  },
];
