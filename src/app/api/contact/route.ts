import { NextResponse } from "next/server";
import { SITE } from "@/content/site";
import { cloudDemoEnabled, demoEnabled, demoRequested, isDemoRequest, saveDemoReceipt } from "@/lib/demo-inbox";
import { FormBodyError, readFormBody } from "@/lib/form-body";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await readFormBody(request);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid payload");
    body = parsed as Record<string, unknown>;
  } catch (error) {
    return NextResponse.json({ message: "Revisa los datos del formulario antes de enviar." }, { status: error instanceof FormBodyError ? error.status : 400 });
  }
  const text = (value: unknown) => typeof value === "string" ? value.trim() : "";
  const name = text(body.name);
  const company = text(body.company);
  const email = text(body.email);
  const message = text(body.message);
  const service = text(body.service);

  if (demoRequested() && !isDemoRequest(request)) {
    return NextResponse.json({ message: "La demo sólo acepta formularios de su dirección habilitada." }, { status: 403 });
  }

  if (!name || !company || !email || !message || body.consent !== true || !EMAIL_PATTERN.test(email) ||
    name.length > 100 || company.length > 200 || email.length > 254 || message.length > 4000 || service.length > 120) {
    return NextResponse.json(
      { message: "Revisa los campos requeridos antes de enviar." },
      { status: 400 },
    );
  }

  if (demoEnabled()) {
    try {
      const receipt = await saveDemoReceipt("contact", { name, company, email, message, service });
      return NextResponse.json({ receipt, message: cloudDemoEnabled()
        ? `Demo online: comprobante guardado (${receipt}). No se guardaron datos personales ni se envió correo.`
        : `Demo: solicitud guardada localmente (${receipt}). No se envió correo.` });
    } catch {
      return NextResponse.json({ message: "No se pudo guardar el comprobante de demo. Intenta nuevamente." }, { status: 503 });
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json(
      {
        message:
          "El formulario está temporalmente fuera de servicio. Escríbenos por WhatsApp o email.",
      },
      { status: 503 },
    );
  }

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [SITE.email],
        reply_to: email,
        subject: `Nuevo contacto web: ${company}`,
        text: [
          `Nombre: ${name}`,
          `Empresa: ${company}`,
          `Email: ${email}`,
          `Área: ${service || "No indicada"}`,
          "",
          message,
        ].join("\n"),
      }),
    });
  } catch {
    return NextResponse.json(
      { message: "No pudimos conectar con el servicio de correo. Intenta nuevamente o usa WhatsApp." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { message: "No pudimos enviar el mensaje. Intenta nuevamente o usa WhatsApp." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Mensaje enviado. Te responderemos dentro de un día hábil.",
  });
}
