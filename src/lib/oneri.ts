import type { BeslenmeEtiketi, Kategori, Tarif } from '@/types/tarif';

/** Saat + mevsim + beslenme tercihine göre "Bugün ne pişirsem?" önerileri. */
export function gunlukOneriler(
  tarifler: Tarif[],
  simdi: Date,
  tercihler: BeslenmeEtiketi[],
  adet = 3,
): Tarif[] {
  const saat = simdi.getHours();
  const ay = simdi.getMonth() + 1;

  // Ana yemek her saat diliminde önde: kullanıcıların çoğu "akşama ne pişirsem" arar.
  const oncelikliKategoriler: Kategori[] =
    saat < 11
      ? ['kahvaltilik', 'ana-yemek', 'hamur-isi']
      : saat < 16
        ? ['ana-yemek', 'corba', 'salata']
        : ['ana-yemek', 'pilav-bakliyat', 'zeytinyagli'];

  const puanla = (t: Tarif): number => {
    let puan = 0;
    const kIdx = oncelikliKategoriler.indexOf(t.kategori);
    puan += kIdx >= 0 ? (3 - kIdx) * 10 : 0;
    if (t.mevsimAylari?.includes(ay)) puan += 8;
    if (t.mevsimAylari && !t.mevsimAylari.includes(ay)) puan -= 20;
    if (tercihler.length > 0 && tercihler.every((p) => t.beslenmeEtiketleri.includes(p))) puan += 12;
    if (t.editorOnayli) puan += 3;
    // Gün içinde deterministik ama günden güne değişen çeşitlilik.
    puan += hash(`${t.id}-${simdi.getFullYear()}-${simdi.getMonth()}-${simdi.getDate()}`) % 7;
    return puan;
  };

  return [...tarifler].sort((a, b) => puanla(b) - puanla(a)).slice(0, adet);
}

/** Ay bazlı "Mevsiminde" koleksiyonu. */
export function mevsimindekiler(tarifler: Tarif[], simdi: Date): Tarif[] {
  const ay = simdi.getMonth() + 1;
  return tarifler.filter((t) => t.mevsimAylari?.includes(ay));
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}
