"use client";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SectionLabel } from "@/components/ui/section-label";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { OdooLogo } from "@/components/ui/odoo-logo";
import { motion, MotionConfig } from "motion/react";

const STEPS = [
  {
    number: "01",
    code: "DIAG",
    title: "Diagnóstico",
    body: "Revisamos tu operación actual, tus sistemas y tus obligaciones legales.",
  },
  {
    number: "02",
    code: "PLAN",
    title: "Plan técnico",
    body: "Diseñamos un plan específico para tu caso.",
  },
  {
    number: "03",
    code: "EXEC",
    title: "Implementación",
    body: "Ejecutamos el proyecto con nuestro equipo.",
  },
  {
    number: "04",
    code: "SUPP",
    title: "Seguimiento",
    body: "No desaparecemos cuando termina el proyecto.",
  },
];

export default function NosotrosContent() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────── */}
      <PageHero
        eyebrow="Ingeniería de procesos"
        headline="Transformamos empresas,"
        headlineAccent="creando sinergia"
        subhead="Somos apasionados por la tecnología y la transformación organizacional. Llevamos a nuestros clientes hacia nuevos horizontes que no imaginaban antes."
        badge="Ready Partner Odoo"
        artifact="team"
        ctaLabel="Conversemos tu proyecto"
        ctaHref="/contacto"
        secondaryCtaLabel="Casos de éxito"
        secondaryCtaHref="/casos-de-exito"
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

            <motion.div
              className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24, duration: 0.5 }}
            >
              <div className="border border-steel-200 bg-steel-50 p-4">
                <span className="mono-label text-cyan-deep">Sinergia Consultores</span>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  Estrategia, procesos y transformación digital.
                </p>
              </div>
              <div className="border-2 border-navy bg-white p-4">
                <span className="mono-label text-navy">Sinergia Industrias</span>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  Soluciones tecnológicas aplicadas y desarrollo industrial.
                </p>
              </div>
              <div className="border border-steel-200 bg-steel-50 p-4">
                <span className="mono-label text-cyan-deep">Sinergia Electrónica</span>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  Venta de productos tecnológicos.
                </p>
              </div>
            </motion.div>
            <p className="mt-3 text-xs text-muted-foreground">
              Las tres unidades forman Grupo Sinergia. Esta página pertenece a Sinergia Industrias.
            </p>
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
                Resolver problemáticas empresariales y sociales mediante tecnología, procesos y conocimiento — esa es la razón de ser de Sinergia. Trabajamos estrechamente con cada cliente, compartiendo experiencia real, para construir soluciones que funcionan en el mundo real.
              </motion.p>

              <motion.div
                className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="border border-steel-200 bg-white p-4">
                  <span className="mono-label text-steel-500">Misión</span>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Atender de forma eficiente y eficaz a organizaciones que demandan soluciones innovadoras, utilizando tecnología y metodologías de procesos ligadas a la Cuarta Revolución Industrial.
                  </p>
                </div>
                <div className="border border-steel-200 bg-white p-4">
                  <span className="mono-label text-steel-500">Visión</span>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Ser líderes en transformación digital y desarrollo sustentable en Chile y el mundo, posicionándonos como referentes de la Industria 4.0.
                  </p>
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
                  <span className="mono-label text-steel-500">READY PARTNER OFICIAL</span>
                  <h3 className="font-display mt-2 text-2xl font-bold text-foreground">
                    Odoo
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
                  Somos partner certificado de Odoo en Chile. Esto nos permite implementar el ERP con acceso directo al ecosistema oficial.
                </p>

                <span className="inline-flex items-center gap-2 border border-cyan-deep/40 bg-cyan-deep/10 px-3 py-1.5 mono-label text-cyan-deep">
                  <OdooLogo size={14} />
                  Ready Partner Oficial Odoo
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </MotionConfig>

      {/* ── Valores ──────────────────────────────── */}
      <MotionConfig reducedMotion="user">
        <section className="bg-background py-24 px-4">
          <div className="mx-auto max-w-6xl">
            <SectionLabel index="03" className="mb-6">
              Nuestros valores
            </SectionLabel>

            <motion.h2
              className="font-display max-w-lg text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              Lo que no negociamos
            </motion.h2>

            <motion.div
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {[
                { code: "01", label: "Innovación aplicada" },
                { code: "02", label: "Eficiencia" },
                { code: "03", label: "Conocimiento compartido" },
                { code: "04", label: "Sustentabilidad" },
                { code: "05", label: "Compromiso con el impacto" },
              ].map((v) => (
                <div key={v.code} className="border border-steel-200 bg-white p-5">
                  <span className="mono-label text-cyan-deep">{v.code}</span>
                  <p className="mt-2 font-display text-sm font-semibold text-foreground">
                    {v.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </MotionConfig>

      {/* ── Metodología ───────────────────────────── */}
      <ProcessSteps
        variant="dark"
        eyebrow="Cómo trabajamos"
        index="04"
        title="Sin promesas vagas. Con un proceso claro."
        steps={STEPS}
      />

      <MotionConfig reducedMotion="user">
        <section className="relative overflow-hidden bg-navy-dark px-4 pb-24">
          <div className="relative mx-auto max-w-6xl">
            <motion.p
              className="max-w-2xl text-base leading-relaxed text-steel-400"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Somos un equipo de ingenieros con trabajo de campo real — no consultores de escritorio. Entendemos cómo funcionan las operaciones porque hemos trabajado dentro de ellas.
            </motion.p>
          </div>

          {/* Bottom hairline */}
          <div
            aria-hidden
            className="absolute bottom-0 inset-x-0 h-px"
            style={{ background: "linear-gradient(to right, transparent 0%, oklch(0.746 0.1235 224 / 0.25) 50%, transparent 100%)" }}
          />
        </section>
      </MotionConfig>

      {/* ── Odoo Partner ──────────────────────────── */}
      <MotionConfig reducedMotion="user">
        <section className="bg-background py-24 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <SectionLabel index="05" className="mb-6">
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

                <span className="inline-flex items-center gap-2 border border-cyan-deep/40 bg-cyan-deep/10 px-3 py-1.5 mono-label text-cyan-deep">
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
        title="Construimos modelos para el mundo real."
        subhead="Una conversación de 30 minutos es suficiente para saber si podemos ayudarte y cómo."
        ctaLabel="Conversemos tu proyecto"
        ctaHref="/contacto"
        index="06"
      />
    </main>
  );
}
