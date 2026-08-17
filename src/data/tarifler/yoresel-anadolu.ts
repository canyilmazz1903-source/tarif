import type { Tarif } from '@/types/tarif';

// Yöresel Anadolu — İç Anadolu ve Akdeniz mutfağından 14 özgün ev tarifi.
// Tüm metinler bu uygulama için sıfırdan yazılmıştır.
export const YORESEL_ANADOLU: Tarif[] = [
  {
    id: 'kayseri-yaglamasi',
    baslik: 'Kayseri Yağlaması',
    altBaslik: 'Kat kat yufka arasına kıymalı sos ve sarımsaklı yoğurt — Kayseri sofralarının gururu',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🥞',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'orta',
    kaloriPerPorsiyon: 520,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yufka', miktar: 3, birim: 'adet', not: 'ince, taze' },
      { ad: 'kıyma', miktar: 400, birim: 'g', grup: 'Sosu için' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'Sosu için', not: 'ince doğranmış' },
      { ad: 'domates salçası', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', grup: 'Sosu için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'yoğurt', miktar: 400, birim: 'g', grup: 'Üzeri için' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Üzeri için', not: 'ezilmiş' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Kıymayı kavur',
        aciklama:
          'Geniş tavada tereyağının 2 kaşığını erit, kıymayı ekleyip suyunu salıp çekene kadar orta ateşte kavur. Soğanları ilave et, pembeleşinceye dek birlikte çevir.',
        sureSn: 480,
      },
      {
        baslik: 'Sosu kıvamına getir',
        aciklama:
          'Salçayı kıymanın ortasına al, kokusu çıkana kadar 1 dakika kavur. Sıcak suyu, tuzu ve karabiberi ekle; sos hafif sulu bir kıvam alana kadar kısık ateşte pişir. Sos kupkuru olmamalı, yufkayı ıslatacak kadar cıvık kalmalı.',
        sureSn: 420,
      },
      {
        baslik: 'Yoğurdu hazırla',
        aciklama:
          'Yoğurdu bir kasede ezilmiş sarımsak ve bir tutam tuzla pürüzsüz olana kadar çırp. Oda sıcaklığında beklet ki sıcak yufkayı soğutmasın.',
        sureSn: 120,
      },
      {
        baslik: 'Yufkaları ısıt ve katla',
        aciklama:
          'Yufkaları teker teker kuru tavada iki yüzü de yumuşayıp hafif benekleninceye kadar ısıt. Her yufkayı dörde bölüp servis tepsisine bir kat yay.',
        sureSn: 300,
      },
      {
        baslik: 'Katları kur',
        aciklama:
          'Her yufka katının üzerine önce birkaç kaşık kıymalı sos, sonra sarımsaklı yoğurt gezdir. Aynı sırayla katları tekrarla; en üst kat bol soslu ve yoğurtlu bitsin.',
        sureSn: 240,
      },
      {
        baslik: 'Kızgın yağla taçlandır',
        aciklama:
          'Kalan tereyağını küçük tavada köpürene kadar kızdır, pul biberi ekleyip hemen ocaktan al. Yağlamanın üzerinde gezdir ve dilimleyerek sıcak servis et.',
        sureSn: 90,
      },
    ],
    pufNoktasi:
      'Yufkaları katlamadan hemen önce ısıtırsan sosun buharıyla yumuşar, bıçak değmeden kaşıkla bile dağılan o meşhur doku ortaya çıkar.',
  },
  {
    id: 'testi-kebabi',
    baslik: 'Testi Kebabı (Güveçte)',
    altBaslik: 'Kapadokya klasiğinin toprak güveçte ev uyarlaması — kapağı sofrada açılır',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir', 'tek-tencere'],
    emoji: '🏺',
    porsiyon: 5,
    hazirlikDk: 25,
    pisirmeDk: 150,
    zorluk: 'zor',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 700, birim: 'g' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 4, birim: 'diş', not: 'bütün' },
      { ad: 'domates', miktar: 3, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'sivri biber', miktar: 3, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'iri küp' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'un', miktar: 1.5, birim: 'su bardağı', grup: 'Kapak hamuru için' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', grup: 'Kapak hamuru için' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'Kapak hamuru için' },
    ],
    adimlar: [
      {
        baslik: 'Eti mühürle',
        aciklama:
          'Tereyağını geniş tavada kızdır, kuşbaşı etleri yüksek ateşte her yüzü renk alana kadar mühürle. Et suyunu içine hapsetmek için bu adımda karıştırmayı azalt.',
        sureSn: 360,
      },
      {
        baslik: 'Sebzeleri harmanla',
        aciklama:
          'Mühürlenen eti geniş bir kaba al; soğan, sarımsak, domates, biber ve patatesi ekle. Salça, tuz, karabiber ve kekikle elinle harmanlayıp her parçayı sosla kapla.',
        sureSn: 300,
      },
      {
        baslik: 'Güveci doldur',
        aciklama:
          'Karışımı toprak güvece aktar, sıcak suyu kenardan yavaşça dök. Malzeme güvecin üçte ikisini geçmesin; kaynarken taşacak yer kalmalı.',
        sureSn: 180,
      },
      {
        baslik: 'Hamur kapağını yap',
        aciklama:
          'Un, su ve tuzu yoğurup kulak memesi kıvamında hamur elde et. Şerit halinde açıp güvecin ağzına yapıştır, ortasını kubbe gibi kapat. Bu kapak buharı içeride tutar.',
        sureSn: 420,
      },
      {
        baslik: 'Fırında ağır ağır pişir',
        aciklama:
          'Güveci soğuk fırına yerleştir, 180 dereceye ayarla ve 2,5 saat pişir. Toprak kabın ani ısıyla çatlamaması için fırını önceden ısıtma.',
        sureSn: 9000,
        beklemeAdimi: true,
      },
      {
        baslik: 'Sofrada aç',
        aciklama:
          'Güveci sofraya getir, kızarmış hamur kapağını bıçakla çevresinden keserek misafirlerin gözü önünde aç. Yükselen buhar bu yemeğin gösterisidir; pilav eşliğinde servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Soğuk fırın kuralı toprak güvecin sigortasıdır; ısı yavaş yükselince kap çatlamaz, et de lif lif dağılan kıvama ulaşır.',
  },
  {
    id: 'konya-etli-ekmek',
    baslik: 'Konya Etli Ekmek (Ev Usulü)',
    altBaslik: 'Uzun ince açılan hamurda baharatlı kıyma — taş fırın tadını ev fırınına taşıyan tarif',
    kategori: 'hamur-isi',
    koleksiyonlar: ['sokak-lezzeti'],
    emoji: '🫓',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 20,
    zorluk: 'zor',
    kaloriPerPorsiyon: 540,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'instant maya', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'su', miktar: 1.25, birim: 'su bardağı', grup: 'Hamuru için', not: 'ılık' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'kıyma', miktar: 300, birim: 'g', grup: 'İçi için', not: 'orta yağlı' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'İçi için', not: 'rendelenmiş, suyu sıkılmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', grup: 'İçi için', not: 'rendelenmiş, süzülmüş' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', grup: 'İçi için', not: 'incecik kıyılmış' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'İçi için' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Unu geniş kaba ele, mayayı ve tuzu ayrı köşelere koy. Ilık suyu azar azar ekleyerek ele yapışmayan, esnek bir hamur yoğur; en az 8 dakika çalış.',
        sureSn: 600,
      },
      {
        baslik: 'Mayalanmaya bırak',
        aciklama:
          'Hamurun üzerini nemli bezle ört ve oda sıcaklığında hacmi iki katına çıkana kadar dinlendir.',
        sureSn: 2700,
        beklemeAdimi: true,
      },
      {
        baslik: 'İç harcı yap',
        aciklama:
          'Kıymayı; suyu sıkılmış soğan, süzülmüş domates, biber, salça ve baharatlarla kasede ez. Harç sulu olursa hamurun altı pişmez; gerekirse süzgeçte 5 dakika beklet.',
        sureSn: 420,
      },
      {
        baslik: 'Uzun ince aç',
        aciklama:
          'Hamuru dörde böl, her parçayı unlu tezgahta önce elipse yakın açıp sonra oklava ile 50-60 cm uzunluğunda, parmak kalınlığından ince bir şerit haline getir.',
        sureSn: 480,
      },
      {
        baslik: 'Harcı sıva',
        aciklama:
          'İç harcı dört parçaya paylaştır ve her hamurun üzerine kenarlarda yarım parmak pay bırakarak ince bir tabaka halinde elinle sıva. Kalın sürersen hamur çiğ kalır.',
        sureSn: 300,
      },
      {
        baslik: 'En sıcak fırında pişir',
        aciklama:
          'Fırını tepsiyle birlikte 250 dereceye kadar ısıt. Etli ekmekleri kızgın tepsiye alıp kenarları kabarıp benek benek kızarana kadar 8-10 dakika pişir.',
        sureSn: 600,
      },
      {
        baslik: 'Dinlendirip dilimle',
        aciklama:
          'Fırından çıkan etli ekmeği temiz beze sarıp 2 dakika dinlendir; böylece kenarları yumuşar. Enine dilimleyip yanında söğüş ve limonla servis et.',
        sureSn: 180,
      },
    ],
    pufNoktasi:
      'Konya fırıncılarının sırrı incecik sürülen harçtır; kıyma tabaka halinde neredeyse şeffaf sürülür, böylece hamurla aynı anda pişer.',
  },
  {
    id: 'ankara-tava',
    baslik: 'Ankara Tava',
    altBaslik: 'Kuzu incik ve etin suyuyla pişen şehriyeli pilav — başkentin düğün klasiği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir', 'tek-tencere'],
    emoji: '🍖',
    porsiyon: 5,
    hazirlikDk: 20,
    pisirmeDk: 140,
    zorluk: 'orta',
    kaloriPerPorsiyon: 620,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuzu incik', miktar: 1200, birim: 'g', not: '4-5 parça' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'bütün' },
      { ad: 'su', miktar: 6, birim: 'su bardağı' },
      { ad: 'pirinç', miktar: 2, birim: 'su bardağı', grup: 'Pilavı için', not: 'yıkanıp süzülmüş' },
      { ad: 'şehriye', miktar: 3, birim: 'yemek kaşığı', grup: 'Pilavı için' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'Pilavı için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Pilavı için' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'İncikleri haşla',
        aciklama:
          'İncikleri bütün soğan ve tuzla birlikte tencerede suyla kaynat; köpüğünü alarak et kemikten ayrılmaya yüz tutana kadar kısık ateşte haşla. Haşlama suyunu sakın dökme.',
        sureSn: 6000,
        beklemeAdimi: true,
      },
      {
        baslik: 'Et suyunu süz',
        aciklama:
          'Etleri dikkatlice çıkar, suyu süzerek ölç; pilav için 3 su bardağı sıcak et suyu ayır. Eksik kalırsa sıcak suyla tamamla.',
        sureSn: 180,
      },
      {
        baslik: 'Şehriyeyi kızart',
        aciklama:
          'Fırına girebilen geniş tavada tereyağını erit, şehriyeyi kehribar rengini alana kadar kavur. Pirinci ekleyip taneler ısınıp şeffaflaşana dek 3 dakika daha çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Salçalı suyu ekle',
        aciklama:
          'Salçayı ayırdığın sıcak et suyunda ez, karabiberle birlikte pirincin üzerine dök. Bir taşım kaynat ve ocaktan al.',
        sureSn: 240,
      },
      {
        baslik: 'İncikleri yerleştir',
        aciklama:
          'Haşlanmış incikleri pilavın üzerine gömercesine yerleştir. Tavanın üzerini folyoyla sıkıca kapat.',
        sureSn: 120,
      },
      {
        baslik: 'Fırında demlendir',
        aciklama:
          'Tavayı 180 derece fırında pirinç suyunu tamamen çekene kadar pişir; son 10 dakika folyoyu açıp inciklerin üzerini hafifçe kızart.',
        sureSn: 2100,
        beklemeAdimi: true,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Fırından çıkan tavayı 10 dakika dinlendir, pilavı kabartıp her tabağa bir incik gelecek şekilde paylaştır.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Bu yemeğin ruhu pilavın suyunda: pirinç sade su değil, inciklerin kemik iliğiyle zenginleşen haşlama suyuyla pişince düğün tadı yakalanır.',
  },
  {
    id: 'nevzine',
    baslik: 'Nevzine Tatlısı',
    altBaslik: 'Kayseri usulü cevizli, yoğurtlu şerbetli hamur tatlısı — baklavanın mütevazı kuzeni',
    kategori: 'tatli',
    koleksiyonlar: ['misafir', 'ramazan'],
    emoji: '🍯',
    porsiyon: 6,
    hazirlikDk: 25,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 460,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'yoğurt', miktar: 0.5, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'tereyağı', miktar: 125, birim: 'g', grup: 'Hamuru için', not: 'eritilmiş' },
      { ad: 'ayçiçek yağı', miktar: 0.5, birim: 'çay bardağı', grup: 'Hamuru için' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'paket', grup: 'Hamuru için' },
      { ad: 'ceviz içi', miktar: 1.5, birim: 'su bardağı', grup: 'İçi için', not: 'iri çekilmiş' },
      { ad: 'toz şeker', miktar: 2.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'su', miktar: 2.5, birim: 'su bardağı', grup: 'Şerbeti için' },
      { ad: 'limon', miktar: 0.25, birim: 'adet', grup: 'Şerbeti için', not: 'suyu' },
    ],
    adimlar: [
      {
        baslik: 'Şerbeti kaynat',
        aciklama:
          'Şeker ve suyu kaynat, limon suyunu ekleyip 10 dakika daha kısık ateşte pişir. Şerbeti soğumaya bırak; tatlıya mutlaka soğuk dökülecek.',
        sureSn: 900,
      },
      {
        baslik: 'Hamuru hazırla',
        aciklama:
          'Un ve kabartma tozunu kaba ele; yoğurt, eritilmiş tereyağı ve sıvı yağı ekleyip ele yapışmayan yumuşak bir hamur topla. Fazla yoğurma, kısa çalış ki tatlı kayısı gibi dağılsın.',
        sureSn: 420,
      },
      {
        baslik: 'Katları döşe',
        aciklama:
          'Hamuru ikiye böl. İlk parçayı yağlanmış borcam boyutunda açıp tabana yerleştir ve cevizin tamamını üzerine eşit yay.',
        sureSn: 300,
      },
      {
        baslik: 'Üst katı kapat ve dilimle',
        aciklama:
          'İkinci hamuru aynı boyutta açıp cevizin üzerine kapat, kenarları bastır. Keskin bıçakla baklava dilimi şeklinde sonuna kadar kes.',
        sureSn: 300,
      },
      {
        baslik: 'Kızarana kadar pişir',
        aciklama:
          'Önceden ısıtılmış 175 derece fırında üzeri altın sarısı olana kadar pişir.',
        sureSn: 2400,
        beklemeAdimi: true,
      },
      {
        baslik: 'Şerbetle buluştur',
        aciklama:
          'Fırından çıkan sıcak tatlının üzerine soğuk şerbeti kaşık kaşık, dilim aralarına gelecek şekilde dök.',
        sureSn: 180,
      },
      {
        baslik: 'Demlenmeye bırak',
        aciklama:
          'Tatlıyı şerbetini tamamen çekmesi için oda sıcaklığında en az 2 saat beklet. Nevzine dinlendikçe lezzetlenir; ertesi gün daha da güzeldir.',
        sureSn: 7200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Sıcak tatlıya soğuk şerbet Kayseri kaidesidir; ters yaparsan hamur çeker, sertleşir. Şerbeti sabırla, birkaç seferde dök.',
  },
  {
    id: 'konya-firin-kebabi',
    baslik: 'Konya Fırın Kebabı (Ev Usulü)',
    altBaslik: 'Sadece et, tuz ve sabırla pişen Konya klasiği — ev fırınına uyarlanmış hali',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🥩',
    porsiyon: 5,
    hazirlikDk: 10,
    pisirmeDk: 210,
    zorluk: 'orta',
    kaloriPerPorsiyon: 530,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuzu incik', miktar: 1500, birim: 'g', not: 'yağlı, kemikli parçalar' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı', not: 'iri taneli' },
      { ad: 'su', miktar: 0.5, birim: 'çay bardağı' },
    ],
    adimlar: [
      {
        baslik: 'Eti tuzla ve dizle',
        aciklama:
          'Et parçalarını iri tuzla her yanından ov, yağlı yüzleri yukarı gelecek şekilde derin bir fırın kabına diz. Başka hiçbir baharat ekleme; bu kebabın kimliği sadeliğidir.',
        sureSn: 300,
      },
      {
        baslik: 'Tereyağı ve suyu ekle',
        aciklama:
          'Tereyağını parçalar halinde etlerin arasına dağıt, yarım çay bardağı suyu kabın kenarından dök. Kabın ağzını önce yağlı kağıt sonra folyoyla iki kat kapat.',
        sureSn: 180,
      },
      {
        baslik: 'Düşük ısıda pişir',
        aciklama:
          'Kabı 150 derece fırına ver ve hiç açmadan 3 saat pişir. Et bu sürede kendi yağı ve buharıyla yumuşayacak.',
        sureSn: 10800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Üzerini kızart',
        aciklama:
          'Folyoyu ve kağıdı al, fırını 210 dereceye çıkar. Etlerin üzeri koyu kestane rengine dönüp yer yer çıtırlaşana kadar 20-25 dakika daha pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Dinlendir ve sun',
        aciklama:
          'Eti fırından çıkarıp 10 dakika dinlendir. Konya usulüne uygun şekilde yanında sadece taze ekmek, söğüş soğan ve yeşil biberle servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Fırın kapağını ilk 3 saat asla açma; kaçan her buhar, etin kemikten kendiliğinden sıyrılan o dokusundan çalar.',
  },
  {
    id: 'yag-mantisi',
    baslik: 'Yağ Mantısı',
    altBaslik: 'Kayseri usulü kızartılmış mantı — önce çıtır çıtır kızarır, sonra yoğurtla yumuşar',
    kategori: 'hamur-isi',
    koleksiyonlar: ['misafir'],
    emoji: '🥟',
    porsiyon: 4,
    hazirlikDk: 50,
    pisirmeDk: 25,
    zorluk: 'orta',
    kaloriPerPorsiyon: 580,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 3, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Hamuru için' },
      { ad: 'su', miktar: 0.75, birim: 'su bardağı', grup: 'Hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamuru için' },
      { ad: 'kıyma', miktar: 250, birim: 'g', grup: 'İçi için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'İçi için', not: 'rendelenmiş' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'su bardağı', grup: 'Kızartmak için' },
      { ad: 'yoğurt', miktar: 400, birim: 'g', grup: 'Üzeri için' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Üzeri için' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur ve dinlendir',
        aciklama:
          'Un, yumurta, su ve tuzu sert bir hamur olana kadar yoğur. Üzerini kapatıp 20 dakika dinlendir; dinlenen hamur incecik açılır.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'İç harcı karıştır',
        aciklama:
          'Kıymayı rendelenmiş soğan, tuz ve karabiberle kasede yoğurarak macun kıvamına getir.',
        sureSn: 180,
      },
      {
        baslik: 'Aç, doldur, kapat',
        aciklama:
          'Hamuru ikiye bölüp her parçayı 2 mm inceliğinde aç ve 3 cm karelere kes. Her karenin ortasına nohut büyüklüğünde harç koy, köşeleri birleştirip bohça gibi sıkıca kapat.',
        sureSn: 1500,
      },
      {
        baslik: 'Mantıları kızart',
        aciklama:
          'Yağı geniş tencerede kızdır, mantıları partiler halinde altın sarısı olana kadar kızart ve kağıt havluya al. Bu aşamada mantılar kıtır kıtır olmalı.',
        sureSn: 720,
      },
      {
        baslik: 'Sıcak suda yumuşat',
        aciklama:
          'Kızaran mantıları tencereye al, üzerini bir parmak geçecek kadar kaynar su dök ve suyunu çekene kadar 8-10 dakika kısık ateşte pişir. Kızarmış hamur suyu emerek bambaşka bir dokuya bürünür.',
        sureSn: 600,
      },
      {
        baslik: 'Yoğurt ve yağla sun',
        aciklama:
          'Mantıları tabaklara paylaştır, sarımsaklı yoğurdu üzerine gezdir. Tereyağını pul biberle kızdırıp yoğurdun üzerinde dolaştır ve hemen servis et.',
        sureSn: 240,
      },
    ],
    pufNoktasi:
      'Kızartılan mantıları hava geçirmez kapta haftalarca saklayabilirsin; misafir kapıyı çaldığında 10 dakikada mantı çıkarmanın Kayseri sırrı budur.',
  },
  {
    id: 'sivas-koftesi',
    baslik: 'Sivas Köftesi',
    altBaslik: 'Baharatı az, eti bol köfte — ızgara tadını tavada yakalayan Sivas usulü',
    kategori: 'ana-yemek',
    koleksiyonlar: ['101'],
    emoji: '🍢',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 600, birim: 'g', not: 'iki kez çekilmiş, orta yağlı' },
      { ad: 'bayat ekmek', miktar: 2, birim: 'dilim', not: 'içi, suda ıslatılıp sıkılmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'rendelenip suyu sıkılmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 3, birim: 'yemek kaşığı', not: 'buz gibi soğuk' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Pişirmek için' },
    ],
    adimlar: [
      {
        baslik: 'Harcı uzun uzun yoğur',
        aciklama:
          'Kıymayı ekmek içi, soğan, sarımsak, tuz ve karabiberle geniş kapta en az 10 dakika yoğur. Soğuk suyu kaşık kaşık ekleyerek harcın macunlaşmasını sağla; Sivas köftesinin tokluğu bu yoğurmadan gelir.',
        sureSn: 600,
      },
      {
        baslik: 'Buzdolabında dinlendir',
        aciklama:
          'Harcın üzerini kapatıp buzdolabında 1 saat dinlendir. Dinlenen harç şekil verirken dağılmaz, pişerken de suyunu bırakmaz.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Köfteleri şekillendir',
        aciklama:
          'Elini soğuk suyla ıslatıp harçtan ceviz büyüklüğünde parçalar kopar; parmak izlerin görünecek şekilde uzunca, hafif basık köfteler yap.',
        sureSn: 420,
      },
      {
        baslik: 'Kızgın tavada mühürle',
        aciklama:
          'Döküm tavayı çok az yağla iyice kızdır. Köfteleri aralıklı diz, her yüzünü 3-4 dakika közlenmiş görüntü alana kadar çevirerek pişir. Tavaya üst üste doldurma; köfte kızarmalı, haşlanmamalı.',
        sureSn: 540,
      },
      {
        baslik: 'Közlenmişlerle servis et',
        aciklama:
          'Köfteleri közlenmiş biber ve domatesle, yanına söğüş soğan koyarak sıcak servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Sivas köftesinde kimyon aramak boşuna; bu köftenin karakteri baharatta değil, uzun yoğurma ve iki kez çekilmiş kıymanın ipeksi dokusundadır.',
  },
  {
    id: 'anadolu-kesme-corbasi',
    baslik: 'Kesme Çorbası',
    altBaslik: 'Erişteli, mercimekli, yoğurt terbiyeli İç Anadolu çorbası — naneli tereyağıyla taçlanır',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🍜',
    porsiyon: 6,
    hazirlikDk: 10,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 310,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'erişte', miktar: 1.5, birim: 'su bardağı' },
      { ad: 'yeşil mercimek', miktar: 0.5, birim: 'su bardağı', not: 'akşamdan ıslatılmış' },
      { ad: 'su', miktar: 7, birim: 'su bardağı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'yoğurt', miktar: 1, birim: 'su bardağı', grup: 'Terbiyesi için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Terbiyesi için', not: 'sarısı' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı', grup: 'Terbiyesi için' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'kuru nane', miktar: 1, birim: 'tatlı kaşığı', grup: 'Üzeri için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Mercimeği haşla',
        aciklama:
          'Islatılmış mercimeği süzüp tencerede suyla kaynat; taneler yumuşayana kadar orta ateşte 20 dakika haşla.',
        sureSn: 1200,
      },
      {
        baslik: 'Erişteyi ekle',
        aciklama:
          'Erişte ve tuzu tencereye ekle, erişteler yumuşayana kadar 8-10 dakika daha pişir. Erişte çorbayı koyulaştırır; gerekirse sıcak su ilave et.',
        sureSn: 600,
      },
      {
        baslik: 'Terbiyeyi hazırla',
        aciklama:
          'Yoğurdu, yumurta sarısını ve unu kasede pürüzsüzce çırp. Kaynayan çorbadan bir kepçe alıp çırparak terbiyeye karıştır; bu ılıştırma terbiyenin kesilmesini önler.',
        sureSn: 240,
      },
      {
        baslik: 'Terbiyeyi çorbaya kat',
        aciklama:
          'Ilıştırılmış terbiyeyi çorbaya ince bir şerit halinde dökerken sürekli karıştır. Bir taşım kaynayınca ocağı kapat; fazla kaynatırsan yoğurt kesilir.',
        sureSn: 300,
      },
      {
        baslik: 'Naneli yağı gezdir',
        aciklama:
          'Tereyağını küçük tavada erit, nane ve pul biberi ekleyip köpürünce ocaktan al. Kâselere aldığın çorbanın üzerinde gezdirerek servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Ev yapımı erişten varsa unlu haliyle doğrudan çorbaya at; unu silkeleme. O un, çorbaya değirmen kokulu doğal bir koyuluk verir.',
  },
  {
    id: 'tahinli-piyaz',
    baslik: 'Antalya Usulü Tahinli Piyaz',
    altBaslik: 'Tahinli, sirkeli sosuyla bildiğin piyazdan bambaşka — Antalyaʼnın imza salatası',
    kategori: 'salata',
    koleksiyonlar: ['101'],
    emoji: '🥗',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuru fasulye', miktar: 1.5, birim: 'su bardağı', not: 'akşamdan ıslatılmış' },
      { ad: 'tahin', miktar: 3, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'sirke', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', grup: 'Sosu için', not: 'suyu' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Sosu için', not: 'ezilmiş' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 0.5, birim: 'çay bardağı', grup: 'Sosu için', not: 'fasulye haşlama suyu' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'kıyılmış' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', not: 'haşlanmış' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Fasulyeyi haşla',
        aciklama:
          'Islatılmış fasulyeyi süzüp bol suda dağılmadan yumuşayana kadar haşla. Haşlama suyundan yarım çay bardağı ayırıp fasulyeyi süz.',
        sureSn: 2400,
        beklemeAdimi: true,
      },
      {
        baslik: 'Tahinli sosu çırp',
        aciklama:
          'Tahini kasede sirke ve limon suyuyla çırp; önce katılaşır, telaşlanma. Sıcak haşlama suyunu azar azar ekleyerek boza kıvamında akışkan bir sos elde et. Sarımsak, zeytinyağı ve tuzu karıştır.',
        sureSn: 300,
      },
      {
        baslik: 'Fasulyeyi sosla buluştur',
        aciklama:
          'Ilık fasulyeyi geniş kaba al, tahinli sosun üçte ikisini üzerine döküp nazikçe harmanla. Fasulye ılıkken sosu emer; bu yüzden soğumasını bekleme.',
        sureSn: 180,
      },
      {
        baslik: 'Piyazı tamamla',
        aciklama:
          'Soğan, domates ve maydanozu ekleyip bir kez daha karıştır. Servis tabağına aktar, kalan sosu üzerinde gezdir.',
        sureSn: 180,
      },
      {
        baslik: 'Yumurtayla süsle',
        aciklama:
          'Haşlanmış yumurtaları dilimleyip piyazın üzerine diz, pul biber serperek oda sıcaklığında servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Antalya piyazının ölçüsü şudur: sos fasulyenin süsü değil, çorbamsı eşlikçisidir. Sostan kısarsan piyaz değil, sadece haşlanmış fasulye yersin.',
  },
  {
    id: 'hibes',
    baslik: 'Hibeş',
    altBaslik: 'Antalyaʼnın kimyonlu tahin mezesi — beş dakikada hazır, ekmek doyuran lezzet',
    kategori: 'salata',
    koleksiyonlar: ['15-dakika', 'fit'],
    emoji: '🥣',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 180,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tahin', miktar: 5, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu' },
      { ad: 'su', miktar: 0.5, birim: 'çay bardağı', not: 'soğuk' },
      { ad: 'kimyon', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'tatlı toz biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Tahini limonla kestir',
        aciklama:
          'Tahini kaseye al, limon suyunu ekleyip çırp. Karışım önce koyulaşıp topaklanır; bu hibeşin doğru yolda olduğunun işaretidir.',
        sureSn: 120,
      },
      {
        baslik: 'Suyla aç',
        aciklama:
          'Soğuk suyu kaşık kaşık ekleyerek çırpmaya devam et. Karışım krema gibi açılıp kaşıktan şerit halinde akan kıvama gelince dur.',
        sureSn: 180,
      },
      {
        baslik: 'Baharatla',
        aciklama:
          'Kimyon, tatlı toz biber, pul biber ve tuzu ekleyip karıştır. Kimyondan çekinme; hibeşi hibeş yapan bu cömertliktir.',
        sureSn: 60,
      },
      {
        baslik: 'Dinlendir',
        aciklama:
          'Hibeşi buzdolabında yarım saat dinlendir; baharatlar tahine işlesin, kıvamı toparlansın.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Servis et',
        aciklama:
          'Kaseye yayıp kaşığın tersiyle göbek aç, zeytinyağını gezdir ve üzerine bir tutam pul biber serp. Sıcak ekmek ya da közlenmiş sebzeyle sun.',
        sureSn: 90,
      },
    ],
    pufNoktasi:
      'Su yerine buz gibi maden suyu kullanırsan hibeş daha havalı, daha açık renkli olur; Antalya esnaf lokantalarının sessiz hilesi budur.',
  },
  {
    id: 'cezerye',
    baslik: 'Cezerye',
    altBaslik: 'Mersinʼin havuçlu, cevizli lokum kıvamında şekerlemesi — evde şaşırtıcı derecede kolay',
    kategori: 'tatli',
    koleksiyonlar: ['misafir'],
    emoji: '🥕',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 220,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'havuç', miktar: 6, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'toz şeker', miktar: 1.5, birim: 'su bardağı' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı' },
      { ad: 'nişasta', miktar: 3, birim: 'yemek kaşığı', not: 'yarım çay bardağı suda açılmış' },
      { ad: 'ceviz içi', miktar: 1, birim: 'su bardağı', not: 'iri kırılmış' },
      { ad: 'hindistan cevizi', miktar: 0.5, birim: 'su bardağı', grup: 'Kaplamak için' },
    ],
    adimlar: [
      {
        baslik: 'Havucu şekerle pişir',
        aciklama:
          'Rendelenmiş havucu, şekeri ve suyu tencerede karıştır; havuç iyice yumuşayıp suyunu çekene kadar kısık ateşte ara ara karıştırarak pişir.',
        sureSn: 1500,
      },
      {
        baslik: 'Püre haline getir',
        aciklama:
          'Yumuşayan havucu el blenderıyla pürüzsüz bir püre yap. Taneli seviyorsan yarısını püre yapıp yarısını bırakabilirsin.',
        sureSn: 120,
      },
      {
        baslik: 'Nişastayla koyulaştır',
        aciklama:
          'Suda açılmış nişastayı püreye ekle ve sürekli karıştırarak pişir. Karışım tencerenin dibini gösterip tek kütle halinde toplanınca ocaktan al; kaşık dik durabilmeli.',
        sureSn: 900,
      },
      {
        baslik: 'Cevizi kat',
        aciklama:
          'Ocaktan aldığın karışıma iri kırılmış cevizi katıp karıştır. Karışımı yağlı kağıt serili kaba 2 cm kalınlığında yay ve düzle.',
        sureSn: 180,
      },
      {
        baslik: 'Soğutup dinlendir',
        aciklama:
          'Cezeryeyi önce oda sıcaklığında soğut, sonra buzdolabında en az 4 saat dinlendir; kesilebilir sertliğe bu sürede ulaşır.',
        sureSn: 14400,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kes ve kapla',
        aciklama:
          'Dinlenen cezeryeyi baklava dilimi şeklinde kes, her parçayı hindistan cevizine bulayıp servis tabağına diz.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Cezeryenin rengi havucun tazeliğinden gelir; sararmış havuçla soluk olur. Koyu turuncu, çıtır taze havuç seç ve şekeri havuç tatlandıkça azalt.',
  },
  {
    id: 'sicak-humus',
    baslik: 'Sıcak Humus (Pastırmalı)',
    altBaslik: 'Hatay usulü fırınlanmış humus — üzerinde tereyağlı pastırma, yanında bol ekmek',
    kategori: 'pilav-bakliyat',
    koleksiyonlar: ['misafir', 'ramazan'],
    emoji: '🧆',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 15,
    zorluk: 'orta',
    kaloriPerPorsiyon: 390,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'nohut', miktar: 2, birim: 'su bardağı', not: 'haşlanmış, kabukları ayıklanmış' },
      { ad: 'tahin', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 0.5, birim: 'çay bardağı', not: 'nohut haşlama suyu, sıcak' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'pastırma', miktar: 80, birim: 'g', grup: 'Üzeri için', not: 'ince dilim' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Üzeri için' },
      { ad: 'çam fıstığı', miktar: 1, birim: 'yemek kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Nohudu ez',
        aciklama:
          'Haşlanmış nohudu sarımsak, tahin, limon suyu, kimyon ve tuzla mutfak robotunda çek. Sıcak haşlama suyunu azar azar ekleyerek ipeksi, akışkan bir püre elde et.',
        sureSn: 300,
      },
      {
        baslik: 'Zeytinyağıyla parlat',
        aciklama:
          'Robot çalışırken zeytinyağını ince bir şerit halinde ekle; humus hem parlar hem kremamsı bir doku kazanır.',
        sureSn: 60,
      },
      {
        baslik: 'Fırın kabına yay',
        aciklama:
          'Humusu toprak kaba ya da küçük borcama yay, kaşığın tersiyle yüzeyinde dalgalar oluştur. Bu çukurlar birazdan tereyağını tutacak.',
        sureSn: 120,
      },
      {
        baslik: 'Fırında ısıt',
        aciklama:
          'Humusu 180 derece fırında yüzeyi hafif kabuk bağlayana kadar ısıt. Amaç pişirmek değil, içine kadar sıcaklık vermek.',
        sureSn: 720,
      },
      {
        baslik: 'Pastırmalı yağı hazırla',
        aciklama:
          'Tereyağını tavada erit, çam fıstığını pembeleştir; pastırma dilimlerini ekleyip kıvrılana kadar 1 dakika çevir. En son pul biberi at ve ocaktan al.',
        sureSn: 240,
      },
      {
        baslik: 'Birleştir ve sun',
        aciklama:
          'Fırından çıkan sıcak humusun üzerine pastırmalı, fıstıklı yağı gezdir. Yanında sıcak ekmek ve turşuyla bekletmeden servis et.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Nohutların zarını ayıklamak sabır ister ama humusun ipeksiliği tamamen buna bağlıdır; haşlanmış nohudu bezin arasında ovala, zarlar kendiliğinden soyulur.',
  },
  {
    id: 'ev-usulu-iskender',
    baslik: 'Ev Usulü İskender',
    altBaslik: 'Tereyağlı domates sosu ve yoğurduyla lokanta İskender tadı — dönersiz, ev pratikliğinde',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir', 'sokak-lezzeti'],
    emoji: '🍽️',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 30,
    zorluk: 'orta',
    kaloriPerPorsiyon: 650,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'dana bonfile', miktar: 500, birim: 'g', not: 'çok ince, geniş şeritler halinde' },
      { ad: 'tereyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'lavaş', miktar: 3, birim: 'adet', grup: 'Altı için' },
      { ad: 'domates', miktar: 3, birim: 'adet', grup: 'Sosu için', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 0.5, birim: 'çay bardağı', grup: 'Sosu için' },
      { ad: 'yoğurt', miktar: 300, birim: 'g', grup: 'Yanı için', not: 'tam yağlı' },
      { ad: 'sivri biber', miktar: 4, birim: 'adet', grup: 'Yanı için' },
    ],
    adimlar: [
      {
        baslik: 'Eti incecik hazırla',
        aciklama:
          'Bonfileyi buzlukta yarım saat beklettikten sonra bıçakla döner yaprağı gibi olabildiğince ince kes. Tuz, karabiber ve kekikle harmanlayıp 15 dakika beklet.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Domates sosunu pişir',
        aciklama:
          'Tereyağının 1 kaşığını tencerede erit, salçayı kavur. Rendelenmiş domatesi ve suyu ekleyip sos hafif koyulaşana kadar 10 dakika kaynat, tuzla tatlandır.',
        sureSn: 720,
      },
      {
        baslik: 'Etleri yüksek ateşte pişir',
        aciklama:
          'Geniş tavayı iyice kızdır, 1 kaşık tereyağı ekle ve et şeritlerini tek kat halinde partiler halinde 1-2 dakikada pişirip al. Kalabalık tava eti haşlar; sabırlı davran.',
        sureSn: 480,
      },
      {
        baslik: 'Lavaş altlığını döşe',
        aciklama:
          'Lavaşları kuru tavada ısıtıp küçük kareler halinde kes, servis tabaklarına yay. Üzerlerine domates sosundan birkaç kaşık gezdirerek yumuşamalarını sağla.',
        sureSn: 300,
      },
      {
        baslik: 'Tabağı kur',
        aciklama:
          'Soslu lavaşların üzerine et şeritlerini diz, kalan domates sosunu etlerin üzerine dök. Bir kenara yoğurdu yerleştir, közlediğin sivri biberleri ekle.',
        sureSn: 240,
      },
      {
        baslik: 'Kızgın tereyağıyla bitir',
        aciklama:
          'Kalan tereyağını küçük tavada köpürtüp kahverengileşmeden hemen önce sofrada, tabakların üzerinde cazırdatarak gezdir. Bu ses İskenderin imzasıdır; bekletmeden ye.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Eti buzlukta sertleştirip kesmek, evde döner inceliğini yakalamanın tek yolu; oda sıcaklığındaki etten o yaprak dilimler çıkmaz.',
  },
];
