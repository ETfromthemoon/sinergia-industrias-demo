import { chromium } from "playwright";

const URL = process.env.SHOT_URL || "http://localhost:3100";

const shots = [
  { name: "desktop-full", width: 1440, height: 900, full: true },
  { name: "desktop-hero", width: 1440, height: 900, full: false },
  { name: "mobile-full", width: 375, height: 812, full: true },
  { name: "mobile-hero", width: 375, height: 812, full: false },
];

const browser = await chromium.launch();
for (const s of shots) {
  const ctx = await browser.newContext({
    viewport: { width: s.width, height: s.height },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "domcontentloaded" });
  // Let scroll-reveal animations settle (whileInView) by scrolling through.
  await page.evaluate(async () => {
    await new Promise((r) => {
      let y = 0;
      const step = () => {
        y += window.innerHeight * 0.8;
        window.scrollTo(0, y);
        if (y < document.body.scrollHeight) setTimeout(step, 120);
        else { window.scrollTo(0, 0); setTimeout(r, 400); }
      };
      step();
    });
  });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `scripts/shots/${s.name}.png`, fullPage: s.full });
  console.log("captured", s.name);
  await ctx.close();
}
await browser.close();
console.log("done");
