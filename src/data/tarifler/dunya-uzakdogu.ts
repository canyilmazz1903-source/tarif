import type { Tarif } from '@/types/tarif';

// Uzakdoğu klasikleri — Türk evinde bulunan malzemelerle ev usulü uyarlamalar.
// Tüm metinler özgündür; ölçüler ev mutfağına göre ayarlanmıştır.
export const DUNYA_UZAKDOGU: Tarif[] = [
  {
    id: 'tavuklu-sebzeli-fried-rice',
    baslik: 'Tavuklu Sebzeli Fried Rice',
    altBaslik: 'Bir gün önceden kalan pilavla en güzel olan, soya soslu tavada kavrulmuş pirinç',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'artan'],
    emoji: '🍚',
    porsiyon: 3,
    hazirlikDk: 15,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 520,
    beslenmeEtiketleri: ['laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'pirinç', miktar: 1.5, birim: 'su bardağı', not: 'haşlanıp soğutulmuş, ideali bir gün önceden' },
      { ad: 'tavuk göğsü', miktar: 300, birim: 'g', not: 'küçük küpler halinde' },
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'minik küpler halinde' },
      { ad: 'bezelye', miktar: 0.5, birim: 'su bardağı', not: 'haşlanmış ya da donuk' },
      { ad: 'taze soğan', miktar: 3, birim: 'adet', not: 'ince kıyılmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'rendelenmiş' },
      { ad: 'soya sosu', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Pirinci haşlayıp soğut',
        aciklama:
          'Pirinci bol suda tuzla diri kalacak şekilde haşla, süz ve geniş bir tepsiye yayarak tamamen soğut. Taneler kuru ve dağınık olursa tavada topaklanmaz; bir gece buzdolabında beklemiş pilav bu iş için en iyisidir.',
      },
      {
        baslik: 'Tavukları mühürle',
        aciklama:
          'Geniş bir tavada 1 yemek kaşığı yağı iyice kızdır. Tavuk küplerini tek kat halinde yayıp karıştırmadan 2 dakika bekle, sonra çevirerek her yanını altın rengi alana kadar pişir ve tabağa al.',
        sureSn: 300,
      },
      {
        baslik: 'Yumurtaları çırpıp pişir',
        aciklama:
          'Aynı tavaya birkaç damla yağ ekle, çırpılmış yumurtaları dök ve spatulayla karıştırarak iri parçalı bir omlet kıvamında pişir. Yumurtaları da tavukların yanına al.',
        sureSn: 120,
      },
      {
        baslik: 'Sebzeleri yüksek ateşte kavur',
        aciklama:
          'Kalan yağı ekleyip havucu 3 dakika kavur. Sarımsağı ve bezelyeyi ilave et, kokusu çıkana kadar 1 dakika daha çevir. Ateş sürekli yüksek kalsın; sebzeler yumuşamadan diri kalmalı.',
        sureSn: 240,
      },
      {
        baslik: 'Pirinci ekleyip kızart',
        aciklama:
          'Soğuk pirinci tavaya ekle ve spatulayla topakları kırarak yay. Karıştırmadan 1-2 dakika bekleterek pirincin tava dibinde hafifçe kızarmasını sağla; bu bekleme fried rice kokusunu veren adımdır.',
        sureSn: 240,
      },
      {
        baslik: 'Soslayıp birleştir',
        aciklama:
          'Tavuk ve yumurtaları geri koy, soya sosunu tavanın kenarından gezdirerek dök ve karabiberi serp. Her şeyi harmanlayıp 1 dakika daha kavur, taze soğanı serperek ocaktan al.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Sıcak pilavla yaparsan sonuç lapa olur. Pirinç mutlaka soğuk ve kuru olmalı; soya sosunu pirincin üstüne değil kızgın tavanın kenarına dökmek sosun yanık şekerimsi aromasını açar.',
  },
  {
    id: 'yer-fistigi-ezmeli-pad-thai',
    baslik: 'Fıstık Ezmeli Pad Thai',
    altBaslik: 'Tayland sokaklarının klasiği; yer fıstığı ezmesi ve limonla evdeki hâline çevrildi',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🍜',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 15,
    zorluk: 'orta',
    kaloriPerPorsiyon: 560,
    beslenmeEtiketleri: ['vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'noodle', miktar: 2, birim: 'adet' },
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'yer fıstığı ezmesi', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'soya sosu', miktar: 3, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'limon', miktar: 1, birim: 'adet', grup: 'Sosu için', not: 'suyu sıkılmış' },
      { ad: 'toz şeker', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'acı sos', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için', not: 'isteğe göre artırılabilir' },
      { ad: 'su', miktar: 3, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'taze soğan', miktar: 3, birim: 'adet', not: 'boyuna uzun doğranmış' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'kibrit çöpü inceliğinde' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sosu çırparak hazırla',
        aciklama:
          'Küçük bir kasede yer fıstığı ezmesi, soya sosu, limon suyu, şeker, acı sos ve suyu pürüzsüz olana kadar çırp. Ezme ilk başta direnir; ısrarla karıştırınca akışkan, parlak bir sos elde edersin.',
      },
      {
        baslik: 'Noodle-ları haşla',
        aciklama:
          'Noodle-ları kaynar suda paket süresinden 1 dakika az haşla, süz ve yapışmasın diye birkaç damla yağla harmanla. Tavada pişmeye devam edecekleri için diri kalmaları önemli.',
        sureSn: 180,
      },
      {
        baslik: 'Yumurtayı tavada dağıt',
        aciklama:
          'Geniş tavada yağı kızdır, çırpılmış yumurtaları döküp spatulayla karıştırarak iri parçalar halinde pişir ve tavanın bir kenarına it.',
        sureSn: 90,
      },
      {
        baslik: 'Sebzeleri diri kavur',
        aciklama:
          'Tavanın boş tarafına havuç ve sarımsağı ekle, yüksek ateşte 2 dakika çevir. Havuç hafif yumuşamalı ama çıtırlığını korumalı.',
        sureSn: 120,
      },
      {
        baslik: 'Noodle ve sosu buluştur',
        aciklama:
          'Haşlanmış noodle-ları ve hazırladığın sosu tavaya dök. Maşayla altını üstüne getirerek sosun her teline tutunmasını sağla; 2-3 dakika sonra sos koyulaşıp noodle-lara yapışır.',
        sureSn: 180,
      },
      {
        baslik: 'Taze soğanla tamamla',
        aciklama:
          'Taze soğanları ekleyip son bir kez harmanla ve ocaktan al. Servis ederken üzerine dilim limon koy; sıkılan taze limon bu yemeğin dengesini kuran son dokunuştur.',
      },
    ],
    pufNoktasi:
      'Sosun sırrı tatlı, ekşi ve tuzlunun eşit güçte olması. Tavaya dökmeden önce sosu parmağınla tat; hangisi eksikse (şeker, limon ya da soya) tavada değil kasede tamamla.',
  },
  {
    id: 'firinda-citir-spring-roll',
    baslik: 'Fırında Çıtır Spring Roll',
    altBaslik: 'Yufkayla sarılan sebzeli rulolar; kızartma yok, fırında az yağla çıtır çıtır',
    kategori: 'hamur-isi',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🌯',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 230,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yufka', miktar: 2, birim: 'adet' },
      { ad: 'beyaz lahana', miktar: 300, birim: 'g', not: 'ince ince kıyılmış' },
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'ince şeritler halinde' },
      { ad: 'taze soğan', miktar: 3, birim: 'adet' },
      { ad: 'zencefil', miktar: 1, birim: 'çay kaşığı', not: 'rendelenmiş' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'soya sosu', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 4, birim: 'yemek kaşığı', not: '2 kaşığı iç harç, 2 kaşığı üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'İç harcı soteleyip soğut',
        aciklama:
          'Geniş tavada 2 kaşık yağı kızdır; lahana, havuç ve biberi yüksek ateşte 4-5 dakika soteleyerek sularını uçur. Sarımsak, zencefil ve soya sosunu ekleyip 1 dakika daha çevir, taze soğanı karıştır ve harcı tamamen soğut. Sıcak harç yufkayı ıslatıp yırtar.',
        sureSn: 360,
      },
      {
        baslik: 'Yufkaları dilimle',
        aciklama:
          'Her yufkayı önce ikiye, sonra her yarımı üçe bölerek toplam 12 üçgen elde et. Kuruyup kırılmaması için üzerlerini nemli bir bezle örterek çalış.',
      },
      {
        baslik: 'Ruloları sar',
        aciklama:
          'Üçgenin geniş kenarına 1-2 kaşık harç koy, kenarlarını içe kıvırıp sıkıca rulo yap. Uç kısmını parmağını suya batırıp yapıştır; gevşek sarılan rulo fırında açılır.',
      },
      {
        baslik: 'Yağla ve fırınla',
        aciklama:
          'Ruloları yağlı kağıt serili tepsiye aralıklı diz, üstlerini fırçayla kalan yağla ince ince yağla. Önceden ısıtılmış 200 derece fırında altın rengi alana kadar 18-20 dakika pişir; yarıda bir kez çevir.',
        sureSn: 1200,
      },
      {
        baslik: 'Sosla servis et',
        aciklama:
          'Fırından çıkan ruloları 5 dakika dinlendir. Yanında küçük bir kasede soya sosu ve birkaç damla acı sosla servis et; sıcakken en çıtır hâlindedir.',
      },
    ],
    pufNoktasi:
      'Çıtırlığın düşmanı nemdir: iç harcı hem iyice suyunu çektirerek pişir hem de mutlaka soğuk kullan. Ruloları tepsiye sık dizersen buharda kalıp yumuşarlar, aralarında parmak kadar boşluk bırak.',
  },
  {
    id: 'galeta-kaplamali-tavuk-katsu',
    baslik: 'Tavuk Katsu',
    altBaslik: 'Japonların çıtır kaplamalı tavuk şnitzeli; ev usulü katsu sosuyla birlikte',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'misafir'],
    emoji: '🍗',
    porsiyon: 3,
    hazirlikDk: 20,
    pisirmeDk: 15,
    zorluk: 'orta',
    kaloriPerPorsiyon: 610,
    beslenmeEtiketleri: ['laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 500, birim: 'g', not: '3 yaprak halinde açılmış' },
      { ad: 'un', miktar: 0.5, birim: 'su bardağı', grup: 'Kaplama için' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', grup: 'Kaplama için' },
      { ad: 'galeta unu', miktar: 1.5, birim: 'su bardağı', grup: 'Kaplama için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'su bardağı', not: 'kızartmak için' },
      { ad: 'ketçap', miktar: 3, birim: 'yemek kaşığı', grup: 'Katsu sosu için' },
      { ad: 'soya sosu', miktar: 1, birim: 'yemek kaşığı', grup: 'Katsu sosu için' },
      { ad: 'hardal', miktar: 1, birim: 'çay kaşığı', grup: 'Katsu sosu için' },
      { ad: 'bal', miktar: 1, birim: 'çay kaşığı', grup: 'Katsu sosu için' },
    ],
    adimlar: [
      {
        baslik: 'Tavukları inceltip tuzla',
        aciklama:
          'Tavuk yapraklarını streç arasına alıp et tokmağıyla ya da tencere tabanıyla eşit kalınlıkta (yaklaşık 1 cm) dövüp incelt. İki yüzünü tuz ve karabiberle ov.',
      },
      {
        baslik: 'Katsu sosunu karıştır',
        aciklama:
          'Küçük bir kasede ketçap, soya sosu, hardal ve balı çırparak pürüzsüz bir sos yap. Buzdolabında dinlenirken tatlar birbirine oturur.',
      },
      {
        baslik: 'Üçlü kaplama düzeni kur',
        aciklama:
          'Üç ayrı kaba sırasıyla un, çırpılmış yumurta ve galeta ununu koy. Her tavuğu önce una bula ve fazlasını silkele, sonra yumurtaya batır, en son galeta ununa yatırıp avucunla bastırarak kapla.',
      },
      {
        baslik: 'Kızgın yağda kızart',
        aciklama:
          'Yağı geniş tavada orta-yüksek ateşte kızdır; içine atılan bir tutam galeta unu hemen cızırdıyorsa hazırdır. Tavukları tek tek yağa bırak, her yüzünü 3-4 dakika koyu altın rengi alana kadar kızart.',
        sureSn: 480,
      },
      {
        baslik: 'Dinlendirip dilimle',
        aciklama:
          'Kızaran tavukları kağıt havlu yerine tel ızgara üzerinde 5 dakika dinlendir; alttan hava alınca kaplama yumuşamaz. Sonra parmak kalınlığında şeritler halinde dilimle.',
        sureSn: 300,
      },
      {
        baslik: 'Sosla servis et',
        aciklama:
          'Dilimleri sade pirinç pilavının yanına diz, katsu sosunu üzerine çizgi çizgi gezdir ya da kenarına koy. Sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Kaplamanın dökülmemesinin sırrı sabır: kaplanan tavukları kızartmadan önce 10 dakika buzdolabında bekletirsen un-yumurta-galeta katmanları birbirine kaynar ve yağda asla ayrılmaz.',
  },
  {
    id: 'tavada-teriyaki-somon',
    baslik: 'Teriyaki Soslu Somon',
    altBaslik: 'Soya ve balla parlatılan somon dilimleri; sos tavada kendiliğinden koyulaşır',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'fit'],
    emoji: '🐟',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: ['laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'somon', miktar: 2, birim: 'adet', not: 'fileto, yaklaşık 400 g' },
      { ad: 'soya sosu', miktar: 4, birim: 'yemek kaşığı', grup: 'Teriyaki sosu için' },
      { ad: 'bal', miktar: 2, birim: 'yemek kaşığı', grup: 'Teriyaki sosu için' },
      { ad: 'zencefil', miktar: 1, birim: 'çay kaşığı', grup: 'Teriyaki sosu için', not: 'rendelenmiş' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş', grup: 'Teriyaki sosu için', not: 'rendelenmiş' },
      { ad: 'su', miktar: 3, birim: 'yemek kaşığı', grup: 'Teriyaki sosu için' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'susam', miktar: 1, birim: 'çay kaşığı', not: 'üzeri için' },
      { ad: 'taze soğan', miktar: 1, birim: 'adet', not: 'üzeri için, ince kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'Teriyaki sosunu karıştır',
        aciklama:
          'Kasede soya sosu, bal, rendelenmiş zencefil, sarımsak ve suyu bal eriyene kadar çırp. Sosun yarısını somonların üzerine dök.',
      },
      {
        baslik: 'Somonu marine et',
        aciklama:
          'Sosla buluşan somonları buzdolabında 20 dakika beklet. Daha uzun bekletme; soya balığın dokusunu fazla sıkılaştırır.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Derili yüzünden mühürle',
        aciklama:
          'Tavada yağı orta-yüksek ateşte kızdır. Somonları marinattan çıkarıp hafifçe kurula ve derili yüzü alta gelecek şekilde tavaya koy; 4 dakika dokunmadan pişirerek deriyi çıtırlaştır.',
        sureSn: 240,
      },
      {
        baslik: 'Çevirip sosla pişir',
        aciklama:
          'Somonları nazikçe çevir, kalan sosu ve marinatı tavaya dök. Kısık ateşte sos kabarcıklanıp koyulaşırken kaşıkla somonların üzerine sos gezdirerek 3-4 dakika pişir.',
        sureSn: 240,
      },
      {
        baslik: 'Susamla servis et',
        aciklama:
          'Parlak sosa bulanan somonları tabağa al, tavada kalan sosu üzerlerine dök. Susam ve taze soğan serperek pilav ya da haşlanmış sebze eşliğinde servis et.',
      },
    ],
    pufNoktasi:
      'Sosun karamelize olması için tavaya döktükten sonra karıştırma; sadece tavayı hafifçe sallayıp sosu kaşıkla balığın üstüne gezdir. Bal içerdiği için ateş sonuna kadar kısık kalmalı, yoksa acılaşır.',
  },
  {
    id: 'kore-usulu-yapiskan-aci-tavuk',
    baslik: 'Kore Usulü Yapışkan Acı Tavuk',
    altBaslik: 'Acı sos, bal ve ketçapla parlayan çıtır tavuk lokmaları; Kore sokak lezzeti esintisi',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'sokak-lezzeti'],
    emoji: '🌶️',
    porsiyon: 3,
    hazirlikDk: 20,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 540,
    beslenmeEtiketleri: ['laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 500, birim: 'g', not: 'iri lokmalar halinde' },
      { ad: 'soya sosu', miktar: 1, birim: 'yemek kaşığı', grup: 'Marinasyon için' },
      { ad: 'zencefil', miktar: 1, birim: 'çay kaşığı', grup: 'Marinasyon için', not: 'rendelenmiş' },
      { ad: 'nişasta', miktar: 0.5, birim: 'su bardağı', not: 'kaplama için' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'su bardağı', not: 'kızartmak için' },
      { ad: 'acı sos', miktar: 3, birim: 'yemek kaşığı', grup: 'Yapışkan sos için' },
      { ad: 'bal', miktar: 2, birim: 'yemek kaşığı', grup: 'Yapışkan sos için' },
      { ad: 'ketçap', miktar: 2, birim: 'yemek kaşığı', grup: 'Yapışkan sos için' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', grup: 'Yapışkan sos için', not: 'rendelenmiş' },
      { ad: 'su', miktar: 4, birim: 'yemek kaşığı', grup: 'Yapışkan sos için' },
      { ad: 'susam', miktar: 1, birim: 'yemek kaşığı', not: 'üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Tavukları marine et',
        aciklama:
          'Tavuk lokmalarını soya sosu ve zencefille harmanla, üzerini kapatıp buzdolabında 30 dakika dinlendir. Bu kısa marinasyon hem lezzet verir hem eti yumuşatır.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Nişastayla kapla',
        aciklama:
          'Marine tavukları süzmeden nişastanın içine at ve her lokmayı ayrı ayrı bulayarak ince bir kabuk oluştur. Nişasta, undan çok daha cam gibi bir çıtırlık verir.',
      },
      {
        baslik: 'İki tur kızart',
        aciklama:
          'Yağı kızdırıp tavukları 4-5 dakika hafif renk alana kadar kızart ve tel üzerine al. 3 dakika dinlendirdikten sonra hepsini 2 dakikalığına tekrar yağa at; çift kızartma Kore usulünün çıtırlık sırrıdır.',
        sureSn: 600,
      },
      {
        baslik: 'Yapışkan sosu pişir',
        aciklama:
          'Ayrı bir geniş tavada acı sos, bal, ketçap, sarımsak ve suyu karıştırıp kısık ateşte kabarcıklanana kadar pişir. Sos kaşığın arkasını kaplayacak kıvama gelince hazırdır.',
        sureSn: 240,
      },
      {
        baslik: 'Tavukları sosa bula',
        aciklama:
          'Çıtır tavukları kaynayan sosun içine at, tavayı sallayarak ve spatulayla çevirerek her lokmanın parlak sosla kaplanmasını sağla. 1 dakikadan uzun tutma; çıtırlık kaybolur.',
        sureSn: 60,
      },
      {
        baslik: 'Susam serpip servis et',
        aciklama:
          'Tavukları servis tabağına al, üzerine bolca susam serp. Yanında sade pilav ve dilimlenmiş salatalıkla sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Sosu tavuklara döküp bekletme; servis anında bula. Acıyı yumuşatmak isteyenler acı sosun bir kaşığını ketçapla değiştirebilir, seven ise sosa bir çay kaşığı pul biber ekleyebilir.',
  },
  {
    id: 'sebzeli-wok-noodle',
    baslik: 'Sebzeli Wok Noodle',
    altBaslik: 'Yüksek ateşte diri kalan sebzeler ve soya soslu noodle; 15 dakikada hazır',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', '15-dakika'],
    emoji: '🥢',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: ['vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'noodle', miktar: 2, birim: 'adet' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'ince uzun şeritler halinde' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'ince şeritler halinde' },
      { ad: 'kabak', miktar: 1, birim: 'adet', not: 'ince uzun şeritler halinde' },
      { ad: 'mantar', miktar: 150, birim: 'g', not: 'dilimlenmiş' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'zencefil', miktar: 1, birim: 'çay kaşığı', not: 'rendelenmiş' },
      { ad: 'soya sosu', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'sirke', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'susam', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Noodle-ları az haşla',
        aciklama:
          'Noodle-ları kaynar suda paket süresinden 1 dakika eksik haşlayıp süz. Haşlama suyundan yarım çay bardağı ayır; sosun kıvamını bu su ayarlayacak.',
        sureSn: 180,
      },
      {
        baslik: 'Sosu hazırla',
        aciklama: 'Küçük kasede soya sosu, şeker ve sirkeyi şeker eriyene kadar karıştır.',
      },
      {
        baslik: 'Mantarları susuz kavur',
        aciklama:
          'Geniş tava ya da wok içinde yağın yarısını kızdır, mantarları tek kat yayıp suyunu salıp çekene ve kenarları kızarana kadar 3 dakika kavur.',
        sureSn: 180,
      },
      {
        baslik: 'Sebzeleri sırayla ekle',
        aciklama:
          'Kalan yağla birlikte havucu ekleyip 1 dakika, ardından biber ve kabağı ekleyip 2 dakika yüksek ateşte sürekli çevirerek pişir. En son sarımsak ve zencefili ekleyip kokusu çıkana kadar çevir.',
        sureSn: 240,
      },
      {
        baslik: 'Noodle ve sosla birleştir',
        aciklama:
          'Noodle-ları ve sosu tavaya dök, maşayla harmanla. Kuru görünürse ayırdığın haşlama suyundan azar azar ekle; 1-2 dakika sonra sos telleri parlak bir film gibi kaplar.',
        sureSn: 120,
      },
      {
        baslik: 'Susamla tamamla',
        aciklama: 'Ocaktan alıp susam serp ve hemen servis et; wok yemekleri bekledikçe diriliğini kaybeder.',
      },
    ],
    pufNoktasi:
      'Bütün sebzeleri aynı incelikte doğramak eşit pişmenin anahtarı. Tavaya sığmayacak kadar kalabalık malzeme koyarsan sebzeler kavrulmak yerine haşlanır; gerekirse iki partide pişir.',
  },
  {
    id: 'hindistan-cevizli-tavuk-kori',
    baslik: 'Hindistan Cevizli Tavuk Köri',
    altBaslik: 'Thai usulünden ilhamla; hindistan cevizi sütünde pişen yumuşacık köri soslu tavuk',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'tek-tencere'],
    emoji: '🍛',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 520,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 500, birim: 'g', not: 'kuşbaşı doğranmış' },
      { ad: 'hindistan cevizi sütü', miktar: 400, birim: 'ml' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş' },
      { ad: 'zencefil', miktar: 1, birim: 'yemek kaşığı', not: 'rendelenmiş' },
      { ad: 'köri', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'zerdeçal', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'şeritler halinde' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu, servis öncesi' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı yağda yumuşat',
        aciklama:
          'Derin bir tavada yağı ısıt, soğanları pembeleşene kadar 4-5 dakika kavur. Sarımsak ve zencefili ekleyip kokuları açılana kadar 1 dakika daha çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Baharatları yağda uyandır',
        aciklama:
          'Köri, zerdeçal ve salçayı tavaya ekle, sürekli karıştırarak 1 dakika kavur. Baharatın yağda kısa süre pişmesi körinin tozumsu tadını alıp derinleştirir.',
        sureSn: 60,
      },
      {
        baslik: 'Tavukları mühürle',
        aciklama: 'Tavukları ekleyip baharatlı harçla kaplanacak şekilde, renkleri dönene kadar 4-5 dakika çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Sütü ekleyip pişir',
        aciklama:
          'Hindistan cevizi sütünü, suyu, biber şeritlerini ve tuzu ekle. Kaynayınca ateşi kıs, kapağı aralık bırakıp sos hafif koyulaşana ve tavuklar yumuşayana kadar 15 dakika pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Limonla dengele',
        aciklama:
          'Ocaktan almadan hemen önce yarım limonun suyunu sıkıp karıştır; asidite sütün yoğunluğunu hafifletir. Sıcak pilav üzerinde servis et.',
      },
    ],
    pufNoktasi:
      'Hindistan cevizi sütü yüksek ateşte kesilebilir; süt girdikten sonra tencereyi asla harıl harıl kaynatma, tembel tembel kabarcıklansın. Sos gereğinden koyulaşırsa bir-iki kaşık suyla açılır.',
  },
  {
    id: 'manti-hamurlu-tava-gyoza',
    baslik: 'Tava Gyoza (Mantı Hamurlu)',
    altBaslik: 'Altı çıtır üstü buğulu Japon mantısı; harcı kıymalı lahanalı, hamuru el açması',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil', 'misafir'],
    emoji: '🥟',
    porsiyon: 4,
    hazirlikDk: 45,
    pisirmeDk: 15,
    zorluk: 'zor',
    kaloriPerPorsiyon: 450,
    beslenmeEtiketleri: ['laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 2, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 0.75, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'kıyma', miktar: 250, birim: 'g', grup: 'İç harcı için' },
      { ad: 'beyaz lahana', miktar: 200, birim: 'g', grup: 'İç harcı için', not: 'çok ince kıyılmış' },
      { ad: 'taze soğan', miktar: 3, birim: 'adet', grup: 'İç harcı için' },
      { ad: 'zencefil', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için', not: 'rendelenmiş' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'İç harcı için' },
      { ad: 'soya sosu', miktar: 2, birim: 'yemek kaşığı', grup: 'İç harcı için' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı', not: 'kızartmak için' },
      { ad: 'su', miktar: 0.5, birim: 'çay bardağı', not: 'buhar için' },
      { ad: 'sirke', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'soya sosu', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Un ve tuzu karıştır, ılık suyu azar azar ekleyerek kulak memesinden biraz sert bir hamur yoğur. Pürüzsüzleşene kadar 5 dakika çalış.',
      },
      {
        baslik: 'Hamuru dinlendir',
        aciklama: 'Hamuru streçle sarıp oda sıcaklığında 30 dakika dinlendir; dinlenen hamur incecik açılır ve yırtılmaz.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'İç harcı yoğurarak hazırla',
        aciklama:
          'Kıyılmış lahanayı bir tutam tuzla ovup 10 dakika bekletip suyunu sıkarak çıkar. Kıyma, taze soğan, zencefil, sarımsak ve soya sosuyla birlikte harç macun kıvamına gelene kadar elinle yoğur.',
      },
      {
        baslik: 'Aç, doldur, büz',
        aciklama:
          'Hamuru ince açıp bir bardakla 8-9 cm daireler kes. Her dairenin ortasına bir tatlı kaşığı harç koy, yarım ay şeklinde kapat ve kenarını pili yaparak (küçük kıvrımlarla) sıkıca büz.',
      },
      {
        baslik: 'Altlarını kızart',
        aciklama:
          'Kapaklı geniş tavada yağı ısıt, gyozaları dik olarak aralıklı diz. Orta ateşte altları belirgin kızarana kadar 3 dakika dokunmadan pişir.',
        sureSn: 180,
      },
      {
        baslik: 'Su ekleyip buharla pişir',
        aciklama:
          'Tavaya yarım çay bardağı suyu döküp kapağı hemen kapat. Su tamamen buharlaşana ve hamur şeffaflaşana kadar 6-7 dakika pişir; kapağı açıp 1 dakika daha bekleterek dipleri tekrar çıtırlat.',
        sureSn: 480,
      },
      {
        baslik: 'Sirkeli sosla servis et',
        aciklama: 'Sirke ve soya sosunu karıştırarak batırma sosunu yap. Gyozaları çıtır tabanları yukarı bakacak şekilde servis et.',
      },
    ],
    pufNoktasi:
      'Lahananın suyunu sıkmayı atlarsan iç harç sulanır ve hamur dipten yırtılır. Kızart-buharla-tekrar kızart üçlemesi gyozanın imzasıdır; suyu döktüğünde yağ sıçrar, kapağı kalkan gibi kullan.',
  },
  {
    id: 'sebzeli-yumurtali-pirinc-kasesi',
    baslik: 'Sebzeli Yumurtalı Pirinç Kasesi',
    altBaslik: 'Donburi esintili tek kase yemek: soya soslu sebzeler ve yarı akışkan yumurta pilav üstünde',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['yeni-nesil', 'tek-tencere'],
    emoji: '🍥',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 460,
    beslenmeEtiketleri: ['vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'pirinç', miktar: 1, birim: 'su bardağı' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', not: 'pilav için' },
      { ad: 'yumurta', miktar: 3, birim: 'adet' },
      { ad: 'mantar', miktar: 150, birim: 'g', not: 'dilimlenmiş' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'ince yarım aylar halinde' },
      { ad: 'bezelye', miktar: 0.5, birim: 'su bardağı' },
      { ad: 'taze soğan', miktar: 2, birim: 'adet' },
      { ad: 'soya sosu', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', not: 'sos için' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'yemek kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sade pilavı pişir',
        aciklama:
          'Yıkanmış pirinci 1,5 su bardağı suyla tencereye al, kaynayınca ateşi kıs ve kapağı kapalı şekilde suyunu çekene kadar 12-14 dakika pişir. Kapağını açmadan dinlenmeye bırak.',
        sureSn: 840,
      },
      {
        baslik: 'Sebzeleri sotele',
        aciklama:
          'Geniş bir tavada yağı ısıt; mantar ve havucu orta-yüksek ateşte 4-5 dakika, mantarlar suyunu çekip renk alana kadar sotele. Bezelyeyi ekleyip 1 dakika daha çevir.',
        sureSn: 360,
      },
      {
        baslik: 'Soslu suyu ekle',
        aciklama:
          'Soya sosu, şeker ve yarım su bardağı suyu tavaya dök. Kaynayınca ateşi orta kısığa al; sebzeler tatlı-tuzlu sosun içinde 2 dakika pişsin.',
        sureSn: 120,
      },
      {
        baslik: 'Yumurtayı üstüne dök',
        aciklama:
          'Yumurtaları kasede kabaca çırp — tamamen homojen olmasın, sarı ve beyaz izler kalsın. Kaynayan sosun üzerine daire çizerek dök, kapağı kapat ve yumurta kenarları tutup ortası hafif akışkan kalana kadar 2-3 dakika pişir.',
        sureSn: 180,
      },
      {
        baslik: 'Kaseleri kur',
        aciklama:
          'Sıcak pilavı iki kaseye paylaştır, yumurtalı sebzeli karışımı sosuyla birlikte kaydırarak üzerine yerleştir. Taze soğan serperek kaşıkla servis et.',
      },
    ],
    pufNoktasi:
      'Bu kasenin ruhu, sosun pilava sızması: karışımı pilavın üstüne koyarken tavadaki sosu esirgeme. Yumurtayı tam katılaşmadan almalısın; kapalı kapta pilavın buharıyla pişmeye devam eder.',
  },
  {
    id: 'tatli-eksi-tavuk',
    baslik: 'Tatlı Ekşi Tavuk',
    altBaslik: 'Çin lokantalarının parlak kırmızı soslu klasiği; evdeki ketçap ve sirkeyle',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🍍',
    porsiyon: 3,
    hazirlikDk: 20,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 550,
    beslenmeEtiketleri: ['laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 450, birim: 'g', not: 'kuşbaşı doğranmış' },
      { ad: 'nişasta', miktar: 0.5, birim: 'su bardağı', grup: 'Kaplama için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Kaplama için' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'su bardağı', not: 'kızartmak için' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'iri küpler halinde' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'iri küpler halinde' },
      { ad: 'ketçap', miktar: 4, birim: 'yemek kaşığı', grup: 'Tatlı ekşi sos için' },
      { ad: 'sirke', miktar: 3, birim: 'yemek kaşığı', grup: 'Tatlı ekşi sos için' },
      { ad: 'toz şeker', miktar: 2, birim: 'yemek kaşığı', grup: 'Tatlı ekşi sos için' },
      { ad: 'soya sosu', miktar: 1, birim: 'yemek kaşığı', grup: 'Tatlı ekşi sos için' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', grup: 'Tatlı ekşi sos için' },
      { ad: 'nişasta', miktar: 1, birim: 'çay kaşığı', grup: 'Tatlı ekşi sos için', not: '2 kaşık suda açılmış' },
    ],
    adimlar: [
      {
        baslik: 'Tavukları kaplamaya hazırla',
        aciklama:
          'Tavuk küplerini çırpılmış yumurtayla harmanla, sonra nişastaya bulayarak her parçayı ince bir kabukla kapla. Fazla nişastayı silkele.',
      },
      {
        baslik: 'Tavukları kızart',
        aciklama:
          'Yağı kızdırıp tavukları partiler halinde, dışları altın sarısı ve çıtır olana kadar 4-5 dakika kızart. Tel süzgece alıp fazla yağını süzdür.',
        sureSn: 420,
      },
      {
        baslik: 'Sebzeleri diri sotele',
        aciklama:
          'Ayrı bir tavada 1 kaşık kızartma yağıyla soğan ve biber küplerini yüksek ateşte 2-3 dakika sotele; kenarları hafif yansın ama içleri diri kalsın.',
        sureSn: 180,
      },
      {
        baslik: 'Tatlı ekşi sosu kaynat',
        aciklama:
          'Ketçap, sirke, şeker, soya sosu ve suyu sebzelerin üzerine dök, kaynamaya bırak. Suda açılmış nişastayı karıştırarak ekle; sos 1 dakika içinde parlayıp koyulaşır.',
        sureSn: 180,
      },
      {
        baslik: 'Tavukları sosa katıp servis et',
        aciklama:
          'Çıtır tavukları sosa ekleyip her parça kaplanana kadar 1 dakika harmanla ve hemen ocaktan al. Sade pilav eşliğinde bekletmeden servis et.',
        sureSn: 60,
      },
    ],
    pufNoktasi:
      'Sosun dengesini ketçap değil sirke-şeker ikilisi kurar: tadına bakıp boğazı yakan bir ekşilik varsa şeker, yavan tatlılık varsa sirke ekle. Tavuklar sosta beklerse kabuk yumuşar; birleştirme her zaman son saniyede.',
  },
  {
    id: 'cin-usulu-sarimsakli-patlican',
    baslik: 'Çin Usulü Sarımsaklı Patlıcan',
    altBaslik: 'Tavada yumuşacık pişen patlıcanlar, sarımsaklı tatlı-salçalı-soyalı parlak sosla',
    kategori: 'ana-yemek',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🍆',
    porsiyon: 3,
    hazirlikDk: 15,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'patlıcan', miktar: 3, birim: 'adet', not: 'boyuna dörde bölünüp parmak boyu kesilmiş' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'nişasta', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'sarımsak', miktar: 5, birim: 'diş', not: 'ince kıyılmış' },
      { ad: 'zencefil', miktar: 1, birim: 'çay kaşığı', not: 'rendelenmiş' },
      { ad: 'soya sosu', miktar: 3, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'toz şeker', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'sirke', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'acı sos', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', grup: 'Sosu için' },
      { ad: 'taze soğan', miktar: 2, birim: 'adet', not: 'üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Patlıcanları tuzlayıp beklet',
        aciklama:
          'Doğranmış patlıcanları tuzla harmanlayıp süzgeçte 15 dakika beklet; salacağı acı su hem tadı düzeltir hem yağ çekmesini azaltır. Sonra kağıt havluyla iyice kurula.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Nişastayla tozla',
        aciklama: 'Kurulanmış patlıcanları nişastayla harmanla; bu incecik katman dış yüzeyin kızarmasını ve sosun tutunmasını sağlar.',
      },
      {
        baslik: 'Patlıcanları kızart',
        aciklama:
          'Geniş tavada 3 kaşık yağı kızdır, patlıcanları tek kat halinde yay. Her yüzü altın rengi olana kadar ara ara çevirerek 8-10 dakika pişir ve tabağa al.',
        sureSn: 540,
      },
      {
        baslik: 'Sarımsaklı sosu pişir',
        aciklama:
          'Aynı tavaya kalan yağı ekle; sarımsak ve zencefili yanmadan, kokusu çıkana kadar 30 saniye kavur. Soya sosu, şeker, sirke, acı sos ve suyu ekleyip sos hafif koyulaşana kadar 2 dakika kaynat.',
        sureSn: 150,
      },
      {
        baslik: 'Patlıcanı sosla buluştur',
        aciklama:
          'Kızarmış patlıcanları sosa geri koy, tavayı sallayarak her parçayı parlak sosla kapla ve 1 dakika pişir. Taze soğan serperek sıcak servis et; yanına sade pilav çok yakışır.',
        sureSn: 60,
      },
    ],
    pufNoktasi:
      'Patlıcanın süngerleşmemesinin iki sırrı: tuzlu bekletme sonrası mutlaka kurulamak ve tavaya kalabalık koymamak. Sarımsak sosta esas oyuncu; kısık ateşte sadece kokusu açılmalı, kahverengileşirse acılaşır.',
  },
  {
    id: 'zencefilli-balli-cay',
    baslik: 'Zencefilli Ballı Çay',
    altBaslik: 'Taze zencefil, limon ve balla demlenen içini ısıtan Uzakdoğu esintili sıcak içecek',
    kategori: 'icecek',
    koleksiyonlar: ['yeni-nesil', 'demlik-fincan'],
    emoji: '🍵',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 45,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'su', miktar: 500, birim: 'ml' },
      { ad: 'zencefil', miktar: 20, birim: 'g', not: 'taze, ince dilimlenmiş' },
      { ad: 'bal', miktar: 2, birim: 'tatlı kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'dilimlenmiş' },
      { ad: 'tarçın', miktar: 1, birim: 'tutam', not: 'isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Zencefili suda kaynat',
        aciklama:
          'Zencefil dilimlerini soğuk suyla küçük bir tencereye koy ve kaynat. Soğuk sudan başlamak zencefilin keskin aromasının suya tam geçmesini sağlar.',
        sureSn: 180,
      },
      {
        baslik: 'Kısık ateşte demle',
        aciklama:
          'Kaynadıktan sonra ateşi kıs, kapağı kapat ve 7-8 dakika ağır ağır demlenmeye bırak. Ne kadar uzun demlenirse o kadar yakıcı ve güçlü olur; ilk denemede 7 dakikayı geçme.',
        sureSn: 450,
        beklemeAdimi: true,
      },
      {
        baslik: 'Süzüp fincanlara paylaştır',
        aciklama: 'Çayı süzgeçten geçirerek iki fincana doldur, her fincana bir dilim limon ve istersen bir tutam tarçın ekle.',
      },
      {
        baslik: 'Balı ılıkken karıştır',
        aciklama:
          'Çay bir-iki dakika soğuyup içilecek sıcaklığa gelince balı ekleyip karıştır. Balı kaynar suya atmamak hem aromasını hem faydasını korur.',
      },
    ],
    pufNoktasi:
      'Zencefili soymak yerine kaşığın kenarıyla kabuğunu sıyır; kabuğun hemen altındaki bölge aromanın en yoğun olduğu yerdir, bıçakla soyarsan onu da atmış olursun.',
  },
];
