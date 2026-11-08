import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const base = process.env.DEMO_BASE_URL || "http://127.0.0.1:3213";
const origin = new URL(base).origin;
assert(["127.0.0.1", "localhost"].includes(new URL(base).hostname), "Use an isolated local candidate");
const output = path.resolve("scripts/shots/demo-review");
const match = process.env.DEMO_TEST_MATCH ? new RegExp(process.env.DEMO_TEST_MATCH) : null;
await mkdir(output, { recursive: true });
const results = [];
const errors = [];
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || "msedge" });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
await context.route("**/*", async (route) => {
  const request = route.request();
  if (new URL(request.url()).origin !== origin && !["GET", "HEAD"].includes(request.method())) {
    throw new Error(`External mutation blocked: ${new URL(request.url()).origin}`);
  }
  await route.continue();
});
const page = await context.newPage();
page.on("pageerror", (error) => errors.push(error.message));
page.setDefaultTimeout(12000);

async function check(name, fn) {
  if (match && !match.test(name)) return;
  try {
    const detail = await fn();
    const result = detail?.skipped ? "SKIP" : "PASS";
    results.push({ name, result, detail });
    console.log(`${result} ${name}${result === "SKIP" ? `: ${detail.skipped}` : ""}`);
  } catch (error) {
    results.push({ name, result: "FAIL", error: error.message });
    console.error(`FAIL ${name}: ${error.message}`);
  }
}

async function visit(route) {
  const response = await page.goto(`${base}${route}`, { waitUntil: "networkidle", timeout: 45000 });
  if (response) assert.equal(response.status(), 200, `${route}: HTTP status`);
  else assert.equal(new URL(page.url()).pathname, new URL(route, base).pathname, "Same-document hash navigation");
  await page.locator("h1").waitFor();
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(200);
}

async function settleMedia() {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += innerHeight * 0.85) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 90));
    }
    await Promise.all(Array.from(document.images).map((img) => img.decode().catch(() => undefined)));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(900);
}

try {
  const fixedRoutes = ["/", "/nosotros", "/ley-rep", "/levantamiento-de-procesos", "/levantamiento-de-datos", "/implementacion-odoo", "/casos-de-exito", "/blog", "/contacto", "/privacidad"];
  await visit("/blog");
  const articles = await page.locator('a[href^="/blog/"]').evaluateAll((links) => [...new Set(links.map((a) => a.getAttribute("href")))]);
  assert(articles.length > 0, "Blog articles are discoverable");
  const routes = [...fixedRoutes, ...articles];
  const internalLinks = new Set();
  for (const route of routes) {
    await check(`route/media/links ${route}`, async () => {
      await visit(route);
      assert.equal(await page.locator("h1").count(), 1);
      await settleMedia();
      const broken = await page.locator("img").evaluateAll((images) => images.filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.getAttribute("src")));
      assert.deepEqual(broken, [], "Images must decode");
      const links = await page.locator('a[href^="/"]').evaluateAll((links) => links.map((a) => a.getAttribute("href")));
      links.forEach((link) => internalLinks.add(link));
      return { imageCount: await page.locator("img").count(), linkCount: links.length };
    });
  }
  await check("all internal destinations", async () => {
    const paths = [...new Set([...internalLinks].map((href) => new URL(href, base).pathname))];
    for (const route of paths) {
      const response = await context.request.get(`${base}${route}`);
      assert.equal(response.status(), 200, route);
    }
    return { destinations: paths.length };
  });

  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of fixedRoutes) {
      await check(`layout ${width} ${route}`, async () => {
        await visit(route);
        await settleMedia();
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
        assert(overflow <= 1, `Horizontal overflow: ${overflow}px`);
        const italic = await page.locator("h1, h2, h3, h4, h1 *, h2 *, h3 *, h4 *").evaluateAll((els) => els.filter((e) => getComputedStyle(e).fontStyle !== "normal").map((e) => e.textContent));
        assert.deepEqual(italic, [], "Headings must be non-italic");
        const colors = await page.locator(".action-button").evaluateAll((els) => els.map((e) => getComputedStyle(e).backgroundColor));
        assert(colors.length > 0);
        assert(colors.every((color) => ["rgb(22, 107, 71)", "rgb(16, 82, 54)"].includes(color)), JSON.stringify(colors));
        if (["/", "/blog", "/contacto", "/casos-de-exito"].includes(route) && [320, 1440].includes(width)) {
          await page.screenshot({ path: path.join(output, `${route.replaceAll("/", "_") || "home"}-${width}.png`), fullPage: true });
        }
      });
    }
  }

  await check("mobile navigation and Escape", async () => {
    await page.setViewportSize({ width: 375, height: 812 });
    await visit("/");
    await page.getByRole("button", { name: "Abrir menú" }).click();
    await page.locator("#mobile-navigation").waitFor({ state: "visible" });
    await page.keyboard.press("Escape");
    await page.locator("#mobile-navigation").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "Abrir menú" }).click();
    await page.locator('#mobile-navigation a[href="/contacto"]').first().click();
    await page.waitForURL("**/contacto");
    await page.locator("#mobile-navigation").waitFor({ state: "hidden" });
  });

  await check("12 cases, selectors, keyboard and direct Ecostandard", async () => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await visit("/casos-de-exito");
    const selectors = page.getByRole("group", { name: "Seleccionar caso", exact: true }).getByRole("button");
    assert.equal(await selectors.count(), 12);
    for (let index = 0; index < 12; index++) {
      await selectors.nth(index).click();
      await page.getByRole("group", { name: new RegExp(`^Caso ${index + 1} de 12:`) }).waitFor();
      const image = await page.locator('[aria-roledescription="diapositiva"] [style*="background-image"]').evaluate((el) => getComputedStyle(el).backgroundImage.match(/url\(["']?(.*?)["']?\)/)?.[1]);
      assert(image);
      assert.equal((await context.request.get(image)).status(), 200);
    }
    const carousel = page.getByRole("region", { name: "Casos de éxito" });
    await carousel.focus();
    await page.keyboard.press("ArrowRight");
    await page.getByRole("group", { name: /^Caso 1 de 12:/ }).waitFor();
    await page.getByRole("button", { name: "Caso anterior", exact: true }).click();
    await page.getByRole("group", { name: /^Caso 12 de 12:/ }).waitFor();
    await visit("/casos-de-exito#ecostandard");
    await page.getByRole("group", { name: /^Caso 8 de 12: ECOSTANDARD/i }).waitFor();
    await visit("/");
    await page.locator('a[href="/casos-de-exito#ecostandard"]').click();
    await page.getByRole("group", { name: /^Caso 8 de 12: ECOSTANDARD/i }).waitFor();
  });

  for (const route of ["/", "/contacto"]) {
    await check(`contact success/failure/retry ${route} (intercepted)`, async () => {
      let mode = "failure";
      let calls = 0;
      await page.route("**/api/contact", async (handler) => {
        calls++;
        const payload = handler.request().postDataJSON();
        assert.equal(payload.consent, true);
        assert.equal(payload.email, "demo@example.test");
        await handler.fulfill({ status: mode === "failure" ? 502 : 200, json: { message: mode === "failure" ? "Error controlado de prueba" : "Mensaje de prueba aceptado" } });
      });
      await visit(route);
      const form = page.locator("form").filter({ has: page.locator('input[name="company"]') });
      await form.locator('[name="name"]').fill("Demo sintética");
      await form.locator('[name="company"]').fill("Demo local");
      await form.locator('[name="email"]').fill("demo@example.test");
      await form.locator('[name="message"]').fill("Prueba interceptada: no enviar correo.");
      await form.locator('[name="consent"]').check();
      await form.getByRole("button", { name: "Enviar solicitud" }).click();
      await page.getByText("Error controlado de prueba", { exact: true }).waitFor();
      assert.equal(await form.locator('[name="email"]').inputValue(), "demo@example.test");
      mode = "success";
      await form.getByRole("button", { name: "Enviar solicitud" }).click();
      await page.getByText("Mensaje de prueba aceptado", { exact: true }).waitFor();
      assert.equal(await form.locator('[name="email"]').inputValue(), "");
      assert.equal(calls, 2);
      await page.unroute("**/api/contact");
    });
  }

  await check("newsletter response, failure and retry (no email sent)", async () => {
    let mode = "error";
    let calls = 0;
    const interceptNewsletter = async (handler) => {
      calls++;
      await handler.fulfill({ status: mode === "error" ? 500 : 200, json: { success: "true" } });
    };
    await page.route("https://formsubmit.co/**", interceptNewsletter);
    await page.route("**/api/demo-newsletter", interceptNewsletter);
    await visit("/blog");
    const demo = await page.locator('[data-demo-mode="true"]').count() > 0;
    const successMessage = demo ? "Demo: comprobante de suscripción registrado. No se enviaron correos." : "Suscripción confirmada. Te escribiremos cuando publiquemos algo relevante.";
    const input = page.getByLabel("Correo electrónico", { exact: true });
    await input.fill("demo@example.test");
    await page.getByRole("button", { name: "Suscribirme", exact: true }).click();
    await page.getByText("Error al enviar. Intenta de nuevo.", { exact: true }).waitFor();
    assert.equal(await input.inputValue(), "demo@example.test");
    mode = "success";
    await page.getByRole("button", { name: "Suscribirme", exact: true }).click();
    await page.getByText(successMessage, { exact: true }).waitFor();
    assert.equal(await input.inputValue(), "");
    assert.equal(calls, 2);
    assert.equal(await page.locator('[role="status"]').innerText(), successMessage);
    await page.unroute("https://formsubmit.co/**");
    await page.unroute("**/api/demo-newsletter");
  });

  await check("contact rejects malformed payloads (actual API; no transport)", async () => {
    for (const payload of ["{bad", "null", "[]", JSON.stringify({ name: 42 }), JSON.stringify({name:"Demo", company:"Demo", email:"demo@example.test", message:"No enviar",consent:"false"})]) {
      const response = await context.request.post(`${base}/api/contact`, { data: payload, headers: { "content-type": "application/json", origin } });
      assert.equal(response.status(), 400);
      assert.equal(typeof (await response.json()).message, "string");
    }
  });

  await check("local demo receipts persist without external delivery", async () => {
    await visit("/blog");
    if (!(await page.locator('[data-demo-mode="true"]').count())) return { skipped: "Normal candidate: demo mode disabled" };
    for (const [endpoint, flow, data] of [
      ["/api/contact", "contact", {name:"Demo",company:"Fixture",email:"demo@example.test",message:"Receipt test only",consent:true}],
      ["/api/demo-newsletter", "newsletter", {email:"demo@example.test"}],
    ]) {
      const rejected = await context.request.post(`${base}${endpoint}`, {data,headers:{origin:"https://example.test"}});
      assert.equal(rejected.status(), 403, "Nonlocal origins cannot create demo receipts");
      const response = await context.request.post(`${base}${endpoint}`, {data,headers:{origin}});
      assert.equal(response.status(), 200);
      const result = await response.json();
      assert.match(result.receipt, /^[0-9a-f-]{36}$/);
      const receipt = JSON.parse(await readFile(path.join("scripts/shots/demo-inbox", `${result.receipt}.json`), "utf8"));
      assert.equal(receipt.flow, flow);
      assert.equal(receipt.emailSent, false);
      assert.equal(receipt.data.email, data.email);
    }
    await visit("/contacto");
    const form = page.locator("form").filter({ has: page.locator('input[name="company"]') });
    await form.locator('[name="name"]').fill("Demo en navegador");
    await form.locator('[name="company"]').fill("Fixture local");
    await form.locator('[name="email"]').fill("demo@example.test");
    await form.locator('[name="message"]').fill("Verificación de captura local sin transporte externo.");
    await form.locator('[name="consent"]').check();
    const captured = page.waitForResponse((response) => response.url() === `${base}/api/contact` && response.request().method() === "POST");
    await form.getByRole("button", { name: "Enviar solicitud" }).click();
    const response = await captured;
    assert.equal(response.status(), 200);
    const receipt = await response.json();
    await page.getByText(receipt.message, { exact: true }).waitFor();
    assert.match(receipt.message, /Demo:.*No se envió correo/);
    assert.equal(await form.locator('[name="email"]').inputValue(), "");
    await page.screenshot({path:path.join(output,"local-receipt-contact.png"),fullPage:true});
  });

  await check("text 200% and keyboard focus", async () => {
    await page.setViewportSize({ width: 375, height: 812 });
    for (const route of ["/", "/contacto", "/blog", "/casos-de-exito"]) {
      await visit(route);
      await page.addStyleTag({ content: "html { font-size: 200%; }" });
      assert((await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)) <= 1, route);
    }
    await visit("/contacto");
    await page.keyboard.press("Tab");
    const focus = await page.evaluate(() => ({ tag: document.activeElement.tagName, outline: getComputedStyle(document.activeElement).outlineStyle }));
    assert.notEqual(focus.tag, "BODY");
    assert.notEqual(focus.outline, "none");
  });
  await check("no browser runtime exceptions", async () => assert.deepEqual(errors, []));
} finally {
  await browser.close();
  const summary = { at: new Date().toISOString(), base, passed: results.filter((r) => r.result === "PASS").length, failed: results.filter((r) => r.result === "FAIL").length, skipped: results.filter((r) => r.result === "SKIP").length, externalEmailDelivery: "NOT_TESTED", results };
  const resultFile = match ? "results-focused.json" : "results.json";
  await writeFile(path.join(output, resultFile), JSON.stringify({ ...summary, focused: Boolean(match) }, null, 2));
  console.log(JSON.stringify({ passed: summary.passed, failed: summary.failed, skipped: summary.skipped, evidence: path.join(output, resultFile) }));
  if (summary.failed) process.exitCode = 1;
}
