import type { Tarif } from '@/types/tarif';

// Pilavlar ve bakliyat yemekleri — tencerenin gerçek klasikleri.
// Su oranları: bulgur 1:2, pirinç 1:1.5. Demlenme adımı pilavın olmazsa olmazı.
export const PILAV_BAKLIYAT: Tarif[] = [
  {
    id: 'sade-bulgur-pilavi',
    baslik: 'Sade Bulgur Pilavı',
    altBaslik: 'Tereyağında kavrulan pilavlık bulgurla tane tane açılan en temel Anadolu pilavı.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['101', 'tek-tencere'],
    emoji: '🍚',
    porsiyon: 4,
    hazirlikDk: 5,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 310,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'bulgur', miktar: 2, birim: 'su bardağı', not: 'pilavlık, yıkanıp süzülmüş' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 4, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', not: 'isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Bulguru kavur',
        aciklama:
          'Tereyağını tencerede erit, yıkanıp süzülmüş bulguru ekle. Orta ateşte, taneler yağı çekip hafif kokusu çıkana kadar 3-4 dakika karıştırarak kavur.',
        sureSn: 240,
      },
      {
        baslik: 'Sıcak suyu ekle',
        aciklama:
          'Sıcak suyu ve tuzu ekleyip bir kez karıştır. Kaynayınca kapağı kapat, ateşi en kısığa al.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Bulgur suyunu çekip yüzeyinde küçük delikler oluşana kadar kısık ateşte pişir. Bu sırada kapağı açıp karıştırma; taneler ezilir.',
        sureSn: 900,
      },
      {
        baslik: 'Demlendir',
        aciklama:
          'Ateşi kapat, kapağın altına kağıt havlu yerleştirip pilavı demlenmeye bırak. Buharı emen havlu taneleri birbirinden ayırır.',
        beklemeAdimi: true,
        sureSn: 600,
      },
      {
        baslik: 'Havalandır ve servis et',
        aciklama:
          'Pilavı kaşıkla alttan üste doğru nazikçe havalandır, istersen karabiber serpip sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Suyu her zaman sıcak ekle: soğuk su kavrulmuş taneyi şoklar ve pilav yapışkanlaşır. Kapak altındaki kağıt havlu ise buharı toplayıp tane tane dokunun sigortasıdır.',
  },
  {
    id: 'domatesli-bulgur-pilavi',
    baslik: 'Domatesli Bulgur Pilavı',
    altBaslik: 'Rendelenmiş taze domates ve salçayla pişen, kırmızısı iştah açan sulu bulgur klasiği.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍅',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 320,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'bulgur', miktar: 2, birim: 'su bardağı', not: 'pilavlık' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 4, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Soğan ve biberi kavur',
        aciklama:
          'Zeytinyağını tencerede ısıt; soğanı ve sivri biberi orta ateşte, soğanlar şeffaflaşana kadar 4-5 dakika kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Domatesi pişir',
        aciklama:
          'Salçayı ekleyip kokusu çıkana kadar 1 dakika çevir. Rendelenmiş domatesi dök, suyunu hafifçe çekene kadar 3-4 dakika pişir.',
        sureSn: 240,
      },
      {
        baslik: 'Bulguru ekle',
        aciklama:
          'Bulguru ekleyip domatesli harçla 2 dakika kavur. Sıcak suyu ve tuzu ekle, bir kez karıştırıp kapağı kapat.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kaynadıktan sonra ateşi kıs; bulgur suyunu tamamen çekene kadar kapağı açmadan pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Demlendir',
        aciklama: 'Ateşi kapat, pilavı kapağı kapalı halde demlenmeye bırak; sonra havalandırıp servis et.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Domatesi bulgurdan önce iyice pişirip suyunu uçur; çiğ kalan domates pilava ekşimsi bir tat ve lapa bir doku bırakır. Ayran ve cacıkla efsane ikilidir.',
  },
  {
    id: 'sebzeli-bulgur-pilavi',
    baslik: 'Sebzeli Bulgur Pilavı',
    altBaslik: 'Havuç, kabak ve biberle renklenen, tek başına ana yemek olacak kadar doyurucu pilav.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🥕',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'bulgur', miktar: 2, birim: 'su bardağı', not: 'pilavlık' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'küçük küp doğranmış' },
      { ad: 'kabak', miktar: 1, birim: 'adet', not: 'küçük küp doğranmış' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 4, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri soteleyerek başla',
        aciklama:
          'Zeytinyağını tencerede ısıt; önce soğanı ve havucu 4 dakika, ardından kabağı ve kırmızı biberi ekleyip 3 dakika daha sotele.',
        sureSn: 420,
      },
      {
        baslik: 'Salçayı çevir',
        aciklama: 'Salçayı ekleyip kokusu çıkana kadar 1 dakika kavur; sebzelerin rengini kapatmadan hızlı çalış.',
      },
      {
        baslik: 'Bulguru ve suyu ekle',
        aciklama:
          'Bulguru ekleyip sebzelerle 2 dakika harmanla. Sıcak suyu, tuzu ve karabiberi ekle; bir kez karıştırıp kapağı kapat.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama: 'Kaynayınca ateşi en kısığa al; bulgur suyunu çekene kadar kapağı açmadan pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Demlendir',
        aciklama: 'Ocaktan al, kapağı açmadan demlenmeye bırak. Servisten önce alttan üste havalandır.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Kabağı sonradan eklemek dağılmadan diri kalmasını sağlar. Sebzeleri bulgurla aynı boyda küçük doğrarsan her kaşıkta dengeli bir lokma yakalarsın.',
  },
  {
    id: 'ic-pilav',
    baslik: 'İç Pilav',
    altBaslik: 'Kuş üzümü, çam fıstığı ve ciğerli klasik saray pilavı; tarçınla dengelenen kadim tat.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['misafir', 'osmanli'],
    emoji: '🍚',
    porsiyon: 6,
    hazirlikDk: 25,
    pisirmeDk: 30,
    zorluk: 'orta',
    kaloriPerPorsiyon: 420,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'pirinç', miktar: 2, birim: 'su bardağı', not: 'baldo, tuzlu ılık suda bekletilmiş' },
      { ad: 'kuzu ciğeri', miktar: 200, birim: 'g', not: 'zarı alınmış, küçük küp doğranmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'çok ince doğranmış' },
      { ad: 'çam fıstığı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'kuş üzümü', miktar: 2, birim: 'yemek kaşığı', not: 'ılık suda 10 dk bekletilmiş' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'dereotu', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış, servis için' },
    ],
    adimlar: [
      {
        baslik: 'Pirinci beklet',
        aciklama:
          'Pirinci tuzlu ılık suda bekletip nişastası çıkana kadar birkaç kez yıka, süzgeçte iyice süz.',
        beklemeAdimi: true,
        sureSn: 600,
      },
      {
        baslik: 'Fıstığı ve soğanı kavur',
        aciklama:
          'Tereyağının 2 kaşığını tencerede erit; çam fıstığını pembeleşene kadar çevir, soğanları ekleyip şeffaflaşana kadar 5-6 dakika kavur.',
        sureSn: 360,
      },
      {
        baslik: 'Ciğeri sotele',
        aciklama:
          'Kalan tereyağını ekleyip küp ciğerleri yüksek ateşte 2-3 dakika, rengi dönene kadar sotele. Ciğeri uzun pişirme sertleştirir; kısa tut.',
        sureSn: 180,
      },
      {
        baslik: 'Pirinç ve baharatı ekle',
        aciklama:
          'Süzülmüş pirinci ekleyip taneler şeffaflaşana kadar 3 dakika kavur. Kuş üzümü, tarçın, karabiber, şeker ve tuzu ekleyip harmanla.',
      },
      {
        baslik: 'Suyla pişir',
        aciklama:
          'Sıcak suyu ekle, bir kez karıştırıp kapağı kapat. Kaynayınca ateşi en kısığa al ve pirinç suyunu çekene kadar pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Demlendir',
        aciklama:
          'Ateşi kapat, kapağın altına kağıt havlu koyup pilavı demlenmeye bırak. Servis öncesi dereotuyla harmanla.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Bir çay kaşığı şeker bu pilavın gizli imzasıdır: kuş üzümünün ekşiliğini yuvarlar, tarçınla köprü kurar. Ciğersiz yaparsan da aynı sırayı izle, tat dengesi bozulmaz.',
  },
  {
    id: 'sehriyeli-pirinc-pilavi',
    baslik: 'Şehriyeli Pirinç Pilavı',
    altBaslik: 'Kavrulmuş arpa şehriyesiyle nar gibi, Türk sofrasının değişmez tane tane pilavı.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['101', 'tek-tencere'],
    emoji: '🍚',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 350,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'pirinç', miktar: 2, birim: 'su bardağı', not: 'tuzlu ılık suda bekletilmiş' },
      { ad: 'şehriye', miktar: 0.5, birim: 'su bardağı', not: 'arpa şehriye' },
      { ad: 'tereyağı', miktar: 2.5, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Pirinci tuzlu suda beklet',
        aciklama:
          'Pirincin üzerini geçecek kadar ılık su koy, bir tutam tuz at ve beklet. Sonra suyu berraklaşana kadar yıkayıp süz.',
        beklemeAdimi: true,
        sureSn: 600,
      },
      {
        baslik: 'Şehriyeyi kızart',
        aciklama:
          'Tereyağını tencerede erit, şehriyeyi kısık-orta ateşte sürekli karıştırarak koyu kehribar rengini alana kadar kavur. Göz ayırma; şehriye saniyeler içinde yanar.',
        sureSn: 180,
      },
      {
        baslik: 'Pirinci kavur',
        aciklama:
          'Süzülmüş pirinci ekle, taneler birbirinden ayrılıp hafif şeffaflaşana kadar 3-4 dakika kavur.',
        sureSn: 240,
      },
      {
        baslik: 'Suyla pişir',
        aciklama:
          'Sıcak suyu ve tuzu ekle, bir kez karıştır. Kaynayınca kapağı kapat, ateşi en kısığa al ve su çekilene kadar pişir.',
        sureSn: 780,
      },
      {
        baslik: 'Demlendir ve havalandır',
        aciklama:
          'Ateşi kapat, kapak altına kağıt havlu yerleştirip demlenmeye bırak. Sonra kaşıkla nazikçe havalandırıp servis et.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Pilavın rengi şehriyede saklıdır: şehriye ne kadar dengeli kızarırsa pilav o kadar iştah açar. Tuzlu suda bekletme ise pirincin nişastasını atıp tane tane dokuyu garantiler.',
  },
  {
    id: 'nohutlu-pilav',
    baslik: 'Nohutlu Pilav',
    altBaslik: 'Haşlanmış nohutla zenginleşen esnaf lokantası klasiği; tek başına da yakışır',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['tek-tencere', 'ramazan'],
    emoji: '🍚',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 390,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'pirinç', miktar: 2, birim: 'su bardağı', not: 'tuzlu ılık suda bekletilip süzülmüş' },
      { ad: 'nohut', miktar: 1.5, birim: 'su bardağı', not: 'haşlanmış' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Pirinci kavur',
        aciklama:
          'Tereyağını tencerede erit, süzülmüş pirinci ekleyip orta ateşte taneler şeffaflaşana kadar 3-4 dakika kavur.',
        sureSn: 240,
      },
      {
        baslik: 'Nohutları ekle',
        aciklama:
          'Haşlanmış nohutları ekleyip pirinçle 1-2 dakika harmanla; nohutlar yağla parlayınca hazırsın.',
      },
      {
        baslik: 'Suyla pişir',
        aciklama:
          'Sıcak suyu ve tuzu ekle, bir kez karıştırıp kapağı kapat. Kaynayınca ateşi en kısığa al ve pirinç suyunu çekene kadar pişir.',
        sureSn: 780,
      },
      {
        baslik: 'Demlendir',
        aciklama:
          'Ateşi kapat, kapağı açmadan pilavı demlenmeye bırak. Karabiber serpip havalandırarak servis et.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Nohutu pilava haşlama suyundan bir kaşıkla birlikte eklersen taneler kurumaz, pilav esnaf usulü o dolgun tada kavuşur. Üstüne çekilmiş karabiber şart.',
  },
  {
    id: 'mercimekli-bulgur-pilavi',
    baslik: 'Mercimekli Bulgur Pilavı',
    altBaslik: 'Müceddere tarzı yeşil mercimekli bulgur; üzerinde tatlı tatlı yanmış soğanlarla.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🫘',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 360,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'bulgur', miktar: 1.5, birim: 'su bardağı', not: 'pilavlık' },
      { ad: 'yeşil mercimek', miktar: 1, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 3, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'zeytinyağı', miktar: 5, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 5, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'kimyon', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Mercimeği yarı haşla',
        aciklama:
          'Yeşil mercimeği 2 su bardağı sıcak suyla tencereye al; diri kalacak şekilde 15 dakika haşla, süz.',
        sureSn: 900,
      },
      {
        baslik: 'Soğanları karamelize et',
        aciklama:
          'Zeytinyağının tamamını geniş tavada ısıt; piyazlık soğanları önce orta, sonra kısık ateşte koyu kahverengiye dönene kadar 15 dakika kavur. Üçte birini servis için ayır.',
        sureSn: 900,
      },
      {
        baslik: 'Bulguru ve mercimeği birleştir',
        aciklama:
          'Tencereye tavadaki soğanları, bulguru ve süzülmüş mercimeği ekle. Kimyon, karabiber ve tuzla harmanla; 3 su bardağı sıcak suyu ekle.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama: 'Kaynayınca kapağı kapat, ateşi en kısığa al; bulgur suyunu çekene kadar pişir.',
        sureSn: 780,
      },
      {
        baslik: 'Demlendir',
        aciklama:
          'Ateşi kapat ve demlenmeye bırak. Servis tabağında üzerini ayırdığın karamelize soğanla taçlandır.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Bu pilavın karakteri soğanın renginde: kahverengiye kaçmayan soğan tatlılığını veremez, yanan soğan acılaşır. Sabırlı ve kısık ateş en doğru yoldur; yanına yoğurt çok yakışır.',
  },
  {
    id: 'firik-pilavi',
    baslik: 'Firik Pilavı',
    altBaslik: 'Antep sofralarının isli kokulu firik bulguruyla, nohutlu ve bol yeşillikli yöresel pilav.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🌾',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 370,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'firik bulguru', miktar: 2, birim: 'su bardağı', not: 'ayıklanıp yıkanmış' },
      { ad: 'nohut', miktar: 1, birim: 'su bardağı', not: 'haşlanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 4, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'kıyılmış, servis için' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı kavur',
        aciklama:
          'Zeytinyağını tencerede ısıt, soğanı şeffaflaşana kadar 4-5 dakika kavur. Salçayı ekleyip kokusu çıkana kadar çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Firiği kavur',
        aciklama:
          'Yıkanmış firik bulgurunu ekleyip yağı çekene kadar 3 dakika kavur; isli aroması bu adımda açılır.',
        sureSn: 180,
      },
      {
        baslik: 'Nohut ve suyu ekle',
        aciklama:
          'Haşlanmış nohutları, tuzu, pul biberi ve sıcak suyu ekle. Bir kez karıştırıp kapağı kapat.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kaynayınca ateşi kıs; firik yumuşayıp suyunu çekene kadar pişir. Firik normal bulgurdan biraz daha uzun sürede pişer, acele etme.',
        sureSn: 1200,
      },
      {
        baslik: 'Demlendir',
        aciklama:
          'Ateşi kapat ve pilavı kapağı açmadan demlenmeye bırak. Kıyılmış maydanozla harmanlayıp servis et.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Firik, hasatta sütlü haldeyken ateşte ütülen buğdaydır; is kokusu markasıdır. Bu aromayı boğmamak için baharatı az tut, tazeliği maydanozla yakala.',
  },
  {
    id: 'ozbek-pilavi',
    baslik: 'Özbek Pilavı',
    altBaslik: 'Kuşbaşı et, havuç ve bütün sarımsakla katmanlanan, düğün sofralarının etli pilavı.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['tek-tencere', 'misafir'],
    emoji: '🍚',
    porsiyon: 6,
    hazirlikDk: 20,
    pisirmeDk: 70,
    zorluk: 'orta',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'pirinç', miktar: 2, birim: 'su bardağı', not: 'ılık suda bekletilip süzülmüş' },
      { ad: 'kuşbaşı et', miktar: 500, birim: 'g', not: 'dana ya da kuzu' },
      { ad: 'havuç', miktar: 3, birim: 'adet', not: 'kalın çubuk doğranmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'yarım ay doğranmış' },
      { ad: 'sarımsak', miktar: 6, birim: 'diş', not: 'soyulmadan, bütün' },
      { ad: 'ayçiçek yağı', miktar: 5, birim: 'yemek kaşığı' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'kuru üzüm', miktar: 2, birim: 'yemek kaşığı', not: 'isteğe bağlı' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Eti mühürle',
        aciklama:
          'Yağı geniş ve kalın tabanlı tencerede iyice kızdır; kuşbaşı etleri yüksek ateşte her yüzü kahverengileşene kadar 5-6 dakika mühürle.',
        sureSn: 360,
      },
      {
        baslik: 'Soğan ve havucu ekle',
        aciklama:
          'Soğanları ekleyip 4 dakika kavur, ardından çubuk havuçları ekle ve 5 dakika daha çevir. Havucun bol olması bu pilavın kimliğidir.',
        sureSn: 540,
      },
      {
        baslik: 'Eti yumuşat',
        aciklama:
          'Kimyon, karabiber ve tuzu serp; etin üzerini bir parmak geçecek kadar sıcak su ekle. Kapağı kapat, kısık ateşte et yumuşayana kadar pişir.',
        sureSn: 1800,
      },
      {
        baslik: 'Pirinci sermele',
        aciklama:
          'Süzülmüş pirinci karıştırmadan etin üzerine yay, bütün sarımsakları ve istersen kuru üzümü pirincin içine gömüp kalan sıcak suyu kenardan ekle.',
      },
      {
        baslik: 'Katmanlı pişir',
        aciklama:
          'Kapağı kapat, kısık ateşte pirinç suyunu çekene kadar karıştırmadan pişir. Katmanlar servise kadar bozulmamalı.',
        sureSn: 1080,
      },
      {
        baslik: 'Demlendir ve ters çevir',
        aciklama:
          'Ateşi kapat, demlenmeye bırak. Servis tabağına önce pirinç, üstüne havuç ve etler gelecek şekilde kepçeyle katman katman aktar.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Bu pilavda kaşık yasak: pirinç ete karışmadan buharla piştiği için taneler etin suyunu emerek lezzetlenir ama lapalaşmaz. Bütün sarımsak da ezilmeden tatlı bir aroma bırakır.',
  },
  {
    id: 'barbunya-pilaki',
    baslik: 'Barbunya Pilaki',
    altBaslik: 'Havuç ve patatesle zeytinyağında pişip soğuk servis edilen nazlı Ege klasiği.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🫘',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 60,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 300,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'barbunya (kuru)', miktar: 2, birim: 'su bardağı', not: 'bir gece suda bekletilmiş' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', not: 'dilimlenmiş' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 100, birim: 'ml' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'servis için' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Barbunyayı ön haşla',
        aciklama:
          'Bir gece ıslattığın barbunyayı süz, tencerede üzerini geçen suyla 20 dakika haşlayıp süzgece al. Bu ön haşlama hem pişmeyi hızlandırır hem hazmı kolaylaştırır.',
        sureSn: 1200,
      },
      {
        baslik: 'Sebzeleri sotele',
        aciklama:
          'Zeytinyağını tencerede ısıt; soğanı 3 dakika, ardından sarımsak, havuç ve patatesi ekleyip 4 dakika daha sotele.',
        sureSn: 420,
      },
      {
        baslik: 'Domatesli sosu kur',
        aciklama:
          'Salçayı çevirip rendelenmiş domatesi ekle, 3 dakika pişir. Barbunyayı, şekeri, tuzu ve sıcak suyu ekle.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kapağı kapat, barbunyalar iyice yumuşayıp sos hafif koyulaşana kadar kısık ateşte pişir. Ara ara tencereyi sallayarak karıştır, kaşık taneleri ezebilir.',
        sureSn: 1800,
      },
      {
        baslik: 'Tencerede dinlendir',
        aciklama:
          'Ateşi kapat, kapağı kapalı halde dinlendir; pilaki soğudukça lezzeti oturur. Maydanoz ve limon dilimleriyle oda sıcaklığında servis et.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Pilakinin sırrı acele etmemek: kısık ateş ve sallayarak karıştırma taneleri bütün tutar. Bir tutam şeker domatesin asidini kırar, ertesi gün buzdolabından çıkan pilaki daha da lezzetlidir.',
  },
  {
    id: 'salcali-nohut',
    baslik: 'Salçalı Nohut Yemeği',
    altBaslik: 'Etsiz ama bol soslu; iki salçayla derinleşen, pilav üstü efsanesi ev yemeği.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['tek-tencere', 'ramazan'],
    emoji: '🫘',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 320,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'nohut', miktar: 3, birim: 'su bardağı', not: 'haşlanmış (yaklaşık 1.5 su bardağı kurudan)' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kimyon', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak; varsa nohut haşlama suyu' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı yumuşat',
        aciklama:
          'Zeytinyağını tencerede ısıt; soğanı orta ateşte şeffaflaşana kadar 5 dakika kavur, sarımsağı ekleyip 1 dakika daha çevir.',
        sureSn: 360,
      },
      {
        baslik: 'Salçaları aç',
        aciklama:
          'İki salçayı da ekleyip kokuları çıkana kadar 2 dakika kavur; pul biberi ve kimyonu yağa değdirip hemen suyu ekle. Baharat yağda açılır ama saniyeler içinde yanar.',
        sureSn: 150,
      },
      {
        baslik: 'Nohutları pişir',
        aciklama:
          'Haşlanmış nohutları ve tuzu ekle. Kaynayınca ateşi kıs, kapağı arala ve sos koyulaşıp nohutların üzerine yapışana kadar pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ocaktan alıp 5 dakika dinlendir; sos bu arada iyice bağlar. Pilav üstü ya da yanına ekmekle sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Suyu nohut haşlama suyundan kullanmak yemeğe et suyu dolgunluğu verir; kimse etsiz olduğuna inanmaz. Sos koyulaşmadan ocaktan alma, bu yemeğin ruhu kıvamında saklı.',
  },
  {
    id: 'yesil-mercimek-yemegi',
    baslik: 'Yeşil Mercimek Yemeği',
    altBaslik: 'Havuçlu, patatesli ve bol sebzeli; kaşık kaşık yedirten hafif ama doyurucu tencere yemeği.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['tek-tencere', 'ramazan'],
    emoji: '🫘',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 280,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yeşil mercimek', miktar: 1.5, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'dilimlenmiş' },
      { ad: 'domates salçası', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'kimyon', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri kavur',
        aciklama:
          'Zeytinyağını tencerede ısıt; soğanı 3 dakika, ardından havuç ve sarımsağı ekleyip 3 dakika daha kavur.',
        sureSn: 360,
      },
      {
        baslik: 'Salça ve baharatı ekle',
        aciklama:
          'Salçayı kokusu çıkana kadar çevir; pul biber ve kimyonu serpip patatesi ekle, bir iki kez karıştır.',
      },
      {
        baslik: 'Mercimeği pişir',
        aciklama:
          'Yıkanmış mercimeği ve sıcak suyu ekle. Kaynayınca ateşi kıs, kapağı arala ve mercimekler yumuşayana kadar pişir.',
        sureSn: 1800,
      },
      {
        baslik: 'Tuzla ve kıvam ver',
        aciklama:
          'Tuzu pişmenin sonunda ekle; erken atılan tuz mercimeği sertleştirir. 5 dakika daha kaynatıp suyu hafif çektir.',
        sureSn: 300,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama: 'Ocaktan al, birkaç dakika dinlendir. Yanında bulgur pilavı ve turşuyla servis et.',
      },
    ],
    pufNoktasi:
      'Tuz en sona: mercimek tuzlu suda geç pişer ve kabuğu sertleşir. Suyu tamamen çektirme; bu yemek hafif sulu, kaşıkla yenen kıvamında en lezzetlisidir.',
  },
  {
    id: 'meyhane-pilavi',
    baslik: 'Meyhane Pilavı',
    altBaslik: 'Bulgur ve yeşil mercimeğin acılı, naneli buluşması; Güneydoğu meyhane kültürü klasiği.',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍲',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 330,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'bulgur', miktar: 1.5, birim: 'su bardağı', not: 'pilavlık' },
      { ad: 'yeşil mercimek', miktar: 0.5, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'biber salçası', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Mercimeği yarı haşla',
        aciklama:
          'Mercimeği 2 su bardağı sıcak suyla 15 dakika, diri kalacak şekilde haşlayıp süz.',
        sureSn: 900,
      },
      {
        baslik: 'Soğan ve biberi kavur',
        aciklama:
          'Zeytinyağını tencerede ısıt; soğanı ve sivri biberi 4-5 dakika kavur. Biber salçasını ekleyip kokusu çıkana kadar çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Bulguru ekle',
        aciklama:
          'Bulguru ve süzülmüş mercimeği ekleyip 2 dakika harmanla. Pul biber, kuru nane ve tuzu serp; 3 su bardağı sıcak suyu ekle.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama: 'Kaynayınca kapağı kapat, ateşi en kısığa al; bulgur suyunu çekene kadar pişir.',
        sureSn: 780,
      },
      {
        baslik: 'Demlendir',
        aciklama:
          'Ateşi kapat, kapağı açmadan demlenmeye bırak. Havalandırıp yanında ayran ya da cacıkla servis et.',
        beklemeAdimi: true,
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Kuru naneyi ocaktan almadan hemen önce bir tutam daha serpersen kokusu tabağa taze taşınır. Acı sevenler salçanın yanına bir çay kaşığı daha pul biber ekleyebilir.',
  },
];
