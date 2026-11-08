import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

// This ignored file may contain a temporary Vercel share link. Never commit it.
const settings = JSON.parse(await readFile("scripts/shots/demo-review/preview-access.json", "utf8"));
const base = new URL(settings.url);
assert.equal(base.protocol, "https:");
assert(base.hostname.endsWith(".vercel.app"));
assert.equal(base.origin, settings.url);
const accessUrl = settings.accessUrl || base.origin;
assert.equal(new URL(accessUrl).origin, base.origin);
const directory = path.resolve("scripts/shots/demo-review/cloud");
await mkdir(directory, { recursive: true });
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || "msedge" });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
await context.route("**/*", async (route) => {
  const request = route.request();
  if (new URL(request.url()).origin !== base.origin && !["GET", "HEAD"].includes(request.method())) {
    await route.abort("blockedbyclient");
    return;
  }
  await route.continue();
});
const page = await context.newPage();
page.setDefaultTimeout(20000);
const receipts = [];
const checks = [];
const runtimeErrors = [];
page.on("pageerror", (error) => runtimeErrors.push(error.message));
const safe = (value) => String(value).replaceAll(accessUrl, base.origin).replace(/_vercel_share=[^&\s)"']+/g, "_vercel_share=[REDACTED]");
async function check(name, run) {
  try {
    const detail = await run();
    checks.push({ name, status: "PASS", detail });
    console.log(`PASS ${name}`);
  } catch (error) {
    checks.push({ name, status: "FAIL", error: safe(error.message) });
    console.error(`FAIL ${name}: ${safe(error.message)}`);
  }
}
async function visit(route) {
  const response = await page.goto(`${base.origin}${route}`, { waitUntil: "networkidle", timeout: 60000 });
  assert.equal(response.status(), 200);
  await page.locator("h1").waitFor();
  await page.locator('[data-demo-mode="true"]').waitFor();
  assert.match(await page.locator('[data-demo-mode="true"]').innerText(), /Demo online/);
}
try {
  // Share links grant this deployment only; cookies stay in this ephemeral browser context.
  await page.goto(accessUrl, { waitUntil: "networkidle", timeout: 60000 });
  const routes = ["/", "/nosotros", "/ley-rep", "/levantamiento-de-procesos", "/levantamiento-de-datos", "/implementacion-odoo", "/casos-de-exito", "/blog", "/contacto", "/privacidad"];
  await visit("/blog");
  const articles = await page.locator('a[href^="/blog/"]').evaluateAll((links) => [...new Set(links.map((link) => link.getAttribute("href")))]);
  assert.equal(articles.length, 12);
  for (const route of [...routes, ...articles]) {
    await check(`route ${route}`, async () => {
      await visit(route);
      assert.equal(await page.locator("h1").count(), 1);
      assert.match(await page.locator('meta[name="robots"]').getAttribute("content"), /noindex/);
    });
  }
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/casos-de-exito", "/blog", "/contacto"]) {
      await check(`layout ${width} ${route}`, async () => {
        await visit(route);
        assert((await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)) <= 1);
        await page.screenshot({ path: path.join(directory, `${route.replaceAll("/", "_")}-${width}.png`), fullPage: true });
      });
    }
  }
  await check("contact creates a cloud receipt", async () => {
    await visit("/contacto");
    const form = page.locator("form").filter({ has: page.locator('[name="company"]') });
    await form.locator('[name="name"]').fill("Demo sintética");
    await form.locator('[name="company"]').fill("Fixture de preview");
    await form.locator('[name="email"]').fill("demo@example.test");
    await form.locator('[name="message"]').fill("Validación sintética de comprobante sin entrega externa.");
    await form.locator('[name="consent"]').check();
    const submitted = page.waitForResponse((response) => response.url() === `${base.origin}/api/contact` && response.request().method() === "POST");
    await form.getByRole("button", { name: "Enviar solicitud" }).click();
    const response = await submitted;
    assert.equal(response.status(), 200);
    const result = await response.json();
    assert.match(result.receipt, /^[0-9a-f-]{36}$/);
    assert.match(result.message, /No se guardaron datos personales ni se envió correo/);
    await page.getByText(result.message, { exact: true }).waitFor();
    assert.equal(await form.locator('[name="email"]').inputValue(), "");
    receipts.push({ id: result.receipt, flow: "contact" });
  });
  await check("newsletter creates a cloud receipt", async () => {
    await visit("/blog");
    const input = page.getByLabel("Correo electrónico", { exact: true });
    await input.fill("demo@example.test");
    const submitted = page.waitForResponse((response) => response.url() === `${base.origin}/api/demo-newsletter` && response.request().method() === "POST");
    await page.getByRole("button", { name: "Suscribirme", exact: true }).click();
    const response = await submitted;
    assert.equal(response.status(), 200);
    const result = await response.json();
    assert.equal(result.success, true);
    assert.match(result.receipt, /^[0-9a-f-]{36}$/);
    assert.match(result.message, /No se guardó tu correo ni se enviaron mensajes/);
    await page.getByText(result.message, { exact: true }).waitFor();
    assert.equal(await input.inputValue(), "");
    receipts.push({ id: result.receipt, flow: "newsletter" });
  });
  await check("foreign origin and oversized body are rejected online", async () => {
    const invalidOrigin = await context.request.post(`${base.origin}/api/demo-newsletter`, {
      data: { email: "demo@example.test" }, headers: { origin: "https://example.test" },
    });
    assert.equal(invalidOrigin.status(), 403);
    const oversized = await context.request.post(`${base.origin}/api/contact`, {
      data: { message: "x".repeat(17000) }, headers: { origin: base.origin },
    });
    assert.equal(oversized.status(), 413);
  });
  await check("no application runtime exceptions", async () => assert.deepEqual(runtimeErrors, []));
} catch (error) {
  checks.push({ name: "preview access", status: "FAIL", error: safe(error.message) });
} finally {
  await browser.close();
  const summary = { at: new Date().toISOString(), url: base.origin, passed: checks.filter((check) => check.status === "PASS").length,
    failed: checks.filter((check) => check.status === "FAIL").length, receipts, databasePersistence: "PENDING_ADMIN_VERIFICATION",
    externalEmailDelivery: "NOT_TESTED", checks };
  await writeFile(path.join(directory, "results.json"), JSON.stringify(summary, null, 2));
  console.log(JSON.stringify({ passed: summary.passed, failed: summary.failed, url: base.origin }));
  if (summary.failed) process.exitCode = 1;
}
