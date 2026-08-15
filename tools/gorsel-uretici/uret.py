# Tencere görsel üretim hattı — ComfyUI API'sine batch iş gönderir.
# Kullanım: ComfyUI çalışırken (127.0.0.1:8188)  ->  python uret.py [--sadece tarif|kategori|malzeme]
# Girdi: is-listesi.json (prompt_uret çıktısı: [{tip, slug, prompt}]).
# Çıktı: cikti/{tip}/{slug}.png — üretilmiş dosya varsa atlanır (kaldığı yerden devam).

import hashlib
import json
import os
import shutil
import sys
import time
import urllib.request

COMFY = "http://127.0.0.1:8188"
BURASI = os.path.dirname(os.path.abspath(__file__))
CIKTI = os.path.join(BURASI, "cikti")

NEGATIF = (
    "photo, photorealistic, cartoon, anime, flat vector, sticker, text, watermark, "
    "letters, words, hands, people, faces, cluttered, multiple dishes, dark, "
    "harsh shadows, blurry, frame, border, ugly, deformed, extra objects, 3d render"
)

def seed_uret(slug: str) -> int:
    return int(hashlib.sha256(slug.encode("utf-8")).hexdigest()[:8], 16)

def workflow(prompt: str, seed: int, dosya_on_eki: str) -> dict:
    # SD1.5 + Deliberate v2 (v1.1.2: içerik örtüşmesi için model değişti),
    # 512x512, CFG 7, 30 adım, dpmpp_2m karras.
    return {
        "1": {"class_type": "CheckpointLoaderSimple", "inputs": {"ckpt_name": "Deliberate_v2.safetensors"}},
        "2": {"class_type": "CLIPTextEncode", "inputs": {"clip": ["1", 1], "text": prompt}},
        "3": {"class_type": "CLIPTextEncode", "inputs": {"clip": ["1", 1], "text": NEGATIF}},
        "4": {"class_type": "EmptyLatentImage", "inputs": {"width": 512, "height": 512, "batch_size": 1}},
        "5": {
            "class_type": "KSampler",
            "inputs": {
                "model": ["1", 0], "positive": ["2", 0], "negative": ["3", 0], "latent_image": ["4", 0],
                "seed": seed, "steps": 30, "cfg": 7,
                "sampler_name": "dpmpp_2m", "scheduler": "karras", "denoise": 1.0,
            },
        },
        "6": {"class_type": "VAEDecode", "inputs": {"samples": ["5", 0], "vae": ["1", 2]}},
        "7": {"class_type": "SaveImage", "inputs": {"images": ["6", 0], "filename_prefix": dosya_on_eki}},
    }

def gonder(wf: dict) -> str:
    veri = json.dumps({"prompt": wf}).encode("utf-8")
    istek = urllib.request.Request(f"{COMFY}/prompt", data=veri, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(istek, timeout=30) as y:
        return json.loads(y.read())["prompt_id"]

def bekle(prompt_id: str, zaman_asimi_sn: int = 600):
    baslangic = time.time()
    while time.time() - baslangic < zaman_asimi_sn:
        try:
            with urllib.request.urlopen(f"{COMFY}/history/{prompt_id}", timeout=30) as y:
                gecmis = json.loads(y.read())
            if prompt_id in gecmis:
                return gecmis[prompt_id]
        except Exception:
            pass
        time.sleep(2)
    raise TimeoutError(f"{prompt_id} zaman aşımı")

def comfy_cikti_klasoru() -> str:
    # ComfyUI SaveImage varsayılan olarak kendi output/ klasörüne yazar.
    with urllib.request.urlopen(f"{COMFY}/system_stats", timeout=10) as _:
        pass
    return os.environ.get("COMFY_OUTPUT", os.path.join(os.path.dirname(BURASI), "..", "ComfyUI", "output"))

def main():
    with open(os.path.join(BURASI, "is-listesi.json"), encoding="utf-8") as f:
        isler = json.load(f)

    sadece = None
    if "--sadece" in sys.argv:
        sadece = sys.argv[sys.argv.index("--sadece") + 1]

    yapilan, atlanan = 0, 0
    for i, kalem in enumerate(isler):
        if sadece and kalem["tip"] != sadece:
            continue
        hedef_klasor = os.path.join(CIKTI, kalem["tip"])
        os.makedirs(hedef_klasor, exist_ok=True)
        hedef = os.path.join(hedef_klasor, kalem["slug"] + ".png")
        if os.path.exists(hedef):
            atlanan += 1
            continue

        on_ek = f"tencere_{kalem['tip']}_{kalem['slug']}"
        pid = gonder(workflow(kalem["prompt"], seed_uret(kalem["slug"]), on_ek))
        sonuc = bekle(pid)

        # SaveImage çıktısını bul ve hedefe taşı.
        cikti_klasoru = os.environ.get("COMFY_OUTPUT")
        if not cikti_klasoru:
            raise SystemExit("COMFY_OUTPUT ortam değişkenini ComfyUI output klasörüne ayarla")
        for cikti in sonuc.get("outputs", {}).values():
            for img in cikti.get("images", []):
                kaynak = os.path.join(cikti_klasoru, img.get("subfolder", ""), img["filename"])
                if os.path.exists(kaynak):
                    # shutil.move: os.replace sürücüler arası (D: -> C:) çalışmaz.
                    shutil.move(kaynak, hedef)
        yapilan += 1
        print(f"[{yapilan+atlanan}/{len(isler)}] {kalem['tip']}/{kalem['slug']} tamam", flush=True)

    print(f"Bitti: {yapilan} üretildi, {atlanan} atlandı (mevcut).")

if __name__ == "__main__":
    main()
