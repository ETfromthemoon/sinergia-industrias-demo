"use client";
import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

type Metric = {
  value: number;
  suffix: string;
  label: string;
  code: string;
};

const METRICS: readonly Metric[] = [
  { value: 40, suffix: "+", label: "empresas asesoradas", code: "EMP" },
  { value: 8, suffix: "+", label: "años en operación", code: "YRS" },
  { value: 20, suffix: "+", label: "implementaciones Odoo", code: "ODO" },
  { value: 30, suffix: "+", label: "proyectos Ley REP", code: "REP" },
  { value: 12, suffix: "", label: "industrias atendidas", code: "IND" },
];

export function CredibilityBar() {
  return (
    <section className="border-y border-steel-200 bg-steel-50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-steel-200 sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.code}
            className="group relative flex flex-col px-6 py-8 transition-colors hover:bg-white"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mono-label mb-3 text-steel-400">[{m.code}]</span>
            <span className="font-display text-4xl font-bold tracking-tight text-navy lg:text-5xl">
              <NumberTicker value={m.value} suffix={m.suffix} />
            </span>
            <span className="mt-2 text-xs leading-tight text-muted-foreground">{m.label}</span>
            {/* hover accent rule */}
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
