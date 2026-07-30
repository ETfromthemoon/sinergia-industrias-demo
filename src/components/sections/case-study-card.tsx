"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

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
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 2) * 0.08, duration: 0.55 }}
      className="group flex h-full flex-col border-t border-steel-200 py-8 sm:px-3"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="mono-label text-cyan-deep">{study.industry}</span>
        <span className="font-mono text-[0.65rem] text-steel-400">{study.code}</span>
      </div>
      <h3 className="mt-5 text-4xl text-foreground">{study.client}</h3>
      <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {study.context}
      </p>

      <div className="mt-8 grid gap-5 border-t border-steel-100 pt-6 sm:grid-cols-2">
        <div>
          <p className="mono-label text-steel-400">Intervención</p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{study.service}</p>
        </div>
        <div>
          <p className="mono-label text-navy">Resultado</p>
          <p className="mt-2 text-xs leading-relaxed text-foreground">{study.result}</p>
        </div>
      </div>
      <ArrowUpRight className="mt-7 size-5 text-steel-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
    </motion.article>
  );
}
