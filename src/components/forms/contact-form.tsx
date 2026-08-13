"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { SERVICES, SITE } from "@/content/site";
import Link from "next/link";

type FormStatus = {
  state: "idle" | "loading" | "success" | "error";
  message: string;
};

const fieldClass =
  "w-full border-b border-steel-300 bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-steel-400 focus:border-navy focus:outline-none focus-visible:border-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle", message: "" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus({ state: "loading", message: "Enviando..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
        }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "No pudimos enviar el mensaje.");
      }

      form.reset();
      setStatus({ state: "success", message: result.message || "Mensaje enviado." });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : `No pudimos enviar el mensaje. Escríbenos a ${SITE.email}.`,
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold text-foreground">Nombre</span>
          <input className={fieldClass} name="name" required placeholder="Tu nombre" autoComplete="name" />
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-foreground">Empresa</span>
          <input className={fieldClass} name="company" required placeholder="Nombre de la empresa" autoComplete="organization" />
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold text-foreground">Email corporativo</span>
          <input className={fieldClass} name="email" type="email" required placeholder="nombre@empresa.cl" autoComplete="email" />
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-foreground">Área de interés</span>
          <select className={fieldClass} name="service" defaultValue={SERVICES[0].shortTitle}>
            {SERVICES.map((service) => (
              <option key={service.href}>{service.shortTitle}</option>
            ))}
            <option>Otro desafío</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-xs font-semibold text-foreground">¿Qué está pasando hoy?</span>
        <textarea
          className={`${fieldClass} min-h-28 resize-y`}
          name="message"
          required
          placeholder="Cuéntanos brevemente el desafío, el plazo y qué resultado esperas."
        />
      </label>
      <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 size-4 accent-[var(--petrol)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        />
        <span>
          Autorizo a Sinergia Industrias a usar estos datos exclusivamente para responder
          esta solicitud, de acuerdo con la{" "}
          <Link href="/privacidad" className="text-navy underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan">
            política de privacidad
          </Link>
          .
        </span>
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status.state === "loading"}
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan disabled:cursor-wait disabled:opacity-65"
        >
          {status.state === "loading" ? <LoaderCircle className="size-4 animate-spin" /> : null}
          Enviar solicitud
          {status.state !== "loading" ? <ArrowRight className="size-4" /> : null}
        </button>
        <p
          aria-live="polite"
          className={`text-xs ${
            status.state === "error"
              ? "text-destructive"
              : status.state === "success"
                ? "text-cyan-deep"
                : "text-muted-foreground"
          }`}
        >
          {status.message || "Respondemos normalmente dentro de un día hábil."}
        </p>
      </div>
    </form>
  );
}
