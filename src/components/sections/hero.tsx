"use client";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { SplitText } from "@/components/ui/split-text";
import { Magnetic } from "@/components/ui/magnetic";
import { ProcessSchematic } from "@/components/ui/process-schematic";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { OdooLogo } from "@/components/ui/odoo-logo";

const LINE_1 = "Procesos que";
const LINE_2 = "funcionan.";
const LINE_3 = "Cumplimiento";
const LINE_4 = "que no falla.";

const MODULES = ["REP", "PROC", "ODOO", "DATA"] as const;

const MINI_STATS = [
  { val: "40+", label: "Empresas", accent: true },
  { val: "8+",  label: "Años exp.", accent: false },
  { val: "20+", label: "Odoo impl.", accent: false },
] as const;

export function HeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        className="relative overflow-hidden bg-carbon"
        style={{
          background:
            "linear-gradient(157deg, var(--carbon) 0%, var(--carbon-2) 72%, var(--carbon) 100%)",
        }}
      >
        {/* ── Background atmosphere — three quiet layers ──── */}

        {/* Aurora glow — navy → cyan → signal (static) */}
        <div aria-hidden className="aurora-dark pointer-events-none absolute inset-0 -z-10" />

        {/* Dark blueprint grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid-dark -z-10" />

        {/* Film grain — premium texture */}
        <div aria-hidden className="grain pointer-events-none absolute inset-0 z-[1]" />

        {/* Section top rule */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, oklch(0.68 0.14 205 / 0.30) 35%, oklch(0.68 0.14 205 / 0.30) 65%, transparent 100%)",
          }}
        />

        {/* ── Main grid ─────────────────────────────────── */}
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-40 lg:pb-32">

          {/* LEFT — copy */}
          <div className="flex flex-col justify-center">

            {/* Status row */}
            <motion.div
              className="mb-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
            >
              <span className="flex items-center gap-2 mono-label text-white/70">
                <span className="inline-block size-1.5 rounded-full bg-cyan" />
                SINERGIA · ING. INDUSTRIAL
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.95] tracking-tight text-white">
              <span className="block">
                <SplitText text={LINE_1} delay={0.08} stagger={0.04} startIndex={0} />
              </span>
              <span className="block">
                <SplitText text={LINE_2} delay={0.08} stagger={0.04} startIndex={2} />
              </span>
              <span className="block mt-1">
                <SplitText text={LINE_3} delay={0.08} stagger={0.04} startIndex={3} />
              </span>
              <span
                className="block text-cyan"
                style={{ textShadow: "0 0 32px oklch(0.68 0.14 205 / 0.35)" }}
              >
                <SplitText text={LINE_4} delay={0.08} stagger={0.04} startIndex={4} />
              </span>
            </h1>

            {/* Subhead */}
            <motion.p
              className="mt-7 max-w-md text-base leading-relaxed text-steel-300"
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
                  className="group inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold text-carbon transition-all duration-200 hover:bg-cyan hover:shadow-[0_0_48px_-8px_oklch(0.68_0.14_205_/_0.5)]"
                >
                  Conversemos tu proyecto
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Link
                href="#servicios"
                className="mono-label text-white/65 underline-offset-4 transition-colors hover:text-cyan hover:underline"
              >
                Ver áreas →
              </Link>
            </motion.div>

            {/* Trust ticks */}
            <motion.div
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/12 pt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.5 }}
            >
              <span className="flex items-center gap-2 text-sm text-white/80">
                <OdooLogo size={18} />
                Ready Partner <span className="font-semibold">Odoo</span>
              </span>
              <span className="flex items-center gap-2 text-sm text-white/80">
                <ShieldCheck className="size-4 text-cyan" />
                Especialistas <span className="font-semibold">Ley REP</span>
              </span>
            </motion.div>

            {/* Mini stats grid — fills the lower-left void */}
            <motion.div
              className="mt-5 grid grid-cols-3 gap-px border border-white/10 bg-white/10"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {MINI_STATS.map(({ val, label, accent }) => (
                <div
                  key={label}
                  className="relative flex flex-col gap-0.5 bg-carbon px-3 py-3"
                  style={{ background: "var(--carbon)" }}
                >
                  {accent && <span className="absolute inset-x-0 top-0 h-0.5 bg-signal" />}
                  <span
                    className={`font-display font-bold tabular text-xl leading-none ${accent ? "text-signal" : "text-white"}`}
                  >
                    {val}
                  </span>
                  <span className="mono-label text-white/70">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — schematic + chrome */}
          <motion.div
            className="relative flex flex-col justify-center gap-3"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Panel glow */}
            <div
              className="absolute inset-0 -m-8 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 45%, oklch(0.68 0.14 205 / 0.14) 0%, transparent 66%)",
              }}
            />

            {/* Schematic panel — dark glass */}
            <div
              className="relative w-full border border-white/12 bg-white/[0.04] backdrop-blur-md"
              style={{ boxShadow: "var(--shadow-panel-dark), var(--shadow-glow-cyan)" }}
            >
              <CornerTicks className="text-cyan" size={12} />

              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                <span className="mono-label text-cyan">SYS.SINERGIA</span>
                <span className="mono-label text-cyan">OPERATIVO</span>
              </div>

              {/* Schematic */}
              <div className="px-5 py-6">
                <ProcessSchematic />
              </div>
            </div>

            {/* Module status bar */}
            <div className="grid grid-cols-4 gap-px border border-white/10 bg-white/10">
              {MODULES.map((mod) => (
                <div
                  key={mod}
                  className="flex items-center justify-center px-2.5 py-2.5"
                  style={{ background: "var(--carbon)" }}
                >
                  <span className="mono-label text-white/60">{mod}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom hairline — crisp dark→light seam into the next section */}
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, oklch(0.68 0.14 205 / 0.25) 50%, transparent 100%)",
          }}
        />
      </section>
    </MotionConfig>
  );
}
