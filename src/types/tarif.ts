// Tencere — çekirdek veri tipleri.
// Tüm tarif verisi uygulamayla birlikte paketlenir (tam offline).

export type Zorluk = 'kolay' | 'orta' | 'zor';

export type Kategori =
  | 'corba'
  | 'ana-yemek'
  | 'hamur-isi'
  | 'tatli'
  | 'zeytinyagli'
  | 'kahvaltilik'
  | 'salata';

export type Birim =
  | 'g'
  | 'kg'
  | 'ml'
  | 'lt'
  | 'adet'
  | 'su bardağı'
  | 'çay bardağı'
  | 'yemek kaşığı'
  | 'tatlı kaşığı'
  | 'çay kaşığı'
  | 'paket'
  | 'tutam'
  | 'demet'
  | 'diş'
  | 'dilim'
  | 'dal';

export type BeslenmeEtiketi =
  | 'vegan'
  | 'vejetaryen'
  | 'glutensiz'
  | 'laktozsuz'
  | 'diyabetik-dostu';

export type Koleksiyon =
  | '15-dakika'
  | 'tek-tencere'
  | 'artan'
  | 'ramazan'
  | 'osmanli'
  | 'misafir'
  | '101';

export interface TarifMalzeme {
  /** Malzeme sözlüğündeki ad (küçük harf) ya da serbest metin. */
  ad: string;
  miktar: number;
  birim: Birim;
  /** 'Hamuru için', 'Şerbeti için' gibi grup başlığı. */
  grup?: string;
  /** 'iri doğranmış', 'oda sıcaklığında' gibi not. */
  not?: string;
}

export interface TarifAdim {
  /** ≤ 40 karakter, emir kipi: 'Soğanları kavur'. */
  baslik: string;
  aciklama: string;
  /** Doluysa adımda gömülü zamanlayıcı gösterilir (saniye). */
  sureSn?: number;
  /** 'Mayalanmaya bırak' tipi pasif bekleme adımı. */
  beklemeAdimi?: boolean;
}

export interface Tarif {
  /** Slug, benzersiz: 'mercimek-corbasi'. */
  id: string;
  /** ≤ 40 karakter. */
  baslik: string;
  /** ≤ 90 karakter, açıklayıcı alt başlık. */
  altBaslik: string;
  kategori: Kategori;
  koleksiyonlar: Koleksiyon[];
  /** Kapak görseli yerine kullanılan emoji. */
  emoji: string;
  porsiyon: number;
  hazirlikDk: number;
  pisirmeDk: number;
  zorluk: Zorluk;
  kaloriPerPorsiyon: number;
  beslenmeEtiketleri: BeslenmeEtiketi[];
  editorOnayli: boolean;
  /** Tarifin en lezzetli olduğu aylar (1-12). Boşsa her mevsim. */
  mevsimAylari?: number[];
  malzemeler: TarifMalzeme[];
  adimlar: TarifAdim[];
  /** Püf noktası — detay sayfasında gösterilir. */
  pufNoktasi?: string;
}

export interface Malzeme {
  /** Küçük harf benzersiz ad: 'un', 'tereyağı'. */
  ad: string;
  kategori:
    | 'bakliyat-tahil'
    | 'sut-urunu'
    | 'et-tavuk-balik'
    | 'sebze'
    | 'meyve'
    | 'baharat'
    | 'sos-temel'
    | 'kuruyemis';
  varsayilanBirim: 'g' | 'ml' | 'adet' | 'diş' | 'demet' | 'dilim';
  /** 1 su bardağı (200 ml) kaç gram. */
  gramPerSuBardagi?: number;
  /** 1 silme yemek kaşığı kaç gram. */
  gramPerYemekKasigi?: number;
  /** 1 çay kaşığı kaç gram. */
  gramPerCayKasigi?: number;
  /** 1 adet ortalama kaç gram (adet bazlı malzemeler). */
  gramPerAdet?: number;
  /** Maliyet motoru: ortalama TL/kg (veya TL/lt). */
  fiyatTlPerKg?: number;
  /** Mevsim ayları (1-12); boşsa yıl boyu. */
  mevsimAylari?: number[];
}
