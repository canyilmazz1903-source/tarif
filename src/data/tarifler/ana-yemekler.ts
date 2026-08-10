import type { Tarif } from '@/types/tarif';

// Klasik Türk ana yemekleri — 4 porsiyon standardı.
// Ölçü standartları: su bardağı = 200 ml, yemek kaşığı = 15 ml, çay kaşığı = 5 ml.
export const ANA_YEMEKLER: Tarif[] = [
  {
    id: 'karniyarik',
    baslik: 'Karnıyarık',
    altBaslik: 'Kızarmış patlıcanın kıymalı iç harçla buluştuğu, yaz sofralarının vazgeçilmez klasiği',
    kategori: 'ana-yemek',
    koleksiyonlar: [],
    emoji: '🍆',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 430,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'patlıcan', miktar: 4, birim: 'adet', not: 'orta boy, alacalı soyulmuş' },
      { ad: 'kıyma', miktar: 300, birim: 'g', not: 'orta yağlı dana' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ince kıyılmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: '1 tanesi küp, 1 tanesi dilim' },
      { ad: 'sivri biber', miktar: 4, birim: 'adet' },
      { ad: 'domates salçası', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'su bardağı', not: 'kızartma için' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Patlıcanları tuzlu suda beklet',
        aciklama:
          'Patlıcanları alacalı soyup saplarını bırak. Acısının çıkması için bol tuzlu suda 15 dakika beklet, sonra durulayıp iyice kurula.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Patlıcanları kızart',
        aciklama:
          'Ayçiçek yağını geniş tavada kızdır. Patlıcanları her yüzü hafif renk alana kadar bütün halde kızart, kağıt havluya al.',
        sureSn: 600,
      },
      {
        baslik: 'Soğanı yağda kavur',
        aciklama:
          'Kızartma yağından 2 yemek kaşığını tencereye al. Doğranmış soğanı pembeleşene kadar orta ateşte kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Kıymayı ekleyip kavur',
        aciklama:
          'Kıymayı ekle, rengi dönüp suyunu çekene kadar kavur. Sarımsağı ve 1 yemek kaşığı salçayı ekleyip 1 dakika daha çevir.',
        sureSn: 420,
      },
      {
        baslik: 'İç harcı tamamla',
        aciklama:
          'Küp doğranmış domatesi, tuzu ve karabiberi ekle; domates suyunu çekene kadar pişir. Ocaktan alıp kıyılmış maydanozu karıştır.',
        sureSn: 300,
      },
      {
        baslik: 'Patlıcanları doldur',
        aciklama:
          'Patlıcanları fırın kabına diz, ortalarını boydan yar ve kaşıkla açarak iç harcı doldur. Üzerlerine dilim domates ve sivri biber yerleştir.',
      },
      {
        baslik: 'Salçalı suyla fırınla',
        aciklama:
          'Kalan 1 yemek kaşığı salçayı sıcak suda ez, kabın kenarından tepsiye dök. Önceden ısıtılmış 190 derece fırında 25 dakika pişir.',
        sureSn: 1500,
      },
    ],
    pufNoktasi:
      'Patlıcanları kızartmadan önce iyice kurularsan yağ sıçratmaz ve çok daha az yağ çeker.',
  },
  {
    id: 'kuru-fasulye',
    baslik: 'Etli Kuru Fasulye',
    altBaslik: 'Tek tencerede pişen, salçalı ve bol tane etli; pilavla efsane olan lokanta usulü klasik',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', 'ramazan'],
    emoji: '🫘',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 90,
    zorluk: 'orta',
    kaloriPerPorsiyon: 445,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuru fasulye', miktar: 2, birim: 'su bardağı', not: 'bir gece önceden ıslatılmış' },
      { ad: 'kuşbaşı et', miktar: 250, birim: 'g', not: 'küçük doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Fasulyeyi bir gece suda beklet',
        aciklama:
          'Kuru fasulyeyi bol suyla yıkayıp üzerini 3 parmak geçecek kadar suda en az 8 saat beklet. Islatma suyunu dök.',
        beklemeAdimi: true,
      },
      {
        baslik: 'Fasulyeyi ön haşla',
        aciklama:
          'Islatılmış fasulyeyi tuzsuz suda, taneler hafif yumuşayana kadar yaklaşık 30 dakika haşla ve süz.',
        sureSn: 1800,
      },
      {
        baslik: 'Eti suyunu çektirerek sotele',
        aciklama:
          'Tencerede tereyağı ve ayçiçek yağını erit. Kuşbaşı eti yüksek ateşte, salıverdiği suyu geri çekene kadar sotele.',
        sureSn: 600,
      },
      {
        baslik: 'Soğanı ekleyip kavur',
        aciklama: 'Doğranmış soğanı ekle, yumuşayıp pembeleşene kadar orta ateşte kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Salçaları kokusu çıkana dek kavur',
        aciklama: 'Domates ve biber salçasını ekle, sürekli karıştırarak 2 dakika kavur.',
        sureSn: 120,
      },
      {
        baslik: 'Fasulye ve sıcak suyu ekle',
        aciklama:
          'Haşlanmış fasulyeyi, tuzu, pul biberi ve 5 su bardağı sıcak suyu ekleyip karıştır; kaynamasını bekle.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kapağını kapat, et ve fasulye iyice yumuşayıp suyu hafif çekene kadar kısık ateşte 45 dakika pişir.',
        sureSn: 2700,
      },
    ],
    pufNoktasi:
      'Tuzu en başta değil suyla birlikte ekle; ıslatma suyunu dökmek hem pişmeyi hızlandırır hem gaz yapmasını azaltır.',
  },
  {
    id: 'izmir-kofte',
    baslik: 'İzmir Köfte',
    altBaslik: 'Fırında salçalı sosta pişen köfte, patates ve biberle; tepsisiyle sofraya gelen ev klasiği',
    kategori: 'ana-yemek',
    koleksiyonlar: [],
    emoji: '🧆',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 45,
    zorluk: 'orta',
    kaloriPerPorsiyon: 520,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kıyma', miktar: 400, birim: 'g', grup: 'Köfte için', not: 'orta yağlı' },
      { ad: 'bayat ekmek', miktar: 2, birim: 'dilim', grup: 'Köfte için', not: 'kabukları alınıp ufalanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Köfte için', not: 'rendelenmiş, suyu sıkılmış' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Köfte için' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'patates', miktar: 3, birim: 'adet', grup: 'Sosu ve sebzeleri için', not: 'elma dilimi doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', grup: 'Sosu ve sebzeleri için', not: 'dilimlenmiş' },
      { ad: 'sivri biber', miktar: 4, birim: 'adet', grup: 'Sosu ve sebzeleri için' },
      { ad: 'domates salçası', miktar: 1.5, birim: 'yemek kaşığı', grup: 'Sosu ve sebzeleri için' },
      { ad: 'ayçiçek yağı', miktar: 4, birim: 'yemek kaşığı', grup: 'Sosu ve sebzeleri için' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Sosu ve sebzeleri için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Köfte harcını yoğur',
        aciklama:
          'Kıymayı, ufalanmış bayat ekmeği, rendelenmiş soğanı, yumurtayı ve baharatları derin kapta 5 dakika iyice yoğur.',
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama: 'Harcın üzerini kapatıp buzdolabında 15 dakika dinlendir; böylece köfteler dağılmaz.',
        sureSn: 900,
        beklemeAdimi: true,
      },
      {
        baslik: 'Parmak köfteleri mühürle',
        aciklama:
          'Harçtan ceviz büyüklüğünde parçalar kopar, parmak şeklinde yuvarla. Tavada 2 yemek kaşığı yağla her yüzünü yüksek ateşte mühürle.',
        sureSn: 360,
      },
      {
        baslik: 'Patatesleri hafif kızart',
        aciklama:
          'Aynı tavada kalan yağla elma dilimi patatesleri her yüzü hafif renk alana kadar kızart; tam pişmesine gerek yok.',
        sureSn: 480,
      },
      {
        baslik: 'Salçalı sosu hazırla',
        aciklama: 'Domates salçasını 1,5 su bardağı sıcak suda ez, tuzla tatlandır.',
      },
      {
        baslik: 'Tepsiye dizip fırınla',
        aciklama:
          'Köfte ve patatesleri fırın kabına aralıklı diz; aralarına dilim domates ve biberleri yerleştir. Sosu gezdirip 200 derece fırında 30 dakika pişir.',
        sureSn: 1800,
      },
    ],
    pufNoktasi:
      'Köfteleri fırından önce tavada mühürlemek hem şekillerini korur hem sosun içinde dağılmalarını önler.',
  },
  {
    id: 'hunkar-begendi',
    baslik: 'Hünkar Beğendi',
    altBaslik: 'Közlenmiş patlıcanlı kaşarlı beğendi üzerinde tas kebabı; saray mutfağının gözdesi',
    kategori: 'ana-yemek',
    koleksiyonlar: ['osmanli', 'misafir'],
    emoji: '👑',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 90,
    zorluk: 'zor',
    kaloriPerPorsiyon: 560,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'kuşbaşı et', miktar: 500, birim: 'g', grup: 'Et sotesi için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Et sotesi için', not: 'yemeklik doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', grup: 'Et sotesi için', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Et sotesi için' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Et sotesi için' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Et sotesi için' },
      { ad: 'su', miktar: 2, birim: 'su bardağı', grup: 'Et sotesi için', not: 'sıcak' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'Et sotesi için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Et sotesi için' },
      { ad: 'patlıcan', miktar: 4, birim: 'adet', grup: 'Beğendi için', not: 'iri boy' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı', grup: 'Beğendi için' },
      { ad: 'un', miktar: 2, birim: 'yemek kaşığı', grup: 'Beğendi için' },
      { ad: 'süt', miktar: 1.5, birim: 'su bardağı', grup: 'Beğendi için', not: 'ılık' },
      { ad: 'kaşar peyniri', miktar: 60, birim: 'g', grup: 'Beğendi için', not: 'rendelenmiş' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', grup: 'Beğendi için', not: 'suyu' },
    ],
    adimlar: [
      {
        baslik: 'Patlıcanları közle',
        aciklama:
          'Patlıcanları çatalla birkaç yerinden delip ocak alevinde veya 220 derece fırında, kabukları kararıp içi yumuşayana kadar közle.',
        sureSn: 1500,
      },
      {
        baslik: 'Eti suyunu çektirerek sotele',
        aciklama:
          'Tencerede tereyağı ve ayçiçek yağını kızdır. Kuşbaşı eti, salıverdiği suyu geri çekene kadar yüksek ateşte sotele.',
        sureSn: 900,
      },
      {
        baslik: 'Soğan ve salçayı kavur',
        aciklama: 'Soğanı ekleyip yumuşat, salçayı ilave edip kokusu çıkana kadar kavur.',
        sureSn: 300,
      },
      {
        baslik: 'Eti yumuşayana dek pişir',
        aciklama:
          'Rendelenmiş domatesi, tuzu, karabiberi ve sıcak suyu ekle. Kapağı kapalı, kısık ateşte et lokum gibi olana kadar yaklaşık 60 dakika pişir.',
        sureSn: 3600,
      },
      {
        baslik: 'Közlenen patlıcanları ayıkla',
        aciklama:
          'Patlıcanların kabuklarını soy, kararmaması için limon suyuyla harmanla ve bıçakla ezerek püre haline getir.',
      },
      {
        baslik: 'Beğendi için meyane yap',
        aciklama: 'Ayrı tencerede tereyağını erit, unu ekle; kokusu gidene kadar orta ateşte kavur.',
        sureSn: 180,
      },
      {
        baslik: 'Patlıcan ve sütü çırparak pişir',
        aciklama:
          'Patlıcan püresini meyaneye ekleyip ez. Ilık sütü azar azar döküp çırparak pürüzsüz, koyu bir kıvam alana kadar pişir.',
        sureSn: 300,
      },
      {
        baslik: 'Kaşarı ekleyip kıvam ver',
        aciklama: 'Rendelenmiş kaşarı ve tuzu ekle; peynir eriyince ocaktan al.',
      },
      {
        baslik: 'Beğendi üstünde servis et',
        aciklama: 'Sıcak beğendiyi tabağa yay, ortasını havuz gibi aç ve et sotesini suyuyla üzerine paylaştır.',
      },
    ],
    pufNoktasi:
      'Közlenen patlıcanları limonlu suyla harmanlamak beğendinin bembeyaz kalmasını sağlar.',
  },
  {
    id: 'etli-nohut',
    baslik: 'Etli Nohut Yemeği',
    altBaslik: 'Lokanta usulü, bol salçalı tek tencere yemeği; yanına pirinç pilavıyla tam bir öğün',
    kategori: 'ana-yemek',
    koleksiyonlar: ['tek-tencere', 'ramazan'],
    emoji: '🍲',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 80,
    zorluk: 'orta',
    kaloriPerPorsiyon: 425,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    malzemeler: [
      { ad: 'nohut', miktar: 2, birim: 'su bardağı', not: 'bir gece önceden ıslatılmış' },
      { ad: 'kuşbaşı et', miktar: 250, birim: 'g' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'domates salçası', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 0.5, birim: 'yemek kaşığı' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 4, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Nohudu bir gece suda beklet',
        aciklama: 'Nohudu yıkayıp bol suda en az 10 saat beklet; ıslatma suyunu dök.',
        beklemeAdimi: true,
      },
      {
        baslik: 'Nohudu ön haşla',
        aciklama: 'Nohudu tuzsuz suda, taneler yumuşamaya başlayana kadar 40 dakika haşlayıp süz.',
        sureSn: 2400,
      },
      {
        baslik: 'Eti soğanla sotele',
        aciklama:
          'Tencerede tereyağı ve ayçiçek yağını kızdır. Eti suyunu çekene kadar sotele, soğanı ekleyip pembeleşene dek kavur.',
        sureSn: 600,
      },
      {
        baslik: 'Salçaları kavur',
        aciklama: 'Domates ve biber salçasını ekleyip sürekli karıştırarak 2 dakika kavur.',
        sureSn: 120,
      },
      {
        baslik: 'Nohut ve sıcak suyu ekle',
        aciklama: 'Haşlanmış nohudu, tuzu, pul biberi ve sıcak suyu ekleyip kaynamaya bırak.',
      },
      {
        baslik: 'Kısık ateşte pişir',
        aciklama:
          'Kapağı kapalı, nohutlar iyice yumuşayıp suyu kıvam alana kadar kısık ateşte 35 dakika pişir.',
        sureSn: 2100,
      },
    ],
    pufNoktasi:
      'Düdüklü tencere kullanırsan ön haşlamayı atlayıp etle nohudu birlikte 25 dakikada pişirebilirsin.',
  },
  {
    id: 'tavuk-sote',
    baslik: 'Tavuk Sote',
    altBaslik: 'Bol sebzeli, kekikli pratik tavuk sote; hafta içi akşamlarının kurtarıcısı',
    kategori: 'ana-yemek',
    koleksiyonlar: [],
    emoji: '🥘',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 330,
    beslenmeEtiketleri: [],
    editorOnayli: false,
    malzemeler: [
      { ad: 'tavuk göğsü', miktar: 500, birim: 'g', not: 'kuşbaşı doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yarım ay doğranmış' },
      { ad: 'kırmızı biber', miktar: 1, birim: 'adet', not: 'jülyen doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'domates', miktar: 2, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', not: 'ince kıyılmış' },
      { ad: 'ayçiçek yağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Tavukları yüksek ateşte mühürle',
        aciklama:
          'Geniş tavada yağı iyice kızdır. Kuşbaşı tavukları tek katman yayıp karıştırmadan renk alana, sonra çevirerek her yüzü mühürlenene kadar pişir.',
        sureSn: 300,
      },
      {
        baslik: 'Soğan ve biberleri ekle',
        aciklama: 'Soğanı ve biberleri ekle; sebzeler hafif yumuşayana kadar yüksek ateşte sotele.',
        sureSn: 300,
      },
      {
        baslik: 'Salça ve sarımsağı kavur',
        aciklama: 'Salçayı ve sarımsağı ekleyip kokusu çıkana kadar 1-2 dakika çevir.',
        sureSn: 120,
      },
      {
        baslik: 'Domates ve suyu ekle',
        aciklama: 'Küp domatesi, sıcak suyu, tuzu ve karabiberi ekleyip karıştır.',
      },
      {
        baslik: 'Kapağı kapalı pişir',
        aciklama:
          'Kapağını kapat, tavuklar pişip sos hafif çekene kadar orta-kısık ateşte 10 dakika pişir.',
        sureSn: 600,
      },
      {
        baslik: 'Kekikle tatlandırıp dinlendir',
        aciklama: 'Ocaktan almadan kekik ve pul biberi ekle; kapağı kapalı 5 dakika dinlendirip servis et.',
        sureSn: 300,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Tavukları tavaya tek katman yayıp ilk 2 dakika hiç karıştırmazsan haşlanmaz, güzelce mühürlenir.',
  },
  {
    id: 'firinda-tavuk-but-patatesli',
    baslik: 'Fırında Tavuk But (Patatesli)',
    altBaslik: 'Salçalı yoğurtlu sosla marine edilen butlar patateslerle tek tepside; pratik ve doyurucu',
    kategori: 'ana-yemek',
    koleksiyonlar: [],
    emoji: '🍗',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 55,
    zorluk: 'orta',
    kaloriPerPorsiyon: 540,
    beslenmeEtiketleri: [],
    editorOnayli: false,
    malzemeler: [
      { ad: 'tavuk but', miktar: 800, birim: 'g', not: '4 adet kalçalı but' },
      { ad: 'patates', miktar: 4, birim: 'adet', not: 'elma dilimi doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'halka doğranmış' },
      { ad: 'sarımsak', miktar: 3, birim: 'diş', not: 'ezilmiş' },
      { ad: 'yoğurt', miktar: 2, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'kekik', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'tuz', miktar: 1.5, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 0.5, birim: 'su bardağı', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Marinasyon sosunu hazırla',
        aciklama:
          'Derin kapta yoğurdu, salçaları, zeytinyağını, ezilmiş sarımsağı ve baharatları çırparak pürüzsüz bir sos yap.',
      },
      {
        baslik: 'Butları soslayıp beklet',
        aciklama:
          'Butları sosun üçte ikisiyle iyice ovala. Üzerini kapatıp buzdolabında en az 30 dakika marine et.',
        sureSn: 1800,
        beklemeAdimi: true,
      },
      {
        baslik: 'Patatesleri sosla harmanla',
        aciklama: 'Elma dilimi patatesleri ve halka soğanı kalan sosla harmanlayıp tepsiye yay.',
      },
      {
        baslik: 'Tepsiyi düzenle',
        aciklama:
          'Butları patateslerin üzerine yerleştir, tepsinin kenarından sıcak suyu ekle ve üzerini folyoyla kapat.',
      },
      {
        baslik: 'Folyolu pişir',
        aciklama: 'Önceden ısıtılmış 200 derece fırında, folyo kapalı 40 dakika pişir.',
        sureSn: 2400,
      },
      {
        baslik: 'Folyoyu açıp kızart',
        aciklama:
          'Folyoyu al, butların üzeri nar gibi kızarana kadar 15 dakika daha pişir. 5 dakika dinlendirip servis et.',
        sureSn: 900,
      },
    ],
    pufNoktasi:
      'Sosa katılan yoğurt tavuğu yumuşacık yapar; folyoyu son 15 dakikada açmak hem sulu hem kızarmış but demektir.',
  },
  {
    id: 'hamsi-tava',
    baslik: 'Hamsi Tava',
    altBaslik: 'Mısır ununa bulanıp çıtır kızaran Karadeniz klasiği; yanında bol limon ve soğan piyazı',
    kategori: 'ana-yemek',
    koleksiyonlar: [],
    emoji: '🐟',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 470,
    beslenmeEtiketleri: [],
    editorOnayli: true,
    mevsimAylari: [10, 11, 12, 1, 2],
    malzemeler: [
      { ad: 'hamsi', miktar: 600, birim: 'g', not: 'taze, kılçığı ayıklanmış' },
      { ad: 'mısır unu', miktar: 1, birim: 'su bardağı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'su bardağı', not: 'kızartma için' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'dilimlenmiş, servis için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'piyaz için, ince doğranmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'piyaz için, kıyılmış' },
    ],
    adimlar: [
      {
        baslik: 'Hamsileri ayıkla',
        aciklama:
          'Hamsilerin başını kopar, karnını açıp kılçığını çıkar ve bol suyla yıka.',
      },
      {
        baslik: 'Tuzlayıp süzgeçte beklet',
        aciklama: 'Hamsileri tuzlayıp süzgeçte 10 dakika beklet; fazla suyunu bırakır ve eti sıkılaşır.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Mısır ununa bula',
        aciklama:
          'Hamsileri geniş bir kapta mısır ununa tek tek bula, fazla ununu silkele.',
      },
      {
        baslik: 'Kızgın yağda kızart',
        aciklama:
          'Yağı geniş tavada iyice kızdır. Hamsileri tavaya yan yana diz; her iki yüzünü de altın rengi olana kadar toplam 4-5 dakika kızart.',
        sureSn: 270,
      },
      {
        baslik: 'Fazla yağını süzdür',
        aciklama: 'Kızaran hamsileri kağıt havlu serili tabağa alıp yağını süzdür.',
      },
      {
        baslik: 'Piyaz ve limonla servis et',
        aciklama: 'İnce doğranmış soğanı maydanozla ovup piyaz yap; hamsileri limon dilimleriyle sıcak servis et.',
      },
    ],
    pufNoktasi:
      'Yağ yeterince kızmadan hamsileri atma; soğuk yağ balığın una yapışıp dağılmasına ve yağ çekmesine yol açar.',
  },
  {
    id: 'hasanpasa-koftesi',
    baslik: 'Hasanpaşa Köftesi',
    altBaslik: 'Patates püresi yuvalı, kaşarlı fırın köftesi; sunumuyla sofraya yakışan Osmanlı mirası',
    kategori: 'ana-yemek',
    koleksiyonlar: ['misafir'],
    emoji: '🥔',
    porsiyon: 4,
    hazirlikDk: 30,
    pisirmeDk: 40,
    zorluk: 'orta',
    kaloriPerPorsiyon: 550,
    beslenmeEtiketleri: [],
    editorOnayli: false,
    malzemeler: [
      { ad: 'kıyma', miktar: 400, birim: 'g', grup: 'Köfte için', not: 'orta yağlı' },
      { ad: 'bayat ekmek', miktar: 2, birim: 'dilim', grup: 'Köfte için', not: 'ufalanmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Köfte için', not: 'rendelenmiş' },
      { ad: 'yumurta', miktar: 1, birim: 'adet', grup: 'Köfte için' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'patates', miktar: 4, birim: 'adet', grup: 'Püre için' },
      { ad: 'tereyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Püre için' },
      { ad: 'süt', miktar: 0.5, birim: 'su bardağı', grup: 'Püre için', not: 'ılık' },
      { ad: 'kaşar peyniri', miktar: 80, birim: 'g', grup: 'Püre için', not: 'rendelenmiş' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Köfte harcını yoğur',
        aciklama:
          'Kıymayı, ufalanmış ekmeği, rendelenmiş soğanı, yumurtayı ve baharatları 5 dakika iyice yoğur.',
      },
      {
        baslik: 'Harcı buzdolabında dinlendir',
        aciklama: 'Harcın üzerini kapatıp buzdolabında 20 dakika dinlendir.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Patatesleri haşla',
        aciklama: 'Patatesleri kabuklu olarak yumuşayana kadar 20 dakika haşla, soyup ez.',
        sureSn: 1200,
      },
      {
        baslik: 'Püreyi hazırla',
        aciklama:
          'Ezilmiş patatese tereyağını, ılık sütü ve tuzu ekleyip pürüzsüz olana kadar çırp.',
      },
      {
        baslik: 'Köfteleri çukur açarak ön pişir',
        aciklama:
          'Harçtan iri toplar yap, tepsiye diz ve ortalarına bardak diplerini bastırarak çukur aç. 200 derece fırında 15 dakika ön pişir.',
        sureSn: 900,
      },
      {
        baslik: 'Çukurlara püre sık, kaşar serp',
        aciklama:
          'Köftelerin çukurlarına sıkma torbasıyla püreyi doldur, üzerlerine kaşar serp. Salçayı sıcak suda ezip tepsinin kenarından dök.',
      },
      {
        baslik: 'Kaşar kızarana dek fırınla',
        aciklama: 'Kaşarlar eriyip hafif kızarana kadar 200 derece fırında 15 dakika daha pişir.',
        sureSn: 900,
      },
    ],
    pufNoktasi:
      'Köftelerin çukurunu bardak dibiyle açarsan hepsi eşit boyda olur ve püre pişerken taşmaz.',
  },
  {
    id: 'patatesli-yumurtali-oturtma',
    baslik: 'Patatesli Yumurtalı Oturtma',
    altBaslik: 'Artan haşlanmış patatesleri kıymalı harç ve yumurtayla fırında değerlendiren tepsi yemeği',
    kategori: 'ana-yemek',
    koleksiyonlar: ['artan'],
    emoji: '🍳',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 35,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 480,
    beslenmeEtiketleri: [],
    editorOnayli: false,
    malzemeler: [
      { ad: 'patates', miktar: 5, birim: 'adet', not: 'haşlanmış (artan), kalın dilimlenmiş' },
      { ad: 'kıyma', miktar: 300, birim: 'g' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'yemeklik doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'doğranmış' },
      { ad: 'domates salçası', miktar: 1.5, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'yumurta', miktar: 4, birim: 'adet' },
      { ad: 'kaşar peyniri', miktar: 50, birim: 'g', not: 'rendelenmiş' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'kekik', miktar: 0.5, birim: 'çay kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Haşlanmış patatesleri dilimle',
        aciklama:
          'Buzdolabından çıkan haşlanmış patatesleri soyup 1 cm kalınlığında dilimle ve yağlanmış fırın kabına diz.',
      },
      {
        baslik: 'Kıymayı soğanla kavur',
        aciklama:
          'Tavada yağı kızdır; kıymayı suyunu çekene kadar kavur, soğanı ve biberi ekleyip yumuşat.',
        sureSn: 480,
      },
      {
        baslik: 'Salça ve baharatları ekle',
        aciklama: '1 yemek kaşığı salçayı, tuzu, karabiberi ve kekiği ekleyip 2 dakika daha kavur.',
        sureSn: 120,
      },
      {
        baslik: 'Harcı patateslerin üzerine yay',
        aciklama:
          'Kıymalı harcı patates dilimlerinin üzerine eşit şekilde yay. Kalan salçayı sıcak suda ezip üzerine gezdir.',
      },
      {
        baslik: 'Fırında pişir',
        aciklama: 'Önceden ısıtılmış 190 derece fırında 20 dakika pişir.',
        sureSn: 1200,
      },
      {
        baslik: 'Yumurtaları kırıp pişir',
        aciklama:
          'Tepsiyi çıkar, kaşıkla dört yuva aç ve her birine yumurta kır. Kaşarı serpip yumurta beyazları tutana kadar 8 dakika daha fırınla.',
        sureSn: 480,
      },
    ],
    pufNoktasi:
      'Buzdolabında bekleyen haşlanmış patates dilimlenirken dağılmaz; bu yemek için taze haşlanmıştan bile iyidir.',
  },
  {
    id: 'sade-pirinc-pilavi',
    baslik: 'Sade Pirinç Pilavı',
    altBaslik: 'Tane tane, tereyağlı klasik pilav; ölçüsü ve demlenmesiyle mutfağın temel dersi',
    kategori: 'ana-yemek',
    koleksiyonlar: ['101'],
    emoji: '🍚',
    porsiyon: 4,
    hazirlikDk: 25,
    pisirmeDk: 15,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 320,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'pirinç', miktar: 2, birim: 'su bardağı', not: 'baldo veya osmancık' },
      { ad: 'su', miktar: 3, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'tereyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'ayçiçek yağı', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Pirinci tuzlu ılık suda beklet',
        aciklama:
          'Pirinci üzerini geçen tuzlu ılık suda 20 dakika beklet; fazla nişastası çıksın.',
        sureSn: 1200,
        beklemeAdimi: true,
      },
      {
        baslik: 'Pirinci yıkayıp süz',
        aciklama: 'Bekleyen pirinci suyu berraklaşana kadar birkaç kez yıka ve iyice süz.',
      },
      {
        baslik: 'Pirinci yağda kavur',
        aciklama:
          'Tencerede tereyağı ve ayçiçek yağını erit. Süzülmüş pirinci taneler şeffaflaşana kadar orta ateşte kavur.',
        sureSn: 240,
      },
      {
        baslik: 'Sıcak su ve tuzu ekle',
        aciklama:
          '3 su bardağı sıcak suyu ve tuzu ekle, bir kez karıştır ve kaynayınca kapağını kapat.',
      },
      {
        baslik: 'Kısık ateşte suyunu çektir',
        aciklama:
          'En kısık ateşte, kapağını hiç açmadan pirinç suyunu tamamen çekene kadar 12 dakika pişir.',
        sureSn: 720,
      },
      {
        baslik: 'Demlendir',
        aciklama:
          'Ocağı kapat, kapağın altına kağıt havlu yerleştir ve pilavı 10 dakika demlendir. Servisten önce kaşıkla havalandır.',
        sureSn: 600,
        beklemeAdimi: true,
      },
    ],
    pufNoktasi:
      'Altın oran 1 ölçü pirince 1,5 ölçü sıcak sudur; demlenirken kapağın altındaki kağıt havlu buharı emip pilavı tane tane yapar.',
  },
  {
    id: 'ekmek-koftesi',
    baslik: 'Ekmek Köftesi',
    altBaslik: 'Bayat ekmeği çöpe atmayan, salçalı sosuyla ana yemek olan israf önleyici lezzet',
    kategori: 'ana-yemek',
    koleksiyonlar: ['artan'],
    emoji: '🍞',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 20,
    zorluk: 'orta',
    kaloriPerPorsiyon: 340,
    beslenmeEtiketleri: ['vejetaryen'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'bayat ekmek', miktar: 8, birim: 'dilim', grup: 'Köfte için' },
      { ad: 'yumurta', miktar: 2, birim: 'adet', grup: 'Köfte için' },
      { ad: 'soğan', miktar: 1, birim: 'adet', grup: 'Köfte için', not: 'rendelenmiş, suyu sıkılmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', grup: 'Köfte için', not: 'ince kıyılmış' },
      { ad: 'un', miktar: 2, birim: 'yemek kaşığı', grup: 'Köfte için' },
      { ad: 'kimyon', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'pul biber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'karabiber', miktar: 0.5, birim: 'çay kaşığı', grup: 'Köfte için' },
      { ad: 'ayçiçek yağı', miktar: 0.5, birim: 'su bardağı', grup: 'Köfte için', not: 'kızartma için' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'zeytinyağı', miktar: 1, birim: 'yemek kaşığı', grup: 'Sosu için' },
      { ad: 'sarımsak', miktar: 2, birim: 'diş', grup: 'Sosu için', not: 'ezilmiş' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', grup: 'Sosu için', not: 'sıcak' },
    ],
    adimlar: [
      {
        baslik: 'Bayat ekmekleri ıslat',
        aciklama:
          'Bayat ekmekleri suya batırıp çıkar, avucunla iyice sıkarak sularını boşalt ve derin bir kaba ufala.',
      },
      {
        baslik: 'Harcı yoğur',
        aciklama:
          'Ekmeğin üzerine yumurtayı, rendelenmiş soğanı, maydanozu, unu ve baharatları ekleyip hamur kıvamına gelene kadar yoğur.',
      },
      {
        baslik: 'Harcı dinlendir',
        aciklama: 'Harcı buzdolabında 10 dakika dinlendir; şekil vermesi kolaylaşır.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Köftelere şekil ver',
        aciklama: 'Elini hafif ıslatıp harçtan ceviz büyüklüğünde parçalar kopar ve yassı köfteler yap.',
      },
      {
        baslik: 'Kızgın yağda kızart',
        aciklama:
          'Yağı tavada kızdır; köfteleri her iki yüzü altın rengi olana kadar kızartıp kağıt havluya al.',
        sureSn: 360,
      },
      {
        baslik: 'Salçalı sosu hazırla',
        aciklama:
          'Küçük tencerede zeytinyağıyla sarımsağı ve salçayı 1 dakika kavur, sıcak suyu ve bir tutam tuzu ekleyip kaynat.',
        sureSn: 180,
      },
      {
        baslik: 'Köfteleri sosta pişir',
        aciklama:
          'Kızaran köfteleri kaynayan sosa bırak ve kısık ateşte 5 dakika, sosu hafif çekene kadar pişir.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Ekmeklerin suyunu ne kadar iyi sıkarsan köfteler o kadar az yağ çeker ve kızartırken dağılmaz.',
  },
];
