import type { Tarif } from '@/types/tarif';

// Kurabiye & atıştırmalık — çay saati tuzluları, fırın atıştırmalıkları ve fit toplar.
// Tüm metinler özgündür; malzeme adları sözlükle birebir uyumludur.
export const KURABIYE_ATISTIRMALIK: Tarif[] = [
  {
    id: 'tuzlu-corek-otlu-cay-kurabiyesi',
    baslik: 'Çörek Otlu Tuzlu Çay Kurabiyesi',
    altBaslik: 'Ağızda dağılan, çörek otu kokulu klasik tuzlu kurabiye; demli çayın vazgeçilmez eşi',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🍪',
    porsiyon: 8,
    hazirlikDk: 20,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3, birim: 'su bardağı' },
      { ad: 'tereyağı', miktar: 125, birim: 'g', not: 'oda sıcaklığında' },
      { ad: 'yoğurt', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', not: 'akı hamura, sarısı üzerine' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'paket' },
      { ad: 'çörek otu', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Yağlı karışımı hazırla',
        aciklama:
          'Oda sıcaklığındaki tereyağını yoğurt, yumurta akı ve tuzla geniş bir kapta krema kıvamına gelene dek karıştır.',
      },
      {
        baslik: 'Hamuru topla',
        aciklama:
          'Kabartma tozu ve çörek otunu ekle; unu azar azar ilave ederek kulak memesinden biraz sert, ele yapışmayan bir hamur yoğur. Fazla yoğurma, kurabiye sertleşir.',
      },
      {
        baslik: 'Kurabiyeleri şekillendir',
        aciklama:
          'Hamurdan ceviz iriliğinde parçalar kopar, avucunda yuvarlayıp hafifçe bastır. Yağlı kağıtlı tepsiye aralıklı diz, üzerlerine yumurta sarısı sür.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 175 derece fırında altları hafif pembeleşene kadar yaklaşık 25 dakika pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Telde soğut',
        aciklama:
          'Kurabiyeler sıcakken çok narindir; tepsiden almadan 15 dakika bekle, sonra tel üzerinde tamamen soğut.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Tereyağı buzdolabından yeni çıkmışsa hamur toparlanmaz; en az yarım saat önce dışarı al. Çörek otunu avucunda hafifçe ovarak eklersen kokusu belirginleşir.',
  },
  {
    id: 'peynirli-kurabiye',
    baslik: 'Peynirli Kurabiye',
    altBaslik: 'Hamuruna beyaz peynir yoğrulan, üstü susamlı, tuzunu peynirden alan çıtır kurabiye',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🧀',
    porsiyon: 8,
    hazirlikDk: 20,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 280,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 2.5, birim: 'su bardağı' },
      { ad: 'tereyağı', miktar: 100, birim: 'g', not: 'oda sıcaklığında' },
      { ad: 'beyaz peynir', miktar: 150, birim: 'g', not: 'ezilmiş' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', not: 'sarısı üzerine ayrılacak' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'paket' },
      { ad: 'susam', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', not: 'isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Peyniri ez ve karıştır',
        aciklama:
          'Beyaz peyniri çatalla iyice ez; tereyağı ve yumurta akıyla pürüzsüz olana kadar karıştır. Peynir tuzlu olduğu için ayrıca tuz ekleme.',
      },
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Kabartma tozu ve dilersen pul biberi ekle; unu azar azar katarak yumuşak, ele yapışmayan bir hamur elde et.',
      },
      {
        baslik: 'Şekil ver ve süsle',
        aciklama:
          'Ceviz büyüklüğünde bezeler yuvarlayıp hafifçe yassılt. Tepsiye dizdikten sonra yumurta sarısı sürüp bolca susam serp.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 180 derece fırında üzerleri kızarana kadar 22-25 dakika pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Soğumaya bırak',
        aciklama: 'Tepside 10 dakika dinlendirip telde soğut; peynirin aroması soğuyunca oturur.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Peynir çok sulu ise bir süzgeçte 10 dakika süzdür; aksi halde hamur un kaldırır ve kurabiye ağırlaşır.',
  },
  {
    id: 'susamli-cubuk-kraker',
    baslik: 'Susamlı Çubuk Kraker',
    altBaslik: 'Ev yapımı, katkısız, kıtır kıtır susamlı çubuklar; paketlisini aratmayan tazelikte',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir', 'yeni-nesil'],
    emoji: '🥨',
    porsiyon: 6,
    hazirlikDk: 25,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 240,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 2, birim: 'su bardağı' },
      { ad: 'tereyağı', miktar: 75, birim: 'g', not: 'oda sıcaklığında' },
      { ad: 'yoğurt', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'kabartma tozu', miktar: 0.5, birim: 'paket' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', not: 'sarısı üzerine' },
      { ad: 'susam', miktar: 3, birim: 'yemek kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Tereyağı, yoğurt, tuz ve kabartma tozunu karıştır; unu ekleyerek pürüzsüz, orta sertlikte bir hamur yoğur. Üstünü kapatıp 10 dakika dinlendir.',
      },
      {
        baslik: 'Çubukları şekillendir',
        aciklama:
          'Hamurdan küçük parçalar kopar; avuç içinde kalem kalınlığında, bir karış boyunda çubuklar yuvarla. İnce olmaları kıtırlığın sırrı.',
      },
      {
        baslik: 'Susama bula',
        aciklama:
          'Çubukların üzerine yumurta sarısı sür, susama bulayıp yağlı kağıt serili tepsiye aralıklı diz.',
      },
      {
        baslik: 'Fırında kızart',
        aciklama:
          'Önceden ısıtılmış 180 derece fırında altın rengi alana kadar 18-20 dakika pişir; son 2 dakika göz kulak ol, susam çabuk yanar.',
        sureSn: 1200,
      },
      {
        baslik: 'Tamamen soğut',
        aciklama:
          'Krakerler soğudukça kıtırlaşır; tepside en az 20 dakika beklet, sonra ağzı kapalı kavanozda sakla.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Çubukları eşit kalınlıkta yuvarlarsan hepsi aynı anda pişer; kalın olanlar içi hamur kalıp yumuşar.',
  },
  {
    id: 'parmesanli-ev-grissinisi',
    baslik: 'Parmesanlı Ev Grissinisi',
    altBaslik: 'İtalyan usulü ince ekmek çubukları; parmesan ve zeytinyağıyla çay-şarap ortası şıklık',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir', 'yeni-nesil'],
    emoji: '🥖',
    porsiyon: 6,
    hazirlikDk: 20,
    pisirmeDk: 15,
    zorluk: 'orta',
    kaloriPerPorsiyon: 250,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 2.5, birim: 'su bardağı' },
      { ad: 'instant maya', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'ılık' },
      { ad: 'parmesan', miktar: 40, birim: 'g', not: 'rendelenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Un, maya, şeker ve tuzu karıştır; ılık su ile zeytinyağını ekleyip 5 dakika yoğurarak yumuşak, esnek bir hamur elde et.',
      },
      {
        baslik: 'Mayalanmaya bırak',
        aciklama: 'Hamurun üstünü nemli bezle örtüp ılık bir köşede hacmi ikiye katlanana dek 40 dakika dinlendir.',
        sureSn: 2400,
        beklemeAdimi: true,
      },
      {
        baslik: 'Çubukları aç',
        aciklama:
          'Hamuru hafif unlu tezgahta dikdörtgen açıp parmak kalınlığında şeritler kes. Her şeridi iki ucundan tutup hafif burarak uzat, tepsiye diz.',
      },
      {
        baslik: 'Parmesanla kapla',
        aciklama:
          'Çubuklara fırça ile ince bir kat zeytinyağı sür ve rendelenmiş parmesanı üzerlerine yapışacak şekilde serp.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 200 derece fırında altın sarısı ve kupkuru olana kadar 13-15 dakika pişir; telde soğut.',
        sureSn: 900,
      },
    ],
    pufNoktasi:
      'Grissiniyi ne kadar ince açarsan o kadar çıtır olur; kalın kalanlar ekmeksi kalır. Soğuduktan sonra kağıt torbada saklarsan yumuşamaz.',
  },
  {
    id: 'patates-kroketi',
    baslik: 'Patates Kroketi',
    altBaslik: 'Dışı galeta kabuğunda çıtır, içi kaşarlı püre yumuşaklığında fırın kroketleri',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['airfryer', 'yeni-nesil', 'sokak-lezzeti'],
    emoji: '🥔',
    porsiyon: 6,
    hazirlikDk: 30,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 290,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'patates', miktar: 4, birim: 'adet', not: 'iri boy' },
      { ad: 'kaşar peyniri', miktar: 100, birim: 'g', not: 'rendelenmiş' },
      { ad: 'un', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', not: 'biri içe, biri panelemeye' },
      { ad: 'galeta unu', miktar: 1, birim: 'su bardağı' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı', not: 'üzerine sürmek için' },
    ],
    adimlar: [
      {
        baslik: 'Patatesleri haşla ve ez',
        aciklama:
          'Patatesleri kabuklu haşla, sıcakken soy ve püre olana kadar ez. Tam soğumadan çalışmak şekil vermeyi kolaylaştırır.',
      },
      {
        baslik: 'İç harcı hazırla',
        aciklama:
          'Püreye kaşar, un, bir yumurta, kıyılmış maydanoz, tuz ve karabiberi ekleyip homojen bir harç yap.',
      },
      {
        baslik: 'Kroketleri şekillendir',
        aciklama:
          'Harçtan parçalar alıp parmak kalınlığında silindirler yap. Çırpılmış yumurtaya, ardından galeta ununa bula.',
      },
      {
        baslik: 'Fırında ya da airfryerda pişir',
        aciklama:
          'Kroketlerin üzerine fırçayla ayçiçek yağı sür. 200 derece fırında 20 dakika ya da airfryerda 190 derecede 12 dakika, ara çevirerek kızart.',
        sureSn: 1200,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama: 'Fırından çıkınca 5 dakika dinlendir; peynir yerine oturur ve kroket dağılmadan kesilir.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Püre sulu olursa kroket dağılır; haşlanan patatesi süzdükten sonra tencerede 1 dakika kısık ateşte kurutursan harç sıkı olur.',
  },
  {
    id: 'firinda-sogan-halkasi',
    baslik: 'Fırında Soğan Halkası',
    altBaslik: 'Yağda yüzdürmeden, fırında ya da airfryerda kızaran çıtır kaplamalı soğan halkaları',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['airfryer', 'yeni-nesil', 'sokak-lezzeti'],
    emoji: '🧅',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 18,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 230,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'soğan', miktar: 3, birim: 'adet', not: 'iri, kalın halkalar' },
      { ad: 'un', miktar: 1, birim: 'su bardağı' },
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'galeta unu', miktar: 1.5, birim: 'su bardağı' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'sarımsak tozu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı', not: 'üzerine' },
    ],
    adimlar: [
      {
        baslik: 'Soğanları halkalara ayır',
        aciklama:
          'Soğanları bir parmak kalınlığında dilimle ve halkalara ayır. İnce iç halkaları başka yemeğe sakla; iri halkalar daha güzel kaplanır.',
      },
      {
        baslik: 'Paneleme istasyonu kur',
        aciklama:
          'Üç kaba sırayla un, çırpılmış yumurta ve baharatlarla (tatlı toz biber, sarımsak tozu, tuz) karıştırılmış galeta ununu koy.',
      },
      {
        baslik: 'Halkaları kapla',
        aciklama:
          'Her halkayı önce una, sonra yumurtaya, en son galeta karışımına bula; hafifçe bastırarak kaplamayı yapıştır.',
      },
      {
        baslik: 'Fırında kızart',
        aciklama:
          'Halkalara ayçiçek yağı gezdir. 200 derece fırında 18 dakika ya da airfryerda 190 derecede 10 dakika, yarı sürede çevirerek pişir.',
        sureSn: 1080,
      },
    ],
    pufNoktasi:
      'Soğanları kapladıktan sonra tepside 10 dakika beklet; kaplama nemi çekip yapışır ve pişerken dökülmez.',
  },
  {
    id: 'milfoy-peynirli-citir-ucgen',
    baslik: 'Milföy Peynirli Çıtır Üçgenler',
    altBaslik: 'Hazır milföyle 10 dakikada hazırlanan, kat kat açılan peynirli çıtır üçgen börekler',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir', 'yeni-nesil'],
    emoji: '🥐',
    porsiyon: 5,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 330,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'milföy hamuru', miktar: 5, birim: 'adet', not: 'çözdürülmüş' },
      { ad: 'beyaz peynir', miktar: 200, birim: 'g', not: 'ezilmiş' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', not: 'sarısı üzerine' },
      { ad: 'susam', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'çörek otu', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'İç harcı karıştır',
        aciklama:
          'Ezilmiş beyaz peyniri kıyılmış maydanozla karıştır. Peynir çok tuzluysa 5 dakika suda beklet ve süz.',
      },
      {
        baslik: 'Üçgenleri kapat',
        aciklama:
          'Her milföy yaprağını köşeden ikiye kesip üçgenler elde et; ortasına bir kaşık harç koy, kenarlarını çatalla bastırarak kapat.',
      },
      {
        baslik: 'Üzerlerini süsle',
        aciklama:
          'Üçgenleri yağlı kağıt serili tepsiye diz; yumurta sarısı sürüp susam ve çörek otu serp.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 190 derece fırında katları kabarıp kızarana kadar 22-25 dakika pişir. Kapağını erken açma, katlar söner.',
        sureSn: 1500,
      },
    ],
    pufNoktasi:
      'Milföy soğuk çalışmayı sever; şekillendirene kadar kullanmadığın yaprakları buzdolabında tut, yağı eriyen milföy katlanmaz.',
  },
  {
    id: 'firinda-elma-cipsi',
    baslik: 'Fırında Elma Cipsi',
    altBaslik: 'Şekersiz, tarçınla tatlanan incecik elma dilimleri; düşük ısıda kurutulan hafif cips',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['fit', 'yeni-nesil'],
    emoji: '🍎',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 120,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 150,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz', 'diyabetik-dostu'],
    editorOnayli: true,
    mevsimAylari: [9, 10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'elma', miktar: 6, birim: 'adet', not: 'sert ve ekşimsi' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Elmaları incecik dilimle',
        aciklama:
          'Elmaları yıkayıp kurula; kabuklu halde, mümkünse dilimleyici ile 2-3 milimetre inceliğinde enine dilimle ve çekirdek kısmını çıkar.',
      },
      {
        baslik: 'Limonlu suda beklet',
        aciklama:
          'Dilimleri limon suyu eklenmiş suda 2 dakika beklet, süzüp kağıt havluyla kurula; böylece kararmazlar.',
      },
      {
        baslik: 'Tarçınla kurut',
        aciklama:
          'Dilimleri yağlı kağıtlı tepsiye tek kat diz, tarçın serp. 110 derece fırında, kapağı hafif aralık, 2 saat kurut; yarı sürede çevir.',
        sureSn: 7200,
      },
      {
        baslik: 'Fırında soğut',
        aciklama:
          'Fırını kapat, cipsleri kapalı fırında 20 dakika beklet; asıl çıtırlığını soğurken kazanır.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Dilimler ne kadar eşit incelikte olursa hepsi aynı anda kurur; fırından çıkınca yumuşak duranlar soğuyunca kıtırlaşmıyorsa 15 dakika daha kurut.',
  },
  {
    id: 'baharatli-kavrulmus-nohut',
    baslik: 'Baharatlı Kavrulmuş Nohut',
    altBaslik: 'Fırında çıtırlaşan, kimyon ve tatlı biberle harmanlanmış sağlıklı atıştırmalık nohut',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['fit', 'yeni-nesil', 'airfryer'],
    emoji: '🥜',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 200,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'nohut', miktar: 300, birim: 'g', not: 'haşlanmış, süzülmüş' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Nohutları iyice kurula',
        aciklama:
          'Haşlanmış nohutları süz, temiz bir bez üzerinde iyice kurula ve soyulan zarları ayıkla; kuru nohut daha iyi çıtırlar.',
      },
      {
        baslik: 'Yağla harmanla',
        aciklama:
          'Nohutları sadece zeytinyağıyla karıştır; baharatları şimdilik ekleme, yüksek ısıda yanarlar.',
      },
      {
        baslik: 'Fırında kavur',
        aciklama:
          'Tek kat yayılmış nohutları 200 derece fırında 30-35 dakika, 10 dakikada bir tepsiyi sallayarak kavur. Airfryerda 190 derecede 20 dakika yeterli.',
        sureSn: 2100,
      },
      {
        baslik: 'Baharatla ve soğut',
        aciklama:
          'Sıcak nohutları tatlı toz biber, kimyon, pul biber ve tuzla harmanla; tepside 15 dakika soğut, çıtırlığı otursun.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Nohutlar soğudukça yumuşuyorsa fırında 5 dakika daha tut; hava alan bir kapta saklarsan iki gün çıtır kalır, kapalı kapta yumuşar.',
  },
  {
    id: 'balli-yulafli-ev-granolasi',
    baslik: 'Ballı Yulaflı Ev Granolası',
    altBaslik: 'Fındık, badem ve kuru üzümle zenginleşen, bal ile kümelenen katkısız kahvaltı granolası',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['fit', 'yeni-nesil', 'meal-prep'],
    emoji: '🥣',
    porsiyon: 8,
    hazirlikDk: 10,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 290,
    beslenmeEtiketleri: ['vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yulaf ezmesi', miktar: 3, birim: 'su bardağı' },
      { ad: 'bal', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'fındık içi', miktar: 50, birim: 'g', not: 'iri kırılmış' },
      { ad: 'badem', miktar: 50, birim: 'g', not: 'iri kırılmış' },
      { ad: 'kabak çekirdeği (iç)', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'kuru üzüm', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Ballı karışımı hazırla',
        aciklama:
          'Balı ve ayçiçek yağını küçük bir tencerede hafif ısıtıp akışkanlaştır; tarçın ve tuzu içine karıştır.',
      },
      {
        baslik: 'Kuruları harmanla',
        aciklama:
          'Yulaf ezmesi, kırılmış fındık, badem ve kabak çekirdeğini geniş kapta karıştır; ballı karışımı üzerine gezdirip her tanesi nemlenene dek harmanla.',
      },
      {
        baslik: 'Fırında kızart',
        aciklama:
          'Karışımı yağlı kağıtlı tepsiye yay ve 160 derece fırında 25 dakika pişir; 10. ve 20. dakikalarda kenardan ortaya doğru karıştır.',
        sureSn: 1500,
      },
      {
        baslik: 'Karıştırmadan soğut',
        aciklama:
          'Tepsiyi fırından alınca granolaya dokunmadan 30 dakika soğut; kümeler bu sırada oluşur. Soğuyunca kuru üzümü ekle.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Kümeli granola istiyorsan pişince kesinlikle karıştırma; soğuyan tabakayı elinle iri parçalara kır. Kuru üzüm fırına girerse taşlaşır, mutlaka en son ekle.',
  },
  {
    id: 'hurmali-enerji-toplari',
    baslik: 'Hurmalı Enerji Topları',
    altBaslik: 'Pişirme gerektirmeyen, hurma ve fıstık ezmesiyle tatlanan tek lokmalık fit toplar',
    kategori: 'tatli',
    koleksiyonlar: ['fit', 'yeni-nesil', '15-dakika'],
    emoji: '🍯',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: ['vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'hurma', miktar: 12, birim: 'adet', not: 'çekirdeği çıkarılmış' },
      { ad: 'yer fıstığı ezmesi', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'yulaf ezmesi', miktar: 1, birim: 'su bardağı' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'hindistan cevizi', miktar: 2, birim: 'yemek kaşığı', not: 'bulamak için' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Hurmaları ez',
        aciklama:
          'Çekirdeksiz hurmaları rondodan geçir ya da bıçakla çok ince kıyıp ezerek macun kıvamına getir. Sert hurmaları 5 dakika sıcak suda bekletebilirsin.',
      },
      {
        baslik: 'Harcı yoğur',
        aciklama:
          'Hurma ezmesini yer fıstığı ezmesi, yulaf ezmesi, bal ve bir tutam tuzla ele yapışmayan, şekil alan bir harç olana dek yoğur.',
      },
      {
        baslik: 'Topları yuvarla',
        aciklama:
          'Harçtan ceviz iriliğinde parçalar alıp avucunda sıkıca yuvarla; hindistan cevizine bula.',
      },
      {
        baslik: 'Buzdolabında dinlendir',
        aciklama:
          'Topları kapalı kapta buzdolabında 30 dakika dinlendir; soğudukça toparlanır ve lokum kıvamı alır.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Harç dağılıyorsa bir kaşık daha fıstık ezmesi, çok yapışkansa bir kaşık yulaf ekleyerek kıvamı dengele. Buzdolabında bir hafta tazeliğini korur.',
  },
  {
    id: 'kakaolu-yulaf-toplari',
    baslik: 'Kakaolu Yulaf Topları',
    altBaslik: 'Fırınsız, beş malzemeli kakaolu toplar; çocukların da bayılacağı pratik tatlı atıştırma',
    kategori: 'tatli',
    koleksiyonlar: ['fit', 'yeni-nesil', '15-dakika'],
    emoji: '🍫',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 230,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yulaf ezmesi', miktar: 2, birim: 'su bardağı' },
      { ad: 'kakao', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'bal', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'süt', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'tereyağı', miktar: 25, birim: 'g', not: 'eritilmiş' },
      { ad: 'hindistan cevizi', miktar: 2, birim: 'yemek kaşığı', not: 'bulamak için' },
    ],
    adimlar: [
      {
        baslik: 'Islak karışımı hazırla',
        aciklama:
          'Eritilmiş tereyağını bal, süt ve kakao ile pürüzsüz bir sos olana kadar karıştır.',
      },
      {
        baslik: 'Yulafla yoğur',
        aciklama:
          'Yulaf ezmesini kakaolu sosa ekleyip kaşıkla, sonra elle yoğur; 5 dakika dinlendir ki yulaf nemi çekip toparlansın.',
      },
      {
        baslik: 'Topları şekillendir',
        aciklama:
          'Karışımdan kaşık kaşık alıp avucunda sıkarak yuvarla ve hindistan cevizine bula.',
      },
      {
        baslik: 'Soğutup servis et',
        aciklama:
          'Topları buzdolabında en az 30 dakika soğut; kakao aroması oturur ve toplar sıkılaşır.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Yulafın yarısını rondodan geçirirsen toplar daha kolay şekil alır ve ağızda daha yumuşak dağılır.',
  },
  {
    id: 'tahinli-susamli-halka-kurabiye',
    baslik: 'Tahinli Susamlı Halka Kurabiye',
    altBaslik: 'Pastane usulü, tahin kokulu ve bol susamlı çıtır halka kurabiye; yumurtasız ve sütsüz',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🍩',
    porsiyon: 8,
    hazirlikDk: 25,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 320,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3, birim: 'su bardağı' },
      { ad: 'tahin', miktar: 1, birim: 'çay bardağı' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'çay bardağı' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay bardağı' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'paket' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'susam', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 0.5, birim: 'çay bardağı', not: 'halkaları ıslatmak için' },
    ],
    adimlar: [
      {
        baslik: 'Tahinli hamuru yoğur',
        aciklama:
          'Tahin, ayçiçek yağı ve toz şekeri karıştır; kabartma tozu, tarçın ve unu azar azar ekleyerek yumuşak, ele yapışmayan bir hamur yoğur.',
      },
      {
        baslik: 'Halkaları şekillendir',
        aciklama:
          'Hamurdan ceviz iriliğinde parçalar al, kalem kalınlığında fitiller yuvarla ve uçlarını birleştirerek halka yap.',
      },
      {
        baslik: 'Susama bandır',
        aciklama:
          'Her halkanın üst yüzünü önce suya, sonra tabağa yaydığın susama bastır; susamlı yüz yukarı gelecek şekilde tepsiye diz.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 170 derece fırında altları hafif kızarana kadar 23-25 dakika pişir; üstlerinin beyaz kalması normaldir.',
        sureSn: 1500,
      },
      {
        baslik: 'Tamamen soğut',
        aciklama:
          'Kurabiyeler sıcakken yumuşaktır; tepside 20 dakika soğuduktan sonra çıtırlaşır ve tahin aroması belirginleşir.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Tahinin dibindeki koyu kısmı değil, karıştırılmış akışkan halini kullan; hamur sıkıysa bir kaşık yağ ekle ama asla un artırma, kurabiye taş gibi olur.',
  },
];
