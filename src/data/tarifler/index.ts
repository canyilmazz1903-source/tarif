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

/** Klasik Türk mutfağı paketi (50 tarif). */
export const KLASIK_TARIFLER: Tarif[] = [
  ...CORBALAR,
  ...ANA_YEMEKLER,
  ...HAMUR_ISLERI,
  ...TATLILAR,
  ...ZEYTINYAGLILAR,
  ...SALATALAR,
  ...KAHVALTILIKLAR,
];

/** Yeni Nesil Mutfak paketi (55 tarif): sokak lezzetleri, one-pot, airfryer, brunch, viral tatlılar. */
export const YENI_NESIL_TARIFLER: Tarif[] = [
  ...SOKAK_LEZZETLERI,
  ...MODERN_MAKARNALAR,
  ...AIRFRYER_PRATIK,
  ...MODERN_BRUNCH,
  ...VIRAL_TATLILAR,
];

export const TARIFLER: Tarif[] = [...KLASIK_TARIFLER, ...YENI_NESIL_TARIFLER];

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

export const KATEGORILER: Array<{ key: Kategori; ad: string; emoji: string }> = [
  { key: 'corba', ad: 'Çorbalar', emoji: '🍲' },
  { key: 'ana-yemek', ad: 'Ana Yemekler', emoji: '🍛' },
  { key: 'hamur-isi', ad: 'Hamur İşleri', emoji: '🥐' },
  { key: 'tatli', ad: 'Tatlılar', emoji: '🍮' },
  { key: 'zeytinyagli', ad: 'Zeytinyağlılar', emoji: '🫒' },
  { key: 'kahvaltilik', ad: 'Kahvaltılıklar', emoji: '🍳' },
  { key: 'salata', ad: 'Salatalar', emoji: '🥗' },
];

export function kategoriAdi(k: Kategori): string {
  return KATEGORILER.find((x) => x.key === k)?.ad ?? k;
}
