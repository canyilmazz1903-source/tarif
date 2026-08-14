# Görsel Üretim Hattı (SD 1.5 + DreamShaper v8)

Tarif, kategori ve malzeme görsellerini tek tutarlı stille ("Sıcak Kiler": yumuşak 3D clay illüstrasyon, krem zemin, kiremit-hardal-zeytin paleti) üretir. GTX 1050 Ti / 4 GB VRAM hedeflenerek SD 1.5 seçildi; SDXL/Flux kullanma.

## Kurulum (bir kez)

1. `D:\tencere-gorsel\ComfyUI_portable.7z` → `D:\tencere-gorsel\ComfyUI` içine aç (7-Zip).
2. `DreamShaper_8_pruned.safetensors` → `ComfyUI\models\checkpoints\` içine taşı.
3. ComfyUI'yi başlat: `run_nvidia_gpu.bat` (port 8188).

## Akış

```bash
# 1. İş listesi (is-listesi.json) — tarif id + İngilizce prompt eşlemesi.
#    Yeni tarif eklendiğinde bu dosyaya yeni satır eklemek yeterli.

# 2. Üretim (kaldığı yerden devam eder; üretilmiş slug'ı atlar)
set COMFY_OUTPUT=D:\tencere-gorsel\ComfyUI\output
python tools/gorsel-uretici/uret.py

# 3. webp'e çevir (512 kart + 192 ikon)
pip install pillow
python tools/gorsel-uretici/isle.py

# 4. Uygulamaya entegre et (assets/gorseller + src/data/gorseller.ts haritası)
node tools/gorsel-uretici/entegre.js
```

## Sabit üretim ayarları

512×512 · CFG 6.5 · 28 adım · DPM++ 2M Karras · seed = sha256(slug) ilk 8 hex — aynı slug her zaman aynı görseli üretir (yeniden üretilebilirlik).

Prompt şablonu (pozitif):
`{yemek EN adı}, single dish, soft 3d clay style illustration, centered, warm cream background, terracotta and olive color palette, soft studio lighting, 3/4 top view, smooth, minimal, no text`

Negatif: `photo, photorealistic, text, watermark, hands, people, cluttered, multiple dishes, dark, harsh shadows, blurry, frame, border`

## Beğenilmeyen görseli yeniden üretme

Seed slug'dan türediği için aynı komut aynı görseli verir. Farklı varyant için `is-listesi.json` içinde o kaydın `slug` alanına `-v2` eki ver (örn. `karniyarik-v2`), `cikti/tarif/karniyarik.png`'yi sil, `uret.py`'yi çalıştır, çıkan dosyayı `karniyarik.png` olarak yeniden adlandır ve akışın 3-4. adımlarını tekrarla.

## Yeni tarif eklenince (tek komut akışı)

`is-listesi.json`'a `{"tip":"tarif","slug":"<id>","prompt":"<EN prompt>"}` satırı ekle, sonra:

```bash
python tools/gorsel-uretici/uret.py && python tools/gorsel-uretici/isle.py && node tools/gorsel-uretici/entegre.js
```
