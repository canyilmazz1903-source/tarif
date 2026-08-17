import type { Tarif } from '@/types/tarif';

// Çorbalar — v1.2 genişleme paketi. Tamamı özgün metin, editör onaylı.
export const CORBALAR_YENI: Tarif[] = [
  {
    id: 'kesme-corbasi',
    baslik: 'Kesme Çorbası',
    altBaslik: 'Ev eriştesi ve yeşil mercimekle pişen, yoğurt terbiyeli, naneli yağlı Anadolu klasiği',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🍜',
    porsiyon: 6,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2],
    malzemeler: [
      { ad: 'yeşil mercimek', miktar: 0.5, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'erişte', miktar: 200, birim: 'g', not: 'kare kesilmiş kesmelik' },
      { ad: 'su', miktar: 8, birim: 'su bardağı' },
      { ad: 'yoğurt', miktar: 1, birim: 'su bardağı', grup: 'Terbiyesi için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Terbiyesi için', not: 'sadece sarısı' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı', grup: 'Terbiyesi için' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Üzeri için' },
      { ad: 'kuru nane', miktar: 1, birim: 'tatlı kaşığı', grup: 'Üzeri için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Üzeri için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Mercimeği haşla',
        aciklama:
          'Yıkanmış yeşil mercimeği tencerede 8 su bardağı suyla kaynatın; kısık ateşte diri kalacak şekilde 15 dakika pişirin.',
        sureSn: 900,
      },
      {
        baslik: 'Erişteyi ekle',
        aciklama:
          'Kaynayan çorbaya kesme erişteleri serperek ekleyin, tuzunu atın. Ara sıra karıştırarak erişteler yumuşayana dek 10 dakika pişirin.',
        sureSn: 600,
      },
      {
        baslik: 'Terbiyeyi ılıştır',
        aciklama:
          'Kasede yoğurt, yumurta sarısı ve unu pürüzsüz olana kadar çırpın. Sıcak çorba suyundan bir kepçe alıp ince ince akıtarak karışıma yedirin; iki kepçe daha ekleyip terbiyeyi çorba sıcaklığına yaklaştırın.',
      },
      {
        baslik: 'Terbiyeyi çorbaya karıştır',
        aciklama:
          'Iliştirdiğiniz terbiyeyi, sürekli karıştırarak kısık ateşteki çorbaya yavaşça dökün. Kaynatmadan 5 dakika daha pişirip ocaktan alın.',
        sureSn: 300,
      },
      {
        baslik: 'Naneli yağı gezdir',
        aciklama:
          'Küçük tavada tereyağını eritin; nane ve pul biberi ekleyip köpürür köpürmez kaselere aldığınız çorbanın üzerinde gezdirin.',
      },
    ],
    pufNoktasi:
      'Terbiye eklendikten sonra çorba asla kaynamamalı; kaynarsa yoğurt kesilir. Erişteyi haşlamadan önce kuru tavada 2 dakika çevirirseniz çorba bulanmaz, hafif kavrulmuş bir koku kazanır.',
  },
  {
    id: 'tavuklu-eriste-corbasi',
    baslik: 'Tavuklu Erişte Çorbası',
    altBaslik: 'Kendi suyunda haşlanan tavuk ve sebzelerle doyurucu, iyileştirici ev çorbası',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍲',
    porsiyon: 6,
    hazirlikDk: 10,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 220,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 300, birim: 'g' },
      { ad: 'erişte', miktar: 150, birim: 'g' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'küçük küpler halinde' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 8, birim: 'su bardağı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', grup: 'Servis için', not: 'dilimlenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Tavuğu haşla',
        aciklama:
          'Tavuk göğsünü 8 su bardağı suyla tencereye alın; kaynayınca üstünde biriken köpüğü kepçeyle alıp kısık ateşte 20 dakika haşlayın. Tavuğu bir tabağa çıkarın, suyunu tencerede tutun.',
        sureSn: 1200,
      },
      {
        baslik: 'Sebzeleri yumuşat',
        aciklama:
          'Ayrı küçük tavada tereyağını eritip soğanı ve havucu 4-5 dakika soteleyin; pembeleşen sebzeleri tavuk suyuna aktarın.',
        sureSn: 300,
      },
      {
        baslik: 'Erişteyi pişir',
        aciklama:
          'Kaynayan çorbaya erişteyi ekleyin, tuzunu atın. Erişteler yumuşayıp çorba hafif koyulaşana kadar 10 dakika pişirin.',
        sureSn: 600,
      },
      {
        baslik: 'Tavuğu didikleyip ekle',
        aciklama:
          'Ilıyan tavuğu elinizle ince ince didikleyin, çorbaya geri koyun. Karabiberi ekleyip 3 dakika daha kaynatın.',
        sureSn: 180,
      },
      {
        baslik: 'Limonla servis et',
        aciklama: 'Çorbayı kaselere paylaştırın; yanına limon dilimi koyup sıcak servis edin.',
      },
    ],
    pufNoktasi:
      'Tavuğu kaynar suya değil soğuk suya koyup öyle ısıtın; et suyunu yavaş yavaş bırakır ve çorbanın tadı çok daha derin olur.',
  },
  {
    id: 'terbiyeli-balkabagi-corbasi',
    baslik: 'Terbiyeli Bal Kabağı Çorbası',
    altBaslik: 'Tatlı bal kabağını yoğurtlu terbiyeyle tuzlu sofraya taşıyan sonbahar sürprizi',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🎃',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 160,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1],
    malzemeler: [
      { ad: 'kabak (bal kabağı)', miktar: 600, birim: 'g', not: 'kabuğu soyulmuş, iri küpler halinde' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 5, birim: 'su bardağı' },
      { ad: 'yoğurt', miktar: 3, birim: 'yemek kaşığı', grup: 'Terbiyesi için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Terbiyesi için', not: 'sadece sarısı' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı', grup: 'Terbiyesi için' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', grup: 'Terbiyesi için', not: 'suyu' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı kavur',
        aciklama: 'Tencerede tereyağını eritip soğanı hafif pembeleşene kadar 3-4 dakika kavurun.',
        sureSn: 240,
      },
      {
        baslik: 'Kabakları pişir',
        aciklama:
          'Bal kabağı küplerini tencereye ekleyip 2 dakika çevirin; suyu ve tuzu ekleyin. Kabaklar çatal batacak kadar yumuşayana dek kısık ateşte 20 dakika pişirin.',
        sureSn: 1200,
      },
      {
        baslik: 'Çorbayı pürüzsüzleştir',
        aciklama: 'Tencereyi ocaktan alıp çorbayı el blenderıyla kadife kıvamına gelene kadar çekin, tekrar kısık ateşe koyun.',
      },
      {
        baslik: 'Terbiyeyi ılıştırıp ekle',
        aciklama:
          'Yoğurt, yumurta sarısı, un ve limon suyunu çırpın. Sıcak çorbadan kepçe kepçe ekleyerek karışımı ılıştırın; sonra sürekli karıştırarak çorbaya dökün ve kaynatmadan 4 dakika pişirin.',
        sureSn: 240,
      },
      {
        baslik: 'Servis et',
        aciklama: 'Karabiberi karıştırın; kaselerin üzerine pul biber serpip sıcak servis edin.',
      },
    ],
    pufNoktasi:
      'Bal kabağının tatlılığı limonlu terbiyeyle dengelenir; limonu kısmadan ekleyin. Kabağı fırında hafif kızartıp öyle kullanırsanız çorbaya karamelize bir derinlik gelir.',
  },
  {
    id: 'pancar-corbasi',
    baslik: 'Pancar Çorbası',
    altBaslik: 'Tatlı pancarın süzme yoğurtla buluştuğu, göz alıcı pembe renkli kış çorbası',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'fit'],
    emoji: '🫐',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 140,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'pancar', miktar: 3, birim: 'adet', not: 'soyulmuş, iri doğranmış' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 6, birim: 'su bardağı' },
      { ad: 'kimyon', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'süzme yoğurt', miktar: 4, birim: 'yemek kaşığı', grup: 'Servis için' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri soteleyerek başla',
        aciklama:
          'Tencerede zeytinyağını kızdırıp soğanı ve sarımsağı 3 dakika soteleyin; pancar ve patatesi ekleyip 2 dakika daha çevirin.',
        sureSn: 300,
      },
      {
        baslik: 'Sebzeleri pişir',
        aciklama:
          'Suyu, tuzu ve kimyonu ekleyin. Kapağı kapatıp pancarlar bıçak batacak kadar yumuşayana dek kısık ateşte 25 dakika pişirin.',
        sureSn: 1500,
      },
      {
        baslik: 'Çorbayı pürüzsüzleştir',
        aciklama:
          'Ocaktan aldığınız çorbayı el blenderıyla ipeksi bir kıvama gelene kadar çekin; limon suyunu karıştırıp tadını dengeleyin.',
      },
      {
        baslik: 'Yoğurtla servis et',
        aciklama:
          'Çorbayı kaselere alın, her kasenin ortasına bir kaşık süzme yoğurt bırakın. Kaşıkla hafifçe çevirerek pembe-beyaz desen oluşturup servis edin.',
      },
    ],
    pufNoktasi:
      'Yoğurdu çorbanın içine değil servis anında üzerine koyun; hem rengi bozulmaz hem de her kaşıkta sıcak-soğuk kontrastı yakalanır.',
  },
  {
    id: 'naneli-bezelye-corbasi',
    baslik: 'Naneli Bezelye Çorbası',
    altBaslik: 'Taze naneyle ferahlayan, canlı yeşil renkli, hafif ve sütsüz bahar çorbası',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'fit'],
    emoji: '🫛',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 150,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [5, 6, 7],
    malzemeler: [
      { ad: 'bezelye', miktar: 450, birim: 'g', not: 'taze ya da dondurulmuş' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'küçük boy, küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 5, birim: 'su bardağı' },
      { ad: 'taze nane', miktar: 0.5, birim: 'demet', not: 'yaprakları ayıklanmış' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı sotele',
        aciklama: 'Tencerede zeytinyağını ısıtıp soğanı şeffaflaşana kadar 3 dakika soteleyin.',
        sureSn: 180,
      },
      {
        baslik: 'Bezelyeyi pişir',
        aciklama:
          'Patates ve bezelyeyi ekleyip 2 dakika çevirin; su ve tuzu ilave edin. Patatesler dağılacak kıvama gelene dek 15 dakika kaynatın.',
        sureSn: 900,
      },
      {
        baslik: 'Naneyle blenderdan geçir',
        aciklama:
          'Ocağı kapatın, nane yapraklarını çorbaya atıp 1 dakika demlenmeye bırakın. Ardından el blenderıyla pürüzsüz hale getirin.',
      },
      {
        baslik: 'Tatlandırıp servis et',
        aciklama: 'Limon suyu ve karabiberi karıştırın; dilerseniz üzerine birkaç nane yaprağı koyup sıcak servis edin.',
      },
    ],
    pufNoktasi:
      'Naneyi başta değil ocağı kapattıktan sonra ekleyin; uzun kaynayan nane acılaşır, son dakikada eklenen nane ise rengini ve ferah kokusunu korur.',
  },
  {
    id: 'sehriyeli-domates-corbasi',
    baslik: 'Şehriyeli Domates Çorbası',
    altBaslik: 'Rendelenmiş taze domatesle pişen, tel şehriyeli, unsuz ve hafif klasik',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🍅',
    porsiyon: 4,
    hazirlikDk: 10,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 170,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'domates', miktar: 4, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'şehriye', miktar: 0.5, birim: 'su bardağı', not: 'tel şehriye' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş', not: 'ezilmiş' },
      { ad: 'su', miktar: 6, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kaşar peyniri', miktar: 50, birim: 'g', grup: 'Servis için', not: 'rendelenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Şehriyeyi kavur',
        aciklama: 'Tencerede tereyağını eritip şehriyeyi altın rengi alana kadar sürekli karıştırarak 2-3 dakika kavurun.',
        sureSn: 180,
      },
      {
        baslik: 'Salçayı ve domatesi ekle',
        aciklama:
          'Sarımsak ve salçayı ekleyip kokusu çıkana dek 1 dakika çevirin; rendelenmiş domatesi ilave edin ve suyunu çekene kadar 5 dakika pişirin.',
        sureSn: 300,
      },
      {
        baslik: 'Çorbayı pişir',
        aciklama:
          'Sıcak suyu, tuzu ve şekeri ekleyin. Şehriyeler yumuşayıp çorba hafif koyulaşana dek kısık ateşte 12 dakika kaynatın.',
        sureSn: 720,
      },
      {
        baslik: 'Peynirle servis et',
        aciklama: 'Çorbayı kaselere paylaştırıp üzerine rendelenmiş kaşar serpin; peynir eriyince sıcak servis edin.',
      },
    ],
    pufNoktasi:
      'Bir çay kaşığı şeker domatesin asidini kırar; çorba kesinlikle ekşimsi olmaz. Şehriyeyi iyi kavurmak hem rengi güzelleştirir hem de çorbanın dibe yapışmasını önler.',
  },
  {
    id: 'kerevizli-elmali-corbasi',
    baslik: 'Kerevizli Elmalı Çorba',
    altBaslik: 'Kerevizin toprağımsı tadını elmanın tatlılığıyla yumuşatan sürprizli kış çorbası',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'fit'],
    emoji: '🍏',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 150,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'kereviz', miktar: 1, birim: 'adet', not: 'soyulmuş, iri küpler halinde' },
      { ad: 'elma', miktar: 1, birim: 'adet', not: 'ekşi tercihen; soyulup doğranmış' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 6, birim: 'su bardağı' },
      { ad: 'süt', miktar: 100, birim: 'ml' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri terbiyele',
        aciklama:
          'Doğradığınız kerevizi kararmaması için limon suyuyla ovun. Tencerede zeytinyağını ısıtıp soğanı 3 dakika soteleyin.',
        sureSn: 180,
      },
      {
        baslik: 'Kereviz ve elmayı pişir',
        aciklama:
          'Kereviz, elma ve patatesi tencereye ekleyip 3 dakika çevirin; su ve tuzu ilave edin. Kereviz iyice yumuşayana dek kısık ateşte 20 dakika pişirin.',
        sureSn: 1200,
      },
      {
        baslik: 'Blenderdan geçir',
        aciklama: 'Çorbayı el blenderıyla tamamen pürüzsüz olana kadar çekin; sütü ekleyip karıştırın.',
      },
      {
        baslik: 'Kıvamını ayarla ve servis et',
        aciklama:
          'Çorbayı bir taşım daha kaynatın; koyu bulursanız sıcak su ekleyin. Karabiber serpip sıcak servis edin.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Elmanın ekşisi kerevizin keskin kokusunu dengeler; tatlı elma kullanacaksanız limonu bir tık artırın. Bir avuç kavrulmuş ceviz serpmek çorbaya çıtırlık katar.',
  },
  {
    id: 'terbiyeli-ispanak-corbasi',
    baslik: 'Terbiyeli Ispanak Çorbası',
    altBaslik: 'Pirinçle koyulaşan, sarımsaklı yoğurt terbiyesiyle tamamlanan besleyici kış çorbası',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'fit'],
    emoji: '🥬',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 155,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'ıspanak', miktar: 500, birim: 'g', not: 'ayıklanıp yıkanmış, iri doğranmış' },
      { ad: 'pirinç', miktar: 3, birim: 'yemek kaşığı', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 6, birim: 'su bardağı' },
      { ad: 'yoğurt', miktar: 1, birim: 'su bardağı', grup: 'Terbiyesi için' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Terbiyesi için', not: 'sadece sarısı' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı', grup: 'Terbiyesi için' },
      { ad: 'sarımsak', miktar: 1, birim: 'diş', grup: 'Terbiyesi için', not: 'rendelenmiş' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı sotele',
        aciklama: 'Tencerede zeytinyağını ısıtıp soğanı şeffaflaşana kadar 3 dakika soteleyin.',
        sureSn: 180,
      },
      {
        baslik: 'Pirinci pişir',
        aciklama: 'Pirinci ekleyip 1 dakika çevirin; su ve tuzu ilave edin. Pirinçler yumuşayana dek 15 dakika kaynatın.',
        sureSn: 900,
      },
      {
        baslik: 'Ispanağı ekle',
        aciklama: 'Doğranmış ıspanağı çorbaya atın; yapraklar çökene ve renk canlı yeşile dönene kadar 5 dakika pişirin.',
        sureSn: 300,
      },
      {
        baslik: 'Terbiyeyi ılıştırıp ekle',
        aciklama:
          'Yoğurt, yumurta sarısı, un ve sarımsağı çırpın. Sıcak çorba suyundan üç kepçeyi azar azar ekleyerek terbiyeyi ılıştırın; sonra sürekli karıştırarak çorbaya dökün.',
      },
      {
        baslik: 'Kaynatmadan pişir',
        aciklama: 'Kısık ateşte, kaynamasına izin vermeden 4-5 dakika karıştırarak pişirin ve ocaktan alın.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Ispanağın saplarını atmayın; ince kıyıp soğanla birlikte kavurursanız çorbaya hem tat hem lif katar. Terbiyedeki çiğ sarımsak yoğurdun içinde yumuşayarak çorbaya cacık ferahlığı verir.',
  },
  {
    id: 'bulgurlu-kis-corbasi',
    baslik: 'Bulgurlu Kış Çorbası',
    altBaslik: 'Çift salçalı, naneli ve bol bulgurlu; soğuk günlerin bir kepçelik sıcak yorganı',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'meal-prep'],
    emoji: '🌾',
    porsiyon: 6,
    hazirlikDk: 10,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 180,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2],
    malzemeler: [
      { ad: 'bulgur', miktar: 0.5, birim: 'su bardağı', not: 'pilavlık' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'domates salçası', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 7, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'kuru nane', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', grup: 'Servis için', not: 'dilimlenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı ve salçaları kavur',
        aciklama:
          'Tencerede zeytinyağını ısıtıp soğanı 3 dakika soteleyin; sarımsağı ve iki salçayı ekleyip kokuları çıkana dek 2 dakika kavurun.',
        sureSn: 300,
      },
      {
        baslik: 'Bulguru ekle',
        aciklama: 'Yıkanmış bulguru tencereye alıp salçalı karışımla 1-2 dakika çevirerek tanelerin yağı emmesini sağlayın.',
        sureSn: 120,
      },
      {
        baslik: 'Çorbayı pişir',
        aciklama:
          'Sıcak suyu ve tuzu ekleyin. Bulgur taneleri açılıp çorba koyulaşana kadar ara sıra karıştırarak kısık ateşte 20 dakika pişirin.',
        sureSn: 1200,
      },
      {
        baslik: 'Nane ve pul biberle tamamla',
        aciklama:
          'Kuru nane ve pul biberi ekleyip 2 dakika daha kaynatın; yanına limon dilimiyle sıcak servis edin.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Çorba beklerken bulgur şişip koyulaşır; ertesi gün ısıtırken bir bardak sıcak su ekleyip tuzunu kontrol etmek yeterli. Bu yüzden haftalık hazırlığa çok uygundur.',
  },
  {
    id: 'nohutlu-ezme-corba',
    baslik: 'Nohutlu Ezme Çorba',
    altBaslik: 'Tahinli, limonlu ve kimyonlu; sıcak humusu andıran kadife kıvamlı çorba',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'fit'],
    emoji: '🥣',
    porsiyon: 5,
    hazirlikDk: 10,
    pisirmeDk: 50,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 230,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'nohut', miktar: 250, birim: 'g', not: 'bir gece suda bekletilmiş' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş' },
      { ad: 'tahin', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 6, birim: 'su bardağı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Nohutu haşla',
        aciklama:
          'Suda bekletilmiş nohutları süzüp tencereye alın, 6 su bardağı su ekleyin. Nohutlar parmak arasında kolayca ezilecek kadar yumuşayana dek 45 dakika haşlayın; düdüklü tencerede bu süre 20 dakikaya iner.',
        sureSn: 2700,
      },
      {
        baslik: 'Sarımsakla blenderdan geçir',
        aciklama:
          'Sarımsak dişlerini çorbaya atıp 2 dakika kaynatın. Ardından el blenderıyla tamamı pürüzsüz, kadifemsi bir kıvam alana kadar uzun uzun çekin.',
      },
      {
        baslik: 'Tahin ve limonu ekle',
        aciklama:
          'Tahini, limon suyunu, kimyonu ve tuzu ekleyip karıştırın; kısık ateşte 5 dakika daha pişirin. Çok koyulaşırsa sıcak suyla açın.',
        sureSn: 300,
      },
      {
        baslik: 'Kızgın yağla servis et',
        aciklama:
          'Küçük tavada zeytinyağını ısıtıp pul biberi ekleyin; köpüren biberli yağı kaselerdeki çorbanın üzerine gezdirerek servis edin.',
      },
    ],
    pufNoktasi:
      'Nohutun haşlama suyunu dökmeyin; çorbanın kıvamını veren doğal nişasta o suda. Blenderdan ne kadar uzun geçirirseniz çorba o kadar ipeksi olur.',
  },
  {
    id: 'eristeli-yesil-mercimek-corbasi',
    baslik: 'Erişteli Yeşil Mercimek Çorbası',
    altBaslik: 'Salçalı ve naneli suyunda erişteyle pişen, yoğurtsuz sevenlere köy usulü çorba',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere', 'meal-prep'],
    emoji: '🥄',
    porsiyon: 6,
    hazirlikDk: 10,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 200,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'yeşil mercimek', miktar: 1, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'erişte', miktar: 100, birim: 'g' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 8, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'kuru nane', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı ve salçayı kavur',
        aciklama:
          'Tencerede zeytinyağını ısıtıp soğanı pembeleşene kadar 3 dakika soteleyin; salçayı ekleyip kokusu çıkana dek 1 dakika çevirin.',
        sureSn: 240,
      },
      {
        baslik: 'Mercimeği pişir',
        aciklama:
          'Mercimeği ve sıcak suyu ekleyin; taneler yumuşamaya başlayana dek kısık ateşte 20 dakika kaynatın.',
        sureSn: 1200,
      },
      {
        baslik: 'Erişteyi ekle',
        aciklama:
          'Tuzu ve erişteyi ekleyip erişteler yumuşayana, çorba hafif çorbamsı koyuluğa gelene dek 10 dakika daha pişirin.',
        sureSn: 600,
      },
      {
        baslik: 'Nane ve pul biberle bitir',
        aciklama:
          'Kuru nane ve pul biberi ekleyip son bir taşım kaynatın; dinlendirmeden sıcak servis edin.',
        sureSn: 60,
      },
    ],
    pufNoktasi:
      'Mercimeği eriştelerle aynı anda değil önce pişirin; ikisi aynı anda atılırsa erişte lapa olurken mercimek diri kalır. Nane, bu çorbanın imzasıdır — kısmayın.',
  },
  {
    id: 'kremali-patates-corbasi',
    baslik: 'Kremalı Patates Çorbası',
    altBaslik: 'Sütlü ve kremalı, ipek gibi pürüzsüz; çocukların da bayılacağı yumuşacık çorba',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🥔',
    porsiyon: 5,
    hazirlikDk: 10,
    pisirmeDk: 30,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 215,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'patates', miktar: 4, birim: 'adet', not: 'soyulmuş, küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'un', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'süt', miktar: 1, birim: 'su bardağı' },
      { ad: 'krema', miktar: 100, birim: 'ml' },
      { ad: 'su', miktar: 5, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'taze soğan', miktar: 2, birim: 'adet', grup: 'Servis için', not: 'ince kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'Soğanı kavur',
        aciklama:
          'Tencerede tereyağını eritip soğanı şeffaflaşana kadar 3 dakika soteleyin; unu ekleyip kokusu çıkana dek 1 dakika kavurun.',
        sureSn: 240,
      },
      {
        baslik: 'Patatesleri pişir',
        aciklama:
          'Patatesleri tencereye alın, sıcak suyu ve tuzu ekleyin. Patatesler kaşıkla ezilecek kadar yumuşayana dek 20 dakika pişirin.',
        sureSn: 1200,
      },
      {
        baslik: 'Blenderdan geçir',
        aciklama: 'Çorbayı el blenderıyla tamamen pürüzsüz hale getirin; sütü ekleyip karıştırın.',
      },
      {
        baslik: 'Kremayla kıvamlandır',
        aciklama:
          'Kremayı ekleyip kısık ateşte karıştırarak bir taşım kaynatın; karabiberi ilave edin ve ocaktan alın.',
        sureSn: 180,
      },
      {
        baslik: 'Taze soğanla servis et',
        aciklama: 'Kaselere aldığınız çorbanın üzerine kıyılmış taze soğan serperek sıcak servis edin.',
      },
    ],
    pufNoktasi:
      'Patatesi blenderda çok uzun çevirmeyin; nişastası fazla çalışırsa çorba zamk gibi yapışkan olur. Kısa darbelerle pürüzsüzleştirmek yeterli.',
  },
  {
    id: 'misir-unlu-peynirli-corba',
    baslik: 'Mısır Unlu Peynirli Çorba',
    altBaslik: 'Karadeniz esintili; kuymağı andıran, tel tel kaşarlı ve mısır unlu yayla çorbası',
    kategori: 'corba',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🧀',
    porsiyon: 4,
    hazirlikDk: 5,
    pisirmeDk: 20,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 265,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2],
    malzemeler: [
      { ad: 'mısır unu', miktar: 0.5, birim: 'su bardağı' },
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'kaşar peyniri', miktar: 150, birim: 'g', not: 'rendelenmiş; taze ve tuzsuz olanı makbul' },
      { ad: 'süt', miktar: 2, birim: 'su bardağı' },
      { ad: 'su', miktar: 4, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Üzeri için' },
    ],
    adimlar: [
      {
        baslik: 'Mısır ununu kavur',
        aciklama:
          'Tencerede tereyağını eritip mısır ununu ekleyin; sürekli karıştırarak hafif kokusu çıkana ve rengi koyulaşmaya başlayana dek 4-5 dakika kavurun.',
        sureSn: 300,
      },
      {
        baslik: 'Sıvıları yedir',
        aciklama:
          'Sıcak suyu azar azar ekleyip topak kalmayacak şekilde telle çırpın; ardından sütü ve tuzu ilave edin.',
      },
      {
        baslik: 'Çorbayı koyulaştır',
        aciklama:
          'Kısık ateşte sürekli karıştırarak çorba muhallebi kıvamına yaklaşana dek 8-10 dakika pişirin.',
        sureSn: 600,
      },
      {
        baslik: 'Peyniri erit',
        aciklama:
          'Ocağı kısıp rendelenmiş kaşarı ekleyin; peynir eriyip kaşıktan tel tel akana kadar 2-3 dakika karıştırın, karabiberi ilave edin.',
        sureSn: 180,
      },
      {
        baslik: 'Servis et',
        aciklama: 'Çorbayı bekletmeden kaselere alın; üzerine pul biber serpip dumanı üstünde servis edin.',
      },
    ],
    pufNoktasi:
      'Peynir eklendikten sonra çorbayı kaynatmayın; kaynayan peynir telleşme özelliğini kaybedip sertleşir. Çorba beklerken katılaşırsa bir miktar sıcak sütle açabilirsiniz.',
  },
];
