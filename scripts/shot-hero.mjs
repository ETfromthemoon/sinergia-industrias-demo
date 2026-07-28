import { chromium } from "playwright";

const URL = process.env.SHOT_URL || "http://localhost:3100";
const browser = await chromium.launch({ channel: "chrome" });

for (const [label, w, h] of [["d", 1440, 900], ["m", 390, 844]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "domcontentloaded" });
  // Give requestIdleCallback time to mount the YouTube iframe.
  await page.waitForTimeout(4000);
  await page.screenshot({ path: `scripts/shots/hero-${label}.png` });
  const hasIframe = await page.locator('iframe[title="Video de fondo"]').count();
  console.log(label, "iframe mounted:", hasIframe > 0);
  await ctx.close();
}

await browser.close();
console.log("done");
