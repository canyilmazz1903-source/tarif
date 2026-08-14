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

export const TARIFLER: Tarif[] = [
  ...KLASIK_TARIFLER,
  ...YENI_NESIL_TARIFLER,
  ...GUNLUK_EK_TARIFLER,
  ...OSMANLI_SARAY_TARIFLER,
  ...DEMLIK_FINCAN,
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
