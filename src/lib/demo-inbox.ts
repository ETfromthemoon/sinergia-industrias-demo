import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

export function demoRequested() {
  return process.env.SINERGIA_DEMO_MODE === "true" || process.env.NEXT_PUBLIC_DEMO_MODE === "true" || process.env.SINERGIA_CLOUD_DEMO_MODE === "true";
}

function cloudOrigin() {
  const host = process.env.VERCEL_URL;
  if (!host) return null;
  try {
    const url = new URL(`https://${host}`);
    return url.host === host && url.hostname.endsWith(".vercel.app") && url.pathname === "/" && !url.search && !url.hash
      ? url.origin : null;
  } catch {
    return null;
  }
}

export function cloudDemoEnabled() {
  return process.env.SINERGIA_CLOUD_DEMO_MODE === "true" && process.env.VERCEL === "1" &&
    process.env.VERCEL_ENV === "preview" && Boolean(cloudOrigin()) && Boolean(process.env.SINERGIA_DEMO_DATABASE_URL);
}

export function demoEnabled() {
  if (process.env.SINERGIA_DEMO_MODE !== "true" || process.env.NEXT_PUBLIC_DEMO_MODE !== "true") return false;
  return process.env.SINERGIA_CLOUD_DEMO_MODE === "true"
    ? cloudDemoEnabled() : !process.env.VERCEL;
}

export function isDemoRequest(request: Request) {
  if (!demoEnabled()) return false;
  const url = new URL(request.url);
  const origin = request.headers.get("origin");
  // Next can normalize request.url to localhost; validate the actual HTTP authority.
  const host = request.headers.get("host") || url.host;
  if (cloudDemoEnabled()) {
    const expected = cloudOrigin();
    return url.protocol === "https:" && url.origin === expected && origin === expected && `https://${host}` === expected;
  }
  try {
    const authority = new URL(`${url.protocol}//${host}`);
    return ["localhost", "127.0.0.1", "[::1]"].includes(authority.hostname) &&
      authority.host === host && origin === authority.origin;
  } catch {
    return false;
  }
}

export async function saveDemoReceipt(flow: "contact" | "newsletter", data: Record<string, string>) {
  if (!demoEnabled()) throw new Error("Demo storage is not enabled");
  const receipt = randomUUID();
  if (cloudDemoEnabled()) {
    const sql = neon(process.env.SINERGIA_DEMO_DATABASE_URL!, { fetchOptions: { signal: AbortSignal.timeout(8000) } });
    // The preview persists proof of validation only, never submitted personal data.
    const fieldCount = Object.keys(data).length;
    const inputBytes = new TextEncoder().encode(JSON.stringify(data)).byteLength;
    const rows = await sql`INSERT INTO demo.receipts (id, flow, field_count, input_bytes)
      VALUES (${receipt}, ${flow}, ${fieldCount}, ${inputBytes}) RETURNING id`;
    if (rows.length !== 1 || rows[0].id !== receipt) throw new Error("Receipt was not confirmed by storage");
    return receipt;
  }
  const directory = path.join(process.cwd(), "scripts", "shots", "demo-inbox");
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, `${receipt}.json`), JSON.stringify({
    receipt, flow, capturedAt: new Date().toISOString(), emailSent: false, data,
  }, null, 2), { flag: "wx", mode: 0o600 });
  return receipt;
}
