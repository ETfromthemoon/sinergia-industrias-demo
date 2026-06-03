"use client";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { SplitText } from "@/components/ui/split-text";
import { Magnetic } from "@/components/ui/magnetic";
import { ProcessSchematic } from "@/components/ui/process-schematic";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { Award, ShieldCheck, ArrowRight } from "lucide-react";

const LINE_1 = "Procesos que";
const LINE_2 = "funcionan.";
const LINE_3 = "Cumplimiento";
const LINE_4 = "que no falla.";

export function HeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden bg-background">
        {/* blueprint background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid -z-20" />
        <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid-bold -z-20 opacity-60" />
        {/* scan line */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent animate-scan" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-36 lg:pb-28">
          {/* LEFT — copy */}
          <div className="flex flex-col justify-center">
            {/* status row */}
            <motion.div
              className="mb-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
            >
              <span className="flex items-center gap-2 mono-label text-navy">
                <span className="inline-block size-1.5 rounded-full bg-cyan animate-status" />
                SINERGIA · ING. INDUSTRIAL
              </span>
            </motion.div>

            {/* headline — brutal Swiss scale */}
            <h1 className="font-display text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.95] tracking-tight text-foreground">
              <span className="block">
                <SplitText text={LINE_1} delay={0.08} stagger={0.04} startIndex={0} />
              </span>
              <span className="block text-navy">
                <SplitText text={LINE_2} delay={0.08} stagger={0.04} startIndex={2} />
              </span>
              <span className="block mt-1">
                <SplitText text={LINE_3} delay={0.08} stagger={0.04} startIndex={3} />
              </span>
              <span className="block text-navy">
                <SplitText text={LINE_4} delay={0.08} stagger={0.04} startIndex={4} />
              </span>
            </h1>

            {/* subhead */}
            <motion.p
              className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Ponemos en orden tus procesos, implementamos tu ERP y resolvemos tu cumplimiento
              ambiental. Ingeniería aplicada para industrias en Chile.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-9 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.55 }}
            >
              <Magnetic>
                <Link
                  href="#contacto"
                  className="group inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-dark"
                >
                  Conversemos tu proyecto
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Link
                href="#servicios"
                className="mono-label text-foreground/70 underline-offset-4 transition-colors hover:text-navy hover:underline"
              >
                Ver áreas →
              </Link>
            </motion.div>

            {/* trust ticks */}
            <motion.div
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-steel-200 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.5 }}
            >
              <span className="flex items-center gap-2 text-sm text-foreground/80">
                <Award className="size-4 text-navy" />
                Ready Partner <span className="font-semibold">Odoo</span>
              </span>
              <span className="flex items-center gap-2 text-sm text-foreground/80">
                <ShieldCheck className="size-4 text-cyan" />
                Especialistas <span className="font-semibold">Ley REP</span>
              </span>
            </motion.div>
          </div>

          {/* RIGHT — schematic panel */}
          <motion.div
            className="relative flex items-center"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full border border-steel-200 bg-white/70 backdrop-blur-sm">
              <CornerTicks className="text-navy" size={12} />
              {/* panel header */}
              <div className="flex items-center justify-between border-b border-steel-200 px-4 py-2.5">
                <span className="mono-label text-navy">SYS.SINERGIA / v2.0</span>
                <span className="flex items-center gap-1.5 mono-label text-cyan-deep">
                  <span className="inline-block size-1.5 rounded-full bg-cyan animate-status" />
                  OPERATIVO
                </span>
              </div>
              {/* schematic */}
              <div className="px-5 py-6">
                <ProcessSchematic />
              </div>
              {/* panel footer — coordinate readout */}
              <div className="flex items-center justify-between border-t border-steel-200 px-4 py-2.5">
                <span className="mono-label text-muted-foreground">VIÑA DEL MAR · CL</span>
                <span className="mono-label tabular text-muted-foreground">-33.02 / -71.55</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
