// Kalite kontrol (v1.1.1 G-3):
// 1. Rastgele 20 kart görselini qc/ altına kopyalar (insan gözüyle: yanlış yemek /
//    metin artığı / stil kayması kontrolü için).
// 2. Haritada görseli olmayan tarifleri raporlar (hedef: sıfır) -> qc/rapor.md
// Kullanım: node tools/gorsel-uretici/qc-rapor.js

const fs = require('fs');
const path = require('path');

const KOK = path.resolve(__dirname, '..', '..');
const WEBP_TARIF = path.join(__dirname, 'webp', 'tarif');
const QC = path.join(__dirname, 'qc');
const TARIFLER_DIR = path.join(KOK, 'src', 'data', 'tarifler');

// Tarif id'lerini veri dosyalarından topla.
const ids = [];
for (const f of fs.readdirSync(TARIFLER_DIR)) {
  if (f === 'index.ts' || !f.endsWith('.ts')) continue;
  const icerik = fs.readFileSync(path.join(TARIFLER_DIR, f), 'utf8');
  for (const m of icerik.matchAll(/\n\s{4}id: '([^']+)'/g)) ids.push(m[1]);
}

const uretilenler = new Set(
  fs.existsSync(WEBP_TARIF)
    ? fs.readdirSync(WEBP_TARIF).filter((d) => d.endsWith('.webp') && !d.endsWith('_ikon.webp')).map((d) => d.replace('.webp', ''))
    : [],
);

const eksikler = ids.filter((id) => !uretilenler.has(id));

// Deterministik "rastgele" 20 örnek: sıralı listeden eşit aralıklı seçim.
fs.mkdirSync(QC, { recursive: true });
const mevcutlar = ids.filter((id) => uretilenler.has(id)).sort();
const adim = Math.max(1, Math.floor(mevcutlar.length / 20));
const ornekler = mevcutlar.filter((_, i) => i % adim === 0).slice(0, 20);
for (const slug of ornekler) {
  fs.copyFileSync(path.join(WEBP_TARIF, slug + '.webp'), path.join(QC, slug + '.webp'));
}

const rapor = [
  '# Görsel QC Raporu',
  '',
  `- Tarif sayısı: ${ids.length}`,
  `- Üretilen kart görseli: ${mevcutlar.length}`,
  `- Eksik: ${eksikler.length}${eksikler.length ? ' — ' + eksikler.join(', ') : ' ✓'}`,
  `- QC örnekleri (${ornekler.length}): ${ornekler.join(', ')}`,
  '',
  'Reddedilen görsel için: is-listesi.json içindeki slug\'a -v2 eki ver, cikti/tarif/<slug>.png sil,',
  'uret.py çalıştır, çıkan dosyayı eski adla değiştir, isle.py + entegre.js koştur (bkz. README).',
].join('\n');
fs.writeFileSync(path.join(QC, 'rapor.md'), rapor, 'utf8');
console.log(rapor);
process.exitCode = eksikler.length > 0 ? 1 : 0;
