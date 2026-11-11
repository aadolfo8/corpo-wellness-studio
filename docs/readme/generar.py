"""Genera las ilustraciones SVG del README con las fuentes y las fotos incrustadas en base64.

Uso, desde la raíz del repo: `python docs/readme/generar.py .`
Necesita Pillow (`pip install pillow`) y conexión para descargar las fuentes de Google Fonts,
las mismas que carga la web en index.html.
"""

import base64
import io
import re
import sys
import urllib.request
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(sys.argv[1])
MEDIA = ROOT / "src/assets/instagram"
OUT = ROOT / "docs/readme"
OUT.mkdir(parents=True, exist_ok=True)

# Paleta de duo.css
GREEN, GREEN_DEEP, BEIGE, CREAM, INK, MUTED = (
    "#2f4a3a", "#1f3328", "#e9dfcc", "#f5efe3", "#1d2620", "#5d665e",
)

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36"


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req) as res:
        return res.read()


def font(query: str, family: str, style: str = "normal") -> str:
    """Descarga el subconjunto latino de una fuente de Google Fonts y la devuelve como @font-face."""
    css = fetch(f"https://fonts.googleapis.com/css2?family={query}&display=swap").decode()
    # Google sirve un bloque por subconjunto, con un comentario que lo nombra; nos quedamos con «latin».
    block = re.search(r"/\* latin \*/\s*@font-face\s*{([^}]*)}", css)
    src = re.search(r"url\((https://[^)]+\.woff2)\)", block.group(1)).group(1)
    weight = re.search(r"font-weight:\s*([^;]+);", block.group(1)).group(1)
    data = base64.b64encode(fetch(src)).decode()
    return (
        f"@font-face{{font-family:'{family}';font-style:{style};font-weight:{weight};"
        f"src:url(data:font/woff2;base64,{data}) format('woff2');}}"
    )


def photo(name: str, w: int, h: int, focus: tuple[float, float] = (0.5, 0.5)) -> str:
    """Recorta la foto al tamaño pedido (al doble, para pantallas retina) y la devuelve como data URI."""
    im = Image.open(MEDIA / name).convert("RGB")
    im = ImageOps.fit(im, (w * 2, h * 2), Image.LANCZOS, centering=focus)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=72, optimize=True, progressive=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()


PRATA = font("Prata", "Prata")
BRICO = font("Bricolage+Grotesque:opsz,wght@12..96,400..800", "Bricolage")
DMSANS = font("DM+Sans:opsz,wght@9..40,400..700", "DMSans")
NEWS = font("Newsreader:ital,opsz,wght@1,6..72,400", "Newsreader", "italic")


def svg(w: int, h: int, body: str, title: str) -> str:
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" '
        f'role="img" aria-label="{title}"><title>{title}</title>'
        f"<style>{PRATA}{BRICO}{DMSANS}{NEWS}"
        ".p{font-family:Prata,Georgia,serif}"
        ".b{font-family:Bricolage,'Segoe UI',sans-serif;font-weight:700;letter-spacing:-0.045em}"
        ".s{font-family:DMSans,'Segoe UI',sans-serif}"
        ".n{font-family:Newsreader,Georgia,serif;font-style:italic;font-weight:400}"
        "@media (prefers-reduced-motion:reduce){animate,animateTransform{display:none}}"
        f"</style>{body}</svg>\n"
    )


# ---------- Cabecera: la portada partida en dos, con el sello de «Pedir cita» ----------
HW, HH = 268, 384  # tamaño de cada mitad


def half(x: int, y: int, img: str, index: str, title: str, sub: str, gid: str) -> str:
    cx, cy = x + HW / 2, y + HH / 2
    return f"""
<clipPath id="c{gid}"><rect x="{x}" y="{y}" width="{HW}" height="{HH}" rx="22"/></clipPath>
<g clip-path="url(#c{gid})">
  <image href="{img}" x="{x}" y="{y}" width="{HW}" height="{HH}" preserveAspectRatio="xMidYMid slice">
    <animateTransform attributeName="transform" type="scale" additive="sum" values="1;1.06;1"
      dur="14s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1"
      keySplines=".45 0 .55 1;.45 0 .55 1"/>
    <animateTransform attributeName="transform" type="translate" additive="sum"
      values="0 0;{-cx * 0.06} {-cy * 0.06};0 0" dur="14s" repeatCount="indefinite" calcMode="spline"
      keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1"/>
  </image>
  <rect x="{x}" y="{y}" width="{HW}" height="{HH}" fill="url(#shade)"/>
</g>
<text x="{x + 24}" y="{y + 40}" class="s" font-size="14" font-weight="600" letter-spacing="1.7" fill="{CREAM}">{index}</text>
<text x="{x + 24}" y="{y + HH - 74}" class="b" font-size="31" fill="{CREAM}">{title}</text>
<line x1="{x + 24}" x2="{x + HW - 24}" y1="{y + HH - 52}" y2="{y + HH - 52}" stroke="{CREAM}" stroke-opacity=".4"/>
<text x="{x + 24}" y="{y + HH - 26}" class="s" font-size="14" font-weight="600" fill="{CREAM}">{sub}</text>
"""


hx, hy = 676, 48
hero = f"""
<defs>
  <linearGradient id="shade" x1="0" x2="0" y1="0" y2="1">
    <stop offset=".3" stop-color="{GREEN_DEEP}" stop-opacity=".1"/>
    <stop offset="1" stop-color="{GREEN_DEEP}" stop-opacity=".9"/>
  </linearGradient>
</defs>
<rect width="1280" height="480" rx="28" fill="{CREAM}"/>

<text x="72" y="160" class="p" font-size="124" fill="{INK}" letter-spacing="2">corpo</text>
<text x="78" y="236" class="s" font-size="14" letter-spacing="3.4" fill="{MUTED}">CLÍNICA · FISIO &amp; PILATES</text>

<text x="74" y="316" class="b" font-size="58" fill="{INK}">Fisioterapia <tspan class="n" fill="{GREEN}" letter-spacing="0">y</tspan> Pilates</text>
<text x="76" y="352" class="s" font-size="22" font-weight="500" fill="{MUTED}">en Ronda Sur, Murcia</text>

<circle cx="82" cy="413" r="4.5" fill="{GREEN}"/>
<text x="96" y="418" class="s" font-size="16" fill="{INK}">Ecógrafo en la clínica</text>
<circle cx="292" cy="413" r="4.5" fill="{GREEN}"/>
<text x="306" y="418" class="s" font-size="16" fill="{INK}">Pilates en grupos reducidos</text>

{half(hx, hy, photo("hero-fisio.jpg", HW, HH, (0.5, 0.45)), "01", "Fisioterapia", "Ver fisioterapia ↓", "f")}
{half(hx + HW + 12, hy, photo("hero-pilates.jpg", HW, HH), "02", "Pilates Máquina", "Ver Pilates ↓", "p")}

<g transform="translate({hx + HW + 6} {hy + HH / 2})">
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0;-6;0;0" keyTimes="0;.12;.24;1"
      dur="6s" repeatCount="indefinite"/>
    <circle r="68" fill="{BEIGE}" stroke="{CREAM}" stroke-width="6"/>
    <text y="-8" text-anchor="middle" class="b" font-size="24" letter-spacing="-0.6" fill="{GREEN_DEEP}">Pedir</text>
    <text y="18" text-anchor="middle" class="b" font-size="24" letter-spacing="-0.6" fill="{GREEN_DEEP}">cita</text>
    <text y="40" text-anchor="middle" class="b" font-size="18" letter-spacing="0" fill="{GREEN_DEEP}">↗</text>
  </g>
</g>
"""
(OUT / "hero.svg").write_text(
    svg(1280, 480, hero, "Corpo: fisioterapia y Pilates Máquina en Ronda Sur, Murcia"), "utf-8"
)


# ---------- Las tres pantallas de la web ----------
PW, PH, PY = 384, 392, 64


def screen(x: int, bg: str, fg: str, kicker: str, title: list[str], body: str) -> str:
    lines = "".join(
        f'<text x="{x + 32}" y="{PY + 92 + i * 34}" class="b" font-size="32" fill="{fg}">{t}</text>'
        for i, t in enumerate(title)
    )
    return f"""
<rect x="{x}" y="{PY}" width="{PW}" height="{PH}" rx="22" fill="{bg}"/>
<line x1="{x + 32}" x2="{x + 56}" y1="{PY + 45}" y2="{PY + 45}" stroke="{fg}"/>
<text x="{x + 66}" y="{PY + 50}" class="s" font-size="13" font-weight="600" letter-spacing="1.8" fill="{fg}">{kicker}</text>
{lines}
{body}"""


def thumb(x: int, y: int, img: str, cid: str, size: int = 44) -> str:
    return (
        f'<clipPath id="t{cid}"><rect x="{x}" y="{y}" width="{size}" height="{size}" rx="10"/></clipPath>'
        f'<image href="{img}" x="{x}" y="{y}" width="{size}" height="{size}" '
        f'preserveAspectRatio="xMidYMid slice" clip-path="url(#t{cid})"/>'
    )


def row(x: int, y: int, fg: str, sub: str, title: str, text: str, icon: str) -> str:
    return (
        f"{icon}"
        f'<text x="{x + 60}" y="{y + 19}" class="b" font-size="18" letter-spacing="-0.5" fill="{fg}">{title}</text>'
        f'<text x="{x + 60}" y="{y + 39}" class="s" font-size="13" fill="{sub}">{text}</text>'
    )


def pill(x: int, y: int, w: int, label: str, solid: bool) -> str:
    fill = f'fill="{GREEN}"' if solid else f'fill="none" stroke="{GREEN}" stroke-width="1.5"'
    color = CREAM if solid else GREEN
    return (
        f'<rect x="{x}" y="{y}" width="{w}" height="40" rx="20" {fill}/>'
        f'<text x="{x + w / 2}" y="{y + 25.5}" text-anchor="middle" class="s" font-size="14" '
        f'font-weight="600" fill="{color}">{label}</text>'
    )


# 01 · Fisioterapia: la ecografía destacada y el resto de servicios
x1 = 48
fisio_rows = [
    ("Terapia manual", "Las manos, en el centro", "fisio-manual.jpg"),
    ("Diatermia", "Tecnología que se suma", "fisio-diatermia.jpg"),
    ("Ondas de choque", "Otra herramienta más", "fisio-ondas.jpg"),
]
fisio_body = [
    f'<rect x="{x1 + 24}" y="{PY + 156}" width="{PW - 48}" height="72" rx="14" fill="{BEIGE}"/>',
    thumb(x1 + 38, PY + 170, photo("ecografia.jpg", 44, 44), "eco"),
    f'<text x="{x1 + 98}" y="{PY + 186}" class="s" font-size="11" font-weight="700" letter-spacing="1.2" fill="{GREEN}">LO QUE NOS DIFERENCIA</text>',
    f'<text x="{x1 + 98}" y="{PY + 210}" class="b" font-size="20" letter-spacing="-0.6" fill="{INK}">Ecografía en consulta</text>',
]
for i, (t, d, img) in enumerate(fisio_rows):
    y = PY + 238 + i * 44
    fisio_body.append(row(x1 + 38, y, INK, MUTED, t, d, thumb(x1 + 38, y, photo(img, 34, 34), f"f{i}", 34)))

# 02 · Pilates Máquina: los tres pasos
x2 = x1 + PW + 24
steps = [
    ("Primera clase", "Te explicamos el Reformer", "pilates-1.jpg"),
    ("Grupo reducido", "Correcciones de cerca", "pilates-2.jpg"),
    ("Progresión", "Muelles y apoyos a tu ritmo", "pilates-3.jpg"),
]
pilates_body = []
for i, (t, d, img) in enumerate(steps):
    y = PY + 168 + i * 66
    pilates_body.append(thumb(x2 + 32, y, photo(img, 48, 48), f"p{i}", 48))
    pilates_body.append(
        f'<text x="{x2 + 96}" y="{y + 15}" class="s" font-size="12" font-weight="600" fill="{BEIGE}" opacity=".7">0{i + 1}</text>'
        f'<text x="{x2 + 96}" y="{y + 35}" class="b" font-size="19" letter-spacing="-0.5" fill="{CREAM}">{t}</text>'
    )
    pilates_body.append(f'<text x="{x2 + 96}" y="{y + 53}" class="s" font-size="13" fill="{BEIGE}" opacity=".85">{d}</text>')

# 03 · Contacto: el mapa con el pin y las tres vías
x3 = x2 + PW + 24
streets = "".join(
    f'<path d="{d}" fill="none" stroke="{CREAM}" stroke-width="{w}" stroke-linecap="round"/>'
    for d, w in [
        (f"M{x3 + 24} {PY + 196} C{x3 + 120} {PY + 176} {x3 + 220} {PY + 236} {x3 + 360} {PY + 206}", 7),
        (f"M{x3 + 110} {PY + 152} L{x3 + 170} {PY + 280}", 5),
        (f"M{x3 + 250} {PY + 148} C{x3 + 270} {PY + 200} {x3 + 300} {PY + 240} {x3 + 290} {PY + 280}", 5),
        (f"M{x3 + 24} {PY + 252} L{x3 + 360} {PY + 262}", 3),
    ]
)
pin_x, pin_y = x3 + 206, PY + 214
contact_body = f"""
<clipPath id="map"><rect x="{x3 + 24}" y="{PY + 148}" width="{PW - 48}" height="132" rx="14"/></clipPath>
<g clip-path="url(#map)">
  <rect x="{x3 + 24}" y="{PY + 148}" width="{PW - 48}" height="132" fill="#dcd3bf"/>
  {streets}
</g>
<g transform="translate({pin_x} {pin_y})">
  <circle r="10" fill="{GREEN}" opacity=".25">
    <animate attributeName="r" values="10;26;10" dur="2.6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values=".35;0;.35" dur="2.6s" repeatCount="indefinite"/>
  </circle>
  <path d="M0 6C-9-4-14-10-14-17a14 14 0 0 1 28 0c0 7-5 13-14 23Z" transform="translate(0 -4)" fill="{GREEN}"/>
  <circle cy="-21" r="5" fill="{CREAM}"/>
</g>
<text x="{x3 + 32}" y="{PY + 306}" class="s" font-size="13" fill="{MUTED}">C. Pedáneo José Sánchez Mompeán, 16 · Murcia</text>
{pill(x3 + 32, PY + 324, 104, "Pedir cita ↗", True)}
{pill(x3 + 144, PY + 324, 100, "WhatsApp", False)}
{pill(x3 + 252, PY + 324, 100, "Cómo llegar", False)}
"""

screens = f"""
<rect width="1280" height="480" rx="28" fill="{CREAM}"/>
<g class="s" font-size="15" font-weight="500" fill="{INK}">
  <text x="48" y="38" class="p" font-size="26" font-weight="400">corpo</text>
  <text x="{x1 + PW / 2}" y="38" text-anchor="middle">Fisioterapia</text>
  <text x="{x2 + PW / 2}" y="38" text-anchor="middle">Pilates</text>
  <text x="{x3 + PW / 2}" y="38" text-anchor="middle">Contacto</text>
</g>
{screen(x1, "#fbf7ee", INK, "01 · FISIOTERAPIA", ["Fisioterapia, con", "ecografía en consulta."], "".join(fisio_body))}
{screen(x2, GREEN, CREAM, "02 · PILATES MÁQUINA", ["Fuerza, control", "y movilidad."], "".join(pilates_body))}
{screen(x3, BEIGE, INK, "03 · CONTACTO", ["Ven a vernos."], contact_body)}
"""
(OUT / "pantallas.svg").write_text(
    svg(1280, 480, screens, "Las tres pantallas de la web: fisioterapia, Pilates Máquina y contacto"), "utf-8"
)

for f in ("hero.svg", "pantallas.svg"):
    print(f, f"{(OUT / f).stat().st_size / 1024:.0f} KB")
