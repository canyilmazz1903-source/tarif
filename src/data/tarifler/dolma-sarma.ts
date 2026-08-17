import type { Tarif } from '@/types/tarif';

// Dolma & sarma koleksiyonu — özgün, denenmiş-tarif kalitesinde 14 tarif.
export const DOLMA_SARMA: Tarif[] = [
  {
    id: 'midye-dolma',
    baslik: 'Midye Dolma',
    altBaslik: 'Baharatlı iç pilavla doldurulan ev usulü midyeler; bol limonla tek tek açıp yiyin',
    kategori: 'ana-yemek',
    koleksiyonlar: ['sokak-lezzeti', 'misafir'],
    emoji: '🦪',
    porsiyon: 6,
    hazirlikDk: 70,
    pisirmeDk: 50,
    zorluk: 'zor',
    kaloriPerPorsiyon: 305,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [9, 10, 11, 12, 1, 2, 3, 4],
    malzemeler: [
      { ad: 'midye', miktar: 40, birim: 'adet', not: 'iri, kapalı ve taze' },
      { ad: 'limon', miktar: 2, birim: 'adet', not: 'servis için dilimlenmiş' },
      { ad: 'pirinç', miktar: 1.5, birim: 'su bardağı', grup: 'İç pilavı için', not: 'yıkanıp süzülmüş' },
      { ad: 'soğan', miktar: 3, birim: 'adet', grup: 'İç pilavı için', not: 'çok ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'çay bardağı', grup: 'İç pilavı için' },
      { ad: 'çam fıstığı', miktar: 2, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'kuş üzümü', miktar: 2, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'yenibahar', miktar: 1, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'İç pilavı için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Midyeleri fırçalayıp ayıkla',
        aciklama:
          'Midyelerin kabuklarını sert bir fırçayla akan suyun altında iyice ovala, dışarı sarkan sakallarını çekerek kopar. Açık kalan ve dokunduğunda kapanmayan midyeleri ayırıp kullanma.',
        sureSn: 1200,
      },
      {
        baslik: 'Tuzlu suda dinlendir',
        aciklama:
          'Temizlenen midyeleri bol tuzlu soğuk suya al. Yarım saat bekletince içlerindeki kumu bırakırlar; bu ara iç pilavı hazırlamak için idealdir.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'İç pilavın harcını kavur',
        aciklama:
          'Zeytinyağını geniş tavada ısıt, ince doğranmış soğanı şeffaflaşana dek çevir. Çam fıstığını ekleyip pembeleşince pirinci ilave et ve taneler camsı görünene kadar kavur. Salça, kuş üzümü, şeker ve baharatları karıştır.',
        sureSn: 900,
      },
      {
        baslik: 'Pilavı yarım pişir',
        aciklama:
          'Sıcak suyu ve tuzu ekle, kapağı kapat ve kısık ateşte pirinç suyunu çekene kadar pişir. Pilav tam yumuşamadan ocaktan al; kalan pişme midyenin içinde tamamlanacak. Ilıması için kapağı aralık bırak.',
        sureSn: 720,
      },
      {
        baslik: 'Midyeleri bıçakla aralayarak aç',
        aciklama:
          'Kısa ve sağlam bir bıçağı midyenin düz tarafından kaydırıp kası keserek kabuğu kitap gibi aç; iki kabuğu birbirinden tamamen ayırma. Açtıklarını süzgece diz, biriken midye suyunu bir kaba sakla.',
        sureSn: 1200,
      },
      {
        baslik: 'Midyeleri iç pilavla doldur',
        aciklama:
          'Her midyenin içine bir tatlı kaşığı kadar pilav yerleştirip kabuğu bastırarak kapat. Doldurdukça geniş bir tencereye, kapakları yukarı bakacak şekilde sıkıca yerleştir; sıkı diziliş pişerken açılmalarını önler.',
        sureSn: 1500,
      },
      {
        baslik: 'Kısık ateşte buharda pişir',
        aciklama:
          'Sakladığın midye suyunu tel süzgeçten tencereye süz, yarım su bardağı su ekle ve midyelerin üzerine ters bir tabak kapat. En kısık ateşte, buhar tencereyi sarana ve pilav tamamen yumuşayana kadar pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Soğutup limonla servis et',
        aciklama:
          'Tencerenin kapağını açmadan midyeleri oda sıcaklığına gelene kadar dinlendir. Midye dolma ılık ya da soğuk servis edilir; yanına bolca limon dilimi koymayı unutma.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Pilavı ocaktan diriyken almak işin sırrı: pirinç kalan pişmeyi midyenin kendi suyuyla tamamlar, böylece iç lapalaşmaz ve midye aroması pilava işler.',
  },
  {
    id: 'kuru-patlican-dolmasi',
    baslik: 'Kuru Patlıcan Dolması',
    altBaslik: 'Güneşte kurutulmuş patlıcanlar, salçalı kıymalı içle Antep sofralarındaki halini buluyor',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir', 'tek-tencere'],
    emoji: '🍆',
    porsiyon: 5,
    hazirlikDk: 45,
    pisirmeDk: 50,
    zorluk: 'orta',
    kaloriPerPorsiyon: 425,
    beslenmeEtiketleri: ['laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuru dolmalık patlıcan', miktar: 20, birim: 'adet' },
      { ad: 'kıyma', miktar: 300, birim: 'g', grup: 'İçi için', not: 'orta yağlı' },
      { ad: 'pirinç', miktar: 1, birim: 'su bardağı', grup: 'İçi için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İçi için', not: 'rendelenmiş' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', grup: 'İçi için', not: 'ezilmiş' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'kuru nane', miktar: 1, birim: 'tatlı kaşığı', grup: 'İçi için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'nar ekşisi', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Kuru patlıcanları haşlayıp yumuşat',
        aciklama:
          'Kaynayan suya kuru patlıcanları at ve renkleri koyulaşıp elastikleşene kadar birkaç dakika haşla. Fazla haşlarsan doldururken yırtılır; süzüp soğuk sudan geçirerek pişmeyi durdur.',
        sureSn: 480,
      },
      {
        baslik: 'İç harcını yoğur',
        aciklama:
          'Kıymayı, pirinci, rendelenmiş soğanı, sarımsağı, biber salçasını, zeytinyağını ve baharatları derin bir kapta harmanla. Harcı elinle iki üç dakika yoğur ki pirinç aromayı çekip et suyunu tutsun.',
        sureSn: 300,
      },
      {
        baslik: 'Patlıcanları gevşek doldur',
        aciklama:
          'Her patlıcanın içine harçtan bir tatlı kaşığı koy, parmakla hafifçe bastırıp ağız kısmında yarım parmak boşluk bırak. Pirinç pişerken şişeceği için sıkı doldurulan dolma sertleşir ve patlar.',
        sureSn: 1200,
      },
      {
        baslik: 'Tencereye sıkıca diz',
        aciklama:
          'Dolmaları geniş bir tencereye ağızları yukarı bakacak biçimde, birbirine yaslanacak sıklıkta yerleştir. Boşluk kalırsa üstlerine ters bir tabak kapatarak pişerken devrilmelerini engelle.',
        sureSn: 300,
      },
      {
        baslik: 'Salçalı sosu ekleyip kısıkta pişir',
        aciklama:
          'Domates salçasını ve nar ekşisini sıcak suda ez, dolmaların üzerine gezdir. Kapağı kapat, önce yüksek ateşte kaynat; ardından kısık ateşte pirinç tamamen yumuşayana kadar pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Dinlendirip servise al',
        aciklama:
          'Ocaktan aldıktan sonra kapağı açmadan dinlendir; dolmalar kalan buharı çekerek toparlanır. Tabaklara sosuyla birlikte al, isteyene yanında sade yoğurt sun.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Haşlama suyuna küçük bir kaşık nar ekşisi damlatırsan kuru patlıcanların hafif buruk tadı dengelenir ve renkleri parlak mor kalır.',
  },
  {
    id: 'kuru-biber-dolmasi',
    baslik: 'Bulgurlu Kuru Biber Dolması',
    altBaslik: 'Etsiz, nar ekşili bulgurlu içle doldurulan ipe dizili kuru biberler',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['fit', 'meal-prep'],
    emoji: '🌶️',
    porsiyon: 4,
    hazirlikDk: 35,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 310,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuru dolmalık biber', miktar: 16, birim: 'adet' },
      { ad: 'bulgur', miktar: 1.5, birim: 'su bardağı', grup: 'İçi için', not: 'pilavlık' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İçi için', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'çay bardağı', grup: 'İçi için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'nar ekşisi', miktar: 2, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'kuru nane', miktar: 1, birim: 'tatlı kaşığı', grup: 'İçi için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'sumak', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak; yarısı harca, yarısı pişirmeye' },
    ],
    adimlar: [
      {
        baslik: 'Kuru biberleri kaynar suda yumuşat',
        aciklama:
          'Kaynayan suya kuru biberleri atıp iki üç dakika içinde çevirerek yumuşat. Süzüp ters çevirerek sularını akıt; biberin dokusu diri kalmalı, aksi halde doldururken çatlar.',
        sureSn: 420,
      },
      {
        baslik: 'Soğanı yağda pembeleştir',
        aciklama:
          'Zeytinyağının yarısını tencerede ısıt, soğanı kısık ateşte sararmadan yumuşayana kadar çevir. Salçaları ekleyip kokusu çıkana dek bir dakika daha kavur.',
        sureSn: 420,
      },
      {
        baslik: 'Bulgurlu harcı hazırla',
        aciklama:
          'Ocağı kapat; bulguru, nar ekşisini, baharatları, tuzu ve bir buçuk su bardağı sıcak suyu soğanlı karışıma ekle. Kapağını kapatıp bulgur suyu çekene kadar demlenmeye bırak.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Biberleri harçla doldur',
        aciklama:
          'Ilıyan harcı kaşıkla biberlere paylaştır; üstte yarım parmak pay bırakarak gevşek doldur. Dolmaları tencereye dik olarak, birbirine destek verecek şekilde yerleştir.',
        sureSn: 1200,
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kalan zeytinyağını ve bir buçuk su bardağı sıcak suyu dolmaların üzerinde gezdir. Üzerine ters tabak kapat, kapağı ört ve kısık ateşte bulgur iyice yumuşayana kadar pişir.',
        sureSn: 1800,
      },
      {
        baslik: 'Ilık ya da soğuk servis et',
        aciklama:
          'Dolmaları tencerede yarım saat dinlendirdikten sonra tabağa al. Üzerine bir tutam sumak serpip zeytinyağı gezdirerek sun; ertesi gün tadı daha da oturur.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Harca suyu sıcak koyup bulguru önceden demlendirmek, tenceredeki pişme süresini kısaltır ve için lapalaşmadan tane tane kalmasını sağlar.',
  },
  {
    id: 'zeytinyagli-lahana-sarmasi',
    baslik: 'Zeytinyağlı Lahana Sarması',
    altBaslik: 'Fıstıklı, üzümlü, hafif tatlı iç pilavla incecik sarılan kış klasiği; limonla soğuk servis',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['misafir', '101'],
    emoji: '🥬',
    porsiyon: 6,
    hazirlikDk: 60,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 275,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'beyaz lahana', miktar: 1, birim: 'adet', not: 'orta boy, sıkı olmayan' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'pirinç', miktar: 1.5, birim: 'su bardağı', grup: 'İç pilavı için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 3, birim: 'adet', grup: 'İç pilavı için', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'çay bardağı', grup: 'İç pilavı için' },
      { ad: 'çam fıstığı', miktar: 1, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'toz şeker', miktar: 1, birim: 'tatlı kaşığı', grup: 'İç pilavı için' },
      { ad: 'kuru nane', miktar: 1, birim: 'tatlı kaşığı', grup: 'İç pilavı için' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'su', miktar: 2.5, birim: 'su bardağı', not: 'sıcak; bir bardağı harca, kalanı pişirmeye' },
    ],
    adimlar: [
      {
        baslik: 'Lahana yapraklarını haşla',
        aciklama:
          'Lahananın göbeğini bıçakla çıkar, bütün halde kaynar tuzlu suya daldır. Dış yapraklar yumuşadıkça maşayla tek tek ayırıp soğuk suya al; damarları kalın olanların sırtını incelterek düzle.',
        sureSn: 900,
      },
      {
        baslik: 'İç pilavı hazırla',
        aciklama:
          'Zeytinyağında soğanı kısık ateşte iyice yumuşat, çam fıstığını pembeleşene kadar çevir. Pirinci ekleyip camsılaşana dek kavur; üzüm, şeker, baharat ve bir bardak sıcak suyla suyunu çekene kadar pişirip ılıt.',
        sureSn: 900,
      },
      {
        baslik: 'Yaprakları küçük parçalara böl',
        aciklama:
          'Haşlanan yaprakları avuç içi büyüklüğünde parçalara ayır, sert orta damarları kes. Kesilen damarları ve delik yaprakları tencerenin tabanına döşe; sarmalar dibe tutmadan pişer.',
        sureSn: 600,
      },
      {
        baslik: 'Sarmaları incecik sar',
        aciklama:
          'Her yaprağın kenarına bir tatlı kaşığı iç koy, iki yanını içeri kıvırıp parmak kalınlığında sıkıca sar. Sardıklarını tencereye bitişik sıralar halinde diz; araya kuru nane serpiştir.',
        sureSn: 1500,
      },
      {
        baslik: 'Limonlu suyla kısıkta pişir',
        aciklama:
          'Limon suyunu ve kalan sıcak suyu sarmaların üzerine gezdir, ters tabak kapat. Kapağı örtüp kısık ateşte pirinç yumuşayana ve su çekilene kadar pişir.',
        sureSn: 2100,
      },
      {
        baslik: 'Soğutup dinlendirerek sun',
        aciklama:
          'Sarmaları tencerede kendi buharıyla soğumaya bırak. Zeytinyağlı sarma soğuk servis edilir; üzerine limon dilimleri ve bir çay kaşığı zeytinyağı gezdirerek tabağa al.',
        sureSn: 2700,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Lahanayı bütün halde haşlayıp yaprakları sudan tek tek almak, yaprağın yırtılmadan incecik sarılmasını sağlar; şeker de lahananın acımsı ucunu yumuşatır.',
  },
  {
    id: 'etli-pazi-sarmasi',
    baslik: 'Etli Pazı Sarması',
    altBaslik: 'Kıymalı pirinçli içle sarılan taze pazı yaprakları; sarımsaklı yoğurtla sıcak servis',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', 'misafir'],
    emoji: '🍃',
    porsiyon: 5,
    hazirlikDk: 45,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 385,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3, 4],
    malzemeler: [
      { ad: 'pazı', miktar: 2, birim: 'demet', not: 'iri yapraklı' },
      { ad: 'kıyma', miktar: 300, birim: 'g', grup: 'İçi için' },
      { ad: 'pirinç', miktar: 1, birim: 'su bardağı', grup: 'İçi için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İçi için', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'kuru nane', miktar: 1, birim: 'tatlı kaşığı', grup: 'İçi için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'biber salçası', miktar: 1, birim: 'tatlı kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 2.5, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
      { ad: 'yoğurt', miktar: 300, birim: 'g', grup: 'Servis için' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Servis için', not: 'ezilmiş' },
    ],
    adimlar: [
      {
        baslik: 'Pazı yapraklarını hazırla',
        aciklama:
          'Pazıların saplarını kes, yaprakları bol suda yıka. Kaynayan suya yaprakları beşer onar daldırıp birkaç saniyede çıkararak soldur; soğuk suya alıp süz. Sapları ince kıyıp tencere tabanına döşe.',
        sureSn: 720,
      },
      {
        baslik: 'Kıymalı harcı yoğur',
        aciklama:
          'Kıymayı, pirinci, rendelenmiş soğanı, salçayı, zeytinyağını ve baharatları bir kapta birleştir. Harcı elinle iyice yoğur; homojen harç sarma içinde dağılmadan pişer.',
        sureSn: 300,
      },
      {
        baslik: 'Yaprakları tek tek sar',
        aciklama:
          'Solmuş yaprağı damarlı yüzü üste gelecek şekilde aç, geniş yaprakları ikiye böl. Kenara bir tatlı kaşığı harç koy, yanlarını kapatıp gevşekçe sar; pirinç şişeceği için çok sıkma. Tencereye sıralar halinde diz.',
        sureSn: 1500,
      },
      {
        baslik: 'Salçalı sosla kısıkta pişir',
        aciklama:
          'Tereyağını erit, biber salçasını çevirip sıcak suyla aç ve sarmaların üzerine dök. Ters tabak kapatıp kapağı ört; kısık ateşte pirinç yumuşayana kadar pişir.',
        sureSn: 2100,
      },
      {
        baslik: 'Sarımsaklı yoğurdu çırp',
        aciklama:
          'Yoğurdu ezilmiş sarımsak ve bir tutam tuzla pürüzsüz olana kadar çırp. Oda sıcaklığında beklet; soğuk yoğurt sıcak sarmanın buharını keser.',
        sureSn: 180,
      },
      {
        baslik: 'Sıcak servis et',
        aciklama:
          'Sarmaları on dakika dinlendirip tabaklara al. Üzerine sarımsaklı yoğurt gezdir, tencerede kalan kızgın salçalı sostan birer kaşık damlatarak sun.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Pazı yaprağı asma yaprağından çok daha narindir; saniyeler içinde soldurup soğuk suya almak hem rengini korur hem sararken yırtılmasını önler.',
  },
  {
    id: 'zeytinyagli-pazi-sarmasi',
    baslik: 'Zeytinyağlı Pazı Sarması',
    altBaslik: 'Üzümlü fıstıklı iç pilavla sarılan pazılar; limonlu, soğuk servislik zeytinyağlı',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['fit', 'misafir'],
    emoji: '🌿',
    porsiyon: 5,
    hazirlikDk: 50,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 255,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3, 4],
    malzemeler: [
      { ad: 'pazı', miktar: 2, birim: 'demet', not: 'iri ve sağlam yapraklı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'yarısı suyu, yarısı servis için' },
      { ad: 'pirinç', miktar: 1, birim: 'su bardağı', grup: 'İç pilavı için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İç pilavı için', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'çay bardağı', grup: 'İç pilavı için' },
      { ad: 'çam fıstığı', miktar: 1, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı', grup: 'İç pilavı için' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'kuru nane', miktar: 1, birim: 'tatlı kaşığı', grup: 'İç pilavı için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'İç pilavı için' },
      { ad: 'dereotu', miktar: 0.5, birim: 'demet', grup: 'İç pilavı için', not: 'ince kıyılmış' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak; yarısı harca, yarısı pişirmeye' },
    ],
    adimlar: [
      {
        baslik: 'Pazıları soldur',
        aciklama:
          'Yaprakları saplarından ayırıp yıka, kaynar suya birkaç saniye daldırarak soldur ve soğuk suya al. Sapları kıyıp tencerenin tabanına yay; sarmalara hem yatak hem aroma olur.',
        sureSn: 720,
      },
      {
        baslik: 'Üzümlü iç pilavı pişir',
        aciklama:
          'Zeytinyağında soğanı tatlanana kadar kavur, fıstığı ekleyip renk aldır. Pirinci camsılaşana dek çevir; üzüm, şeker, baharat ve bir bardak sıcak suyla suyunu çekene kadar kısıkta pişir. Dereotunu ılıyınca karıştır.',
        sureSn: 900,
      },
      {
        baslik: 'Sarmaları parmak inceliğinde sar',
        aciklama:
          'Yaprağı düz zemine ser, kalın damarı incelt. Kenara bir tatlı kaşığı pilav koy, yanları kapatıp ince ve sıkı rulolar yap. Tencereye aralıksız diz; sıkı diziliş şekillerini korur.',
        sureSn: 1500,
      },
      {
        baslik: 'Limonlu suyla kısıkta pişir',
        aciklama:
          'Yarım limonun suyunu ve kalan sıcak suyu sarmalara gezdir, ters tabak kapat. Kısık ateşte pirinç tamamen yumuşayana kadar pişir; su erken biterse azar azar sıcak su ekle.',
        sureSn: 1800,
      },
      {
        baslik: 'Soğuk dinlendirip servis et',
        aciklama:
          'Tencerede oda sıcaklığına gelmesini bekle, ardından buzdolabında en az bir saat dinlendir. Limon dilimleri ve bir kaşık zeytinyağıyla soğuk olarak sun.',
        sureSn: 2700,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Dereotunu pilav sıcakken değil ılıdıktan sonra katmak rengini simsiyah olmaktan kurtarır; sarmanın içinde taptaze bahar kokusu bırakır.',
  },
  {
    id: 'firin-mantar-dolmasi',
    baslik: 'Fırında Peynirli Mantar Dolması',
    altBaslik: 'İri mantar şapkaları iki peynirli, maydanozlu harçla fırında altın rengine kavuşuyor',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🍄',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 235,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'mantar', miktar: 600, birim: 'g', not: 'iri, dolmalık boy' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'beyaz peynir', miktar: 150, birim: 'g', grup: 'İçi için', not: 'ezilmiş' },
      { ad: 'kaşar peyniri', miktar: 100, birim: 'g', grup: 'İçi için', not: 'rendelenmiş' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'İçi için', not: 'ezilmiş' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'İçi için', not: 'ince kıyılmış' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'İçi için' },
    ],
    adimlar: [
      {
        baslik: 'Mantarları ayıklayıp oy',
        aciklama:
          'Mantarları nemli bezle sil; yıkarsan su çeker ve fırında sulanır. Saplarını bükerek çıkar, şapkaların içini küçük kaşıkla hafifçe oy. Sapları ince ince kıy, harçta kullanacaksın.',
        sureSn: 600,
      },
      {
        baslik: 'Sapları soteleyip suyunu uçur',
        aciklama:
          'Bir yemek kaşığı zeytinyağında kıyılmış sapları ve sarımsağı yüksek ateşte, suyu tamamen çekilene kadar sotele. Bu adım atlanırsa harç fırında su salar.',
        sureSn: 300,
      },
      {
        baslik: 'Peynirli harcı karıştır',
        aciklama:
          'Soteyi ılıt; ezilmiş beyaz peynir, rendelenmiş kaşarın yarısı, maydanoz, pul biber, kekik ve karabiberle karıştır. Peynirler tuzlu olduğundan ekstra tuz eklemeden tadına bak.',
        sureSn: 240,
      },
      {
        baslik: 'Şapkaları doldur',
        aciklama:
          'Mantar şapkalarının dışını kalan zeytinyağıyla fırçala, yağlı kağıt serili tepsiye diz. Her şapkayı harçla tepeleme doldur, üzerlerine kalan kaşarı paylaştır.',
        sureSn: 900,
      },
      {
        baslik: 'Fırında kızarana dek pişir',
        aciklama:
          'Önceden ısıtılmış 190 derece fırında mantarlar yumuşayıp üzerleri altın rengi olana kadar pişir. Çıkar çıkmaz üzerine taze maydanoz serperek sıcak servis et.',
        sureSn: 1200,
      },
    ],
    pufNoktasi:
      'Mantar saplarını atmayıp suyunu uçurarak harca katmak dolmanın gövdesini oluşturur; hem israfı önler hem içi sulanmayan, yoğun bir dolgu verir.',
  },
  {
    id: 'etli-domates-dolmasi',
    baslik: 'Etli Domates Dolması',
    altBaslik: 'Olgun yaz domatesleri kıymalı pirinçli içle kendi suyunda pişiyor; kapakları da hazineli',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍅',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 350,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'domates', miktar: 8, birim: 'adet', not: 'iri, olgun ama sıkı' },
      { ad: 'kıyma', miktar: 250, birim: 'g', grup: 'İçi için' },
      { ad: 'pirinç', miktar: 0.5, birim: 'su bardağı', grup: 'İçi için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'İçi için', not: 'rendelenmiş' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'İçi için', not: 'ezilmiş' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'İçi için', not: 'ince kıyılmış' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'domates salçası', miktar: 1, birim: 'tatlı kaşığı', grup: 'Sosu için' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Domateslerin kapağını kesip oy',
        aciklama:
          'Domateslerin sap tarafından ince birer kapak kes, kapakları sakla. İçlerini tatlı kaşığıyla, kabuğu delmeden oy. Çıkan domates içini bıçaktan geçirip sos için ayır.',
        sureSn: 900,
      },
      {
        baslik: 'İç harcını hazırla',
        aciklama:
          'Kıymayı, pirinci, rendelenmiş soğanı, sarımsağı, maydanozu, zeytinyağını ve baharatları bir kapta yoğur. Oyulan domates içinden iki kaşık ekle; harç hafif cıvık olmalı ki pirinç kurumadan pişsin.',
        sureSn: 300,
      },
      {
        baslik: 'Domatesleri doldurup kapat',
        aciklama:
          'Harcı domateslere, üstte yarım parmak boşluk kalacak şekilde paylaştır. Kapaklarını kapatıp domatesleri derin bir tencereye ya da fırın kabına bitişik yerleştir.',
        sureSn: 900,
      },
      {
        baslik: 'Salçalı sosu hazırla',
        aciklama:
          'Ayırdığın domates içini salça, şeker, bir tutam tuz ve sıcak suyla karıştır. Sosu dolmaların arasına ve üzerine gezdir; şeker domatesin ekşisini dengeler.',
        sureSn: 180,
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Tencerenin kapağını kapat, önce orta ateşte kaynamaya getir; ardından kısık ateşte pirinç yumuşayana kadar pişir. Domatesler dağılmadan yumuşamalı, kaşıkla kontrol et.',
        sureSn: 1800,
      },
      {
        baslik: 'Sosuyla servis et',
        aciklama:
          'Dolmaları on dakika dinlendirip kepçeyle tabaklara al. Tencerede kalan kırmızı sosu üzerlerine gezdir; yanına bulgur pilavı yakışır.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Domatesi diri seçip içindeki oyuntuyu sos olarak geri kullanmak dolmayı kendi suyunda pişirir; dışarıdan gelen hiçbir aroma domatesin önüne geçmez.',
  },
  {
    id: 'firin-patates-dolmasi',
    baslik: 'Fırın Patates Dolması',
    altBaslik: 'Oyulmuş patatesler kıymalı harçla dolup kaşar şapkayla fırınlanıyor; çatalla dağılan doku',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🥔',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 55,
    zorluk: 'orta',
    kaloriPerPorsiyon: 455,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'patates', miktar: 8, birim: 'adet', not: 'orta boy, birbirine yakın irilikte' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'kıyma', miktar: 300, birim: 'g', grup: 'İçi için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'İçi için', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'İçi için', not: 'ezilmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'kaşar peyniri', miktar: 120, birim: 'g', grup: 'Üzeri için', not: 'rendelenmiş' },
      { ad: 'biber salçası', miktar: 1, birim: 'tatlı kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Patatesleri haşlayıp oy',
        aciklama:
          'Patatesleri kabuklarıyla, bıçak ucu zorlanarak girecek kıvama gelene kadar yarı haşla. Ilıyınca soy, tepelerinden kapak kesip içlerini kaşıkla çanak gibi oy. Oyuntuları köfte harcına saklayabilirsin.',
        sureSn: 1200,
      },
      {
        baslik: 'Kıymalı harcı pişir',
        aciklama:
          'Zeytinyağının yarısında soğanı kavur, kıymayı ekleyip suyunu çekene kadar yüksek ateşte çevir. Sarımsak, salça ve baharatları katıp iki dakika daha pişir; harcı ocaktan al.',
        sureSn: 600,
      },
      {
        baslik: 'Patatesleri doldur',
        aciklama:
          'Oyulmuş patateslerin içini ve dışını kalan yağla fırçala, fırın kabına diz. Kıymalı harcı tepeleme paylaştır, hafifçe bastır; üzerlerine rendelenmiş kaşarı yerleştir.',
        sureSn: 900,
      },
      {
        baslik: 'Salçalı sosu kaba dök',
        aciklama:
          'Biber salçasını sıcak suda ez, bir tutam tuzla karıştırıp patateslerin arasına, kabın tabanına dök. Sos fırında patatesin alt kısmını yumuşacık pişirir.',
        sureSn: 120,
      },
      {
        baslik: 'Fırında kızarana dek pişir',
        aciklama:
          'Önceden ısıtılmış 190 derece fırında, patatesler tamamen yumuşayıp kaşar kızarana kadar pişir. Çatal patatesin ortasına dirençsiz giriyorsa hazırdır.',
        sureSn: 1800,
      },
      {
        baslik: 'Sosuyla sıcak sun',
        aciklama:
          'Dolmaları beş dakika dinlendirip tabanda koyulaşan sostan kaşıklayarak tabaklara al. Üzerine pul biber serp, yanında mevsim salatasıyla servis et.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Patatesi çiğden değil yarı haşlanmış oymak hem işi kolaylaştırır hem fırın süresini kısaltır; çanak formu bozulmadan içi kremamsı pişer.',
  },
  {
    id: 'zeytinyagli-kabak-dolmasi',
    baslik: 'Zeytinyağlı Kabak Dolması',
    altBaslik: 'Taze kabaklar naneli bulgurlu içle dolup limonlu zeytinyağlı suda yumuşacık pişiyor',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['fit', 'meal-prep'],
    emoji: '🥒',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 265,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [5, 6, 7, 8],
    malzemeler: [
      { ad: 'kabak', miktar: 6, birim: 'adet', not: 'kısa ve kalınca' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'bulgur', miktar: 1, birim: 'su bardağı', grup: 'İçi için', not: 'pilavlık' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İçi için', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'çay bardağı', grup: 'İçi için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'kuru nane', miktar: 1, birim: 'tatlı kaşığı', grup: 'İçi için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'taze nane', miktar: 0.5, birim: 'demet', grup: 'İçi için', not: 'ince kıyılmış' },
      { ad: 'su', miktar: 2.5, birim: 'su bardağı', not: 'sıcak; bir bardağı harca, kalanı pişirmeye' },
    ],
    adimlar: [
      {
        baslik: 'Kabakları oy',
        aciklama:
          'Kabakları alacalı soyup ikiye böl, dolma oyacağıyla içlerini alt uçları delinmeyecek şekilde oy. Oyuntunun birkaç kaşığını kıyıp harca eklemek için ayır; kabuklar diri kalsın diye tuzlu suda beklet.',
        sureSn: 900,
      },
      {
        baslik: 'Bulgurlu harcı demle',
        aciklama:
          'Zeytinyağının yarısında soğanı yumuşat, salçayı kokusu çıkana dek çevir. Bulguru, ayırdığın kabak kıyımını, baharatları ve bir bardak sıcak suyu ekle; kapağı kapatıp suyu çekene kadar demlendir. Taze naneyi ılıyınca karıştır.',
        sureSn: 720,
      },
      {
        baslik: 'Kabakları doldur',
        aciklama:
          'Suda bekleyen kabakları süzüp harçla, üstte yarım parmak boşluk bırakarak doldur. Tencereye dik ya da hafif yatık, birbirine dayalı biçimde yerleştir.',
        sureSn: 900,
      },
      {
        baslik: 'Limonlu suda kısıkta pişir',
        aciklama:
          'Kalan zeytinyağını, limon suyunu ve kalan sıcak suyu dolmaların üzerine gezdir. Ters tabak kapatıp kısık ateşte kabaklar bıçakla kolayca delinene kadar pişir.',
        sureSn: 1800,
      },
      {
        baslik: 'Dinlendirip ılık servis et',
        aciklama:
          'Ocaktan alınca yarım saat kadar tencerede dinlendir. Zeytinyağlı kabak dolması ılık ya da soğuk sevilir; üzerine taze nane ve limon dilimiyle sun.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Oyulan kabak içini harca geri katmak hem israfı önler hem bulgura tatlımsı bir nem verir; dolma kuru değil sulu ve ipeksi olur.',
  },
  {
    id: 'etli-marul-sarmasi',
    baslik: 'Etli Marul Sarması',
    altBaslik: 'Haşlanmış marul yapraklarına sarılan kıymalı iç, limonlu hafif sosla servis edilir',
    kategori: 'ana-yemek',
    koleksiyonlar: ['fit', 'yeni-nesil'],
    emoji: '🥗',
    porsiyon: 4,
    hazirlikDk: 35,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'marul', miktar: 2, birim: 'adet', not: 'geniş ve sağlam yapraklı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'kıyma', miktar: 300, birim: 'g', grup: 'İçi için' },
      { ad: 'pirinç', miktar: 0.5, birim: 'su bardağı', grup: 'İçi için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'İçi için', not: 'rendelenmiş' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'dereotu', miktar: 0.5, birim: 'demet', grup: 'İçi için', not: 'ince kıyılmış' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Marul yapraklarını soldur',
        aciklama:
          'Marulların dış yapraklarını tek tek ayırıp yıka. Kaynayan tuzlu suya yaprakları üçer beşer daldırıp birkaç saniyede maşayla çıkar, soğuk suya al. Yapraklar sararken kırılmayacak esnekliğe gelmeli.',
        sureSn: 720,
      },
      {
        baslik: 'Kıymalı harcı yoğur',
        aciklama:
          'Kıymayı, pirinci, rendelenmiş soğanı, zeytinyağını, dereotunun yarısını ve baharatları bir kapta iyice yoğur. Dereotu marulun tazeliğiyle kimyonun sıcaklığını birbirine bağlar.',
        sureSn: 300,
      },
      {
        baslik: 'Yaprakları sarıp tencereye diz',
        aciklama:
          'Her yaprağın kalın damarını incelt, kenarına bir tatlı kaşığı harç koy ve yanlarını kapatarak gevşekçe sar. Küçük yaprakları ikişer ikişer üst üste kullanabilirsin. Tencerenin tabanına artan yaprakları döşeyip sarmaları sık diz.',
        sureSn: 1500,
      },
      {
        baslik: 'Limonlu suda kısıkta pişir',
        aciklama:
          'Tereyağını eritip limon suyu ve sıcak suyla karıştır, sarmaların üzerine dök. Ters tabak kapat, kapağı ört ve kısık ateşte pirinç yumuşayana kadar pişir.',
        sureSn: 1800,
      },
      {
        baslik: 'Dereotuyla sıcak sun',
        aciklama:
          'Sarmaları on dakika dinlendirip tabağa al, tenceredeki limonlu sostan üzerine gezdir. Kalan dereotunu serperek sıcak servis et; sarımsaklı yoğurt da çok yakışır.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Marul yaprağı pazıdan bile naziktir; haşlama değil saniyelik soldurma yeter. Böylece sarma pişince yaprak erimeden, hafif tatlımsı yeşil tadını korur.',
  },
  {
    id: 'elma-dolmasi',
    baslik: 'Osmanlı Usulü Elma Dolması',
    altBaslik: 'Ekşi elmalar tarçınlı kıymalı içle dolup balla fırınlanıyor; saray esintili',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli', 'misafir'],
    emoji: '🍎',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 380,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [9, 10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'elma', miktar: 8, birim: 'adet', not: 'iri, ekşimsi ve sert' },
      { ad: 'kıyma', miktar: 250, birim: 'g', grup: 'İçi için' },
      { ad: 'pirinç', miktar: 0.5, birim: 'su bardağı', grup: 'İçi için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'İçi için', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'çam fıstığı', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'yenibahar', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'bal', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', grup: 'Sosu için', not: 'suyu sıkılmış' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Elmaların içini oy',
        aciklama:
          'Elmaların sap tarafından birer kapak kes; içlerini çekirdek yuvasıyla birlikte, çeperde yarım parmak et kalacak şekilde kaşıkla oy. Kararmamaları için oyulanları limonlu suda beklet.',
        sureSn: 900,
      },
      {
        baslik: 'Baharatlı iç harcını pişir',
        aciklama:
          'Zeytinyağında soğanı yumuşat, fıstığı pembeleştir. Kıymayı ekleyip rengini dönene kadar çevir; pirinci, üzümü, tarçını, yenibaharı, tuzu ve yarım bardak su ekleyip suyu çekilene dek pişir. Harç yarı pişmiş kalmalı.',
        sureSn: 720,
      },
      {
        baslik: 'Elmaları doldurup kapat',
        aciklama:
          'Elmaları süzüp içlerini harçla doldur, kestiğin kapakları yerine oturt. Dolmaları derin bir fırın kabına, birbirine yaslanacak biçimde yerleştir.',
        sureSn: 900,
      },
      {
        baslik: 'Ballı sosu gezdir',
        aciklama:
          'Balı, limon suyunu ve sıcak suyu çırparak karıştır; sosun yarısını elmaların üzerine, kalanını kabın tabanına dök. Bal fırında karamelize olup elmaya parlak bir kabuk verir.',
        sureSn: 120,
      },
      {
        baslik: 'Fırında yumuşayana dek pişir',
        aciklama:
          'Önceden ısıtılmış 180 derece fırında, elmalar bıçak ucuyla kolayca delinip üzerleri parlayana kadar pişir. Ara ara tabandaki sostan üzerlerine gezdir.',
        sureSn: 2100,
      },
      {
        baslik: 'Dinlendirip sosuyla sun',
        aciklama:
          'Fırından çıkan dolmaları on dakika dinlendir. Tabaklara alıp koyulaşan ballı sostan gezdir, üzerine bir fiske tarçın serperek sıcak servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Elmanın ekşi olması şart; tatlı elma fırında dağılıp şekere döner. Ekşi elmanın buruk yanı, tarçınlı etli içle saray mutfağının aradığı tatlı-tuzlu dengeyi kurar.',
  },
  {
    id: 'ayva-dolmasi',
    baslik: 'Etli Ayva Dolması',
    altBaslik: 'Kış ayvası kıymalı iç ve pekmezli sosla buluşuyor; Osmanlı mutfağının unutulmuş inceliği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli', 'misafir'],
    emoji: '🍐',
    porsiyon: 4,
    hazirlikDk: 35,
    pisirmeDk: 55,
    zorluk: 'orta',
    kaloriPerPorsiyon: 400,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1],
    malzemeler: [
      { ad: 'ayva', miktar: 4, birim: 'adet', not: 'iri ve sert' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'yarısı bekletme suyuna' },
      { ad: 'kıyma', miktar: 300, birim: 'g', grup: 'İçi için' },
      { ad: 'pirinç', miktar: 0.5, birim: 'su bardağı', grup: 'İçi için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'İçi için', not: 'ince doğranmış' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'yenibahar', miktar: 0.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'pekmez', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Ayvaları ikiye bölüp oy',
        aciklama:
          'Ayvaları tüylerinden ovarak yıka, boyuna ikiye böl. Çekirdek yuvalarını kaşıkla genişleterek birer çanak oluştur; oyduğun ayva etinden birkaç kaşığı rendeleyip harca ayır. Yarımları limonlu suda beklet.',
        sureSn: 1200,
      },
      {
        baslik: 'İç harcını hazırla',
        aciklama:
          'Tereyağında soğanı yumuşat, kıymayı suyunu çekene dek kavur. Pirinci, rendelenmiş ayvayı, üzümü ve baharatları katıp iki dakika çevir; yarım bardak su ekleyip suyu çekilince ocaktan al.',
        sureSn: 720,
      },
      {
        baslik: 'Ayva çanaklarını doldur',
        aciklama:
          'Ayva yarımlarını süzüp derin bir fırın kabına diz. Harcı çanaklara tepeleme paylaştır ve kaşık sırtıyla bastırarak yuvarlak bir kubbe ver.',
        sureSn: 900,
      },
      {
        baslik: 'Pekmezli sosu dök',
        aciklama:
          'Pekmezi sıcak suda çırparak ez, kalan yarım limonun suyunu ekle ve sosu dolmaların kenarından kaba dök. Pekmez pişerken ayvanın rengini kızıla çevirir.',
        sureSn: 120,
      },
      {
        baslik: 'Kapalı fırında yumuşayana dek pişir',
        aciklama:
          'Kabın üzerini örtüp önceden ısıtılmış 180 derece fırında ayvalar yumuşayana kadar pişir. Son on dakika örtüyü alıp üstlerinin hafifçe kızarmasını sağla; ara ara sostan gezdir.',
        sureSn: 2700,
      },
      {
        baslik: 'Kızıl sosuyla servis et',
        aciklama:
          'Dolmaları on dakika dinlendir; her tabağa bir yarım koyup koyulaşan pekmezli sostan gezdir. Ayvanın mayhoşluğu ve etin tuzu birlikte sunulunca tamamlanır.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Rendelediğin ayvayı harca katmak dolmanın kimliğini belirler: et pişerken ayvanın mayhoş kokusunu içine çeker, meyve ile kıyma iki ayrı katman gibi durmaz.',
  },
  {
    id: 'misir-unlu-lahana-dolmasi',
    baslik: 'Mısır Unlu Lahana Dolması',
    altBaslik: 'Karadeniz esintili etsiz sarma: mısır unlu pirinçli iç, pul biberli sosla',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['fit', '101'],
    emoji: '🌽',
    porsiyon: 4,
    hazirlikDk: 40,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 290,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'beyaz lahana', miktar: 1, birim: 'adet', not: 'orta boy' },
      { ad: 'mısır unu', miktar: 1, birim: 'su bardağı', grup: 'İçi için' },
      { ad: 'pirinç', miktar: 0.5, birim: 'su bardağı', grup: 'İçi için', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', grup: 'İçi için', not: 'ince doğranmış' },
      { ad: 'taze soğan', miktar: 3, birim: 'adet', grup: 'İçi için', not: 'yeşiliyle kıyılmış' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'çay bardağı', grup: 'İçi için' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'İçi için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'tuz', miktar: 2, birim: 'çay kaşığı', grup: 'İçi için' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'İçi için', not: 'ince kıyılmış' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak; bir bardağı harca, kalanı pişirmeye' },
    ],
    adimlar: [
      {
        baslik: 'Lahanayı haşlayıp yaprakla',
        aciklama:
          'Lahananın göbeğini oyup bütün halde kaynar tuzlu suya daldır. Yumuşayan dış yaprakları maşayla ayırarak soğuk suya al; kalın damarların sırtını bıçakla incelt. Kalan iç yaprakları kıyıp tencere tabanına ser.',
        sureSn: 900,
      },
      {
        baslik: 'Mısır unlu harcı karıştır',
        aciklama:
          'Zeytinyağının yarısında soğanı yumuşat, salçayı çevir ve ocaktan al. Mısır ununu, pirinci, taze soğanı, maydanozu, baharatları ve bir bardak sıcak suyu ekleyip lapamsı bir harç elde et; mısır unu suyu hızla çeker, gerekirse azıcık daha su kat.',
        sureSn: 600,
      },
      {
        baslik: 'Dolmaları bohça gibi sar',
        aciklama:
          'Yaprakları avuç büyüklüğünde parçalara böl, ortalarına birer yemek kaşığı harç koy ve Karadeniz usulü gevşek bohçalar halinde katla. Katlanan yüzleri alta gelecek şekilde tencereye sık diz.',
        sureSn: 1500,
      },
      {
        baslik: 'Pul biberli yağı gezdirip pişir',
        aciklama:
          'Kalan zeytinyağını küçük tavada ısıt, pul biberi alıp hemen dolmaların üzerine gezdir. Kalan sıcak suyu kenardan ekle, ters tabak kapat ve kısık ateşte mısır unu tatlanıp yapraklar iyice yumuşayana kadar pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Suyuyla sıcak servis et',
        aciklama:
          'Dolmaları on beş dakika dinlendir; kepçeyle, tabanda koyulaşan mısır kokulu suyundan da alarak derin tabaklara paylaştır. Karadeniz sofrasındaki gibi kaşıkla, sulu sulu ye.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Mısır ununu kavurmadan, sıcak suyla lapa kıvamına getirip kullanmak bu dolmanın sırrı: pişerken yaprakların arasına hafifçe sızar ve sosu kendiliğinden koyulaştırır.',
  },
];
