"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { clipReveal, fadeUp } from "@/lib/motion";

const ITEMS = [
  { code: "01", text: "Levantamiento de residuos por categoría de producto" },
  { code: "02", text: "Cálculo de metas anuales exigidas por ley" },
  { code: "03", text: "Gestión de la plataforma REP del Ministerio" },
  { code: "04", text: "Reporte final auditado y presentado" },
];

export function LeyRepSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const numeralY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-navy-dark py-24 px-4">
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        {/* Numeral gigante de fondo — parallax sutil, sin fijar el alto de la sección */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-2 -top-10 hidden select-none lg:block"
          style={{ y: numeralY }}
        >
          <span
            className="font-display font-bold text-white/[0.04]"
            style={{ fontSize: "clamp(120px, 12vw, 160px)" }}
          >
            20.920
          </span>
        </motion.div>

        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* Imagen — más pequeña, a la izquierda, sin invadir el panel */}
          <motion.div
            className="relative aspect-[4/5] overflow-hidden lg:col-span-5"
            style={{ y: imageY }}
            variants={clipReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <Image
              src="/media/rep-circular.jpg"
              alt="Vista aérea de materiales reciclables organizados en pilas en una planta de gestión de residuos"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Panel glass — a la derecha, columna propia, sin margen negativo */}
          <motion.div
            className="relative z-10 lg:col-span-7"
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="glass-dark glass-sheen relative">
              <div className="px-6 py-8 sm:px-8 sm:py-10">
                <SectionLabel index="02" tone="accent" className="mb-6">
                  Cumplimiento normativo
                </SectionLabel>

                <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl">
                  La Ley REP no es opcional.
                  <br />
                  <span className="text-steel-400">Tampoco lo es hacerla bien.</span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-steel-300">
                  La ley 20.920 obliga a gestionar residuos de envases y aparatos eléctricos, con
                  plazos y reportes ante el Ministerio del Medio Ambiente. Una declaración tardía o
                  incorrecta tiene consecuencias reales.
                </p>

                <p className="mt-4 text-base leading-relaxed text-white/85">
                  Hacemos el levantamiento, el cálculo de metas y el reporte completo. Tu empresa
                  cumple sin desviar a tu equipo a descifrar la normativa.
                </p>

                <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                  {ITEMS.map((item) => (
                    <li key={item.code} className="flex items-center gap-4 py-4">
                      <span className="mono-label tabular text-cyan/70">{item.code}</span>
                      <CheckCircle2 className="size-4 shrink-0 text-cyan" />
                      <span className="text-sm text-white/85">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="#contacto"
                    className="group inline-flex items-center gap-2 border border-cyan/40 bg-cyan/10 px-7 py-3.5 text-sm font-semibold text-cyan transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan/20"
                  >
                    Conversemos tu proyecto
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
