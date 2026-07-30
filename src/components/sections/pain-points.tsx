"use client";
import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";

const PAINS = [
  {
    code: "01",
    title: "Procesos ineficientes",
    body: "Tareas manuales y flujos sin estandarizar que frenan el crecimiento y esconden el costo real de operar.",
  },
  {
    code: "02",
    title: "Bajo aprovechamiento de la tecnología",
    body: "Sistemas instalados que nadie usa a fondo, o que no conversan entre sí.",
  },
  {
    code: "03",
    title: "Conocimiento, personas y sistemas desconectados",
    body: "Cada área sabe su parte, pero nadie tiene la vista completa de la operación.",
  },
];

export function PainPointsSection() {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-24 px-4">
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl">
        <SectionLabel index="00" tone="dark" className="mb-6">
          El problema
        </SectionLabel>

        <motion.h2
          className="font-display max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Las empresas no fallan por falta de tecnología.
        </motion.h2>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {PAINS.map((p) => (
            <div key={p.code} className="bg-navy-dark p-6">
              <span className="mono-label text-cyan">{p.code}</span>
              <h3 className="font-display mt-3 text-lg font-bold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-300">
                {p.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
