import { chromium } from "playwright";

const URL = process.env.SHOT_URL || "http://localhost:3000";
const ROUTES = ["/ley-rep", "/nosotros", "/blog", "/casos-de-exito"];

const browser = await chromium.launch();
for (const route of ROUTES) {
  for (const [label, vw, vh] of [["d", 1440, 900], ["m", 390, 844]]) {
    const ctx = await browser.newContext({ viewport: { width: vw, height: vh }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    await page.goto(URL + route, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1200);
    const name = `interior-${label}-${route.replace(/\//g, "") || "home"}.png`;
    await page.screenshot({ path: `scripts/shots/${name}`, fullPage: true });
    console.log("captured", name);
    await ctx.close();
  }
}
await browser.close();
console.log("done");
