# Tencere görsel üretim hattı — ComfyUI API'sine batch iş gönderir.
# v1.2.1: referanslı img2img desteği. referans-hazir/{slug}.png varsa i2i
# (LoadImage -> VAEEncode -> KSampler, denoise ayarlı), yoksa txt2img'e düşer.
#
# Kullanım (ComfyUI 127.0.0.1:8188 çalışırken, COMFY_OUTPUT tanımlı):
#   python uret.py                          # tüm iş listesi (kaldığı yerden devam)
#   python uret.py --sadece slug1,slug2     # yalnız verilenler (varsa üstüne yazar)
#   python uret.py --denoise 0.62           # i2i denoise (varsayılanı ezer)
#   python uret.py --hedef cikti-pilot\d62  # çıktı alt klasörü (pilot koşuları)
#   python uret.py --sadece-tip tarif       # tek tip
#
# Denoise önceliği: ayar-override.json[slug] > --denoise > ayar-varsayilan.json > 0.62

import hashlib
import json
import os
import shutil
import sys
import time
import urllib.request

COMFY = "http://127.0.0.1:8188"
BURASI = os.path.dirname(os.path.abspath(__file__))
HAZIR = os.path.join(BURASI, "referans-hazir")
CHECKPOINT = "Deliberate_v2.safetensors"

NEGATIF = (
    "photo, photorealistic, cartoon, anime, flat vector, sticker, text, watermark, "
    "letters, words, hands, people, faces, cluttered, multiple dishes, dark, "
    "harsh shadows, blurry, frame, border, ugly, deformed, extra objects, 3d render"
)


def seed_uret(slug: str) -> int:
    return int(hashlib.sha256(slug.encode("utf-8")).hexdigest()[:8], 16)


def json_oku(ad: str, varsayilan):
    yol = os.path.join(BURASI, ad)
    if os.path.exists(yol):
        with open(yol, encoding="utf-8") as f:
            return json.load(f)
    return varsayilan


def temel_workflow(prompt: str, seed: int, on_ek: str) -> dict:
    return {
        "1": {"class_type": "CheckpointLoaderSimple", "inputs": {"ckpt_name": CHECKPOINT}},
        "2": {"class_type": "CLIPTextEncode", "inputs": {"clip": ["1", 1], "text": prompt}},
        "3": {"class_type": "CLIPTextEncode", "inputs": {"clip": ["1", 1], "text": NEGATIF}},
        "5": {
            "class_type": "KSampler",
            "inputs": {
                "model": ["1", 0], "positive": ["2", 0], "negative": ["3", 0],
                "seed": seed, "steps": 30, "cfg": 7,
                "sampler_name": "dpmpp_2m", "scheduler": "karras", "denoise": 1.0,
            },
        },
        "6": {"class_type": "VAEDecode", "inputs": {"samples": ["5", 0], "vae": ["1", 2]}},
        "7": {"class_type": "SaveImage", "inputs": {"images": ["6", 0], "filename_prefix": on_ek}},
    }


def txt2img_workflow(prompt: str, seed: int, on_ek: str) -> dict:
    wf = temel_workflow(prompt, seed, on_ek)
    wf["4"] = {"class_type": "EmptyLatentImage", "inputs": {"width": 512, "height": 512, "batch_size": 1}}
    wf["5"]["inputs"]["latent_image"] = ["4", 0]
    return wf


def i2i_workflow(prompt: str, seed: int, on_ek: str, giris_dosyasi: str, denoise: float) -> dict:
    wf = temel_workflow(prompt, seed, on_ek)
    wf["8"] = {"class_type": "LoadImage", "inputs": {"image": giris_dosyasi}}
    wf["9"] = {"class_type": "VAEEncode", "inputs": {"pixels": ["8", 0], "vae": ["1", 2]}}
    wf["5"]["inputs"]["latent_image"] = ["9", 0]
    wf["5"]["inputs"]["denoise"] = denoise
    return wf


def gonder(wf: dict) -> str:
    veri = json.dumps({"prompt": wf}).encode("utf-8")
    istek = urllib.request.Request(f"{COMFY}/prompt", data=veri, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(istek, timeout=30) as y:
        cevap = json.loads(y.read())
    if cevap.get("node_errors"):
        raise RuntimeError(f"Node hatası: {cevap['node_errors']}")
    return cevap["prompt_id"]


def bekle(prompt_id: str, zaman_asimi_sn: int = 600):
    baslangic = time.time()
    while time.time() - baslangic < zaman_asimi_sn:
        try:
            with urllib.request.urlopen(f"{COMFY}/history/{prompt_id}", timeout=30) as y:
                gecmis = json.loads(y.read())
            if prompt_id in gecmis:
                kayit = gecmis[prompt_id]
                durum = kayit.get("status", {})
                if durum.get("status_str") == "error":
                    raise RuntimeError(f"{prompt_id} yürütme hatası")
                if kayit.get("outputs"):
                    return kayit
        except urllib.error.URLError:
            pass
        time.sleep(2)
    raise TimeoutError(f"{prompt_id} zaman aşımı")


def main():
    with open(os.path.join(BURASI, "is-listesi.json"), encoding="utf-8") as f:
        isler = json.load(f)

    argv = sys.argv
    sadece_tip = argv[argv.index("--sadece-tip") + 1] if "--sadece-tip" in argv else None
    sadece = set(argv[argv.index("--sadece") + 1].split(",")) if "--sadece" in argv else None
    cli_denoise = float(argv[argv.index("--denoise") + 1]) if "--denoise" in argv else None
    hedef_kok = os.path.join(BURASI, argv[argv.index("--hedef") + 1]) if "--hedef" in argv else os.path.join(BURASI, "cikti")

    override = json_oku("ayar-override.json", {})
    varsayilan = json_oku("ayar-varsayilan.json", {})
    varsayilan_denoise = varsayilan.get("denoise", 0.62)

    cikti_klasoru = os.environ.get("COMFY_OUTPUT")
    if not cikti_klasoru:
        raise SystemExit("COMFY_OUTPUT ortam değişkenini ComfyUI output klasörüne ayarla")
    comfy_input = os.path.abspath(os.path.join(cikti_klasoru, "..", "input"))
    os.makedirs(comfy_input, exist_ok=True)

    yapilan_i2i, yapilan_t2i, atlanan = 0, 0, 0
    for i, kalem in enumerate(isler):
        if sadece_tip and kalem["tip"] != sadece_tip:
            continue
        if sadece is not None and kalem["slug"] not in sadece:
            continue
        hedef_klasor = os.path.join(hedef_kok, kalem["tip"])
        os.makedirs(hedef_klasor, exist_ok=True)
        hedef = os.path.join(hedef_klasor, kalem["slug"] + ".png")
        if sadece is None and os.path.exists(hedef):
            atlanan += 1
            continue

        referans = os.path.join(HAZIR, kalem["slug"] + ".png")
        i2i = kalem["tip"] == "tarif" and os.path.exists(referans)
        on_ek = f"tencere_{kalem['tip']}_{kalem['slug']}"

        if i2i:
            denoise = override.get(kalem["slug"], {}).get("denoise") or cli_denoise or varsayilan_denoise
            giris_adi = f"ref_{kalem['slug']}.png"
            shutil.copyfile(referans, os.path.join(comfy_input, giris_adi))
            wf = i2i_workflow(kalem["prompt"], seed_uret(kalem["slug"]), on_ek, giris_adi, denoise)
        else:
            wf = txt2img_workflow(kalem["prompt"], seed_uret(kalem["slug"]), on_ek)

        try:
            sonuc = bekle(gonder(wf))
        except Exception as e:
            print(f"HATA {kalem['slug']}: {e}", flush=True)
            continue

        for cikti in sonuc.get("outputs", {}).values():
            for img in cikti.get("images", []):
                kaynak = os.path.join(cikti_klasoru, img.get("subfolder", ""), img["filename"])
                if os.path.exists(kaynak):
                    shutil.move(kaynak, hedef)
        if i2i:
            yapilan_i2i += 1
        else:
            yapilan_t2i += 1
        toplam = yapilan_i2i + yapilan_t2i + atlanan
        print(f"[{toplam}/{len(isler)}] {kalem['tip']}/{kalem['slug']} tamam ({'i2i d=' + str(denoise) if i2i else 'txt2img'})", flush=True)

    print(f"Bitti: {yapilan_i2i} i2i + {yapilan_t2i} txt2img üretildi, {atlanan} atlandı.")


if __name__ == "__main__":
    main()
