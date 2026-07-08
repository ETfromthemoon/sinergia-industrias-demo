"use client";
import { motion } from "motion/react";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { Building2, Wrench, TrendingUp } from "lucide-react";
import { truncateAtWord } from "@/lib/case-study";
import type { CaseStudy } from "@/lib/case-study";

type CaseSlideProps = {
  study: CaseStudy;
  current: number;
  total: number;
};

export function CaseSlide({ study, current, total }: CaseSlideProps) {
  return (
    <motion.div
      className="relative w-full min-h-[520px] sm:min-h-[560px] overflow-hidden border border-steel-200 bg-carbon"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      role="group"
      aria-roledescription="diapositiva"
      aria-label={`Caso ${current + 1} de ${total}: ${study.client}`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: study.image ? `url(${study.image})` : undefined }}
      />

      {/* Dark overlay gradient — left-to-right + bottom */}
      <div className="absolute inset-0 bg-gradient-to-r from-carbon/95 via-carbon/80 to-carbon/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />

      {/* Grain texture overlay */}
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />

      {/* Tech crosshairs */}
      <CornerTicks className="text-cyan/50 z-10" size={16} />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8 sm:p-12 lg:p-16">
        {/* Code + Industry row */}
        <div className="flex items-center gap-4 mb-4">
          <span className="mono-label text-cyan">{study.code}</span>
          <span className="inline-flex items-center gap-1.5 border border-cyan/30 bg-cyan/10 px-3 py-1 mono-label text-cyan text-xs">
            <Building2 className="size-3" />
            {study.industry}
          </span>
        </div>

        {/* Client name */}
        <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          {study.client}
        </h3>

        {/* Context — short version visible */}
        <p className="max-w-2xl text-base leading-relaxed text-steel-300 mb-8">
          {study.context}
        </p>

        {/* Three-column specs */}
        <div className="grid gap-6 sm:grid-cols-3 max-w-3xl">
          <div className="border-l-2 border-cyan/60 pl-4">
            <span className="mono-label mb-2 block text-cyan text-xs">
              CONTEXTO
            </span>
            <p className="text-sm leading-relaxed text-steel-400">
              {truncateAtWord(study.context, 120)}
            </p>
          </div>
          <div className="border-l-2 border-navy/60 pl-4">
            <span className="mono-label mb-2 block text-white/70 text-xs">
              <Wrench className="inline size-3 mr-1" />
              SERVICIO
            </span>
            <p className="text-sm leading-relaxed text-steel-400">
              {study.service}
            </p>
          </div>
          <div className="border-l-2 border-signal/60 pl-4">
            <span className="mono-label mb-2 block text-signal text-xs">
              <TrendingUp className="inline size-3 mr-1" />
              RESULTADOS
            </span>
            <p className="text-sm leading-relaxed text-steel-400">
              {study.result}
            </p>
          </div>
        </div>
      </div>

      {/* Slide counter (top-right) */}
      <div className="absolute top-6 right-8 z-10 mono-label text-white/40 text-xs">
        {current + 1} / {total}
      </div>
    </motion.div>
  );
}
