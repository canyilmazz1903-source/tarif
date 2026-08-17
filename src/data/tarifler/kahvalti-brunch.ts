import type { Tarif } from '@/types/tarif';

// Kahvaltı & brunch tarifleri — özgün içerik, denenmiş ölçüler.
export const KAHVALTI_BRUNCH: Tarif[] = [
  {
    id: 'sucuklu-peynirli-firin-yumurta',
    baslik: 'Sucuklu Peynirli Fırın Yumurta',
    altBaslik: 'Güveçte kaşar yorganının altında pişen sucuklu pazar klasiği',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['misafir', 'tek-tencere'],
    emoji: '🍳',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 390,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 4, birim: 'adet' },
      { ad: 'sucuk', miktar: 80, birim: 'g', not: 'ince halka doğranmış' },
      { ad: 'kaşar peyniri', miktar: 60, birim: 'g', not: 'rendelenmiş' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Fırını ısıt, güveçleri yağla',
        aciklama:
          'Fırını 200 dereceye ayarla. İki küçük güvecin (ya da tek orta boy güvecin) içini tereyağıyla iyice yağla.',
      },
      {
        baslik: 'Sucukları ve sebzeleri diz',
        aciklama:
          'Sucuk halkalarını güveçlerin tabanına yay, üzerine domates küplerini ve biber halkalarını dağıt. Tuzun yarısını serp.',
      },
      {
        baslik: 'Yumurtaları kır',
        aciklama:
          'Her güvece yumurtaları sarıları dağılmadan kır. Kalan tuzu sadece beyazların üzerine serp; sarıya tuz değerse yüzeyi lekelenir.',
      },
      {
        baslik: 'Kaşarla örtüp fırınla',
        aciklama:
          'Rendelenmiş kaşarı yumurtaların çevresine yay, ortadaki sarıları açıkta bırak. Fırında sarılar hafif akışkan kalana dek pişir.',
        sureSn: 720,
      },
      {
        baslik: 'Pul biberle servis et',
        aciklama:
          'Güveçleri fırından alır almaz pul biber serp ve altlıkla sofraya taşı; güveç sıcağını uzun süre korur, yumurta içinde pişmeye devam eder.',
      },
    ],
    pufNoktasi:
      'Güveci fırına vermeden önce ocakta 1 dakika ısıtırsan taban ile üst aynı anda pişer, yumurta beyazı camlaşmaz.',
  },
  {
    id: 'ispanakli-yumurta',
    baslik: 'Ispanaklı Yumurta',
    altBaslik: 'Soğanla ölmüş ıspanağın içine gömülen yumurtalarla tavada pratik kahvaltı',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🥬',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 240,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz', 'laktozsuz', 'diyabetik-dostu'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'ıspanak', miktar: 400, birim: 'g', not: 'ayıklanıp yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'yumurta', miktar: 3, birim: 'adet' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı yumuşat',
        aciklama:
          'Geniş tavada zeytinyağını orta ateşte ısıt, soğanı pembeleşene kadar kavur.',
        sureSn: 240,
      },
      {
        baslik: 'Ispanağı çökert',
        aciklama:
          'Iri doğradığın ıspanakları tavaya ekle, ara ara çevirerek suyunu salıp çekene kadar pişir. Tuzu bu aşamada ekle.',
        sureSn: 300,
      },
      {
        baslik: 'Yuvalar aç, yumurtaları kır',
        aciklama:
          'Kaşığın tersiyle ıspanağın içinde üç yuva aç, her birine bir yumurta kır. Kapağı kapat.',
      },
      {
        baslik: 'Kısık ateşte tamamla',
        aciklama:
          'Kısık ateşte yumurta beyazları tutana kadar kapalı pişir. Karabiber ve pul biberle sıcak servis et.',
        sureSn: 240,
      },
    ],
    pufNoktasi:
      'Ispanağın suyunu tamamen çektirmeden yumurtayı kırma; kalan su yumurtayı haşlar ve tabanı sulandırır.',
  },
  {
    id: 'klasik-krep',
    baslik: 'Klasik Krep',
    altBaslik: 'Tatlı da tuzlu da sarabileceğin, delik deşik olmayan temel krep hamuru',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['101'],
    emoji: '🫓',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 2, birim: 'adet', not: 'oda sıcaklığında' },
      { ad: 'süt', miktar: 2, birim: 'su bardağı' },
      { ad: 'un', miktar: 1.5, birim: 'su bardağı' },
      { ad: 'toz şeker', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı', not: '1 kaşığı hamura, 1 kaşığı tavaya' },
    ],
    adimlar: [
      {
        baslik: 'Sıvıları çırp',
        aciklama:
          'Derin kapta yumurta, süt, şeker ve tuzu pürüzsüzleşene kadar telle çırp.',
      },
      {
        baslik: 'Unu eleyerek ekle',
        aciklama:
          'Unu iki seferde eleyerek ekle ve topak kalmayana kadar çırp. En son 1 yemek kaşığı yağı karıştır; hamur boza kıvamında akışkan olmalı.',
      },
      {
        baslik: 'Hamuru dinlendir',
        aciklama:
          'Kabın üzerini kapatıp hamuru tezgahta dinlendir; un sıvıyı emsin, krepler yırtılmasın.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'İnce ince pişir',
        aciklama:
          'Yapışmaz tavayı hafif yağla, iyice kızdır. Bir kepçe hamuru döküp tavayı çevirerek yay. Kenarları kalkınca çevir, arkasını kısa süre pişir. Tüm hamuru aynı şekilde bitir.',
        sureSn: 1080,
      },
      {
        baslik: 'Doldurup servis et',
        aciklama:
          'Sıcak krepleri üst üste istifle; tatlı için çikolata ve muz, tuzlu için rendelenmiş kaşarla doldurup rulo yap.',
      },
    ],
    pufNoktasi:
      'İlk krep tavanın ısı ayarını gösteren deneme krebidir; çok hızlı kararıyorsa ateşi kıs, yapışıyorsa tava yeterince kızmamış demektir.',
  },
  {
    id: 'mantarli-sahanda-yumurta',
    baslik: 'Mantarlı Sahanda Yumurta',
    altBaslik: 'Suyunu çekip kavrulmuş kekikli mantarların üzerinde sahanda yumurta',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika', 'tek-tencere'],
    emoji: '🍄',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 250,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz', 'diyabetik-dostu'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'mantar', miktar: 200, birim: 'g', not: 'kalın dilimlenmiş' },
      { ad: 'tereyağı', miktar: 20, birim: 'g' },
      { ad: 'yumurta', miktar: 3, birim: 'adet' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Mantarları susuz kavur',
        aciklama:
          'Mantarları kuru ve geniş tavaya at, yüksek ateşte suyunu salıp çekene kadar karıştırarak kavur. Tuzu sonda ekle; erken tuz mantarı sulandırır.',
        sureSn: 300,
      },
      {
        baslik: 'Tereyağı ve kekiği ekle',
        aciklama:
          'Ateşi orta seviyeye al, tereyağını ve kekiği ekle. Mantarlar yağı çekip hafif kızarana kadar 1-2 dakika daha çevir.',
        sureSn: 90,
      },
      {
        baslik: 'Yumurtaları kırıp pişir',
        aciklama:
          'Mantarların arasında boşluk açıp yumurtaları kır. Kısık ateşte, kapağı kapalı, beyazlar tutup sarılar akışkan kalana dek pişir.',
        sureSn: 240,
      },
      {
        baslik: 'Tavada servis et',
        aciklama:
          'Karabiber serpip tavayı doğrudan sofraya al; ekmek banmalık sarısıyla en güzel hali sıcakken.',
      },
    ],
    pufNoktasi:
      'Mantarı yıkamak yerine nemli bezle sil; su çeken mantar tavada kızaracağına haşlanır.',
  },
  {
    id: 'firinda-sucuklu-patates',
    baslik: 'Fırında Sucuklu Patates',
    altBaslik: 'Kekikli çıtır patatesin üzerinde sucuk ve eriyen kaşarla kahvaltı tepsisi',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['misafir', 'tek-tencere'],
    emoji: '🥔',
    porsiyon: 3,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'patates', miktar: 3, birim: 'adet', not: 'kalın elma dilimi' },
      { ad: 'sucuk', miktar: 100, birim: 'g', not: 'halka doğranmış' },
      { ad: 'kaşar peyniri', miktar: 80, birim: 'g', not: 'rendelenmiş' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Patatesleri harmanla',
        aciklama:
          'Fırını 200 dereceye ısıt. Elma dilimi patatesleri geniş kapta zeytinyağı, tuz, kekik ve pul biberle iyice harmanla.',
      },
      {
        baslik: 'Tek kat dizip fırınla',
        aciklama:
          'Patatesleri yağlı kağıt serili tepsiye üst üste binmeyecek şekilde diz. Kenarları kızarana kadar fırınla; yarı sürede bir kez çevir.',
        sureSn: 1500,
      },
      {
        baslik: 'Sucuk ve kaşarı ekle',
        aciklama:
          'Tepsiyi çıkar, sucuk halkalarını patateslerin arasına dağıt, üzerine kaşarı serp.',
      },
      {
        baslik: 'Peynir eriyene dek pişir',
        aciklama:
          'Tepsiyi fırına geri ver; sucuklar yağını salıp kaşar eriyene kadar pişir. Sıcak servis et.',
        sureSn: 480,
      },
    ],
    pufNoktasi:
      'Doğranan patatesleri 10 dakika soğuk suda bekletip kurularsan fazla nişastası gider, fırında çok daha çıtır olur.',
  },
  {
    id: 'muzlu-yulaf-pankeki',
    baslik: 'Muzlu Yulaf Pankeki',
    altBaslik: 'Unsuz, şekersiz; tatlılığını ezilmiş muzdan alan fit pankek',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['fit', 'yeni-nesil'],
    emoji: '🥞',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 310,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'muz', miktar: 2, birim: 'adet', not: 'iyice olgun' },
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'yulaf ezmesi', miktar: 1, birim: 'su bardağı' },
      { ad: 'süt', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Muzları ez',
        aciklama:
          'Muzların birini servise ayır, kalanını çatalla püre haline getir. Yumurta ve sütü ekleyip çırp.',
      },
      {
        baslik: 'Kuruları karıştır',
        aciklama:
          'Yulaf ezmesini, kabartma tozunu ve tarçını ekle; kaşıktan zor akan koyu bir hamur elde et. 5 dakika beklet, yulaf şişsin.',
        sureSn: 300,
        beklemeAdimi: true,
      },
      {
        baslik: 'Küçük küçük pişir',
        aciklama:
          'Yapışmaz tavayı kısık-orta ateşte ısıt. Hamuru birer kepçe döküp yüzeyde kabarcıklar çıkınca çevir; her yüzü altın rengi alana dek pişir.',
        sureSn: 720,
      },
      {
        baslik: 'Muz ve balla servis et',
        aciklama:
          'Pankekleri üst üste diz, ayırdığın muzu dilimleyip üzerine yerleştir, balı gezdir.',
      },
    ],
    pufNoktasi:
      'Muz ne kadar benekli ve olgunsa pankek o kadar tatlı olur; sarı sert muzla yaparsan tatlandırıcı aramak zorunda kalırsın.',
  },
  {
    id: 'peynirli-omlet-rulosu',
    baslik: 'Peynirli Omlet Rulosu',
    altBaslik: 'İnce pişen omletin içinde eriyen kaşarla, dilimlenerek servis edilen rulo',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika'],
    emoji: '🧀',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 320,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 4, birim: 'adet' },
      { ad: 'süt', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'kaşar peyniri', miktar: 70, birim: 'g', not: 'rendelenmiş' },
      { ad: 'maydanoz', miktar: 3, birim: 'dal', not: 'ince kıyılmış' },
      { ad: 'tereyağı', miktar: 10, birim: 'g' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Yumurtaları çırp',
        aciklama:
          'Yumurta, süt, tuz ve karabiberi köpürene kadar çırp; süt omleti yumuşacık yapar.',
      },
      {
        baslik: 'Kısık ateşte yay',
        aciklama:
          'Tereyağını yapışmaz tavada erit, karışımı dök ve tavayı çevirerek ince bir katman halinde yay. Kısık ateşte, üstü hafif ıslak kalana dek karıştırmadan pişir.',
        sureSn: 240,
      },
      {
        baslik: 'Peyniri serp, rulo yap',
        aciklama:
          'Kaşarı ve maydanozu yüzeye serp. Spatulayla bir kenardan başlayarak omleti sıkıca rulo yap ve tavada 1 dakika daha tut; peynir içeride erisin.',
        sureSn: 60,
      },
      {
        baslik: 'Dilimleyip servis et',
        aciklama:
          'Ruloyu kesme tahtasına al, iki parmak kalınlığında dilimle ve sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Omletin üstü tamamen pişmeden rulo yapmaya başla; kalan ısı içini tamamlar, rulo da kırılmadan sarılır.',
  },
  {
    id: 'findikli-surulebilir-cikolata',
    baslik: 'Ev Usulü Fındıklı Çikolata',
    altBaslik: 'Üç temel malzemeyle, katkısız sürülebilir fındık kreması; kavanozda 2 hafta dayanır',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['meal-prep', 'yeni-nesil'],
    emoji: '🍫',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 380,
    beslenmeEtiketleri: ['vejetaryen', 'vegan', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'fındık içi', miktar: 150, birim: 'g' },
      { ad: 'pudra şekeri', miktar: 60, birim: 'g' },
      { ad: 'kakao', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'vanilin', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Fındıkları kavur',
        aciklama:
          'Fındıkları kuru tavada, sürekli çevirerek kabukları çatlayıp koku salana kadar kavur. Temiz bir beze alıp avuçlar arasında ovarak kahverengi zarlarını çıkar.',
        sureSn: 480,
      },
      {
        baslik: 'Yağını salana dek çek',
        aciklama:
          'Ilık fındıkları mutfak robotunda önce kırıntı, sonra kendi yağını salıp macun kıvamına gelene kadar ara ara dinlendirerek çek; bu 4-5 dakika sürer.',
        sureSn: 300,
      },
      {
        baslik: 'Kakao ve şekeri ekle',
        aciklama:
          'Pudra şekeri, kakao, vanilin ve ayçiçek yağını ekleyip parlak ve akışkan bir krema olana kadar çekmeye devam et.',
      },
      {
        baslik: 'Kavanozla',
        aciklama:
          'Kremayı kaynatılmış cam kavanoza doldur. Oda sıcaklığında sakla; buzdolabı sertleştirir.',
      },
    ],
    pufNoktasi:
      'Robot ısınınca ara verip dinlendir; fazla ısınan fındık yağı acılaşır ve kremanın tadı keskinleşir.',
  },
  {
    id: 'yumurta-salatali-sandvic',
    baslik: 'Yumurta Salatalı Sandviç',
    altBaslik: 'Hardallı mayonezle bağlanan haşlanmış yumurta dolgulu doyurucu sandviç',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['meal-prep'],
    emoji: '🥪',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 410,
    beslenmeEtiketleri: ['vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 4, birim: 'adet' },
      { ad: 'mayonez', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'hardal', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'taze soğan', miktar: 2, birim: 'adet', not: 'ince kıyılmış' },
      { ad: 'sandviç ekmeği', miktar: 2, birim: 'adet' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Yumurtaları haşla',
        aciklama:
          'Yumurtaları kaynayan suya indir ve 10 dakika haşla. Süre dolunca hemen soğuk suya al; kabukları kolay soyulsun, sarının çevresi yeşermesin.',
        sureSn: 600,
      },
      {
        baslik: 'Salatayı hazırla',
        aciklama:
          'Soyulan yumurtaları çatalla iri iri ez. Mayonez, hardal, taze soğan, tuz ve karabiberi ekleyip nazikçe karıştır; püre değil, parçalı bir dolgu hedefle.',
      },
      {
        baslik: 'Sandviçleri doldur',
        aciklama:
          'Dolguyu ekmeklere cömertçe paylaştır. İstersen ekmekleri önceden hafif kızart; dolgunun nemini daha iyi taşır.',
      },
    ],
    pufNoktasi:
      'Dolguyu buzdolabında yarım saat dinlendirirsen hardalın keskinliği yumuşar, tatlar birbirine oturur; kapaklı kapta 2 gün dayanır.',
  },
  {
    id: 'avokadolu-kahvalti-tabagi',
    baslik: 'Haşlanmış Yumurtalı Avokado Tabağı',
    altBaslik: 'Limonlu avokado dilimleri, kayısı kıvamında yumurta ve kızarmış ekmekle',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika', 'yeni-nesil', 'fit'],
    emoji: '🥑',
    porsiyon: 2,
    hazirlikDk: 7,
    pisirmeDk: 8,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: ['vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'avokado', miktar: 1, birim: 'adet', not: 'olgun' },
      { ad: 'ekmek', miktar: 2, birim: 'dilim', not: 'kızartılmış' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'dilimlenmiş' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Yumurtaları kayısı haşla',
        aciklama:
          'Yumurtaları kaynayan suya indir, 8 dakika haşlayıp soğuk suya al. Bu süre sarıyı kremamsı, kesince hafif nemli bırakır.',
        sureSn: 480,
      },
      {
        baslik: 'Avokadoyu dilimle',
        aciklama:
          'Avokadoyu ikiye ayır, çekirdeğini çıkar ve kabuğundan kaşıkla çıkarıp dilimle. Üzerine hemen limon suyu gezdir; kararmasın.',
      },
      {
        baslik: 'Tabağı kur',
        aciklama:
          'Kızarmış ekmek, avokado dilimleri, domates ve ikiye kestiğin yumurtaları tabağa yerleştir. Zeytinyağı gezdir, tuz ve pul biber serperek servis et.',
      },
    ],
    pufNoktasi:
      'Avokadonun olgunluğunu sap yerinden anla: sapı kolayca çıkıp altı yeşilse tam kıvamında, kahverengiyse geçmiş demektir.',
  },
  {
    id: 'labneli-meyveli-kahvalti-kasesi',
    baslik: 'Labneli Meyveli Kahvaltı Kasesi',
    altBaslik: 'İpeksi labne üzerinde ballı mevsim meyveleri ve tavada kavrulmuş çıtır yulaf',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika', 'yeni-nesil'],
    emoji: '🫐',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 5,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 330,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    mevsimAylari: [4, 5, 6],
    malzemeler: [
      { ad: 'labne', miktar: 150, birim: 'g' },
      { ad: 'çilek', miktar: 150, birim: 'g', not: 'ikiye kesilmiş' },
      { ad: 'muz', miktar: 1, birim: 'adet', not: 'dilimlenmiş' },
      { ad: 'yulaf ezmesi', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'ceviz içi', miktar: 30, birim: 'g', not: 'iri kırılmış' },
      { ad: 'bal', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'tarçın', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Yulafı kavur',
        aciklama:
          'Yulaf ezmesini ve cevizi kuru tavada, orta ateşte kokusu çıkıp hafif kızarana kadar çevirerek kavur. Bir tabağa alıp soğut; sıcakken çıtırlığı oturmaz.',
        sureSn: 240,
      },
      {
        baslik: 'Labneyi yay',
        aciklama:
          'Labneyi iki kasenin tabanına kaşığın tersiyle daire çizerek yay.',
      },
      {
        baslik: 'Meyve ve balla tamamla',
        aciklama:
          'Çilek ve muzu labnenin üzerine diz, kavrulmuş yulaf-ceviz karışımını serp. Balı gezdirip tarçınla servis et.',
      },
    ],
    pufNoktasi:
      'Kavrulmuş yulafı servisten hemen önce serp; meyvenin suyuyla erken buluşursa çıtırlığını yarım saatte kaybeder.',
  },
  {
    id: 'kahvaltilik-zeytin-ezmesi',
    baslik: 'Kahvaltılık Zeytin Ezmesi',
    altBaslik: 'Tapenad tarzı; cevizle zenginleşen kekikli siyah zeytin ezmesi',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika', 'meal-prep'],
    emoji: '🫒',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz', 'diyabetik-dostu'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'zeytin', miktar: 200, birim: 'g', not: 'siyah, çekirdeği çıkarılmış' },
      { ad: 'ceviz içi', miktar: 40, birim: 'g' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Zeytinlerin tuzunu al',
        aciklama:
          'Zeytinleri soğuk sudan geçirip kağıt havluyla kurula; salamura tuzu ezmenin dengesini bozar.',
      },
      {
        baslik: 'Robotta darbeli çek',
        aciklama:
          'Zeytin, ceviz, sarımsak, limon suyu ve kekiği robota al. Kesik kesik çalıştırarak iri taneli bir ezme elde et; püre yapma, doku kalsın.',
      },
      {
        baslik: 'Yağla açıp dinlendir',
        aciklama:
          'Zeytinyağını ekleyip kısa bir tur daha çek. Kaseye al, pul biber serp ve servisten önce 15 dakika dinlendir; sarımsağın keskinliği otursun.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Ceviz hem acılığı dengeler hem ezmeyi kremsi bağlar; taze yılın cevizini kullan, bekleyen ceviz ezmede acılaşır.',
  },
  {
    id: 'balli-cevizli-yogurt-kasesi',
    baslik: 'Ballı Cevizli Yoğurt Kasesi',
    altBaslik: 'Süzme yoğurt, gezdirilmiş bal ve tavada uyanmış cevizle üç dakikalık kahvaltı',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika', 'fit'],
    emoji: '🍯',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 3,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 300,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'süzme yoğurt', miktar: 300, birim: 'g', not: 'soğuk' },
      { ad: 'ceviz içi', miktar: 40, birim: 'g', not: 'iri kırılmış' },
      { ad: 'bal', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'tarçın', miktar: 1, birim: 'tutam' },
      { ad: 'muz', miktar: 1, birim: 'adet', not: 'dilimlenmiş, isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Cevizleri uyandır',
        aciklama:
          'Cevizleri kuru tavada, orta ateşte kokusu çıkana kadar 2-3 dakika çevirerek kavur. Bu kısa kavurma cevizin yağını uyandırır.',
        sureSn: 150,
      },
      {
        baslik: 'Yoğurdu kaselere al',
        aciklama:
          'Soğuk süzme yoğurdu iki kaseye paylaştır ve kaşığın tersiyle yüzeyini düzle.',
      },
      {
        baslik: 'Bal ve cevizle taçlandır',
        aciklama:
          'Ilık cevizleri yoğurdun üzerine serp, balı ince bir şerit halinde gezdir. Tarçın ve istersen muz dilimleriyle hemen servis et.',
      },
    ],
    pufNoktasi:
      'Cevizi sıcakken yoğurda serp; ısı farkı balın akışkanlığıyla birleşince kase daha ilk kaşıkta tatlı-tuzlu bir denge yakalar.',
  },
];
