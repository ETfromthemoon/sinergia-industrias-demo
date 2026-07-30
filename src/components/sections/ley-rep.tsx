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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const numeralY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden bg-navy-dark py-20 text-white sm:py-28">
        <div aria-hidden className="surface-noise absolute inset-0" />
        <div className="editorial-shell relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow text-cyan before:bg-cyan">Cumplimiento Ley REP</p>
            <h2 className="mt-7 max-w-3xl text-5xl leading-[0.96] text-white sm:text-6xl">
              Cumplir no debería depender de{" "}
              <em className="font-normal text-cyan">interpretaciones.</em>
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
              <span className="mono-label text-white/35">Ley 20.920</span>
            </div>
            <div className="mt-2">
              {DELIVERABLES.map(({ icon: Icon, label }, index) => (
                <div
                  key={label}
                  className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-white/10 py-5 last:border-0"
                >
                  <Icon className="size-4 text-cyan" />
                  <span className="text-sm text-white/75">{label}</span>
                  <span className="font-mono text-[0.65rem] text-white/30">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
