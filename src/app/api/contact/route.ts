import { NextResponse } from "next/server";
import { SITE } from "@/content/site";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  service?: string;
  message?: string;
  consent?: boolean;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const name = body.name?.trim();
  const company = body.company?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !company || !email || !message || !body.consent || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { message: "Revisa los campos requeridos antes de enviar." },
      { status: 400 },
    );
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

  const response = await fetch("https://api.resend.com/emails", {
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
        `Área: ${body.service || "No indicada"}`,
        "",
        message,
      ].join("\n"),
    }),
  });

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
