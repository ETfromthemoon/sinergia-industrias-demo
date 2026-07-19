"use client";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { SectionLabel } from "@/components/ui/section-label";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { useFormSubmit, FormSubmitFeedback } from "@/components/ui/form-submit";

const SERVICES_OPTIONS = [
  "Ley REP",
  "Levantamiento de procesos",
  "Implementación ERP Odoo",
  "Levantamiento de datos",
  "Otro",
];

const CONTACT_ROWS = [
  {
    iconName: "phone" as const,
    code: "EML",
    label: "info@sinergiaindustrias.cl",
    href: "mailto:info@sinergiaindustrias.cl",
  },
  {
    iconName: "phone" as const,
    code: "TEL",
    label: "+56 9 9458 4617",
    href: "tel:+56994584617",
  },
  {
    iconName: "map-pin" as const,
    code: "LOC",
    label: "Calle Limache 3421, of. 724 · Viña del Mar",
    href: null,
  },
];

const inputCls =
  "w-full border border-steel-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-steel-400 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors";
const inputErrorCls =
  "border-red-400 focus:border-red-500 focus:ring-red-500";

type FieldErrors = {
  nombre?: string;
  empresa?: string;
  email?: string;
  servicio?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Content() {
  const { status, message, handleSubmit } = useFormSubmit();
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(formData: FormData): FieldErrors {
    const nextErrors: FieldErrors = {};

    const honey = String(formData.get("_honey") ?? "");
    if (honey.trim() !== "") {
      // Honeypot filled by a bot — treat the whole submission as invalid.
      nextErrors.nombre = "Envío inválido.";
      return nextErrors;
    }

    const nombre = String(formData.get("nombre") ?? "").trim();
    if (!nombre) nextErrors.nombre = "Ingresa tu nombre.";

    const empresa = String(formData.get("empresa") ?? "").trim();
    if (!empresa) nextErrors.empresa = "Ingresa tu empresa.";

    const email = String(formData.get("email") ?? "").trim();
    if (!email) nextErrors.email = "Ingresa tu correo.";
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Ingresa un correo válido.";

    const servicio = String(formData.get("servicio") ?? "").trim();
    if (!servicio) nextErrors.servicio = "Selecciona un área de interés.";

    return nextErrors;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      e.preventDefault();
      return;
    }

    handleSubmit(e);
  }

  return (
    <main>
      <PageHero
        variant="light"
        eyebrow="Contacto"
        headline="¿Por dónde empezamos?"
        headlineAccent=""
        subhead="Cuéntanos qué necesita tu empresa. Una conversación de 30 minutos basta para saber si podemos ayudarte y cómo."
        ctaLabel="Escríbenos por WhatsApp"
        ctaHref="https://wa.me/56994584617?text=Hola,%20quiero%20conversar%20sobre%20un%20proyecto"
        secondaryCtaLabel="Volver al inicio"
        secondaryCtaHref="/"
      />

      {/* Contact form section */}
      <MotionConfig reducedMotion="user">
        <section className="relative overflow-hidden border-t border-steel-200 bg-background py-24 px-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 blueprint-grid -z-10 opacity-60"
          />

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              {/* LEFT — contact info */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <SectionLabel index="01" className="mb-6">
                  Contacto directo
                </SectionLabel>
                <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-5xl">
                  Tres formas de contactarnos
                </h2>
                <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
                  Elige el canal que más te acomode. Respondemos en menos de 24 horas hábiles, y si
                  tu consulta es urgente, WhatsApp es la vía más rápida.
                </p>

                <div className="mt-10">
                  <Link
                    href="https://wa.me/56994584617?text=Hola,%20quiero%20conversar%20sobre%20un%20proyecto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep"
                  >
                    Escríbenos por WhatsApp
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

                <ul className="mt-12 divide-y divide-steel-200 border-y border-steel-200">
                  {CONTACT_ROWS.map((row) => {
                    const content = (
                      <>
                        <span className="mono-label w-10 shrink-0 text-steel-400">{row.code}</span>
                        <AnimatedIcon name={row.iconName} size={16} tone="navy" className="shrink-0" />
                        <span className="text-sm text-foreground">{row.label}</span>
                      </>
                    );
                    return (
                      <li key={row.code}>
                        {row.href ? (
                          <a
                            href={row.href}
                            className="flex items-center gap-4 py-4 transition-colors hover:text-navy"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="flex items-center gap-4 py-4">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>

              {/* RIGHT — framed form */}
              <motion.div
                className="relative border border-steel-200 bg-white shadow-elevated"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <CornerTicks className="text-navy" size={12} />
                <div className="flex items-center justify-between border-b border-steel-200 px-6 py-3">
                  <span className="mono-label text-navy">FORM.CONTACTO</span>
                  <span className="mono-label text-cyan-deep">* REQUERIDO</span>
                </div>
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="space-y-5 p-6 sm:p-8"
                >
                  <input type="hidden" name="_subject" value="Nuevo contacto web — Sinergia Industrias" />
                  <input type="hidden" name="_captcha" value="true" />
                  {/* Honeypot — hidden from real users, catches basic bots */}
                  <input
                    type="text"
                    name="_honey"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="mono-label mb-2 block text-muted-foreground"
                      >
                        Nombre *
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className={`${inputCls} ${errors.nombre ? inputErrorCls : ""}`}
                        aria-invalid={errors.nombre ? "true" : "false"}
                        aria-describedby={errors.nombre ? "nombre-error" : undefined}
                      />
                      {errors.nombre && (
                        <p id="nombre-error" role="alert" className="mt-1.5 text-xs text-red-600">
                          {errors.nombre}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="empresa"
                        className="mono-label mb-2 block text-muted-foreground"
                      >
                        Empresa *
                      </label>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        required
                        placeholder="Tu empresa"
                        className={`${inputCls} ${errors.empresa ? inputErrorCls : ""}`}
                        aria-invalid={errors.empresa ? "true" : "false"}
                        aria-describedby={errors.empresa ? "empresa-error" : undefined}
                      />
                      {errors.empresa && (
                        <p id="empresa-error" role="alert" className="mt-1.5 text-xs text-red-600">
                          {errors.empresa}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mono-label mb-2 block text-muted-foreground"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="correo@empresa.cl"
                      className={`${inputCls} ${errors.email ? inputErrorCls : ""}`}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="servicio"
                      className="mono-label mb-2 block text-muted-foreground"
                    >
                      Área de interés *
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      defaultValue=""
                      className={`${inputCls} appearance-none ${errors.servicio ? inputErrorCls : ""}`}
                      aria-invalid={errors.servicio ? "true" : "false"}
                      aria-describedby={errors.servicio ? "servicio-error" : undefined}
                    >
                      <option value="" disabled>
                        Selecciona un área
                      </option>
                      {SERVICES_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.servicio && (
                      <p id="servicio-error" role="alert" className="mt-1.5 text-xs text-red-600">
                        {errors.servicio}
                      </p>
                    )}
                  </div>
                  {status !== "success" && (
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group flex w-full items-center justify-center gap-2 bg-navy py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {status === "loading" ? "Enviando..." : "Enviar mensaje"}
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  )}
                  <FormSubmitFeedback status={status} message={message} />
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </MotionConfig>

      {/* Ubicación section */}
      <MotionConfig reducedMotion="user">
        <section className="border-y border-steel-200 bg-steel-50 py-24 px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionLabel index="02" className="mb-6">
                Ubicación
              </SectionLabel>
              <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-5xl">
                Nuestra oficina
              </h2>
            </motion.div>

            <motion.div
              className="relative mt-10 border border-steel-200 bg-white"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <CornerTicks className="text-navy" size={12} />
              <div className="p-6 sm:p-8">
                <span className="mono-label text-steel-400">UBICACIÓN</span>
                <p className="mt-3 text-base leading-relaxed text-foreground">
                  Calle Limache 3421, Reitz II oficina 724, Viña del Mar, Chile
                </p>
                <a
                  href="https://maps.google.com/?q=Calle+Limache+3421+Viña+del+Mar+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm text-navy transition-colors hover:text-navy-dark"
                >
                  Ver en Google Maps
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
              <div className="border-t border-steel-200">
                <iframe
                  title="Oficina Sinergia Industrias"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.0386000000003!2d-71.55!3d-33.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle+Limache+3421%2C+Vi%C3%B1a+del+Mar!5e0!3m2!1ses!2scl!4v1699999999999"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </MotionConfig>
    </main>
  );
}
