import type { Tarif } from '@/types/tarif';

// Çorbalar — ek editoryal set (12 klasik). Tamamı özgün metin, editör onaylı.
export const CORBALAR_EK: Tarif[] = [
  {
    id: 'iskembe-corbasi',
    baslik: 'İşkembe Çorbası',
    altBaslik: 'Sarımsaklı sirkesiyle gece yarısı klasiği; terbiyesi kesilmeden, lokanta kıvamında',
    kategori: 'corba',
    koleksiyonlar: ['misafir'],
    emoji: '🍲',
    porsiyon: 6,
    hazirlikDk: 20,
    pisirmeDk: 120,
    zorluk: 'orta',
    kaloriPerPorsiyon: 230,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'işkembe', miktar: 700, birim: 'g', not: 'temizlenmiş' },
      { ad: 'su', miktar: 2.5, birim: 'lt' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'bütün, haşlamaya' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'kabuğu yıkanmış, haşlamaya' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'un', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', not: 'sadece sarısı, terbiye için' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu, terbiye için' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'sarımsak', miktar: 6, birim: 'diş', grup: 'Sosu için' },
      { ad: 'sirke', miktar: 4, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
    ],
    adimlar: [
      {
        baslik: 'İşkembeyi haşla',
        aciklama:
          'Temizlenmiş işkembeyi bol soğuk suyla iki kez çalkala. Tencereye al; su, bütün soğan ve yarım limonla birlikte kaynat. Üstünde biriken köpüğü kevgirle al, kısık ateşte yumuşayana dek haşla.',
        sureSn: 6000,
      },
      {
        baslik: 'İnce ince doğra',
        aciklama:
          'Yumuşayan işkembeyi kevgirle suyundan al, ılınınca kesme tahtasında minik kareler halinde doğra. Haşlama suyunu süzüp tencereye geri koy; soğanla limonu at.',
      },
      {
        baslik: 'Unlu meyaneyi hazırla',
        aciklama:
          'Ayrı bir tencerede tereyağını erit, unu ekleyip kokusu çıkana kadar orta ateşte kavur. Süzülmüş haşlama suyundan kepçe kepçe ekleyerek pürüzsüz bir kıvam alana kadar çırp.',
        sureSn: 240,
      },
      {
        baslik: 'Çorbayı birleştir',
        aciklama:
          'Doğranmış işkembeyi meyaneli suya aktar, tuzu ekle. Kısık ateşte ara ara karıştırarak kaynat; kıvamı hafif koyulaşsın.',
        sureSn: 600,
      },
      {
        baslik: 'Terbiyeyi ekle',
        aciklama:
          'Kasede yumurta sarısını limon suyuyla çırp. Sıcak çorbadan bir kepçe ekleyip ılıklaştır, sonra ince bir şerit halinde tencereye dök. Bir taşım kaynatıp ocağı kapat.',
        sureSn: 120,
      },
      {
        baslik: 'Sarımsaklı sirkeyi sun',
        aciklama:
          'Ezilmiş sarımsağı sirkeyle karıştırıp küçük bir kasede sofraya koy. Çorbayı kaselere paylaştır; dileyen sirkeli sostan ve pul biberden eklesin.',
      },
    ],
    pufNoktasi:
      'Terbiyeyi doğrudan kaynayan çorbaya dökme; önce bir kepçe sıcak çorbayla ılıklaştırırsan yumurta kesilmez, çorba ipeksi kalır.',
  },
  {
    id: 'dugun-corbasi',
    baslik: 'Düğün Çorbası',
    altBaslik: 'Kuzu etli, yoğurt terbiyeli ve kızgın biberli yağıyla Anadolu düğünlerinin baş tacı',
    kategori: 'corba',
    koleksiyonlar: ['misafir', 'osmanli'],
    emoji: '🥘',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 100,
    zorluk: 'orta',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuzu incik', miktar: 500, birim: 'g', not: 'kemikli' },
      { ad: 'su', miktar: 2.5, birim: 'lt' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'bütün' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'un', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'yoğurt', miktar: 200, birim: 'g', grup: 'Terbiyesi için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Terbiyesi için', not: 'sadece sarısı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', grup: 'Terbiyesi için', not: 'suyu' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Eti haşla',
        aciklama:
          'Kuzu inciği soğuk suyla tencereye koy, bütün soğanı ekle ve kaynat. Köpüğünü ala ala kısık ateşte et kemiğinden ayrılana kadar pişir.',
        sureSn: 4800,
      },
      {
        baslik: 'Eti didikle, suyu süz',
        aciklama:
          'Etleri kevgirle çıkar, ılınınca kemiklerinden ayırıp küçük parçalar halinde didikle. Et suyunu süzüp ölçüsünü kontrol et; azaldıysa sıcak su ekleyerek 2 litreye tamamla.',
      },
      {
        baslik: 'Meyaneyi kavur',
        aciklama:
          'Tencerede tereyağını erit, unu ekle ve hafif pembeleşene kadar tahta kaşıkla kavur. Sıcak et suyunu kepçe kepçe ilave edip topaksız bir çorba tabanı elde et.',
        sureSn: 300,
      },
      {
        baslik: 'Etleri ekleyip kaynat',
        aciklama:
          'Didiklenmiş etleri ve tuzu tencereye al. Kısık ateşte, ara sıra karıştırarak kıvam alana kadar kaynat.',
        sureSn: 600,
      },
      {
        baslik: 'Terbiyesini yedir',
        aciklama:
          'Kasede yoğurt, yumurta sarısı ve limon suyunu çırp. Sıcak çorbadan birkaç kaşık ekleyerek ılıklaştır, sonra karıştıra karıştıra tencereye aktar. Kaynamaya bırakmadan bir iki dakika ısıt.',
        sureSn: 120,
      },
      {
        baslik: 'Kızgın yağla taçlandır',
        aciklama:
          'Küçük tavada tereyağını köpürene kadar kızdır, ocaktan alıp pul biberi ekle. Kaselere aldığın çorbanın üzerinde gezdirerek servis et.',
      },
    ],
    pufNoktasi:
      'Et suyunun berrak kalması çorbanın rengini belirler: kaynama başında köpüğü sabırla almadan kısık ateşe düşürme.',
  },
  {
    id: 'mahluta-corbasi',
    baslik: 'Mahluta Çorbası',
    altBaslik: 'Mercimekle bulgurun buluştuğu, naneli ve salçalı Güneydoğu klasiği',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'ramazan'],
    emoji: '🍛',
    porsiyon: 5,
    hazirlikDk: 10,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kırmızı mercimek', miktar: 1, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'bulgur', miktar: 0.5, birim: 'su bardağı', not: 'pilavlık' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1.5, birim: 'lt', not: 'sıcak' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'servis için dilimlenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı yumuşat',
        aciklama:
          'Tencerede zeytinyağını ısıt; doğranmış soğanı ve ezilmiş sarımsağı pembeleşene kadar orta ateşte kavur.',
        sureSn: 240,
      },
      {
        baslik: 'Salçaları çevir',
        aciklama:
          'Biber ve domates salçasını ekleyip kokuları açılana kadar bir iki dakika çevir; dibinin tutmaması için sürekli karıştır.',
        sureSn: 90,
      },
      {
        baslik: 'Mercimek ve bulguru ekle',
        aciklama:
          'Yıkanmış mercimekle bulguru tencereye al, sıcak suyu üzerine dök. Kaynayınca ateşi kıs.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Mercimekler dağılıp bulgur yumuşayana kadar arada karıştırarak pişir. Tuzunu, nanesini ve pul biberini son beş dakikada ekle.',
        sureSn: 1800,
      },
      {
        baslik: 'Dinlendirip sun',
        aciklama:
          'Ocağı kapatıp kapağı kapalı şekilde beş dakika dinlendir; kıvamı oturur. Limon dilimleriyle sıcak servis et.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Bulguru mercimekle aynı anda atıp fazla pişirirsen çorba lapalaşır; kıvamı koyulaşırsa servisten önce az sıcak suyla aç.',
  },
  {
    id: 'arabasi-corbasi',
    baslik: 'Arabaşı Çorbası',
    altBaslik: 'Bol tavuklu, acılı çorbanın yanında kayan hamur lokmalarıyla İç Anadolu geleneği',
    kategori: 'corba',
    koleksiyonlar: ['misafir'],
    emoji: '🍜',
    porsiyon: 6,
    hazirlikDk: 25,
    pisirmeDk: 75,
    zorluk: 'orta',
    kaloriPerPorsiyon: 280,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2],
    malzemeler: [
      { ad: 'tavuk but', miktar: 600, birim: 'g', grup: 'Çorbası için' },
      { ad: 'su', miktar: 2.5, birim: 'lt', grup: 'Çorbası için' },
      { ad: 'un', miktar: 3, birim: 'yemek kaşığı', grup: 'Çorbası için' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Çorbası için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Çorbası için' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Çorbası için' },
      { ad: 'pul biber', miktar: 2, birim: 'çay kaşığı', grup: 'Çorbası için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'Çorbası için' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı', grup: 'Çorbası için' },
      { ad: 'limon', miktar: 1, birim: 'adet', grup: 'Çorbası için', not: 'suyu' },
      { ad: 'un', miktar: 3, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 4, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
    ],
    adimlar: [
      {
        baslik: 'Tavuğu haşla',
        aciklama:
          'Tavuk butlarını suyla tencereye al, köpüğünü alarak yumuşayana kadar haşla. Etleri ayıkla, didikle; suyunu süzüp kenara al.',
        sureSn: 2700,
      },
      {
        baslik: 'Arabaşı hamurunu pişir',
        aciklama:
          'Un, su ve tuzu soğukken tencerede pürüzsüzce çırp. Orta ateşte sürekli karıştırarak muhallebi kıvamında, tencereyi bırakan bir hamur elde et.',
        sureSn: 600,
      },
      {
        baslik: 'Hamuru tepsiye dök',
        aciklama:
          'Sıcak hamuru hafif ıslatılmış geniş bir tepsiye yayıp düzle. Oda sıcaklığında tamamen soğuyup kesilecek sertliğe gelene kadar beklet.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Çorba tabanını hazırla',
        aciklama:
          'Tencerede tereyağını erit, unu kavur; salçaları ekleyip kokusu çıkana kadar çevir. Tavuk suyunu kepçe kepçe ekleyerek topaksız bir çorba elde et.',
        sureSn: 360,
      },
      {
        baslik: 'Tavuğu ve baharatı ekle',
        aciklama:
          'Didiklenmiş tavukları, tuzu, pul biberi ve karabiberi ekle. Kısık ateşte kaynat, kapatmadan hemen önce limon suyunu karıştır. Çorba klasik tadından biraz daha acı ve ekşi olmalı.',
        sureSn: 900,
      },
      {
        baslik: 'Hamurla servis et',
        aciklama:
          'Soğuyan hamuru baklava dilimi şeklinde kes. Çorbayı geniş bir kaba, hamuru tepsisiyle sofraya getir; hamur lokması kaşıkla alınıp çiğnenmeden çorbayla yutulur.',
      },
    ],
    pufNoktasi:
      'Hamuru dökmeden önce tepsiyi soğuk suyla ıslatırsan soğuyan hamur tepsiden pürüzsüz sıyrılır, dilimler dağılmaz.',
  },
  {
    id: 'kremali-mantar-corbasi',
    baslik: 'Kremalı Mantar Çorbası',
    altBaslik: 'Tereyağında sotelenmiş mantarların kadife kıvamlı, restoran usulü hali',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'misafir'],
    emoji: '🍄',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 190,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'mantar', miktar: 400, birim: 'g', not: 'ince dilimlenmiş' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'küçük küpler halinde' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'un', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'süt', miktar: 2, birim: 'su bardağı' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'krema', miktar: 100, birim: 'ml' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', not: 'taze çekilmiş' },
      { ad: 'kekik', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Mantarları sotele',
        aciklama:
          'Tencerede tereyağının iki kaşığını erit; soğanı yumuşat, ardından mantarları ekle. Mantarlar suyunu salıp çekene, kenarları hafif kızarana kadar yüksek ateşte sotele. Birkaç kaşık mantarı süsleme için ayır.',
        sureSn: 480,
      },
      {
        baslik: 'Unu kavur',
        aciklama:
          'Kalan tereyağını ekleyip unu mantarların üzerine serp; çiğliği gidene kadar bir iki dakika karıştırarak kavur.',
        sureSn: 120,
      },
      {
        baslik: 'Süt ve suyu ekle',
        aciklama:
          'Sütü ve sıcak suyu azar azar ekleyip çırparak pürüzsüz bir kıvam al. Tuz, karabiber ve kekiği kat; kısık ateşte pişir.',
        sureSn: 600,
      },
      {
        baslik: 'Blenderdan geçir',
        aciklama:
          'Ocaktan aldığın çorbayı el blenderıyla istediğin pürüzsüzlüğe gelene kadar çek; birkaç mantar parçası kalması dokusunu güzelleştirir.',
      },
      {
        baslik: 'Kremayla bitir',
        aciklama:
          'Kremayı ekleyip karıştır, bir taşım ısıt ama kaynatma. Kaselere al; ayırdığın soteli mantarlar ve bir tutam karabiberle servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Mantarları tencereye kalabalık atma; genişçe yayılıp kızaran mantar, haşlanmış mantarın veremeyeceği derin bir aroma verir.',
  },
  {
    id: 'brokoli-corbasi',
    baslik: 'Brokoli Çorbası',
    altBaslik: 'Patatesle kıvam alan, göz alıcı yeşil renkte hafif bir kış çorbası',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'fit'],
    emoji: '🥦',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 140,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'brokoli', miktar: 1, birim: 'adet', not: 'çiçeklerine ayrılmış' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1, birim: 'lt', not: 'sıcak' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri kavur',
        aciklama:
          'Zeytinyağında doğranmış soğanı ve sarımsağı yumuşat; patatesi ekleyip iki üç dakika çevir.',
        sureSn: 240,
      },
      {
        baslik: 'Brokoliyi ekleyip haşla',
        aciklama:
          'Brokoli çiçeklerini ve sıcak suyu ekle; sapları kolay pişsin diye ince doğra. Sebzeler yumuşayana kadar orta ateşte kapağı kapalı pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Pürüzsüzleştir',
        aciklama:
          'Ocağı kapat, el blenderıyla çorbayı tamamen pürüzsüz olana kadar çek. Rengi solmasın diye bekletmeden hemen devam et.',
      },
      {
        baslik: 'Sütle kıvamını ayarla',
        aciklama:
          'Sütü, tuzu ve karabiberi ekleyip kısık ateşte bir taşım kaynat. Kapatınca limon suyunu karıştır; kaselerde sıcak sun.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Brokoliyi gereğinden uzun haşlama; tam yumuşadığı anda blenderdan geçirirsen çorba canlı yeşil kalır, kararmaz.',
  },
  {
    id: 'sebze-corbasi',
    baslik: 'Sebze Çorbası',
    altBaslik: 'Mevsim sebzeleriyle rengarenk, hafif ve tamamen bitkisel bir günlük çorba',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'fit'],
    emoji: '🥕',
    porsiyon: 5,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 120,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'kabak', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1.5, birim: 'lt', not: 'sıcak' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'maydanoz', miktar: 0.25, birim: 'demet', not: 'ince kıyılmış, servis için' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı ve salçayı kavur',
        aciklama:
          'Tencerede zeytinyağını ısıt; soğanı ve sarımsağı yumuşat, salçayı ekleyip kokusu çıkana kadar çevir.',
        sureSn: 240,
      },
      {
        baslik: 'Sebzeleri ekle',
        aciklama:
          'Havuç ve patatesi tencereye al, iki üç dakika yağda çevir; kabağı en son ekle ki dağılmasın.',
        sureSn: 180,
      },
      {
        baslik: 'Suyla pişir',
        aciklama:
          'Sıcak suyu, tuzu ve karabiberi ekle. Kaynayınca ateşi kısıp sebzeler çatalla ezilecek yumuşaklığa gelene kadar pişir.',
        sureSn: 1200,
      },
      {
        baslik: 'Kıvamını ver ve sun',
        aciklama:
          'Bir iki kepçe sebzeyi kaşık sırtıyla tencere kenarında ezerek çorbaya doğal kıvam ver. Kaselere alıp kıyılmış maydanozla servis et.',
      },
    ],
    pufNoktasi:
      'Sebzelerin bir kısmını ezip bir kısmını bütün bırakmak, un ya da krema kullanmadan dolgun bir kıvam sağlar.',
  },
  {
    id: 'levrekli-balik-corbasi',
    baslik: 'Levrekli Balık Çorbası',
    altBaslik: 'Sebzeli, limonlu ve terbiyeli; Ege sahil lokantalarının incelikli klasiği',
    kategori: 'corba',
    koleksiyonlar: ['misafir'],
    emoji: '🐟',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 200,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'levrek', miktar: 1, birim: 'adet', not: 'temizlenmiş, bütün' },
      { ad: 'su', miktar: 1.5, birim: 'lt' },
      { ad: 'soğan', miktar: 1, birim: 'adet' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'minik küpler halinde' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'minik küpler halinde' },
      { ad: 'kereviz', miktar: 0.25, birim: 'adet', not: 'minik küpler halinde' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Terbiyesi için', not: 'sadece sarısı' },
      { ad: 'limon', miktar: 1, birim: 'adet', grup: 'Terbiyesi için', not: 'suyu' },
      { ad: 'dereotu', miktar: 0.25, birim: 'demet', not: 'ince kıyılmış, servis için' },
    ],
    adimlar: [
      {
        baslik: 'Levreği haşla',
        aciklama:
          'Levreği bütün soğan ve suyla tencereye koy; kaynadıktan sonra kısık ateşte balık pişene kadar haşla. Balığı dikkatlice çıkar, suyunu ince süzgeçten geçir.',
        sureSn: 1200,
      },
      {
        baslik: 'Balığı ayıkla',
        aciklama:
          'Ilınan levreğin derisini ve tüm kılçıklarını ayıkla; etini iri parçalar halinde ayırıp kenara al.',
      },
      {
        baslik: 'Sebzeleri pişir',
        aciklama:
          'Tencerede zeytinyağını ısıt; havuç, patates ve kerevizi iki üç dakika çevir. Unu serpip karıştır, süzülmüş balık suyunu ekle ve sebzeler yumuşayana kadar pişir.',
        sureSn: 1080,
      },
      {
        baslik: 'Balığı ekle',
        aciklama:
          'Ayıklanmış levrek parçalarını, tuzu ve karabiberi tencereye al; balık dağılmasın diye yavaşça karıştırıp birkaç dakika kaynat.',
        sureSn: 180,
      },
      {
        baslik: 'Terbiyele ve sun',
        aciklama:
          'Yumurta sarısını limon suyuyla çırp, bir kepçe sıcak çorbayla ılıklaştırıp tencereye süzdür. Kaynatmadan bir dakika ısıt; kaselerde bol dereotuyla servis et.',
        sureSn: 60,
      },
    ],
    pufNoktasi:
      'Balık suyunu ince süzgeçten, hatta tülbentten geçirmek kılçık riskini sıfırlar ve çorbaya berrak bir görünüm kazandırır.',
  },
  {
    id: 'terbiyeli-tavuk-suyu-corbasi',
    baslik: 'Terbiyeli Tavuk Suyu Çorbası',
    altBaslik: 'Kemikli tavuktan çekilen öz suyun limonlu terbiyeyle şifa niyetine hali',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🍗',
    porsiyon: 6,
    hazirlikDk: 10,
    pisirmeDk: 75,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 160,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk but', miktar: 600, birim: 'g', not: 'kemikli' },
      { ad: 'su', miktar: 2.5, birim: 'lt' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'bütün' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'bütün, haşlamaya' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'un', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Terbiyesi için', not: 'sadece sarısı' },
      { ad: 'limon', miktar: 1, birim: 'adet', grup: 'Terbiyesi için', not: 'suyu' },
    ],
    adimlar: [
      {
        baslik: 'Tavuk suyunu çek',
        aciklama:
          'Tavuk butlarını soğuk su, bütün soğan ve havuçla tencereye koy. Kaynayınca köpüğünü al, kısık ateşte et kemikten ayrılana kadar haşla.',
        sureSn: 3600,
      },
      {
        baslik: 'Eti didikle, suyu süz',
        aciklama:
          'Tavukları çıkarıp derisini ve kemiklerini ayıkla, etleri ince ince didikle. Suyunu süzüp tencereye geri al; soğanı ve havucu çıkar.',
      },
      {
        baslik: 'Meyane ile kıvam ver',
        aciklama:
          'Küçük tavada tereyağında unu hafifçe kavur, bir kepçe tavuk suyuyla açıp tencereye karıştır. Didiklenmiş etleri, tuzu ve karabiberi ekleyip kaynat.',
        sureSn: 600,
      },
      {
        baslik: 'Terbiyesini yedir',
        aciklama:
          'Yumurta sarısını limon suyuyla iyice çırp. Sıcak çorbadan azar azar ekleyerek ılıklaştır, sonra karıştıra karıştıra tencereye dök. Kaynatmadan iki dakika ısıtıp ocağı kapat.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Kemikli ve derili but kullanmak suya jelatinli bir derinlik verir; göğüs etiyle çekilen su hep daha yavan kalır.',
  },
  {
    id: 'yogurtlu-eriste-corbasi',
    baslik: 'Yoğurtlu Erişte Çorbası',
    altBaslik: 'Nohutlu, naneli tereyağlı; yüksük çorbasının pratik ev hali',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'artan'],
    emoji: '🥣',
    porsiyon: 5,
    hazirlikDk: 10,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 250,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'erişte', miktar: 1.5, birim: 'su bardağı', not: 'ev tipi kesme erişte' },
      { ad: 'nohut', miktar: 1, birim: 'su bardağı', not: 'haşlanmış' },
      { ad: 'su', miktar: 1.5, birim: 'lt', not: 'sıcak' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'yoğurt', miktar: 400, birim: 'g', grup: 'Terbiyesi için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Terbiyesi için' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı', grup: 'Terbiyesi için' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'kuru nane', miktar: 2, birim: 'çay kaşığı', grup: 'Üzeri için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Erişteyi haşla',
        aciklama:
          'Tencerede sıcak suyu tuzla kaynat; erişteleri ekleyip yumuşayana kadar haşla. Haşlanmış nohutları da katıp bir iki dakika birlikte kaynat.',
        sureSn: 600,
      },
      {
        baslik: 'Terbiyeyi hazırla',
        aciklama:
          'Derin bir kasede yoğurt, yumurta ve unu topak kalmayacak şekilde pürüzsüzce çırp.',
      },
      {
        baslik: 'Terbiyeyi yedir',
        aciklama:
          'Kaynayan çorbadan kepçe kepçe alıp çırpa çırpa terbiyeye ekle; karışım ısınınca tencereye geri aktar. Kesilmemesi için aynı yönde karıştırarak kısık ateşte bir taşım kaynat.',
        sureSn: 300,
      },
      {
        baslik: 'Naneli yağı gezdir',
        aciklama:
          'Küçük tavada tereyağını kızdır, ocaktan alıp nane ve pul biberi ekle. Kaselere aldığın çorbanın üzerine gezdirerek hemen servis et.',
      },
    ],
    pufNoktasi:
      'Terbiyeye eklenen bir kaşık un yoğurdun kesilmesini engeller; yine de kaynama boyunca karıştırmayı bırakma.',
  },
  {
    id: 'kerevizli-kis-corbasi',
    baslik: 'Kerevizli Kış Çorbası',
    altBaslik: 'Kereviz, havuç ve patatesin limonla aydınlanan, içini ısıtan kış klasiği',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'fit'],
    emoji: '🥬',
    porsiyon: 5,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 130,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'kereviz', miktar: 1, birim: 'adet', not: 'soyulmuş, küp doğranmış' },
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'pırasa', miktar: 1, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1.5, birim: 'lt', not: 'sıcak' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'dereotu', miktar: 0.25, birim: 'demet', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri terlet',
        aciklama:
          'Zeytinyağında soğanı ve pırasayı yumuşat; kereviz, havuç ve patatesi ekleyip üç dört dakika çevir. Kerevizi doğrar doğramaz limonlu suda bekletirsen kararmaz.',
        sureSn: 300,
      },
      {
        baslik: 'Suyla pişir',
        aciklama:
          'Sıcak suyu ve tuzu ekle; kaynayınca ateşi kıs, kereviz yumuşayana kadar kapağı kapalı pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Yarısını ez',
        aciklama:
          'Çorbanın bir iki kepçesini blenderdan geçirip tencereye geri kat; kıvam alsın ama sebze taneleri de hissedilsin.',
      },
      {
        baslik: 'Limonla tazele ve sun',
        aciklama:
          'Limon suyunu ve karabiberi ekleyip bir taşım kaynat. Kaselere al; üzerine kıyılmış dereotu serperek sıcak servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Limonu en sonda eklemek kerevizin aromasını bastırmadan çorbayı aydınlatır; başta eklenirse ekşilik pişip donuklaşır.',
  },
  {
    id: 'tutmac-corbasi',
    baslik: 'Tutmaç Çorbası',
    altBaslik: 'Yeşil mercimek ve erişteli, sarımsaklı yoğurtla asırlık bir Anadolu mirası',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'osmanli'],
    emoji: '🍵',
    porsiyon: 5,
    hazirlikDk: 15,
    pisirmeDk: 45,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'yeşil mercimek', miktar: 1, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'erişte', miktar: 1, birim: 'su bardağı', not: 'kare kesilmiş ev eriştesi' },
      { ad: 'su', miktar: 1.5, birim: 'lt', not: 'sıcak' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'yoğurt', miktar: 300, birim: 'g', grup: 'Terbiyesi için' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', grup: 'Terbiyesi için', not: 'ezilmiş' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı', grup: 'Terbiyesi için' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'kuru nane', miktar: 2, birim: 'çay kaşığı', grup: 'Üzeri için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Mercimeği haşla',
        aciklama:
          'Yıkanmış yeşil mercimeği sıcak suyla tencereye al; diri kalacak ama çiğ tat bırakmayacak şekilde kısık ateşte haşla.',
        sureSn: 1500,
      },
      {
        baslik: 'Erişteyi ekle',
        aciklama:
          'Kare erişteleri ve tuzu tencereye kat; erişteler yumuşayana kadar arada karıştırarak pişir. Su azaldıysa bir bardak sıcak su ekle.',
        sureSn: 600,
      },
      {
        baslik: 'Yoğurtlu terbiyeyi yedir',
        aciklama:
          'Kasede yoğurt, ezilmiş sarımsak ve unu çırp. Sıcak çorbadan birkaç kepçeyle ılıklaştırıp tencereye aktar; aynı yönde karıştırarak kısık ateşte bir taşım kaynat.',
        sureSn: 300,
      },
      {
        baslik: 'Dinlendir',
        aciklama:
          'Ocağı kapatıp kapağı aralık şekilde beş dakika dinlendir; erişte suyunu çekip çorba tam kıvamına oturur.',
        sureSn: 300,
        beklemeAdimi: true,
      },
      {
        baslik: 'Naneli yağla sun',
        aciklama:
          'Tereyağını küçük tavada köpürene kadar kızdır; nane ve pul biberi ekleyip ocaktan al. Kaselere aldığın çorbanın üzerine gezdirerek servis et.',
      },
    ],
    pufNoktasi:
      'Mercimeği eriştelerden önce tek başına haşlamak iki malzemenin de aynı anda tam kıvamda olmasını sağlar; birlikte atarsan erişte dağılır.',
  },
];
