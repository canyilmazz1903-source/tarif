import type { Tarif } from '@/types/tarif';

// İçecekler + vejetaryen ana yemekler — özgün, denenmiş kıvamda tarif verisi.
export const ICECEK_VEJETARYEN: Tarif[] = [
  // ─────────────────────────────── İÇECEKLER ───────────────────────────────
  {
    id: 'ev-ayrani',
    baslik: 'Köpüklü Ev Ayranı',
    altBaslik: 'Üç malzemeyle çırpılmış, bakır bardak kıvamında bol köpüklü serinletici ayran',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan', '15-dakika'],
    emoji: '🥛',
    porsiyon: 4,
    hazirlikDk: 5,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 70,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yoğurt', miktar: 400, birim: 'g', not: 'tam yağlı, soğuk' },
      { ad: 'su', miktar: 500, birim: 'ml', not: 'buzdolabından' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'buz', miktar: 8, birim: 'adet' },
    ],
    adimlar: [
      {
        baslik: 'Yoğurdu pürüzsüzleştir',
        aciklama:
          'Derin bir sürahide yoğurdu tel çırpıcıyla tek başına 30 saniye çırp; topaksız, krema gibi bir kıvam alsın. Su eklemeden önce yoğurdu açmak, sonradan dibe çökmesini engeller.',
      },
      {
        baslik: 'Suyu azar azar ekle',
        aciklama:
          'Soğuk suyu üç seferde ekleyerek her seferinde hızlıca çırp. Tuzu da bu aşamada kat. Suyu bir anda dökersen köpük tutmaz; kademeli eklemek ayranı havalandırır.',
        sureSn: 120,
      },
      {
        baslik: 'Köpürt ve servis et',
        aciklama:
          'Sürahiyi hafif eğik tutup çırpıcıyı yüzeye yakın çalıştırarak 1 dakika daha köpürt. Bardaklara buz koy, ayranı yüksekten dökerek köpüğü bardağa taşı ve hemen ikram et.',
        sureSn: 60,
      },
    ],
    pufNoktasi:
      'Tüm malzemelerin buz gibi olması köpüğün sırrı: ılık yoğurtla çırpılan ayran köpüğünü dakikalar içinde bırakır. Kapaklı kavanozda 20 saniye çalkalamak da aynı köpüğü verir.',
  },
  {
    id: 'bitter-sicak-cikolata',
    baslik: 'Bitter Sıcak Çikolata',
    altBaslik: 'Gerçek bitter çikolatayla koyulaşan, kakao destekli yoğun ve kadifemsi kış içeceği',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '☕',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 280,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'süt', miktar: 400, birim: 'ml' },
      { ad: 'çikolata (bitter)', miktar: 80, birim: 'g', not: 'küçük parçalara kırılmış' },
      { ad: 'kakao', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'toz şeker', miktar: 1, birim: 'yemek kaşığı', not: 'damak tadına göre' },
      { ad: 'nişasta', miktar: 1, birim: 'çay kaşığı', not: 'kıvam için' },
      { ad: 'tarçın', miktar: 1, birim: 'tutam', not: 'servis için, isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Kakaolu sütü ısıt',
        aciklama:
          'Sütün yarım çay bardağı kadarını ayır; kalanını kakao ve şekerle birlikte sos tenceresine al. Kısık ateşte, ara ara karıştırarak kenarlarından ufak kabarcıklar çıkana dek ısıt — kaynatma.',
        sureSn: 300,
      },
      {
        baslik: 'Çikolatayı erit',
        aciklama:
          'Tencereyi ocaktan alıp kırılmış bitter çikolatayı ekle ve 1 dakika bekletmeden karıştır. Ocak dışında eritmek çikolatanın kesilmesini önler, parlak bir doku verir.',
      },
      {
        baslik: 'Kıvam verip koyulaştır',
        aciklama:
          'Ayırdığın soğuk sütte nişastayı ez, tencereye süz ve en kısık ateşte sürekli karıştırarak 2-3 dakika pişir. Kaşığın arkasını ince bir film gibi kapladığında hazır demektir.',
        sureSn: 180,
      },
      {
        baslik: 'Fincanlara paylaştır',
        aciklama:
          'Sıcak çikolatayı önceden sıcak suyla çalkalanmış fincanlara dök, üzerine birer tutam tarçın serp. Isıtılmış fincan içeceği çok daha uzun süre sıcak tutar.',
      },
    ],
    pufNoktasi:
      'En az %60 kakaolu gerçek tablet çikolata kullan; pudinge dönmemesi için nişastayı mutlaka soğuk sütte açarak ekle. Bir tutam tuz, bitterin aromasını belirgin şekilde derinleştirir.',
  },
  {
    id: 'muzlu-cilekli-smoothie',
    baslik: 'Muzlu Çilekli Smoothie',
    altBaslik: 'Olgun muz ve taze çileğin yoğurtla buluştuğu, bal ile tatlanan kremsi ara öğün',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan', '15-dakika', 'fit'],
    emoji: '🍓',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 180,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [4, 5, 6],
    malzemeler: [
      { ad: 'muz', miktar: 2, birim: 'adet', not: 'olgun, dilimlenip dondurulmuş' },
      { ad: 'çilek', miktar: 200, birim: 'g', not: 'sapları ayıklanmış' },
      { ad: 'yoğurt', miktar: 150, birim: 'g' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı', not: 'soğuk' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Meyveleri hazırla',
        aciklama:
          'Muzları dilimleyip mümkünse en az 2 saat önceden dondur; çilekleri yıka, saplarını ayıkla ve ikiye böl. Donmuş muz, buz eklemeden dondurma kıvamı verir ve tadı sulandırmaz.',
      },
      {
        baslik: 'Blenderda pürüzsüz çek',
        aciklama:
          'Önce sütü ve yoğurdu, üzerine meyveleri ve balı blender haznesine ekle. Sıvının altta olması bıçakların rahat dönmesini sağlar. Yüksek devirde 45-60 saniye, tane kalmayana dek çek.',
        sureSn: 60,
      },
      {
        baslik: 'Kıvamı ayarla ve sun',
        aciklama:
          'Kaşıktan yavaş akan bir kıvam hedefle; çok koyuysa bir miktar süt ekleyip kısa bir tur daha çek. Soğutulmuş bardaklara paylaştır, dilersen bir çilek dilimiyle süsleyip hemen iç.',
      },
    ],
    pufNoktasi:
      'Benekli kabuklu, iyice olgunlaşmış muz hem doğal tatlılığı artırır hem bal ihtiyacını azaltır. Smoothie bekledikçe ayrışır; mutlaka çeker çekmez servis et.',
  },
  {
    id: 'karpuz-limonatasi',
    baslik: 'Karpuz Limonatası',
    altBaslik: 'Sıcak yaz günleri için taş gibi soğuk, naneyle ferahlayan çekirdeksiz karpuz içeceği',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan', '15-dakika'],
    emoji: '🍉',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 90,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'karpuz', miktar: 800, birim: 'g', not: 'kabuğu alınmış, çekirdeksiz küpler' },
      { ad: 'limon', miktar: 2, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'toz şeker', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'soğuk' },
      { ad: 'taze nane', miktar: 1, birim: 'dal', not: 'yaprakları ayıklanmış' },
      { ad: 'buz', miktar: 12, birim: 'adet' },
    ],
    adimlar: [
      {
        baslik: 'Karpuzu püre yap',
        aciklama:
          'Küp doğranmış karpuzu blenderdan pürüzsüz olana dek geçir. Posasız bir limonata istiyorsan püreyi ince süzgeçten geçirerek sürahiye al; posalı seviyorsan olduğu gibi kullan.',
      },
      {
        baslik: 'Limonlu şerbeti karıştır',
        aciklama:
          'Ayrı bir kapta limon suyu, şeker ve soğuk suyu şeker eriyene kadar karıştır, sonra karpuz püresine ekle. Şekeri doğrudan püreye atmak yerine önce suda eritmek dipte tane bırakmaz.',
        sureSn: 120,
      },
      {
        baslik: 'Naneyle dinlendir, servis et',
        aciklama:
          'Nane yapraklarını avucunda hafifçe ezip sürahiye at, buzları ekle ve 10 dakika buzdolabında demlenmeye bırak. Bardaklara buzlu servis yap.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Karpuzun bir kısmını küp küp dondurup buz yerine kullanırsan içecek sulanmadan soğur. Limon kabuğunu rendeleyip şerbete katmak aromayı bir kademe yukarı taşır.',
  },
  {
    id: 'adacayi-demleme',
    baslik: 'Demlikte Adaçayı',
    altBaslik: 'Haşlamadan, doğru sıcaklıkta demlenen; limonla incelen boğaz dostu bitki çayı',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan'],
    emoji: '🍵',
    porsiyon: 2,
    hazirlikDk: 2,
    pisirmeDk: 8,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 25,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'adaçayı', miktar: 1, birim: 'yemek kaşığı', not: 'kurutulmuş yaprak' },
      { ad: 'su', miktar: 500, birim: 'ml' },
      { ad: 'limon', miktar: 2, birim: 'dilim' },
      { ad: 'bal', miktar: 2, birim: 'çay kaşığı', not: 'isteğe bağlı, ılıkken ekle' },
    ],
    adimlar: [
      {
        baslik: 'Suyu kaynatıp dinlendir',
        aciklama:
          'Suyu kaynat, ocaktan al ve 1-2 dakika beklet. Kaynar su adaçayının uçucu yağlarını yakar ve acımsı bir tat bırakır; ideal demleme sıcaklığı kaynama noktasının hemen altıdır.',
        sureSn: 90,
      },
      {
        baslik: 'Adaçayını demle',
        aciklama:
          'Kuru yaprakları demliğe ya da cam çaydanlığa koy, dinlenmiş suyu üzerine dök ve kapağını kapat. 5-7 dakika demlenmeye bırak; süre uzadıkça tat keskinleşir.',
        sureSn: 360,
        beklemeAdimi: true,
      },
      {
        baslik: 'Süzüp tatlandır',
        aciklama:
          'Çayı süzgeçten geçirerek fincanlara doldur, birer dilim limon ekle. Bal kullanacaksan çay bir iki dakika ılıdıktan sonra karıştır; çok sıcak çay balın aromasını bozar.',
      },
    ],
    pufNoktasi:
      'Adaçayını asla suyla birlikte kaynatma; haşlanan yaprak buruklaşır. Demliğin kapağını kapalı tutmak buharla uçan aromayı çayın içinde tutar.',
  },
  {
    id: 'kahveli-milkshake',
    baslik: 'Kahveli Milkshake',
    altBaslik: 'Dondurmasız formül: donmuş muz ve soğuk filtre kahveyle kıvam alan sütlü içecek',
    kategori: 'icecek',
    koleksiyonlar: ['demlik-fincan', 'yeni-nesil'],
    emoji: '🥤',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'filtre kahve', miktar: 1, birim: 'su bardağı', not: 'demlenip soğutulmuş' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı', not: 'soğuk' },
      { ad: 'muz', miktar: 2, birim: 'adet', not: 'dilimlenip dondurulmuş' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kakao', miktar: 1, birim: 'çay kaşığı', not: 'üzeri için' },
      { ad: 'buz', miktar: 6, birim: 'adet' },
    ],
    adimlar: [
      {
        baslik: 'Kahveyi önceden soğut',
        aciklama:
          'Filtre kahveyi demle ve tamamen soğumasını bekle; vaktin varsa buz kalıbında dondur. Sıcak ya da ılık kahve, donmuş muzun verdiği yoğun kıvamı anında çözer.',
      },
      {
        baslik: 'Malzemeleri blenderda çek',
        aciklama:
          'Süt, soğuk kahve, donmuş muz dilimleri, bal ve buzu blendera ekle. Yüksek devirde 60-90 saniye, buz taneleri tamamen kaybolup köpüklü ve yoğun bir kıvam oluşana dek çek.',
        sureSn: 90,
      },
      {
        baslik: 'Kakaoyla süsleyip sun',
        aciklama:
          'Milkshake\'i uzun bardaklara paylaştır, üzerine ince süzgeçle kakao serp. Kalın pipetle, buz gibi soğukken servis et; bekledikçe köpüğü söner.',
      },
    ],
    pufNoktasi:
      'Kıvamın tamamı donmuş muzdan gelir; taze muz kullanırsan sonuç milkshake değil sütlü kahve olur. Kafeinsiz istersen kahveyi akşamdan demleyip dinlendirmen yeterli.',
  },

  // ─────────────────────── VEJETARYEN ANA YEMEKLER ───────────────────────
  {
    id: 'etsiz-sebzeli-guvec',
    baslik: 'Etsiz Sebzeli Güveç',
    altBaslik: 'Fırında ağır ağır pişen patlıcan, kabak ve patatesin salçalı sosla buluştuğu güveç',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', 'misafir'],
    emoji: '🍲',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 60,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 230,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'patlıcan', miktar: 2, birim: 'adet', not: 'iri küp, tuzlu suda bekletilmiş' },
      { ad: 'kabak', miktar: 2, birim: 'adet', not: 'kalın yarım halkalar' },
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'iri küp' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', not: 'ezilmiş' },
      { ad: 'domates', miktar: 3, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 1, birim: 'çay bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri doğra',
        aciklama:
          'Patlıcanları alacalı soyup iri küpler halinde doğra ve 15 dakika tuzlu suda beklet; acısı çıksın. Kabak, patates ve havucu birbirine yakın irilikte doğra ki aynı sürede pişsinler.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Salçalı sosu hazırla',
        aciklama:
          'Tavada zeytinyağının yarısıyla soğanı 3-4 dakika soteleyip sarımsağı ve salçayı ekle, kokusu çıkana dek çevir. Rendelenmiş domatesi ilave et, 5 dakika kaynatıp baharatları ve tuzu kat.',
        sureSn: 600,
      },
      {
        baslik: 'Güveci kur',
        aciklama:
          'Suyu sıkılmış patlıcanı ve diğer sebzeleri güveç kabına ya da borcama aktar, kalan zeytinyağını gezdir. Sıcak sosu üzerine yay, çay bardağı sıcak suyu kenardan ekle ve harmanla.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Kabın kapağını kapat ya da folyoyla sıkıca ört; 190 derece fırında 45 dakika pişir. Folyoyu alıp üzeri hafif kızarana dek 15 dakika daha fırında tut. Patatese bıçak sapla; direnç yoksa hazır.',
        sureSn: 3600,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Güveci fırından çıkınca 10 dakika dinlendir; suyunu toplayıp lezzeti otursun. Yanına bulgur pilavı ya da taze ekmek çok yakışır.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Sebzeleri önceden kızartmadan, çiğden fırınlamak yemeği hem hafifletir hem sebze suyunun sosa karışmasını sağlar. Kapalı pişirme buharı hapseder; sebzeler kurumadan yumuşacık olur.',
  },
  {
    id: 'kremali-mantar-sote',
    baslik: 'Kremalı Mantar Sote',
    altBaslik: 'Yüksek ateşte mühürlenen mantarların kekikli kremayla toplandığı hızlı akşam yemeği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['15-dakika'],
    emoji: '🍄',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 190,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'mantar', miktar: 600, birim: 'g', not: 'silinmiş, dörde bölünmüş' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', not: 'ince doğranmış' },
      { ad: 'krema', miktar: 200, birim: 'ml' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', not: 'taze çekilmiş' },
      { ad: 'maydanoz', miktar: 3, birim: 'dal', not: 'ince kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'Mantarları mühürle',
        aciklama:
          'Geniş tavada tereyağını zeytinyağıyla kızdır, mantarları tek katta yay ve ilk 3 dakika hiç karıştırmadan bekle. Sonra arada çevirerek suyunu salıp çekene ve kenarları kızarana dek 7-8 dakika pişir.',
        sureSn: 480,
      },
      {
        baslik: 'Sarımsağı kokusunu alana dek çevir',
        aciklama:
          'Ateşi orta seviyeye al, doğranmış sarımsağı mantarlara ekle ve 1 dakika çevir. Sarımsağı en başta atmak yerine bu aşamada eklemek yanıp acılaşmasını önler.',
        sureSn: 60,
      },
      {
        baslik: 'Kremayla toparla',
        aciklama:
          'Kremayı, kekiği, tuzu ve karabiberi ekle; kısık ateşte hafifçe koyulaşana kadar 3-4 dakika karıştırarak pişir. Sos kaşığın arkasını kapladığında ocağı kapat.',
        sureSn: 240,
      },
      {
        baslik: 'Maydanozla servis et',
        aciklama:
          'Kıyılmış maydanozu üzerine serpip sıcak servis et. Yanında pirinç pilavı, makarna ya da kızarmış ekmek dilimleriyle tam bir ana yemeğe dönüşür.',
      },
    ],
    pufNoktasi:
      'Mantarı yıkamak yerine nemli bezle sil; su emen mantar tavada kızarmak yerine haşlanır. Tava kalabalıksa iki partide pişir — mühürlenmiş mantarın lezzeti bambaşkadır.',
  },
  {
    id: 'besamelli-sebze-graten',
    baslik: 'Beşamelli Sebze Graten',
    altBaslik: 'Katman katman dizilen sebzelerin beşamel sos ve kaşar altında kızardığı fırın klasiği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🧀',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 330,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'patates', miktar: 3, birim: 'adet', not: 'ince yuvarlak dilimler' },
      { ad: 'kabak', miktar: 2, birim: 'adet', not: 'ince yuvarlak dilimler' },
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'ince yuvarlak dilimler' },
      { ad: 'kaşar peyniri', miktar: 150, birim: 'g', not: 'rendelenmiş' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Beşamel sosu için' },
      { ad: 'un', miktar: 2, birim: 'yemek kaşığı', grup: 'Beşamel sosu için' },
      { ad: 'süt', miktar: 500, birim: 'ml', grup: 'Beşamel sosu için', not: 'oda sıcaklığında' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Beşamel sosu için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'Beşamel sosu için' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri önceden haşla',
        aciklama:
          'Patates ve havuç dilimlerini kaynar tuzlu suda 5 dakika ön haşla, süzgece al. Kabak çabuk piştiği için haşlamadan kullan. Bu adım tüm sebzelerin fırında aynı anda yumuşamasını sağlar.',
        sureSn: 300,
      },
      {
        baslik: 'Beşamel sosu pişir',
        aciklama:
          'Tencerede tereyağını erit, unu ekleyip kokusu gidene dek 2 dakika kavur. Sütü üç seferde ekleyerek her seferinde topak kalmayacak şekilde çırp. Tuz ve karabiberle koyulaşana dek pişir.',
        sureSn: 420,
      },
      {
        baslik: 'Katmanları diz',
        aciklama:
          'Yağlanmış borcama patates, havuç ve kabak dilimlerini hafif üst üste binecek şekilde sırayla diz. Beşamel sosu tüm yüzeye eşit yay, en üste rendelenmiş kaşarı serp.',
      },
      {
        baslik: 'Fırında kızart',
        aciklama:
          '200 derece önceden ısıtılmış fırında, üzeri iştah açıcı biçimde kızarana dek 35-40 dakika pişir. Bıçak ucuyla patatesi yokla; yumuşadıysa graten hazırdır.',
        sureSn: 2400,
      },
      {
        baslik: 'Dinlendirip dilimle',
        aciklama:
          'Fırından çıkan grateni 10 dakika dinlendir; sos oturur ve dilimler dağılmadan kesilir. Yanında mevsim salatasıyla servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Beşamele sütü ılık ve kademeli eklemek topaklanmayı kökten çözer. Sosu sebzelerin arasına da bir iki kaşık gizlersen graten kat kat kremsi olur, sadece üstü değil.',
  },
  {
    id: 'baharatli-karnabahar-izgara',
    baslik: 'Baharatlı Karnabahar Izgara',
    altBaslik: 'Kalın dilimlenip baharat yağıyla fırınlanan karnabahar; yanında sarımsaklı yoğurt sosu',
    kategori: 'ana-yemek',
    koleksiyonlar: ['fit'],
    emoji: '🥦',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 160,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'karnabahar', miktar: 1, birim: 'adet', not: 'iri, yaprakları temizlenmiş' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'tatlı toz biber', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'sarımsak tozu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'yoğurt', miktar: 200, birim: 'g', grup: 'Sosu için', not: 'süzme kıvamında' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş', grup: 'Sosu için', not: 'rendelenmiş' },
      { ad: 'limon', miktar: 1, birim: 'adet', grup: 'Sosu için', not: 'yarısının suyu' },
    ],
    adimlar: [
      {
        baslik: 'Karnabaharı dilimle',
        aciklama:
          'Karnabaharı gövdesi ortada kalacak şekilde tepeden aşağı 2-3 cm kalınlığında biftek gibi dilimle. Ortadaki gövde dilimleri bir arada tutar; kenarlardan dökülen çiçekleri de tepsiye ekle.',
      },
      {
        baslik: 'Baharat yağını sür',
        aciklama:
          'Küçük bir kasede zeytinyağı, tatlı toz biber, kimyon, sarımsak tozu, pul biber ve tuzu karıştır. Fırça yardımıyla dilimlerin iki yüzüne de bolca sür; baharatın her köşeye değmesi lezzetin anahtarı.',
      },
      {
        baslik: 'Yüksek ısıda fırınla',
        aciklama:
          'Dilimleri yağlı kağıt serili tepsiye tek katta diz. 220 derece fırında 20 dakika pişir, dikkatlice çevirip kenarları kahverengileşene dek 12-15 dakika daha fırınla.',
        sureSn: 2100,
      },
      {
        baslik: 'Yoğurt sosuyla servis et',
        aciklama:
          'Yoğurdu rendelenmiş sarımsak, limon suyu ve bir tutam tuzla çırp. Sosu tabağa yay, kızarmış karnabahar dilimlerini üzerine yerleştir ve kalan baharatlı yağı gezdirerek sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Düşük ısıda pişen karnabahar sadece yumuşar; 220 derecelik yüksek ısı kenarları karamelize ederek fındıksı bir tat açığa çıkarır. Dilimleri çevirirken geniş spatula kullan, dağılmasınlar.',
  },
  {
    id: 'nohutlu-ispanakli-tencere',
    baslik: 'Nohutlu Ispanaklı Tencere',
    altBaslik: 'Haşlanmış nohut ve taze ıspanağın salçalı zeytinyağlı sosta buluştuğu tek tencere yemeği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', 'fit', 'meal-prep'],
    emoji: '🥘',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'nohut', miktar: 250, birim: 'g', not: 'akşamdan ıslatılıp haşlanmış' },
      { ad: 'ıspanak', miktar: 500, birim: 'g', not: 'ayıklanıp yıkanmış, iri doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak, tercihen nohut haşlama suyu' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı yağda yumuşat',
        aciklama:
          'Geniş tencerede zeytinyağını orta ateşte ısıt; soğanı pembeleşene dek 4-5 dakika sotele, sarımsağı ekleyip 1 dakika daha çevir.',
        sureSn: 300,
      },
      {
        baslik: 'Salça ve baharatı kavur',
        aciklama:
          'Domates ve biber salçasını tencereye ekle, kokusu çıkana kadar 1-2 dakika kavur. Pul biber, kimyon ve tuzu bu aşamada kat; baharatlar sıcak yağda açılınca aroması yemeğe iyice işler.',
        sureSn: 120,
      },
      {
        baslik: 'Nohutları sosla buluştur',
        aciklama:
          'Haşlanmış nohutları ve sıcak suyu ekle, kapağı kapat ve kısık ateşte 15 dakika kaynat. Nohutlar sosu çekip tatlanacak, su hafifçe koyulaşacak.',
        sureSn: 900,
      },
      {
        baslik: 'Ispanağı ekleyip kapat',
        aciklama:
          'Doğranmış ıspanağı iki partide tencereye ekle; her parti söndükçe karıştır. Kapağı kapatıp 5 dakika daha pişir, ocağı kapat ve 5 dakika demlendir. Sıcak servis et.',
        sureSn: 600,
      },
    ],
    pufNoktasi:
      'Nohudun haşlama suyunu dökme; yemeğin suyu olarak kullanınca sos daha gövdeli olur. Üzerine sarımsaklı yoğurt gezdirirsen vegan olmaktan çıkar ama sofrada ikiye katlanan bir lezzet kazanırsın.',
  },
  {
    id: 'patlicanli-soslu-makarna',
    baslik: 'Patlıcanlı Soslu Makarna',
    altBaslik: 'Kızarmış patlıcan küplerinin sarımsaklı domates sosuyla makarnaya sarıldığı etsiz tarif',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍝',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 420,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'makarna', miktar: 400, birim: 'g', not: 'penne ya da tercihin' },
      { ad: 'patlıcan', miktar: 2, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'domates', miktar: 4, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 5, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'beyaz peynir', miktar: 100, birim: 'g', not: 'servis için, ufalanmış' },
    ],
    adimlar: [
      {
        baslik: 'Patlıcanları kızart',
        aciklama:
          'Küp patlıcanları tuzlayıp 10 dakika bekletip suyunu kurula. Geniş tavada zeytinyağının çoğunu kızdır, patlıcanları her yüzü kahverengileşene dek 8-10 dakika kızart ve kağıt havluya al.',
        sureSn: 600,
      },
      {
        baslik: 'Domates sosunu pişir',
        aciklama:
          'Aynı tavaya kalan yağı ekle; sarımsağı 30 saniye çevir, salçayı kavur ve rendelenmiş domatesi ilave et. Kekik, pul biber, tuz ve karabiberle kısık ateşte 10 dakika, koyulaşana dek pişir.',
        sureSn: 600,
      },
      {
        baslik: 'Makarnayı haşla',
        aciklama:
          'Bol kaynar tuzlu suda makarnayı paket süresinden 1 dakika az haşla. Süzmeden önce bir çay bardağı haşlama suyunu ayır; nişastalı bu su sosun makarnaya tutunmasını sağlar.',
        sureSn: 600,
      },
      {
        baslik: 'Sos ve makarnayı birleştir',
        aciklama:
          'Süzülmüş makarnayı sosun içine aktar, ayırdığın haşlama suyundan ekleyerek orta ateşte 2 dakika harmanla. Kızarmış patlıcanları en son kat; ezilmeden sosa karışsınlar.',
        sureSn: 120,
      },
      {
        baslik: 'Peynirle servis et',
        aciklama:
          'Makarnayı tabaklara paylaştır, üzerine ufalanmış beyaz peynir serp ve dilersen bir tur zeytinyağı gezdir. Sıcakken sofraya çıkar.',
      },
    ],
    pufNoktasi:
      'Patlıcanı sosun içinde pişirmek yerine ayrı kızartıp en son eklemek hem şeklini korur hem sosun yağını dengede tutar. Haşlama suyu eklenmemiş sos makarnadan kayar; o suyu sakın dökme.',
  },
  {
    id: 'firinda-peynirli-kabak-sandal',
    baslik: 'Fırında Peynirli Kabak Sandal',
    altBaslik: 'Oyulmuş kabakların dereotlu peynir harcıyla doldurulup kaşarla kızartıldığı hafif yemek',
    kategori: 'ana-yemek',
    koleksiyonlar: ['fit', 'misafir'],
    emoji: '🥒',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [5, 6, 7, 8],
    malzemeler: [
      { ad: 'kabak', miktar: 4, birim: 'adet', not: 'orta boy, düzgün şekilli' },
      { ad: 'beyaz peynir', miktar: 200, birim: 'g', grup: 'İç harcı için', not: 'ufalanmış' },
      { ad: 'kaşar peyniri', miktar: 100, birim: 'g', grup: 'İç harcı için', not: 'rendelenmiş' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'İç harcı için' },
      { ad: 'dereotu', miktar: 1, birim: 'demet', grup: 'İç harcı için', not: 'yarım demet, kıyılmış' },
      { ad: 'taze soğan', miktar: 2, birim: 'adet', grup: 'İç harcı için', not: 'ince kıyılmış' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İç harcı için' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', not: 'üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Kabakları sandal yap',
        aciklama:
          'Kabakları yıkayıp uzunlamasına ikiye böl. Kaşıkla ortalarını, kenarlarda yarım santim et kalacak şekilde oy. Çıkan kabak içinin yarısını ince kıyıp harca ayır, kalanını başka yemekte değerlendir.',
      },
      {
        baslik: 'Kabakları ön pişir',
        aciklama:
          'Sandalların içine ve dışına zeytinyağı sür, kesik yüzleri yukarı bakacak şekilde tepsiye diz. 200 derece fırında 12 dakika ön pişir; böylece dolgu eklendiğinde kabaklar çiğ kalmaz.',
        sureSn: 720,
      },
      {
        baslik: 'Peynirli harcı yoğur',
        aciklama:
          'Kasede beyaz peyniri ez; kıyılmış kabak içini, yumurtayı, dereotunu, taze soğanı, karabiberi ve kaşarın yarısını ekleyip harmanla. Peynir tuzluysa ayrıca tuz ekleme.',
      },
      {
        baslik: 'Doldur ve fırınla',
        aciklama:
          'Harcı sandalların içine kaşıkla paylaştır, üzerlerine kalan kaşarı serp ve pul biber ekle. 200 derece fırında üzeri kızarana dek 20-22 dakika pişir. Ilıkken servis et.',
        sureSn: 1320,
      },
    ],
    pufNoktasi:
      'Ön pişirme adımını atlama; çiğ kabak dolgunun altında sulanır ve sandallar şeklini kaybeder. Harca eklenen tek yumurta dolguyu toparlar, dilimlerken dağılmayı önler.',
  },
];
