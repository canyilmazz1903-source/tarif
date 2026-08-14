import type { Tarif } from '@/types/tarif';

// Osmanlı saray mutfağı — ana yemekler, çorbalar ve saray pilavları.
// Tarihi notlar temkinli tutuldu: emin olunmayan yerde "Osmanlı saray mutfağından" kalıbı kullanıldı.
// Tatlı-ekşi denge (bal + sirke / kuru meyve) bu mutfağın imzasıdır; ölçüler ev tenceresine uyarlandı.
export const OSMANLI_YEMEKLER: Tarif[] = [
  {
    id: 'mutancana',
    baslik: 'Mutancana',
    altBaslik: 'Osmanlı saray mutfağından, kuru erik ve kayısıyla tatlandırılan tarihi et yemeği.',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli-saray', 'misafir'],
    emoji: '🍖',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 75,
    zorluk: 'orta',
    kaloriPerPorsiyon: 520,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 600, birim: 'g', not: 'kuzu ya da dana, iri kuşbaşı' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'kuru erik', miktar: 10, birim: 'adet', not: 'çekirdeksiz' },
      { ad: 'kuru kayısı', miktar: 8, birim: 'adet', not: 'ikiye bölünmüş' },
      { ad: 'kuru üzüm', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 2.5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Eti mühürle',
        aciklama:
          'Tereyağını geniş bir tencerede erit, kuşbaşı eti yüksek ateşte tüm yüzeyleri renk alana kadar 5-6 dakika çevirerek mühürle.',
        sureSn: 360,
      },
      {
        baslik: 'Soğanları kavur',
        aciklama:
          'Ateşi ortaya al, doğranmış soğanı etin yanına ekle. Soğanlar yumuşayıp hafif pembeleşene kadar birlikte kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Suyu ekleyip pişir',
        aciklama:
          'Sıcak suyu, tuzu ve karabiberi ekle. Kaynayınca kapağı kapat ve et yumuşayana kadar kısık ateşte pişir.',
        sureSn: 2700,
      },
      {
        baslik: 'Kuru meyveleri kat',
        aciklama:
          'Kuru erik, kayısı ve kuru üzümü tencereye ekle. Meyveler şişip sosu hafifçe koyulaştırana kadar kapağı yarı açık pişirmeye devam et.',
        sureSn: 900,
      },
      {
        baslik: 'Bal ve tarçınla tatlandır',
        aciklama:
          'Balı ve tarçını ekleyip nazikçe karıştır. 5 dakika daha pişirip tatlı-tuzlu dengesini kontrol et; gerekirse bir tutam tuzla düzelt.',
        sureSn: 300,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ateşi kapat ve tencereyi kapağı kapalı 10 dakika dinlendir; meyvelerin aroması sosa iyice geçsin. Sade pirinç pilavı eşliğinde sıcak servis et.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Kuru meyveleri en başta değil, et yumuşadıktan sonra ekle: erken giren erik dağılır ve yemek çorbalaşır. Bal en sonda girmeli; uzun kaynayan bal acılaşır.',
  },
  {
    id: 'mahmudiye',
    baslik: 'Mahmudiye',
    altBaslik: 'Osmanlı saray mutfağından, tavuğu kayısı ve bademle buluşturan tatlı-tuzlu klasik.',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli-saray', 'misafir'],
    emoji: '🍗',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 440,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 500, birim: 'g', not: 'iri kuşbaşı doğranmış' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'kuru kayısı', miktar: 10, birim: 'adet', not: 'ikiye bölünmüş' },
      { ad: 'badem', miktar: 50, birim: 'g', not: 'file ya da iri kıyılmış' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Bademleri kavur',
        aciklama:
          'Tereyağının yarısını tencerede erit, bademleri hafif pembeleşene kadar 2-3 dakika kavurup bir tabağa al; süsleme için kenarda beklet.',
        sureSn: 180,
      },
      {
        baslik: 'Tavukları soteleyin',
        aciklama:
          'Kalan tereyağını aynı tencereye ekle. Tavuk parçalarını yüksek ateşte her yüzü beyazlaşıp hafif renk alana kadar sotele.',
        sureSn: 300,
      },
      {
        baslik: 'Soğanı yumuşat',
        aciklama:
          'Piyazlık soğanı ekleyip ateşi ortaya al. Soğanlar şeffaflaşana kadar birlikte kavur; dibi tutmasın diye ara ara karıştır.',
        sureSn: 300,
      },
      {
        baslik: 'Kayısı ve üzümle pişir',
        aciklama:
          'Kayısı, kuş üzümü, tuz, karabiber ve sıcak suyu ekle. Kapağı kapatıp tavuk yumuşayana ve sos hafif çekene kadar kısık ateşte pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Bal ve limonla dengele',
        aciklama:
          'Balı, limon suyunu ve tarçını ekleyip karıştır. 5 dakika daha pişir; tat tavuğa işlesin, sos parlak bir kıvam alsın.',
        sureSn: 300,
      },
      {
        baslik: 'Bademle servis et',
        aciklama:
          'Yemeği servis tabağına al, kavrulmuş bademleri üzerine serp. Yanına sade pirinç pilavı çok yakışır.',
      },
    ],
    pufNoktasi:
      'Limon suyu bu yemeğin gizli dengesidir: balın tatlılığını keser ve yemeğin ağır kaçmasını önler. Bademi ayrı kavurup sonda eklersen çıtırlığını korur.',
  },
  {
    id: 'nirbac',
    baslik: 'Nirbaç',
    altBaslik: 'Osmanlı saray mutfağından, havuçla pişen ekşili-tatlı dengesiyle anılan et yemeği.',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli-saray'],
    emoji: '🥕',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 70,
    zorluk: 'orta',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 500, birim: 'g' },
      { ad: 'havuç', miktar: 4, birim: 'adet', not: 'kalın halkalar halinde' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'sirke', miktar: 2, birim: 'yemek kaşığı', not: 'üzüm sirkesi' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı', not: 'isteğe bağlı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Eti kavur',
        aciklama:
          'Tereyağını tencerede erit, kuşbaşı eti suyunu salıp çekene ve hafif renk alana kadar orta-yüksek ateşte kavur.',
        sureSn: 600,
      },
      {
        baslik: 'Soğanı ekle',
        aciklama:
          'Doğranmış soğanı ekleyip şeffaflaşana kadar 4-5 dakika birlikte kavur; tencerenin dibindeki lezzeti tahta kaşıkla kazı.',
        sureSn: 300,
      },
      {
        baslik: 'Eti yumuşat',
        aciklama:
          'Sıcak suyu, tuzu ve karabiberi ekle. Kapağı kapatıp et çatalla dağılacak kıvama yaklaşana kadar kısık ateşte pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Havuçları pişir',
        aciklama:
          'Havuç halkalarını ve istersen kuş üzümünü ekle. Havuçlar diriliğini kaybedip tatlanana kadar kapalı pişirmeye devam et.',
        sureSn: 900,
      },
      {
        baslik: 'Bal-sirke sosunu kat',
        aciklama:
          'Balı sirkeyle küçük bir kasede karıştırıp tencereye gezdir, tarçını serp. 5 dakika daha kaynatıp tatlı-ekşi dengesini yakala.',
        sureSn: 300,
      },
      {
        baslik: 'Dinlendir ve servis et',
        aciklama:
          'Ateşi kapat, 10 dakika kapaklı dinlendir. Bulgur pilavı ya da sade pilav eşliğinde sıcak servis et.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Havucu etle aynı anda atma: uzun pişen havuç ezilip sosu bulandırır. Sirkeyi balla önceden karıştırmak, tadın tek noktada keskinleşmesini önleyip sosa eşit dağıtır.',
  },
  {
    id: 'badem-corbasi',
    baslik: 'Badem Çorbası',
    altBaslik: 'Osmanlı saray mutfağından, dövülmüş bademle koyulaşan ipeksi ve zarif çorba.',
    kategori: 'corba',
    koleksiyonlar: ['osmanli-saray', 'misafir'],
    emoji: '🥣',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 290,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'badem', miktar: 150, birim: 'g', not: 'kabuksuz, beyaz' },
      { ad: 'pirinç', miktar: 2, birim: 'yemek kaşığı', not: 'yıkanmış' },
      { ad: 'süt', miktar: 2, birim: 'su bardağı' },
      { ad: 'su', miktar: 2.5, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'krema', miktar: 0.5, birim: 'su bardağı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.25, birim: 'çay kaşığı', not: 'taze çekilmiş' },
    ],
    adimlar: [
      {
        baslik: 'Bademleri haşla',
        aciklama:
          'Bademlerin bir avucunu süsleme için ayır. Kalanını pirinçle birlikte sıcak suda, pirinç iyice yumuşayana kadar kısık ateşte haşla.',
        sureSn: 1200,
      },
      {
        baslik: 'Çorbayı pürüzsüzleştir',
        aciklama:
          'Tencereyi ateşten al, karışımı el blenderiyle hiç tane kalmayana kadar çek. Telaşlanma; badem önce grenli durur, çektikçe ipeksileşir.',
      },
      {
        baslik: 'Sütle aç',
        aciklama:
          'Sütü azar azar ekleyerek karıştır ve tencereyi tekrar kısık ateşe al. Kaynatmadan, çorba kaşığın arkasını kaplayacak kıvama gelene kadar pişir.',
        sureSn: 480,
      },
      {
        baslik: 'Krema ve tereyağını kat',
        aciklama:
          'Kremayı ve tereyağını ekle, tuzuyla tatlandır. 2-3 dakika daha karıştırarak ısıt; kaynatma, süt kesilebilir.',
        sureSn: 180,
      },
      {
        baslik: 'Kavrulmuş bademle süsle',
        aciklama:
          'Ayırdığın bademleri kuru tavada pembeleşene kadar kavurup iri kıy. Çorbayı kaselere paylaştır, üzerine badem ve karabiber serperek servis et.',
      },
    ],
    pufNoktasi:
      'Pirinç bu çorbanın doğal bağlayıcısıdır; unsuz kıvam almanın saray usulü sırrı budur. Bademi blenderdan geçirdikten sonra telden süzersen kadife gibi bir doku elde edersin.',
  },
  {
    id: 'perde-pilavi',
    baslik: 'Perde Pilavı',
    altBaslik: 'Osmanlı sofra geleneğinden, iç pilavı ince hamur perdesiyle örten gösterişli tarif.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['osmanli-saray', 'misafir'],
    emoji: '🥧',
    porsiyon: 6,
    hazirlikDk: 45,
    pisirmeDk: 60,
    zorluk: 'orta',
    kaloriPerPorsiyon: 560,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 2.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'yoğurt', miktar: 2, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'tavuk but', miktar: 400, birim: 'g', grup: 'İç pilavı için', not: 'haşlanıp didiklenmiş' },
      { ad: 'pirinç', miktar: 2, birim: 'su bardağı', grup: 'İç pilavı için', not: 'ılık tuzlu suda bekletilmiş' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'çam fıstığı', miktar: 2, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'kuş üzümü', miktar: 2, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', grup: 'İç pilavı için', not: 'tavuk haşlama suyu da olur' },
      { ad: 'badem', miktar: 60, birim: 'g', grup: 'Kalıp için', not: 'bütün, kabuksuz' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Kalıp için', not: 'kalıbı yağlamak için' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Un, yumurta, yoğurt, zeytinyağı ve tuzu kulak memesi yumuşaklığında bir hamur olana kadar yoğur. Üzerini örtüp dinlenmeye bırak.',
        beklemeAdimi: true,
        sureSn: 1800,
      },
      {
        baslik: 'Fıstığı ve üzümü kavur',
        aciklama:
          'Tereyağını tencerede erit, çam fıstığını pembeleşene kadar kavur. Kuş üzümünü ekleyip yarım dakika çevir.',
        sureSn: 180,
      },
      {
        baslik: 'İç pilavı pişir',
        aciklama:
          'Süzülmüş pirinci ekleyip 3-4 dakika kavur. Suyu, tuzu, karabiberi ve tarçını kat; su çekilene kadar kısık ateşte pişir. Didiklenmiş tavuğu karıştırıp ateşi kapat.',
        sureSn: 1080,
      },
      {
        baslik: 'Pilavı soğut',
        aciklama:
          'Pilavı geniş bir tepsiye yayıp ılınmaya bırak. Sıcak pilav hamur perdesini hamurlaştırır; bu bekleme atlanmamalı.',
        beklemeAdimi: true,
        sureSn: 900,
      },
      {
        baslik: 'Kalıbı hazırla',
        aciklama:
          'Kek kalıbını ya da orta boy cam kaseyi tereyağıyla iyice yağla, bütün bademleri tabana ve kenarlara yapıştırarak diz.',
      },
      {
        baslik: 'Perdeyi ser',
        aciklama:
          'Hamuru 3-4 mm kalınlığında, kalıptan taşacak genişlikte aç. Bademleri oynatmadan kalıba yerleştir; kenarlardan sarkan hamur dışarıda kalsın.',
      },
      {
        baslik: 'Doldur ve kapat',
        aciklama:
          'Ilık pilavı hamurun içine bastırarak doldur. Sarkan kenarları ortada birleştirip iyice yapıştır; perde hiçbir yerden açık kalmasın.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 180 derece fırında, üzeri belirgin şekilde kızarana kadar pişir. Hamur her yerden altın rengi olmalı.',
        sureSn: 2100,
      },
      {
        baslik: 'Ters çevirip aç',
        aciklama:
          '10 dakika dinlendirdikten sonra kalıbı servis tabağına ters çevir. Sofrada dilimleyince perdenin altından pilav görünsün.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Perdenin çıtırlığı iki şeye bağlı: pilavın ılık doldurulması ve hamurun her yerinin eşit incelikte açılması. Kalıptan çıkarmadan önceki 10 dakikalık dinlenme, perdenin kırılmadan ayrılmasını sağlar.',
  },
  {
    id: 'patlicanli-osmanli-pilavi',
    baslik: 'Patlıcanlı Osmanlı Pilavı',
    altBaslik: 'Osmanlı saray mutfağından, kızarmış patlıcanla harmanlanan baharatlı pilav.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['osmanli-saray', 'misafir'],
    emoji: '🍆',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 420,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'pirinç', miktar: 2, birim: 'su bardağı', not: 'ılık tuzlu suda 20 dk bekletilmiş' },
      { ad: 'patlıcan', miktar: 2, birim: 'adet', not: 'alacalı soyulmuş, küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 5, birim: 'yemek kaşığı' },
      { ad: 'çam fıstığı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Patlıcanları kızart',
        aciklama:
          'Küp patlıcanları tuzlu suda 10 dakika bekletip kurula. Zeytinyağının 3 kaşığında, her yüzü kızarana kadar yüksek ateşte kızartıp süzgeçli kepçeyle al.',
        sureSn: 480,
      },
      {
        baslik: 'Fıstık ve soğanı kavur',
        aciklama:
          'Kalan zeytinyağını aynı tencereye ekle. Çam fıstığını pembeleştir, soğanı ekleyip şeffaflaşana kadar kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Pirinci kavur',
        aciklama:
          'Süzülmüş pirinci ekle, taneler ısınıp hafif matlaşana kadar 3-4 dakika karıştırarak kavur. Kuş üzümünü de kat.',
        sureSn: 240,
      },
      {
        baslik: 'Pilavı pişir',
        aciklama:
          'Sıcak suyu, tuzu, karabiberi ve tarçını ekle. Kaynayınca kapağı kapatıp suyunu çekene kadar kısık ateşte pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Patlıcanları kat ve demlendir',
        aciklama:
          'Ateşi kapat, kızarmış patlıcanları pilavın üzerine yay. Kapağın altına kağıt havlu koyup demlendir; sonra alttan üste nazikçe harmanla.',
        beklemeAdimi: true,
        sureSn: 900,
      },
    ],
    pufNoktasi:
      'Patlıcanı pilavla birlikte pişirme; sonda katıp demlendirmek küplerin formunu korur, pilavı da lekelemez. Tarçın bu pilavın saray imzasıdır, atlamamalı.',
  },
  {
    id: 'kavun-dolmasi',
    baslik: 'Kavun Dolması',
    altBaslik: 'Osmanlı saray mutfağından, kavunun içine etli-pirinçli iç doldurulan şaşırtıcı dolma.',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli-saray', 'misafir'],
    emoji: '🍈',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 60,
    zorluk: 'zor',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'kavun', miktar: 1, birim: 'adet', not: 'orta boy, çok olgun olmayan' },
      { ad: 'kıyma', miktar: 300, birim: 'g' },
      { ad: 'pirinç', miktar: 0.5, birim: 'su bardağı', not: 'haşlanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'badem', miktar: 40, birim: 'g', not: 'iri kıyılmış' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'bal', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', not: 'tepsinin dibi için' },
    ],
    adimlar: [
      {
        baslik: 'Kavunu oy',
        aciklama:
          'Kavunun tepesinden kapak keser gibi bir dilim al, çekirdeklerini kaşıkla temizle. İç etini 1,5 cm kalınlık bırakacak şekilde oyup doğra; oyduklarını ayır.',
      },
      {
        baslik: 'Soğanı ve kıymayı kavur',
        aciklama:
          'Tereyağını tavada erit, soğanı şeffaflaşana kadar kavur. Kıymayı ekleyip suyunu salıp çekene kadar orta ateşte pişir.',
        sureSn: 600,
      },
      {
        baslik: 'İç harcını tamamla',
        aciklama:
          'Haşlanmış pirinci, kıyılmış bademi, kuş üzümünü, tarçını, tuzu ve karabiberi ekle. Ayırdığın kavun parçalarının yarısını ve balı katıp 2-3 dakika çevir.',
        sureSn: 180,
      },
      {
        baslik: 'Kavunu doldur',
        aciklama:
          'Harcı kavunun içine sıkıştırmadan doldur, kestiğin kapağı üzerine kapat. Kavunu derin bir fırın kabına oturt ve kabın dibine suyu dök.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 180 derece fırında, kavun bıçak batırınca yumuşamış hissedilene kadar pişir. Kavun dağılmadan formunu korumalı.',
        sureSn: 3000,
      },
      {
        baslik: 'Dinlendirip dilimle',
        aciklama:
          'Fırından çıkan dolmayı 10 dakika dinlendir. Sofrada dilim dilim keserek, her tabağa kabuğuyla birlikte servis et.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Kavun fazla olgun olursa fırında çöker; hafif diri, kokusu yeni çıkmış bir kavun seç. İç harca katılan kavun parçaları pişerken etli harcı meyveli bir sosla buluşturur.',
  },
  {
    id: 'visneli-yaprak-sarma',
    baslik: 'Vişneli Yaprak Sarma',
    altBaslik: 'Osmanlı saray mutfağından, pirinçli içi vişneyle ekşilendirilen zarif sarma.',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli-saray', 'misafir'],
    emoji: '🍒',
    porsiyon: 6,
    hazirlikDk: 50,
    pisirmeDk: 50,
    zorluk: 'zor',
    kaloriPerPorsiyon: 310,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [6, 7],
    malzemeler: [
      { ad: 'asma yaprağı', miktar: 300, birim: 'g', not: 'salamura ise tuzu alınmış' },
      { ad: 'pirinç', miktar: 1.5, birim: 'su bardağı', not: 'yıkanıp süzülmüş' },
      { ad: 'vişne', miktar: 300, birim: 'g', not: 'çekirdeği çıkarılmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 0.5, birim: 'çay bardağı' },
      { ad: 'çam fıstığı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'toz şeker', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Yaprakları hazırla',
        aciklama:
          'Salamura yaprakları kaynar suda 2-3 dakika haşlayıp soğuk suda yıka; taze yaprak kullanıyorsan sadece haşla. Saplarını kes ve süzülmeye bırak.',
        sureSn: 300,
      },
      {
        baslik: 'İç harcını kavur',
        aciklama:
          'Zeytinyağının yarısında çam fıstığını pembeleştir, soğanı ekleyip şeffaflaşana kadar kavur. Pirinci katıp 3-4 dakika çevir.',
        sureSn: 360,
      },
      {
        baslik: 'Vişneleri harca kat',
        aciklama:
          'Vişnelerin üçte ikisini, kuş üzümünü, şekeri, naneyi, tarçını ve tuzu ekle. Yarım su bardağı sıcak suyla pirinç suyu çekene kadar 5-6 dakika pişirip ateşi kapat, harcı ılıt.',
        sureSn: 360,
      },
      {
        baslik: 'Sarmaları sar',
        aciklama:
          'Her yaprağın mat yüzüne bir tatlı kaşığı harç koy, yanları içe kıvırıp sıkıca sar. Sarma kalınlığı serçe parmak kadar olursa pişince dağılmaz.',
      },
      {
        baslik: 'Tencereye diz',
        aciklama:
          'Tencerenin dibine yırtık yaprakları ser, sarmaları aralıksız diz. Kalan vişneleri aralarına serpiştir; kalan zeytinyağını ve limon suyunu gezdir.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Üzerine ters bir tabak kapat, kalan sıcak suyu tabağın kenarından dök. Kaynayınca ateşi kıs; pirinçler yumuşayana kadar kapaklı pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Tencerede soğut',
        aciklama:
          'Ateşi kapat ve sarmaları tencerede en az 20 dakika dinlendir. Ilık ya da oda sıcaklığında, aralara pişmiş vişneleri serperek servis et.',
        beklemeAdimi: true,
        sureSn: 1200,
      },
    ],
    pufNoktasi:
      'Vişnenin bir kısmını harca, bir kısmını dizerken aralara koymak iki ayrı lezzet katmanı yaratır: içtekiler pirince işler, üsttekiler ekşi bir sos bırakır. Ters tabak sarmaların açılmasını önler.',
  },
  {
    id: 'piruhi',
    baslik: 'Piruhi',
    altBaslik: 'Osmanlı mutfak geleneğinden, peynirli içle kapatılıp haşlanan hamur yemeği.',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli-saray'],
    emoji: '🥟',
    porsiyon: 4,
    hazirlikDk: 45,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 520,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'lor peyniri', miktar: 300, birim: 'g', grup: 'İçi için' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'İçi için', not: 'ince kıyılmış' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'ceviz içi', miktar: 50, birim: 'g', grup: 'Üzeri için', not: 'iri dövülmüş' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Un, yumurta, tuz ve ılık suyu pürüzsüz, orta sertlikte bir hamur olana kadar yoğur. Üzerini nemli bezle örtüp dinlendir.',
        beklemeAdimi: true,
        sureSn: 1800,
      },
      {
        baslik: 'İç harcını karıştır',
        aciklama:
          'Loru, kıyılmış maydanozu ve karabiberi bir kasede ezerek karıştır. Lor tuzluysa ekstra tuz ekleme.',
      },
      {
        baslik: 'Hamuru aç ve kes',
        aciklama:
          'Hamuru ikiye böl, unlu tezgahta 2 mm incelikte aç. Su bardağının ağzıyla ya da bıçakla 7-8 cm çapında daireler veya kareler kes.',
      },
      {
        baslik: 'Piruhileri kapat',
        aciklama:
          'Her parçanın ortasına bir tatlı kaşığı peynirli harç koy, kenarlarını suyla nemlendirip yarım ay şeklinde kapat. Kenarları çatalla bastırarak mühürle.',
      },
      {
        baslik: 'Kaynar suda haşla',
        aciklama:
          'Geniş tencerede tuzlu suyu kaynat. Piruhileri partiler halinde at; yüzeye çıktıktan sonra 3-4 dakika daha haşlayıp kevgirle al.',
        sureSn: 300,
      },
      {
        baslik: 'Cevizli yağı gezdir',
        aciklama:
          'Tereyağını küçük tavada köpürene kadar ısıt, naneyi ekleyip ocaktan al. Piruhilerin üzerine yağı gezdir, dövülmüş cevizi serpip sıcak servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Kenarların iyi kapanması her şeydir: minik bir açıklık haşlamada içi boşaltır. Kapatmadan önce kenarı parmakla nemlendir, çatalla bastır; ceviz-tereyağı ikilisi ise bu yemeğin tacıdır.',
  },
  {
    id: 'yalanci-dolma',
    baslik: 'Yalancı Dolma',
    altBaslik: 'Osmanlı saray mutfağından, etsiz iç harçla doldurulan zarif soğan dolması.',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli-saray'],
    emoji: '🧅',
    porsiyon: 4,
    hazirlikDk: 40,
    pisirmeDk: 45,
    zorluk: 'zor',
    kaloriPerPorsiyon: 300,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'soğan', miktar: 6, birim: 'adet', not: 'iri, oval olanlardan' },
      { ad: 'pirinç', miktar: 1, birim: 'su bardağı', not: 'yıkanıp süzülmüş' },
      { ad: 'zeytinyağı', miktar: 0.5, birim: 'çay bardağı' },
      { ad: 'çam fıstığı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'toz şeker', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'nar ekşisi', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Soğanları haşla',
        aciklama:
          'Soğanların kök kısmını kesip soy, her birine boydan tek derin çizik at. Kaynar tuzlu suda katmanlar gevşeyene kadar 8-10 dakika haşlayıp süz.',
        sureSn: 600,
      },
      {
        baslik: 'Katmanları ayır',
        aciklama:
          'Ilınan soğanların katmanlarını tek tek, yırtmadan ayır. En içteki küçük kısımları ince doğrayıp iç harç için ayır.',
      },
      {
        baslik: 'İç harcını hazırla',
        aciklama:
          'Zeytinyağının yarısında çam fıstığını ve doğranmış soğan içlerini kavur. Pirinci, kuş üzümünü, şekeri, tarçını, naneyi ve tuzu ekle; yarım bardak sıcak suyla 5 dakika pişirip ılıt.',
        sureSn: 600,
      },
      {
        baslik: 'Dolmaları sar',
        aciklama:
          'Her soğan katmanının içine bir tatlı kaşığı harç koy ve katmanı rulo gibi kapat. Kapanış yeri alta gelecek şekilde tencereye sıkıca diz.',
      },
      {
        baslik: 'Sos ile pişir',
        aciklama:
          'Kalan zeytinyağını, nar ekşisini, limon suyunu ve kalan sıcak suyu karıştırıp dolmaların üzerine dök. Üzerine ters tabak kapat, kaynayınca kısık ateşte pirinçler yumuşayana kadar pişir.',
        sureSn: 2100,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ateşi kapat, dolmaları tencerede 15 dakika dinlendir. Ilık servis et; üzerine kalan sostan bir kaşık gezdirmeyi unutma.',
        beklemeAdimi: true,
        sureSn: 900,
      },
    ],
    pufNoktasi:
      'Soğana atılan tek derin çizik, haşlanınca katmanların zarar görmeden sıyrılmasını sağlar. Nar ekşili sos hem soğanın tatlılığını dengeler hem de dolmalara parlak bir kehribar rengi verir.',
  },
  {
    id: 'sogan-yahnisi',
    baslik: 'Soğan Yahnisi',
    altBaslik: 'Osmanlı saray mutfağından, bol soğanı sirke ve balla dengelenen etli yahni.',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli-saray'],
    emoji: '🍲',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 90,
    zorluk: 'orta',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 600, birim: 'g', not: 'dana ya da kuzu' },
      { ad: 'soğan', miktar: 6, birim: 'adet', not: 'küçük boy; 4ü bütün, 2si doğranmış' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'sirke', miktar: 2, birim: 'yemek kaşığı', not: 'üzüm sirkesi' },
      { ad: 'bal', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'karanfil', miktar: 3, birim: 'adet' },
      { ad: 'tarçın', miktar: 0.25, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Eti mühürle',
        aciklama:
          'Tereyağını tencerede erit, eti yüksek ateşte tüm yüzeyleri kahverengileşene kadar mühürle. Bu kabuk, yahninin derin tadının temelidir.',
        sureSn: 420,
      },
      {
        baslik: 'Doğranmış soğanı kavur',
        aciklama:
          'Doğranmış iki soğanı ekleyip şeffaflaşana kadar kavur. Salçayı katıp kokusu çıkana kadar 1-2 dakika çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Eti pişirmeye al',
        aciklama:
          'Sıcak suyu, tuzu, karabiberi ve karanfilleri ekle. Kaynayınca kapağı kapat, et yumuşamaya yüz tutana kadar kısık ateşte pişir.',
        sureSn: 3000,
      },
      {
        baslik: 'Bütün soğanları ekle',
        aciklama:
          'Soyulmuş bütün soğanları tencereye yerleştir. Kapağı kapatıp soğanlar şeffaflaşıp tatlanana kadar pişirmeye devam et.',
        sureSn: 1500,
      },
      {
        baslik: 'Sirke ve balla tatlandır',
        aciklama:
          'Sirkeyi, balı ve tarçını ekleyip tencereyi hafifçe salla; karıştırırken bütün soğanları dağıtma. 10 dakika daha pişirip sosu koyulaştır.',
        sureSn: 600,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ateşi kapat, 10 dakika kapaklı dinlendir. Her tabağa bir bütün soğan gelecek şekilde, bol soslu servis et.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Bu yahninin ruhu bütün pişen soğanlardadır: küçük soğanları geç ekle ki lokum gibi olsun ama dağılmasın. Sirke-bal ikilisi Osmanlı yahnilerinin klasik ekşili-tatlı imzasıdır.',
  },
  {
    id: 'sebzeli-saray-guveci',
    baslik: 'Sebzeli Saray Güveci',
    altBaslik: 'Osmanlı saray mutfağından, yaz sebzeleriyle etin ağır ateşte buluştuğu güveç.',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli-saray'],
    emoji: '🥘',
    porsiyon: 6,
    hazirlikDk: 30,
    pisirmeDk: 100,
    zorluk: 'orta',
    kaloriPerPorsiyon: 410,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 500, birim: 'g' },
      { ad: 'patlıcan', miktar: 1, birim: 'adet', not: 'iri küp doğranmış' },
      { ad: 'kabak', miktar: 1, birim: 'adet', not: 'iri küp doğranmış' },
      { ad: 'taze fasulye', miktar: 150, birim: 'g', not: 'ayıklanıp ikiye kesilmiş' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'iri küp doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: '1i rendelenmiş, 1i dilimlenmiş' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Eti soğanla kavur',
        aciklama:
          'Zeytinyağının yarısını tencerede kızdır, eti mühürle. Soğanı ekleyip şeffaflaşana kadar kavur; salçayı katıp 1 dakika çevir.',
        sureSn: 600,
      },
      {
        baslik: 'Eti ön pişir',
        aciklama:
          'Sıcak suyu ekle, kapağı kapat ve et yumuşamaya başlayana kadar kısık ateşte pişir. Güvece girmeden yumuşamamış et, sebzeleri fırında bekletir.',
        sureSn: 2400,
      },
      {
        baslik: 'Sebzeleri harmanla',
        aciklama:
          'Patlıcan, kabak, fasulye, havuç ve patatesi geniş bir kapta kalan zeytinyağı, rendelenmiş domates, kekik, tuz ve karabiberle harmanla.',
      },
      {
        baslik: 'Güveci kur',
        aciklama:
          'Eti suyuyla birlikte güveç kabına ya da derin fırın kabına aktar. Sebzeleri üzerine yay, bütün sarımsak dişlerini aralara gizle, domates dilimlerini en üste diz.',
      },
      {
        baslik: 'Fırında ağır pişir',
        aciklama:
          'Kapağı ya da folyosu kapalı şekilde önceden ısıtılmış 180 derece fırında pişir. Son 15 dakika kapağı açıp üzerini hafif kızart.',
        sureSn: 3600,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Fırından çıkan güveci 10 dakika dinlendir; kaynayan suyu durulsun. Kabıyla sofraya taşıyıp sıcak servis et.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Sırrı iki aşamalı pişirmede: et tencerede yumuşadıktan sonra fırına girerse sebzelerle aynı anda kıvamını bulur. Kapalı pişirme buharı hapsedip güvece kendi suyunda derinlik kazandırır.',
  },
  {
    id: 'tavuklu-safranli-pilav',
    baslik: 'Tavuklu Safranlı Pilav',
    altBaslik: 'Osmanlı saray mutfağından, safranla sararan pirince tavuk ve bademin eşlik ettiği pilav.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['osmanli-saray', 'misafir'],
    emoji: '🍛',
    porsiyon: 5,
    hazirlikDk: 20,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 490,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'pirinç', miktar: 2, birim: 'su bardağı', not: 'ılık tuzlu suda 20 dk bekletilmiş' },
      { ad: 'tavuk göğsü', miktar: 400, birim: 'g', not: 'kuşbaşı doğranmış' },
      { ad: 'safran', miktar: 1, birim: 'tutam', not: 'tel safran' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'badem', miktar: 40, birim: 'g', not: 'file ya da iri kıyılmış' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Safranı demle',
        aciklama:
          'Safran tellerini yarım çay bardağı sıcak suda beklet; su kehribar rengine dönsün. Bu demleme, rengin ve kokunun tamamını pilava taşır.',
        beklemeAdimi: true,
        sureSn: 600,
      },
      {
        baslik: 'Bademi kavur',
        aciklama:
          'Tereyağının 1 kaşığında bademleri pembeleşene kadar kavurup tabağa al; servis için beklet.',
        sureSn: 180,
      },
      {
        baslik: 'Tavukları sotele',
        aciklama:
          'Kalan tereyağını tencereye ekle, tavuk parçalarını her yüzü hafif kızarana kadar yüksek ateşte sotele.',
        sureSn: 360,
      },
      {
        baslik: 'Pirinci kavur',
        aciklama:
          'Süzülmüş pirinci ve kuş üzümünü tavukların yanına ekle. Taneler ısınıp matlaşana kadar 3-4 dakika karıştırarak kavur.',
        sureSn: 240,
      },
      {
        baslik: 'Safranlı suyla pişir',
        aciklama:
          'Sıcak suyu, safranlı demleme suyunu, tuzu ve karabiberi ekle. Kaynayınca kapağı kapat, suyunu çekene kadar kısık ateşte pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Demlendir ve servis et',
        aciklama:
          'Ateşi kapat, kapağın altına kağıt havlu koyup pilavı demlendir. Havalandırıp servis tabağına al, kavrulmuş bademleri üzerine serp.',
        beklemeAdimi: true,
        sureSn: 900,
      },
    ],
    pufNoktasi:
      'Safranı asla doğrudan tencereye atma; sıcak suda demlemeden kullanılan safran rengini ve kokusunu tam veremez. Bir tutam yeter, fazlası pilava buruk bir tat bırakır.',
  },
];
