"use client";
import { motion } from "motion/react";

type Metric = {
  value: string;
  label: string;
};

const METRICS: readonly Metric[] = [
  { value: "40+", label: "empresas asesoradas" },
  { value: "8+", label: "años en operación" },
  { value: "20+", label: "implementaciones Odoo" },
  { value: "30+", label: "proyectos Ley REP" },
  { value: "12", label: "industrias atendidas" },
];

export function CredibilityBar() {
  return (
    <section className="bg-steel-100 border-y border-steel-200 py-10 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-mono text-3xl font-bold text-navy tracking-tight">
                {m.value}
              </span>
              <span className="mt-1 text-xs text-muted-foreground leading-tight">{m.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
