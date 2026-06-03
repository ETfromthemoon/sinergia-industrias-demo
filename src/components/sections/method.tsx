"use client";
import { motion, MotionConfig } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";

type Step = {
  number: string;
  title: string;
  body: string;
};

const STEPS: readonly Step[] = [
  {
    number: "01",
    title: "Diagnóstico",
    body: "Revisamos tu operación actual, tus sistemas y tus obligaciones legales. Nada de propuestas genéricas antes de entender qué tiene tu empresa.",
  },
  {
    number: "02",
    title: "Plan técnico",
    body: "Diseñamos un plan específico: qué hacer, en qué orden y con qué recursos. Lo que va a costar y lo que vas a ganar.",
  },
  {
    number: "03",
    title: "Implementación",
    body: "Ejecutamos con nuestro equipo. Configuramos Odoo, hacemos el levantamiento REP o entregamos el plan de mejora de procesos.",
  },
  {
    number: "04",
    title: "Seguimiento",
    body: "No desaparecemos al cerrar el proyecto. Quedamos disponibles para ajustes, dudas y la siguiente etapa.",
  },
];

export function MethodSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="metodo" className="border-y border-steel-200 bg-steel-50 py-24 px-4">
        <div className="mx-auto max-w-6xl">
          {/* header */}
          <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel index="03" className="mb-5">
                Metodología
              </SectionLabel>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Sin promesas vagas.
                <br />
                Con un proceso claro.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Un equipo de ingenieros con trabajo de campo real — no consultores de escritorio.
            </p>
          </div>

          {/* stepper */}
          <div className="relative">
            {/* connecting beam (draws left→right) */}
            <motion.span
              aria-hidden
              className="absolute left-0 top-[1.4rem] hidden h-px w-full origin-left bg-steel-300 lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              aria-hidden
              className="absolute left-0 top-[1.4rem] hidden h-px w-full origin-left bg-cyan lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ opacity: 0.4 }}
            />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* node marker on the beam */}
                  <div className="mb-6 flex items-center justify-center size-11 border border-navy/25 bg-white shadow-sm">
                    <span className="font-mono text-sm font-bold text-navy tabular">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display mb-2.5 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
