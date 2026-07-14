import { chromium } from "playwright";

const URL = process.env.SHOT_URL || "http://localhost:3100";

const breakpoints = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "laptop-1024", width: 1024, height: 800 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "mobile-375", width: 375, height: 812 },
];

async function settle(page) {
  await page.evaluate(async () => {
    await new Promise((r) => {
      let y = 0;
      const step = () => {
        y += window.innerHeight * 0.8;
        window.scrollTo(0, y);
        if (y < document.body.scrollHeight) setTimeout(step, 120);
        else {
          window.scrollTo(0, 0);
          setTimeout(r, 400);
        }
      };
      step();
    });
  });
  await page.waitForTimeout(800);
}

const browser = await chromium.launch();

// Full-page + hero shots per breakpoint, motion enabled.
for (const bp of breakpoints) {
  const ctx = await browser.newContext({
    viewport: { width: bp.width, height: bp.height },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "domcontentloaded" });
  await settle(page);
  await page.screenshot({ path: `scripts/shots/${bp.name}-full.png`, fullPage: true });
  await page.screenshot({ path: `scripts/shots/${bp.name}-hero.png`, fullPage: false });
  console.log("captured", bp.name);
  await ctx.close();
}

// Reduced-motion pass on desktop — verify static fallbacks (no video, no pin).
{
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "domcontentloaded" });
  await settle(page);
  await page.screenshot({ path: "scripts/shots/reduced-motion-full.png", fullPage: true });
  console.log("captured reduced-motion");
  await ctx.close();
}

// Ley REP set-piece — 3 scroll states (desktop, motion enabled).
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "domcontentloaded" });
  const box = await page.evaluate(() => {
    const secs = Array.from(document.querySelectorAll("section"));
    const rep = secs.find((s) => s.innerText.includes("La Ley REP no es opcional"));
    if (!rep) return null;
    const rect = rep.getBoundingClientRect();
    // useScroll's ["start start","end end"] normalizes progress over
    // (section height - viewport height), not the full section height —
    // that's the pin-release point where the sticky child stops tracking.
    const scrollRange = rect.height - window.innerHeight;
    return { top: window.scrollY + rect.top, scrollRange };
  });
  if (box) {
    const points = [0.05, 0.5, 0.95];
    for (const p of points) {
      await page.evaluate((y) => window.scrollTo(0, y), box.top + box.scrollRange * p);
      await page.waitForTimeout(600);
      await page.screenshot({ path: `scripts/shots/ley-rep-scroll-${Math.round(p * 100)}.png` });
      console.log("captured ley-rep-scroll", p);
    }
  } else {
    console.log("ley-rep section not found");
  }
  await ctx.close();
}

await browser.close();
console.log("done");
