"use client";
import { motion } from "motion/react";

type Step = {
  number: string;
  title: string;
  body: string;
};

const STEPS: readonly Step[] = [
  {
    number: "01",
    title: "Diagnóstico",
    body: "Primero escuchamos. Revisamos tu operación actual, tus sistemas y tus obligaciones legales. Nada de propuestas genéricas antes de entender qué tiene tu empresa.",
  },
  {
    number: "02",
    title: "Plan técnico",
    body: "Diseñamos un plan específico para tu caso: qué hacer, en qué orden y con qué recursos. Lo que va a costar y lo que vas a ganar.",
  },
  {
    number: "03",
    title: "Implementación",
    body: "Ejecutamos el proyecto con nuestro equipo. Si es Odoo, lo configuramos y capacitamos a tu personal. Si es Ley REP, hacemos el levantamiento y el reporte. Si son procesos, entregamos el mapa y el plan de mejora.",
  },
  {
    number: "04",
    title: "Seguimiento",
    body: "No desaparecemos cuando termina el proyecto. Quedamos disponibles para ajustes, dudas y la próxima etapa.",
  },
];

export function MethodSection() {
  return (
    <section className="bg-steel-50 border-y border-steel-200 py-24 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">
            Cómo trabajamos
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Sin promesas vagas.
            <br />
            Con un proceso claro.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Connector line (desktop) */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[3.5rem] top-5 hidden h-px w-[calc(100%+2rem)] bg-steel-200 lg:block"
                />
              )}
              <div className="mb-5 inline-flex items-center justify-center rounded-xl border border-navy/20 bg-white px-4 py-2.5 shadow-card">
                <span className="font-mono text-sm font-bold text-navy">{step.number}</span>
              </div>
              <h3 className="font-display mb-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing copy */}
        <motion.p
          className="mt-16 mx-auto max-w-2xl text-center text-base text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Somos un equipo de ingenieros con trabajo de campo real — no consultores de escritorio.
          Entendemos cómo funcionan las operaciones porque hemos trabajado dentro de ellas.
        </motion.p>
      </div>
    </section>
  );
}
