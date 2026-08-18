# QC karşılaştırma sayfası üretir: referans | üretilen sütunlar yan yana.
# Pilot modunda üç denoise klasörünü karşılaştırır.
# Kullanım:
#   python qc_sayfasi.py --pilot           # referans | d0.55 | d0.62 | d0.70
#   python qc_sayfasi.py                   # referans | cikti (tam batch sonrası)
# Çıktı: qc/index.html

import base64
import io
import json
import os
import sys

from PIL import Image

BURASI = os.path.dirname(os.path.abspath(__file__))
QC = os.path.join(BURASI, "qc")


def gomulu(yol: str) -> str:
    """200px jpeg önizleme olarak gömer (sayfa boyutunu küçük tutar)."""
    if not os.path.exists(yol):
        return ""
    img = Image.open(yol).convert("RGB").resize((200, 200), Image.LANCZOS)
    tampon = io.BytesIO()
    img.save(tampon, "JPEG", quality=78)
    return "data:image/jpeg;base64," + base64.b64encode(tampon.getvalue()).decode()


def hucre(yol: str, etiket: str) -> str:
    src = gomulu(yol)
    ic = f'<img src="{src}">' if src else '<div class="yok">yok</div>'
    return f"<td>{ic}<small>{etiket}</small></td>"


def main():
    pilot = "--pilot" in sys.argv
    os.makedirs(QC, exist_ok=True)
    ref_klasor = os.path.join(BURASI, "referans-hazir")

    if pilot:
        kolonlar = [
            ("d0.55", "cikti-pilot/d55/tarif"),
            ("d0.62", "cikti-pilot/d62/tarif"),
            ("d0.70", "cikti-pilot/d70/tarif"),
            ("d0.62 + vinyet", "cikti-pilot/d62v/tarif"),
        ]
        sluglar = sorted(
            d[:-4] for d in os.listdir(os.path.join(BURASI, "cikti-pilot", "d62", "tarif")) if d.endswith(".png")
        )
    else:
        kolonlar = [("üretilen", "cikti/tarif")]
        sluglar = sorted(d[:-4] for d in os.listdir(ref_klasor) if d.endswith(".png"))

    satirlar = []
    for slug in sluglar:
        hucreler = [hucre(os.path.join(ref_klasor, slug + ".png"), "referans")]
        for etiket, klasor in kolonlar:
            hucreler.append(hucre(os.path.join(BURASI, klasor.replace("/", os.sep), slug + ".png"), etiket))
        ovr = json.dumps({slug: {"denoise": 0.62}}, ensure_ascii=False)
        satirlar.append(
            f"<tr><th>{slug}<br><code onclick=\"navigator.clipboard.writeText('{ovr.replace(chr(39), chr(92)+chr(39))}')\" "
            f"title='Kopyalamak için tıkla'>{ovr}</code></th>{''.join(hucreler)}</tr>"
        )

    html = (
        "<!doctype html><meta charset='utf-8'><title>Tencere Görsel QC</title>"
        "<style>body{font-family:system-ui;background:#FDF9F4;color:#2B2119;padding:16px}"
        "table{border-collapse:collapse}td,th{padding:6px;text-align:left;vertical-align:top;border-bottom:1px solid #EFE6DB}"
        "img{width:200px;height:200px;object-fit:cover;border-radius:10px;display:block}"
        "small{color:#8A7A6D}.yok{width:200px;height:200px;display:flex;align-items:center;justify-content:center;"
        "background:#F6EFE7;border-radius:10px;color:#8A7A6D}code{font-size:11px;cursor:pointer;display:block;max-width:220px;"
        "background:#F6EFE7;padding:4px;border-radius:6px;margin-top:6px}</style>"
        f"<h1>Tencere Görsel QC {'— Pilot (3 denoise)' if pilot else ''}</h1>"
        "<p>Beğenilmeyen görselin altındaki koda tıkla → ayar-override.json'a yapıştır → "
        "<code style='display:inline'>python uret.py --sadece slug</code> ile yeniden üret.</p>"
        f"<table>{''.join(satirlar)}</table>"
    )
    with open(os.path.join(QC, "index.html"), "w", encoding="utf-8") as f:
        f.write(html)
    print(f"QC sayfası: {os.path.join(QC, 'index.html')} ({len(sluglar)} satır)")


if __name__ == "__main__":
    main()
