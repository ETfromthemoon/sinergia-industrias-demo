"use client";

import Link from "next/link";
import { ArrowRight, FileCheck2, Scale, Search, Send } from "lucide-react";
import { motion, MotionConfig } from "motion/react";

const DELIVERABLES = [
  { icon: Search, label: "Levantamiento y clasificación" },
  { icon: Scale, label: "Cálculo de obligaciones" },
  { icon: FileCheck2, label: "Respaldo documental" },
  { icon: Send, label: "Reporte y acompañamiento" },
] as const;

export function LeyRepSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="focus-surface focus-surface--inverse relative overflow-hidden bg-navy-dark py-20 text-white sm:py-28">
        <div className="editorial-shell relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow eyebrow--inverse">Cumplimiento Ley REP</p>
            <h2 className="mt-7 max-w-3xl text-[clamp(2.75rem,4.4vw,3.5rem)] leading-[1.04] text-white">
              Cumplir no debería depender de{" "}
              <span className="text-cyan">interpretaciones.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/64">
              Convertimos la Ley 20.920 en un proceso trazable: qué declarar, cómo
              respaldarlo y qué necesita hacer tu equipo en cada etapa.
            </p>
            <Link
              href="/ley-rep"
              className="group mt-9 inline-flex items-center gap-2 border-b border-cyan pb-1 text-sm font-semibold"
            >
              Revisar el servicio
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="border border-white/12 bg-white/[0.035] p-6 sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-white/12 pb-5">
              <p className="text-sm font-semibold">Una ruta completa</p>
              <span className="mono-label text-white/70">Ley 20.920</span>
            </div>
            <div className="mt-2">
              {DELIVERABLES.map(({ icon: Icon, label }, index) => (
                <div
                  key={label}
                  className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-white/10 py-5 last:border-0"
                >
                  <Icon className="size-4 text-cyan" />
                  <span className="text-sm text-white/75">{label}</span>
                  <span className="font-mono text-[0.65rem] text-white/65">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
