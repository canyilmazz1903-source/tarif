import type { Tarif } from '@/types/tarif';

// Yeni nesil brunch paketi — modern kahvaltılıklar ve doyurucu bowl'lar.
// Tüm tarifler özgün metinle yazılmıştır; ölçüler ev mutfağında denenmiş oranlardır.
export const MODERN_BRUNCH: Tarif[] = [
  // ---------------------------------------------------------------
  // KAHVALTILIKLAR
  // ---------------------------------------------------------------
  {
    id: 'cilbir-modern',
    baslik: 'Modern Çılbır',
    altBaslik: 'Sarımsaklı süzme yoğurt üzerinde poşe yumurta, kızgın tereyağlı pul biber sosuyla',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['yeni-nesil', '15-dakika'],
    emoji: '🍳',
    porsiyon: 1,
    hazirlikDk: 5,
    pisirmeDk: 8,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 380,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yumurta', miktar: 2, birim: 'adet', not: 'mümkünse günlük ve soğuk' },
      { ad: 'süzme yoğurt', miktar: 200, birim: 'g', not: 'oda sıcaklığında' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş', not: 'rendelenmiş' },
      { ad: 'sirke', miktar: 2, birim: 'yemek kaşığı', not: 'poşe suyu için' },
      { ad: 'tereyağı', miktar: 20, birim: 'g' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Yoğurt tabanını hazırla',
        aciklama:
          'Süzme yoğurdu rendelenmiş sarımsak ve tuzla pürüzsüz olana dek çırp. Servis tabağının ortasına yayıp kaşığın sırtıyla hafif bir çukur aç.',
      },
      {
        baslik: 'Yumurtaları poşe et',
        aciklama:
          'Geniş bir tencerede suyu kaynama noktasının hemen altına getir, sirkeyi ekle. Yumurtaları teker teker küçük bir kaseye kırıp suyun kenarından yavaşça bırak. Beyazı toparlanıp sarısı akışkan kalana dek pişir.',
        sureSn: 210,
      },
      {
        baslik: 'Tereyağlı sosu kızdır',
        aciklama:
          'Küçük bir tavada tereyağını köpürene kadar erit, ocaktan alıp pul biberi ekle ve tavayı çevirerek rengini bırakmasını sağla. Biber yanmadan hemen kullan.',
        sureSn: 60,
      },
      {
        baslik: 'Tabağı topla ve servis et',
        aciklama:
          'Poşe yumurtaları delikli kepçeyle alıp suyunu süzdür, yoğurdun ortasındaki çukura yerleştir. Üzerine kızgın pul biberli tereyağını gezdirip hemen sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Poşe suyu asla fokurdamasın; kaynayan su yumurtayı dağıtır. Yumurtayı önce ince süzgeçten geçirip gevşek beyazını akıtırsan çok daha derli toplu bir poşe elde edersin.',
  },
  {
    id: 'avokadolu-yumurtali-tost',
    baslik: 'Avokadolu Yumurtalı Tost',
    altBaslik: 'Limonlu avokado ezmesi ve üzerinde göz yumurta ile kafe usulü kızarmış ekmek',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['yeni-nesil', '15-dakika'],
    emoji: '🥑',
    porsiyon: 1,
    hazirlikDk: 5,
    pisirmeDk: 8,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'ekmek', miktar: 2, birim: 'dilim', not: 'kalın kesilmiş' },
      { ad: 'avokado', miktar: 1, birim: 'adet', not: 'iyi olgunlaşmış' },
      { ad: 'yumurta', miktar: 1, birim: 'adet' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Ekmekleri kızart',
        aciklama:
          'Ekmek dilimlerini kuru tavada ya da tost makinesinde iki yüzü de altın rengi alana kadar kızart. Dış yüzeyi çıtır, içi yumuşak kalmalı.',
        sureSn: 180,
      },
      {
        baslik: 'Avokado ezmesini yap',
        aciklama:
          'Avokadoyu ikiye bölüp çekirdeğini çıkar, kaşıkla kabuğundan sıyır. Limon suyu, tuz ve karabiberle çatal yardımıyla ez; ufak parçalı, kaba bir doku bırak.',
      },
      {
        baslik: 'Göz yumurtayı pişir',
        aciklama:
          'Zeytinyağını tavada orta ateşte ısıt, yumurtayı kır. Beyazı tamamen pişip sarısı akışkan kalana kadar kapaksız pişir.',
        sureSn: 180,
      },
      {
        baslik: 'Tostu birleştir',
        aciklama:
          'Sıcak ekmeklerin üzerine avokado ezmesini kalın bir kat halinde yay, göz yumurtayı üstüne kaydır. Pul biber serpip bekletmeden servis et.',
      },
    ],
    pufNoktasi:
      'Avokadoyu blenderdan geçirme; çatalla kabaca ezilen avokado tostta hem doku hem hacim bırakır. Limonu ezme aşamasında eklersen kararmayı da geciktirirsin.',
  },
  {
    id: 'kabarik-amerikan-pancake',
    baslik: 'Kabarık Amerikan Pancake',
    altBaslik: 'Klasik oranla hazırlanan puf puf pancake; üzerine bal ve tereyağı ile',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🥞',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'un', miktar: 1, birim: 'su bardağı', not: 'elenmiş' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı', not: 'oda sıcaklığında' },
      { ad: 'yumurta', miktar: 1, birim: 'adet' },
      { ad: 'toz şeker', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'kabartma tozu', miktar: 2, birim: 'çay kaşığı' },
      { ad: 'tereyağı', miktar: 25, birim: 'g', not: '15 g eritilmiş hamura, kalanı servise' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
      { ad: 'bal', miktar: 2, birim: 'yemek kaşığı', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Kuru malzemeleri karıştır',
        aciklama:
          'Un, şeker, kabartma tozu ve tuzu geniş bir kapta tel çırpıcıyla harmanla. Kabartma tozunun una eşit dağılması pancake yüzeyinin düzgün kabarmasını sağlar.',
      },
      {
        baslik: 'Hamuru hazırla',
        aciklama:
          'Ayrı bir kapta yumurta ile sütü çırp, eritilmiş tereyağını ekle. Sıvıyı kuru karışımın üzerine döküp sadece un görünmeyene kadar karıştır; ufak topaklar kalsın.',
      },
      {
        baslik: 'Hamuru dinlendir',
        aciklama:
          'Hamuru tezgahta dinlenmeye bırak. Bu kısa bekleme unun sıvıyı çekmesini ve pancake dokusunun yumuşamasını sağlar.',
        sureSn: 300,
        beklemeAdimi: true,
      },
      {
        baslik: 'Pancake yüzlerini pişir',
        aciklama:
          'Yapışmaz tavayı orta-kısık ateşte ısıt, bir kepçe hamur dök. Yüzeyde baloncuklar belirip kenarlar matlaşınca çevir; her yüzü yaklaşık iki dakika pişir. Aynı işlemi kalan hamurla tekrarla.',
        sureSn: 120,
      },
      {
        baslik: 'Servis tabağını hazırla',
        aciklama:
          'Pancake dilimlerini üst üste diz, tepesine kalan tereyağından bir parça koy ve balı sıcakken üzerinden gezdir.',
      },
    ],
    pufNoktasi:
      'Hamuru fazla karıştırma; topaklı görünen hamur en kabarık pancake hamurudur. Tavayı da yağlama, kuru ve iyi ısınmış yüzey lekesiz altın rengi verir.',
  },
  {
    id: 'tarcinli-fransiz-tostu',
    baslik: 'Tarçınlı Fransız Tostu',
    altBaslik: 'Sütlü yumurtaya batırılan dilimler tereyağında kızarır; bal ve çilekle taçlanır',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['yeni-nesil', '15-dakika'],
    emoji: '🍞',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 410,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: false,
    mevsimAylari: [4, 5, 6],
    malzemeler: [
      { ad: 'ekmek', miktar: 4, birim: 'dilim', not: 'bir gün bekleyen ekmek idealdir' },
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'süt', miktar: 1, birim: 'çay bardağı' },
      { ad: 'toz şeker', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tarçın', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tereyağı', miktar: 20, birim: 'g' },
      { ad: 'bal', miktar: 2, birim: 'yemek kaşığı', not: 'servis için' },
      { ad: 'çilek', miktar: 100, birim: 'g', not: 'servis için, dilimlenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Yumurtalı karışımı çırp',
        aciklama:
          'Derin ve geniş bir kapta yumurta, süt, şeker ve tarçını homojen olana dek çırp. Kap, ekmek diliminin yatarak sığacağı genişlikte olsun.',
      },
      {
        baslik: 'Dilimleri karışıma batır',
        aciklama:
          'Her ekmek dilimini karışımda çevirerek iki yüzünü de ıslat. Dilim karışımı emsin ama dağılacak kadar bekletme; birkaç saniye yeterli.',
      },
      {
        baslik: 'Tereyağında kızart',
        aciklama:
          'Tereyağını orta ateşte köpürene kadar erit. Dilimleri tavaya al, her yüzünü altın kahve renk alana kadar pişir. Gerekirse iki parti halinde kızart.',
        sureSn: 240,
      },
      {
        baslik: 'Süsleyip servis et',
        aciklama:
          'Sıcak dilimleri tabağa aktar, üzerine bal gezdir ve dilimlenmiş çileklerle kapat. Dilersen üstüne bir tutam tarçın daha serp.',
      },
    ],
    pufNoktasi:
      'Taze ekmek karışımda çabuk dağılır; bir gün beklemiş ekmek sıvıyı sünger gibi çeker ve içi muhallebi kıvamında pişer. Ateşi yükseltme, dışı yanmadan içi pişsin.',
  },
  {
    id: 'krem-peynirli-bazlama-tost',
    baslik: 'Krem Peynirli Bazlama Tost',
    altBaslik: 'Sıcak sandviç ekmeğinin içine krem peynir ve kremamsı sıvı yumurta dolgusu',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['yeni-nesil', '15-dakika'],
    emoji: '🥪',
    porsiyon: 1,
    hazirlikDk: 5,
    pisirmeDk: 6,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 450,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'sandviç ekmeği', miktar: 1, birim: 'adet', not: 'bazlama tipi, yassı' },
      { ad: 'yumurta', miktar: 2, birim: 'adet' },
      { ad: 'krem peynir', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'tereyağı', miktar: 15, birim: 'g' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Ekmeği ısıtıp cebini aç',
        aciklama:
          'Sandviç ekmeğini kuru tavada iki yüzü de hafif kızarana kadar çevirerek ısıt. Kenarından bıçakla keserek içine dolgu koyabileceğin bir cep aç.',
        sureSn: 120,
      },
      {
        baslik: 'Sıvı kıvamlı yumurtayı pişir',
        aciklama:
          'Tereyağını kısık ateşte erit, çırpılmış ve tuzlanmış yumurtaları dök. Spatulayla sürekli karıştırarak parlak ve hafif akışkan bir kıvamda ocaktan al; yumurta tavada pişmeye devam eder.',
        sureSn: 120,
      },
      {
        baslik: 'Krem peyniri ekle',
        aciklama:
          'Ocaktan aldığın sıcak yumurtanın içine krem peyniri koy ve iki üç hamlede karıştır. Peynirin tamamen erimesine izin verme; kremamsı damarlar kalsın.',
      },
      {
        baslik: 'Doldurup servis et',
        aciklama:
          'Karışımı sıcak ekmeğin cebine bolca doldur, üzerine pul biber serp. Akışkan dolgu soğumadan hemen servis et.',
      },
    ],
    pufNoktasi:
      'Yumurtayı tam pişmeden ocaktan almak bu tostun bütün sırrı; kalan ısı kıvamı tamamlar. Krem peynir soğuk girerse pişmeyi de yavaşlatıp kremamsı dokuyu korur.',
  },
  {
    id: 'firinda-yumurtali-avokado',
    baslik: 'Fırında Yumurtalı Avokado',
    altBaslik: 'Çekirdek yuvasına kırılan yumurtayla fırınlanan avokado; pratik ve doyurucu',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🥑',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 300,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'avokado', miktar: 1, birim: 'adet', not: 'iri ve sıkı olgunlukta' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', not: 'küçük boy idealdir' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Avokadoyu hazırla',
        aciklama:
          'Fırını 180 dereceye ısıt. Avokadoyu uzunlamasına ikiye böl, çekirdeğini çıkar. Yumurtanın sığması için çekirdek yuvasını kaşıkla bir miktar genişlet.',
      },
      {
        baslik: 'Yumurtaları yuvaya kır',
        aciklama:
          'Avokado yarımlarını küçük bir fırın kabına, sallanmayacak şekilde yerleştir. Her yuvaya bir yumurta kır; taşarsa beyazın bir kısmını dışarıda bırakabilirsin. Tuz ve karabiber serp.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama:
          'Kabı fırının orta rafına ver. Yumurta beyazı tutup sarısı hafif akışkan kalana kadar pişir; süre fırına göre birkaç dakika değişebilir.',
        sureSn: 900,
      },
      {
        baslik: 'Tamamlayıp servis et',
        aciklama:
          'Fırından çıkan avokadoların üzerine zeytinyağı gezdir ve pul biber serp. Kaşıkla kabuğundan yenecek şekilde sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Avokado yarımlarının altından ince bir dilim keserek düz bir taban oluşturursan fırında devrilip yumurtanın akmasını önlersin. Fazla olgun avokado fırında acılaşır; sıkı olanı seç.',
  },
  {
    id: 'muzlu-fistik-ezmeli-gece-yulafi',
    baslik: 'Muzlu Fıstık Ezmeli Gece Yulafı',
    altBaslik: 'Akşamdan hazırlanan overnight oats; sabah kaşıklamaya hazır, pişirme yok',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🥣',
    porsiyon: 1,
    hazirlikDk: 5,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 460,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'yulaf ezmesi', miktar: 0.5, birim: 'su bardağı' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı' },
      { ad: 'muz', miktar: 1, birim: 'adet', not: 'yarısı ezilecek, yarısı dilim' },
      { ad: 'yer fıstığı ezmesi', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'bal', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tarçın', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Tabanı karıştır',
        aciklama:
          'Kapaklı bir kavanozda yulaf ezmesi, süt, bal ve tarçını karıştır. Muzun yarısını çatalla ezip karışıma kat; ezilmiş muz tatlılığı ve kıvamı doğal yoldan verir.',
      },
      {
        baslik: 'Buzdolabında beklet',
        aciklama:
          'Kavanozun kapağını kapat ve buzdolabına kaldır. Gece boyunca yulaf sütü çekerek kaşıkla yenecek, muhallebi kıvamında bir tabana dönüşür.',
        sureSn: 28800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Sabah süsleyip servis et',
        aciklama:
          'Kavanozu çıkarıp bir kez karıştır; kıvam koyuysa bir iki kaşık süt ekleyebilirsin. Üzerine kalan muzu dilimleyerek diz, yer fıstığı ezmesini gezdir ve soğuk servis et.',
      },
    ],
    pufNoktasi:
      'Fıstık ezmesini geceden karıştırmak yerine sabah üzerine gezdirmek dokuyu katmanlı tutar. Kıvamı sevmezsen yulaf-süt oranını değil bekleme süresini değiştir; en az sekiz saat ideal.',
  },

  // ---------------------------------------------------------------
  // BOWL & SALATALAR
  // ---------------------------------------------------------------
  {
    id: 'akdeniz-usulu-protein-bowl',
    baslik: 'Akdeniz Usulü Protein Bowl',
    altBaslik: 'Izgara tavuk, haşlanmış nohut ve taze sebzeler limonlu zeytinyağı sosla buluşuyor',
    kategori: 'salata',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🥗',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 250, birim: 'g', not: 'kuşbaşından iri doğranmış' },
      { ad: 'nohut', miktar: 1, birim: 'su bardağı', not: 'haşlanmış ve süzülmüş' },
      { ad: 'marul', miktar: 0.5, birim: 'adet', not: 'yaprakları iri kıyılmış' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'salatalık', miktar: 1, birim: 'adet', not: 'yarım ay doğranmış' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı', not: '1 kaşığı tavuğu pişirmek için' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Tavuğu baharatla harmanla',
        aciklama:
          'Doğranmış tavuğu kimyon, kekik, tuzun yarısı ve karabiberle bir kapta harmanla. Baharatın etin yüzeyini sarması için birkaç dakika tezgahta beklet.',
      },
      {
        baslik: 'Tavukları mühürleyerek pişir',
        aciklama:
          'Bir yemek kaşığı zeytinyağını geniş tavada iyice kızdır. Tavukları tek kat halinde yay ve her yüzü kızarana, içi tam pişene kadar arada çevirerek pişir.',
        sureSn: 480,
      },
      {
        baslik: 'Sebzeleri kaselere yerleştir',
        aciklama:
          'İki geniş kaseye önce marulu, sonra bölgeler halinde nohut, domates ve salatalığı yerleştir. Renkleri karıştırmadan yan yana dizmek bowl görünümünü verir.',
      },
      {
        baslik: 'Sosla ve tavukla tamamla',
        aciklama:
          'Kalan zeytinyağını limon suyu ve kalan tuzla çırparak sosu hazırla. Sıcak tavukları kaselerin ortasına paylaştır, sosu üzerinde gezdirip servis et.',
      },
    ],
    pufNoktasi:
      'Tavuğu tavaya kalabalık koyma; parçalar üst üste binerse mühürlenmek yerine suyunu salıp haşlanır. İki partide pişirmek kızarık ve sulu sonuç verir.',
  },
  {
    id: 'ton-balikli-bowl',
    baslik: 'Ton Balıklı Bowl',
    altBaslik: 'Pişirme gerektirmeyen ferah bir kase: ton balığı, mısır, zeytin ve taze yeşillik',
    kategori: 'salata',
    koleksiyonlar: ['yeni-nesil', '15-dakika'],
    emoji: '🐟',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 390,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'ton balığı (konserve)', miktar: 160, birim: 'g', not: 'yağı iyice süzülmüş' },
      { ad: 'mısır (konserve)', miktar: 0.5, birim: 'su bardağı', not: 'süzülmüş' },
      { ad: 'marul', miktar: 0.5, birim: 'adet', not: 'iri kıyılmış' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'salatalık', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'zeytin', miktar: 50, birim: 'g', not: 'çekirdeksiz' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri doğra',
        aciklama:
          'Marulu iri parçalar halinde kıy, domates ve salatalığı küp doğra. Mısırı ve zeytinleri süzüp hazırla; kasede her malzeme ayrı bölge oluşturacak.',
      },
      {
        baslik: 'Kaseleri katmanla',
        aciklama:
          'İki kasenin tabanına marulu yay. Üzerine domates, salatalık, mısır ve zeytini ayrı köşelere yerleştir; ortada ton balığı için boşluk bırak.',
      },
      {
        baslik: 'Ton balığını yerleştir',
        aciklama:
          'Suyu iyice süzülmüş ton balığını çatalla iri parçalara ayır ve kaselerin ortasına paylaştır. Balığı fazla dağıtma; iri parçalar hem görünüm hem doku kazandırır.',
      },
      {
        baslik: 'Sosu gezdirip servis et',
        aciklama:
          'Zeytinyağı, limon suyu, tuz ve karabiberi küçük bir kavanozda çalkalayarak sos yap. Servisten hemen önce kaselere gezdir ve soğuk servis et.',
      },
    ],
    pufNoktasi:
      'Ton balığının yağını süzdükten sonra kağıt havluyla hafifçe kurulamak sosun balığa tutunmasını sağlar; aksi halde konserve yağı limonlu sosun tadını bastırır.',
  },
  {
    id: 'tavuklu-sezar-salata',
    baslik: 'Tavuklu Sezar Salata',
    altBaslik: 'Çıtır ev krutonu, ızgara tavuk ve parmesanlı klasik sezar sosla doyurucu salata',
    kategori: 'salata',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🥗',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 520,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 250, birim: 'g', not: 'uzun şeritler halinde' },
      { ad: 'marul', miktar: 0.5, birim: 'adet', not: 'göbek kısmı, iri kıyılmış' },
      { ad: 'ekmek', miktar: 2, birim: 'dilim', not: 'küp doğranmış, kruton için' },
      { ad: 'parmesan', miktar: 3, birim: 'yemek kaşığı', not: 'rendelenmiş' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'mayonez', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'hardal', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', grup: 'Sosu için', not: 'suyu sıkılmış' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş', grup: 'Sosu için', not: 'rendelenmiş' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Krutonları kızart',
        aciklama:
          'Küp doğranmış ekmekleri bir kaşık zeytinyağıyla harmanla ve kuru tavada arada çevirerek her yüzü çıtırlaşana kadar kızart. Kenara alıp soğumaya bırak.',
        sureSn: 180,
      },
      {
        baslik: 'Tavukları pişir',
        aciklama:
          'Tavuk şeritlerini tuzun yarısı ve karabiberle ov. Kalan zeytinyağını kızdırdığın tavada şeritleri iki yüzü de kızarıp içi pişene kadar pişir, dinlenmeye al.',
        sureSn: 480,
      },
      {
        baslik: 'Sezar sosunu çırp',
        aciklama:
          'Mayonez, hardal, limon suyu, rendelenmiş sarımsak ve parmesanın bir kaşığını küçük bir kapta pürüzsüz olana kadar çırp. Kıvam koyuysa bir kaşık su ekle.',
      },
      {
        baslik: 'Salatayı birleştir',
        aciklama:
          'Marulu geniş bir kapta sosun büyük kısmıyla harmanla. Servis kaselerine al; üzerine tavuk şeritlerini ve krutonları diz, kalan sos ile parmesanı serperek servis et.',
      },
    ],
    pufNoktasi:
      'Sosu marula servisten hemen önce karıştır; erken soslanan marul dakikalar içinde yumuşayıp çıtırlığını kaybeder. Tavuğu dinlendirmeden kesme, suyu tabağa akar.',
  },
  {
    id: 'bulgurlu-buda-bowl',
    baslik: 'Bulgurlu Buda Bowl',
    altBaslik: 'Kinoa yerine bulgurla kurulan yerli buda bowl; renkli sebzeler ve tahinli sosla',
    kategori: 'salata',
    koleksiyonlar: ['yeni-nesil'],
    emoji: '🥣',
    porsiyon: 2,
    hazirlikDk: 15,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: ['vegan', 'vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'bulgur', miktar: 1, birim: 'su bardağı', not: 'pilavlık' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'bulgurun haşlanması için' },
      { ad: 'nohut', miktar: 1, birim: 'su bardağı', not: 'haşlanmış ve süzülmüş' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'ince rendelenmiş' },
      { ad: 'salatalık', miktar: 1, birim: 'adet', not: 'yarım ay doğranmış' },
      { ad: 'domates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tahin', miktar: 2, birim: 'yemek kaşığı', grup: 'Tahin sosu için' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', grup: 'Tahin sosu için', not: 'suyu sıkılmış' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş', grup: 'Tahin sosu için', not: 'rendelenmiş' },
      { ad: 'su', miktar: 3, birim: 'yemek kaşığı', grup: 'Tahin sosu için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Bulguru haşlayıp demlendir',
        aciklama:
          'Bulguru tencerede zeytinyağıyla bir dakika çevir, iki su bardağı sıcak su ve tuzun yarısını ekle. Kısık ateşte suyunu çekene kadar pişir, kapağını kapatıp demlenmeye bırak.',
        sureSn: 600,
      },
      {
        baslik: 'Sebzeleri hazırla',
        aciklama:
          'Bulgur demlenirken havucu rendele, salatalığı yarım ay, domatesi küp doğra. Haşlanmış nohudu süzüp kalan tuzla harmanla.',
      },
      {
        baslik: 'Tahin sosunu aç',
        aciklama:
          'Tahini limon suyu ve rendelenmiş sarımsakla karıştır; karışım önce katılaşır, telaşlanma. Suyu kaşık kaşık ekleyerek akışkan, krema kıvamında bir sos elde et.',
      },
      {
        baslik: 'Bowlu kur ve servis et',
        aciklama:
          'İki kasenin tabanına ılık bulguru yay. Üzerine nohut, havuç, salatalık ve domatesi ayrı bölgeler halinde diz. Tahin sosu gezdir, pul biber serperek servis et.',
      },
    ],
    pufNoktasi:
      'Tahin limonla buluşunca kesilmiş gibi katılaşır; bu normaldir. Suyu azar azar ekleyip karıştırmaya devam edersen sos birden açılır ve ipeksi bir kıvam alır.',
  },
];
