import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "node:net";

if (process.env.VERCEL) throw new Error("The local demo runner cannot run on Vercel");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const next = path.join(root, "node_modules", "next", "dist", "bin", "next");
const env = { ...process.env, SINERGIA_DEMO_MODE: "true", NEXT_PUBLIC_DEMO_MODE: "true" };

// Avoid rebuilding .next underneath an existing candidate that is being shown.
await new Promise((resolve, reject) => {
  const probe = createServer();
  probe.once("error", () => reject(new Error("Port3213 is in use. Open the running demo or stop its server before rebuilding.")));
  probe.listen(3213, "127.0.0.1", () => probe.close(resolve));
});

function run(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [next, ...args], { cwd: root, env, stdio: "inherit", windowsHide: true });
    child.on("error", reject);
    child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(`Demo process exited: ${code}`)));
  });
}

await run(["build", "--webpack"]);
console.log("Local demo: http://127.0.0.1:3213 — form receipts stay local; no emails are sent.");
await run(["start", "-p", "3213", "-H", "127.0.0.1"]);
