"use client";

import Image from "next/image";
import { ArrowDownRight, Check } from "lucide-react";
import { motion, MotionConfig } from "motion/react";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SectionLabel } from "@/components/ui/section-label";
import { OdooPartnerBadge } from "@/components/ui/odoo-partner-badge";

const STEPS = [
  {
    number: "01",
    code: "DIAG",
    title: "Diagnóstico",
    body: "Observamos la operación, los sistemas y las obligaciones antes de recomendar.",
  },
  {
    number: "02",
    code: "PLAN",
    title: "Diseño técnico",
    body: "Traducimos lo aprendido en un alcance concreto, priorizado y medible.",
  },
  {
    number: "03",
    code: "EXEC",
    title: "Implementación",
    body: "Trabajamos con los equipos responsables hasta que la solución funciona.",
  },
  {
    number: "04",
    code: "SUPP",
    title: "Acompañamiento",
    body: "Medimos, ajustamos y transferimos conocimiento para sostener el cambio.",
  },
];

const VALUES = [
  ["Innovación aplicada", "Tecnología elegida por su utilidad, no por novedad."],
  ["Conocimiento compartido", "Capacidades que permanecen dentro de la organización."],
  ["Impacto medible", "Mejoras visibles en la operación y la toma de decisiones."],
];

export default function NosotrosContent() {
  return (
    <main>
      <PageHero
        variant="dark"
        index="03"
        eyebrow="Equipo · Forma de trabajo"
        headline="Ingeniería cercana."
        headlineAccent="Criterio en terreno."
        subhead="Conectamos estrategia, procesos y tecnología para construir soluciones capaces de operar en el mundo real."
        ctaLabel="Conversemos tu proyecto"
        ctaHref="/contacto"
        secondaryCtaLabel="Casos de éxito"
        secondaryCtaHref="/casos-de-exito"
      />

      <MotionConfig reducedMotion="user">
        <section className="section-motion-surface bg-background px-4 py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionLabel index="01" className="mb-6">
                Nuestra historia
              </SectionLabel>
              <h2 className="text-4xl leading-[1.02] text-navy sm:text-6xl">
                La tecnología solo importa cuando{" "}
                <em className="font-normal text-cyan-deep">resuelve algo real.</em>
              </h2>
              <p className="mt-7 text-base leading-relaxed text-muted-foreground">
                Sinergia nació al reconocer una brecha: demasiadas organizaciones tienen
                acceso a herramientas, pero no siempre a la estructura necesaria para
                convertirlas en mejores decisiones y operaciones más sólidas.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Por eso articulamos personas, procesos y tecnología en un mismo enfoque.
                Analizamos antes de implementar y acompañamos hasta que el cambio se vuelve
                parte del trabajo cotidiano.
              </p>
            </motion.div>

            <motion.figure
              initial={{ opacity: 0, y: 26, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden bg-navy"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src="/media/whiteboard-process.jpg"
                  alt="Equipo trabajando en el diseño de procesos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                  <p className="mono-label text-cyan">Nuestro principio</p>
                  <p className="mt-3 max-w-lg font-display text-2xl leading-snug sm:text-3xl">
                    Construimos modelos para el mundo real.
                  </p>
                </div>
              </div>
            </motion.figure>
          </div>
        </section>
      </MotionConfig>

      <MotionConfig reducedMotion="user">
        <section className="border-y border-steel-200 bg-steel-50 px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <SectionLabel index="02" className="mb-6">
                  ADN de marca
                </SectionLabel>
                <h2 className="text-4xl text-navy sm:text-5xl">Procesos inteligentes. Impacto real.</h2>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:justify-self-end">
                Nuestro propósito es resolver problemáticas empresariales y sociales mediante
                tecnología, procesos y conocimiento. Actuamos como partner estratégico, no
                como un proveedor que desaparece al entregar.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
              className="mt-12 grid gap-px overflow-hidden border border-steel-200 bg-steel-200 md:grid-cols-3"
            >
              {VALUES.map(([title, body], index) => (
                <motion.article
                  key={title}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                  }}
                  className="group bg-white p-7 transition-colors hover:bg-navy hover:text-white"
                >
                  <span className="font-mono text-[0.62rem] text-cyan-deep transition-colors group-hover:text-cyan">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 font-sans text-lg font-bold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/62">
                    {body}
                  </p>
                  <ArrowDownRight className="mt-8 size-5 text-steel-300 transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-cyan" />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </MotionConfig>

      <ProcessSteps
        variant="dark"
        eyebrow="Cómo trabajamos"
        index="03"
        title="Sin promesas vagas. Con un proceso claro."
        steps={STEPS}
      />

      <MotionConfig reducedMotion="user">
        <section className="relative overflow-hidden bg-navy-dark px-4 pb-24 text-white sm:pb-32">
          <div aria-hidden className="page-orbits opacity-60">
            <span className="page-orbit" />
            <span className="page-orbit" />
            <span className="page-orbit" />
          </div>
          <div className="relative mx-auto grid max-w-6xl gap-10 border border-white/12 bg-white/[0.035] p-7 backdrop-blur-sm sm:p-10 lg:grid-cols-[0.72fr_1.28fr] lg:p-14">
            <div>
              <p className="mono-label text-cyan">Criterio de terreno</p>
              <p className="mt-5 font-mono text-xs leading-relaxed text-white/70">
                OBSERVAR / ENTENDER / DISEÑAR / TRANSFERIR
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
            >
              <blockquote className="font-display text-3xl leading-tight text-white sm:text-5xl">
                “Somos ingenieros con experiencia de campo. Diseñamos con quienes
                sostienen la operación todos los días.”
              </blockquote>
              <div className="mt-9 grid gap-3 text-sm text-white/75 sm:grid-cols-3">
                {["Escucha directa", "Evidencia operacional", "Transferencia al equipo"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2 border-t border-white/12 pt-3">
                      <Check className="size-3.5 text-cyan" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </MotionConfig>

      <MotionConfig reducedMotion="user">
        <section className="section-motion-surface bg-background px-4 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="mx-auto grid max-w-5xl gap-9 border border-steel-200 bg-white p-7 shadow-elevated sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center lg:p-14"
          >
            <div className="flex justify-center border-b border-steel-200 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
              <OdooPartnerBadge className="shadow-sm" />
            </div>
            <div>
              <p className="mono-label text-cyan-deep">Ecosistema tecnológico</p>
              <h2 className="mt-4 text-3xl text-navy sm:text-4xl">Una certificación, un propósito.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                El acceso al ecosistema oficial fortalece nuestra metodología, soporte y
                capacidad de implementar soluciones escalables sin perder el foco en los
                procesos de cada organización.
              </p>
            </div>
          </motion.div>
        </section>
      </MotionConfig>

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
