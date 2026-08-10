import type { Tarif } from '@/types/tarif';

// Yeni nesil / viral tatlılar — sosyal medyada dönen tarifler, mutfakta denenmiş ölçülerle.
// Tüm metinler özgündür; malzeme adları sözlükle (malzemeler.ts) birebir uyumludur.
export const VIRAL_TATLILAR: Tarif[] = [
  {
    id: 'san-sebastian-cheesecake',
    baslik: 'San Sebastian Cheesecake',
    altBaslik: 'Dışı karamelize, içi akışkan Bask usulü cheesecake — unsuz ve şaşırtıcı derecede kolay',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🍰',
    porsiyon: 8,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'orta',
    kaloriPerPorsiyon: 445,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'krem peynir', miktar: 600, birim: 'g', not: 'oda sıcaklığında' },
      { ad: 'toz şeker', miktar: 150, birim: 'g' },
      { ad: 'yumurta', miktar: 3, birim: 'adet', not: 'oda sıcaklığında' },
      { ad: 'krema', miktar: 200, birim: 'ml' },
      { ad: 'nişasta', miktar: 1, birim: 'yemek kaşığı', not: 'silme' },
      { ad: 'vanilin', miktar: 5, birim: 'g' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Kalıbı hazırla, fırını ısıt',
        aciklama:
          '20 cm çapında kelepçeli kalıbın içine pişirme kağıdını ıslatıp buruşturarak yerleştir; kenarlardan taşması karamelize görüntü için gerekli. Fırını 210°C fanlı ayarda ısınmaya bırak.',
      },
      {
        baslik: 'Krem peyniri şekerle çırp',
        aciklama:
          'Krem peyniri geniş bir kapta toz şeker ve tuzla, şeker taneleri hissedilmeyene dek düşük devirde çırp. Yüksek devir hava kabarcığı yapar; amaç pürüzsüz bir kıvam, kabarma değil.',
      },
      {
        baslik: 'Yumurtaları tek tek ekle',
        aciklama:
          'Yumurtaları birer birer kırıp her seferinde karışıma tamamen yedirilene kadar karıştır. Ardından vanilini ekle.',
      },
      {
        baslik: 'Krema ve nişastayı yedir',
        aciklama:
          'Nişastayı kremanın içinde topaksız şekilde ez, sonra karışıma dökerek spatulayla homojen olana dek karıştır. Harcı kalıba aktar ve tezgaha birkaç kez hafifçe vurarak havasını al.',
      },
      {
        baslik: '210 derecede pişir',
        aciklama:
          'Önceden ısınmış 210°C fırının orta rafında 25-30 dakika pişir. Üstü koyu kahveye dönmeli, ortası kaşıkla dokununca jöle gibi sallanmalı; tam bu anda fırından çıkar.',
        sureSn: 1650,
      },
      {
        baslik: 'Oda sıcaklığında dinlendir',
        aciklama:
          'Kalıbı çıkarır çıkarmaz kesme; kek soğudukça toparlanır. Tezgahta kendi halinde tamamen soğumaya bırak.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Buzdolabında beklet',
        aciklama:
          'Soğuyan cheesecake üzerini kapatmadan buzdolabına al. En az 4 saat beklet; dilimler ancak bu sürenin sonunda temiz kesilir.',
        sureSn: 14400,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Ortası hafif sallanırken fırından çıkarmak akışkan merkezin tek sırrı; renk yeterince koyulaşmadıysa sıcaklığı değil süreyi uzat.',
  },
  {
    id: 'islak-brownie',
    baslik: 'Islak Brownie',
    altBaslik: 'Yoğun çikolatalı, ortası nemli klasik brownie — çatlak üst yüzeyiyle tam kıvamında',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli'],
    emoji: '🍫',
    porsiyon: 8,
    hazirlikDk: 15,
    pisirmeDk: 22,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 490,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'çikolata (bitter)', miktar: 200, birim: 'g', grup: 'Kek için' },
      { ad: 'tereyağı', miktar: 150, birim: 'g', grup: 'Kek için' },
      { ad: 'yumurta', miktar: 3, birim: 'adet', grup: 'Kek için' },
      { ad: 'toz şeker', miktar: 160, birim: 'g', grup: 'Kek için' },
      { ad: 'un', miktar: 90, birim: 'g', grup: 'Kek için' },
      { ad: 'kakao', miktar: 2, birim: 'yemek kaşığı', grup: 'Kek için' },
      { ad: 'tuz', miktar: 1, birim: 'tutam', grup: 'Kek için' },
      { ad: 'çikolata (bitter)', miktar: 80, birim: 'g', grup: 'Islak sos için' },
      { ad: 'krema', miktar: 100, birim: 'ml', grup: 'Islak sos için' },
    ],
    adimlar: [
      {
        baslik: 'Çikolatayı tereyağıyla erit',
        aciklama:
          'Bitter çikolatayı ve tereyağını benmari usulü, kaynayan suya değmeyen bir kapta erit. Pürüzsüz olunca ocaktan alıp ılınmaya bırak. Fırını 170°C ayarla.',
      },
      {
        baslik: 'Yumurtaları şekerle çırp',
        aciklama:
          'Yumurta ve toz şekeri, karışım açık renkli ve hacimli bir krema haline gelene dek 3-4 dakika çırp. Bu çırpma, brownie üstündeki ince çatlak kabuğu oluşturur.',
      },
      {
        baslik: 'Harcı birleştir',
        aciklama:
          'Ilıyan çikolatalı karışımı yumurtalı kremaya azar azar yedir. Un, kakao ve tuzu eleyerek ekle; spatulayla alttan üste, hacmi söndürmeden karıştır.',
      },
      {
        baslik: '170 derecede az pişir',
        aciklama:
          'Harcı pişirme kağıdı serili 20x20 cm kare kalıba dök. Önceden ısınmış 170°C fırında 20-22 dakika pişir; ortasına batırılan kürdan hafif ıslak çıkmalı, kuru değil.',
        sureSn: 1300,
      },
      {
        baslik: 'Islak sosu hazırla',
        aciklama:
          'Kremayı kaynama noktasına getirip doğranmış bitter çikolatanın üzerine dök, 1 dakika bekleyip parlak bir sos olana kadar karıştır.',
      },
      {
        baslik: 'Ilıkken sosla buluştur',
        aciklama:
          'Brownie ılıkken dilimle ve sıcak sosu üzerine gezdir; sosun bir kısmı içine işlesin. Dilerken bir top dondurmayla servis et.',
      },
    ],
    pufNoktasi:
      'Kürdan tertemiz çıkıyorsa geç kalmışsın demektir; brownie kalıptan çıktıktan sonra da içten pişmeye devam eder, o yüzden erken davran.',
  },
  {
    id: 'yumusak-damla-cikolatali-kurabiye',
    baslik: 'Yumuşak Damla Çikolatalı Kurabiye',
    altBaslik: 'Kenarı hafif çıtır, ortası yumuşacık Amerikan usulü kurabiye — bol damla çikolatalı',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli'],
    emoji: '🍪',
    porsiyon: 8,
    hazirlikDk: 15,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 415,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tereyağı', miktar: 125, birim: 'g', not: 'oda sıcaklığında, yumuşak' },
      { ad: 'toz şeker', miktar: 130, birim: 'g' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı', not: 'yumuşak doku için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet' },
      { ad: 'un', miktar: 230, birim: 'g' },
      { ad: 'kabartma tozu', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'vanilin', miktar: 5, birim: 'g' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
      { ad: 'damla çikolata', miktar: 150, birim: 'g' },
    ],
    adimlar: [
      {
        baslik: 'Tereyağını şekerle kremala',
        aciklama:
          'Yumuşak tereyağını toz şeker ve balla, renk açılıp krema kıvamı alana dek 2-3 dakika çırp. Yumurta ve vanilini ekleyip kısaca çırpmaya devam et.',
      },
      {
        baslik: 'Kuruları ekleyip hamuru topla',
        aciklama:
          'Un, kabartma tozu ve tuzu eleyerek ekle; spatulayla un görünmeyene kadar karıştır, fazla yoğurma. Damla çikolatayı katıp hamura eşit dağıt.',
      },
      {
        baslik: 'Hamuru soğut',
        aciklama:
          'Hamurun üzerini kapatıp buzdolabında dinlendir. Soğuyan hamur fırında kontrolsüz yayılmaz; yumuşak ortanın garantisi bu bekleme.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Bezeleri hazırla',
        aciklama:
          'Fırını 180°C ayarla. Hamurdan ceviz büyüklüğünde 16 beze kopar, aralarına genişçe mesafe bırakarak pişirme kağıtlı tepsiye diz; bastırıp yassılaştırma.',
      },
      {
        baslik: '180 derecede az pişir',
        aciklama:
          'Önceden ısınmış 180°C fırında 10-12 dakika pişir. Kenarlar hafif renk aldığında, ortalar hâlâ soluk ve yumuşakken çıkar; tepside soğurken pişme tamamlanır.',
        sureSn: 660,
      },
      {
        baslik: 'Tepside dinlendir',
        aciklama:
          'Kurabiyeleri tepsiden almadan 10 dakika beklet; sıcakken dağılır, soğudukça toparlanır. Ilık servis edildiğinde çikolatalar akışkan kalır.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Ortalar çiğ görünürken fırından almak yumuşaklığın anahtarı; bir tık üzerine de fırından çıkar çıkmaz birkaç damla çikolata bastırırsan vitrin görüntüsü hazır.',
  },
  {
    id: 'kedidili-tiramisu',
    baslik: 'Kedidili Tiramisu',
    altBaslik: 'Kahveye banılmış kedidili katları ve mascarpone kremasıyla pişirmesiz İtalyan klasiği',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🍰',
    porsiyon: 8,
    hazirlikDk: 25,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 460,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'filtre kahve', miktar: 300, birim: 'ml', not: 'demlenmiş ve soğutulmuş' },
      { ad: 'kedidili bisküvi', miktar: 24, birim: 'adet' },
      { ad: 'mascarpone', miktar: 400, birim: 'g', not: 'buzdolabından yeni çıkmış' },
      { ad: 'krema', miktar: 250, birim: 'ml', not: 'soğuk' },
      { ad: 'pudra şekeri', miktar: 80, birim: 'g' },
      { ad: 'vanilin', miktar: 5, birim: 'g' },
      { ad: 'kakao', miktar: 2, birim: 'yemek kaşığı', not: 'üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Kremayı çırp',
        aciklama:
          'Soğuk kremayı pudra şekeri ve vanilinle, çırpıcı izi bırakan yumuşak bir kıvama gelene dek çırp. Kabı önceden buzdolabında soğutursan krema çok daha hızlı tutar.',
      },
      {
        baslik: 'Mascarpone ile birleştir',
        aciklama:
          'Mascarponeyi ayrı bir kapta spatulayla yumuşat, çırpılmış kremayı iki seferde alttan üste yedirerek ekle. Fazla karıştırırsan krema cıvır; homojen olduğu anda dur.',
      },
      {
        baslik: 'Bisküvileri kahveye banıp diz',
        aciklama:
          'Her kedidiliyi soğuk filtre kahveye 1-2 saniye banıp hemen çıkar ve 20x20 cm kabın tabanına diz. Bisküvi kahveyi çeker ama dağılmamalı; uzun banarsan lapa olur.',
      },
      {
        baslik: 'Katları oluştur',
        aciklama:
          'Bisküvi katının üzerine kremanın yarısını yay, ikinci kat banılmış bisküviyi diz ve kalan kremayla kapat. Yüzeyi spatulayla düzelt.',
      },
      {
        baslik: 'Buzdolabında demlendir',
        aciklama:
          'Kabın üzerini kapatıp buzdolabında en az 4 saat beklet; katlar ancak bu sürede birbirine yerleşip dilimlenebilir kıvama gelir.',
        sureSn: 14400,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kakaoyla kapatıp servis et',
        aciklama:
          'Servisten hemen önce kakaoyu ince süzgeçten yüzeye ele; erken elenirse kakao nemlenip kararır. Sıcak suya batırılmış bıçakla dilimle.',
      },
    ],
    pufNoktasi:
      'Kahvenin buz gibi olması iki işe yarar: bisküvi dağılmaz ve krema katmanı erimez. Bir gece bekleyen tiramisu, dört saatlikten her zaman daha lezzetlidir.',
  },
  {
    id: 'muzlu-magnolia',
    baslik: 'Muzlu Magnolia',
    altBaslik: 'İpeksi muhallebi, bisküvi kırıkları ve muz dilimleriyle kat kat serinletici kup tatlısı',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🧁',
    porsiyon: 6,
    hazirlikDk: 20,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 385,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'süt', miktar: 800, birim: 'ml', grup: 'Muhallebi için' },
      { ad: 'toz şeker', miktar: 110, birim: 'g', grup: 'Muhallebi için' },
      { ad: 'nişasta', miktar: 70, birim: 'g', grup: 'Muhallebi için' },
      { ad: 'vanilin', miktar: 5, birim: 'g', grup: 'Muhallebi için' },
      { ad: 'krema', miktar: 200, birim: 'ml', grup: 'Muhallebi için', not: 'soğuk, çırpılacak' },
      { ad: 'burçak bisküvi', miktar: 14, birim: 'adet', grup: 'Katlar için' },
      { ad: 'muz', miktar: 3, birim: 'adet', grup: 'Katlar için' },
    ],
    adimlar: [
      {
        baslik: 'Muhallebiyi pişir',
        aciklama:
          'Süt, toz şeker ve nişastayı tencerede soğukken çırparak birleştir. Orta ateşte sürekli karıştırarak koyulaşana dek pişir; fokurdadıktan sonra 1 dakika daha karıştırıp ocaktan al, vanilini ekle.',
        sureSn: 600,
      },
      {
        baslik: 'Muhallebiyi soğut',
        aciklama:
          'Muhallebinin yüzeyine streç film değdirerek kapat ve oda sıcaklığına gelene kadar beklet; film, kabuk bağlamasını önler.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Kremayı yedir',
        aciklama:
          'Soğuk kremayı katılaşana dek çırp ve soğumuş muhallebiye alttan üste yedir. Bu adım magnoliayı sıradan muhallebiden ayıran ipeksi dokuyu verir.',
      },
      {
        baslik: 'Bisküvileri kır, muzu dilimle',
        aciklama:
          'Burçak bisküvilerin çoğunu elinle iri kırıklar halinde parçala, birkaçını süsleme için ince toz haline getir. Muzları ince halkalar halinde dilimle.',
      },
      {
        baslik: 'Kupları katla',
        aciklama:
          '6 kupun tabanına bisküvi kırığı, üzerine krema ve muz dilimleri gelecek şekilde iki kat oluştur. En üstü kremayla bitirip bisküvi tozu ve muz dilimiyle süsle.',
      },
      {
        baslik: 'Buzdolabında dinlendir',
        aciklama:
          'Kupları buzdolabında en az 2 saat beklet; bisküviler hafif yumuşayınca kaşık her kattan aynı anda geçer.',
        sureSn: 7200,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Muz dilimlerini kupların cam kenarına değil kremanın içine göm; havayla teması kesilen muz kararmaz, ertesi gün bile taze görünür.',
  },
  {
    id: 'cikolatali-sufle',
    baslik: 'Çikolatalı Sufle',
    altBaslik: 'Kaşığı daldırınca içinden çikolata akan, unsuz ve tam ölçülü restoran klasiği',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🍫',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 14,
    zorluk: 'orta',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'çikolata (bitter)', miktar: 200, birim: 'g' },
      { ad: 'tereyağı', miktar: 100, birim: 'g', not: 'artı kalıpları yağlamak için bir miktar' },
      { ad: 'yumurta', miktar: 3, birim: 'adet', not: 'oda sıcaklığında' },
      { ad: 'toz şeker', miktar: 80, birim: 'g' },
      { ad: 'nişasta', miktar: 1, birim: 'yemek kaşığı', not: 'silme' },
      { ad: 'kakao', miktar: 1, birim: 'yemek kaşığı', not: 'kalıpların içi için' },
      { ad: 'pudra şekeri', miktar: 1, birim: 'yemek kaşığı', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Kalıpları yağla ve kakaola',
        aciklama:
          '6 küçük sufle kalıbını tereyağıyla fırça izleri yukarı bakacak şekilde yağla, içlerine kakao serpip fazlasını dök. Bu kaplama suflenin duvara tutunup dik kabarmasını sağlar. Fırını 200°C ayarla.',
      },
      {
        baslik: 'Çikolatayı erit',
        aciklama:
          'Bitter çikolatayı ve tereyağını benmaride erit, pürüzsüz olunca ocaktan alıp ılınmaya bırak; sıcak çikolata yumurtayı pişirir.',
      },
      {
        baslik: 'Yumurtalı harcı hazırla',
        aciklama:
          'Yumurta ve toz şekeri, hacmi ikiye katlanıp açık renk alana dek 3-4 dakika çırp. Ilık çikolatayı ve nişastayı ekleyip alttan üste, söndürmeden karıştır.',
      },
      {
        baslik: 'Kalıplara paylaştır',
        aciklama:
          'Harcı kalıplara üçte iki doluluk bırakarak paylaştır. Bu aşamada kalıplar buzdolabında 15 dakika dinlenirse sufle daha kontrollü kabarır.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: '200 derecede pişir',
        aciklama:
          'Önceden ısınmış 200°C fırında 12-14 dakika pişir. Kenarlar kek gibi tutmuş, üstü kabarmış ama ortası hafif oynak olmalı; fırın kapağını ara ara açma.',
        sureSn: 780,
      },
      {
        baslik: 'Bekletmeden servis et',
        aciklama:
          'Sufle fırından çıktığı dakika masada olmalı; birkaç dakika içinde çökmesi doğaldır. Üzerine pudra şekeri eleyip kalıbıyla servis et.',
      },
    ],
    pufNoktasi:
      'Harcı bir gece önceden kalıplayıp buzdolabında saklayabilirsin; misafir sofradayken fırına sürersin, pişirme süresine sadece 2 dakika eklemen yeterli.',
  },
  {
    id: 'tavada-bruksel-waffle',
    baslik: 'Tavada Brüksel Waffle',
    altBaslik: 'Mayalı hamurla içi petek petek, dışı çıtır waffle — makinesiz, tavada ev versiyonu',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli'],
    emoji: '🧇',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 420,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'süt', miktar: 300, birim: 'ml', not: 'ılık' },
      { ad: 'instant maya', miktar: 1, birim: 'paket', not: '10 g' },
      { ad: 'toz şeker', miktar: 40, birim: 'g' },
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'un', miktar: 250, birim: 'g' },
      { ad: 'tereyağı', miktar: 70, birim: 'g', not: 'eritilmiş, artı pişirme için bir miktar' },
      { ad: 'vanilin', miktar: 5, birim: 'g' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
      { ad: 'pudra şekeri', miktar: 2, birim: 'yemek kaşığı', not: 'servis için' },
      { ad: 'muz', miktar: 2, birim: 'adet', not: 'servis için, dilimlenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Mayayı uyandır',
        aciklama:
          'Ilık sütü, instant mayayı ve toz şekerin 1 kaşığını karıştırıp 5 dakika beklet; yüzeyde köpük belirmesi mayanın canlı olduğunu gösterir.',
      },
      {
        baslik: 'Hamuru çırp',
        aciklama:
          'Yumurta, kalan şeker, vanilin ve tuzu mayalı süte ekleyip çırp. Unu eleyerek katıp topaksız, akışkan bir hamur elde et; en son eritilmiş tereyağını yedir.',
      },
      {
        baslik: 'Hamuru mayalandır',
        aciklama:
          'Kabın üzerini kapatıp hamuru oda sıcaklığında kabarana dek mayalandır. Kabarcıklı bu hamur, waffle içindeki petek dokunun kaynağıdır.',
        sureSn: 2700,
        beklemeAdimi: true,
      },
      {
        baslik: 'Tavada pişir',
        aciklama:
          'Yapışmaz tavayı orta-kısık ateşte ısıt, ince bir tereyağı sür. Bir kepçe hamuru dök, altı iyice kızarınca çevir; her yüz 3-4 dakika pişmeli. Waffle tavası varsa desenli yüzü de aynı sürede pişer.',
        sureSn: 480,
      },
      {
        baslik: 'Süsleyip servis et',
        aciklama:
          'Sıcak wafflelara pudra şekeri ele, muz dilimlerini üzerine diz. Ballı ya da çikolata soslu da servis edebilirsin; ilk 10 dakika çıtırlığın zirvesi.',
      },
    ],
    pufNoktasi:
      'Kabartma tozu değil maya kullanmak Brüksel usulünün özü: hamur ekşimsi bir derinlik kazanır ve içi boşluklu, hafif bir doku oluşur. Ateş yüksekse dışı yanar içi hamur kalır; sabırlı ol.',
  },
  {
    id: 'kadayifli-fistikli-kup',
    baslik: 'Kadayıflı Fıstıklı Kup',
    altBaslik: 'Tereyağında kavrulmuş çıtır kadayıf, tahinli fıstık ve ipeksi çikolata ganajı bir kupta',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🍫',
    porsiyon: 6,
    hazirlikDk: 25,
    pisirmeDk: 10,
    zorluk: 'orta',
    kaloriPerPorsiyon: 540,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kadayıf', miktar: 200, birim: 'g', grup: 'Çıtır katman için', not: 'ince kıyılmış' },
      { ad: 'tereyağı', miktar: 60, birim: 'g', grup: 'Çıtır katman için' },
      { ad: 'antep fıstığı', miktar: 150, birim: 'g', grup: 'Çıtır katman için', not: 'iri çekilmiş' },
      { ad: 'tahin', miktar: 2, birim: 'yemek kaşığı', grup: 'Çıtır katman için' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı', grup: 'Çıtır katman için' },
      { ad: 'çikolata (bitter)', miktar: 150, birim: 'g', grup: 'Ganaj için' },
      { ad: 'krema', miktar: 200, birim: 'ml', grup: 'Ganaj için' },
      { ad: 'antep fıstığı', miktar: 20, birim: 'g', grup: 'Üzeri için', not: 'toz çekilmiş' },
    ],
    adimlar: [
      {
        baslik: 'Kadayıfı kavur',
        aciklama:
          'Kıyılmış kadayıfı geniş tavada tereyağıyla, sürekli karıştırarak altın rengi alana dek orta ateşte kavur. Rengi eşitlemek için tavayı ara ara sallamak yeterli; kenarda bekleyen teller çabuk yanar.',
        sureSn: 480,
      },
      {
        baslik: 'Fıstıklı harcı yap',
        aciklama:
          'Kavrulan kadayıfı ocaktan al, ılınınca çekilmiş antep fıstığı, tahin ve balı ekleyip kaşıkla harmanla. Karışım nemli kum gibi tutmalı ama macuna dönmemeli.',
      },
      {
        baslik: 'Ganajı hazırla',
        aciklama:
          'Kremayı kaynama noktasına getirip doğranmış bitter çikolatanın üzerine dök. 2 dakika dokunmadan bekle, sonra ortadan dışa doğru karıştırarak parlak bir ganaj elde et.',
      },
      {
        baslik: 'Kupları katla',
        aciklama:
          '6 kupun tabanına fıstıklı kadayıftan birer kat bastırmadan yerleştir, üzerine ganaj dök; kalan kadayıf ve ganajla ikinci katı tekrarla. En üstü ganajla bitir.',
      },
      {
        baslik: 'Buzdolabında beklet',
        aciklama:
          'Kupları buzdolabında ganaj hafif tutana dek beklet; çıtır kat gevrekliğini korurken ganaj kaşık kaldıracak kıvama gelir.',
        sureSn: 5400,
        beklemeAdimi: true,
      },
      {
        baslik: 'Fıstıkla süsleyip sun',
        aciklama:
          'Servisten hemen önce toz antep fıstığını yüzeye serp. Kuplar buzdolabından çıkıp 10 dakika oda sıcaklığında beklerse ganaj ipeksi hale döner.',
      },
    ],
    pufNoktasi:
      'Tahini kadayıf sıcakken değil ılıkken eklemelisin; sıcak tavada tahin acılaşır, ılık karışımda ise fıstıkla birleşip o meşhur akışkan dolgu hissini verir.',
  },
  {
    id: 'firinsiz-limonlu-cheesecake-kupu',
    baslik: 'Fırınsız Limonlu Cheesecake Kupu',
    altBaslik: 'Bisküvi tabanlı, limon kokulu hafif krem peynir dolgusuyla pişirmesiz ferah kup',
    kategori: 'tatli',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli', 'misafir'],
    emoji: '🍋',
    porsiyon: 6,
    hazirlikDk: 20,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 405,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'burçak bisküvi', miktar: 12, birim: 'adet', grup: 'Taban için' },
      { ad: 'tereyağı', miktar: 50, birim: 'g', grup: 'Taban için', not: 'eritilmiş' },
      { ad: 'krem peynir', miktar: 300, birim: 'g', grup: 'Krema için', not: 'oda sıcaklığında' },
      { ad: 'krema', miktar: 200, birim: 'ml', grup: 'Krema için', not: 'soğuk' },
      { ad: 'pudra şekeri', miktar: 90, birim: 'g', grup: 'Krema için' },
      { ad: 'limon', miktar: 2, birim: 'adet', grup: 'Krema için', not: 'kabuğu rendelenmiş, suyu sıkılmış' },
      { ad: 'vanilin', miktar: 5, birim: 'g', grup: 'Krema için' },
    ],
    adimlar: [
      {
        baslik: 'Tabanı hazırla',
        aciklama:
          'Burçak bisküvileri rondodan geçirip ince toz haline getir, eritilmiş tereyağıyla nemli kum kıvamına gelene dek karıştır. 6 kupun tabanına paylaştırıp kaşık sırtıyla hafifçe bastır.',
      },
      {
        baslik: 'Kremayı çırp',
        aciklama:
          'Soğuk kremayı katılaşana dek çırpıp kenara al. Ayrı kapta krem peyniri pudra şekeri ve vanilinle pürüzsüz olana kadar çırp.',
      },
      {
        baslik: 'Limonu yedir',
        aciklama:
          'Limonların rendelenmiş kabuğunu ve suyunu krem peynirli karışıma ekle; limon suyu kremayı doğal olarak sıkılaştırır. Çırpılmış kremayı alttan üste yedir.',
      },
      {
        baslik: 'Kupları doldur',
        aciklama:
          'Limonlu kremayı bisküvi tabanının üzerine sıkma torbasıyla ya da kaşıkla paylaştır, yüzeyleri düzelt.',
      },
      {
        baslik: 'Buzdolabında dinlendir',
        aciklama:
          'Kupları buzdolabında en az 3 saat beklet; krema kesilebilir kıvama gelir, taban hafifçe yumuşayıp kaşıkla kolay alınır.',
        sureSn: 10800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Süsleyip servis et',
        aciklama:
          'Servisten önce üzerlerine incecik limon kabuğu rendele; dileyene bir tutam bisküvi kırığı da yakışır.',
      },
    ],
    pufNoktasi:
      'Limon suyunu asla krem peynirden önce kremaya değdirme; asit, çırpılmamış kremayı kestirir ama krem peynirle buluşunca tam tersine kıvam verir.',
  },
  {
    id: 'tarcinli-rulo-corek',
    baslik: 'Tarçınlı Rulo Çörek',
    altBaslik: 'Pamuk gibi mayalı hamur, bol tarçınlı dolgu ve krem peynirli glazürle yumuşacık çörek',
    kategori: 'hamur-isi',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli'],
    emoji: '🥐',
    porsiyon: 8,
    hazirlikDk: 30,
    pisirmeDk: 25,
    zorluk: 'orta',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'un', miktar: 500, birim: 'g', grup: 'Hamur için' },
      { ad: 'süt', miktar: 250, birim: 'ml', grup: 'Hamur için', not: 'ılık' },
      { ad: 'instant maya', miktar: 1, birim: 'paket', grup: 'Hamur için', not: '10 g' },
      { ad: 'toz şeker', miktar: 70, birim: 'g', grup: 'Hamur için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Hamur için' },
      { ad: 'tereyağı', miktar: 70, birim: 'g', grup: 'Hamur için', not: 'yumuşak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Hamur için' },
      { ad: 'tereyağı', miktar: 90, birim: 'g', grup: 'Dolgu için', not: 'yumuşak' },
      { ad: 'toz şeker', miktar: 100, birim: 'g', grup: 'Dolgu için' },
      { ad: 'tarçın', miktar: 2, birim: 'yemek kaşığı', grup: 'Dolgu için' },
      { ad: 'krem peynir', miktar: 100, birim: 'g', grup: 'Glazür için' },
      { ad: 'pudra şekeri', miktar: 60, birim: 'g', grup: 'Glazür için' },
      { ad: 'süt', miktar: 2, birim: 'yemek kaşığı', grup: 'Glazür için' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru yoğur',
        aciklama:
          'Ilık süt, maya ve toz şekeri karıştır; un, yumurta ve tuzu ekleyip hamuru toparla. Yumuşak tereyağını parça parça katarak, ele yapışmayan ipeksi bir hamur olana dek 8-10 dakika yoğur.',
      },
      {
        baslik: 'Hamuru mayalandır',
        aciklama:
          'Hamuru hafif yağlanmış kapta üzeri örtülü şekilde, hacmi iki katına çıkana dek ılık bir köşede mayalandır.',
        sureSn: 2700,
        beklemeAdimi: true,
      },
      {
        baslik: 'Aç, dolguyu sür, sar',
        aciklama:
          'Kabaran hamuru unlu tezgahta 35x45 cm dikdörtgen açacak şekilde merdaneyle aç. Yumuşak tereyağını sür, tarçınla karıştırılmış toz şekeri her köşeye serp; uzun kenardan sıkıca rulo yap.',
      },
      {
        baslik: 'Dilimle ve ikinci kez mayalandır',
        aciklama:
          'Ruloyu keskin bıçak ya da dişsiz iplikle 8 eşit dilime ayır, aralıklı olarak yağlanmış fırın kabına diz. Üzeri örtülü halde dilimler birbirine değene kadar tekrar kabart.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: '180 derecede pişir',
        aciklama:
          'Önceden ısınmış 180°C fırında 22-25 dakika, üstleri altın sarısı olana dek pişir. Fazla koyulaşıyorsa son 5 dakikada üzerini folyoyla ört.',
        sureSn: 1400,
      },
      {
        baslik: 'Glazürü sür',
        aciklama:
          'Krem peynir, pudra şekeri ve sütü pürüzsüz olana kadar çırp. Çörekler 10 dakika ılındıktan sonra glazürü üzerlerine yay; sıcakken sürersen glazür tamamen erir.',
      },
    ],
    pufNoktasi:
      'Ruloyu bıçak yerine dişsiz bir iplikle kes: ipliği dilimin altından geçirip uçlarını çaprazlama çektiğinde hamur ezilmeden, spiral deseni bozulmadan ayrılır.',
  },
  {
    id: 'tarcin-sekerli-citir-cubuklar',
    baslik: 'Tarçın Şekerli Çıtır Çubuklar',
    altBaslik: 'Haşlanmış hamurdan kızgın yağda kabaran, tarçınlı şekere bulanmış çıtır çubuklar',
    kategori: 'hamur-isi',
    koleksiyonlar: ['yeni-nesil', 'viral-tatli'],
    emoji: '🍩',
    porsiyon: 6,
    hazirlikDk: 20,
    pisirmeDk: 15,
    zorluk: 'orta',
    kaloriPerPorsiyon: 435,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'su', miktar: 250, birim: 'ml', grup: 'Hamur için' },
      { ad: 'tereyağı', miktar: 50, birim: 'g', grup: 'Hamur için' },
      { ad: 'toz şeker', miktar: 1, birim: 'yemek kaşığı', grup: 'Hamur için' },
      { ad: 'tuz', miktar: 1, birim: 'tutam', grup: 'Hamur için' },
      { ad: 'un', miktar: 150, birim: 'g', grup: 'Hamur için' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', grup: 'Hamur için' },
      { ad: 'ayçiçek yağı', miktar: 500, birim: 'ml', grup: 'Kızartma için' },
      { ad: 'toz şeker', miktar: 100, birim: 'g', grup: 'Kaplama için' },
      { ad: 'tarçın', miktar: 1, birim: 'yemek kaşığı', grup: 'Kaplama için' },
      { ad: 'çikolata (bitter)', miktar: 100, birim: 'g', grup: 'Sos için', not: 'isteğe bağlı' },
      { ad: 'krema', miktar: 100, birim: 'ml', grup: 'Sos için', not: 'isteğe bağlı' },
    ],
    adimlar: [
      {
        baslik: 'Hamuru haşla',
        aciklama:
          'Su, tereyağı, toz şeker ve tuzu tencerede kaynat. Ocağı kısıp unu bir seferde dök; hamur toparlanıp tencerenin dibinde ince bir film bırakana dek 2 dakika tahta kaşıkla karıştır.',
      },
      {
        baslik: 'Yumurtaları yedir',
        aciklama:
          'Hamuru bir kaba alıp 10 dakika ılınmaya bırak, sonra yumurtaları teker teker ekleyip her seferinde tamamen yedir. Parlak, kaşıktan ağır ağır kopan bir kıvam aramalısın.',
      },
      {
        baslik: 'Torbaya doldur',
        aciklama:
          'Hamuru yıldız uçlu sıkma torbasına doldur. Yıldız uç görüntüden fazlası: yivler yüzey alanını artırıp çubukların her yerinin eşit kızarmasını sağlar.',
      },
      {
        baslik: 'Kızgın yağda kızart',
        aciklama:
          'Ayçiçek yağını derin tencerede 180°C sıcaklığa getir; küçük bir hamur parçası atınca hemen yüzeye çıkmalı. Torbadan 10 cm çubuklar sıkıp makasla keserek yağa bırak, altın rengi alana dek 3-4 dakika kızart.',
        sureSn: 220,
      },
      {
        baslik: 'Tarçınlı şekere bula',
        aciklama:
          'Kızaran çubukları kağıt havluya al, fazla yağı çekilir çekilmez tarçınla karıştırılmış toz şekerin içinde çevir; sıcakken bulanmazsa şeker tutmaz.',
      },
      {
        baslik: 'Çikolata sosuyla sun',
        aciklama:
          'Dilersen kremayı ısıtıp doğranmış bitter çikolataya dökerek pürüzsüz bir batırma sosu hazırla. Çubukları sıcak sosla, bekletmeden servis et.',
      },
    ],
    pufNoktasi:
      'Yağın ısısını tek seferde çok çubuk atarak düşürme; ısı düşerse hamur yağ çeker ve çıtırlık gider. Partiler halinde, 5-6 çubuğu geçmeden kızart.',
  },
];
