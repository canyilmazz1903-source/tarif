import type { Tarif } from '@/types/tarif';

// Dünya mutfağı — İtalyan klasikleri, Türk evindeki malzemelerle ev usulü uyarlamalar.
// Tüm tarifler özgün metinle yazılmıştır; ölçüler ev mutfağında denenmiş standartlara göredir.

export const DUNYA_ITALYAN: Tarif[] = [
  {
    id: 'margherita-pizza',
    baslik: 'Ev Usulü Margherita Pizza',
    altBaslik: 'Napoli klasiği; evde mayalanan ince hamur, domates sos ve bol mozzarella',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'misafir'],
    emoji: '🍕',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 15,
    zorluk: 'orta',
    kaloriPerPorsiyon: 620,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'instant maya', miktar: 1, birim: 'tatlı kaşığı', grup: 'Hamuru için' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 1.25, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'domates', miktar: 3, birim: 'adet', grup: 'Sosu için', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş', grup: 'Sosu için', not: 'rendelenmiş' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'mozzarella', miktar: 250, birim: 'g', grup: 'Üzeri için', not: 'elle koparılmış' },
      { ad: 'taze fesleğen', miktar: 8, birim: 'adet', grup: 'Üzeri için', not: 'yaprak; servis anında' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Unu geniş bir kaba ele; mayayı, şekeri ve tuzu ekle (tuz mayaya doğrudan değmesin). Ilık suyu ve zeytinyağını azar azar ekleyerek ele yapışmayan, yumuşak bir hamur elde edene dek 8-10 dakika yoğur.',
        sureSn: 600,
      },
      {
        baslik: 'Mayalanmaya bırak',
        aciklama:
          'Hamurun üzerini nemli bezle örtüp sıcak bir köşede iki katına çıkana kadar beklet. Aceleye getirilen hamur fırında sert kalır; sabır bu tarifin gizli malzemesidir.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Sosu pişir',
        aciklama:
          'Küçük bir tencerede rendelenmiş domatesi, salçayı, sarımsağı ve kekiği kısık ateşte suyunu çekip koyulaşana kadar kaynat. Tuzunu ayarla ve soğumaya bırak.',
        sureSn: 900,
      },
      {
        baslik: 'Hamuru aç',
        aciklama:
          'Fırını 250 derecede tepsiyle birlikte ısıt. Hamuru ikiye böl; unlanmış tezgahta her parçayı parmak uçlarınla ortadan kenara iterek ince, kenarları hafif kabarık iki yuvarlak aç. Merdane kullanma; hava kabarcıkları kenarda kalsın.',
      },
      {
        baslik: 'Sosla ve peynirle',
        aciklama:
          'Açtığın hamuru yağlı kağıda al. Sosu ince bir kat halinde yay, kenarlarda iki parmak pay bırak. Mozzarella parçalarını aralıklı yerleştir; peyniri boğmak yerine seyrek dağıtmak taban çıtırlığını korur.',
      },
      {
        baslik: 'Yüksek ısıda pişir',
        aciklama:
          'Pizzayı kağıdıyla birlikte fırında önceden ısınmış tepsiye kaydır. Kenarlar kabarıp benek benek kızarana, peynir eriyip hafif dalgalana kadar 250 derecede pişir.',
        sureSn: 480,
      },
      {
        baslik: 'Fesleğenle servis et',
        aciklama:
          'Fırından çıkar çıkmaz üzerine taze fesleğen yapraklarını koy ve birkaç damla zeytinyağı gezdir. Fesleğen fırına girerse kararır; her zaman en sona sakla.',
      },
    ],
    pufNoktasi:
      'Tepsiyi fırınla birlikte ısıtmak, taş fırın etkisi yaratır: hamur sıcak yüzeye değdiği anda alttan hızla pişer ve taban çıtır olur.',
  },
  {
    id: 'kiymali-besamelli-lazanya',
    baslik: 'Kıymalı Beşamelli Lazanya',
    altBaslik: 'Bologna usulü kat kat lazanya; kıymalı domates sos ve ipeksi beşamelle',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'misafir'],
    emoji: '🍝',
    porsiyon: 6,
    hazirlikDk: 40,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 580,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'lazanya yaprağı', miktar: 12, birim: 'adet' },
      { ad: 'kıyma', miktar: 500, birim: 'g', grup: 'Kıymalı sos için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Kıymalı sos için', not: 'ince doğranmış' },
      { ad: 'havuç', miktar: 1, birim: 'adet', grup: 'Kıymalı sos için', not: 'rendelenmiş' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Kıymalı sos için' },
      { ad: 'domates', miktar: 4, birim: 'adet', grup: 'Kıymalı sos için', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 2, birim: 'yemek kaşığı', grup: 'Kıymalı sos için' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Kıymalı sos için' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'Kıymalı sos için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'Kıymalı sos için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Kıymalı sos için' },
      { ad: 'tereyağı', miktar: 60, birim: 'g', grup: 'Beşamel için' },
      { ad: 'un', miktar: 4, birim: 'yemek kaşığı', grup: 'Beşamel için' },
      { ad: 'süt', miktar: 4, birim: 'su bardağı', grup: 'Beşamel için', not: 'oda sıcaklığında' },
      { ad: 'kaşar peyniri', miktar: 150, birim: 'g', grup: 'Üzeri için', not: 'rendelenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Kıymalı sosu hazırla',
        aciklama:
          'Zeytinyağında soğanı pembeleşene kadar kavur; havucu ve sarımsağı ekleyip iki dakika daha çevir. Kıymayı ilave et, suyunu salıp çekene ve renk alana kadar orta ateşte kavur.',
        sureSn: 600,
      },
      {
        baslik: 'Sosu koyulaştır',
        aciklama:
          'Salçayı kıymayla bir dakika kavurduktan sonra rendelenmiş domatesi, kekiği, tuzu ve karabiberi ekle. Kısık ateşte, sos kıvam alana kadar arada karıştırarak pişir. Sulu kalmasın; katlar arasında akmayan bir sos istiyoruz.',
        sureSn: 900,
      },
      {
        baslik: 'Beşameli pişir',
        aciklama:
          'Ayrı bir tencerede tereyağını erit, unu ekleyip kokusu çıkana kadar iki dakika kavur. Sütü üç seferde ekle; her seferinde çırpma teliyle pürüzsüzleşene kadar karıştır. Muhallebiden akıcı, boza kıvamında bir sos elde edince tuzla ve ocaktan al.',
        sureSn: 480,
      },
      {
        baslik: 'Katları diz',
        aciklama:
          'Fırın kabının tabanına ince bir kat beşamel sür. Üzerine lazanya yaprakları, kıymalı sos ve beşamel sırasıyla üç-dört kat oluştur. En üst kat mutlaka beşamelle bitsin; açıkta kalan yaprak fırında kurur.',
      },
      {
        baslik: 'Peynirle ve dinlendir',
        aciklama:
          'En üste rendelenmiş kaşarı yay. Kabın üzerini folyoyla kapat ve fırına vermeden önce 10 dakika beklet; yapraklar sosun nemini çekmeye başlasın.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          '180 derece fırında önce folyolu 25 dakika, ardından folyoyu alıp üzeri kızarana kadar 15 dakika daha pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Dinlendirip dilimle',
        aciklama:
          'Fırından çıkan lazanyayı kesmeden önce 15 dakika dinlendir. Katlar bu sürede oturur ve dilimler dağılmadan tabağa çıkar.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Haşlama gerektirmeyen yaprak kullansan bile sosları bir tık sulu bırak; yapraklar pişerken bu nemi çeker ve kuru lazanya derdi hiç yaşanmaz.',
  },
  {
    id: 'mantarli-risotto',
    baslik: 'Mantarlı Risotto',
    altBaslik: 'Kuzey İtalya klasiği; baldo pirinçle kademeli pişen kremamsı mantarlı pilav',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['yeni-nesil', 'misafir'],
    emoji: '🍄',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'orta',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'pirinç', miktar: 2, birim: 'su bardağı', not: 'baldo; yıkamadan' },
      { ad: 'mantar', miktar: 400, birim: 'g', not: 'kalın dilimlenmiş' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'çok ince doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'tereyağı', miktar: 60, birim: 'g' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 6, birim: 'su bardağı', not: 'sıcak; tavuk suyu da olur' },
      { ad: 'parmesan', miktar: 60, birim: 'g', not: 'rendelenmiş' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'Mantarları kavur',
        aciklama:
          'Geniş tavada zeytinyağının yarısını kızdır; mantarları tek kat halinde, karıştırmadan altları kızarana kadar kavur. Suyu çekip renk alan mantarları tuzlayıp bir tabağa al.',
        sureSn: 420,
      },
      {
        baslik: 'Soğanı yumuşat',
        aciklama:
          'Aynı tavaya tereyağının yarısını ve kalan zeytinyağını ekle. Soğanı kavurmadan, şeffaflaşana kadar kısık ateşte öldür; sarımsağı ekleyip bir dakika daha çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Pirinci camlaştır',
        aciklama:
          'Yıkanmamış pirinci tavaya ekle ve taneler kenarlarından şeffaflaşana kadar iki-üç dakika kavur. Bu adım nişastayı uyandırır; risottoya kremamsı dokusunu veren budur.',
        sureSn: 180,
      },
      {
        baslik: 'Sıcak suyu kademeli ekle',
        aciklama:
          'Sıcak suyu birer kepçe ekleyerek pişir; her kepçe çekildikçe yenisini koy ve sık sık karıştır. Bütün suyu bir anda dökme — kademeli ekleme ve karıştırma, taneleri sararken sosu koyulaştırır. Pirinç dişe hafif gelecek kıvama gelene dek sürdür.',
        sureSn: 1080,
      },
      {
        baslik: 'Mantarları geri koy',
        aciklama:
          'Kavrulmuş mantarları tavaya iade et, karabiberi ekle ve son kepçe suyla birlikte iki dakika daha pişir. Kıvam, tabakta kendiliğinden yayılan bir lav akışkanlığında olmalı.',
        sureSn: 120,
      },
      {
        baslik: 'Peynirle parlat',
        aciklama:
          'Ocağı kapat. Kalan tereyağını, parmesanı ve limon suyunu ekleyip tavayı sallayarak karıştır. Üzerini kapatıp iki dakika dinlendir; İtalyanların mantecatura dediği bu son dokunuş sosu ipeksi yapar.',
        sureSn: 120,
        beklemeAdimi: true,
      },
      {
        baslik: 'Bekletmeden servis et',
        aciklama:
          'Maydanoz serpip sıcak tabaklarda hemen servis et. Risotto bekledikçe kıvamı sıkılaşır; sofra hazırken ocaktan inmesi en doğrusu.',
      },
    ],
    pufNoktasi:
      'Pirinci yıkamamak bu tarifin olmazsa olmazı: tanelerin üzerindeki nişasta, krema eklemeden kremamsı kıvamı sağlayan tek şeydir.',
  },
  {
    id: 'pastirmali-carbonara',
    baslik: 'Pastırmalı Carbonara',
    altBaslik: 'Roma klasiğinin Türk usulü hali; guanciale yerine pastırma, yumurtalı ipeksi sos',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🥓',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 640,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'spagetti', miktar: 400, birim: 'g' },
      { ad: 'pastırma', miktar: 120, birim: 'g', not: 'kalın dilim, şerit doğranmış' },
      { ad: 'yumurta', miktar: 3, birim: 'adet', not: '2 sarısı + 1 bütün' },
      { ad: 'parmesan', miktar: 80, birim: 'g', not: 'ince rendelenmiş' },
      { ad: 'krema', miktar: 100, birim: 'ml' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', not: 'taze çekilmiş, bolca' },
      { ad: 'tuz', miktar: 1, birim: 'yemek kaşığı', not: 'makarna suyu için' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sos karışımını çırp',
        aciklama:
          'Bir kasede iki yumurta sarısını, bir bütün yumurtayı, kremayı ve parmesanın büyük kısmını çırp. Karabiberin yarısını ekle; karışım koyu bir boya kıvamında olsun.',
      },
      {
        baslik: 'Spagettiyi haşla',
        aciklama:
          'Bol tuzlu kaynar suda spagettiyi paket süresinden bir dakika az haşla. Süzmeden önce bir su bardağı haşlama suyunu mutlaka ayır; sosun kıvamı bu nişastalı suya emanet.',
        sureSn: 540,
      },
      {
        baslik: 'Pastırmayı çıtırlat',
        aciklama:
          'Makarna haşlanırken geniş tavada zeytinyağını ısıt; pastırma şeritlerini kısık ateşte yağını salıp kenarları kıvrılana kadar çevir. Yakma — acılaşır.',
        sureSn: 240,
      },
      {
        baslik: 'Makarnayı tavaya al',
        aciklama:
          'Süzülen spagettiyi doğrudan pastırmalı tavaya aktar ve yağıyla kaplanana kadar karıştır. Ocağı kapat; tavanın bir dakika soğuması, sonraki adımda yumurtanın çırpılmış omlete dönmesini engeller.',
      },
      {
        baslik: 'Sosu ateş dışında bağla',
        aciklama:
          'Yumurtalı karışımı makarnanın üzerine dök ve ayırdığın sıcak haşlama suyundan azar azar ekleyerek hızla karıştır. Sos her taneyi saran parlak bir kıvama gelene dek çevirmeye devam et.',
        sureSn: 120,
      },
      {
        baslik: 'Biberle taçlandır',
        aciklama:
          'Kalan parmesanı ve karabiberi üzerine serp, tabaklara paylaştır ve bekletmeden servis et. Carbonara soğumayı affetmez.',
      },
    ],
    pufNoktasi:
      'Sos tavaya girdiğinde ocak mutlaka kapalı olmalı; yumurta 65 dereceyi geçerse çırpılmış yumurtaya döner. Az krema, bu dengeyi kolaylaştıran ev sigortasıdır.',
  },
  {
    id: 'minestrone-corbasi',
    baslik: 'Minestrone Çorbası',
    altBaslik: 'İtalyan köy mutfağının bol sebzeli, makarnalı doyurucu klasik çorbası',
    kategori: 'corba',
    koleksiyonlar: ['yeni-nesil', 'tek-tencere'],
    emoji: '🥣',
    porsiyon: 6,
    hazirlikDk: 20,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'kabak', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'taze fasulye', miktar: 150, birim: 'g', not: 'ikiye kesilmiş' },
      { ad: 'domates', miktar: 3, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kuru fasulye', miktar: 1, birim: 'su bardağı', not: 'haşlanmış' },
      { ad: 'makarna', miktar: 1, birim: 'su bardağı', not: 'küçük boy; arpa şehriye de olur' },
      { ad: 'su', miktar: 8, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'parmesan', miktar: 40, birim: 'g', not: 'servis için, isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Sebze tabanını kavur',
        aciklama:
          'Tencerede zeytinyağını ısıt; soğanı ve havucu beş dakika, sarımsağı son bir dakika kavur. Bu yavaş başlangıç çorbanın tatlı zeminini kurar.',
        sureSn: 360,
      },
      {
        baslik: 'Sert sebzeleri ekle',
        aciklama:
          'Patatesi ve taze fasulyeyi tencereye al, salçayla birlikte iki dakika çevir. Rendelenmiş domatesi ekleyip suyunu hafif çekene kadar pişir.',
        sureSn: 300,
      },
      {
        baslik: 'Suyu ekleyip kaynat',
        aciklama:
          'Sıcak suyu, kekiği, tuzu ve karabiberi ekle. Kaynayınca ateşi kıs ve patatesler yumuşamaya yüz tutana kadar kapağı aralık pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Kabak ve fasulyeyi kat',
        aciklama:
          'Kabağı ve haşlanmış kuru fasulyeyi ekle. Kabak geç girdiği için diri kalır; baştan atılan kabak çorbada eriyip kaybolur.',
        sureSn: 300,
      },
      {
        baslik: 'Makarnayı çorbada pişir',
        aciklama:
          'Küçük makarnayı doğrudan çorbaya ekle ve yumuşayana kadar pişir. Nişastası çorbaya geçer ve kıvamı kendiliğinden bağlanır.',
        sureSn: 480,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ocağı kapatıp beş dakika dinlendir. Kaselere paylaştır; dileyene rendelenmiş parmesan ve bir tur zeytinyağı ile sun.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Minestrone ertesi gün daha lezzetlidir; fakat makarnayı yalnızca o gün yiyeceğin kadar ekle, kalan çorbaya servis günü taze makarna pişir. Şişip lapalaşmasının tek çaresi bu.',
  },
  {
    id: 'zeytinli-kekikli-focaccia',
    baslik: 'Zeytinli Kekikli Focaccia',
    altBaslik: 'Liguria usulü süngerimsi İtalyan ekmeği; bol zeytinyağı, zeytin ve kekikle',
    kategori: 'hamur-isi',
    koleksiyonlar: ['yeni-nesil', 'misafir'],
    emoji: '🫓',
    porsiyon: 6,
    hazirlikDk: 20,
    pisirmeDk: 25,
    zorluk: 'orta',
    kaloriPerPorsiyon: 320,
    beslenmeEtiketleri: ['vegan'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 4, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'instant maya', miktar: 1.5, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 1.75, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'zeytin', miktar: 100, birim: 'g', grup: 'Üzeri için', not: 'çekirdeği çıkarılmış' },
      { ad: 'kekik', miktar: 2, birim: 'çay kaşığı', grup: 'Üzeri için' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Üzeri için', not: 'iri taneli olursa güzel' },
    ],
    adimlar: [
      {
        baslik: 'Cıvık hamuru karıştır',
        aciklama:
          'Unu, mayayı, şekeri ve tuzu karıştır; ılık suyu ve zeytinyağını ekleyip kaşıkla toparlanana kadar karıştır. Hamur normalden yapışkan ve gevşek olacak — focaccia sünger dokusunu bu ıslaklığa borçlu, un ekleme.',
      },
      {
        baslik: 'İlk mayayı ver',
        aciklama:
          'Kabın üzerini kapat ve hamuru hacmi iki katına çıkana kadar sıcak bir yerde mayalandır.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Tepsiye yay',
        aciklama:
          'Derin bir fırın tepsisini bolca yağla. Hamuru tepsiye devir ve yağlı parmaklarla köşelere doğru nazikçe yay. Direniyorsa beş dakika bekleyip devam et; hamurla inatlaşma.',
      },
      {
        baslik: 'İkinci mayada kabart',
        aciklama:
          'Tepsinin üzerini örtüp hamur yeniden kabarana kadar beklet. Bu ikinci mayalanma, içindeki iri gözenekleri oluşturur.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Çukurları aç ve süsle',
        aciklama:
          'Yağlanmış parmaklarını hamura dibe kadar batırarak tüm yüzeyde çukurlar aç. Kalan zeytinyağını üzerine gezdir; zeytinleri çukurlara göm, kekik ve iri tuz serp.',
      },
      {
        baslik: 'Fırında kızart',
        aciklama:
          'Önceden ısıtılmış 220 derece fırında üzeri altın rengi alana kadar pişir. Çıkar çıkmaz tel ızgaraya al; tepside soğuyan focaccianın altı buharda yumuşar.',
        sureSn: 1500,
      },
    ],
    pufNoktasi:
      'Parmakla açılan çukurlar süs değil görevlidir: zeytinyağını hamurun içine taşır ve pişerken küçük kızarmış yağ gölcükleri oluşturur. Çukurları çekinmeden dibe kadar aç.',
  },
  {
    id: 'patates-gnocchi',
    baslik: 'Tereyağlı Adaçaylı Gnocchi',
    altBaslik: 'Patates hamurundan minik İtalyan lokmaları; adaçaylı kızgın tereyağı sosuyla',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'misafir'],
    emoji: '🥔',
    porsiyon: 4,
    hazirlikDk: 45,
    pisirmeDk: 15,
    zorluk: 'zor',
    kaloriPerPorsiyon: 450,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'patates', miktar: 5, birim: 'adet', grup: 'Hamuru için', not: 'orta boy, unlu cins' },
      { ad: 'un', miktar: 1.5, birim: 'su bardağı', grup: 'Hamuru için', not: 'gerektikçe' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'tereyağı', miktar: 80, birim: 'g', grup: 'Sosu için' },
      { ad: 'adaçayı', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'parmesan', miktar: 50, birim: 'g', grup: 'Servis için', not: 'rendelenmiş' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Servis için' },
    ],
    adimlar: [
      {
        baslik: 'Patatesleri kabuklu haşla',
        aciklama:
          'Patatesleri kabuklarıyla, bıçak direnmeden girene kadar haşla. Kabuklu haşlamak patatesin su çekmesini önler; sulu patates, unu bol ve dokusu ağır gnocchi demektir.',
        sureSn: 1500,
      },
      {
        baslik: 'Sıcakken ez',
        aciklama:
          'Haşlanan patatesleri dayanabildiğin sıcaklıkta soy ve ezici ya da rendeyle tezgaha ez. Buharının bir kısmını atması için beş dakika yayılmış halde soğut.',
        sureSn: 300,
        beklemeAdimi: true,
      },
      {
        baslik: 'Hamuru az yoğur',
        aciklama:
          'Ezilmiş patatesin ortasını havuz yap; yumurtayı, tuzu ve unun büyük kısmını ekle. Sadece toparlanana kadar birleştir — yoğurdukça açığa çıkan glüten gnocchiyi lastikleştirir. Yapışıyorsa kalan unu azar azar kat.',
      },
      {
        baslik: 'Fitil aç ve kes',
        aciklama:
          'Hamuru parçalara böl; her parçayı unlu tezgahta parmak kalınlığında fitil haline getir ve iki santimlik lokmalar kes. İstersen her lokmayı çatal sırtında yuvarlayarak sosu tutacak yivler aç.',
      },
      {
        baslik: 'Yüzene kadar haşla',
        aciklama:
          'Kaynar tuzlu suya gnocchileri partiler halinde at. Yüzeye çıktıktan 30 saniye sonra delikli kepçeyle al; yüzmek pişmenin zil sesidir, fazla kalan dağılır.',
        sureSn: 240,
      },
      {
        baslik: 'Adaçaylı tereyağında çevir',
        aciklama:
          'Geniş tavada tereyağını köpürüp fındık kokusu alana kadar ısıt, adaçayını ekle. Haşlanan gnocchileri tavaya al ve kenarları hafif kızarana kadar sallayarak çevir.',
        sureSn: 240,
      },
      {
        baslik: 'Parmesanla servis et',
        aciklama:
          'Tabaklara paylaştır; rendelenmiş parmesan ve taze çekilmiş karabiberle sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Un ölçüsü tarifte değil patateste saklıdır: ne kadar az un o kadar hafif gnocchi. Hamur şekil verilebilen en yapışkan noktada bırakılmalı, kuruluk hissedene kadar un eklenmemeli.',
  },
  {
    id: 'domatesli-bruschetta',
    baslik: 'Domatesli Bruschetta',
    altBaslik: 'Kızarmış sarımsaklı ekmek üstünde zeytinyağlı domates; Toskana meze klasiği',
    kategori: 'salata',
    koleksiyonlar: ['yeni-nesil', '15-dakika', 'misafir'],
    emoji: '🍅',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 5,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 220,
    beslenmeEtiketleri: ['vegan'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'ekmek', miktar: 8, birim: 'dilim', not: 'köy ekmeği ya da baget, kalın kesilmiş' },
      { ad: 'domates', miktar: 4, birim: 'adet', not: 'olgun; küçük küp doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: '1 diş sürmek için bütün kalsın' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı', not: 'sızma' },
      { ad: 'taze fesleğen', miktar: 8, birim: 'adet', not: 'yaprak, elle koparılmış' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.25, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Domatesleri marine et',
        aciklama:
          'Küp doğranmış domatesi süzgeçte beş dakika bekletip fazla suyunu akıt. Kasede rendelenmiş bir diş sarımsak, zeytinyağının yarısı, tuz, karabiber, kekik ve elle koparılmış fesleğenle karıştır; tatların kaynaşması için kenarda beklet.',
        sureSn: 300,
      },
      {
        baslik: 'Ekmekleri kızart',
        aciklama:
          'Ekmek dilimlerini kuru tavada, ızgarada ya da tost makinesinde iki yüzü de belirgin çizgiler alana kadar kızart. Yüzey ne kadar pütürlü olursa sarımsağı o kadar iyi tutar.',
        sureSn: 240,
      },
      {
        baslik: 'Sarımsak sür',
        aciklama:
          'Bütün bıraktığın sarımsak dişini, sıcak ekmeklerin yüzeyine rende gibi sür. Kızarmış yüzey sarımsağı törpüleyip kokusunu ekmeğe işler; bu küçük hareket bruschettanın imzasıdır.',
      },
      {
        baslik: 'Doldur ve tamamla',
        aciklama:
          'Marine domatesi kaşıkla dilimlerin üzerine paylaştır. Kalan zeytinyağını gezdir ve servis tabağına diz.',
      },
      {
        baslik: 'Bekletmeden sun',
        aciklama:
          'Hazırladıktan sonra en geç on dakika içinde servis et; domatesin suyu ekmeğe inmeye başlamadan yenen bruschetta, çıtırlığıyla hatırlanır.',
      },
    ],
    pufNoktasi:
      'Domatesi süzmek adım değil sigortadır: beş dakikalık süzme, ekmeğin ıslanıp dağılmasını önler ve domates tadını yoğunlaştırır.',
  },
  {
    id: 'caprese-salata',
    baslik: 'Caprese Salata',
    altBaslik: 'Capri adası klasiği; domates, mozzarella ve fesleğenin üç renkli buluşması',
    kategori: 'salata',
    koleksiyonlar: ['yeni-nesil', '15-dakika', 'misafir'],
    emoji: '🥗',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'domates', miktar: 4, birim: 'adet', not: 'olgun, iri; oda sıcaklığında' },
      { ad: 'mozzarella', miktar: 250, birim: 'g', not: 'taze top mozzarella idealdir' },
      { ad: 'taze fesleğen', miktar: 12, birim: 'adet', not: 'yaprak' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', not: 'sızma' },
      { ad: 'nar ekşisi', miktar: 1, birim: 'yemek kaşığı', not: 'balzamik yerine' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.25, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Domatesleri dilimle',
        aciklama:
          'Oda sıcaklığındaki domatesleri yarım santim kalınlığında yuvarlak dilimle. Buzdolabından çıkmış soğuk domates aromasını saklar; bu salatanın tek pişirme tekniği sıcaklıktır.',
      },
      {
        baslik: 'Mozzarellayı dilimle',
        aciklama:
          'Mozzarellayı domatesle aynı kalınlıkta dilimle ve süzgeç üzerinde bir-iki dakika bekletip fazla suyunu akıt.',
      },
      {
        baslik: 'Tabağa sırayla diz',
        aciklama:
          'Servis tabağına bir dilim domates, bir dilim mozzarella ve bir fesleğen yaprağını hafif üst üste bindirerek diz; İtalyan bayrağının üç rengi tabakta dönsün.',
      },
      {
        baslik: 'Soslandır',
        aciklama:
          'Tuz ve karabiberi yalnızca domateslerin üzerine serp. Zeytinyağını her yere, nar ekşisini ince çizgiler halinde gezdir.',
      },
      {
        baslik: 'Hemen servis et',
        aciklama:
          'Caprese bekleyen bir salata değildir; hazırlandığı anda, oda sıcaklığında sofraya çıkar.',
      },
    ],
    pufNoktasi:
      'Tuzun peynire değil domatese atılması bilinçli bir seçim: tuz domatesin suyunu ve şekerini yüzeye çeker, mozzarella ise sade kalarak sütlü tadını korur.',
  },
  {
    id: 'penne-arrabbiata',
    baslik: 'Penne Arrabbiata',
    altBaslik: 'Roma usulü öfkeli makarna; sarımsaklı, acı pul biberli domates sosla',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🌶️',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 420,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'makarna', miktar: 400, birim: 'g', not: 'penne' },
      { ad: 'domates', miktar: 5, birim: 'adet', not: 'olgun, rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'sarımsak', miktar: 4, birim: 'diş', not: 'ince dilimlenmiş' },
      { ad: 'pul biber', miktar: 1.5, birim: 'çay kaşığı', not: 'acı seviyesine göre ayarla' },
      { ad: 'zeytinyağı', miktar: 5, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'yemek kaşığı', not: 'haşlama suyu dahil' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'parmesan', miktar: 40, birim: 'g', not: 'isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Yağa acıyı işle',
        aciklama:
          'Geniş tavada zeytinyağını kısık ateşte ılıt; sarımsak dilimlerini ve pul biberi ekleyip sarımsaklar kenarlarından hafif sararana kadar yavaşça çevir. Acı ve koku yağa bu adımda geçer; yakarsan sos baştan kaybeder.',
        sureSn: 180,
      },
      {
        baslik: 'Domatesi ekle',
        aciklama:
          'Rendelenmiş domatesi, salçayı, tuzu ve şekeri tavaya ekle. Orta ateşte, sos koyulaşıp yağını kenarlarından geri verene kadar pişir.',
        sureSn: 720,
      },
      {
        baslik: 'Penneyi diri haşla',
        aciklama:
          'Sos pişerken penneyi bol tuzlu kaynar suda paket süresinden iki dakika az haşla. Bir su bardağı haşlama suyunu ayırdıktan sonra süz.',
        sureSn: 540,
      },
      {
        baslik: 'Sosla buluştur',
        aciklama:
          'Süzülen makarnayı sosun içine al; ayırdığın haşlama suyundan ekleyerek orta ateşte iki dakika birlikte pişir. Penne son dakikalarını sosta geçirince acı, her borunun içine dolar.',
        sureSn: 120,
      },
      {
        baslik: 'Yeşillendirip servis et',
        aciklama:
          'Ocaktan alıp maydanozu karıştır. Dileyene parmesan rendesiyle, dumanı üstünde servis et.',
      },
    ],
    pufNoktasi:
      'Arrabbiatanın acısı biberden değil yağdan gelir: pul biberi domatese değil, en başta ılık zeytinyağına atmak acıyı sosun tamamına eşit dağıtır.',
  },
  {
    id: 'firinda-patlican-parmigiana',
    baslik: 'Fırında Patlıcan Parmigiana',
    altBaslik: 'Güney İtalya klasiği; kat kat közlenmiş patlıcan, domates sos ve iki peynir',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'misafir'],
    emoji: '🍆',
    porsiyon: 6,
    hazirlikDk: 30,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 380,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'patlıcan', miktar: 4, birim: 'adet', not: 'iri; boyuna dilimlenmiş' },
      { ad: 'domates', miktar: 6, birim: 'adet', grup: 'Sos için', not: 'rendelenmiş' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', grup: 'Sos için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sos için' },
      { ad: 'zeytinyağı', miktar: 6, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'Sos için' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'çay kaşığı', grup: 'Sos için' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'mozzarella', miktar: 250, birim: 'g', not: 'dilimlenmiş' },
      { ad: 'parmesan', miktar: 80, birim: 'g', not: 'rendelenmiş' },
      { ad: 'taze fesleğen', miktar: 10, birim: 'adet', not: 'yaprak' },
    ],
    adimlar: [
      {
        baslik: 'Patlıcanları terlet',
        aciklama:
          'Boyuna yarım santim kalınlığında dilimlediğin patlıcanları tuzlayıp süzgeçte 20 dakika beklet. Salınan acı su kararan rengiyle kendini belli eder; dilimleri durulayıp kağıt havluyla iyice kurula.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Fırında kızart',
        aciklama:
          'Dilimleri zeytinyağıyla fırçalayıp tek kat halinde tepsiye diz; 220 derece fırında iki yüzü de renk alana kadar pişir. Bol yağda kızartmaya göre hem hafif hem zahmetsiz.',
        sureSn: 1200,
      },
      {
        baslik: 'Domates sosu pişir',
        aciklama:
          'Tencerede iki kaşık zeytinyağında ezilmiş sarımsağı bir dakika çevir; rendelenmiş domatesi, salçayı, kekiği, şekeri ve tuzu ekleyip sos koyulaşana kadar orta ateşte kaynat.',
        sureSn: 900,
      },
      {
        baslik: 'Katları kur',
        aciklama:
          'Fırın kabının tabanına iki kaşık sos sür. Sırasıyla patlıcan dilimleri, sos, fesleğen yaprakları, mozzarella ve parmesan serperek üç kat oluştur; en üstte sos ve bolca parmesan kalsın.',
      },
      {
        baslik: 'Fırında bütünleştir',
        aciklama:
          '190 derece fırında üzeri kabarcıklar çıkarıp kızarana kadar pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Dinlendirip dilimle',
        aciklama:
          'Fırından çıkan parmigianayı 15 dakika dinlendir; katlar otursun ki dilimler dik dursun. Ilık haliyle servis et — İtalyada da sıcak değil ılık yenir.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Patlıcanı kızartmak yerine fırınlamak sadece hafiflik değil kıvam meselesi: az yağ çeken dilimler sosun içinde erimez, katlar dilim dilim kesilebilir kalır.',
  },
  {
    id: 'cilekli-panna-cotta',
    baslik: 'Çilek Soslu Panna Cotta',
    altBaslik: 'Piemonte klasiği; kaşığın yanından titreyen sütlü krema, taze çilek sosuyla',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'misafir'],
    emoji: '🍮',
    porsiyon: 6,
    hazirlikDk: 20,
    pisirmeDk: 10,
    zorluk: 'orta',
    kaloriPerPorsiyon: 310,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [4, 5, 6],
    malzemeler: [
      { ad: 'krema', miktar: 400, birim: 'ml', grup: 'Kreması için' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı', grup: 'Kreması için' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'su bardağı', grup: 'Kreması için' },
      { ad: 'vanilin', miktar: 1, birim: 'paket', grup: 'Kreması için' },
      { ad: 'guar/jelatin (toz)', miktar: 2, birim: 'tatlı kaşığı', grup: 'Kreması için' },
      { ad: 'su', miktar: 3, birim: 'yemek kaşığı', grup: 'Kreması için', not: 'soğuk; jelatini açmak için' },
      { ad: 'çilek', miktar: 300, birim: 'g', grup: 'Sosu için' },
      { ad: 'toz şeker', miktar: 3, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', grup: 'Sosu için', not: 'suyu' },
    ],
    adimlar: [
      {
        baslik: 'Jelatini uyandır',
        aciklama:
          'Toz jelatini üç kaşık soğuk suyun üzerine serp ve beş dakika bekleterek şişmesini sağla. Bu bekleme atlanırsa jelatin kremada topaklanır.',
        sureSn: 300,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kremayı ısıt',
        aciklama:
          'Kremayı, sütü, şekeri ve vanilini tencereye al; kenarlarından ufak kabarcıklar çıkana kadar karıştırarak ısıt. Kaynatma — kaynayan krema jelatinin gücünü kırar.',
        sureSn: 300,
      },
      {
        baslik: 'Jelatini erit',
        aciklama:
          'Tencereyi ocaktan al, şişmiş jelatini ekle ve tamamen eriyene kadar bir dakika karıştır. Parmak ucuyla kontrol et; tanecik hissi kalmamalı.',
      },
      {
        baslik: 'Kaplara paylaştır',
        aciklama:
          'Karışımı süzgeçten geçirerek altı küçük kaba ya da kupaya paylaştır. Oda sıcaklığına gelince buzdolabına kaldır.',
      },
      {
        baslik: 'Soğukta dondur',
        aciklama:
          'Panna cottaları buzdolabında en az dört saat, ideali bir gece beklet. Doğru kıvam kalıptan çıkınca hafifçe titreyen, kaşıkta kesilen kıvamdır.',
        sureSn: 14400,
        beklemeAdimi: true,
      },
      {
        baslik: 'Çilek sosunu pişir',
        aciklama:
          'Çileklerin yarısını şeker ve limon suyuyla ezerek, kalanını iri parçalar halinde tencereye al. Orta ateşte parlak bir sos kıvamına gelene kadar beş dakika kaynat ve soğut.',
        sureSn: 300,
      },
      {
        baslik: 'Sosla taçlandırıp sun',
        aciklama:
          'Servis anında soğuk çilek sosunu panna cottaların üzerine paylaştır. Kalıptan çıkarmak istersen kabı üç saniye sıcak suya batırıp tabağa ters çevir.',
      },
    ],
    pufNoktasi:
      'Panna cottanın sırrı jelatin azlığındadır: dimdik duran değil, tabağa vurunca hafifçe titreyen tatlı doğru olandır. Ölçüyü artırma isteğine direnmek gerekir.',
  },
  {
    id: 'sebzeli-frittata',
    baslik: 'Sebzeli Frittata',
    altBaslik: 'İtalyan usulü fırında kalın omlet; kabak, biber ve parmesanla kahvaltı klasiği',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['yeni-nesil', '15-dakika'],
    emoji: '🍳',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 280,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 8, birim: 'adet' },
      { ad: 'kabak', miktar: 1, birim: 'adet', not: 'yarım ay dilimlenmiş' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'şerit doğranmış' },
      { ad: 'taze soğan', miktar: 3, birim: 'adet', not: 'ince kıyılmış' },
      { ad: 'süt', miktar: 0.5, birim: 'çay bardağı' },
      { ad: 'parmesan', miktar: 50, birim: 'g', not: 'rendelenmiş' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri soteleyerek başla',
        aciklama:
          'Fırına girebilen bir tavada zeytinyağını ısıt; kabağı ve kırmızı biberi suyunu atıp hafif renk alana kadar sotele. Taze soğanı son dakikada ekle. Islak sebze frittatayı sulandırır; acele etme.',
        sureSn: 420,
      },
      {
        baslik: 'Yumurtaları çırp',
        aciklama:
          'Kasede yumurtaları, sütü, tuzu, karabiberi ve parmesanın büyük kısmını iyice çırp; maydanozu ekleyip bir kez daha karıştır.',
      },
      {
        baslik: 'Karışımı tavaya dök',
        aciklama:
          'Çırpılmış karışımı sebzelerin üzerine dök ve tavayı hafifçe sallayarak eşit dağılmasını sağla. Kısık ateşte, kenarlar tutup ortası hâlâ akışkanken ocaktan alacağın kıvama getir.',
        sureSn: 300,
      },
      {
        baslik: 'Fırında tamamla',
        aciklama:
          'Kalan parmesanı serpip tavayı 200 derece fırının üst rafına ver. Ortası şişip yüzeyi altın rengi olunca çıkar; şiş inince frittata tam kıvamındadır.',
        sureSn: 420,
      },
      {
        baslik: 'Ilık dilimle',
        aciklama:
          'Beş dakika dinlendirdikten sonra tavadan tabağa kaydır ve pasta gibi dilimleyerek servis et. Frittata sıcak da ılık da yenir; soğuğu bile piknik klasiğidir.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Ocakta tam pişirmeye çalışmak frittatanın en sık hatasıdır: altı kayışlaşır. Ortası cıvıkken fırına devretmek, her yerinden eşit pişmiş sufle gibi bir doku verir.',
  },
  {
    id: 'lorlu-limonlu-krep',
    baslik: 'Lorlu Limonlu Tatlı Krep',
    altBaslik: 'İtalyan crespelle esintisi; ricotta yerine lorlu limonlu dolgu, ince kreplerde',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🥞',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 1, birim: 'su bardağı', grup: 'Krep hamuru için' },
      { ad: 'süt', miktar: 1.5, birim: 'su bardağı', grup: 'Krep hamuru için' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', grup: 'Krep hamuru için' },
      { ad: 'toz şeker', miktar: 1, birim: 'yemek kaşığı', grup: 'Krep hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'tutam', grup: 'Krep hamuru için' },
      { ad: 'tereyağı', miktar: 30, birim: 'g', grup: 'Krep hamuru için', not: 'eritilmiş' },
      { ad: 'lor peyniri', miktar: 300, birim: 'g', grup: 'Dolgusu için', not: 'tuzsuz' },
      { ad: 'toz şeker', miktar: 4, birim: 'yemek kaşığı', grup: 'Dolgusu için' },
      { ad: 'limon', miktar: 1, birim: 'adet', grup: 'Dolgusu için', not: 'kabuğu rendelenmiş, yarısının suyu' },
      { ad: 'vanilin', miktar: 1, birim: 'paket', grup: 'Dolgusu için' },
      { ad: 'pudra şekeri', miktar: 2, birim: 'yemek kaşığı', grup: 'Servis için' },
    ],
    adimlar: [
      {
        baslik: 'Krep hamurunu dinlendir',
        aciklama:
          'Unu, sütü, yumurtaları, şekeri, tuzu ve eritilmiş tereyağını pürüzsüz olana kadar çırp. Hamuru buzdolabında 20 dakika dinlendir; dinlenen hamur tavada yırtılmayan esnek krepler verir.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Dolguyu hazırla',
        aciklama:
          'Loru çatalla ez; şekeri, limon kabuğu rendesini, limon suyunu ve vanilini ekleyip krema kıvamına gelene kadar karıştır. Lor iriyse süzgeçten geçirmek dokuyu ricottaya yaklaştırır.',
      },
      {
        baslik: 'İnce krepler pişir',
        aciklama:
          'Yağlanmış orta boy tavayı iyice ısıt; bir kepçe hamuru döküp tavayı çevirerek incecik yay. Kenarları kalkıp altı benekli kızarınca çevir, diğer yüzü yarım dakika pişir. Hamur bitene kadar tekrarla.',
        sureSn: 900,
      },
      {
        baslik: 'Doldur ve rulola',
        aciklama:
          'Her krebin alt yarısına iki kaşık lorlu dolgu sür; önce yarım katla, sonra üçgen olacak şekilde bir kez daha katla ya da rulo yap.',
      },
      {
        baslik: 'Tavada mühürle',
        aciklama:
          'Dolgulu krepleri az tereyağlı tavada, iki yüzü de hafif kızarıp içi ısınana kadar birer dakika çevir. Bu kısa mühürleme dolguyu ılıtır ve kokuları birleştirir.',
        sureSn: 240,
      },
      {
        baslik: 'Pudra şekeriyle sun',
        aciklama:
          'Krepleri tabağa diz, üzerlerine süzgeçle pudra şekeri serp ve dilersen birkaç damla limon suyu gezdirerek ılık servis et.',
      },
    ],
    pufNoktasi:
      'Limon kabuğu rendesi bu tatlının motorudur; ama beyaz kısmına inmeden yalnızca sarı yüzeyi rendele. Beyazı acılık, sarısı parfüm taşır.',
  },
];
