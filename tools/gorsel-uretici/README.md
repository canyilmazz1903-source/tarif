# Görsel Üretim Hattı (SD 1.5 + Deliberate v2, referanslı img2img)

Tarif, kategori ve malzeme görsellerini tek tutarlı stille üretir. v1.2.1'den itibaren tarif görselleri **referanslı img2img (i2i)** ile üretiliyor: lisansı temiz bir fotoğraf referans alınıp stil dönüşümü uygulanıyor — bu, yalnızca metinden üretime göre yemeğin gerçek görünüşüyle çok daha yüksek örtüşme sağlıyor. Referansı bulunamayan tarifler otomatik olarak txt2img'e düşer (boş görsel kalmaz). GTX 1050 Ti / 4 GB VRAM hedeflenerek SD 1.5 seçildi; SDXL/Flux/ControlNet kullanılmıyor.

## Kurulum (bir kez)

1. `D:\tencere-gorsel\ComfyUI_windows_portable\` — ComfyUI portable kurulu.
2. `Deliberate_v2.safetensors` → `ComfyUI\models\checkpoints\` içinde.
3. ComfyUI'yi başlat (port 8188): `python_embeded\python.exe -s ComfyUI\main.py --port 8188`.
4. İsteğe bağlı: `PEXELS_API_KEY` ortam değişkeni tanımlarsan referans bulma oranı artar (Wikimedia + Openverse anahtarsız çalışır, Pexels üçüncü sırada devreye girer).

## Akış: referans → hazırla → pilot → onay → tam batch → entegre

```bash
# 0. Sorgu listesi (is-listesi.json'daki promptlardan TR+EN arama terimi üretir)
node tools/gorsel-uretici/sorgu-uret.js

# 1. Referans indir (Wikimedia -> Openverse -> Pexels sırasıyla; kaldığı yerden devam)
python tools/gorsel-uretici/referans_indir.py
#   Pilot/tekil: --sluglar slug1,slug2

# 2. Ön işleme: kare kırpma + 512x512 (+ isteğe bağlı vinyet zemin karışımı)
python tools/gorsel-uretici/referans_hazirla.py --vinyet

# 3. PİLOT ZORUNLU (ilk kurulumda / stil değişikliğinde): 20 tariflik örneklemi
#    birkaç denoise değeriyle üret, QC sayfasında karşılaştır, kullanıcı onayı al.
python tools/gorsel-uretici/uret.py --sadece <20-slug> --denoise 0.55 --hedef cikti-pilot\d55
python tools/gorsel-uretici/qc_sayfasi.py --pilot
# Onaylanan ayar ayar-varsayilan.json'a yazılır. ONAYSIZ TAM BATCH'E GEÇME.

# 4. Tam batch (yalnız referansı olan slug'ları zorla i2i ile üretir/günceller)
set COMFY_OUTPUT=D:\tencere-gorsel\ComfyUI_windows_portable\ComfyUI\output
python tools/gorsel-uretici/uret.py --sadece <referans-hazir'daki tüm slug'lar>

# 5. webp'e çevir (512 kart + 192 ikon, boyut bütçesi otomatik kademeli)
python tools/gorsel-uretici/isle.py

# 6. Uygulamaya entegre et (assets/gorseller + src/data/gorseller.ts haritası)
node tools/gorsel-uretici/entegre.js
```

## Ayarlar

- `ayar-varsayilan.json` — onaylanmış küresel ayar: `{"denoise": 0.55, "vinyet": true}` (18.08.2026 pilot onayı).
- `ayar-override.json` — slug bazlı istisna: `{"beyran-corbasi": {"denoise": 0.5}}`. QC sayfasındaki koda tıklayıp buraya yapıştırman yeterli.
- Denoise önceliği: `ayar-override.json[slug]` > `--denoise` bayrağı > `ayar-varsayilan.json` > 0.62.
- Sabitler: 512×512 · CFG 7 · 30 adım · DPM++ 2M Karras · seed = sha256(slug) ilk 8 hex (yeniden üretilebilir).

Prompt şablonu (pozitif, i2i ve txt2img aynı): `{yemeğin görsel tanımı — bileşen/renk/kap}, appetizing food illustration, soft painterly gouache style, warm inviting colors, (plain light cream background:1.3), soft shadow under dish, centered composition, no text`

Negatif: `photo, photorealistic, cartoon, anime, flat vector, sticker, text, watermark, letters, words, hands, people, faces, cluttered, multiple dishes, dark, harsh shadows, blurry, frame, border, ugly, deformed, extra objects, 3d render`

## Lisans defteri

`referans/LISANS.csv` — kullanılan her referansın kaynak URL'si, yazarı, lisansı ve indirme tarihi. Kaydı olmayan referans kullanılamaz (script zorlar). `referans/referanssiz.json` — referans bulunamayan tarif listesi (bunlar txt2img'de kalır). Referans jpg'leri ve ham çıktı/webp çalışma klasörleri (`referans/`, `referans-hazir/`, `cikti/`, `webp/`, `qc/`, `cikti-pilot/`) `.gitignore`'da — repoya yalnızca `LISANS.csv`, `referanssiz.json` ve nihai `assets/gorseller/*.webp` girer.

## Beğenilmeyen görseli yeniden üretme

Seed slug'dan türediği için aynı komut aynı görseli verir. Önce `ayar-override.json`'a o slug için farklı bir `denoise` ekle (veya referans değiştir), sonra:

```bash
python tools/gorsel-uretici/uret.py --sadece <slug>
python tools/gorsel-uretici/isle.py && node tools/gorsel-uretici/entegre.js
```

## Yeni tarif eklenince

`is-listesi.json`'a `{"tip":"tarif","slug":"<id>","prompt":"<EN prompt>"}` ekle, `sorgu-uret.js`'yi tekrar çalıştır, sonra referans indir → hazırla → üret → işle → entegre adımlarını o slug için tekrarla (`--sluglar`/`--sadece` bayraklarıyla).
