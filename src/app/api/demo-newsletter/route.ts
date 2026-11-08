import { NextResponse } from "next/server";
import { cloudDemoEnabled, demoEnabled, isDemoRequest, saveDemoReceipt } from "@/lib/demo-inbox";
import { FormBodyError, readFormBody } from "@/lib/form-body";

export async function POST(request: Request) {
  if (!demoEnabled()) return NextResponse.json({ success: false }, { status: 404 });
  if (!isDemoRequest(request)) return NextResponse.json({ success: false }, { status: 403 });
  let email: string;
  try {
    const body: unknown = await readFormBody(request);
    if (!body || typeof body !== "object" || !("email" in body) || typeof body.email !== "string") {
      throw new Error("Invalid email");
    }
    email = body.email.trim();
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Invalid email");
  } catch (error) {
    return NextResponse.json({ success: false, message: "Revisa el correo antes de continuar." }, { status: error instanceof FormBodyError ? error.status : 400 });
  }
  try {
    const receipt = await saveDemoReceipt("newsletter", { email });
    return NextResponse.json({ success: true, receipt, message: cloudDemoEnabled()
      ? `Demo online: comprobante guardado (${receipt}). No se guardó tu correo ni se enviaron mensajes.`
      : "Demo: suscripción guardada localmente. No se enviaron correos." });
  } catch {
    return NextResponse.json({ success: false, message: "No se pudo guardar el comprobante de demo. Intenta nuevamente." }, { status: 503 });
  }
}
