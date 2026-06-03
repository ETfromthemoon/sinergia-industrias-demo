"use client";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ITEMS = [
  "Levantamiento de residuos por categoría de producto",
  "Cálculo de metas anuales exigidas por ley",
  "Gestión de la plataforma REP del Ministerio",
  "Reporte final auditado y presentado",
];

export function LeyRepSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden bg-navy-dark py-24 px-4">
        {/* Subtle grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-4xl">
          <motion.p
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Cumplimiento normativo
          </motion.p>

          <motion.h2
            className="font-display mb-6 text-4xl font-bold text-white sm:text-5xl leading-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            La Ley REP no es opcional.
            <br />
            <span className="text-steel-400">Tampoco lo es hacerla bien.</span>
          </motion.h2>

          <motion.p
            className="mb-8 max-w-2xl text-base leading-relaxed text-steel-400"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            La ley 20.920 obliga a las empresas a gestionar sus residuos de envases, aparatos
            eléctricos y otros productos. El proceso tiene plazos, registros y reportes que se
            presentan ante el Ministerio del Medio Ambiente. Una declaración incorrecta o tardía
            tiene consecuencias reales.
          </motion.p>

          <motion.p
            className="mb-10 max-w-2xl text-base leading-relaxed text-white/80"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            En Sinergia hacemos el levantamiento, el cálculo de metas y el reporte completo. Tu
            empresa cumple sin destinar a tu equipo a entender la normativa desde cero.
          </motion.p>

          {/* Checklist */}
          <ul className="mb-12 space-y-3">
            {ITEMS.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-start gap-3 text-sm text-white/85"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.07, duration: 0.45 }}
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <Magnetic>
              <Link
                href="#contacto"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full border border-cyan/40 bg-cyan/10 text-cyan px-8 py-3 text-base font-semibold hover:bg-cyan/20 transition-colors duration-200"
                )}
              >
                Conversemos tu proyecto →
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
