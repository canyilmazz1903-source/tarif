import type { Kategori, Koleksiyon, Tarif } from '@/types/tarif';
import { ANA_YEMEKLER } from '@/data/tarifler/ana-yemekler';
import { CORBALAR } from '@/data/tarifler/corbalar';
import { HAMUR_ISLERI } from '@/data/tarifler/hamur-isleri';
import { KAHVALTILIKLAR } from '@/data/tarifler/kahvaltiliklar';
import { SALATALAR } from '@/data/tarifler/salatalar';
import { TATLILAR } from '@/data/tarifler/tatlilar';
import { ZEYTINYAGLILAR } from '@/data/tarifler/zeytinyaglilar';
import { AIRFRYER_PRATIK } from '@/data/tarifler/yeni-nesil-airfryer';
import { MODERN_BRUNCH } from '@/data/tarifler/yeni-nesil-brunch';
import { MODERN_MAKARNALAR } from '@/data/tarifler/yeni-nesil-makarna';
import { SOKAK_LEZZETLERI } from '@/data/tarifler/yeni-nesil-sokak';
import { VIRAL_TATLILAR } from '@/data/tarifler/yeni-nesil-tatli';
import { ANA_YEMEKLER_EK } from '@/data/tarifler/ana-yemekler-ek';
import { CORBALAR_EK } from '@/data/tarifler/corbalar-ek';
import { DEMLIK_FINCAN } from '@/data/tarifler/demlik-fincan';
import { HAMUR_ISLERI_EK } from '@/data/tarifler/hamur-isleri-ek';
import { KAHVALTILIKLAR_EK } from '@/data/tarifler/kahvaltiliklar-ek';
import { OSMANLI_TATLILAR } from '@/data/tarifler/osmanli-tatlilar';
import { OSMANLI_YEMEKLER } from '@/data/tarifler/osmanli-yemekler';
import { PILAV_BAKLIYAT } from '@/data/tarifler/pilav-bakliyat';
import { PRATIK_MAKARNALAR } from '@/data/tarifler/pratik-makarnalar';
import { SALATA_MEZELER } from '@/data/tarifler/salata-mezeler';
import { SEBZE_YEMEKLERI } from '@/data/tarifler/sebze-yemekleri';
import { KEK_KURABIYE } from '@/data/tarifler/tatlilar-kek-kurabiye';
import { SERBETLI_TATLILAR } from '@/data/tarifler/tatlilar-serbetli';
import { SUTLU_TATLILAR } from '@/data/tarifler/tatlilar-sutlu';
import { TREND_FIT } from '@/data/tarifler/trend-fit';
import { YENI_TATLILAR_EK } from '@/data/tarifler/yeni-tatlilar-ek';
import { CORBALAR_YENI } from '@/data/tarifler/corbalar-yeni';
import { DOLMA_SARMA } from '@/data/tarifler/dolma-sarma';
import { DUNYA_ITALYAN } from '@/data/tarifler/dunya-italyan';
import { DUNYA_MEKSIKA_AMERIKA } from '@/data/tarifler/dunya-meksika-amerika';
import { DUNYA_UZAKDOGU } from '@/data/tarifler/dunya-uzakdogu';
import { ICECEK_VEJETARYEN } from '@/data/tarifler/icecek-vejetaryen';
import { KAHVALTI_BRUNCH } from '@/data/tarifler/kahvalti-brunch';
import { KOFTE_KEBAP } from '@/data/tarifler/kofte-kebap';
import { KURABIYE_ATISTIRMALIK } from '@/data/tarifler/kurabiye-atistirmalik';
import { SALATA_MEZE_YENI } from '@/data/tarifler/salata-meze-yeni';
import { TATLILAR_YENI } from '@/data/tarifler/tatlilar-yeni';
import { YORESEL_ANADOLU } from '@/data/tarifler/yoresel-anadolu';
import { YORESEL_EGE } from '@/data/tarifler/yoresel-ege';
import { YORESEL_GUNEYDOGU } from '@/data/tarifler/yoresel-guneydogu';
import { YORESEL_KARADENIZ } from '@/data/tarifler/yoresel-karadeniz';

/** v1.0 klasik Türk mutfağı paketi (50 tarif). */
export const KLASIK_TARIFLER: Tarif[] = [
  ...CORBALAR,
  ...ANA_YEMEKLER,
  ...HAMUR_ISLERI,
  ...TATLILAR,
  ...ZEYTINYAGLILAR,
  ...SALATALAR,
  ...KAHVALTILIKLAR,
];

/** Yeni Nesil Mutfak paketi: sokak lezzetleri, one-pot, airfryer, brunch, viral tatlılar. */
export const YENI_NESIL_TARIFLER: Tarif[] = [
  ...SOKAK_LEZZETLERI,
  ...MODERN_MAKARNALAR,
  ...AIRFRYER_PRATIK,
  ...MODERN_BRUNCH,
  ...VIRAL_TATLILAR,
  ...TREND_FIT,
  ...YENI_TATLILAR_EK,
];

/** v1.1 Günlük Türk Mutfağı genişlemesi (Katman 1-2). */
export const GUNLUK_EK_TARIFLER: Tarif[] = [
  ...CORBALAR_EK,
  ...ANA_YEMEKLER_EK,
  ...SEBZE_YEMEKLERI,
  ...PILAV_BAKLIYAT,
  ...HAMUR_ISLERI_EK,
  ...KAHVALTILIKLAR_EK,
  ...PRATIK_MAKARNALAR,
  ...SALATA_MEZELER,
  ...SUTLU_TATLILAR,
  ...SERBETLI_TATLILAR,
  ...KEK_KURABIYE,
];

/** Osmanlı Saray Mutfağı koleksiyonu (Katman 3). */
export const OSMANLI_SARAY_TARIFLER: Tarif[] = [...OSMANLI_YEMEKLER, ...OSMANLI_TATLILAR];

/** v1.2: Yöresel Türk mutfağı (Karadeniz, Ege, Güneydoğu, İç Anadolu/Akdeniz). */
export const YORESEL_TARIFLER: Tarif[] = [
  ...YORESEL_KARADENIZ,
  ...YORESEL_EGE,
  ...YORESEL_GUNEYDOGU,
  ...YORESEL_ANADOLU,
];

/** v1.2: Ev usulü dünya mutfağı (İtalyan, Uzakdoğu, Meksika/Amerika). */
export const DUNYA_TARIFLER: Tarif[] = [
  ...DUNYA_ITALYAN,
  ...DUNYA_UZAKDOGU,
  ...DUNYA_MEKSIKA_AMERIKA,
];

/** v1.2: çeşit derinliği (çorba, köfte-kebap, dolma-sarma, tatlı, kurabiye, kahvaltı, meze, içecek). */
export const V12_EK_TARIFLER: Tarif[] = [
  ...CORBALAR_YENI,
  ...KOFTE_KEBAP,
  ...DOLMA_SARMA,
  ...TATLILAR_YENI,
  ...KURABIYE_ATISTIRMALIK,
  ...KAHVALTI_BRUNCH,
  ...SALATA_MEZE_YENI,
  ...ICECEK_VEJETARYEN,
];

export const TARIFLER: Tarif[] = [
  ...KLASIK_TARIFLER,
  ...YENI_NESIL_TARIFLER,
  ...GUNLUK_EK_TARIFLER,
  ...OSMANLI_SARAY_TARIFLER,
  ...DEMLIK_FINCAN,
  ...YORESEL_TARIFLER,
  ...DUNYA_TARIFLER,
  ...V12_EK_TARIFLER,
];

const INDEX = new Map(TARIFLER.map((t) => [t.id, t]));

export function tarifBul(id: string): Tarif | undefined {
  return INDEX.get(id);
}

export function koleksiyondakiler(k: Koleksiyon): Tarif[] {
  return TARIFLER.filter((t) => t.koleksiyonlar.includes(k));
}

export function onbesDakikalikler(): Tarif[] {
  return TARIFLER.filter(
    (t) => t.koleksiyonlar.includes('15-dakika') || t.hazirlikDk + t.pisirmeDk <= 20,
  );
}

/** Kategori ızgarasında gösterilenler. 'icecek' bilinçli olarak dışarıda — yalnızca Demlik & Fincan koleksiyon rayında yaşar. */
export const KATEGORILER: Array<{ key: Kategori; ad: string; emoji: string }> = [
  { key: 'corba', ad: 'Çorbalar', emoji: '🍲' },
  { key: 'ana-yemek', ad: 'Ana Yemekler', emoji: '🍛' },
  { key: 'pilav-bakliyat', ad: 'Pilav & Bakliyat', emoji: '🍚' },
  { key: 'hamur-isi', ad: 'Hamur İşleri', emoji: '🥐' },
  { key: 'tatli', ad: 'Tatlılar', emoji: '🍮' },
  { key: 'zeytinyagli', ad: 'Zeytinyağlılar', emoji: '🫒' },
  { key: 'kahvaltilik', ad: 'Kahvaltılıklar', emoji: '🍳' },
  { key: 'salata', ad: 'Salata & Meze', emoji: '🥗' },
];

export function kategoriAdi(k: Kategori): string {
  return KATEGORILER.find((x) => x.key === k)?.ad ?? k;
}
