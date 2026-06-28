"use client";
import { PageHero } from "@/components/layout/page-hero";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { Magnetic } from "@/components/ui/magnetic";
import { SectionLabel } from "@/components/ui/section-label";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
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
    icon: Mail,
    code: "EML",
    label: "info@sinergiaindustrias.cl",
    href: "mailto:info@sinergiaindustrias.cl",
  },
  {
    icon: Phone,
    code: "TEL",
    label: "+56 9 9458 4617",
    href: "tel:+56994584617",
  },
  {
    icon: MapPin,
    code: "LOC",
    label: "Calle Limache 3421, of. 724 · Viña del Mar",
    href: null,
  },
];

const inputCls =
  "w-full border border-steel-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-steel-400 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors";

export default function Content() {
  const { status, message, handleSubmit } = useFormSubmit();

  return (
    <main>
      <PageHero
        variant="light"
        index="04"
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
                  <Magnetic>
                    <Link
                      href="https://wa.me/56994584617?text=Hola,%20quiero%20conversar%20sobre%20un%20proyecto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-dark"
                    >
                      Escríbenos por WhatsApp
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </Magnetic>
                </div>

                <ul className="mt-12 divide-y divide-steel-200 border-y border-steel-200">
                  {CONTACT_ROWS.map((row) => {
                    const Icon = row.icon;
                    const content = (
                      <>
                        <span className="mono-label w-10 shrink-0 text-steel-400">{row.code}</span>
                        <Icon className="size-4 shrink-0 text-navy" />
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
                  onSubmit={handleSubmit}
                  className="space-y-5 p-6 sm:p-8"
                >
                  <input type="hidden" name="_subject" value="Nuevo contacto web — Sinergia Industrias" />
                  <input type="hidden" name="_captcha" value="false" />
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
                        className={inputCls}
                      />
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
                        className={inputCls}
                      />
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
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="servicio"
                      className="mono-label mb-2 block text-muted-foreground"
                    >
                      Área de interés
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      className={`${inputCls} appearance-none`}
                    >
                      {SERVICES_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  {status !== "success" && (
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group flex w-full items-center justify-center gap-2 bg-navy py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-dark disabled:opacity-60 disabled:cursor-not-allowed"
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
