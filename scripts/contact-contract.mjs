import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

// Compile the actual handler and its static content dependency; only email transport is mocked.
const directory = path.resolve("scripts/shots/demo-review/contract");
await mkdir(directory, { recursive: true });
const compile = (source) => ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
await writeFile(path.join(directory, "site.mjs"), compile(await readFile("src/content/site.ts", "utf8")));
await writeFile(path.join(directory, "demo-inbox.mjs"), compile(await readFile("src/lib/demo-inbox.ts", "utf8")));
await writeFile(path.join(directory, "form-body.mjs"), compile(await readFile("src/lib/form-body.ts", "utf8")));
const source = (await readFile("src/app/api/contact/route.ts", "utf8"))
  .replace('from "next/server"', 'from "next/server.js"')
  .replace('from "@/content/site"', 'from "./site.mjs"')
  .replace('from "@/lib/demo-inbox"', 'from "./demo-inbox.mjs"')
  .replace('from "@/lib/form-body"', 'from "./form-body.mjs"');
await writeFile(path.join(directory, "contact.mjs"), compile(source));
const { POST } = await import(pathToFileURL(path.join(directory, "contact.mjs")).href);
const newsletterSource = (await readFile("src/app/api/demo-newsletter/route.ts", "utf8"))
  .replace('from "next/server"', 'from "next/server.js"')
  .replace('from "@/lib/demo-inbox"', 'from "./demo-inbox.mjs"')
  .replace('from "@/lib/form-body"', 'from "./form-body.mjs"');
await writeFile(path.join(directory, "newsletter.mjs"), compile(newsletterSource));
const { POST: newsletter } = await import(pathToFileURL(path.join(directory, "newsletter.mjs")).href);
const previousFetch = globalThis.fetch;
const previousKey = process.env.RESEND_API_KEY;
const previousFrom = process.env.CONTACT_FROM_EMAIL;
const previousDemo = process.env.SINERGIA_DEMO_MODE;
const previousPublicDemo = process.env.NEXT_PUBLIC_DEMO_MODE;
const previousVercel = process.env.VERCEL;
const cloudKeys = ["SINERGIA_CLOUD_DEMO_MODE", "SINERGIA_DEMO_DATABASE_URL", "VERCEL_ENV", "VERCEL_URL"];
const previousCloud = Object.fromEntries(cloudKeys.map((key) => [key, process.env[key]]));
const valid = { name: "Demo", company: "Fixture", email: "demo@example.test", message: "Simulated delivery only", consent: true };
const request = (body) => new Request("http://localhost:3213/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: typeof body === "string" ? body : JSON.stringify(body) });
const results = [];
try {
  delete process.env.SINERGIA_DEMO_MODE;
  delete process.env.NEXT_PUBLIC_DEMO_MODE;
  for (const key of cloudKeys) delete process.env[key];
  const calls = [];
  globalThis.fetch = async (...args) => {
    calls.push(args);
    return Response.json({ id: "synthetic-receipt" });
  };
  process.env.RESEND_API_KEY = "synthetic-key-not-valid";
  process.env.CONTACT_FROM_EMAIL = "Demo <demo@example.test>";
  for (const payload of ["{bad", "null", "[]", { ...valid, name: 42 }, { ...valid, email: "bad" }, { ...valid, consent: "true" }, { ...valid, message: " " }]) {
    assert.equal((await POST(request(payload))).status, 400);
  }
  assert.equal(calls.length, 0);
  results.push("Invalid JSON/types/email/consent rejected without invoking email transport");
  assert.equal((await POST(request({ ...valid, message: "x".repeat(17000) }))).status, 413);
  assert.equal((await POST(request({ ...valid, name: "x".repeat(101) }))).status, 400);
  assert.equal((await POST(new Request("http://localhost/api/contact", { method: "POST", body: JSON.stringify(valid) }))).status, 415);
  assert.equal(calls.length, 0);
  results.push("Body and field limits reject oversized or unsupported requests before transport");
  delete process.env.RESEND_API_KEY;
  assert.equal((await POST(request(valid))).status, 503);
  assert.equal(calls.length, 0);
  results.push("Missing configuration returns an actionable 503 without transport");
  process.env.RESEND_API_KEY = "synthetic-key-not-valid";
  const response = await POST(request(valid));
  assert.equal(response.status, 200);
  assert.equal(calls.length, 1);
  assert.equal(calls[0][0], "https://api.resend.com/emails");
  const payload = JSON.parse(calls[0][1].body);
  assert.equal(payload.reply_to, valid.email);
  assert(payload.text.includes(valid.message));
  results.push("Successful provider response returns success and preserves submitted fields");
  globalThis.fetch = async () => new Response("upstream failed", { status: 500 });
  assert.equal((await POST(request(valid))).status, 502);
  results.push("Upstream error returns controlled 502");
  globalThis.fetch = async () => { throw new Error("simulated network loss"); };
  assert.equal((await POST(request(valid))).status, 502);
  results.push("Network exception returns controlled 502");
  process.env.NEXT_PUBLIC_DEMO_MODE = "true";
  assert.equal((await POST(request(valid))).status, 403);
  results.push("Incomplete demo configuration fails closed without invoking real transport");
  process.env.SINERGIA_DEMO_MODE = "true";
  delete process.env.VERCEL;
  const localRequest = (origin = "http://127.0.0.1:3213") => new Request("http://localhost:3213/api/contact", {
    method: "POST", headers: { "content-type": "application/json", host: "127.0.0.1:3213", origin }, body: JSON.stringify(valid),
  });
  assert.equal((await POST(localRequest("https://example.test"))).status, 403);
  const localResponse = await POST(localRequest());
  assert.equal(localResponse.status, 200);
  const localReceipt = await localResponse.json();
  const persisted = JSON.parse(await readFile(path.join("scripts/shots/demo-inbox", `${localReceipt.receipt}.json`), "utf8"));
  assert.equal(persisted.emailSent, false);
  assert.equal(persisted.data.email, valid.email);
  results.push("Local demo honors HTTP authority, rejects other origins and persists a real local receipt without email");
  process.env.VERCEL = "1";
  assert.equal((await POST(localRequest())).status, 403);
  results.push("Demo cannot invoke transport when running on Vercel");
  process.env.SINERGIA_CLOUD_DEMO_MODE = "true";
  process.env.VERCEL_ENV = "preview";
  process.env.VERCEL_URL = "sinergia-fixture.vercel.app";
  process.env.SINERGIA_DEMO_DATABASE_URL = "postgresql://fixture:synthetic@fixture.neon.tech/demo";
  const cloudOrigin = "https://sinergia-fixture.vercel.app";
  const cloudRequest = (payload = valid, origin = cloudOrigin, host = "sinergia-fixture.vercel.app", protocol = "https:") => new Request(`${protocol}//sinergia-fixture.vercel.app/api/contact`, {
    method: "POST", headers: { "content-type": "application/json", origin, host }, body: JSON.stringify(payload),
  });
  let databaseCalls = 0;
  globalThis.fetch = async () => { databaseCalls++; throw new Error("No transport should be reached"); };
  for (const blocked of [cloudRequest(valid, "https://other.vercel.app"), cloudRequest(valid, cloudOrigin, "other.vercel.app"), cloudRequest(valid, ""), cloudRequest(valid, cloudOrigin, "sinergia-fixture.vercel.app", "http:")]) {
    assert.equal((await POST(blocked)).status, 403);
  }
  process.env.VERCEL_ENV = "production";
  assert.equal((await POST(cloudRequest())).status, 403);
  assert.equal((await newsletter(cloudRequest({ email: valid.email }))).status, 404);
  process.env.VERCEL_ENV = "preview";
  delete process.env.SINERGIA_DEMO_DATABASE_URL;
  assert.equal((await POST(cloudRequest())).status, 403);
  process.env.SINERGIA_DEMO_DATABASE_URL = "postgresql://fixture:synthetic@fixture.neon.tech/demo";
  assert.equal(databaseCalls, 0);
  results.push("Cloud demo rejects production, missing storage, foreign/missing origins, spoofed hosts and HTTP without any transport");
  assert.equal((await POST(cloudRequest())).status, 503);
  assert.equal((await newsletter(cloudRequest({ email: valid.email }))).status, 503);
  results.push("Cloud storage failure returns 503, never success or email fallback");
  globalThis.fetch = async (url, options) => {
    assert.equal(url, "https://api.neon.tech/sql");
    const query = JSON.parse(options.body);
    assert.match(query.query, /^INSERT INTO demo\.receipts/);
    assert.equal(query.params.length, 4);
    assert(!options.body.includes(valid.email));
    assert(!options.body.includes(valid.message));
    return Response.json({ fields: [{ name: "id", dataTypeID: 2950 }], rows: [[query.params[0]]], rowCount: 1 });
  };
  for (const [handler, payload] of [[POST, valid], [newsletter, { email: valid.email }]]) {
    const response = await handler(cloudRequest(payload));
    assert.equal(response.status, 200);
    const result = await response.json();
    assert.match(result.receipt, /^[0-9a-f-]{36}$/);
    assert.match(result.message, /^Demo online:/);
  }
  results.push("Cloud contact/newsletter confirm an inserted receipt while excluding submitted contents from database parameters");
  globalThis.fetch = async () => Response.json({ fields: [{ name: "id", dataTypeID: 2950 }], rows: [], rowCount: 0 });
  assert.equal((await POST(cloudRequest())).status, 503);
  results.push("Unconfirmed cloud INSERT does not produce false success");
  console.log(JSON.stringify({ result: "PASS", groups: results, emailSent: false }, null, 2));
  await writeFile(path.join(directory, "results.json"), JSON.stringify({ result: "PASS", groups: results, emailSent: false }, null, 2));
} finally {
  globalThis.fetch = previousFetch;
  if (previousKey === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = previousKey;
  if (previousFrom === undefined) delete process.env.CONTACT_FROM_EMAIL; else process.env.CONTACT_FROM_EMAIL = previousFrom;
  if (previousDemo === undefined) delete process.env.SINERGIA_DEMO_MODE; else process.env.SINERGIA_DEMO_MODE = previousDemo;
  if (previousPublicDemo === undefined) delete process.env.NEXT_PUBLIC_DEMO_MODE; else process.env.NEXT_PUBLIC_DEMO_MODE = previousPublicDemo;
  if (previousVercel === undefined) delete process.env.VERCEL; else process.env.VERCEL = previousVercel;
  for (const key of cloudKeys) {
    if (previousCloud[key] === undefined) delete process.env[key]; else process.env[key] = previousCloud[key];
  }
}
