import type { Tarif } from '@/types/tarif';

export const SALATALAR: Tarif[] = [
  {
    id: 'coban-salata',
    baslik: 'Çoban Salata',
    altBaslik: 'Domates, salatalık ve sivri biberle klasik yaz salatası',
    kategori: 'salata',
    koleksiyonlar: ['15-dakika'],
    emoji: '🥗',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 130,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'domates', miktar: 3, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'salatalık', miktar: 2, birim: 'adet', not: 'küp doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'ince yarım ay doğranmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri doğra',
        aciklama:
          'Domatesleri ve salatalıkları küp küp, sivri biberleri halka halka doğra. Soğanı ince yarım ay şeklinde kes.',
      },
      {
        baslik: 'Maydanozu kıy',
        aciklama:
          'Maydanozu yıkayıp iyice kurula, ince ince kıyarak sebzelerin üzerine ekle.',
      },
      {
        baslik: 'Sosu hazırla ve karıştır',
        aciklama:
          'Zeytinyağı, limon suyu ve tuzu küçük bir kasede çırp; salatanın üzerine gezdirip nazikçe harmanla.',
      },
    ],
    pufNoktasi:
      'Domateslerin suyunu salmaması için sosu servisten hemen önce ekle; soğanı tuzla hafifçe ovarsan acısı gider.',
  },
  {
    id: 'kisir',
    baslik: 'Kısır',
    altBaslik: 'Nar ekşili, bol yeşillikli klasik ince bulgur salatası',
    kategori: 'salata',
    koleksiyonlar: ['misafir'],
    emoji: '🥗',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 260,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'ince bulgur', miktar: 2, birim: 'su bardağı' },
      { ad: 'su', miktar: 1.5, birim: 'su bardağı', not: 'kaynar' },
      { ad: 'domates salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'biber salçası', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'nar ekşisi', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 0.5, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'taze soğan', miktar: 3, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'taze nane', miktar: 0.25, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'salatalık', miktar: 1, birim: 'adet', not: 'küçük küp doğranmış' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Bulguru demle',
        aciklama:
          'İnce bulguru geniş bir kaba al, üzerine kaynar suyu dök ve kapağını kapatarak yumuşayana kadar demlenmeye bırak.',
        sureSn: 600,
        beklemeAdimi: true,
      },
      {
        baslik: 'Salçaları yedir',
        aciklama:
          'Demlenen bulgura salçaları, tuzu ve pul biberi ekle; elinle iyice yoğurarak salçayı her tanesine yedir.',
      },
      {
        baslik: 'Yeşillikleri doğra',
        aciklama:
          'Taze soğan, maydanoz ve naneyi ince ince kıy, salatalığı küçük küpler halinde doğra.',
      },
      {
        baslik: 'Soslayıp harmanla',
        aciklama:
          'Zeytinyağı, nar ekşisi ve limon suyunu ekleyip yeşilliklerle birlikte harmanla; tadına bakarak tuzunu ayarla.',
      },
    ],
    pufNoktasi:
      'Bulgura suyu birebir vermek yerine biraz az koy; kalan nemi limon suyu ve nar ekşisi tamamlar, tane tane bir kısır olur.',
  },
  {
    id: 'gavurdagi-salatasi',
    baslik: 'Gavurdağı Salatası',
    altBaslik: 'Cevizli, nar ekşili Antep usulü ince doğranmış salata',
    kategori: 'salata',
    koleksiyonlar: ['misafir'],
    emoji: '🥗',
    porsiyon: 4,
    hazirlikDk: 20,
    pisirmeDk: 0,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 190,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'domates', miktar: 4, birim: 'adet', not: 'çok ince küp doğranmış' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'soğan', miktar: 1, birim: 'adet', not: 'çok ince doğranmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'ceviz içi', miktar: 50, birim: 'g', not: 'iri çekilmiş' },
      { ad: 'nar ekşisi', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sebzeleri incecik doğra',
        aciklama:
          'Domates, sivri biber ve soğanı olabildiğince küçük küpler halinde doğra; maydanozu ince ince kıy.',
      },
      {
        baslik: 'Cevizleri ekle',
        aciklama:
          'Cevizleri bıçakla iri iri çekip sebzelerin üzerine serp.',
      },
      {
        baslik: 'Soslayıp dinlendir',
        aciklama:
          'Nar ekşisi, zeytinyağı, tuz ve pul biberi ekleyip harmanla; servis öncesi 10 dakika buzdolabında dinlendir.',
      },
    ],
    pufNoktasi:
      'Bu salatanın sırrı doğrama kalınlığında: her şey pirinç tanesi inceliğinde doğranırsa sos sebzelere çok daha iyi işler.',
  },
  {
    id: 'yesil-mercimekli-salata',
    baslik: 'Yeşil Mercimekli Salata',
    altBaslik: 'Haşlanmış yeşil mercimek, bol yeşillik ve limonlu zeytinyağı sosu',
    kategori: 'salata',
    koleksiyonlar: [],
    emoji: '🥗',
    porsiyon: 4,
    hazirlikDk: 15,
    pisirmeDk: 25,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 230,
    beslenmeEtiketleri: ['vegan', 'vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'yeşil mercimek', miktar: 1.5, birim: 'su bardağı', not: 'yıkanmış' },
      { ad: 'su', miktar: 4, birim: 'su bardağı' },
      { ad: 'taze soğan', miktar: 3, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'maydanoz', miktar: 0.5, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'taze nane', miktar: 0.25, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'zeytinyağı', miktar: 4, birim: 'yemek kaşığı' },
      { ad: 'limon', miktar: 1, birim: 'adet', not: 'suyu sıkılmış' },
      { ad: 'nar ekşisi', miktar: 1, birim: 'yemek kaşığı' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Mercimeği haşla',
        aciklama:
          'Yıkanmış mercimeği su ile tencereye al; dağılmadan yumuşayana kadar kısık ateşte haşla, süzüp ılımaya bırak.',
        sureSn: 1500,
      },
      {
        baslik: 'Yeşillikleri hazırla',
        aciklama:
          'Taze soğan, maydanoz ve naneyi ince ince kıyarak geniş bir salata kasesine al.',
      },
      {
        baslik: 'Sosu çırp',
        aciklama:
          'Zeytinyağı, limon suyu, nar ekşisi, tuz ve pul biberi küçük bir kasede çırparak sosu hazırla.',
      },
      {
        baslik: 'Harmanlayıp dinlendir',
        aciklama:
          'Ilıyan mercimeği yeşilliklerle buluştur, sosu gezdirip karıştır; 10 dakika dinlendirdikten sonra servis et.',
      },
    ],
    pufNoktasi:
      'Mercimeği lapa olmadan, hafif diri süz; sosu mercimek ılıkken eklersen tatları çok daha iyi çeker.',
  },
];
