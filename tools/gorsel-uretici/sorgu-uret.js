// Referans araması için TR başlık + EN tanım sorgu listesi üretir.
// Kullanım: node tools/gorsel-uretici/sorgu-uret.js
const fs = require('fs');
const path = require('path');

const KOK = path.resolve(__dirname, '..', '..');
const TARIFLER = path.join(KOK, 'src', 'data', 'tarifler');

const basliklar = {};
for (const f of fs.readdirSync(TARIFLER)) {
  if (f === 'index.ts' || !f.endsWith('.ts')) continue;
  const icerik = fs.readFileSync(path.join(TARIFLER, f), 'utf8');
  const bloklar = icerik.split(/\n\s{4}id: '/).slice(1);
  for (const b of bloklar) {
    const id = b.split("'")[0];
    const m = b.match(/baslik:\s*\r?\n?\s*'([^']+)'/);
    if (m) basliklar[id] = m[1];
  }
}

const liste = JSON.parse(fs.readFileSync(path.join(__dirname, 'is-listesi.json'), 'utf8'));
const sorgular = [];
for (const k of liste) {
  if (k.tip !== 'tarif' || k.slug === '_fallback') continue;
  const en = k.prompt
    .split(',')[0]
    .replace(/\(|\)|:[\d.]+/g, '')
    .trim();
  sorgular.push({ slug: k.slug, tr: basliklar[k.slug] || k.slug.replace(/-/g, ' '), en });
}
fs.writeFileSync(path.join(__dirname, 'sorgu-listesi.json'), JSON.stringify(sorgular, null, 1), 'utf8');
console.log('SORGU LISTESI:', sorgular.length);
