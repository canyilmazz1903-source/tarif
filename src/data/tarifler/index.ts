import type { Kategori, Koleksiyon, Tarif } from '@/types/tarif';
import { ANA_YEMEKLER } from '@/data/tarifler/ana-yemekler';
import { CORBALAR } from '@/data/tarifler/corbalar';
import { HAMUR_ISLERI } from '@/data/tarifler/hamur-isleri';
import { KAHVALTILIKLAR } from '@/data/tarifler/kahvaltiliklar';
import { SALATALAR } from '@/data/tarifler/salatalar';
import { TATLILAR } from '@/data/tarifler/tatlilar';
import { ZEYTINYAGLILAR } from '@/data/tarifler/zeytinyaglilar';

export const TARIFLER: Tarif[] = [
  ...CORBALAR,
  ...ANA_YEMEKLER,
  ...HAMUR_ISLERI,
  ...TATLILAR,
  ...ZEYTINYAGLILAR,
  ...SALATALAR,
  ...KAHVALTILIKLAR,
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
