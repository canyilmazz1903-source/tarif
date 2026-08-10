import type { Tarif } from '@/types/tarif';

// Yeni nesil sokak lezzetleri — sosyal medya mutfağının evde yapılabilir halleri.
// Tüm metinler özgündür; ölçüler ev tipi ocak ve fırına göre ayarlanmıştır.
export const SOKAK_LEZZETLERI: Tarif[] = [
  {
    id: 'smash-burger',
    baslik: 'Smash Burger',
    altBaslik: 'Dantel kenarlı, karamelize kabuklu köftesiyle tek tavada gerçek Amerikan usulü',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'sokak-lezzeti', '15-dakika'],
    emoji: '🍔',
    porsiyon: 2,
    hazirlikDk: 8,
    pisirmeDk: 7,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 720,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 400, birim: 'g', not: 'yağlı (en az %20), yoğurmadan' },
      { ad: 'hamburger ekmeği', miktar: 2, birim: 'adet' },
      { ad: 'cheddar peyniri', miktar: 4, birim: 'dilim' },
      { ad: 'soğan', miktar: 0.5, birim: 'adet', not: 'tel tel incecik doğranmış' },
      { ad: 'kornişon turşu', miktar: 4, birim: 'adet', not: 'boyuna dilimlenmiş' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Ekmekler için' },
      { ad: 'mayonez', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'ketçap', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'hardal', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sosu karıştır',
        aciklama:
          'Küçük bir kasede mayonez, ketçap ve hardalı çırp. İçine çok ince kıyılmış yarım kornişon eklersen sos burger dükkanı kıvamına gelir. Kenara al.',
      },
      {
        baslik: 'Köfte toplarını hazırla',
        aciklama:
          'Kıymayı asla yoğurma; sadece 100 gramlık dört top haline getir ve pişirme anına kadar buzdolabında tut. Baharatı şimdi değil, tavada ekleyeceksin.',
      },
      {
        baslik: 'Ekmekleri kızart',
        aciklama:
          'Geniş tavayı orta ateşte ısıt, tereyağını erit ve ekmeklerin iç yüzlerini altın rengi olana dek bastırarak kızart. Ekmekleri tabağa al, tavayı silme.',
        sureSn: 60,
      },
      {
        baslik: 'Köfteleri bastırarak pişir',
        aciklama:
          'Tavayı hafif dumanı çıkana kadar kızdır. Topları tavaya koy, üzerine yağlı kağıt kapatıp geniş bir spatula ile yarım santim kalınlığa gelene dek sertçe bastır. Tuz ve karabiber serp; kenarlar dantel gibi kızarana kadar dokunmadan pişir.',
        sureSn: 150,
      },
      {
        baslik: 'Çevir ve peyniri erit',
        aciklama:
          'Köfteleri spatulayı kazıyarak tek hamlede çevir, her birinin üzerine bir dilim cheddar koy. Peynir kenarlardan akmaya başlayınca köfteler hazır demektir.',
        sureSn: 60,
      },
      {
        baslik: 'Burgeri kur',
        aciklama:
          'Alt ekmeğe sos sür, üzerine iki katlı köfteyi yerleştir; turşu ve çiğ soğanla taçlandırıp kapat. Bir dakika dinlendirip servis et.',
      },
    ],
    pufNoktasi:
      'Köfte toplarını buzdolabından çıkar çıkmaz, tava dumanlanırken bastır: soğuk et sıcak yüzeyle buluşunca suyu kaçmadan kalın bir karamelize kabuk oluşur.',
  },
  {
    id: 'citir-tavuk-burger',
    baslik: 'Çıtır Tavuk Burger',
    altBaslik: 'Yoğurtta dinlenmiş, pul pul kabuklu kızarmış tavuklu ev yapımı burger',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'sokak-lezzeti'],
    emoji: '🍔',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 15,
    zorluk: 'orta',
    kaloriPerPorsiyon: 740,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 400, birim: 'g', not: 'iki yassı parça halinde' },
      { ad: 'yoğurt', miktar: 4, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'acı sos', miktar: 1, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'un', miktar: 1, birim: 'su bardağı', grup: 'Kaplama için' },
      { ad: 'nişasta', miktar: 3, birim: 'yemek kaşığı', grup: 'Kaplama için' },
      { ad: 'sarımsak tozu', miktar: 1, birim: 'çay kaşığı', grup: 'Kaplama için' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı', grup: 'Kaplama için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Kaplama için' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'su bardağı', not: 'kızartma için' },
      { ad: 'hamburger ekmeği', miktar: 2, birim: 'adet' },
      { ad: 'marul', miktar: 0.25, birim: 'adet', not: 'yaprakları ayıklanmış' },
      { ad: 'mayonez', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'bal', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Tavuğu marine et',
        aciklama:
          'Tavuk parçalarını streç arasında hafifçe dövüp eşit kalınlığa getir. Yoğurt, acı sos ve tuzla iyice kapla; kapaklı kapta buzdolabına kaldır.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kaplamayı hazırla',
        aciklama:
          'Un, nişasta, sarımsak tozu, tatlı toz biber ve karabiberi geniş bir kapta karıştır. Marineden bir kaşık yoğurtlu sosu kaplamaya damlatıp parmakla ov: bu küçük topaklar kızarınca pul pul kabuk olur.',
      },
      {
        baslik: 'Tavuğu kapla',
        aciklama:
          'Her parçayı kaplamaya gömüp avucunla sıkıca bastır, silkeleyip ikinci kez bastır. Kaplamanın tutması için tel ızgara üzerinde beş dakika beklet.',
      },
      {
        baslik: 'Kızgın yağda kızart',
        aciklama:
          'Yağı derin bir tencerede orta ateşte kızdır; içine atılan bir kaplama kırıntısı hemen yüzüyorsa hazırdır. Tavukları tek tek indirip iki yüzü de koyu altın rengi olana ve içi tamamen pişene dek kızart, tel üzerinde süz.',
        sureSn: 420,
      },
      {
        baslik: 'Burgeri kur ve servis et',
        aciklama:
          'Mayonezi balla çırpıp ekmeklerin iki yüzüne sür. Marul yaprağının üzerine çıtır tavuğu yerleştir, kapat ve hemen servis et; kabuk en güzel halini ilk on dakikada verir.',
      },
    ],
    pufNoktasi:
      'Kaplama ununa birkaç damla marine sosu damlatıp ovmak, dükkan usulü pul pul kabuğun tek sırrıdır; düz un her zaman düz kabuk verir.',
  },
  {
    id: 'ev-usulu-tavuk-doner',
    baslik: 'Ev Usulü Tavuk Döner',
    altBaslik: 'Fırında kalıpta pişip incecik tıraşlanan, lavaşa sarılan ev döneri',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'sokak-lezzeti'],
    emoji: '🥙',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 50,
    zorluk: 'orta',
    kaloriPerPorsiyon: 610,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk but', miktar: 700, birim: 'g', not: 'kemiksiz, derili fileto' },
      { ad: 'yoğurt', miktar: 3, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'sarımsak tozu', miktar: 1, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'lavaş', miktar: 4, birim: 'adet' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'yarım ay doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'piyazlık, sumaklanmış' },
      { ad: 'sumak', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Marineyi hazırla',
        aciklama:
          'Yoğurt, salça, zeytinyağı ve tüm baharatları geniş bir kapta karıştır. Tavuk filetoları streç arasında hafifçe dövüp inceltince hem katlar sıklaşır hem pişme eşitlenir.',
      },
      {
        baslik: 'Tavuğu dinlendir',
        aciklama:
          'Filetoları marineyle iyice ovup üstünü kapat, buzdolabında en az bir saat beklet. Aceleye getirilen döner tat vermez; süre uzadıkça lezzet derinleşir.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kalıba istifle',
        aciklama:
          'Küçük bir kek kalıbını yağlı kağıtla kapla. Filetoları derili yüzler dışa gelecek şekilde üst üste bastırarak diz; ne kadar sıkı istiflersen dilimler o kadar bütün çıkar.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Önceden ısıtılmış 200 derece fırında, üzeri kızarıp iç sıcaklığı tam pişme noktasına gelene dek pişir. Kalıptan çıkarmadan on dakika dinlendir; bu bekleme dilimlemenin sigortasıdır.',
        sureSn: 2700,
      },
      {
        baslik: 'İncecik tıraşla',
        aciklama:
          'Dinlenen bloğu kesme tahtasına al ve keskin bıçakla, dönercinin tıraşladığı gibi incecik dilimle. Dilimleri tereyağlı sıcak tavada kenarları çıtırlaşana kadar bir iki dakika çevir.',
        sureSn: 120,
      },
      {
        baslik: 'Lavaşa sar',
        aciklama:
          'Lavaşı tavanın buharında birkaç saniye yumuşat. Döner dilimlerini, domatesi ve sumaklı soğanı boydan boya diz, sıkıca sarıp iki dakika tavada mühürleyerek servis et.',
      },
    ],
    pufNoktasi:
      'Bloğu fırından çıkar çıkmaz kesme; on dakikalık dinlenme, suyunu içine hapseder ve incecik tıraşlarken dağılmasını önler.',
  },
  {
    id: 'dana-tantuni',
    baslik: 'Dana Tantuni',
    altBaslik: 'Önce suda sonra yağda pişen incecik kıyılmış etiyle Mersin usulü dürüm',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'sokak-lezzeti', '15-dakika'],
    emoji: '🌯',
    porsiyon: 2,
    hazirlikDk: 7,
    pisirmeDk: 8,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 560,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'dana bonfile', miktar: 300, birim: 'g', not: 'kuşbaşından da küçük, pirinç tanesi gibi kıyılmış' },
      { ad: 'ayçiçek yağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1, birim: 'çay bardağı', not: 'sıcak' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'lavaş', miktar: 2, birim: 'adet' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'küçük küp doğranmış' },
      { ad: 'soğan', miktar: 0.5, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'iri kıyılmış' },
      { ad: 'sumak', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet' },
    ],
    adimlar: [
      {
        baslik: 'Eti incecik kıy',
        aciklama:
          'Bonfileyi önce ince şeritlere, sonra satır ya da keskin bıçakla pirinç tanesi iriliğine gelene dek kıy. Tantuninin dokusu bu incelikten gelir; kıyma makinesine sokma.',
      },
      {
        baslik: 'Eti suda pişir',
        aciklama:
          'Geniş sac tavaya eti ve sıcak suyu koy, orta ateşte karıştırarak et suyunu salıp geri çekene kadar pişir. Bu ters görünen yöntem eti yumuşacık bırakır.',
        sureSn: 300,
      },
      {
        baslik: 'Yağ ve baharatla aç',
        aciklama:
          'Suyu çeken etin üzerine yağı gezdir; tuz, tatlı toz biber, pul biber ve karabiberi ekleyip harlı ateşte cızırdayarak bir iki dakika kavur. Etin bir köşesini tavada boş bırak.',
        sureSn: 120,
      },
      {
        baslik: 'Lavaşı buharda yumuşat',
        aciklama:
          'Lavaşı etin üzerine bir iki saniye kapatıp buharını ve yağını çekmesini sağla. Sokakta dürümün ıslak görünmesinin sırrı tam olarak budur.',
      },
      {
        baslik: 'Doldur ve sar',
        aciklama:
          'Lavaşa eti boydan diz; domates, soğan, maydanoz ve sumağı ekle, limon sıkıp sıkıca sar. Yanına acı sos ve turşu biber çok yakışır.',
      },
    ],
    pufNoktasi:
      'Etin suyunu tamamen çektiği anı kaçırma: yağ ve baharat tam o anda girerse et kavrulur, erken girerse haşlanır, geç kalırsa kurur.',
  },
  {
    id: 'teriyaki-tavuk-sandvic',
    baslik: 'Teriyaki Tavuk Sandviç',
    altBaslik: 'Soya ve balla parlatılmış tavuk parçalarıyla tatlı-tuzlu dengeli sandviç',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'sokak-lezzeti'],
    emoji: '🥪',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 570,
    beslenmeEtiketleri: [],
    editorOnayli: false,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 350, birim: 'g', not: 'kuşbaşından küçük doğranmış' },
      { ad: 'soya sosu', miktar: 3, birim: 'yemek kaşığı', grup: 'Teriyaki sosu için' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı', grup: 'Teriyaki sosu için' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Teriyaki sosu için', not: 'rendelenmiş' },
      { ad: 'zencefil', miktar: 5, birim: 'g', grup: 'Teriyaki sosu için', not: 'taze rendelenmiş' },
      { ad: 'nişasta', miktar: 1, birim: 'çay kaşığı', grup: 'Teriyaki sosu için' },
      { ad: 'su', miktar: 0.5, birim: 'çay bardağı', grup: 'Teriyaki sosu için' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'sandviç ekmeği', miktar: 2, birim: 'adet' },
      { ad: 'mayonez', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'marul', miktar: 0.25, birim: 'adet', not: 'ince kıyılmış' },
      { ad: 'susam', miktar: 1, birim: 'çay kaşığı', not: 'kavrulmuş' },
    ],
    adimlar: [
      {
        baslik: 'Sosu karıştır',
        aciklama:
          'Soya sosu, bal, sarımsak, zencefil, nişasta ve suyu bir kasede pürüzsüz olana kadar çırp. Nişasta dibe çöker; tavaya dökmeden önce bir kez daha karıştır.',
      },
      {
        baslik: 'Tavuğu sotele',
        aciklama:
          'Yağı geniş tavada iyice kızdır, tavukları tek kat halinde yay ve karıştırmadan alt yüzleri kızarana kadar bekle; sonra çevirerek her yüzünü renklendir.',
        sureSn: 300,
      },
      {
        baslik: 'Sosla parlat',
        aciklama:
          'Sosu tavaya dök ve kısık ateşte, tavukları kaplayıp kaşığın arkasında iz bırakan parlak bir kıvama gelene dek karıştır. Sos koyulaşınca ocaktan hemen al; soğurken biraz daha çeker.',
        sureSn: 120,
      },
      {
        baslik: 'Sandviçi kur',
        aciklama:
          'Ekmekleri kuru tavada iç yüzleri hafif kızarana dek ısıt. Mayonez sür, kıyılmış marulu yay, teriyaki tavukları yerleştirip susam serperek kapat.',
      },
    ],
    pufNoktasi:
      'Sos kaşığın arkasını kapladığı anda ocağı kapat; teriyaki soğurken koyulaşır, ocakta koyulaştırırsan sandviçte şekerleşip sertleşir.',
  },
  {
    id: 'balli-hardalli-tavuk-wrap',
    baslik: 'Ballı Hardallı Tavuk Wrap',
    altBaslik: 'Izgara tavada mühürlenmiş tavuk ve çıtır yeşilliklerle tortilla dürümü',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'sokak-lezzeti'],
    emoji: '🌯',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 540,
    beslenmeEtiketleri: [],
    editorOnayli: false,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 350, birim: 'g', not: 'parmak kalınlığında şeritler' },
      { ad: 'hardal', miktar: 1, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'mayonez', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'hardal', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'bal', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'tortilla', miktar: 2, birim: 'adet' },
      { ad: 'marul', miktar: 0.25, birim: 'adet', not: 'ince kıyılmış' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'kornişon turşu', miktar: 3, birim: 'adet', not: 'ince dilimlenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Tavuğu marine et',
        aciklama:
          'Hardal, bal, zeytinyağı, tuz ve karabiberi karıştırıp tavuk şeritlerini iyice kapla; buzdolabında beklet. Baldaki şeker ızgara çizgilerinin karamelize olmasını sağlayacak.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Tavukları mühürle',
        aciklama:
          'Izgara tavayı iyice kızdır. Şeritleri aralıklı diz, her yüzünü çizgiler koyulaşana ve içi pişene dek çevirerek pişir; tabağa alıp beş dakika dinlendir.',
        sureSn: 480,
      },
      {
        baslik: 'Sosu çırp',
        aciklama:
          'Mayonez, hardal ve balı küçük kasede pürüzsüz olana kadar çırp. Sos marine ile aynı tatları taşıdığı için dürümde bütünlük kurar.',
      },
      {
        baslik: 'Tortillayı ısıt ve sar',
        aciklama:
          'Tortillaları kuru tavada onar saniye ısıtıp yumuşat. Sosu sür; marul, domates, turşu ve tavukları alt üçte birlik bölüme diz. Yanları içe katlayıp sıkıca rulo yap, ikiye kesip servis et.',
      },
    ],
    pufNoktasi:
      'Yeşillikleri sosun üzerine değil tavuğun altına ve üstüne paylaştır: marul araya bariyer kurar, tortilla ıslanmadan çantada bile iki saat dayanır.',
  },
  {
    id: 'firin-kumpir',
    baslik: 'Fırın Kumpir',
    altBaslik: 'Kaşarla krema gibi açılmış közlenmiş patates, Ortaköy usulü bol malzeme',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'sokak-lezzeti'],
    emoji: '🥔',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 60,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 640,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'iri boy, avuç dolusu' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'kaşar peyniri', miktar: 100, birim: 'g', not: 'rendelenmiş' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'mısır (konserve)', miktar: 4, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'kornişon turşu', miktar: 4, birim: 'adet', grup: 'Üzeri için', not: 'küp doğranmış' },
      { ad: 'zeytin', miktar: 40, birim: 'g', grup: 'Üzeri için', not: 'dilimlenmiş' },
      { ad: 'mayonez', miktar: 2, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'ketçap', miktar: 2, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Patatesleri hazırla',
        aciklama:
          'Patatesleri fırçalayarak yıka, kurula ve çatalla her yerinden delikle. Zeytinyağı ve tuzla ovarsan kabuk çıtır, içi buharlı pişer.',
      },
      {
        baslik: 'Fırında közle',
        aciklama:
          'Patatesleri 200 derece fırında, bıçak direnç görmeden ortasına inene kadar pişir. Folyoya sarma; folyo kabuğu yumuşatır, kumpirin karakteri çıtır kabuktadır.',
        sureSn: 3600,
      },
      {
        baslik: 'İçini kremaya çevir',
        aciklama:
          'Sıcak patatesi boydan yar, kabuğu yırtmadan içini çatalla gevşet. Tereyağı ve kaşarı ekleyip peynir tel tel eriyene dek hızla karıştır; iç harç krema kıvamına gelmeli.',
        sureSn: 90,
      },
      {
        baslik: 'Malzemeleri diz',
        aciklama:
          'Mısır, turşu ve zeytini renkleri yan yana gelecek şekilde bölümler halinde yerleştir. Kumpirin yarısı görsel şölendir; malzemeleri karıştırarak değil dizerek koy.',
      },
      {
        baslik: 'Sosla bitir',
        aciklama:
          'Mayonez ve ketçabı ince şeritler halinde gezdir, dilersen pul biber serp. Kaşıkla kabuğuna kadar sıyırarak sıcak sıcak ye.',
      },
    ],
    pufNoktasi:
      'Tereyağı ve kaşar, patates fırından çıkar çıkmaz dumanı üstündeyken girmeli: iç ısı peyniri tel tel eritir, iki dakika geç kalırsan harç asla krema gibi açılmaz.',
  },
  {
    id: 'zurna-kofte-durum',
    baslik: 'Zurna Köfte Dürüm',
    altBaslik: 'Patates kızartmasıyla doldurulup mühürlenen kol boyu bol malzemeli dürüm',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'sokak-lezzeti'],
    emoji: '🌯',
    porsiyon: 2,
    hazirlikDk: 20,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 750,
    beslenmeEtiketleri: [],
    editorOnayli: false,
    malzemeler: [
      { ad: 'kıyma', miktar: 400, birim: 'g', grup: 'Köfte için', not: 'orta yağlı' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Köfte için', not: 'rendelenip suyu sıkılmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Köfte için', not: 'ezilmiş' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'çubuk doğranmış' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'su bardağı', not: 'kızartma için' },
      { ad: 'lavaş', miktar: 2, birim: 'adet', not: 'büyük boy' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'dilimlenmiş' },
      { ad: 'kornişon turşu', miktar: 4, birim: 'adet', not: 'boyuna dilimlenmiş' },
      { ad: 'mayonez', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'ketçap', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'acı sos', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Köfte harcını yoğur',
        aciklama:
          'Kıymayı, suyu sıkılmış soğan rendesini, sarımsağı ve baharatları özleşene kadar yoğur. Harcı parmak kalınlığında uzun köfteler haline getir; uzun köfte dürümde her ısırığa denk gelir.',
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama:
          'Köfteleri kapalı kapta buzdolabına kaldır. Kısa bir dinlenme bile köftelerin tavada dağılmadan pişmesini sağlar.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Patatesleri kızart',
        aciklama:
          'Çubuk patatesleri kağıt havluyla iyice kurulayıp kızgın yağda altın rengi olana kadar kızart, tuzlayıp süz. Islak patates yağı köpürtür ve çıtırlığı öldürür.',
        sureSn: 360,
      },
      {
        baslik: 'Köfteleri pişir',
        aciklama:
          'Geniş tavayı kızdır ve köfteleri çevire çevire her yüzü kahverengileşip içi pişene kadar pişir. Tavayı kalabalıklaştırma; buhar biriken tavada köfte kızarmak yerine haşlanır.',
        sureSn: 480,
      },
      {
        baslik: 'Zurnayı doldur ve sar',
        aciklama:
          'Lavaşa mayonez, ketçap ve acı sosu sür. Köfteleri uç uca boydan boya diz; patates, domates ve turşuyu üzerine yay. Kenarları açık kalacak şekilde olabildiğince sıkı, ince ve uzun sar.',
      },
      {
        baslik: 'Dürümü mühürle',
        aciklama:
          'Sarılı dürümü kuru tavada ya da tost makinesinde, lavaş çıtırlaşıp yapışana dek çevirerek ısıt. Kağıda sarıp ortadan çaprazlama keserek servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Patatesleri dürüme sararken köftenin hemen yanına, sosla temas etmeyecek şekilde yerleştir; sosun içinde kalan patates beş dakikada yumuşar, köfteye yaslanan çıtır kalır.',
  },
  {
    id: 'islak-hamburger',
    baslik: 'Islak Hamburger',
    altBaslik: 'Sarımsaklı domates sosuna banılıp buharda bekletilen Taksim klasiği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'sokak-lezzeti'],
    emoji: '🍔',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 350, birim: 'g', grup: 'Köfte için', not: 'orta yağlı' },
      { ad: 'soğan', miktar: 0.5, birim: 'adet', grup: 'Köfte için', not: 'rendelenmiş' },
      { ad: 'galeta unu', miktar: 2, birim: 'yemek kaşığı', grup: 'Köfte için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'kimyon', miktar: 0.5, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'hamburger ekmeği', miktar: 4, birim: 'adet', not: 'yumuşak, küçük boy' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'domates salçası', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'sarımsak', miktar: 4, birim: 'diş', grup: 'Sosu için', not: 'ezilmiş' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Sosu için' },
    ],
    adimlar: [
      {
        baslik: 'Köfteleri şekillendir',
        aciklama:
          'Kıymayı soğan rendesi, galeta unu ve baharatlarla kısaca yoğur; ekmek genişliğinde dört ince köfte yap. Köfteler pişince toplanacağı için ekmekten bir parmak taşacak kadar geniş aç.',
      },
      {
        baslik: 'Köfteleri pişir',
        aciklama:
          'Köfteleri kızgın tavada iki yüzü de kahverengileşene kadar pişirip tabağa al. Tavadaki köfte suyunu dökme; sosun temelini o karamelize dip oluşturacak.',
        sureSn: 360,
      },
      {
        baslik: 'Sarımsaklı sosu kaynat',
        aciklama:
          'Aynı tavada tereyağını erit, sarımsağı kokusu çıkana dek çevir. Salça ve tatlı toz biberi ekleyip bir dakika kavur; sıcak suyu ve tuzu ekleyerek çorba kıvamında akışkan bir sos elde edene dek kaynat.',
        sureSn: 300,
      },
      {
        baslik: 'Ekmekleri sosa banla',
        aciklama:
          'Köfteleri ekmeklerin arasına yerleştir. Her burgeri kapalı haliyle sosa çevirerek banla; ekmeğin her yüzü kızıla boyanmalı ama dağılmadan toparlanmalı.',
      },
      {
        baslik: 'Buharda beklet',
        aciklama:
          'Burgerleri geniş bir tencereye diz, kalan sosu üzerine gezdir ve kapağı kapatıp en kısık ateşte beklet. Islak burgerin ruhu bu bekleyiştedir: ekmek sosu emer, köfteyle tek vücut olur.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Sos suyunu köftelerin piştiği tavaya döküp dibi kazıyarak kaynat; tavada kalan karamelize köfte suları, sosa büfelerdeki o derin tadı veren gizli malzemedir.',
  },
  {
    id: 'cokertme-kebabi',
    baslik: 'Çökertme Kebabı',
    altBaslik: 'Kibrit patates üstünde yoğurtlu, tereyağlı soslu bonfile; pratik Bodrum usulü',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'sokak-lezzeti'],
    emoji: '🍖',
    porsiyon: 3,
    hazirlikDk: 20,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 690,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'dana bonfile', miktar: 400, birim: 'g', not: 'kibrit çöpü inceliğinde şeritler' },
      { ad: 'süt', miktar: 0.5, birim: 'su bardağı', grup: 'Marine için' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'patates', miktar: 3, birim: 'adet', not: 'kibrit çöpü doğranmış' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'su bardağı', not: 'kızartma için' },
      { ad: 'süzme yoğurt', miktar: 1, birim: 'su bardağı', grup: 'Yoğurtlu sos için' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Yoğurtlu sos için', not: 'ezilmiş' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Domates sosu için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Domates sosu için' },
      { ad: 'su', miktar: 0.5, birim: 'çay bardağı', grup: 'Domates sosu için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Domates sosu için' },
    ],
    adimlar: [
      {
        baslik: 'Eti sütte dinlendir',
        aciklama:
          'Bonfile şeritlerini süt, zeytinyağı ve karabiberle karıştırıp buzdolabında beklet. Süt, ince kesilmiş etin harlı ateşte bile yumuşak kalmasını sağlar.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kibrit patatesleri kızart',
        aciklama:
          'İncecik doğranmış patatesleri soğuk suda çalkalayıp iyice kurula ve kızgın yağda altın sarısı olana kadar kızart. Tuzlayıp servis tabağının ortasına yığ.',
        sureSn: 420,
      },
      {
        baslik: 'Yoğurtlu sosu hazırla',
        aciklama:
          'Süzme yoğurdu sarımsak ve bir tutam tuzla çırp, oda sıcaklığına gelmesi için kenarda beklet. Buz gibi yoğurt sıcak patatesin çıtırlığını söndürür.',
      },
      {
        baslik: 'Eti harlı ateşte sotele',
        aciklama:
          'Etleri marinesinden süzüp kağıt havluyla kurula. Geniş tavayı iyice kızdır ve etleri az sayıda, tek kat halinde saniyeler içinde çevirerek mühürle; tuzunu ateşten alırken ver.',
        sureSn: 240,
      },
      {
        baslik: 'Tereyağlı sosu pişir',
        aciklama:
          'Küçük tavada tereyağını köpürt, salçayı kokusu çıkana dek çevir; suyu ve pul biberi ekleyip parlak, akışkan bir sos olana kadar kaynat.',
        sureSn: 180,
      },
      {
        baslik: 'Kat kat tabaklandır',
        aciklama:
          'Patatesin üzerine yoğurtlu sosu yay, etleri diz ve tereyağlı sosu en üstten sıcak sıcak gezdir. Katları karıştırmadan, kaşığı dibe daldırarak servis et.',
      },
    ],
    pufNoktasi:
      'Eti mutlaka kurulayıp tavaya az az at: ıslak ya da kalabalık et suyunu bırakır ve kibritlik incelikteki bonfile iki dakikada lastiğe döner.',
  },
  {
    id: 'tavuk-sis-durum',
    baslik: 'Tavuk Şiş Dürüm',
    altBaslik: 'Yoğurtlu salçalı marineyle ocakta mangal tadı veren şiş dürüm',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'sokak-lezzeti'],
    emoji: '🥙',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 520,
    beslenmeEtiketleri: [],
    editorOnayli: false,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 600, birim: 'g', not: 'iri küpler halinde' },
      { ad: 'yoğurt', miktar: 3, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Marine için' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Marine için' },
      { ad: 'lavaş', miktar: 4, birim: 'adet' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'yarım ay dilimlenmiş' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet' },
      { ad: 'sumak', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Tavuğu marine et',
        aciklama:
          'Yoğurt, biber salçası, zeytinyağı ve baharatları karıştırıp tavuk küplerini iyice kapla; buzdolabında dinlendir. Yoğurt eti gevretir, salça mangal rengini verir.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Şişlere diz',
        aciklama:
          'Küpleri tahta ya da metal şişlere aralarında boşluk bırakmadan ama sıkıştırmadan diz. Tahta şiş kullanıyorsan önce on dakika suda beklet, tavada yanmaz.',
      },
      {
        baslik: 'Şişleri pişir',
        aciklama:
          'Izgara tavayı ya da döküm tavayı iyice kızdır. Şişleri her yüzünde koyu izler oluşana ve tavuğun içi pişene dek dörder dakikada bir çevir. Piştikten sonra üç dakika dinlendir.',
        sureSn: 600,
      },
      {
        baslik: 'Soğan piyazını hazırla',
        aciklama:
          'Piyazlık soğanı tuzla hafifçe ovup sumak ve iri kıyılmış maydanozla harmanla. Bu üçlü, şişin yanında dönerci klasiğidir.',
      },
      {
        baslik: 'Dürümü sar',
        aciklama:
          'Lavaşı pişen şişlerin üzerinde birkaç saniye ısıt. Tavukları şişten lavaşa sıyır; domates ve sumaklı piyazı ekleyip sıkıca sar, ortadan ikiye kesip servis et.',
      },
    ],
    pufNoktasi:
      'Tavuğu şişten lavaşın üzerine sıyırırken lavaşı tavanın üstünde tut: ete damlayan sulu marine lavaşa iner ve dürüm kuru değil, dükkandaki gibi sulu olur.',
  },
];
