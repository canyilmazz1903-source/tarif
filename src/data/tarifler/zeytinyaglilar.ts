import type { Tarif } from '@/types/tarif';

// Klasik zeytinyağlılar — kısık ateşte pişer, soğuk servis edilir.
export const ZEYTINYAGLILAR: Tarif[] = [
  {
    id: 'zeytinyagli-yaprak-sarma',
    baslik: 'Zeytinyağlı Yaprak Sarma',
    altBaslik: 'Çam fıstıklı, kuş üzümlü iç pirinçle sarılan incecik klasik; soğuk servis edilir.',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['osmanli', 'misafir'],
    emoji: '🌿',
    porsiyon: 6,
    hazirlikDk: 60,
    pisirmeDk: 45,
    zorluk: 'zor',
    kaloriPerPorsiyon: 240,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'asma yaprağı', miktar: 400, birim: 'g', not: 'salamura, bol suda yıkanmış' },
      { ad: 'pirinç', miktar: 300, birim: 'g', grup: 'İç harcı için', not: 'yıkanıp süzülmüş' },
      { ad: 'soğan', miktar: 3, birim: 'adet', grup: 'İç harcı için', not: 'çok ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 120, birim: 'ml', grup: 'İç harcı için' },
      { ad: 'çam fıstığı', miktar: 2, birim: 'yemek kaşığı', grup: 'İç harcı için' },
      { ad: 'kuş üzümü', miktar: 2, birim: 'yemek kaşığı', grup: 'İç harcı için' },
      { ad: 'kuru nane', miktar: 1, birim: 'yemek kaşığı', grup: 'İç harcı için' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'yarısı pişirmeye, yarısı servise' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Pişirmek için' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', grup: 'Pişirmek için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Yaprakları haşla',
        aciklama:
          'Salamura yaprakları bol soğuk suda yıkayıp tuzunu al. Kaynar suda 2-3 dakika haşla, süzüp soğumaya bırak. Sert saplarını makasla kes.',
      },
      {
        baslik: 'Soğanları kavur',
        aciklama:
          'Zeytinyağını geniş tavada ısıt, ince doğranmış soğanları ve çam fıstığını 8-10 dakika, soğanlar şeffaflaşıp fıstıklar hafif pembeleşene kadar kavur.',
      },
      {
        baslik: 'İç harcı pişir',
        aciklama:
          'Yıkanmış pirinci ekleyip 3-4 dakika çevir. Kuş üzümü, kuru nane, tarçın, karabiber, şeker ve tuzun yarısını ekle. Yarım su bardağı sıcak su ekleyip suyunu çekene kadar pişir; ılınmaya bırak.',
      },
      {
        baslik: 'Yaprakları sar',
        aciklama:
          'Her yaprağın parlak yüzünü alta getir, sap kısmına bir tatlı kaşığı harç koy. Yanlarını içe katlayıp sıkıca, kalem inceliğinde rulo yap. Gevşek sarılan sarma pişerken açılır.',
      },
      {
        baslik: 'Tencereye diz',
        aciklama:
          'Tencerenin tabanını yırtık yapraklarla kapla, sarmaları aralık bırakmadan halka halka diz. Üzerine kalan tuzu, zeytinyağını ve yarım limonun suyunu gezdir, ters bir tabakla bastır.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Sıcak suyu tabağın kenarından ekle. Kaynayınca ateşi kıs, kapağı kapat ve sarmalar yumuşayıp suyunu çekene kadar kısık ateşte pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Tencerede soğut',
        aciklama:
          'Ateşi kapat, kapağı açmadan sarmaları tencerede tamamen soğumaya bırak; zeytinyağlılar soğuk yenir. Soğuyan sarma hem toparlanır hem lezzeti oturur.',
        beklemeAdimi: true,
      },
      {
        baslik: 'Limonla servis et',
        aciklama: 'Sarmaları servis tabağına diz, kalan limonu dilimleyip yanında sun.',
      },
    ],
    pufNoktasi:
      'Harca pirinci yarı pişmiş koyup sarmayı ince sarmak sırrın kendisi: pirinç tencerede şişecek yeri bulur, sarma dağılmaz. Tabakla bastırmak da dizilimi korur.',
  },
  {
    id: 'imam-bayildi',
    baslik: 'İmam Bayıldı',
    altBaslik: 'Bol soğanlı, sarımsaklı domates dolgusuyla zeytinyağında pişen Osmanlı klasiği.',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['osmanli'],
    emoji: '🍆',
    porsiyon: 6,
    hazirlikDk: 30,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'patlıcan', miktar: 6, birim: 'adet', not: 'orta boy, alacalı soyulmuş' },
      { ad: 'soğan', miktar: 4, birim: 'adet', grup: 'İç harcı için', not: 'piyazlık doğranmış' },
      { ad: 'sarımsak', miktar: 6, birim: 'diş', grup: 'İç harcı için', not: 'iri dilimlenmiş' },
      { ad: 'domates', miktar: 3, birim: 'adet', grup: 'İç harcı için', not: 'küp doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', grup: 'İç harcı için', not: 'ince doğranmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'İç harcı için', not: 'ince kıyılmış' },
      { ad: 'zeytinyağı', miktar: 200, birim: 'ml' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Patlıcanları tuzlu suda beklet',
        aciklama:
          'Patlıcanları alacalı soyup saplarını bırak. Tuzlu suda 20 dakika bekleterek acısını al, sonra kurula.',
      },
      {
        baslik: 'Patlıcanları kızart',
        aciklama:
          'Zeytinyağının yarısını geniş tencerede ısıt. Patlıcanları bütün halde, çevire çevire her yüzü hafifçe renk alana kadar 8-10 dakika kızart, tabağa al.',
      },
      {
        baslik: 'İç harcı hazırla',
        aciklama:
          'Aynı tencereye kalan zeytinyağını ekle. Piyazlık soğanı 10 dakika, iyice yumuşayıp tatlanana kadar kavur. Sarımsak ve biberi ekleyip 2 dakika çevir; domates, şeker ve tuzun yarısıyla 5 dakika pişir. Ocaktan alıp maydanozu karıştır.',
      },
      {
        baslik: 'Patlıcanları yarıp doldur',
        aciklama:
          'Patlıcanların ortasını boydan boya, uçlarını kesmeden yar. Yarıkları hafifçe aç, harcı bolca doldurup tencereye yan yana diz.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kalan tuzu serp, sıcak suyu kenardan ekle. Kapağı kapat ve patlıcanlar iyice yumuşayıp yağı üstüne çıkana kadar kısık ateşte pişir.',
        sureSn: 2100,
      },
      {
        baslik: 'Soğumaya bırak',
        aciklama:
          'Tencereyi ocaktan al ve kapağı aralık bırakarak oda sıcaklığına gelene dek dinlendir; zeytinyağlılar soğuk yenir, imam bayıldı soğudukça toparlanır.',
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Lezzetin sırrı soğanı acele etmeden, karamelize olma sınırına kadar kavurmakta. Soğan tatlandıkça imam bayıldının imzası olan tatlı-yumuşak dolgusu ortaya çıkar.',
  },
  {
    id: 'zeytinyagli-taze-fasulye',
    baslik: 'Zeytinyağlı Taze Fasulye',
    altBaslik: 'Domatesli, kendi suyunda kısık ateşte pişen yaz sofralarının vazgeçilmezi.',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🫒',
    porsiyon: 6,
    hazirlikDk: 25,
    pisirmeDk: 45,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 160,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'taze fasulye', miktar: 750, birim: 'g', not: 'ayıklanıp ikiye kırılmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'domates', miktar: 3, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 100, birim: 'ml' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Fasulyeleri ayıkla',
        aciklama:
          'Fasulyelerin kılçıklarını ve uçlarını ayıkla, ortadan ikiye kır ve yıkayıp süzdür.',
      },
      {
        baslik: 'Soğanları yumuşat',
        aciklama:
          'Zeytinyağını tencerede ısıt, doğranmış soğanı 5-6 dakika şeffaflaşana kadar kavur. Salçayı ekleyip 1 dakika çevir.',
      },
      {
        baslik: 'Fasulyeleri ekle',
        aciklama:
          'Fasulyeleri tencereye al, 3-4 dakika yağda çevirerek parlat. Rendelenmiş domatesi, şekeri ve tuzu ekleyip karıştır.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Sıcak suyu ekle, kaynayınca ateşi iyice kıs. Kapağı kapat ve fasulyeler iyice yumuşayana kadar arada kontrol ederek kısık ateşte pişir.',
        sureSn: 2700,
      },
      {
        baslik: 'Tencerede soğut',
        aciklama:
          'Ocaktan alıp kapağı kapalı halde oda sıcaklığına gelene kadar dinlendir; zeytinyağlılar soğuk yenir, fasulye soğudukça lezzeti oturur.',
        beklemeAdimi: true,
      },
      {
        baslik: 'Servis et',
        aciklama: 'Servis tabağına al, dilersen üzerine bir kaşık zeytinyağı gezdirerek sun.',
      },
    ],
    pufNoktasi:
      'Bir çay kaşığı şeker domatesin ekşisini dengeler ve fasulyenin yeşilini korur. Suyu azar azar eklemek yemeğin sulanmadan, kendi suyunda pişmesini sağlar.',
  },
  {
    id: 'zeytinyagli-enginar',
    baslik: 'Zeytinyağlı Enginar',
    altBaslik: 'Havuç ve patatesle doldurulmuş, limonlu suda pişen zarif bahar yemeği.',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['tek-tencere', 'misafir'],
    emoji: '🫒',
    porsiyon: 6,
    hazirlikDk: 30,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 170,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [4, 5, 6],
    malzemeler: [
      { ad: 'enginar', miktar: 6, birim: 'adet', not: 'ayıklanmış çanak' },
      { ad: 'limon', miktar: 2, birim: 'adet', not: 'biri bekletme suyuna, biri pişirmeye' },
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'küçük küp doğranmış' },
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'küçük küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 100, birim: 'ml' },
      { ad: 'toz şeker', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'dereotu', miktar: 0.5, birim: 'demet', not: 'servis için, ince kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'Enginarları limonlu suda beklet',
        aciklama:
          'Ayıklanmış enginar çanaklarını, bir limonun suyunu sıktığın soğuk suda beklet; böylece kararmazlar.',
      },
      {
        baslik: 'Sebzeleri soteleyip hazırla',
        aciklama:
          'Zeytinyağının yarısını tencerede ısıt. Soğanı 3-4 dakika yumuşat, havuç ve patatesi ekleyip 5 dakika çevir. Tuzun ve şekerin yarısıyla tatlandır.',
      },
      {
        baslik: 'Enginarları doldurup diz',
        aciklama:
          'Enginarları çukur kısımları yukarı bakacak şekilde geniş tencereye diz. Sotelenen sebzeleri çanakların içine paylaştır.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kalan zeytinyağını, ikinci limonun suyunu, kalan tuz ve şekeri sıcak suyla karıştırıp tencereye ekle. Kapağı kapat, enginarlar bıçak geçecek yumuşaklığa gelene kadar kısık ateşte pişir.',
        sureSn: 1800,
      },
      {
        baslik: 'Suyunun içinde soğut',
        aciklama:
          'Enginarları pişirme suyunun içinde oda sıcaklığına gelene dek beklet; zeytinyağlılar soğuk yenir ve enginar suyunu çektikçe tatlanır.',
        beklemeAdimi: true,
      },
      {
        baslik: 'Dereotuyla servis et',
        aciklama:
          'Enginarları tabağa al, pişirme suyundan birkaç kaşık gezdir ve bolca kıyılmış dereotu serperek sun.',
      },
    ],
    pufNoktasi:
      'Enginar havayla temas ettiği anda kararır; ayıklarken elini ve bıçağı sık sık limonla ovmak, çanakları da limonlu suda tutmak bembeyaz bir sonuç verir.',
  },
  {
    id: 'zeytinyagli-pirasa',
    baslik: 'Zeytinyağlı Pırasa',
    altBaslik: 'Havuçlu, bir avuç pirinçle bağlanan hafif ve sulu kış klasiği.',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🫒',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 150,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: false,
    mevsimAylari: [11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'pırasa', miktar: 4, birim: 'adet', not: 'bir parmak kalınlığında doğranmış' },
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'pirinç', miktar: 2, birim: 'yemek kaşığı', not: 'yıkanmış' },
      { ad: 'zeytinyağı', miktar: 80, birim: 'ml' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Pırasaları doğrayıp yıka',
        aciklama:
          'Pırasaların koyu yeşil uçlarını ve köklerini kes, bir parmak kalınlığında doğra. Katları arasında toprak kalmaması için bol suda çalkalayıp süzdür.',
      },
      {
        baslik: 'Sebzeleri yağda çevir',
        aciklama:
          'Zeytinyağını tencerede ısıt, halka havuçları 2-3 dakika çevir. Pırasaları ekleyip 5 dakika, hafifçe parlayana kadar birlikte sotele.',
      },
      {
        baslik: 'Pirinç ve baharatları ekle',
        aciklama:
          'Yıkanmış pirinci, tuzu, şekeri ve limon suyunun yarısını ekleyip bir iki kez karıştır.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Sıcak suyu ekle, kaynayınca ateşi kıs. Kapağı kapat ve pırasalar yumuşayıp pirinçler açılana kadar kısık ateşte pişir.',
        sureSn: 1800,
      },
      {
        baslik: 'Soğumaya bırak',
        aciklama:
          'Ocaktan al, kapağı kapalı şekilde oda sıcaklığına gelene kadar dinlendir; zeytinyağlılar soğuk yenir.',
        beklemeAdimi: true,
      },
      {
        baslik: 'Limonla tazeleyip servis et',
        aciklama: 'Kalan limon suyunu gezdir, dilersen limon dilimleriyle servis et.',
      },
    ],
    pufNoktasi:
      'Pırasayı doğradıktan sonra yıkamak şart: katların arasına toprak saklanır. Pirinci az tutmak yemeği lapalaştırmadan hafifçe bağlar.',
  },
  {
    id: 'zeytinyagli-barbunya',
    baslik: 'Zeytinyağlı Barbunya',
    altBaslik: 'Havuçlu, domatesli tencere klasiği; kuru fasulyeyle de aynı usulde pişer.',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🫒',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 50,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 230,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'barbunya', miktar: 400, birim: 'g', not: 'kuru; bir gece ıslatılmış (kuru fasulye de olur)' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', not: 'ezilmiş' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 100, birim: 'ml' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Barbunyayı ıslat',
        aciklama:
          'Kuru barbunyayı bol suda bir gece (en az 8 saat) ıslat. Ertesi gün suyunu süzüp durula.',
        beklemeAdimi: true,
      },
      {
        baslik: 'Sebzeleri kavur',
        aciklama:
          'Zeytinyağını tencerede ısıt. Soğanı 5 dakika yumuşat, havucu ve sarımsağı ekleyip 3 dakika çevir. Salçayı ilave edip kokusu çıkana kadar 1 dakika kavur.',
      },
      {
        baslik: 'Barbunya ve domatesi ekle',
        aciklama:
          'Süzülmüş barbunyayı ve rendelenmiş domatesi tencereye al, 2-3 dakika birlikte çevir.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Sıcak suyu ekle, kaynayınca ateşi kıs ve kapağı kapat. Barbunyalar dağılmadan yumuşayana kadar kısık ateşte pişir; tuzu ve şekeri son 10 dakikada ekle.',
        sureSn: 2700,
      },
      {
        baslik: 'Tencerede soğut',
        aciklama:
          'Ocaktan alıp suyunun içinde oda sıcaklığına gelene kadar dinlendir; zeytinyağlılar soğuk yenir, barbunya soğudukça sosu koyulaşır.',
        beklemeAdimi: true,
      },
      {
        baslik: 'Servis et',
        aciklama:
          'Derin tabaklara al, üzerine bir kaşık zeytinyağı gezdirip dilersen limonla sun.',
      },
    ],
    pufNoktasi:
      'Tuzu baştan atma: tuz taneleri erken eklenirse barbunyanın kabuğunu sertleştirir ve pişme süresini uzatır. Son 10 dakikada eklemek taneleri kadife gibi bırakır.',
  },
];
