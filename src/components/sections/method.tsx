"use client";
import { motion, MotionConfig } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";
import { hairline, EASE_OUT } from "@/lib/motion";

type Step = {
  number: string;
  title: string;
  body: string;
  duration: string;
  accent: boolean;
};

const STEPS: readonly Step[] = [
  {
    number: "01",
    title: "Diagnóstico",
    body: "Revisamos tu operación actual, tus sistemas y tus obligaciones legales. Nada de propuestas genéricas antes de entender qué tiene tu empresa.",
    duration: "1–2 SEM",
    accent: false,
  },
  {
    number: "02",
    title: "Plan técnico",
    body: "Diseñamos un plan específico: qué hacer, en qué orden y con qué recursos. Lo que va a costar y lo que vas a ganar.",
    duration: "1 SEM",
    accent: false,
  },
  {
    number: "03",
    title: "Implementación",
    body: "Ejecutamos con nuestro equipo. Configuramos Odoo, hacemos el levantamiento REP o entregamos el plan de mejora de procesos.",
    duration: "4–12 SEM",
    accent: true,
  },
  {
    number: "04",
    title: "Seguimiento",
    body: "No desaparecemos al cerrar el proyecto. Quedamos disponibles para ajustes, dudas y la siguiente etapa.",
    duration: "ONGOING",
    accent: false,
  },
];

export function MethodSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="metodo" className="relative overflow-hidden border-y border-steel-200 bg-steel-50 py-24 px-4">
        <div className="relative mx-auto max-w-6xl">
          {/* Header — editorial, intentionally asymmetric, breaks the panel convention */}
          <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel index="03" className="mb-5">
                Metodología
              </SectionLabel>
              {/* System-break moment: massive type with no frame/panel wrapping it */}
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-[clamp(2.4rem,5vw,3.8rem)]">
                Sin promesas vagas.
                <br />
                <span className="text-navy">Con un proceso claro.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-2 sm:items-end sm:text-right">
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Un equipo de ingenieros con trabajo de campo real — no consultores de escritorio.
              </p>
              <span className="mono-label text-steel-400">4 FASES · ENTREGA GARANTIZADA</span>
            </div>
          </div>

          {/* Stepper */}
          <div className="relative">

            {/* Connecting beam — base track (visible from sm: 2-col up) */}
            <motion.span
              aria-hidden
              className="absolute left-0 top-[1.375rem] hidden h-px w-full origin-left bg-steel-200 sm:block"
              variants={hairline}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            {/* Beam — first 75% fills with cyan (diagn+plan+exec) */}
            <motion.span
              aria-hidden
              className="absolute left-0 top-[1.375rem] hidden h-px w-3/4 origin-left bg-cyan sm:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1.1, ease: EASE_OUT }}
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
                  {/* Step header: duration */}
                  <div className="mb-3 flex items-center justify-end">
                    <span className="mono-label tabular text-steel-400">{step.duration}</span>
                  </div>

                  {/* Node marker on the beam — relative z-10 keeps it opaque above the connector line at sm:/lg: */}
                  <div
                    className="relative z-10 mb-5 flex items-center justify-center size-11 border bg-white shadow-sm transition-shadow duration-300"
                    style={{
                      borderColor: step.accent
                        ? "oklch(0.78 0.16 67 / 0.55)"
                        : "oklch(0.28 0.12 255 / 0.22)",
                    }}
                  >
                    <span
                      className="font-mono text-sm font-bold tabular"
                      style={{ color: step.accent ? "var(--signal)" : "var(--navy)" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display mb-2.5 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
