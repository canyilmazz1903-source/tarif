import type { Tarif } from '@/types/tarif';

export const KAHVALTILIKLAR: Tarif[] = [
  {
    id: 'menemen',
    baslik: 'Menemen',
    altBaslik: 'Bol domatesli, sivri biberli klasik kahvaltı sofrası yıldızı',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika', '101'],
    emoji: '🍳',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 13,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 280,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: true,
    mevsimAylari: [6, 7, 8, 9],
    malzemeler: [
      { ad: 'domates', miktar: 3, birim: 'adet', not: 'rendelenmiş' },
      { ad: 'sivri biber', miktar: 2, birim: 'adet', not: 'ince doğranmış' },
      { ad: 'zeytinyağı', miktar: 2, birim: 'yemek kaşığı' },
      { ad: 'yumurta', miktar: 3, birim: 'adet' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Biberleri yumuşat',
        aciklama:
          'Zeytinyağını tavada kızdır, ince doğranmış sivri biberleri ekleyip orta ateşte hafifçe yumuşat.',
        sureSn: 300,
      },
      {
        baslik: 'Domatesleri pişir',
        aciklama:
          'Rendelenmiş domatesleri ve tuzu ekle; domatesler suyunu çekip koyulaşana kadar arada karıştırarak pişir.',
        sureSn: 480,
      },
      {
        baslik: 'Yumurtaları ekle',
        aciklama:
          'Yumurtaları kırıp hafifçe karıştırarak sosun içine yedir; yumurtalar tutunca ocaktan al, pul biber serp.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Menemeni ocaktan yumurtalar tam katılaşmadan bir dakika önce al; tavanın sıcaklığı kalan pişmeyi tamamlar, kremamsı kalır.',
  },
  {
    id: 'sucuklu-yumurta',
    baslik: 'Sucuklu Yumurta',
    altBaslik: 'Kendi yağında kızaran sucuk üzerine göz yumurta',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['15-dakika'],
    emoji: '🍳',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 8,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 420,
    beslenmeEtiketleri: ['glutensiz', 'laktozsuz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'sucuk', miktar: 150, birim: 'g', not: 'yarım santim kalınlığında dilimlenmiş' },
      { ad: 'yumurta', miktar: 4, birim: 'adet' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'pul biber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Sucukları kızart',
        aciklama:
          'Sucuk dilimlerini yağ eklemeden tavaya diz; kısık ateşte kendi yağını salıp iki tarafı da hafifçe kızarana kadar çevir.',
        sureSn: 180,
      },
      {
        baslik: 'Yumurtaları kır',
        aciklama:
          'Sucukların aralarına yumurtaları tek tek kır; sarılarını dağıtmamaya özen göster.',
      },
      {
        baslik: 'Kapağı kapatıp pişir',
        aciklama:
          'Tavanın kapağını kapat ve beyazlar tutup sarılar hafif akışkan kalana kadar kısık ateşte pişir; karabiber ve pul biber serp.',
        sureSn: 240,
      },
    ],
    pufNoktasi:
      'Sucuğu yüksek ateşte değil kısık ateşte kızart; yağını yavaşça salar, sertleşmeden lezzetini yumurtaya verir.',
  },
  {
    id: 'mihlama',
    baslik: 'Mıhlama',
    altBaslik: 'Karadeniz usulü mısır unlu, bol kaşarlı tereyağı şöleni',
    kategori: 'kahvaltilik',
    koleksiyonlar: ['tek-tencere'],
    emoji: '🧀',
    porsiyon: 2,
    hazirlikDk: 5,
    pisirmeDk: 10,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 450,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz'],
    editorOnayli: true,
    malzemeler: [
      { ad: 'tereyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'mısır unu', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'su', miktar: 1, birim: 'su bardağı', not: 'sıcak' },
      { ad: 'kaşar peyniri', miktar: 200, birim: 'g', not: 'rendelenmiş' },
      { ad: 'tuz', miktar: 1, birim: 'tutam' },
    ],
    adimlar: [
      {
        baslik: 'Mısır ununu kavur',
        aciklama:
          'Tereyağını sahanda erit, mısır ununu ekleyip kokusu çıkana kadar kısık ateşte karıştırarak kavur.',
        sureSn: 180,
      },
      {
        baslik: 'Suyu ekle',
        aciklama:
          'Sıcak suyu azar azar ekleyip topak kalmayacak şekilde karıştır; bir tutam tuz at ve muhallebi kıvamına getir.',
        sureSn: 120,
      },
      {
        baslik: 'Peyniri erit',
        aciklama:
          'Rendelenmiş kaşarı ekle ve peynir uzayıp yağını salana kadar tek yönde karıştırarak pişir; sıcak servis et.',
        sureSn: 300,
      },
    ],
    pufNoktasi:
      'Mıhlama beklemeye gelmez; peynir uzamaya başladığı anda sahanıyla birlikte sofraya götür, soğuyunca kıvamı ağırlaşır.',
  },
  {
    id: 'patatesli-omlet',
    baslik: 'Patatesli Omlet',
    altBaslik: 'Kıtır kızarmış patates küpleriyle doyurucu kahvaltı omleti',
    kategori: 'kahvaltilik',
    koleksiyonlar: [],
    emoji: '🍳',
    porsiyon: 2,
    hazirlikDk: 10,
    pisirmeDk: 12,
    zorluk: 'kolay',
    kaloriPerPorsiyon: 380,
    beslenmeEtiketleri: ['vejetaryen', 'glutensiz', 'laktozsuz'],
    editorOnayli: false,
    malzemeler: [
      { ad: 'patates', miktar: 2, birim: 'adet', not: 'küçük küp doğranmış' },
      { ad: 'yumurta', miktar: 4, birim: 'adet' },
      { ad: 'zeytinyağı', miktar: 3, birim: 'yemek kaşığı' },
      { ad: 'maydanoz', miktar: 0.25, birim: 'demet', not: 'ince kıyılmış' },
      { ad: 'tuz', miktar: 1, birim: 'çay kaşığı' },
      { ad: 'karabiber', miktar: 1, birim: 'çay kaşığı' },
    ],
    adimlar: [
      {
        baslik: 'Patatesleri kızart',
        aciklama:
          'Zeytinyağını tavada kızdır; küp doğranmış patatesleri orta ateşte arada çevirerek altın rengi alana kadar kızart.',
        sureSn: 480,
      },
      {
        baslik: 'Yumurtaları çırp',
        aciklama:
          'Yumurtaları tuz, karabiber ve kıyılmış maydanozla birlikte bir kasede iyice çırp.',
      },
      {
        baslik: 'Omleti pişir',
        aciklama:
          'Çırpılmış yumurtayı patateslerin üzerine dök; kapağını kapatıp altı tutup üstü toparlanana kadar kısık ateşte pişir.',
        sureSn: 240,
      },
    ],
    pufNoktasi:
      'Patatesleri doğradıktan sonra soğuk suda yıkayıp kurularsan nişastası gider, çok daha kıtır kızarır.',
  },
];
