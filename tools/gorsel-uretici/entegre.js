// webp/ klasöründeki görselleri assets/gorseller/ altına kopyalar ve
// src/data/gorseller.ts require haritasını yeniden üretir.
// Kullanım: node tools/gorsel-uretici/entegre.js
// Metro bundler dinamik require desteklemediği için harita statik üretilir.

const fs = require('fs');
const path = require('path');

const KOK = path.resolve(__dirname, '..', '..');
const WEBP = path.join(__dirname, 'webp');
const HEDEF = path.join(KOK, 'assets', 'gorseller');
const HARITA = path.join(KOK, 'src', 'data', 'gorseller.ts');

function kopyala(tip) {
  const kaynak = path.join(WEBP, tip);
  if (!fs.existsSync(kaynak)) return [];
  const hedefKlasor = path.join(HEDEF, tip);
  fs.mkdirSync(hedefKlasor, { recursive: true });
  const sluglar = [];
  for (const dosya of fs.readdirSync(kaynak)) {
    if (!dosya.endsWith('.webp') || dosya.endsWith('_ikon.webp')) continue;
    fs.copyFileSync(path.join(kaynak, dosya), path.join(hedefKlasor, dosya));
    sluglar.push(dosya.replace('.webp', ''));
  }
  return sluglar.sort();
}

const tarifler = kopyala('tarif');
const kategoriler = kopyala('kategori');
const malzemeler = kopyala('malzeme');

function satirlar(tip, sluglar) {
  return sluglar
    .map((s) => `  '${s.replace(/'/g, "\\'")}': require('@/assets/gorseller/${tip}/${s}.webp'),`)
    .join('\n');
}

const icerik = `// OTOMATİK ÜRETİLDİ — tools/gorsel-uretici/entegre.js ile. Elle düzenleme.
// Tarif/kategori/malzeme görsel haritası; harita boş girişlerde uygulama emoji kapağa düşer.

export const TARIF_GORSELLERI: Record<string, number> = {
${satirlar('tarif', tarifler)}
};

export const KATEGORI_GORSELLERI: Record<string, number> = {
${satirlar('kategori', kategoriler)}
};

export const MALZEME_GORSELLERI: Record<string, number> = {
${satirlar('malzeme', malzemeler)}
};

export function tarifGorseli(id: string): number | undefined {
  return TARIF_GORSELLERI[id];
}

export function malzemeGorseli(ad: string): number | undefined {
  return MALZEME_GORSELLERI[ad.toLocaleLowerCase('tr')];
}
`;

fs.writeFileSync(HARITA, icerik, 'utf8');
console.log(
  `Entegre edildi: ${tarifler.length} tarif, ${kategoriler.length} kategori, ${malzemeler.length} malzeme görseli.`,
);
