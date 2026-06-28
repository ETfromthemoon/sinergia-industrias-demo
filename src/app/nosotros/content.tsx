"use client";

import { VideoHero } from "@/components/layout/video-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionLabel } from "@/components/ui/section-label";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { OdooLogo } from "@/components/ui/odoo-logo";
import { motion, MotionConfig } from "motion/react";
import { Target, Eye, Cpu } from "lucide-react";

const STEPS = [
  {
    number: "01",
    code: "DIAG",
    title: "Diagnóstico",
    body: "Revisamos tu operación actual, tus sistemas y tus obligaciones legales.",
    output: "INFORME.DIAGNÓSTICO",
  },
  {
    number: "02",
    code: "PLAN",
    title: "Plan técnico",
    body: "Diseñamos un plan específico para tu caso.",
    output: "DOC.TÉCNICO",
  },
  {
    number: "03",
    code: "EXEC",
    title: "Implementación",
    body: "Ejecutamos el proyecto con nuestro equipo.",
    output: "SISTEMA.IMPLEMENTADO",
  },
  {
    number: "04",
    code: "SUPP",
    title: "Seguimiento",
    body: "No desaparecemos cuando termina el proyecto.",
    output: "SOPORTE.CONTINUO",
  },
];

export default function NosotrosContent() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────── */}
      <VideoHero
        eyebrow="Ingeniería de procesos"
        headline="Transformamos empresas,"
        headlineAccent="creando sinergia"
        subhead="Somos apasionados por la tecnología y la transformación organizacional. Llevamos a nuestros clientes hacia nuevos horizontes que no imaginaban antes. Trabajamos basándonos en medidas tangibles y demostrables, para sentar bases de innovación constante."
        badge="Ready Partner Odoo"
        ctaLabel="Conversemos tu proyecto"
        ctaHref="/contacto"
        secondaryCtaLabel="Casos de éxito"
        secondaryCtaHref="/casos-de-exito"
        videoId="Tody2AVL6ys"
      />

      {/* ── Historia y visión ────────────────────── */}
      <MotionConfig reducedMotion="user">
        <section className="bg-background py-24 px-4">
          <div className="mx-auto max-w-3xl">
            <SectionLabel index="01" className="mb-6">
              Nuestra historia
            </SectionLabel>

            <motion.h2
              className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              Historia y visión
            </motion.h2>

            <motion.p
              className="mt-8 text-base leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Somos personas comunes, criados en un entorno donde la tecnología era un concepto ajeno e incomprendido. A lo largo de nuestras carreras nos fuimos dando cuenta del potencial transformador que existe detrás de la información y donde se hacen las diferencias entre emprendimientos y empresas de gran tamaño. Es por esto que decidimos ser agentes de cambio, acercar el conocimiento y la tecnología de información a todos los negocios que lo requieran, sin importar su tamaño.
            </motion.p>

            <motion.p
              className="mt-5 text-base leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.5 }}
            >
              Vamos e iremos siempre por la innovación, el conocimiento y el autoaprendizaje en todo ámbito. Creamos y crearemos Sinergia en conjunto.
            </motion.p>
          </div>
        </section>
      </MotionConfig>

      {/* ── Propósito ────────────────────────────── */}
      <MotionConfig reducedMotion="user">
        <section className="border-y border-steel-200 bg-steel-50 py-24 px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
            {/* LEFT — copy */}
            <div>
              <SectionLabel index="02" className="mb-6">
                Nuestro propósito
              </SectionLabel>

              <motion.h2
                className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                Nuestro propósito
              </motion.h2>

              <motion.p
                className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12, duration: 0.5 }}
              >
                Nuestro propósito es ser tu socio confiable en este viaje hacia la sostenibilidad. Trabajaremos estrechamente contigo, compartiendo nuestro conocimiento y experiencia, para que juntos podamos construir un futuro más sostenible y responsable.
              </motion.p>

              <motion.div
                className="mt-8 grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex flex-col items-center gap-2 rounded-sm border border-steel-200 bg-white p-4">
                  <Target className="size-5 text-navy" />
                  <span className="mono-label text-steel-600">Enfoque</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-sm border border-steel-200 bg-white p-4">
                  <Eye className="size-5 text-navy" />
                  <span className="mono-label text-steel-600">Visión</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-sm border border-steel-200 bg-white p-4">
                  <Cpu className="size-5 text-navy" />
                  <span className="mono-label text-steel-600">Tecnología</span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — bordered panel */}
            <motion.div
              className="relative border border-steel-200 bg-white p-10"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <CornerTicks className="text-navy" size={12} />

              <div className="flex flex-col items-center text-center gap-6">
                <div className="inline-flex border border-navy/20 bg-navy/5 p-4">
                  <OdooLogo size={28} />
                </div>

                <div>
                  <span className="mono-label text-steel-400">READY PARTNER OFICIAL</span>
                  <h3 className="font-display mt-2 text-2xl font-bold text-foreground">
                    Odoo
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
                  Somos partner certificado de Odoo en Chile. Esto nos permite implementar el ERP con acceso directo al ecosistema oficial.
                </p>

                <span className="inline-flex items-center gap-2 border border-signal/40 bg-signal/10 px-3 py-1.5 mono-label text-signal">
                  <OdooLogo size={14} />
                  Ready Partner Oficial Odoo
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </MotionConfig>

      {/* ── Metodología ───────────────────────────── */}
      <MotionConfig reducedMotion="user">
        <section className="relative overflow-hidden bg-navy-dark py-24 px-4">
          <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid-dark" />
          <div aria-hidden className="grain pointer-events-none absolute inset-0" />

          {/* Large editorial number */}
          <div
            aria-hidden
            className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 leading-none opacity-[0.035]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(10rem, 22vw, 18rem)",
              color: "white",
              letterSpacing: "-0.05em",
            }}
          >
            02
          </div>

          <div className="relative mx-auto max-w-6xl">
            {/* Header */}
            <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionLabel index="02" tone="accent" className="mb-5">
                  Cómo trabajamos
                </SectionLabel>
                <motion.h2
                  className="font-display text-4xl font-bold tracking-tight text-white sm:text-[clamp(2.4rem,5vw,3.8rem)]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  Sin promesas vagas.
                  <br />
                  <span className="text-steel-400">Con un proceso claro.</span>
                </motion.h2>
              </div>
              <motion.div
                className="flex flex-col gap-2 sm:items-end sm:text-right"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12, duration: 0.5 }}
              >
                <p className="max-w-xs text-sm leading-relaxed text-steel-400">
                  Somos un equipo de ingenieros con trabajo de campo real — no consultores de escritorio.
                </p>
                <span className="mono-label text-white/30">4 FASES · ENTREGA GARANTIZADA</span>
              </motion.div>
            </div>

            {/* Stepper */}
            <div className="relative">
              {/* Connecting beam — base track */}
              <motion.span
                aria-hidden
                className="absolute left-0 top-[1.375rem] hidden h-px w-full origin-left bg-white/10 lg:block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Beam — first 75% fills with cyan */}
              <motion.span
                aria-hidden
                className="absolute left-0 top-[1.375rem] hidden h-px w-3/4 origin-left bg-cyan lg:block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ opacity: 0.45 }}
              />

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {STEPS.map((step, i) => (
                  <motion.div
                    key={step.number}
                    className="relative flex flex-col"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Step header: code */}
                    <div className="mb-3 flex items-center justify-between">
                      <span className="mono-label text-white/40">{step.code}</span>
                    </div>

                    {/* Node marker on the beam */}
                    <div
                      className="mb-5 flex items-center justify-center size-11 border bg-navy-dark shadow-sm"
                      style={{ borderColor: "oklch(1 1 0 / 0.18)" }}
                    >
                      <span className="font-mono text-sm font-bold tabular text-white">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-display mb-2.5 text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-steel-300">
                      {step.body}
                    </p>

                    {/* Output artifact */}
                    <div
                      className="mt-5 flex items-center gap-2 border-t pt-3"
                      style={{ borderColor: "oklch(1 1 0 / 0.10)" }}
                    >
                      <span className="size-1 shrink-0 rounded-full bg-cyan" />
                      <span
                        className="mono-label"
                        style={{ color: "oklch(1 1 0 / 0.45)", fontSize: "0.58rem" }}
                      >
                        {step.output}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Copy closing */}
            <motion.p
              className="mt-16 max-w-2xl text-base leading-relaxed text-steel-400"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Somos un equipo de ingenieros con trabajo de campo real — no consultores de escritorio. Entendemos cómo funcionan las operaciones porque hemos trabajado dentro de ellas.
            </motion.p>
          </div>

          {/* Bottom hairline */}
          <div
            aria-hidden
            className="absolute bottom-0 inset-x-0 h-px"
            style={{ background: "linear-gradient(to right, transparent 0%, oklch(0.68 0.14 205 / 0.25) 50%, transparent 100%)" }}
          />
        </section>
      </MotionConfig>

      {/* ── Odoo Partner ──────────────────────────── */}
      <MotionConfig reducedMotion="user">
        <section className="bg-background py-24 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <SectionLabel index="03" className="mb-6">
                Tecnología
              </SectionLabel>
            </div>

            <motion.h2
              className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              Una herramienta para conectarlas a todas
            </motion.h2>

            <motion.p
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.5 }}
            >
              Creemos en la libertad del conocimiento, por eso somos Odoo Partner, un software de código abierto en su base que nos brinda posibilidades ilimitadas. Odoo nos ha permitido llevar nuestros objetivos más allá.
            </motion.p>

            {/* Technical frame */}
            <motion.div
              className="relative mx-auto mt-12 max-w-xs border border-steel-200 bg-steel-50 p-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <CornerTicks className="text-navy" size={12} />

              <div className="flex flex-col items-center gap-4">
                <div className="inline-flex border border-navy/20 bg-navy/5 p-3">
                  <OdooLogo size={28} />
                </div>

                <span className="mono-label text-steel-600">READY PARTNER OFICIAL</span>

                <span className="font-display text-3xl font-bold text-foreground">
                  Odoo
                </span>

                <span className="inline-flex items-center gap-2 border border-signal/40 bg-signal/10 px-3 py-1.5 mono-label text-signal">
                  <OdooLogo size={14} />
                  Ready Partner Oficial Odoo
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </MotionConfig>

      {/* ── CTA ───────────────────────────────────── */}
      <CtaBand
        title="¿Trabajamos juntos?"
        subhead="Una conversación de 30 minutos es suficiente para saber si podemos ayudarte y cómo."
        ctaLabel="Conversemos tu proyecto"
        ctaHref="/contacto"
        index="04"
      />
    </main>
  );
}
