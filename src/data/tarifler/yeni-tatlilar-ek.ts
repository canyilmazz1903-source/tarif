import type { Tarif } from '@/types/tarif';

// Yeni nesil / viral tatlılar — ek paket. Tüm metinler özgündür;
// malzeme adları sözlükle (malzemeler.ts) birebir uyumludur.
export const YENI_TATLILAR_EK: Tarif[] = [
  {
    id: 'beyaz-cikolatali-blondie',
    baslik: 'Beyaz Çikolatalı Blondie',
    altBaslik: 'Brownie kıvamında ama beyaz çikolatalı: dışı ince kabuklu, içi nemli sarışın kek',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🍮',
    porsiyon: 8,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 465,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'beyaz çikolata', miktar: 150, birim: 'g', not: 'iri kıyılmış' },
      { ad: 'tereyağı', miktar: 120, birim: 'g' },
      { ad: 'toz şeker', miktar: 100, birim: 'g' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', not: 'oda sıcaklığında' },
      { ad: 'un', miktar: 160, birim: 'g' },
      { ad: 'vanilin', miktar: 5, birim: 'g' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
      { ad: 'damla çikolata', miktar: 80, birim: 'g' },
    ],
    adimlar: [
      {
        baslik: 'Beyaz çikolatayı erit',
        aciklama:
          'Beyaz çikolatanın 100 gramını tereyağıyla birlikte benmari usulü erit; kalan 50 gramı sona sakla. Pürüzsüz olunca ocaktan al, ılınmaya bırak. Fırını 170°C ayarla.',
      },
      {
        baslik: 'Yumurtaları şekerle çırp',
        aciklama:
          'Yumurta, toz şeker ve vanilini karışım hafif krema kıvamına gelene dek 2-3 dakika çırp. Ilıyan çikolatalı karışımı ince akıtarak yedir.',
      },
      {
        baslik: 'Unu katıp harcı tamamla',
        aciklama:
          'Un ve tuzu eleyerek ekle, spatulayla un izi kalmayana kadar karıştır; fazla karıştırma, doku sertleşir. Damla çikolatayı ve ayırdığın kıyılmış beyaz çikolatayı son anda kat.',
      },
      {
        baslik: '170 derecede az pişir',
        aciklama:
          'Harcı pişirme kağıdı serili 20x20 cm kalıba yay. Önceden ısınmış 170°C fırında 22-25 dakika pişir; kenarlar altın sarısı olmalı, ortaya batan kürdan hafif nemli çıkmalı.',
        sureSn: 1400,
      },
      {
        baslik: 'Kalıpta soğumaya bırak',
        aciklama:
          'Blondie sıcakken çok yumuşaktır; kalıbın içinde tezgahta tamamen soğumasını bekle, sonra kare dilimlere kes.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Beyaz çikolatanın tamamını eritme; ayırdığın kıyılmış kısım fırında yer yer karamelize olup blondie\'ye o karakteristik yanık şeker aromasını verir.',
  },
  {
    id: 'cifte-cikolatali-cookie',
    baslik: 'Çifte Çikolatalı Cookie',
    altBaslik: 'Kakaolu hamura gömülü bol damla çikolata: kenarı çıtır, ortası yumuşacık kurabiye',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli'],
    emoji: '🍪',
    porsiyon: 8,
    hazirlikDk: 20,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 440,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tereyağı', miktar: 120, birim: 'g', not: 'oda sıcaklığında' },
      { ad: 'toz şeker', miktar: 140, birim: 'g' },
      { ad: 'yumurta', miktar: 1, birim: 'adet' },
      { ad: 'un', miktar: 180, birim: 'g' },
      { ad: 'kakao', miktar: 40, birim: 'g' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
      { ad: 'damla çikolata', miktar: 120, birim: 'g' },
      { ad: 'çikolata (bitter)', miktar: 60, birim: 'g', not: 'iri parçalar halinde' },
    ],
    adimlar: [
      {
        baslik: 'Tereyağını şekerle krema yap',
        aciklama:
          'Yumuşak tereyağını toz şekerle 2 dakika çırp; renk hafif açılmalı. Yumurtayı ekleyip karışıma tamamen yedir.',
      },
      {
        baslik: 'Kuru malzemeleri kat',
        aciklama:
          'Un, kakao, kabartma tozu ve tuzu eleyerek ekle, spatulayla toparlanana kadar karıştır. Damla çikolatayı ve iri bitter parçalarını kat; hamur yumuşak ama ele yapışmayan kıvamda olmalı.',
      },
      {
        baslik: 'Hamuru buzdolabında dinlendir',
        aciklama:
          'Hamurun üzerini kapatıp buzdolabında 30 dakika dinlendir; soğuyan hamur fırında yayılmaz, kalın ve yumuşak merkezli pişer.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: '175 derecede pişir',
        aciklama:
          'Hamurdan ceviz büyüklüğünde 16 parça kopar, yuvarlayıp aralıklı dizerek hafifçe bastır. Önceden ısınmış 175°C fırında 10-12 dakika pişir; ortalar yumuşak görünürken çıkar.',
        sureSn: 700,
      },
      {
        baslik: 'Tepside soğumaya bırak',
        aciklama:
          'Kurabiyeler sıcakken dağılır; tepsinin üzerinde 15 dakika bekleyip toparlanmalarını sağla, sonra tel ızgaraya al.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Damla çikolatanın yanına kıydığın iri bitter parçaları fırında eriyip yüzeyde parlak çikolata gölleri oluşturur; vitrin görüntüsünün sırrı budur.',
  },
  {
    id: 'yulafli-fistik-ezmeli-cookie',
    baslik: 'Yulaflı Fıstık Ezmeli Cookie',
    altBaslik: 'Fırın gerektirmeyen üç temel malzemeli pratik kurabiye — tatlı krizine 15 dakikada çözüm',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli'],
    emoji: '🥜',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 5,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 360,
    beslenmeEtiketleri: ['vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yer fıstığı ezmesi', miktar: 180, birim: 'g' },
      { ad: 'bal', miktar: 80, birim: 'g' },
      { ad: 'yulaf ezmesi', miktar: 150, birim: 'g' },
      { ad: 'kakao', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'vanilin', miktar: 5, birim: 'g' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Ezmeyi balla ısıt',
        aciklama:
          'Yer fıstığı ezmesi ve balı küçük bir tencerede kısık ateşte, akışkan ve homojen olana dek 2-3 dakika karıştırarak ısıt; kaynatma. Ocaktan al.',
      },
      {
        baslik: 'Yulafı ve kakaoyu kat',
        aciklama:
          'Yulaf ezmesi, kakao, vanilin ve tuzu sıcak karışıma ekle; her tanenin ıslanmasını sağlayarak iyice karıştır. Kıvam avuçta toplanan yoğun bir hamur olmalı.',
      },
      {
        baslik: 'Kurabiyeleri şekillendir',
        aciklama:
          'Karışım ılıkken yemek kaşığı yardımıyla 14 parça al, avucunda yuvarlayıp pişirme kağıdı serili tepsiye bastırarak kurabiye formu ver.',
      },
      {
        baslik: 'Buzdolabında sıkılaştır',
        aciklama:
          'Tepsiyi buzdolabına al ve kurabiyeler tutunana kadar en az 1 saat beklet. Kapaklı kapta buzdolabında bir hafta saklanır.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Karışım soğuduktan sonra şekil vermek zorlaşır; kurabiyeleri mutlaka ılıkken form la. Daha tatlı sevenler bal miktarını 100 grama çıkarabilir.',
  },
  {
    id: 'bardakta-cilekli-cheesecake',
    baslik: 'Bardakta Çilekli Cheesecake',
    altBaslik: 'Tek kişilik bardaklarda bisküvi tabanlı, fırınsız çilekli cheesecake sunumu',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🍓',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    mevsimAylari: [4, 5, 6],
    malzemeler: [
      { ad: 'burçak bisküvi', miktar: 12, birim: 'adet', grup: 'Taban için' },
      { ad: 'tereyağı', miktar: 40, birim: 'g', grup: 'Taban için', not: 'eritilmiş' },
      { ad: 'krem peynir', miktar: 200, birim: 'g', grup: 'Krema için', not: 'oda sıcaklığında' },
      { ad: 'krema', miktar: 150, birim: 'ml', grup: 'Krema için', not: 'soğuk' },
      { ad: 'pudra şekeri', miktar: 60, birim: 'g', grup: 'Krema için' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', grup: 'Krema için', not: 'suyu sıkılmış' },
      { ad: 'çilek', miktar: 300, birim: 'g', grup: 'Üzeri için' },
      { ad: 'toz şeker', miktar: 2, birim: 'yemek kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Çilek sosunu pişir',
        aciklama:
          'Çileklerin 200 gramını küp doğra, toz şekerle küçük bir tencerede 8-10 dakika, çilekler dağılıp hafif çekene kadar pişir. Soğumaya bırak; kalan çilekleri süsleme için ayır.',
      },
      {
        baslik: 'Bisküvili tabanı hazırla',
        aciklama:
          'Bisküvileri poşet içinde merdaneyle iri kum dokusunda kır, eritilmiş tereyağıyla harmanla. Karışımı 4 bardağın dibine paylaştırıp kaşıkla hafifçe bastır.',
      },
      {
        baslik: 'Cheesecake kremasını çırp',
        aciklama:
          'Soğuk kremayı katı köpük kıvamına gelene dek çırp. Ayrı kapta krem peyniri pudra şekeri ve limon suyuyla pürüzsüz olana kadar karıştır, çırpılmış kremayı spatulayla söndürmeden yedir.',
      },
      {
        baslik: 'Bardakları katmanla',
        aciklama:
          'Kremanın yarısını bardaklara paylaştır, üzerine soğuyan çilek sosunun yarısını gezdir; kalan krema ve sosla katmanları tekrarla. En üste ayırdığın taze çilek dilimlerini diz.',
      },
      {
        baslik: 'Buzdolabında dinlendir',
        aciklama:
          'Bardakların üzerini kapatıp buzdolabında en az 2 saat beklet; krema oturur, taban bisküvisi hafif yumuşayıp gerçek cheesecake dokusuna kavuşur.',
        sureSn: 7200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Krema soğuk, krem peynir oda sıcaklığında olmalı; ikisi aynı sıcaklıktayken birleştirilirse krema ya kesilir ya da sıvılaşır.',
  },
  {
    id: 'bardakta-cikolatali-mus',
    baslik: 'Bardakta Çikolatalı Mus',
    altBaslik: 'Yalnızca çikolata ve kremayla hazırlanan havadar bitter mus — iki malzemeli lüks',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🍫',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 5,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 445,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'çikolata (bitter)', miktar: 150, birim: 'g', not: 'ince kıyılmış' },
      { ad: 'krema', miktar: 300, birim: 'ml', not: 'soğuk' },
      { ad: 'toz şeker', miktar: 20, birim: 'g' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
      { ad: 'kakao', miktar: 1, birim: 'çay kaşığı', not: 'üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Çikolatayı kremayla erit',
        aciklama:
          'Kremanın 100 ml\'sini kaynama noktasına gelmeden ısıt, kıyılmış bitter çikolatanın üzerine dök. 2 dakika bekleyip tuzla birlikte pürüzsüz bir ganaj olana dek karıştır ve ılınmaya bırak.',
      },
      {
        baslik: 'Kalan kremayı çırp',
        aciklama:
          'Kalan 200 ml soğuk kremayı toz şekerle, uç bıraktığında hafifçe devrilen yumuşak köpük kıvamına gelene kadar çırp; fazla çırpma, mus pütürlü olur.',
      },
      {
        baslik: 'Ganajla kremayı birleştir',
        aciklama:
          'Ilıyan ganaja çırpılmış kremanın üçte birini ekleyip rahatça karıştır; kalanını iki seferde, spatulayla alttan üste hava söndürmeden kat. Karışımı 4 bardağa paylaştır.',
      },
      {
        baslik: 'Soğutup servis et',
        aciklama:
          'Bardakları buzdolabında en az 2 saat beklet; mus kaşığı taşıyacak kadar sıkılaşmalı. Servisten hemen önce üzerine ince bir kat kakao ele.',
        sureSn: 7200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Ganaj sıcakken kremaya karışırsa köpük tamamen söner; parmağını daldırdığında ancak ılık hissettiren sıcaklık doğru birleştirme anıdır.',
  },
  {
    id: 'karamelize-biskuvili-kup',
    baslik: 'Karamelize Bisküvili Kup',
    altBaslik: 'Sütte yumuşayan karamelize bisküvi katları ve yoğun kremalı fırınsız bardak tatlısı',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🍮',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 460,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'karamelize bisküvi', miktar: 16, birim: 'adet' },
      { ad: 'krema', miktar: 300, birim: 'ml', not: 'soğuk' },
      { ad: 'krem peynir', miktar: 150, birim: 'g', not: 'oda sıcaklığında' },
      { ad: 'pudra şekeri', miktar: 50, birim: 'g' },
      { ad: 'süt', miktar: 100, birim: 'ml', not: 'bisküvileri ıslatmak için' },
      { ad: 'vanilin', miktar: 5, birim: 'g' },
    ],
    adimlar: [
      {
        baslik: 'Kremayı hazırla',
        aciklama:
          'Soğuk kremayı katı köpük olana dek çırp. Krem peyniri pudra şekeri ve vanilinle ayrı kapta pürüzsüzleştir, çırpılmış kremayı spatulayla yavaşça yedir.',
      },
      {
        baslik: 'Bisküvileri katmanla',
        aciklama:
          'Bisküvilerin 12 tanesini süte saniyelik daldırıp 4 bardağın dibine ve aralarına gelecek şekilde böl: bir kat bisküvi, bir kat krema olacak biçimde bardakları doldur; en üst kat krema olsun.',
      },
      {
        baslik: 'Üzerini süsle',
        aciklama:
          'Kalan 4 bisküviyi poşette ince toz haline getir ve her bardağın üzerine cömertçe serp; kenarına birer yarım bisküvi iliştirebilirsin.',
      },
      {
        baslik: 'Buzdolabında beklet',
        aciklama:
          'Bardakları buzdolabında en az 2 saat, ideali bir gece beklet; bisküviler kremanın nemiyle yumuşayıp pasta katı dokusuna dönüşür.',
        sureSn: 7200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Bisküviyi sütte bir saniyeden fazla tutma; fazla ıslanan bisküvi katmanda dağılır, az ıslanan ise dolapta kendiliğinden yumuşar.',
  },
  {
    id: 'kahveli-latte-kupu',
    baslik: 'Kahveli Latte Kupu',
    altBaslik: 'Soğuk kahveye bandırılmış kedidili ve mascarpone kremasıyla latte tadında kup',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '☕',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 420,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'filtre kahve', miktar: 200, birim: 'ml', not: 'demlenmiş ve soğutulmuş' },
      { ad: 'kedidili bisküvi', miktar: 16, birim: 'adet' },
      { ad: 'mascarpone', miktar: 200, birim: 'g', not: 'oda sıcaklığında' },
      { ad: 'krema', miktar: 200, birim: 'ml', not: 'soğuk' },
      { ad: 'pudra şekeri', miktar: 60, birim: 'g' },
      { ad: 'kakao', miktar: 1, birim: 'çay kaşığı', not: 'üzeri için' },
      { ad: 'tarçın', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Kahveyi demleyip soğut',
        aciklama:
          'Filtre kahveyi normalden biraz koyu demle ve tamamen soğumasını bekle; sıcak kahve kedidilini anında eritir. İçine tarçını karıştır.',
      },
      {
        baslik: 'Mascarpone kremasını çırp',
        aciklama:
          'Soğuk kremayı pudra şekeriyle katı köpük olana dek çırp. Mascarponeyi spatulayla kısaca yumuşatıp çırpılmış kremaya söndürmeden yedir; kıvam parlak ve akmayan olmalı.',
      },
      {
        baslik: 'Kupları katmanla',
        aciklama:
          'Kedidillerini soğuk kahveye iki saniye bandırıp 4 kupun dibine kır. Üzerine krema sür, bir kat daha kahveli kedidili ve son kat kremayla bitir.',
      },
      {
        baslik: 'Soğutup kakaoyla servis et',
        aciklama:
          'Kupları buzdolabında en az 2 saat dinlendir. Servisten hemen önce üzerlerine süzgeçle ince bir kat kakao eleyerek latte köpüğü görüntüsü ver.',
        sureSn: 7200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Mascarponeyi uzun çırpma; yağı ayrışıp krema pütürleşir. Kısa spatula hareketleriyle yumuşatmak pürüzsüz sonucun anahtarıdır.',
  },
  {
    id: 'firinsiz-cikolatali-salam',
    baslik: 'Fırınsız Çikolatalı Salam',
    altBaslik: 'Rulo yapıp dilimlenen bisküvili çikolata; pudra şekerli, salam görünümlü tatlı',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🍫',
    porsiyon: 8,
    hazirlikDk: 20,
    pisirmeDk: 5,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 380,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'burçak bisküvi', miktar: 20, birim: 'adet' },
      { ad: 'çikolata (bitter)', miktar: 150, birim: 'g', not: 'kıyılmış' },
      { ad: 'tereyağı', miktar: 80, birim: 'g' },
      { ad: 'krema', miktar: 80, birim: 'ml' },
      { ad: 'fındık içi', miktar: 60, birim: 'g', not: 'iri kıyılmış' },
      { ad: 'pudra şekeri', miktar: 2, birim: 'yemek kaşığı', not: 'dışı için' },
    ],
    adimlar: [
      {
        baslik: 'Çikolatalı sosu erit',
        aciklama:
          'Bitter çikolata, tereyağı ve kremayı kısık ateşte sürekli karıştırarak pürüzsüz olana dek erit; kaynatma. Ocaktan alıp 5 dakika ılınmaya bırak.',
      },
      {
        baslik: 'Bisküvileri kır ve karıştır',
        aciklama:
          'Bisküvileri elle, kimi iri kimi ufak olacak şekilde düzensiz kır; salam dilimindeki mermer deseni bu düzensizlik yaratır. Fındıkla birlikte çikolatalı sosa katıp iyice harmanla.',
      },
      {
        baslik: 'Ruloyu sar',
        aciklama:
          'Karışımı geniş bir streç film üzerine uzunlamasına yığ, filmi sıkıca sararak 5-6 cm çapında bir rulo yap. Uçlarını şeker gibi bükerek kapat ve elinle yuvarlayarak düzelt.',
      },
      {
        baslik: 'Buzdolabında sertleştir',
        aciklama:
          'Ruloyu buzdolabında en az 4 saat, ideali bir gece beklet; bıçak izi alacak kadar sertleşmeli.',
        sureSn: 14400,
        beklemeAdimi: true,
      },
      {
        baslik: 'Pudra şekerle dilimle',
        aciklama:
          'Filmi açıp rulonun dışını pudra şekerinde yuvarlayarak beyaz salam görünümü ver. Keskin bıçakla 1 cm kalınlığında verev dilimler kes ve servis tabağına diz.',
      },
    ],
    pufNoktasi:
      'Rulonun ortasından geçen iri bisküvi parçaları dilimlerde salam yağı görüntüsü verir; bisküvinin en az üçte birini iri bırakmaktan çekinme.',
  },
  {
    id: 'limon-kremali-mini-tart',
    baslik: 'Limon Kremalı Mini Tart',
    altBaslik: 'Kum gibi dağılan tart kabuğunda ipeksi ev yapımı limon kreması — ferah bir kapanış tatlısı',
    kategori: 'hamur-isi',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🍋',
    porsiyon: 6,
    hazirlikDk: 40,
    pisirmeDk: 25,
    zorluk: 'orta',
    kaloriPerPorsiyon: 410,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 220, birim: 'g', grup: 'Tart hamuru için' },
      { ad: 'tereyağı', miktar: 120, birim: 'g', grup: 'Tart hamuru için', not: 'soğuk, küp doğranmış' },
      { ad: 'pudra şekeri', miktar: 60, birim: 'g', grup: 'Tart hamuru için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Tart hamuru için' },
      { ad: 'tuz', miktar: 1, birim: 'tutam', grup: 'Tart hamuru için' },
      { ad: 'limon', miktar: 2, birim: 'adet', grup: 'Limon kreması için', not: 'suyu ve rendelenmiş kabuğu' },
      { ad: 'toz şeker', miktar: 100, birim: 'g', grup: 'Limon kreması için' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', grup: 'Limon kreması için' },
      { ad: 'nişasta', miktar: 1, birim: 'yemek kaşığı', grup: 'Limon kreması için' },
      { ad: 'tereyağı', miktar: 30, birim: 'g', grup: 'Limon kreması için' },
    ],
    adimlar: [
      {
        baslik: 'Tart hamurunu yoğur',
        aciklama:
          'Un, pudra şekeri ve tuzu karıştır; soğuk tereyağını parmak uçlarınla una yedirerek kum dokusu elde et. Yumurtayı ekleyip sadece toparlanana kadar yoğur; hamuru fazla işleme.',
      },
      {
        baslik: 'Hamuru soğukta dinlendir',
        aciklama:
          'Hamuru yassı bir disk yapıp streçle sar, buzdolabında 30 dakika dinlendir; soğuk hamur kalıba açarken yırtılmaz ve pişerken büzülmez.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kalıplara açıp pişir',
        aciklama:
          'Hamuru 6 eşit parçaya böl, 10 cm\'lik mini tart kalıplarına parmakla bastırarak yay ve tabanlarını çatalla delikle. Önceden ısınmış 180°C fırında 18-20 dakika, kenarlar altın rengi alana dek pişir.',
        sureSn: 1150,
      },
      {
        baslik: 'Limon kremasını pişir',
        aciklama:
          'Limon suyu, rendelenmiş kabuk, toz şeker, yumurta ve nişastayı sos tenceresinde çırparak birleştir. Kısık ateşte sürekli karıştırarak koyulaşana dek 5-6 dakika pişir; ocaktan alıp tereyağını yedir.',
      },
      {
        baslik: 'Tartları doldur',
        aciklama:
          'Soğuyan tart kabuklarını kalıptan çıkar, sıcak limon kremasını paylaştırıp spatulayla düzle. Krema hâlâ sıcakken dolduran, çatlaksız parlak bir yüzey elde eder.',
      },
      {
        baslik: 'Buzdolabında sıkılaştır',
        aciklama:
          'Tartları buzdolabında en az 2 saat beklet; krema kesilebilir kıvama gelir. Servis öncesi ince limon kabuğu rendesiyle süsleyebilirsin.',
        sureSn: 7200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Limon kabuğunu rendelerken beyaz kısma inme; acılık oradan gelir. Kremanın ipeksiliği için pişer pişmez süzgeçten geçirmek profesyonel dokunuştur.',
  },
  {
    id: 'kat-kat-pankek-keki',
    baslik: 'Kat Kat Pankek Keki',
    altBaslik: 'Üst üste dizilen ince pankekler ve krem peynirli kremayla fırınsız kat pastası',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🥞',
    porsiyon: 8,
    hazirlikDk: 25,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 260, birim: 'g', grup: 'Pankek için' },
      { ad: 'süt', miktar: 300, birim: 'ml', grup: 'Pankek için' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', grup: 'Pankek için' },
      { ad: 'toz şeker', miktar: 60, birim: 'g', grup: 'Pankek için' },
      { ad: 'kabartma tozu', miktar: 10, birim: 'g', grup: 'Pankek için' },
      { ad: 'vanilin', miktar: 5, birim: 'g', grup: 'Pankek için' },
      { ad: 'tereyağı', miktar: 30, birim: 'g', grup: 'Pankek için', not: 'eritilmiş' },
      { ad: 'tuz', miktar: 1, birim: 'tutam', grup: 'Pankek için' },
      { ad: 'krem peynir', miktar: 200, birim: 'g', grup: 'Kreması için', not: 'oda sıcaklığında' },
      { ad: 'krema', miktar: 200, birim: 'ml', grup: 'Kreması için', not: 'soğuk' },
      { ad: 'pudra şekeri', miktar: 70, birim: 'g', grup: 'Kreması için' },
      { ad: 'bal', miktar: 2, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'muz', miktar: 1, birim: 'adet', grup: 'Üzeri için', not: 'dilimlenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Pankek harcını hazırla',
        aciklama:
          'Yumurta, süt ve toz şekeri çırp; eritilmiş tereyağını ekle. Un, kabartma tozu, vanilin ve tuzu eleyerek kat, topaksız akıcı bir harç elde et. Harcı 10 dakika dinlendir.',
      },
      {
        baslik: 'Pankekleri tek tek pişir',
        aciklama:
          'Yağlanmış teflon tavayı orta ateşte ısıt; her pankek için bir kepçe harç dök ve yüzeyi kabarcıklanınca çevir. Toplam 8-10 ince pankek pişirip yan yana soğumaya bırak; sıcak pankek kremayı eritir.',
        sureSn: 1500,
      },
      {
        baslik: 'Kremayı çırp',
        aciklama:
          'Soğuk kremayı pudra şekeriyle katı köpük olana kadar çırp. Yumuşamış krem peyniri spatulayla yedirerek pürüzsüz, sürülebilir bir dolgu elde et.',
      },
      {
        baslik: 'Katları diz',
        aciklama:
          'Servis tabağına bir pankek koy, üzerine ince bir kat krema sür; tüm pankekler bitene dek katları tekrarla. En üst katı kremayla kapat.',
      },
      {
        baslik: 'Soğutup süsle',
        aciklama:
          'Keki buzdolabında en az 2 saat dinlendir; katlar birbirine oturur ve dilim temiz kesilir. Servisten önce üzerine muz dilimlerini diz, bal gezdir.',
        sureSn: 7200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Pankeklerin hepsinin aynı çapta olması kekin duruşunu belirler; ilk pankeği şablon yapıp kenarlarını bir kase yardımıyla kesersen pastane görünümü yakalarsın.',
  },
  {
    id: 'tahinli-cevizli-rulo-corek',
    baslik: 'Tahinli Cevizli Rulo Çörek',
    altBaslik: 'Mayalı yumuşak hamurun tahin ve cevizle sarıldığı, dilim dilim açılan spiral çörekler',
    kategori: 'hamur-isi',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🥐',
    porsiyon: 8,
    hazirlikDk: 30,
    pisirmeDk: 25,
    zorluk: 'orta',
    kaloriPerPorsiyon: 445,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 450, birim: 'g', grup: 'Hamur için' },
      { ad: 'süt', miktar: 200, birim: 'ml', grup: 'Hamur için', not: 'ılık' },
      { ad: 'instant maya', miktar: 7, birim: 'g', grup: 'Hamur için' },
      { ad: 'toz şeker', miktar: 50, birim: 'g', grup: 'Hamur için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Hamur için' },
      { ad: 'tereyağı', miktar: 60, birim: 'g', grup: 'Hamur için', not: 'oda sıcaklığında' },
      { ad: 'tuz', miktar: 5, birim: 'g', grup: 'Hamur için' },
      { ad: 'tahin', miktar: 150, birim: 'g', grup: 'İç harcı için' },
      { ad: 'toz şeker', miktar: 80, birim: 'g', grup: 'İç harcı için' },
      { ad: 'ceviz içi', miktar: 100, birim: 'g', grup: 'İç harcı için', not: 'ince çekilmiş' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Üzeri için', not: 'sarısı' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Ilık süt, maya ve toz şekeri karıştırıp 5 dakika beklet. Un, yumurta ve tuzu ekleyerek toparla; yumuşak tereyağını azar azar yedirip ele yapışmayan esnek bir hamur olana dek 8-10 dakika yoğur.',
      },
      {
        baslik: 'Mayalanmaya bırak',
        aciklama:
          'Hamurun üzerini nemli bezle örtüp ılık bir köşede hacmi iki katına çıkana kadar yaklaşık 1 saat mayalandır.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Tahinli harcı sür',
        aciklama:
          'Tahini toz şekerle pürüzsüzleşene dek karıştır. Mayalanan hamuru unlu tezgahta 40x50 cm ince bir dikdörtgen aç, tahinli karışımı her yerine sür ve çekilmiş cevizi eşit serp.',
      },
      {
        baslik: 'Rulola ve dilimle',
        aciklama:
          'Hamuru uzun kenardan sıkıca rulo yap; keskin bıçakla 8 eşit dilime böl. Dilimleri kesitleri yukarı bakacak şekilde yağlı kağıt serili tepsiye aralıklı yerleştir ve 20 dakika daha kabart.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: '180 derecede pişir',
        aciklama:
          'Çöreklerin üzerine yumurta sarısı sür. Önceden ısınmış 180°C fırında 22-25 dakika, üstleri parlak kızarana dek pişir.',
        sureSn: 1400,
      },
      {
        baslik: 'Ilıması için beklet',
        aciklama:
          'Çörekleri tepsiden tel ızgaraya al ve 20 dakika dinlendir; tahinli iç harç ılıkken en akışkan ve aromalı halindedir.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Ruloyu dilimlerken bıçak yerine dişsiz misina ya da iplik kullanırsan spiraller ezilmeden gül gibi açılır.',
  },
  {
    id: 'akiskan-cikolatali-kurabiye',
    baslik: 'Akışkan Çikolatalı Kurabiye',
    altBaslik: 'İkiye bölününce içinden sıcak çikolata akan dolgulu kakaolu kurabiye',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli'],
    emoji: '🍪',
    porsiyon: 8,
    hazirlikDk: 25,
    pisirmeDk: 12,
    zorluk: 'orta',
    kaloriPerPorsiyon: 455,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'çikolata (bitter)', miktar: 100, birim: 'g', grup: 'Dolgu için', not: '8 kare halinde' },
      { ad: 'tereyağı', miktar: 110, birim: 'g', grup: 'Hamur için', not: 'oda sıcaklığında' },
      { ad: 'toz şeker', miktar: 120, birim: 'g', grup: 'Hamur için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Hamur için' },
      { ad: 'un', miktar: 220, birim: 'g', grup: 'Hamur için' },
      { ad: 'kakao', miktar: 30, birim: 'g', grup: 'Hamur için' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'çay kaşığı', grup: 'Hamur için' },
      { ad: 'tuz', miktar: 1, birim: 'tutam', grup: 'Hamur için' },
    ],
    adimlar: [
      {
        baslik: 'Çikolata karelerini dondur',
        aciklama:
          'Bitter çikolatayı 8 kalın kare halinde böl ve dondurucuya at; donmuş çikolata fırında hamurdan önce erimediği için pişme boyunca merkezde akışkan kalır.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kurabiye hamurunu yap',
        aciklama:
          'Tereyağını toz şekerle kremalaşana kadar çırp, yumurtayı yedir. Un, kakao, kabartma tozu ve tuzu eleyerek ekle; yumuşak, şekil alabilen bir hamur elde et.',
      },
      {
        baslik: 'Dolguyu hamura gizle',
        aciklama:
          'Hamuru 8 eşit parçaya böl. Her parçayı avucunda açıp ortasına donmuş bir çikolata karesi koy; kenarları birleştirip hiç açıklık kalmayacak şekilde yuvarla.',
      },
      {
        baslik: '180 derecede pişir',
        aciklama:
          'Topları pişirme kağıtlı tepsiye aralıklı diz ve önceden ısınmış 180°C fırında 11-12 dakika pişir; üstü matlaştığında kurabiye hazırdır, fazla pişen dolgu katılaşır.',
        sureSn: 700,
      },
      {
        baslik: 'Beş dakika dinlendirip sun',
        aciklama:
          'Kurabiyeleri tepside sadece 5 dakika dinlendir ve sıcak servis et; ortadan bölündüğünde çikolata akıyorsa kıvamı tam tutturmuşsun demektir.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Soğuyan kurabiyenin dolgusu donuklaşır; ikram öncesi mikrodalgada 15 saniye ısıtmak akışkan merkezi geri getirir.',
  },
];
