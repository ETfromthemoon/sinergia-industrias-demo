"""Per-section viewport screenshots.

Scrolls each section to center, waits for motion `whileInView` reveals to fire
(headless `window.innerHeight` is real here because the context viewport is set),
then captures the VIEWPORT (not full_page) so triggered content is preserved.
Run: python -c "import os; os.environ['SHOT_URL']='http://localhost:3000'; exec(open('scripts/shot_sections.py').read())"
"""
from playwright.sync_api import sync_playwright
import os

URL = os.environ.get("SHOT_URL", "http://localhost:3000")
os.makedirs("scripts/shots", exist_ok=True)

# (name, selector)
SECTIONS = [
    ("01-hero", "main > section:nth-of-type(1)"),
    ("02-credibility", "main > section:nth-of-type(2)"),
    ("03-services", "#servicios"),
    ("04-leyrep", "main > section:nth-of-type(4)"),
    ("05-method", "#metodo"),
    ("06-contact", "#contacto"),
    ("07-footer", "footer"),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for label, vw, vh in [("d", 1440, 900), ("m", 390, 844)]:
        ctx = browser.new_context(viewport={"width": vw, "height": vh}, device_scale_factor=1)
        page = ctx.new_page()
        page.goto(URL, wait_until="domcontentloaded")
        page.wait_for_timeout(600)
        for name, sel in SECTIONS:
            page.eval_on_selector(sel, "el => el.scrollIntoView({block:'start'})")
            page.wait_for_timeout(1100)  # let whileInView + staggers settle
            page.screenshot(path=f"scripts/shots/sec-{label}-{name}.png")
            print("captured", label, name)
        ctx.close()
    browser.close()
print("done")
