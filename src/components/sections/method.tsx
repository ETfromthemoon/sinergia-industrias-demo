"use client";
import { motion, MotionConfig } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";

type Step = {
  number: string;
  code: string;
  title: string;
  body: string;
  output: string;
  duration: string;
  accent: boolean;
};

const STEPS: readonly Step[] = [
  {
    number: "01",
    code: "DIAG",
    title: "Diagnóstico",
    body: "Revisamos tu operación actual, tus sistemas y tus obligaciones legales. Nada de propuestas genéricas antes de entender qué tiene tu empresa.",
    output: "INFORME.DIAGNÓSTICO",
    duration: "1–2 SEM",
    accent: false,
  },
  {
    number: "02",
    code: "PLAN",
    title: "Plan técnico",
    body: "Diseñamos un plan específico: qué hacer, en qué orden y con qué recursos. Lo que va a costar y lo que vas a ganar.",
    output: "DOC.TÉCNICO + CRONOGRAMA",
    duration: "1 SEM",
    accent: false,
  },
  {
    number: "03",
    code: "EXEC",
    title: "Implementación",
    body: "Ejecutamos con nuestro equipo. Configuramos Odoo, hacemos el levantamiento REP o entregamos el plan de mejora de procesos.",
    output: "SISTEMA OPERATIVO",
    duration: "4–12 SEM",
    accent: true,
  },
  {
    number: "04",
    code: "SUPP",
    title: "Seguimiento",
    body: "No desaparecemos al cerrar el proyecto. Quedamos disponibles para ajustes, dudas y la siguiente etapa.",
    output: "SOPORTE CONTINUO",
    duration: "ONGOING",
    accent: false,
  },
];

export function MethodSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="metodo" className="relative overflow-hidden border-y border-steel-200 bg-steel-50 py-24 px-4">

        {/* Large editorial number — system break: pure type, no frame */}
        <div
          aria-hidden
          className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 leading-none opacity-[0.035]"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(10rem, 22vw, 18rem)",
            color: "var(--navy)",
            letterSpacing: "-0.05em",
          }}
        >
          03
        </div>

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

            {/* Connecting beam — base track */}
            <motion.span
              aria-hidden
              className="absolute left-0 top-[1.375rem] hidden h-px w-full origin-left bg-steel-200 lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Beam — first 75% fills with cyan (diagn+plan+exec) */}
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
                  {/* Step header: code + duration */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="mono-label text-steel-400">{step.code}</span>
                    <span className="mono-label tabular text-steel-400">{step.duration}</span>
                  </div>

                  {/* Node marker on the beam */}
                  <div
                    className="mb-5 flex items-center justify-center size-11 border bg-white shadow-sm transition-shadow duration-300"
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

                  {/* Output artifact — bottom technical footer */}
                  <div
                    className="mt-5 flex items-center gap-2 border-t pt-3"
                    style={{ borderColor: "oklch(0.88 0.010 240)" }}
                  >
                    <span
                      className="size-1 shrink-0 rounded-full"
                      style={{ background: step.accent ? "var(--signal)" : "var(--cyan)" }}
                    />
                    <span
                      className="mono-label"
                      style={{
                        color: step.accent
                          ? "var(--signal-deep)"
                          : "oklch(0.50 0.012 240)",
                        fontSize: "0.58rem",
                      }}
                    >
                      {step.output}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
