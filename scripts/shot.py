from playwright.sync_api import sync_playwright
import time, os

URL = os.environ.get("SHOT_URL", "http://localhost:3100")
os.makedirs("scripts/shots", exist_ok=True)

shots = [
    ("desktop-full", 1440, 900, True),
    ("desktop-hero", 1440, 900, False),
    ("mobile-full", 375, 812, True),
    ("mobile-hero", 375, 812, False),
]

scroll_js = """
async () => {
  await new Promise((res) => {
    let y = 0;
    const step = () => {
      y += window.innerHeight * 0.8;
      window.scrollTo(0, y);
      if (y < document.body.scrollHeight) setTimeout(step, 110);
      else { window.scrollTo(0, 0); setTimeout(res, 400); }
    };
    step();
  });
}
"""

with sync_playwright() as p:
    browser = p.chromium.launch()
    for name, w, h, full in shots:
        ctx = browser.new_context(viewport={"width": w, "height": h}, device_scale_factor=2)
        page = ctx.new_page()
        page.goto(URL, wait_until="domcontentloaded")
        page.evaluate(scroll_js)
        page.wait_for_timeout(1200)
        page.screenshot(path=f"scripts/shots/{name}.png", full_page=full)
        print("captured", name)
        ctx.close()
    browser.close()
print("done")
