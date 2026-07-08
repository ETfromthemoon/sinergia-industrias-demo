"use client";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { SectionLabel } from "@/components/ui/section-label";
import { CornerTicks } from "@/components/ui/blueprint-frame";

const ITEMS = [
  { code: "01", text: "Levantamiento de residuos por categoría de producto" },
  { code: "02", text: "Cálculo de metas anuales exigidas por ley" },
  { code: "03", text: "Gestión de la plataforma REP del Ministerio" },
  { code: "04", text: "Reporte final auditado y presentado" },
];

export function LeyRepSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden bg-navy-dark py-24 px-4">
        <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid-dark" />
        <div aria-hidden className="grain pointer-events-none absolute inset-0" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:items-center">
          {/* LEFT — copy */}
          <div>
            <SectionLabel index="02" tone="accent" className="mb-6">
              Cumplimiento normativo
            </SectionLabel>

            <motion.h2
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              La Ley REP no es opcional.
              <br />
              <span className="text-steel-400">Tampoco lo es hacerla bien.</span>
            </motion.h2>

            <motion.p
              className="mt-6 max-w-lg text-base leading-relaxed text-steel-300"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.5 }}
            >
              La ley 20.920 obliga a gestionar residuos de envases y aparatos eléctricos, con
              plazos y reportes ante el Ministerio del Medio Ambiente. Una declaración tardía o
              incorrecta tiene consecuencias reales.
            </motion.p>

            <motion.p
              className="mt-4 max-w-lg text-base leading-relaxed text-white/85"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.5 }}
            >
              Hacemos el levantamiento, el cálculo de metas y el reporte completo. Tu empresa
              cumple sin desviar a tu equipo a descifrar la normativa.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24, duration: 0.5 }}
            >
              <Magnetic>
                <Link
                  href="#contacto"
                  className="group inline-flex items-center gap-2 border border-cyan/40 bg-cyan/10 px-7 py-3.5 text-sm font-semibold text-cyan transition-colors duration-200 hover:bg-cyan/20"
                >
                  Conversemos tu proyecto
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          {/* RIGHT — process checklist panel */}
          <motion.div
            className="relative border border-white/15 bg-white/[0.03] backdrop-blur-sm"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <CornerTicks className="text-cyan" size={12} />
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <span className="mono-label text-white/70">PROC.REP / LEY 20.920</span>
              <span className="mono-label text-cyan">4 ETAPAS</span>
            </div>
            <ul className="divide-y divide-white/10">
              {ITEMS.map((item, i) => (
                <motion.li
                  key={item.code}
                  className="group flex items-center gap-4 px-5 py-5 transition-colors hover:bg-white/[0.04]"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.45 }}
                >
                  <span className="mono-label tabular text-cyan/70">{item.code}</span>
                  <CheckCircle2 className="size-4 shrink-0 text-cyan" />
                  <span className="text-sm text-white/85">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
