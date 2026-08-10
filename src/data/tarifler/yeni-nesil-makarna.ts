import type { Tarif } from '@/types/tarif';

// Yeni nesil makarnalar, one-pot yemekler ve modern çorbalar.
// Ölçü standartları: su bardağı = 200 ml, yemek kaşığı = 15 ml, çay kaşığı = 5 ml.
// Makarna standardı: 400 g / 4 porsiyon.
export const MODERN_MAKARNALAR: Tarif[] = [
  {
    id: 'firin-beyaz-peynirli-makarna',
    baslik: 'Fırında Beyaz Peynirli Makarna',
    altBaslik: 'Viral feta makarnanın bizim mutfağa uyarlanmış hali: fırında eriyen peynir ve domates',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🧀',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 560,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'makarna', miktar: 400, birim: 'g', not: 'penne ya da burgu' },
      { ad: 'beyaz peynir', miktar: 300, birim: 'g', not: 'tam yağlı, tek parça' },
      { ad: 'domates', miktar: 500, birim: 'g', not: 'kiraz domates ya da iri küp doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', not: 'bütün, ezilmiş' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', not: 'haşlama suyu için' },
    ],
    adimlar: [
      {
        baslik: 'Domatesleri fırın kabına diz',
        aciklama:
          'Fırını 200 dereceye ayarla. Domatesleri fırın kabına yay, sarımsakları aralara serpiştir. Zeytinyağının 3 kaşığını gezdirip kekik ve pul biberi serp.',
      },
      {
        baslik: 'Peyniri ortaya yerleştir',
        aciklama:
          'Beyaz peyniri tek parça halinde kabın tam ortasına oturt, üzerine kalan zeytinyağını sür. Domatesler büzüşüp peynir yumuşayana kadar fırınla.',
        sureSn: 1800,
      },
      {
        baslik: 'Makarnayı haşla',
        aciklama:
          'Fırın süresi bitmeye yakın makarnayı bol tuzlu kaynar suda diri kalacak şekilde haşla. Süzmeden önce 1 su bardağı haşlama suyunu ayır.',
        sureSn: 540,
      },
      {
        baslik: 'Sosu ez ve karıştır',
        aciklama:
          'Kabı fırından al; peyniri ve domatesleri çatalla ezerek krema kıvamında bir sos elde et. Karabiberi ekle, gerekirse ayırdığın sudan azar azar kat.',
      },
      {
        baslik: 'Makarnayla buluştur',
        aciklama:
          'Süzülmüş makarnayı sıcak sosa döküp iyice harmanla. Sos makarnayı sarmıyorsa bir iki kaşık haşlama suyu daha ekleyip hemen servis et.',
      },
    ],
    pufNoktasi:
      'Beyaz peynir çok tuzluysa fırına vermeden önce 10 dakika ılık suda beklet; sosun tuz dengesi tam oturur.',
  },
  {
    id: 'kremali-mantarli-makarna',
    baslik: 'Kremalı Mantarlı Makarna',
    altBaslik: 'İyice kavrulmuş mantarların kremayla buluştuğu, restoran kıvamında bir klasik',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🍄',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 580,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'makarna', miktar: 400, birim: 'g', not: 'kalem ya da fiyonk' },
      { ad: 'mantar', miktar: 400, birim: 'g', not: 'kalın dilimlenmiş' },
      { ad: 'krema', miktar: 200, birim: 'ml' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ince kıyılmış' },
      { ad: 'parmesan', miktar: 40, birim: 'g', not: 'rendelenmiş' },
      { ad: 'kekik', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', not: 'taze çekilmiş' },
    ],
    adimlar: [
      {
        baslik: 'Makarnayı haşla',
        aciklama:
          'Makarnayı bol tuzlu kaynar suda diri kalacak şekilde haşla. Süzmeden önce 1 kepçe haşlama suyunu kenara ayır.',
        sureSn: 540,
      },
      {
        baslik: 'Mantarları susuz kavur',
        aciklama:
          'Tereyağı ile zeytinyağını geniş tavada kızdır. Mantarları tavayı kalabalıklaştırmadan, karıştırmayı azaltarak altın rengi alana kadar kavur.',
        sureSn: 480,
      },
      {
        baslik: 'Sarımsağı ekle',
        aciklama: 'Kıyılmış sarımsağı ve kekiği mantarlara ekle, kokusu çıkana kadar 1 dakika çevir.',
        sureSn: 60,
      },
      {
        baslik: 'Kremayı kat ve sosu topla',
        aciklama:
          'Kremayı dök, kısık ateşte hafifçe koyulaşana kadar 3-4 dakika kaynat. Tuz ve karabiberle tatlandır.',
        sureSn: 240,
      },
      {
        baslik: 'Makarnayı sosla harmanla',
        aciklama:
          'Süzülmüş makarnayı sosa aktar, ayırdığın haşlama suyundan ekleyerek sosu parlat. Parmesanı serpip ocaktan hemen al.',
      },
    ],
    pufNoktasi:
      'Mantarları tuzlamayı sos aşamasına bırak; erken tuzlanan mantar suyunu salar ve kavrulmak yerine haşlanır.',
  },
  {
    id: 'ev-yapimi-mac-and-cheese',
    baslik: 'Ev Yapımı Mac and Cheese',
    altBaslik: 'Beşamel tabanlı, çift peynirli ve üstü çıtır çıtır fırınlanmış Amerikan klasiği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🧀',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 690,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'makarna', miktar: 400, birim: 'g', not: 'boru makarna' },
      { ad: 'süt', miktar: 600, birim: 'ml', not: 'oda sıcaklığında' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'un', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'cheddar peyniri', miktar: 200, birim: 'g', not: 'rendelenmiş' },
      { ad: 'kaşar peyniri', miktar: 100, birim: 'g', not: 'rendelenmiş' },
      { ad: 'hardal', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'sarımsak tozu', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'galeta unu', miktar: 3, birim: 'yemek kaşığı', not: 'üzeri için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Makarnayı az diri haşla',
        aciklama:
          'Makarnayı tuzlu kaynar suda paket süresinden 2 dakika eksik haşlayıp süz; fırında pişmeye devam edeceği için diri kalmalı.',
        sureSn: 480,
      },
      {
        baslik: 'Beşameli hazırla',
        aciklama:
          'Tereyağını tencerede erit, unu ekleyip kokusu gidene kadar 2 dakika kavur. Sütü azar azar dökerek çırp, pürüzsüz ve kaşık sırtını kaplayan bir kıvam al.',
        sureSn: 420,
      },
      {
        baslik: 'Peynirleri sosa erit',
        aciklama:
          'Tencereyi ocaktan al; cheddar rendesinin büyük kısmını, hardalı, sarımsak tozunu, tuzu ve karabiberi ekleyip peynir tamamen eriyene kadar karıştır.',
      },
      {
        baslik: 'Makarnayla birleştir',
        aciklama: 'Haşlanmış makarnayı peynirli sosa döküp her tanesi sosa bulanacak şekilde harmanla, fırın kabına aktar.',
      },
      {
        baslik: 'Üzerini kapatıp fırınla',
        aciklama:
          'Kalan cheddar ile kaşarı yüzeye yay, galeta ununu serp. Önceden ısıtılmış 200 derece fırında üzeri kızarana kadar pişir.',
        sureSn: 1200,
      },
    ],
    pufNoktasi:
      'Peyniri kaynayan sosa değil, ocaktan aldığın sosa ekle; yüksek ısıda peynir yağını salar ve sos kumlu olur.',
  },
  {
    id: 'tek-tencere-domatesli-spagetti',
    baslik: 'Tek Tencere Domatesli Spagetti',
    altBaslik: 'Spagettinin sosuyla birlikte tek tencerede piştiği, bulaşık dostu pratik akşam yemeği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'tek-tencere'],
    emoji: '🍝',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'spagetti', miktar: 400, birim: 'g' },
      { ad: 'domates', miktar: 3, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', not: 'ince dilimlenmiş' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 5, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı ve sarımsağı kavur',
        aciklama: 'Zeytinyağını geniş ve derin bir tencerede kızdır. Soğanı pembeleşene kadar kavur, sarımsağı ekleyip 1 dakika daha çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Domatesli tabanı pişir',
        aciklama: 'Salçayı ekleyip kokusu çıkana kadar kavur, rendelenmiş domatesi dök. Kekik, pul biber ve tuzla 3 dakika kaynat.',
        sureSn: 240,
      },
      {
        baslik: 'Spagettiyi suyla ekle',
        aciklama:
          'Sıcak suyu dök, kaynayınca spagettiyi kırmadan yelpaze gibi açarak tencereye yatır. Teller yumuşadıkça maşayla sosun içine göm.',
      },
      {
        baslik: 'Karıştırarak pişir',
        aciklama:
          'Orta ateşte, dibi tutmaması için sık sık karıştırarak spagetti diri kalacak ve sos koyulaşacak kıvama gelene kadar pişir.',
        sureSn: 600,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama: 'Ocağı kapat, kapağı kapalı halde 2 dakika dinlendir; kalan sos makarnaya iyice yapışır. Sıcak servis et.',
        sureSn: 120,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Su miktarını artırma; spagetti nişastasını suya bırakır ve bu nişasta sosun kendiliğinden kremamsı bağlanmasını sağlar.',
  },
  {
    id: 'sucuklu-makarna',
    baslik: 'Sucuklu Makarna',
    altBaslik: 'Kendi yağında çıtırlaşan sucuk ve salçalı tereyağıyla 15 dakikada doyurucu bir tabak',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', '15-dakika'],
    emoji: '🌶️',
    porsiyon: 4,
    hazirlikDk: 5,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 640,
    beslenmeEtiketleri: [],
    editorOnayli: false,
    malzemeler: [
      { ad: 'makarna', miktar: 400, birim: 'g', not: 'burgu ya da kelebek' },
      { ad: 'sucuk', miktar: 150, birim: 'g', not: 'küçük küp doğranmış' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kaşar peyniri', miktar: 100, birim: 'g', not: 'rendelenmiş' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', not: 'haşlama suyu için' },
    ],
    adimlar: [
      {
        baslik: 'Makarnayı haşla',
        aciklama:
          'Makarnayı bol tuzlu kaynar suda diri kalacak şekilde haşla. Süzmeden önce yarım su bardağı haşlama suyunu ayır.',
        sureSn: 540,
      },
      {
        baslik: 'Sucukları çıtırlat',
        aciklama:
          'Makarna haşlanırken sucukları yağsız tavada orta ateşte kendi yağını salıp kenarları çıtırlaşana kadar kavur.',
        sureSn: 240,
      },
      {
        baslik: 'Salçalı yağı hazırla',
        aciklama: 'Tereyağını ve salçayı sucuklu tavaya ekle; salçanın rengi koyulaşıp yağ kızarana kadar 1-2 dakika çevir, pul biberi ekle.',
        sureSn: 120,
      },
      {
        baslik: 'Harmanla ve peynirle bitir',
        aciklama:
          'Süzülmüş makarnayı tavaya al, ayırdığın haşlama suyuyla sosu açarak harmanla. Karabiberi ve kaşar rendesini serpip peynir eriyince servis et.',
      },
    ],
    pufNoktasi:
      'Sucuğu tavaya yağ koymadan at; kendi yağıyla kavrulan sucuk hem çıtır olur hem de sosun tüm lezzet tabanını kurar.',
  },
  {
    id: 'tavuklu-kori-soslu-noodle',
    baslik: 'Tavuklu Köri Soslu Noodle',
    altBaslik: 'Tek tavada pişen, kremalı köri sosuyla sarılmış tavuklu noodle; sipariş vermeye son',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'tek-tencere'],
    emoji: '🍛',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 540,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'noodle', miktar: 4, birim: 'paket', not: 'baharat paketleri kullanılmayacak' },
      { ad: 'tavuk göğsü', miktar: 300, birim: 'g', not: 'ince şeritler halinde' },
      { ad: 'krema', miktar: 150, birim: 'ml' },
      { ad: 'köri', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'soya sosu', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ince kıyılmış' },
      { ad: 'zencefil', miktar: 1, birim: 'çay kaşığı', not: 'taze rendelenmiş' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'ince şerit doğranmış' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Tavukları mühürle',
        aciklama:
          'Yağı geniş tavada iyice kızdır. Tavuk şeritlerini tek katman halinde yay, her yüzü renk alana kadar yüksek ateşte pişir.',
        sureSn: 300,
      },
      {
        baslik: 'Aromaları ekle',
        aciklama: 'Ateşi orta seviyeye al; biberi, sarımsağı, zencefili ve köriyi ekleyip baharatın kokusu çıkana kadar 1-2 dakika çevir.',
        sureSn: 120,
      },
      {
        baslik: 'Noodle ile pişir',
        aciklama:
          'Sıcak suyu ve soya sosunu dök, kaynayınca noodle yumaklarını tavaya yerleştir. Yumuşadıkça maşayla açarak suyu çekene kadar pişir.',
        sureSn: 240,
      },
      {
        baslik: 'Kremayla bağla',
        aciklama:
          'Kremayı ekleyip 1-2 dakika daha karıştırarak sosun noodle tellerini sarmasını sağla. Ocaktan alır almaz servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Köriyi suya değil, yağa kavurarak ekle; baharat yağda açılınca sosun rengi ve kokusu bambaşka derinleşir.',
  },
  {
    id: 'citir-parmesanli-firin-makarna',
    baslik: 'Çıtır Parmesanlı Fırın Makarna',
    altBaslik: 'Kremalı tabanın üzerinde parmesanlı galeta kabuğuyla çatırdayan nefis fırın makarnası',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🍝',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 650,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'makarna', miktar: 400, birim: 'g', not: 'kalem makarna' },
      { ad: 'krema', miktar: 200, birim: 'ml' },
      { ad: 'süt', miktar: 200, birim: 'ml' },
      { ad: 'mozzarella', miktar: 150, birim: 'g', not: 'rendelenmiş' },
      { ad: 'parmesan', miktar: 60, birim: 'g', not: 'rendelenmiş' },
      { ad: 'galeta unu', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', not: 'eritilmiş' },
      { ad: 'sarımsak tozu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Makarnayı az diri haşla',
        aciklama: 'Makarnayı tuzlu kaynar suda paket süresinden 2 dakika eksik haşlayıp süz; fırında pişmeye devam edecek.',
        sureSn: 480,
      },
      {
        baslik: 'Kremalı sosu karıştır',
        aciklama:
          'Geniş kapta kremayı, sütü, sarımsak tozunu, kekiği, tuzu ve karabiberi çırp. Mozzarellanın yarısını ekleyip makarnayla harmanla.',
      },
      {
        baslik: 'Fırın kabına yerleştir',
        aciklama: 'Karışımı yağlanmış fırın kabına yay, kalan mozzarellayı yüzeye eşit şekilde serp.',
      },
      {
        baslik: 'Çıtır kabuğu hazırla',
        aciklama: 'Galeta ununu, parmesanı ve eritilmiş tereyağını küçük kapta kum kıvamına gelene kadar karıştır, makarnanın üzerine dağıt.',
      },
      {
        baslik: 'Üzeri kızarana dek fırınla',
        aciklama: 'Önceden ısıtılmış 200 derece fırında üzeri altın rengi alıp kenarlar fokurdayana kadar pişir. 5 dakika dinlendirip servis et.',
        sureSn: 1200,
      },
    ],
    pufNoktasi:
      'Galeta ununu tereyağıyla ovmadan serpme; yağla kaplanmayan galeta fırında kızarmak yerine kurur.',
  },
  {
    id: 'roka-pestolu-spagetti',
    baslik: 'Roka Pestolu Spagetti',
    altBaslik: 'Cevizli ve hafif acımsı roka pestosuyla 20 dakikada hazır, ferah bir spagetti tabağı',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', '15-dakika'],
    emoji: '🌿',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 590,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'spagetti', miktar: 400, birim: 'g' },
      { ad: 'roka', miktar: 2, birim: 'demet', not: 'yıkanıp kurutulmuş' },
      { ad: 'ceviz içi', miktar: 50, birim: 'g' },
      { ad: 'parmesan', miktar: 60, birim: 'g', not: 'rendelenmiş' },
      { ad: 'zeytinyağı', miktar: 0.5, birim: 'su bardağı' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Spagettiyi haşla',
        aciklama:
          'Spagettiyi bol tuzlu kaynar suda diri kalacak şekilde haşla. Süzmeden önce 1 kepçe haşlama suyunu mutlaka ayır.',
        sureSn: 540,
      },
      {
        baslik: 'Cevizleri hafif kavur',
        aciklama: 'Cevizleri yağsız tavada kokusu çıkana kadar 2-3 dakika çevirip soğumaya bırak; kavrulan ceviz pestoya derinlik katar.',
        sureSn: 180,
      },
      {
        baslik: 'Pestoyu çek',
        aciklama:
          'Rokayı, cevizi, sarımsağı, parmesanın büyük kısmını ve limon suyunu robota al. Zeytinyağını azar azar ekleyerek iri taneli bir pesto elde et.',
      },
      {
        baslik: 'Ateşten uzak harmanla',
        aciklama:
          'Süzülmüş spagettiyi ocaktan aldığın tencereye koy, pestoyu ve birkaç kaşık haşlama suyunu ekleyip parlayana kadar karıştır. Kalan parmesanla servis et.',
      },
    ],
    pufNoktasi:
      'Pestoyu asla ocakta pişirme; sıcak makarnanın kendi ısısı yeterlidir, ateşte kalan roka rengini ve tazeliğini kaybeder.',
  },
  {
    id: 'sarimsakli-sehriyeli-pilav-bowl',
    baslik: 'Sarımsaklı Tereyağlı Şehriye Bowl',
    altBaslik: 'Tek tencerede önce tavuk sonra sarımsaklı şehriyeli pilav; kaseye kur, üstüne diz',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'tek-tencere'],
    emoji: '🍚',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 610,
    beslenmeEtiketleri: [],
    editorOnayli: false,
    malzemeler: [
      { ad: 'pirinç', miktar: 300, birim: 'g', not: 'yıkanıp süzülmüş' },
      { ad: 'şehriye', miktar: 50, birim: 'g', not: 'tel şehriye' },
      { ad: 'tavuk göğsü', miktar: 400, birim: 'g', not: 'kuşbaşı doğranmış' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'sarımsak', miktar: 4, birim: 'diş', not: 'ince kıyılmış' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Tavukları baharatla pişir',
        aciklama:
          'Zeytinyağını tencerede kızdır. Tatlı toz biber ve kekikle harmanladığın tavukları renk alana kadar pişirip bir tabağa al.',
        sureSn: 420,
      },
      {
        baslik: 'Şehriyeyi kızart',
        aciklama: 'Aynı tencereye tereyağını ekle, şehriyeyi kehribar rengini alana kadar sürekli karıştırarak kavur.',
        sureSn: 180,
      },
      {
        baslik: 'Sarımsağı ve pirinci kavur',
        aciklama: 'Sarımsağı ekleyip kokusu çıkınca pirinci ilave et; taneler camlaşana kadar 2-3 dakika birlikte kavur.',
        sureSn: 180,
      },
      {
        baslik: 'Suyu ekleyip pişir',
        aciklama: 'Sıcak suyu ve tuzu ekle, bir taşım kaynat. Kapağı kapatıp kısık ateşte pirinç suyunu tamamen çekene kadar pişir.',
        sureSn: 720,
      },
      {
        baslik: 'Demlendir',
        aciklama: 'Tavukları pilavın üzerine yay, kapağı kapat ve ocağı kapalı halde demlenmeye bırak.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kaselere kur',
        aciklama: 'Pilavı kaselere paylaştır, tavukları üstüne diz ve karabiber serperek sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Sarımsağı şehriyeden sonra ekle; şehriyeyle aynı anda atarsan şehriye kızarana kadar sarımsak yanar ve acılaşır.',
  },
  {
    id: 'acili-tavuklu-noodle-corbasi',
    baslik: 'Acılı Tavuklu Noodle Çorbası',
    altBaslik: 'Ramen esintili ama ev halinde: zencefilli acılı suda tavuk, noodle ve yumurta',
    kategori: 'corba',
    koleksiyonlar: ['yeni-nesil', 'tek-tencere'],
    emoji: '🍜',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'noodle', miktar: 2, birim: 'paket', not: 'baharat paketleri kullanılmayacak' },
      { ad: 'tavuk göğsü', miktar: 200, birim: 'g', not: 'ince şeritler halinde' },
      { ad: 'su', miktar: 1.5, birim: 'lt', not: 'sıcak' },
      { ad: 'mantar', miktar: 100, birim: 'g', not: 'ince dilimlenmiş' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'kibrit çöpü doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ince kıyılmış' },
      { ad: 'zencefil', miktar: 1, birim: 'çay kaşığı', not: 'taze rendelenmiş' },
      { ad: 'soya sosu', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'acı sos', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'taze soğan', miktar: 2, birim: 'adet', not: 'ince doğranmış' },
    ],
    adimlar: [
      {
        baslik: 'Yumurtaları kayısı haşla',
        aciklama:
          'Yumurtaları kaynar suya bırakıp 7 dakika haşla, hemen soğuk suya al. Sarısı hafif akışkan kalacak; soyup ikiye kesmeden beklet.',
        sureSn: 420,
      },
      {
        baslik: 'Aromalı tabanı kavur',
        aciklama: 'Yağı tencerede kızdır; sarımsağı, zencefili ve tavuk şeritlerini ekleyip tavuklar beyazlaşana kadar çevir.',
        sureSn: 240,
      },
      {
        baslik: 'Çorba suyunu kaynat',
        aciklama:
          'Sıcak suyu, soya sosunu ve acı sosu ekle. Havuçla mantarı da atıp kısık ateşte sebzeler yumuşayana kadar kaynat.',
        sureSn: 600,
      },
      {
        baslik: 'Noodle ekle',
        aciklama: 'Noodle yumaklarını çorbaya bırak, yumuşayınca maşayla açarak 3 dakika daha pişir.',
        sureSn: 180,
      },
      {
        baslik: 'Kaselerde tamamla',
        aciklama:
          'Çorbayı kaselere paylaştır. Yumurtaları ikiye kesip üstüne yerleştir, taze soğan serperek hemen servis et.',
      },
    ],
    pufNoktasi:
      'Noodle çorbada bekledikçe suyu çeker; hemen içilmeyecekse noodle kısmını ayrı haşlayıp servis anında kaseye ekle.',
  },
  {
    id: 'kremali-misir-corbasi',
    baslik: 'Kremalı Mısır Çorbası',
    altBaslik: 'Konserve mısırla çeyrek saatte hazırlanan ipeksi, hafif tatlı ve çocuk dostu çorba',
    kategori: 'corba',
    koleksiyonlar: ['yeni-nesil', 'tek-tencere', '15-dakika'],
    emoji: '🌽',
    porsiyon: 4,
    hazirlikDk: 5,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 280,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'mısır (konserve)', miktar: 400, birim: 'g', not: 'süzülmüş' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'süt', miktar: 400, birim: 'ml' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'krema', miktar: 100, birim: 'ml' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tatlı toz biber', miktar: 0.5, birim: 'çay kaşığı', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Unu tereyağında kavur',
        aciklama: 'Tereyağını tencerede erit, unu ekleyip kokusu gidene kadar 2 dakika karıştırarak kavur.',
        sureSn: 120,
      },
      {
        baslik: 'Sıvıları çırparak ekle',
        aciklama: 'Sütü ve sıcak suyu azar azar dökerek topak kalmayacak şekilde çırp, karışım hafifçe koyulaşana kadar karıştır.',
        sureSn: 180,
      },
      {
        baslik: 'Mısırları pişir',
        aciklama:
          'Mısırların büyük kısmını tencereye ekle, tuzla birlikte kısık ateşte 8 dakika kaynat. Bir avuç mısırı servis için ayır.',
        sureSn: 480,
      },
      {
        baslik: 'Pürüzsüz hale getir',
        aciklama: 'Çorbayı el blenderından geçir, kremayı ekleyip bir taşım daha kaynat. Karabiberle tatlandır.',
        sureSn: 120,
      },
      {
        baslik: 'Süsleyip servis et',
        aciklama: 'Kaselere paylaştır; ayırdığın mısır tanelerini ve tatlı toz biberi üzerine serperek sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Ayırdığın mısır tanelerini kuru tavada 2 dakika kavurup üzerine serp; çorbanın yumuşaklığına çıtır bir karşıtlık katar.',
  },
];
