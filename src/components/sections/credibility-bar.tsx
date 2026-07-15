"use client";
import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { fadeUp } from "@/lib/motion";

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
];

export function CredibilityBar() {
  return (
    <section className="border-y border-steel-200 bg-steel-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-steel-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.code}
            className="group relative flex flex-col border-steel-200 px-6 py-8 transition-colors hover:bg-white"
            variants={fadeUp(i * 0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="font-display text-4xl font-bold tracking-tight text-navy lg:text-5xl">
              <NumberTicker value={m.value} suffix={m.suffix} />
            </span>
            <span className="mt-2 text-xs leading-tight text-muted-foreground">{m.label}</span>
            {/* hover accent rule — cyan, reserved for technical accent */}
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
