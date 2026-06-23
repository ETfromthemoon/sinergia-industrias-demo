"use client";
import { motion } from "motion/react";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { Building2, Wrench, TrendingUp } from "lucide-react";

type CaseStudy = {
  client: string;
  code: string;
  industry: string;
  context: string;
  service: string;
  result: string;
};

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.div
      className="group relative border border-steel-200 bg-white transition-colors hover:bg-steel-50"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
      <CornerTicks className="text-steel-400" size={8} />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="mb-5 flex items-start justify-between">
          <div>
            <span className="mono-label mb-1 block text-steel-400">{study.code}</span>
            <h3 className="font-display text-xl font-bold text-foreground">{study.client}</h3>
          </div>
          <span className="inline-flex items-center gap-1.5 border border-steel-200 bg-white px-2.5 py-1 mono-label text-steel-400">
            <Building2 className="size-3" />
            {study.industry}
          </span>
        </div>

        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{study.context}</p>

        {/* Tabs: Contexto / Servicio / Resultados */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="border-l border-cyan/30 pl-3">
            <span className="mono-label mb-1 block text-cyan">CONTEXTO</span>
            <p className="text-xs leading-relaxed text-steel-600">{study.context.slice(0, 100)}...</p>
          </div>
          <div className="border-l border-navy/30 pl-3">
            <span className="mono-label mb-1 block text-navy">
              <Wrench className="inline size-3 mr-1" />
              SERVICIO
            </span>
            <p className="text-xs leading-relaxed text-steel-600">{study.service}</p>
          </div>
          <div className="border-l border-signal/40 pl-3">
            <span className="mono-label mb-1 block text-signal-deep">
              <TrendingUp className="inline size-3 mr-1" />
              RESULTADOS
            </span>
            <p className="text-xs leading-relaxed text-steel-600">{study.result}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
