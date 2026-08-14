import type { Tarif } from '@/types/tarif';

// Sebze yemekleri paketi — 7 kıymalı/etli ana yemek + 8 zeytinyağlı.
// Tüm metinler özgün olarak yazılmıştır.
export const SEBZE_YEMEKLERI: Tarif[] = [
  // ─────────────────────────────────────────────
  // ANA YEMEK — kıymalı / etli sebzeler
  // ─────────────────────────────────────────────
  {
    id: 'etli-biber-dolmasi',
    baslik: 'Etli Biber Dolması',
    altBaslik: 'Kıymalı-pirinçli iç harcıyla doldurulmuş, salçalı suda ağır ateşte pişen klasik dolma',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir', 'ramazan'],
    emoji: '🫑',
    porsiyon: 6,
    hazirlikDk: 35,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 320,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'dolmalık biber', miktar: 12, birim: 'adet', not: 'orta boy, sapları kesilip çekirdekleri temizlenmiş' },
      { ad: 'kıyma', miktar: 300, birim: 'g', not: 'orta yağlı dana' },
      { ad: 'pirinç', miktar: 150, birim: 'g', not: 'yıkanıp süzülmüş' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'biri rendelenmiş, biri kapak için dilimlenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'su', miktar: 2.5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'İç harcını yoğur',
        aciklama:
          'Kıymayı geniş bir kaba al. Doğranmış soğanı, yıkanmış pirinci, rendelenmiş domatesi, salçaların yarısını, maydanozu, kuru naneyi, karabiberi ve tuzu ekle. Zeytinyağının 1 kaşığını gezdirip harç toparlanana kadar elle yoğur.',
        sureSn: 300,
      },
      {
        baslik: 'Biberleri hazırla',
        aciklama:
          'Biberlerin saplı kısımlarını bıçakla çevirerek çıkar, içindeki çekirdek ve zarları temizle. Biberleri akan suda çalkalayıp ters çevirerek süzdür.',
        sureSn: 300,
      },
      {
        baslik: 'Biberleri doldur',
        aciklama:
          'Harcı kaşıkla biberlere paylaştır; pirinç pişince şişeceği için ağızlarına bir parmak boşluk bırak. Her biberin ağzını bir dilim domatesle kapat.',
        sureSn: 420,
      },
      {
        baslik: 'Tencereye diz',
        aciklama:
          'Dolmaları geniş bir tencereye dik olarak, birbirine yaslanacak şekilde yerleştir. Kalan salçayı sıcak suda ez, kalan zeytinyağıyla birlikte dolmaların üzerine gezdir.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Tencerenin kapağını kapat, önce yüksek ateşte kaynat. Kaynayınca ateşi kıs ve pirinçler yumuşayana kadar yaklaşık 40 dakika pişir. Ara sıra kaşık sırtıyla suyunu kontrol et.',
        sureSn: 2400,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ocaktan aldıktan sonra kapağı açmadan 10 dakika dinlendir; böylece iç harç suyunu tamamen çeker. Sıcak servis et; yanına yoğurt çok yakışır.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Harca hem domates hem iki tür salça girince dolmanın rengi ve tadı dengelenir; biberin acısını almak için doldurmadan önce içlerine çok az tuz serpip birkaç dakika bekletebilirsin.',
  },
  {
    id: 'etli-yaprak-sarma',
    baslik: 'Etli Yaprak Sarma',
    altBaslik: 'Kıymalı iç harcıyla incecik sarılan asma yaprakları; limonla servis edilen misafir klasiği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir', 'osmanli'],
    emoji: '🍃',
    porsiyon: 6,
    hazirlikDk: 60,
    pisirmeDk: 50,
    zorluk: 'zor',
    kaloriPerPorsiyon: 300,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'asma yaprağı', miktar: 400, birim: 'g', not: 'salamura ise tuzunu almak için haşlanmış' },
      { ad: 'kıyma', miktar: 250, birim: 'g' },
      { ad: 'pirinç', miktar: 150, birim: 'g', not: 'yıkanıp süzülmüş' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'kuru nane', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'yarısı pişerken, yarısı servis için' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Yaprakları hazırla',
        aciklama:
          'Salamura yaprakları kaynar suda 3-4 dakika haşlayıp soğuk suda çalkala; tuzları gitsin. Sap kısımlarını makasla kes ve yaprakları süzgeçte dinlendir.',
        sureSn: 480,
      },
      {
        baslik: 'Harcı hazırla',
        aciklama:
          'Kıymayı, rendelenmiş soğanı, pirinci, salçanın 1 kaşığını, kuru naneyi, karabiberi, kimyonu ve tuzu bir kapta buluştur. Zeytinyağının 2 kaşığını ekleyip harç macun kıvamı alana dek yoğur.',
        sureSn: 300,
      },
      {
        baslik: 'Sarmaları sar',
        aciklama:
          'Bir yaprağı damarlı yüzü üste gelecek şekilde aç, sap tarafına fındık büyüklüğünde harç koy. Önce yanları içe kapat, sonra sıkıca ama pirince nefes payı bırakarak rulo yap. Tüm harç bitene kadar devam et.',
        sureSn: 1200,
      },
      {
        baslik: 'Tencereye diz',
        aciklama:
          'Tencerenin tabanına yırtık yaprakları ser; sarmalar dibe yapışmasın. Sarmaları sık aralıklarla halka halka diz, aralarına limon dilimlerini yerleştir.',
        sureSn: 300,
      },
      {
        baslik: 'Ağırlıkla pişir',
        aciklama:
          'Kalan salçayı sıcak suda ezip kalan zeytinyağıyla sarmaların üzerine gezdir. Üstüne ters kapatılmış porselen bir tabak koy, kapağı kapat. Kaynayınca ateşi kısıp yaklaşık 45 dakika pişir.',
        sureSn: 2700,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Ocaktan alınca 15 dakika kapalı dinlendir. Tabağa alıp taze limon dilimleriyle servis et.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Sarma gevşerse pişerken dağılır, çok sıkı olursa pirinç şişecek yer bulamaz; parmakla hafif bastırınca esneyen bir sıkılık idealdir. Tabak ağırlığı sarmaların açılmasını önler.',
  },
  {
    id: 'kiymali-kabak-dolmasi',
    baslik: 'Kabak Dolması (Kıymalı)',
    altBaslik: 'Oyulmuş taze kabakların kıymalı harçla doldurulup salçalı suda pişirildiği yaz dolması',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🥒',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 280,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [5, 6, 7, 8],
    malzemeler: [
      { ad: 'kabak', miktar: 6, birim: 'adet', not: 'orta boy, düzgün şekilli' },
      { ad: 'kıyma', miktar: 250, birim: 'g' },
      { ad: 'pirinç', miktar: 100, birim: 'g', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'domates salçası', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'dereotu', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'yoğurt', miktar: 200, birim: 'g', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Kabakları oy',
        aciklama:
          'Kabakları yıka, uçlarını kes ve ikiye böl. Kabak oyacağıyla içlerini, cidarında yarım santim et kalacak şekilde boşalt. Oyuntuları çorba için ayırabilirsin.',
        sureSn: 600,
      },
      {
        baslik: 'Harcı hazırla',
        aciklama:
          'Kıymayı, pirinci, doğranmış soğanı, salçanın yarısını, dereotunun yarısını, karabiberi ve tuzu karıştır. 1 kaşık zeytinyağı ekleyip kısaca yoğur.',
        sureSn: 240,
      },
      {
        baslik: 'Kabakları doldur',
        aciklama:
          'Harcı oyduğun kabaklara kaşıkla doldur; üstte az boşluk bırak ki pirinç rahat şişsin. Dolmaları tencereye dik olarak yerleştir.',
        sureSn: 300,
      },
      {
        baslik: 'Sosunu ekle ve pişir',
        aciklama:
          'Kalan salçayı sıcak suda ez, kalan zeytinyağıyla birlikte dolmaların üzerine dök. Kapağı kapat; kaynadıktan sonra kısık ateşte kabaklar yumuşayana dek 35 dakika pişir.',
        sureSn: 2100,
      },
      {
        baslik: 'Dinlendir ve servis et',
        aciklama:
          'Tencereyi ocaktan alıp 10 dakika dinlendir. Dolmaları tabağa al, üzerine tencerede kalan sostan gezdir, kalan dereotunu serp ve yanında yoğurtla servis et.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Kabak çabuk pişen bir sebze olduğu için suyunu az tut; dolmalar kendi suyunu da salar. Oyarken cidarı fazla inceltirsen pişerken dağılır.',
  },
  {
    id: 'kiymali-karnabahar-yemegi',
    baslik: 'Kıymalı Karnabahar Yemeği',
    altBaslik: 'Kavrulmuş kıymayla salçalı suda pişen karnabahar; kış sofralarının hafif ana yemeği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍲',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'karnabahar', miktar: 1, birim: 'adet', not: 'orta boy, çiçeklerine ayrılmış' },
      { ad: 'kıyma', miktar: 250, birim: 'g' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'servis için kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'Kıymayı kavur',
        aciklama:
          'Zeytinyağını tencerede kızdır, kıymayı ekle ve suyunu salıp çekene kadar orta ateşte kavur. Soğanı ve sarımsağı ekleyip soğanlar pembeleşene dek çevir.',
        sureSn: 480,
      },
      {
        baslik: 'Salçaları ekle',
        aciklama:
          'İki salçayı da tencereye alıp 1-2 dakika kokusu çıkana kadar kavur. Pul biber, karabiber ve tuzu serp.',
        sureSn: 120,
      },
      {
        baslik: 'Karnabaharı ekle',
        aciklama:
          'Çiçeklerine ayırıp yıkadığın karnabaharı tencereye yerleştir ve kıymalı sosla harmanlanması için bir iki kez çevir.',
        sureSn: 120,
      },
      {
        baslik: 'Suyunu ekleyip pişir',
        aciklama:
          'Sıcak suyu dök, kapağı kapat. Kaynayınca ateşi kıs ve karnabaharlar çatal batacak yumuşaklığa gelene kadar 25 dakika pişir; karıştırmak yerine tencereyi sallayarak çevir.',
        sureSn: 1500,
      },
      {
        baslik: 'Servis et',
        aciklama:
          'Ocaktan alıp 5 dakika dinlendir, üzerine kıyılmış maydanoz serperek sıcak servis et. Yanına pirinç pilavı iyi gider.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Karnabaharı pişirmeden önce sirkeli suda 10 dakika bekletirsen hem tortusu çıkar hem de pişerken yayılan kokusu hafifler. Kaşıkla karıştırmak çiçekleri dağıtır; tencereyi sallamak yeterli.',
  },
  {
    id: 'kiymali-pirasa',
    baslik: 'Kıymalı Pırasa',
    altBaslik: 'Havuçlu, az pirinçli ve salçalı sosta yumuşacık pişen pırasanın kıymalı kış hali',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🥘',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 240,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'pırasa', miktar: 4, birim: 'adet', not: 'bir parmak kalınlığında halka doğranmış' },
      { ad: 'kıyma', miktar: 200, birim: 'g' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'yarım ay doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'pirinç', miktar: 2, birim: 'yemek kaşığı', not: 'yıkanmış' },
      { ad: 'domates salçası', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Kıymayı ve soğanı kavur',
        aciklama:
          'Zeytinyağını tencerede kızdır. Kıymayı ekleyip suyunu çekene kadar kavur, ardından soğanı ekleyerek 3-4 dakika daha çevir.',
        sureSn: 420,
      },
      {
        baslik: 'Salçayı ve havucu ekle',
        aciklama:
          'Salçayı ekleyip kokusu çıkana kadar 1 dakika kavur. Havuçları da atıp bir iki kez karıştır.',
        sureSn: 120,
      },
      {
        baslik: 'Pırasaları ekle',
        aciklama:
          'Yıkanmış pırasa halkalarını tencereye al, tuz ve karabiberi serp, sosla kaplanması için nazikçe harmanla.',
        sureSn: 120,
      },
      {
        baslik: 'Pirinçle birlikte pişir',
        aciklama:
          'Pirinci serpiştir, sıcak suyu ekle ve kapağı kapat. Kaynayınca kısık ateşte, pırasalar iyice yumuşayana kadar yaklaşık 30 dakika pişir.',
        sureSn: 1800,
      },
      {
        baslik: 'Dinlendir ve servis et',
        aciklama:
          'Ocaktan alıp 5-10 dakika dinlendir. Sıcak servis et; üzerine sıkılacak birkaç damla limon yemeği açar.',
        sureSn: 420,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Pırasanın koyu yeşil sert uçlarını ayırıp çorbalık olarak değerlendir; yemeğe beyaz ve açık yeşil kısımlar hem daha tatlı hem daha yumuşak sonuç verir.',
  },
  {
    id: 'kiymali-lahana-sarma',
    baslik: 'Lahana Sarma (Kıymalı)',
    altBaslik: 'Haşlanmış beyaz lahana yapraklarına sarılan kıymalı harç; tereyağlı naneli sosuyla',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir', 'ramazan'],
    emoji: '🥬',
    porsiyon: 6,
    hazirlikDk: 50,
    pisirmeDk: 55,
    zorluk: 'zor',
    kaloriPerPorsiyon: 310,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2],
    malzemeler: [
      { ad: 'beyaz lahana', miktar: 1, birim: 'adet', not: 'orta boy' },
      { ad: 'kıyma', miktar: 300, birim: 'g' },
      { ad: 'pirinç', miktar: 150, birim: 'g', not: 'yıkanmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'kuru nane', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'servis için dilimlenmiş' },
    ],
    adimlar: [
      {
        baslik: 'Lahanayı haşla',
        aciklama:
          'Lahananın göbeğini bıçakla oyup çıkar. Bütün halde, tuzlu kaynar suya daldır; dış yapraklar yumuşayıp ayrıldıkça maşayla teker teker al. Yaprakları süzgeçte soğut.',
        sureSn: 900,
      },
      {
        baslik: 'Harcı hazırla',
        aciklama:
          'Kıymayı, pirinci, rendelenmiş soğanı, salçaların yarısını, kuru nanenin yarısını, karabiberi ve tuzu zeytinyağıyla birlikte yoğur.',
        sureSn: 300,
      },
      {
        baslik: 'Yaprakları böl ve sar',
        aciklama:
          'Soğuyan yaprakların kalın orta damarlarını kes, büyük yaprakları avuç içi kadar parçalara böl. Her parçaya bir tatlı kaşığı harç koyup yanlarını kapatarak sıkıca sar.',
        sureSn: 1200,
      },
      {
        baslik: 'Tencereye diz',
        aciklama:
          'Tabana damar kırpıntılarını ser, sarmaları aralıksız şekilde halka halka diz. Kalan salçayı sıcak suda ezip üzerine dök ve ters bir tabakla bastır.',
        sureSn: 300,
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kapağı kapat, kaynayınca ateşi kıs ve pirinçler yumuşayana kadar 45-50 dakika pişir.',
        sureSn: 2850,
      },
      {
        baslik: 'Naneli yağla tamamla',
        aciklama:
          'Küçük tavada tereyağını erit, kalan kuru nane ile pul biberi ekleyip köpürt. Sıcak yağı servis tabağındaki sarmaların üzerine gezdir, limon dilimleriyle sun.',
        sureSn: 120,
      },
    ],
    pufNoktasi:
      'Lahana yaprağının kalın damarı sarmayı hem kırdırır hem geç pişirir; damarı inceltmeden sarma sarmaya çalışma. Haşlama suyuna atacağın çok az toz şeker lahana kokusunu yumuşatır.',
  },
  {
    id: 'kiymali-taze-kabak',
    baslik: 'Kıymalı Taze Kabak Yemeği',
    altBaslik: 'Domatesli kıymalı sosta hafifçe pişen taze kabak; dereotuyla tazelenen yaz yemeği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🥒',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 220,
    beslenmeEtiketleri: ['glutensiz'],
    editorOnayli: true,
    mevsimAylari: [5, 6, 7, 8],
    malzemeler: [
      { ad: 'kabak', miktar: 5, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'kıyma', miktar: 200, birim: 'g' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'dereotu', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Kıymayı kavur',
        aciklama:
          'Zeytinyağını tencerede kızdır, kıymayı ekleyip rengi dönene kadar kavur. Soğanı ilave et ve yumuşayana kadar birlikte çevir.',
        sureSn: 420,
      },
      {
        baslik: 'Domatesli sosu pişir',
        aciklama:
          'Salçayı ekleyip 1 dakika kavur, ardından rendelenmiş domatesi dök. Sos hafif çekene kadar 3-4 dakika pişir.',
        sureSn: 300,
      },
      {
        baslik: 'Kabakları ekle',
        aciklama:
          'Küp doğranmış kabakları tencereye al, tuz ve karabiberi serp, sosla kaplanacak şekilde harmanla.',
        sureSn: 120,
      },
      {
        baslik: 'Az suyla pişir',
        aciklama:
          'Sıcak suyu ekle, kapağı kapat ve kısık ateşte kabaklar diriliğini yitirene ama dağılmayacak kıvama gelene kadar 15-18 dakika pişir.',
        sureSn: 1080,
      },
      {
        baslik: 'Dereotuyla servis et',
        aciklama:
          'Ocaktan alınca kıyılmış dereotunu serp ve 5 dakika dinlendirip servis et. Yanına soğuk yoğurt iyi gider.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Kabak sulu bir sebzedir; suyu abartırsan yemek çorbaya döner. Bir bardak su çoğu zaman fazlasıyla yeter, gerekirse pişerken azar azar eklersin.',
  },

  // ─────────────────────────────────────────────
  // ZEYTİNYAĞLILAR — etsiz
  // ─────────────────────────────────────────────
  {
    id: 'zeytinyagli-biber-dolmasi',
    baslik: 'Zeytinyağlı Biber Dolması',
    altBaslik: 'Çam fıstıklı, kuş üzümlü ve tarçınlı iç pilavla doldurulan soğuk servis dolma',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['misafir', 'osmanli'],
    emoji: '🫑',
    porsiyon: 6,
    hazirlikDk: 40,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'dolmalık biber', miktar: 10, birim: 'adet', not: 'çekirdekleri temizlenmiş' },
      { ad: 'pirinç', miktar: 200, birim: 'g', not: 'ılık tuzlu suda 20 dk bekletilmiş' },
      { ad: 'soğan', miktar: 3, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 100, birim: 'ml' },
      { ad: 'çam fıstığı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kuş üzümü', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tarçın', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'kuru nane', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'yarısı suyu, yarısı servis için' },
      { ad: 'su', miktar: 2.5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Fıstıklı soğanı kavur',
        aciklama:
          'Zeytinyağının yarısını tencerede ısıt, çam fıstıklarını hafif pembeleşene kadar kavur. Soğanları ekleyip şeffaflaşana dek kısık ateşte öldür.',
        sureSn: 480,
      },
      {
        baslik: 'İç pilavı hazırla',
        aciklama:
          'Süzülmüş pirinci ekleyip 3-4 dakika çevir. Kuş üzümü, toz şeker, tarçın, kuru nane, karabiber ve tuzu kat; yarım bardak sıcak su ekleyip suyu çekene kadar pişir. Altını kapatıp maydanozu karıştır.',
        sureSn: 600,
      },
      {
        baslik: 'Biberleri doldur',
        aciklama:
          'Yarı pişmiş iç pilavı biberlere paylaştır; ağızlarında bir parmak boşluk kalsın. İstersen ağızlarını küçük domates parçalarıyla kapatabilirsin.',
        sureSn: 420,
      },
      {
        baslik: 'Tencerede pişir',
        aciklama:
          'Dolmaları tencereye dik diz. Kalan zeytinyağını, limon suyunu ve kalan sıcak suyu ekle. Üzerine ters tabak koyup kapalı olarak, kaynadıktan sonra kısık ateşte 40 dakika pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Soğutarak dinlendir',
        aciklama:
          'Tencerede oda sıcaklığına gelene kadar beklet; zeytinyağlı dolma lezzetini soğurken toplar. Buzdolabında da bir gece dinlenebilir.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Servis et',
        aciklama: 'Dolmaları tabağa al, üzerine tenceredeki yağlı sudan bir kaşık gezdir ve limon dilimleriyle soğuk servis et.',
      },
    ],
    pufNoktasi:
      'İç pilavı tamamen pişirmeden biberlere doldurmak gerekir; pirincin son şişmesi biberin içinde olunca taneler diri ve ayrık kalır. Şeker ve tarçın bu dolmanın imzasıdır, atlamamalı.',
  },
  {
    id: 'soganli-ispanak-yemegi',
    baslik: 'Soğanlı Ispanak Yemeği',
    altBaslik: 'Bol soğanla yumuşatılan ıspanağın az pirinçli, salçalı klasik hali; etsiz ve hafif',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['tek-tencere', '101'],
    emoji: '🥬',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 170,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'ıspanak', miktar: 750, birim: 'g', not: 'ayıklanıp bol suda yıkanmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'pirinç', miktar: 3, birim: 'yemek kaşığı', not: 'yıkanmış' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'servis için' },
    ],
    adimlar: [
      {
        baslik: 'Soğanları öldür',
        aciklama:
          'Zeytinyağını geniş tencerede ısıt; soğanları ekleyip kısık ateşte, acele etmeden şeffaflaşana kadar kavur. Sarımsağı son 1 dakikada kat.',
        sureSn: 480,
      },
      {
        baslik: 'Salçayı kavur',
        aciklama: 'Salçayı ekleyip kokusu çıkana kadar 1 dakika çevir, pul biberi serp.',
        sureSn: 90,
      },
      {
        baslik: 'Ispanağı ekle',
        aciklama:
          'Iri doğranmış ıspanakları tencereye kademeli olarak ekle; her parti çöktükçe yenisini at. Ispanaklar tamamen sönene kadar karıştır.',
        sureSn: 300,
      },
      {
        baslik: 'Pirinçle pişir',
        aciklama:
          'Pirinci ve tuzu serp, sıcak suyu ekle. Kapağı kapatıp kısık ateşte pirinçler yumuşayana kadar 15 dakika pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Dinlendir ve servis et',
        aciklama:
          'Ocaktan alıp 5 dakika dinlendir. Limon sıkarak ya da sarımsaklı yoğurt eşliğinde servis edebilirsin.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Ispanağın kendi suyu yemeğin asıl suyudur; fazladan su eklemekte cimri davran. Sapları atma — ince kıyıp soğanla birlikte kavurursan hem israf olmaz hem lezzet artar.',
  },
  {
    id: 'zeytinyagli-sebzeli-turlu',
    baslik: 'Zeytinyağlı Sebzeli Türlü',
    altBaslik: 'Patlıcan, kabak, taze fasulye ve patatesin tek tencerede buluştuğu etsiz yaz türlüsü',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍆',
    porsiyon: 6,
    hazirlikDk: 25,
    pisirmeDk: 40,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 210,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'patlıcan', miktar: 2, birim: 'adet', not: 'alacalı soyulup iri küp doğranmış' },
      { ad: 'kabak', miktar: 2, birim: 'adet', not: 'iri küp doğranmış' },
      { ad: 'taze fasulye', miktar: 200, birim: 'g', not: 'ayıklanıp ikiye kırılmış' },
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'iri küp doğranmış' },
      { ad: 'havuç', miktar: 1, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', not: 'iri kıyılmış' },
      { ad: 'domates', miktar: 3, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'doğranmış' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 100, birim: 'ml' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'tatlı kaşığı' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Patlıcanları tuzlu suda beklet',
        aciklama:
          'Doğradığın patlıcanları acısının çıkması için tuzlu suda 15 dakika beklet, sonra süzüp kurula.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Soğan ve biberi kavur',
        aciklama:
          'Zeytinyağının yarısını geniş tencerede ısıt; soğanı, sivri biberi ve sarımsağı ekleyip 4-5 dakika çevir. Salçayı katıp kokusu çıkana dek kavur.',
        sureSn: 360,
      },
      {
        baslik: 'Sebzeleri kat kat diz',
        aciklama:
          'Önce patates ve havucu, üstüne taze fasulyeyi, en üste patlıcan ve kabağı yerleştir. Karıştırma; türlünün güzelliği katların bozulmamasında.',
        sureSn: 240,
      },
      {
        baslik: 'Domatesli sosu dök',
        aciklama:
          'Rendelenmiş domatesi, toz şekeri, tuzu, kalan zeytinyağını ve sıcak suyu karıştırıp sebzelerin üzerine gezdir.',
        sureSn: 120,
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kapağı kapat; kaynadıktan sonra kısık ateşte tüm sebzeler yumuşayana kadar 35-40 dakika pişir. Karıştırmak yerine ara sıra tencereyi çevir.',
        sureSn: 2280,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Altını kapatıp 15 dakika dinlendir. Ilık ya da soğuk servis edebilirsin; ekmek banmalık suyu bu yemeğin en sevilen tarafıdır.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Sebzeleri pişme sürelerine göre katmanlamak bu yemeğin sırrıdır: geç pişenler alta, çabuk pişenler üste. Böylece hepsi aynı anda kıvamını bulur, hiçbiri lapa olmaz.',
  },
  {
    id: 'zeytinyagli-kereviz',
    baslik: 'Zeytinyağlı Kereviz',
    altBaslik: 'Portakal suyuyla pişen havuçlu-patatesli kereviz; dereotuyla soğuk servis kış klasiği',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['misafir'],
    emoji: '🥕',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 35,
    zorluk: 'orta',
    kaloriPerPorsiyon: 190,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [11, 12, 1, 2, 3],
    malzemeler: [
      { ad: 'kereviz', miktar: 2, birim: 'adet', not: 'soyulup iri dilimlenmiş, limonlu suda bekletilmiş' },
      { ad: 'havuç', miktar: 2, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'patates', miktar: 1, birim: 'adet', not: 'iri küp doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'zeytinyağı', miktar: 80, birim: 'ml' },
      { ad: 'portakal', miktar: 1, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'yarısı bekletme suyu, yarısı yemeğe' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'dereotu', miktar: 0.5, birim: 'demet', not: 'servis için kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'Kerevizleri hazırla',
        aciklama:
          'Kerevizlerin kabuklarını soy, iri dilimle ve kararmaması için hemen limonlu suya at.',
        sureSn: 480,
      },
      {
        baslik: 'Soğanı yumuşat',
        aciklama:
          'Zeytinyağının yarısını tencerede ısıt, soğanı şeffaflaşana kadar kısık ateşte kavur. Havuçları ekleyip 2-3 dakika çevir.',
        sureSn: 360,
      },
      {
        baslik: 'Sebzeleri yerleştir',
        aciklama:
          'Süzdüğün kerevizleri tencereye tek kat yay, aralarına patatesleri yerleştir. Tuz ve toz şekeri serp.',
        sureSn: 180,
      },
      {
        baslik: 'Portakal suyuyla pişir',
        aciklama:
          'Portakal suyunu, yarım limonun suyunu, kalan zeytinyağını ve sıcak suyu ekle. Kapağı kapat; kaynayınca kısık ateşte kereviz çatalla rahat delinene kadar 30 dakika pişir.',
        sureSn: 1800,
      },
      {
        baslik: 'Soğut ve servis et',
        aciklama:
          'Tencerede kendi suyunda soğumaya bırak. Tabağa alırken suyundan gezdir, üzerine bolca kıyılmış dereotu serp.',
        sureSn: 3600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Portakal suyu kerevizin hafif buruk tadını tatlı bir aromayla dengeler; bu yemeği sıradan haşlamadan ayıran budur. Kereviz havayla temas edince hızla karardığından limonlu su atlanmamalı.',
  },
  {
    id: 'patlican-silkme',
    baslik: 'Patlıcan Silkme (Etsiz)',
    altBaslik: 'Karıştırmadan, tencereyi silkeleyerek pişen bol soğanlı sarımsaklı patlıcan yemeği',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🍆',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 200,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [7, 8, 9],
    malzemeler: [
      { ad: 'patlıcan', miktar: 3, birim: 'adet', not: 'alacalı soyulup iri doğranmış' },
      { ad: 'soğan', miktar: 2, birim: 'adet', not: 'piyazlık doğranmış' },
      { ad: 'domates', miktar: 3, birim: 'adet', not: 'ikisi küp, biri dilim' },
      { ad: 'sivri biber', miktar: 3, birim: 'adet', not: 'iri doğranmış' },
      { ad: 'sarımsak', miktar: 4, birim: 'diş', not: 'bütün ya da ikiye bölünmüş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 100, birim: 'ml' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Patlıcanları hazırla',
        aciklama:
          'Alacalı soyduğun patlıcanları iri parçalara doğra, tuzlu suda 15 dakika bekletip acısını al, süz ve kurula.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Malzemeyi kat kat diz',
        aciklama:
          'Tencerenin tabanına zeytinyağının yarısını dök. Sırasıyla soğan, patlıcan, biber, sarımsak ve küp domatesi katlar halinde yerleştir; karıştırma.',
        sureSn: 300,
      },
      {
        baslik: 'Sosunu gezdir',
        aciklama:
          'Salçayı sıcak suda ez; tuz, toz şeker, karabiber ve kalan zeytinyağıyla karıştırıp tencereye gezdir. En üste dilim domatesleri kapat.',
        sureSn: 120,
      },
      {
        baslik: 'Silkeleyerek pişir',
        aciklama:
          'Kapağı kapat, kaynayınca ateşi iyice kıs. 30-35 dakika boyunca hiç kaşık sokmadan pişir; ara sıra tencereyi iki kulpundan tutup silkele. Yemeğe adını veren hareket budur.',
        sureSn: 2100,
      },
      {
        baslik: 'Dinlendirip servis et',
        aciklama:
          'Altını kapatıp kapaklı olarak 15 dakika dinlendir. Ilık servis et; suyuna ekmek banılır.',
        sureSn: 900,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Kaşık değmeden piştiği için patlıcanlar bütünlüğünü korur, ezilip lapalaşmaz. Silkeleme hareketi sosun katların arasına dolaşmasını sağlar; bu yüzden tencere geniş ve yayvan olmalı.',
  },
  {
    id: 'sarimsakli-brokoli-sote',
    baslik: 'Sarımsaklı Brokoli Sote',
    altBaslik: 'Önce diri haşlanan, sonra sarımsaklı zeytinyağında çevrilen limonlu pratik brokoli',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['15-dakika'],
    emoji: '🥦',
    porsiyon: 4,
    hazirlikDk: 5,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 150,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz', 'diyabetik-dostu'],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'brokoli', miktar: 1, birim: 'adet', not: 'çiçeklerine ayrılmış' },
      { ad: 'sarımsak', miktar: 4, birim: 'diş', not: 'ince dilimlenmiş' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 4, birim: 'su bardağı', not: 'haşlama için' },
    ],
    adimlar: [
      {
        baslik: 'Brokoliyi diri haşla',
        aciklama:
          'Tuzlu suyu kaynat, brokoli çiçeklerini atıp 3 dakika haşla. Rengi parlak yeşile dönünce süzgeçle al; istersen soğuk sudan geçirerek pişmeyi durdur.',
        sureSn: 180,
      },
      {
        baslik: 'Sarımsağı kokulandır',
        aciklama:
          'Geniş tavada zeytinyağını orta ateşte ısıt. Dilimlenmiş sarımsakları ekleyip yakmadan, hafif sararana kadar 1-2 dakika çevir.',
        sureSn: 120,
      },
      {
        baslik: 'Brokoliyi soteleye al',
        aciklama:
          'Süzülmüş brokolileri tavaya ekle, pul biberi ve tuzu serp. Yüksek ateşte 3-4 dakika, kenarları hafif kızarana kadar sotele.',
        sureSn: 240,
      },
      {
        baslik: 'Limonla tamamla',
        aciklama:
          'Ocağı kapat, limon suyunu gezdirip bir kez harmanla. Sıcak ya da ılık servis et.',
        sureSn: 60,
      },
    ],
    pufNoktasi:
      'Haşlama süresini aşma; brokoli 3 dakikadan sonra hızla renk ve doku kaybeder. Soğuk su şoku parlak yeşili sabitler, sotede de dirilik korunur.',
  },
  {
    id: 'zeytinyagli-semizotu',
    baslik: 'Zeytinyağlı Semizotu Yemeği',
    altBaslik: 'Domatesli soğanlı sosta az pirinçle pişen semizotu; yazın en serinleten etsiz yemeği',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🌿',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 160,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz', 'diyabetik-dostu'],
    editorOnayli: true,
    mevsimAylari: [5, 6, 7, 8],
    malzemeler: [
      { ad: 'semizotu', miktar: 2, birim: 'demet', not: 'ayıklanıp iri doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ezilmiş' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'pirinç', miktar: 2, birim: 'yemek kaşığı', not: 'yıkanmış' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Semizotunu ayıkla',
        aciklama:
          'Semizotunun kalın saplarını ayır, yaprak ve ince dalları bol suda birkaç kez yıkayıp süz, iri iri doğra.',
        sureSn: 480,
      },
      {
        baslik: 'Soğanı ve domatesi pişir',
        aciklama:
          'Zeytinyağını tencerede ısıt; soğanı şeffaflaşana kadar kavur, sarımsağı ekleyip 1 dakika daha çevir. Rendelenmiş domatesi dök, suyunu hafif çekene kadar pişir.',
        sureSn: 480,
      },
      {
        baslik: 'Semizotunu ekle',
        aciklama:
          'Doğranmış semizotunu tencereye al, tuz ve pul biberi serp; yapraklar sosla harmanlanıp çökene kadar 2-3 dakika karıştır.',
        sureSn: 180,
      },
      {
        baslik: 'Pirinçle pişir',
        aciklama:
          'Pirinci serpiştirip sıcak suyu ekle. Kapağı kapat ve kısık ateşte pirinçler yumuşayana kadar 15 dakika pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Dinlendir ve servis et',
        aciklama:
          'Ocaktan alıp 10 dakika dinlendir. Ilık ya da soğuk, yanında sarımsaklı yoğurtla servis edebilirsin.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Semizotu ıspanak gibi hızla söner ve kendi suyunu salar; bir bardaktan fazla su ekleme. Saplarının körpe kısımları atılmaz, ince kıyılıp yemeğe girer.',
  },
  {
    id: 'zeytinyagli-bakla',
    baslik: 'Zeytinyağlı Bakla',
    altBaslik: 'Dereotlu, hafif tatlı sosta yumuşacık pişen taze bakla; sarımsaklı yoğurtla servis',
    kategori: 'zeytinyagli',
    koleksiyonlar: ['osmanli', 'misafir'],
    emoji: '🫛',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 230,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    mevsimAylari: [4, 5],
    malzemeler: [
      { ad: 'bakla', miktar: 600, birim: 'g', not: 'taze, kılçıkları ayıklanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 100, birim: 'ml' },
      { ad: 'toz şeker', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'yarısı bekletme, yarısı pişirme için' },
      { ad: 'dereotu', miktar: 1, birim: 'demet', not: 'yarısı yemeğe, yarısı servise' },
      { ad: 'tuz', miktar: 1, birim: 'tatlı kaşığı' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'yoğurt', miktar: 200, birim: 'g', not: 'servis için, isteğe göre sarımsaklı' },
    ],
    adimlar: [
      {
        baslik: 'Baklaları ayıkla',
        aciklama:
          'Taze baklaların uçlarını ve yan kılçıklarını ayıkla, iri olanları ikiye kır. Kararmamaları için limonlu suda beklet.',
        sureSn: 720,
      },
      {
        baslik: 'Soğanı yumuşat',
        aciklama:
          'Zeytinyağının yarısını tencerede ısıt, soğanı kısık ateşte şeffaflaşana kadar yakmadan kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Baklaları ekle',
        aciklama:
          'Süzdüğün baklaları tencereye al; tuzu ve toz şekeri serp, soğanla harmanlaması için 2-3 dakika nazikçe çevir.',
        sureSn: 180,
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kalan zeytinyağını, yarım limonun suyunu ve sıcak suyu ekle. Dereotunun yarısını üstüne yay, kapağı kapat. Kaynayınca kısık ateşte baklalar yumuşayana kadar 35 dakika pişir.',
        sureSn: 2100,
      },
      {
        baslik: 'Suyunda soğut',
        aciklama:
          'Tencereyi ocaktan al ve kapağını açmadan kendi suyunda ılımaya bırak; zeytinyağlı bakla lezzetini dinlenirken kazanır.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Yoğurtla servis et',
        aciklama:
          'Tabağa alıp suyundan bir kaşık gezdir, kalan dereotunu serp. Yanında sarımsaklı yoğurtla soğuk ya da ılık servis et.',
      },
    ],
    pufNoktasi:
      'Bakla nisan-mayıs aylarında körpeyken kabuğuyla pişirilir; mevsim sonuna doğru kılçıklar sertleştiğinden ayıklamaya daha çok özen göstermek gerekir. Şeker-limon dengesi baklanın hafif acımsı tadını yumuşatır.',
  },
];
