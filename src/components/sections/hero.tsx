"use client";
import { useRef } from "react";
import { motion, MotionConfig, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { SplitText } from "@/components/ui/split-text";
import { HeroSchematic } from "@/components/ui/hero-schematic";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { OdooLogo } from "@/components/ui/odoo-logo";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { NumberTicker } from "@/components/ui/number-ticker";
import { heroTitle } from "@/lib/motion";
import { useMediaQuery, useSaveData } from "@/lib/use-media-query";

const LINE_1 = "Procesos que";
const LINE_2 = "funcionan.";
const LINE_3 = "Cumplimiento";
const LINE_4 = "que no falla.";

const MINI_STATS = [
  { val: 40, suffix: "+", label: "Empresas", accent: true },
  { val: 8,  suffix: "+", label: "Años exp.", accent: false },
  { val: 20, suffix: "+", label: "Odoo impl.", accent: false },
] as const;

/** Gates the background video to hydrated clients that don't prefer
 * reduced motion and aren't on a constrained data connection. Until this
 * resolves (or when it resolves false), the poster image is shown — it is
 * always present in the initial HTML so it can serve as the LCP element. */
function useHeroVideoEnabled(): boolean {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const saveData = useSaveData();
  return !prefersReducedMotion && !saveData;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVideoEnabled = useHeroVideoEnabled();

  // Exit parallax — the whole hero drifts and dims as the next section rises.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const copyY = useTransform(smoothProgress, [0, 1], [0, -40]);
  const panelY = useTransform(smoothProgress, [0, 1], [0, -70]);
  const exitOpacity = useTransform(smoothProgress, [0, 1], [1, 0.4]);

  return (
    <MotionConfig reducedMotion="user">
      <section ref={sectionRef} className="relative overflow-hidden bg-carbon">

        {/* ── Background — cinematic loop, poster is the LCP ─────── */}
        <div aria-hidden className="absolute inset-0 -z-20">
          {isVideoEnabled ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/media/hero-poster.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/media/hero-loop.mp4" type="video/mp4" />
            </video>
          ) : (
            <Image
              src="/media/hero-poster.jpg"
              alt=""
              fill
              sizes="100vw"
              preload
              className="object-cover"
            />
          )}
        </div>

        {/* Legibility overlay — text must always read over video/poster */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(157deg, oklch(0.16 0.04 256 / 0.88), oklch(0.115 0.03 258 / 0.72))",
          }}
        />

        {/* Aurora glow — navy → cyan → signal, dimmed over the video */}
        <div
          aria-hidden
          className="aurora-dark pointer-events-none absolute inset-0 -z-10 opacity-60"
        />

        {/* Film grain — premium texture */}
        <div aria-hidden className="grain pointer-events-none absolute inset-0 z-[1]" />

        {/* Section top rule */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, oklch(0.60 0.105 208 / 0.30) 35%, oklch(0.60 0.105 208 / 0.30) 65%, transparent 100%)",
          }}
        />

        {/* ── Main grid ─────────────────────────────────── */}
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-32 lg:grid-cols-2 lg:gap-12 lg:pt-40 lg:pb-32 items-center">

          {/* LEFT — copy (parallax wrapper; entrance animation lives on children) */}
          <motion.div
            className="flex flex-col justify-center"
            style={{ y: copyY, opacity: exitOpacity }}
          >

            {/* Status row */}
            <motion.div
              className="mb-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
            >
              <span className="flex items-center gap-2 mono-label text-white/70">
                <span className="motion-safe:animate-pulse inline-block size-1.5 rounded-full bg-cyan" />
                Ingeniería industrial · Chile
              </span>
            </motion.div>

            {/* Headline — single blur-in block; SplitText keeps its own word stagger */}
            <motion.div variants={heroTitle} initial="hidden" animate="visible">
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
                  style={{ textShadow: "0 0 32px oklch(0.60 0.105 208 / 0.35)" }}
                >
                  <SplitText text={LINE_4} delay={0.08} stagger={0.04} startIndex={4} />
                </span>
              </h1>
            </motion.div>

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
              <Link
                href="#contacto"
                className="group inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold text-carbon transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan hover:shadow-[0_0_48px_-8px_oklch(0.60_0.105_208_/_0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep"
              >
                Conversemos tu proyecto
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
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
              {MINI_STATS.map(({ val, suffix, label, accent }) => (
                <div
                  key={label}
                  className="relative flex flex-col gap-0.5 bg-carbon px-3 py-3"
                  style={{ background: "var(--carbon)" }}
                >
                  {accent && <span className="absolute inset-x-0 top-0 h-0.5 bg-signal" />}
                  <span
                    className={`font-display font-bold tabular text-xl leading-none ${accent ? "text-signal" : "text-white"}`}
                  >
                    <NumberTicker value={val} duration={1800} />
                    {suffix}
                  </span>
                  <span className="mono-label text-white/70">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — schematic panel (parallax wrapper; entrance animation on inner child) */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="w-full max-w-[420px]"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroSchematic />
            </motion.div>
          </div>
        </div>

        {/* Bottom hairline — crisp dark→light seam into the next section */}
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, oklch(0.60 0.105 208 / 0.25) 50%, transparent 100%)",
          }}
        />
      </section>
    </MotionConfig>
  );
}
