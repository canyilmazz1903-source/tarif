import type { Tarif } from '@/types/tarif';

// Yöresel mutfaklar — Ege. Özgün metinler; denenmiş ev tarifi kalitesinde.
export const YORESEL_EGE: Tarif[] = [
  {
    id: 'keskek-dugun-usulu',
    baslik: 'Keşkek',
    altBaslik: "Ege düğünlerinin baş tacı; dövme buğdayla saatlerce pişen, tereyağlı tel tel et keyfi",
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir', 'tek-tencere', 'osmanli'],
    emoji: '🌾',
    porsiyon: 6,
    hazirlikDk: 20,
    pisirmeDk: 160,
    zorluk: 'zor',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'keşkeklik buğday', miktar: 2, birim: 'su bardağı', not: 'akşamdan ıslatılmış' },
      { ad: 'kuşbaşı et', miktar: 400, birim: 'g', not: 'sinirsiz, gerdan ya da incik idealdir' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'bütün, sonra çıkarılacak' },
      { ad: 'su', miktar: 2, birim: 'lt', not: 'sıcak' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tereyağı', miktar: 60, birim: 'g', grup: 'Üzeri için' },
      { ad: 'pul biber', miktar: 1, birim: 'tatlı kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Buğdayı akşamdan ıslat',
        aciklama:
          'Keşkeklik buğdayı yıkayıp bol suyla geniş bir kaba al. Üzerini iki parmak geçecek kadar su ekle ve gece boyunca oda sıcaklığında beklet; taneler şişince çok daha çabuk dağılır.',
        sureSn: 28800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Eti yumuşayana dek haşla',
        aciklama:
          'Eti bütün soğanla birlikte tencereye al, sıcak suyu ekle. Kaynayınca köpüğünü al, kısık ateşte kapağı kapalı şekilde et lif lif ayrılana kadar haşla. Soğanı çıkarıp at, suyunu sakın dökme.',
        sureSn: 3600,
      },
      {
        baslik: 'Buğdayı etle pişir',
        aciklama:
          'Suyu süzülmüş buğdayı et ve suyunun içine ekle. Tuzunu at, kısık ateşte ara ara karıştırarak buğday taneleri iyice açılıp lapa kıvamına gelene kadar pişir. Su azalırsa sıcak su ilave et.',
        sureSn: 4500,
      },
      {
        baslik: 'Tahta kaşıkla döv',
        aciklama:
          'Ocağı en kısığa al. Tahta kaşıkla ya da el blenderının aralıklı darbeleriyle et ve buğdayı birbirine döverek karıştır. Karışım sakız gibi uzayan, tek vücut bir kıvam alınca kimyon ve karabiberi ekle.',
      },
      {
        baslik: 'Kızgın tereyağıyla servis et',
        aciklama:
          'Tereyağını küçük bir tavada köpürünceye kadar erit, pul biberi ekleyip on saniyede ocaktan al. Keşkeği tabaklara paylaştır, ortasını kaşıkla çukurlaştırıp kızgın yağı gezdirerek sıcak servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Dövme aşamasında acele etme: kaşığı tencerenin kenarına bastıra bastıra çalıştırdıkça et telleri buğdaya sarılır; keşkeği pilavdan ayıran o ipeksi uzama tam burada kazanılır.',
  },
  {
    id: 'izmir-boyozu',
    baslik: 'İzmir Boyozu',
    altBaslik: "İzmir'in Sefarad mirası çıtır katlı hamur; ev fırınında sabah kahvaltısının yıldızı",
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🥐',
    porsiyon: 6,
    hazirlikDk: 40,
    pisirmeDk: 25,
    zorluk: 'zor',
    kaloriPerPorsiyon: 330,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 4, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'sirke', miktar: 1, birim: 'yemek kaşığı', grup: 'Hamuru için' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'su bardağı', grup: 'Katlamak için' },
      { ad: 'tahin', miktar: 2, birim: 'yemek kaşığı', grup: 'Katlamak için' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Unu geniş bir kaba ele; ortasını açıp ılık su, sirke, şeker ve tuzu ekle. Kulak memesinden biraz daha yumuşak, ele yapışmayan esnek bir hamur elde edene kadar en az on dakika yoğur.',
      },
      {
        baslik: 'Bezelere ayır ve dinlendir',
        aciklama:
          'Hamuru on iki eşit bezeye ayır. Her bezeyi ayçiçek yağına bulayıp yağlanmış tepsiye diz, üzerini kapatarak oda sıcaklığında dinlendir. Yağ içinde bekleyen hamur incecik açılacak esnekliği kazanır.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Bezeleri tülbent gibi aç',
        aciklama:
          'Yağlı tezgahta her bezeyi önce elinle bastırarak, sonra kenarlarından nazikçe çekiştirerek altı görünecek incelikte aç. Yüzeyine tahinle inceltilmiş yağdan sür; ince yerlerin yırtılması sorun değil.',
      },
      {
        baslik: 'Rulola, sarmala ve beklet',
        aciklama:
          'Açtığın hamuru gevşek bir rulo yap, ruloyu salyangoz gibi kendi etrafında sar ve ucunu altına sıkıştır. Tüm bezeleri sarıp buzdolabında beklet; soğuyan yağ katları fırında kat kat açılır.',
        sureSn: 7200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Fırında kızarana dek pişir',
        aciklama:
          'Sarmaları avucunla hafifçe bastırıp yağlı kağıt serili tepsiye aralıklı diz. Önceden ısıtılmış 200 derece fırında altı ve üstü derin altın rengi alana kadar pişir. Ilıkken servis et.',
        sureSn: 1500,
      },
    ],
    pufNoktasi:
      'Boyozun sırrı cömert yağ ve sabırlı bekletmedir: bezeler yağın içinde ne kadar rahat dinlenirse hamur o kadar incelir; ince hamur da fırında o meşhur çıtır yaprakları verir.',
  },
  {
    id: 'ev-usulu-kumru',
    baslik: 'Ev Usulü Kumru',
    altBaslik: "Çeşme'nin efsane sandviçi evde: kızgın tavada sucuk, eriyen kaşar ve közlenmiş biber",
    kategori: 'hamur-isi',
    koleksiyonlar: [],
    emoji: '🥪',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 580,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'sandviç ekmeği', miktar: 4, birim: 'adet', not: 'susamlı, mekik biçimli olanı idealdir' },
      { ad: 'sucuk', miktar: 200, birim: 'g', not: 'uzunlamasına dilimlenmiş' },
      { ad: 'kaşar peyniri', miktar: 200, birim: 'g', not: 'kalın dilimler halinde' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'sivri biber', miktar: 4, birim: 'adet' },
      { ad: 'tereyağı', miktar: 20, birim: 'g' },
    ],
    adimlar: [
      {
        baslik: 'Biberleri ve sucuğu tavala',
        aciklama:
          'Geniş bir tavayı yağsız ısıt. Sivri biberleri kabukları benek benek kararana kadar közleyip kenara al. Aynı tavada sucuk dilimlerini iki yüzü de kıvrılıp yağını salana dek kızart.',
        sureSn: 480,
      },
      {
        baslik: 'Ekmekleri tereyağında kızart',
        aciklama:
          'Ekmekleri ortadan aç ama tamamen ayırma. Tavaya tereyağını ekle, ekmeklerin iç yüzlerini bastırarak altın rengi alana kadar kızart; sucuk yağıyla birleşen tereyağı ekmeğe lezzetini verir.',
      },
      {
        baslik: 'Doldur ve peyniri erit',
        aciklama:
          'Her ekmeğin arasına kaşar dilimlerini yerleştir, üzerine sucukları diz. Sandviçleri kapatıp tavaya geri koy; kapağını kapatarak kaşar eriyene kadar iki yüzünü de bastıra bastıra ısıt.',
        sureSn: 240,
      },
      {
        baslik: 'Domates ve biberle tamamla',
        aciklama:
          'Sandviçleri aç, sıcak sucuğun üzerine domates halkalarını ve közlenmiş biberleri yerleştir. Hafifçe bastırıp kapat ve bekletmeden, elden ele sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Gerçek kumru tadı için sandviçi doldurduktan sonra tavada bir tost gibi bastırarak ısıt; peynir sucuğun yağıyla buluşup ekmeğin içine çekilince İzmir sahili tadı yakalanır.',
  },
  {
    id: 'yumurtali-ot-kavurmasi',
    baslik: 'Yumurtalı Ot Kavurması',
    altBaslik: "Ege pazarlarının bahar otları ısırgan ve pazı, soğanla kavrulup yumurtayla buluşuyor",
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍳',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 220,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [3, 4, 5],
    malzemeler: [
      { ad: 'ısırgan otu', miktar: 1, birim: 'demet', not: 'eldivenle ayıklanmış' },
      { ad: 'pazı', miktar: 1, birim: 'demet' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'taze soğan', miktar: 3, birim: 'adet', not: 'yeşiliyle birlikte' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'yumurta', miktar: 4, birim: 'adet' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Otları haşlayıp süz',
        aciklama:
          'Isırganı eldivenle ayıklayıp pazıyla birlikte bol suda yıka. Kaynayan tuzlu suya at, iki dakika haşlayıp süzgece al; haşlanan ısırgan artık yakmaz. Suyunu elinle sıkıp irice doğra.',
        sureSn: 120,
      },
      {
        baslik: 'Soğanları zeytinyağında kavur',
        aciklama:
          'Zeytinyağını geniş tavada ısıt. Kuru soğanı pembeleşene kadar kavur, taze soğanları ekleyip bir iki dakika daha çevir. Soğanın tatlılığı otların hafif acılığını dengeler.',
        sureSn: 300,
      },
      {
        baslik: 'Otları ekleyip çevir',
        aciklama:
          'Doğranmış otları tavaya al, tuzunu ekle. Otlar yağı çekip suyunu tamamen bırakana kadar orta ateşte ara ara karıştırarak kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Yumurtaları aç ve pişir',
        aciklama:
          'Otları kaşıkla dört yuvaya ayır, her yuvaya bir yumurta kır. Kapağını kapat ve kısık ateşte beyazlar tutup sarılar akışkan kalana kadar pişir. Pul biber ve karabiber serpip tavayla servis et.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Otların haşlama suyunu tamamen sıkmadan tavaya koyarsan kavrulmaz, haşlanmış gibi kalır; avucunla iyice sıkılmış ot yağla buluşunca gerçek pazar kavurması lezzetini verir.',
  },
  {
    id: 'ege-usulu-enginar-dolmasi',
    baslik: 'Ege Usulü Enginar Dolması',
    altBaslik: 'Çanak enginar, fıstıklı üzümlü iç pilavla doldurulup zeytinyağında pişiyor',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['misafir'],
    emoji: '🌿',
    porsiyon: 6,
    hazirlikDk: 30,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [4, 5, 6],
    malzemeler: [
      { ad: 'enginar', miktar: 6, birim: 'adet', not: 'çanak halinde temizlenmiş' },
      { ad: 'limon', miktar: 2, birim: 'adet' },
      { ad: 'pirinç', miktar: 1, birim: 'su bardağı', grup: 'İç harcı için', not: 'yıkanıp süzülmüş' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İç harcı için', not: 'ince kıyılmış' },
      { ad: 'çam fıstığı', miktar: 2, birim: 'yemek kaşığı', grup: 'İç harcı için' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı', grup: 'İç harcı için' },
      { ad: 'dereotu', miktar: 0.5, birim: 'demet', grup: 'İç harcı için', not: 'ince kıyılmış' },
      { ad: 'taze nane', miktar: 3, birim: 'dal', grup: 'İç harcı için' },
      { ad: 'zeytinyağı', miktar: 100, birim: 'ml' },
      { ad: 'toz şeker', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Enginarları limonlu suda beklet',
        aciklama:
          'Temizlenmiş enginar çanaklarını bir limonun suyunu sıktığın suya at; kararmadan bekleyecekler. Çanakların diplerini kaşıkla hafifçe genişlet ki iç harç rahat otursun.',
      },
      {
        baslik: 'İç pilav harcını kavur',
        aciklama:
          'Zeytinyağının yarısında çam fıstığını pembeleştir, soğanı ekleyip şeffaflaşana kadar kavur. Pirinci ve kuş üzümünü kat, iki üç dakika çevir. Yarım bardak sıcak su ekleyip suyunu çektir; ocaktan alınca dereotu, nane, tuz ve şekeri karıştır.',
        sureSn: 600,
      },
      {
        baslik: 'Çanakları doldur',
        aciklama:
          'Enginarları süzüp tencereye tek sıra diz. Yarı pişmiş iç pilavı çanaklara paylaştır; pirinç pişerken şişeceği için tepeleme doldurma, hafif boşluk bırak.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kalan zeytinyağını, ikinci limonun suyunu ve sıcak suyu tencerenin kenarından ekle. Üzerine yağlı kağıt kapatıp kapağını ört; kısık ateşte enginarlar bıçak batacak yumuşaklığa gelene kadar pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Tencerede soğut, soğuk servis et',
        aciklama:
          'Ocaktan aldıktan sonra kapağını açmadan tencerede soğumaya bırak; dolmalar suyunu çekerken lezzeti oturur. Oda sıcaklığına gelince dereotu ve limon dilimleriyle servis et.',
        sureSn: 7200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Pirinci harçta yarı pişirip enginarın içinde tamamlamak Ege usulünün anahtarıdır: pilav enginarın suyunu emerek piştiği için çanağın çiçeğimsi tadı her taneye işler.',
  },
  {
    id: 'naneli-sakiz-kabagi-sote',
    baslik: 'Naneli Sakız Kabağı Sote',
    altBaslik: 'Açık yeşil sakız kabağı yüksek ateşte diri sote edilip naneli süzme yoğurtla buluşuyor',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['15-dakika'],
    emoji: '🥒',
    porsiyon: 4,
    hazirlikDk: 7,
    pisirmeDk: 8,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 130,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [5, 6, 7, 8],
    malzemeler: [
      { ad: 'kabak', miktar: 4, birim: 'adet', not: 'açık yeşil sakız kabağı, yarım ay doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'süzme yoğurt', miktar: 200, birim: 'g', grup: 'Sosu için' },
      { ad: 'taze nane', miktar: 2, birim: 'dal', grup: 'Sosu için', not: 'ince kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'Kabakları hazırla',
        aciklama:
          'Sakız kabaklarını yıkayıp uçlarını kes; kabuklarını soyma, açık yeşil kabuk hem renk hem doku verir. Yarım santim kalınlığında yarım aylar halinde doğra ve kağıt havluyla kurula.',
      },
      {
        baslik: 'Yüksek ateşte sote et',
        aciklama:
          'Zeytinyağını geniş tavada iyice kızdır. Kabakları tek kat olacak şekilde at ve az karıştırarak kenarları kahverengileşene, içi diri kalana kadar sote et. Son dakikada sarımsak ve tuzu ekle.',
        sureSn: 420,
      },
      {
        baslik: 'Naneli yoğurdu çırp',
        aciklama:
          'Süzme yoğurdu bir kasede taze nane ve bir tutam tuzla pürüzsüzleşene kadar çırp. Kıvamı çok koyuysa bir kaşık su ile aç.',
      },
      {
        baslik: 'Tabakta birleştir',
        aciklama:
          'Naneli yoğurdu servis tabağına yay, sıcak kabakları üzerine yerleştir. Kuru nane ve pul biberi kalan bir kaşık kızgın zeytinyağıyla karıştırıp üzerinde gezdirerek hemen servis et.',
      },
    ],
    pufNoktasi:
      'Kabakları tavaya atmadan önce kurulamak sotenin tüm sırrıdır: ıslak kabak buhar yapıp haşlanır, kuru kabak ise mühürlenip dışı karamelize içi diri kalır.',
  },
  {
    id: 'sebzeli-levrek-bugulama',
    baslik: 'Sebzeli Levrek Buğulama',
    altBaslik: 'Ege koylarının klasiği: domates, biber ve limonla kendi buharında pişen yumuşacık levrek',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', 'misafir'],
    emoji: '🐟',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'orta',
    kaloriPerPorsiyon: 320,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz', 'diyabetik-dostu'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'levrek', miktar: 2, birim: 'adet', not: 'temizlenmiş, ikişer fileto çıkarılmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'yarım ay doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'dilimlenmiş' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'yarısı dilim, yarısı suyu' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1, birim: 'çay bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sebze yatağını hazırla',
        aciklama:
          'Geniş ve sığ bir tencerenin tabanına zeytinyağının yarısını gezdir. Soğan, sarımsak, domatesin yarısı ve biberleri yay; hafifçe tuzla. Bu yatak balığın dibe yapışmasını önler ve sosu oluşturur.',
      },
      {
        baslik: 'Levrekleri yerleştir',
        aciklama:
          'Filetoları derisi alta gelecek şekilde sebzelerin üzerine diz. Tuz ve karabiber serp; kalan domatesi, limon dilimlerini ve maydanoz saplarını balığın üzerine paylaştır.',
      },
      {
        baslik: 'Kapalı kapakla buğula',
        aciklama:
          'Limon suyunu, kalan zeytinyağını ve sıcak suyu tencerenin kenarından ekle. Kapağını sıkıca kapat ve kısık ateşte balık çatalla dokununca pul pul ayrılana kadar pişir; kapağı ara açma, buhar kaçar.',
        sureSn: 1500,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ocağı kapat ve tencereyi beş dakika kapalı dinlendir. Kıyılmış maydanoz yapraklarını serp; balığı sebzeleri ve tencerede biriken buğulama suyuyla birlikte derin tabaklarda servis et.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Buğulamanın lezzeti tencere suyundadır: su miktarını bir çay bardağıyla sınırla ki balık haşlanmasın, sebzelerin ve limonun suyuyla yoğun bir sos kendiliğinden oluşsun.',
  },
  {
    id: 'pazili-ege-boregi',
    baslik: 'Pazılı Ege Böreği',
    altBaslik: 'Bol pazılı, lor peynirli tepsi böreği; Ege köy kahvaltılarının zeytinyağlı mirası',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🥧',
    porsiyon: 6,
    hazirlikDk: 25,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yufka', miktar: 3, birim: 'adet' },
      { ad: 'pazı', miktar: 1, birim: 'demet', grup: 'İç harcı için', not: 'sapları ayrılıp ince kıyılmış' },
      { ad: 'lor peyniri', miktar: 200, birim: 'g', grup: 'İç harcı için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'İç harcı için', not: 'ince kıyılmış' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'İç harcı için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Sosu için' },
      { ad: 'süt', miktar: 0.5, birim: 'su bardağı', grup: 'Sosu için' },
      { ad: 'zeytinyağı', miktar: 0.5, birim: 'çay bardağı', grup: 'Sosu için' },
      { ad: 'susam', miktar: 1, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'çörek otu', miktar: 1, birim: 'çay kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Pazılı harcı hazırla',
        aciklama:
          'Zeytinyağında soğanı pembeleştir, önce ince kıyılmış pazı saplarını iki dakika, sonra yaprakları ekleyip suyu çekilene kadar kavur. Ocaktan alıp ılınınca lor peyniri, tuz ve pul biberle karıştır.',
        sureSn: 480,
      },
      {
        baslik: 'Sosu çırp',
        aciklama:
          'Yumurtanın akını, sütü ve zeytinyağını bir kasede çırp; yumurtanın sarısını üzeri için ayır. Bu sos yufkaları yumuşatıp katları birbirine bağlar.',
      },
      {
        baslik: 'Börek katlarını döşe',
        aciklama:
          'Yağlanmış tepsiye ilk yufkayı kenarları taşacak şekilde ser, sostan gezdir. İkinci yufkayı buruşturarak yerleştir, sos gezdirip harcın tamamını yay. Taşan kenarları içe kapat, son yufkayı üste ör ve kalan sosu döküp yüzeyi elinle yerleştir.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Ayırdığın yumurta sarısını bir kaşık sütle çırpıp yüzeye sür; susam ve çörek otu serp. Önceden ısıtılmış 180 derece fırında üzeri kızarana kadar pişir.',
        sureSn: 2100,
      },
      {
        baslik: 'Dinlendirip dilimle',
        aciklama:
          'Fırından çıkan böreği temiz bir bezle örtüp on dakika dinlendir; buharı içine oturunca katlar yumuşar ve dilimler dağılmadan kesilir. Kare dilimleyip servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Pazı saplarını atmayıp yapraklardan önce kavurmak hem israfı önler hem böreğe hafif tatlı, kerevizi andıran bir derinlik katar; lorun tuzuna göre harcın tuzunu ayarlamayı unutma.',
  },
  {
    id: 'lor-peynirli-ege-salatasi',
    baslik: 'Lor Peynirli Ege Salatası',
    altBaslik: 'Roka, nane ve zeytinle serin bir Ege sofrası; kekikli zeytinyağıyla tazelenen lor',
    kategori: 'salata',
    koleksiyonlar: ['15-dakika'],
    emoji: '🥗',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 190,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [5, 6, 7, 8, 9],
    malzemeler: [
      { ad: 'roka', miktar: 1, birim: 'demet', not: 'ayıklanmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'iri küp doğranmış' },
      { ad: 'salatalık', miktar: 1, birim: 'adet', not: 'yarım ay doğranmış' },
      { ad: 'lor peyniri', miktar: 150, birim: 'g' },
      { ad: 'zeytin', miktar: 60, birim: 'g', not: 'çekirdeği çıkarılmış siyah zeytin' },
      { ad: 'taze nane', miktar: 3, birim: 'dal' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'limon', miktar: 1, birim: 'adet', grup: 'Sosu için', not: 'suyu' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Sosu için' },
    ],
    adimlar: [
      {
        baslik: 'Kekikli sosu hazırla',
        aciklama:
          'Küçük bir kavanozda zeytinyağı, limon suyu, kekik ve tuzu kapağını kapatıp iyice çalkala. Sosun birkaç dakika beklemesi kekiğin kokusunu yağa geçirir.',
      },
      {
        baslik: 'Sebzeleri doğra',
        aciklama:
          'Rokaları elinle irice kopar, nane yapraklarını saplarından sıyır. Domatesi iri küpler, salatalığı yarım aylar halinde doğra ve hepsini geniş bir servis kabında hafifçe harmanla.',
      },
      {
        baslik: 'Loru ve zeytini yerleştir',
        aciklama:
          'Loru büyük parçalar halinde salatanın üzerine dağıt; ezme, iri kalması dokusunu korur. Zeytinleri aralarına serpiştir.',
      },
      {
        baslik: 'Sosla buluşturup servis et',
        aciklama:
          'Sosu servisten hemen önce salatanın üzerinde gezdir; erken eklersen roka kararır ve diriliğini yitirir. Nazikçe bir iki kez çevirip bekletmeden sofraya çıkar.',
      },
    ],
    pufNoktasi:
      'Lor bu salatanın süngeridir: sostan bir kaşığı önce lorun üzerine gezdirip beş dakika beklet, peynir kekikli yağı emince her lokma baharatlı ve sulu olur.',
  },
  {
    id: 'cevizli-kuru-incir-tatlisi',
    baslik: 'Cevizli Kuru İncir Tatlısı',
    altBaslik: 'Aydın inciri ceviz dolgusuyla hafif şerbette pişiyor; şerbeti incirin kendi balından',
    kategori: 'tatli',
    koleksiyonlar: ['misafir'],
    emoji: '🍯',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 300,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuru incir', miktar: 12, birim: 'adet', not: 'iri ve yumuşak olanları seç' },
      { ad: 'ceviz içi', miktar: 100, birim: 'g', not: 'yarısı iri kırık, yarısı çeyrek' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'toz şeker', miktar: 0.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', grup: 'Şerbeti için', not: 'dilimlenmiş' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'İncirleri ılık suda yumuşat',
        aciklama:
          'Kuru incirleri ılık suda beklet; etleri yumuşayıp hafifçe şişince süz. Bekletme suyundan bir bardağı ayır, şerbette kullanacaksın; incirin doğal balı bu suya geçer.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Cevizle doldur',
        aciklama:
          'Her incirin sap kısmından parmağınla bir cep aç ve içine çeyrek cevizleri sıkıca yerleştir. Ağzını hafifçe bastırarak kapat; doldurulmuş incirleri tencereye dik şekilde tek sıra diz.',
      },
      {
        baslik: 'Şerbette pişir',
        aciklama:
          'Bekletme suyu, kalan su, şeker ve limon dilimlerini incirin üzerine ekle. Kısık ateşte, kapağı kapalı şekilde incirler parlayıp şerbet hafifçe koyulaşana kadar pişir; ara ara şerbetten üzerlerine gezdir.',
        sureSn: 1200,
      },
      {
        baslik: 'Soğutup cevizle servis et',
        aciklama:
          'Tatlıyı tencerede ılınmaya bırak, sonra servis kaselerine şerbetiyle paylaştır. Üzerine iri kırık cevizleri ve tarçını serperek oda sıcaklığında ya da soğuk servis et.',
      },
    ],
    pufNoktasi:
      'Şeker miktarını incirine göre ayarla: iyi bir Aydın inciri şerbeti kendi balıyla tatlandırır; şerbeti tadıp gerekirse şekeri azaltmak tatlıyı ağırlıktan kurtarır.',
  },
  {
    id: 'zeytinli-ege-keki',
    baslik: 'Zeytinli Ege Keki',
    altBaslik: 'Kekikli, beyaz peynirli tuzlu kek; zeytinyağıyla yapılan bu kek çay saatinin Egelisi',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🫒',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 45,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 3, birim: 'adet', not: 'oda sıcaklığında' },
      { ad: 'yoğurt', miktar: 1, birim: 'su bardağı' },
      { ad: 'zeytinyağı', miktar: 100, birim: 'ml' },
      { ad: 'un', miktar: 2.5, birim: 'su bardağı' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'paket' },
      { ad: 'zeytin', miktar: 150, birim: 'g', not: 'çekirdeksiz, iri doğranmış' },
      { ad: 'beyaz peynir', miktar: 100, birim: 'g', not: 'küp doğranmış' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'çörek otu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Islak malzemeleri çırp',
        aciklama:
          'Yumurtaları geniş bir kapta hafifçe kabarana kadar çırp; yoğurdu ve zeytinyağını ekleyip pürüzsüz olana dek karıştır. Fırını 170 dereceye ayarlayıp ısınmaya bırak.',
      },
      {
        baslik: 'Kuru malzemeleri ekle',
        aciklama:
          'Unu ve kabartma tozunu eleyerek kaba ekle, kekik ve tuzla birlikte spatulayla az hareketle karıştır. Fazla karıştırma; hamur hafif pütürlü kalsın, kek o zaman yumuşak olur.',
      },
      {
        baslik: 'Zeytin ve peyniri kat',
        aciklama:
          'Doğranmış zeytinleri ve peynir küplerini bir kaşık una bulayıp hamura kat; un kaplaması parçaların dibe çökmesini önler. Hamuru yağlanmış kek kalıbına dök ve yüzeyine çörek otu serp.',
      },
      {
        baslik: 'Fırında pişir ve dinlendir',
        aciklama:
          'Kalıbı 170 derece fırına ver; üzeri kızarıp ortasına batırdığın kürdan temiz çıkana kadar pişir. Fırından çıkınca kalıbında on dakika dinlendirip ters çevir; ılık dilimle.',
        sureSn: 2700,
      },
    ],
    pufNoktasi:
      'Zeytinleri doğradıktan sonra kağıt havluyla kurulamak keki kurtarır: salamura suyu hamura karışırsa kek ağırlaşır ve zeytinlerin çevresi hamur kalır.',
  },
  {
    id: 'ege-usulu-domates-dolmasi',
    baslik: 'Ege Usulü Domates Dolması',
    altBaslik: 'Olgun yaz domatesi naneli iç pilavla dolduruluyor; soğuk servis edilen zeytinyağlı klasik',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['misafir'],
    emoji: '🍅',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 230,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'domates', miktar: 8, birim: 'adet', not: 'iri, olgun ama diri' },
      { ad: 'pirinç', miktar: 1, birim: 'su bardağı', grup: 'İç harcı için', not: 'yıkanıp süzülmüş' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İç harcı için', not: 'ince kıyılmış' },
      { ad: 'çam fıstığı', miktar: 1, birim: 'yemek kaşığı', grup: 'İç harcı için' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı', grup: 'İç harcı için' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'İç harcı için', not: 'ince kıyılmış' },
      { ad: 'taze nane', miktar: 3, birim: 'dal', grup: 'İç harcı için', not: 'ince kıyılmış' },
      { ad: 'zeytinyağı', miktar: 100, birim: 'ml' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 1, birim: 'çay bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Domatesleri oy',
        aciklama:
          'Domateslerin sap kısmından kapak kes, içlerini kaşıkla oyup çanak haline getir; kabuğu delmemeye dikkat et. Oyduğun domates içini bıçaktan geçirip suyu ile birlikte ayır, harçta kullanacaksın.',
      },
      {
        baslik: 'İç harcı kavur',
        aciklama:
          'Zeytinyağının yarısında çam fıstığını pembeleştir, soğanı ekleyip şeffaflaşana kadar kavur. Pirinç, kuş üzümü, şeker ve ayırdığın domates içini kat; pirinç suyu çekene kadar pişir. Ocaktan alınca maydanoz, nane, tuz ve karabiberi karıştır.',
        sureSn: 600,
      },
      {
        baslik: 'Domatesleri doldur',
        aciklama:
          'Çanakların içine hafifçe tuz serp, yarı pişmiş harcı doldur; pirinç şişeceği için ağızlarına kadar doldurma. Kestiğin kapakları kapat ve dolmaları tencereye sıkışık tek sıra yerleştir.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kalan zeytinyağını ve sıcak suyu tencerenin kenarından ekle. Kapağı kapalı, kısık ateşte pirinçler yumuşayıp domatesler şeklini koruyarak pişene kadar tut.',
        sureSn: 2100,
      },
      {
        baslik: 'Soğutup servis et',
        aciklama:
          'Dolmaları tencerede tamamen soğumaya bırak; zeytinyağlı dolmanın lezzeti soğudukça derinleşir. Servis tabağına suyundan gezdirerek al, taze naneyle süsleyip oda sıcaklığında servis et.',
        sureSn: 5400,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Domatesin kendi içi bu dolmanın sosudur: oyduğun etli kısmı harca katıp az suyla pişirince pilav domates aromasını içine çeker, dolma sulu ama dağılmadan çıkar.',
  },
  {
    id: 'yalanci-sogus-durum',
    baslik: 'Söğüş Dürüm',
    altBaslik: "İzmir gece sofralarının söğüş dürümü ev usulü: bol yeşillikli, sumaklı, etsiz ferah dürüm",
    kategori: 'hamur-isi',
    koleksiyonlar: ['15-dakika'],
    emoji: '🌯',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 240,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'lavaş', miktar: 4, birim: 'adet' },
      { ad: 'domates', miktar: 3, birim: 'adet', not: 'küçük küp doğranmış, suyu süzülmüş' },
      { ad: 'kırmızı soğan', miktar: 1, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'maydanoz', miktar: 1, birim: 'demet', not: 'iri kıyılmış' },
      { ad: 'sumak', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı sumakla ov',
        aciklama:
          'Piyazlık soğanı tuzun yarısı ve sumakla bir kasede elinle iyice ov; soğanın acısı kırılıp sumağın ekşisiyle yumuşar. Beş dakika kenarda beklet.',
        sureSn: 300,
        beklemeAdimi: true,
      },
      {
        baslik: 'İç harcı harmanla',
        aciklama:
          'Domates küplerini, maydanozu ve ovulmuş soğanı geniş bir kapta buluştur. Zeytinyağı, limon suyu, kuru nane, pul biber ve kalan tuzu ekleyip nazikçe karıştır; harç sulu değil şıkır şıkır olmalı.',
      },
      {
        baslik: 'Lavaşı ısıt',
        aciklama:
          'Lavaşları kuru ve sıcak bir tavada çevirerek onar saniye ısıt; ısınan lavaş yumuşar ve yırtılmadan sarılır. Isıttıkça temiz bir bezin arasına al.',
      },
      {
        baslik: 'Sar ve hemen servis et',
        aciklama:
          'Harcı lavaşların alt üçte birine boylamasına yay, kenarlarını içe kıvırıp sıkıca sar. Dürümleri ikiye kesip bekletmeden servis et; yanına ekstra limon dilimi koymayı unutma.',
      },
    ],
    pufNoktasi:
      'Domatesin suyunu süzgeçte beş dakika süzdürmek dürümün belkemiğidir: suyu alınmış harç lavaşı ıslatmaz, ilk lokmadan son lokmaya kadar dürüm çıtır ve derli toplu kalır.',
  },
];
