"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { SplitText } from "@/components/ui/split-text";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { OdooLogo } from "@/components/ui/odoo-logo";
import { NumberTicker } from "@/components/ui/number-ticker";
import { heroTitle } from "@/lib/motion";
import { useMediaQuery, useSaveData } from "@/lib/use-media-query";

const LINE_1 = "Procesos que";
const LINE_2 = "funcionan.";
const LINE_3 = "Cumplimiento";
const LINE_4 = "que no falla.";

/** Background loop. The poster comes from YouTube's CDN so it always matches
 * the video frame; i.ytimg.com is preconnected in layout.tsx. */
const VIDEO_ID = "Tody2AVL6ys";

const MINI_STATS = [
  { val: 40, suffix: "+", label: "Empresas", accent: true },
  { val: 8,  suffix: "+", label: "Años exp.", accent: false },
  { val: 20, suffix: "+", label: "Odoo impl.", accent: false },
] as const;

/** Gates the YouTube iframe, then defers it until the browser is idle so it
 * never competes with the LCP poster. Skipped entirely under
 * prefers-reduced-motion, on Save-Data connections, and below `lg` — mobile
 * browsers block muted autoplay often enough that the embed just renders
 * YouTube's paused-state overlay, and the iframe is far heavier than the
 * local mp4 it replaced. In every skipped case the poster stands on its own;
 * it is always in the initial HTML. */
function useBackgroundVideoEnabled(): boolean {
  const prefersReducedMotion = useReducedMotion();
  const saveData = useSaveData();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const allowed = !prefersReducedMotion && !saveData && isDesktop;

  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    if (!allowed) return;

    const markIdle = () => setIsIdle(true);

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(markIdle, { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(markIdle, 500);
    return () => window.clearTimeout(timeoutId);
  }, [allowed]);

  return allowed && isIdle;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldMountIframe = useBackgroundVideoEnabled();

  // Exit parallax — the copy drifts and dims as the next section rises.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const copyY = useTransform(smoothProgress, [0, 1], [0, -40]);
  const exitOpacity = useTransform(smoothProgress, [0, 1], [1, 0.4]);

  return (
    <MotionConfig reducedMotion="user">
      <section ref={sectionRef} className="relative overflow-hidden bg-carbon">

        {/* ── Background — YouTube loop, poster is the LCP ─────── */}
        <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {shouldMountIframe && (
          <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=${VIDEO_ID}&fs=0&modestbranding=1&playsinline=1`}
              allow="autoplay; encrypted-media"
              title="Video de fondo"
              aria-hidden="true"
              tabIndex={-1}
              className="absolute left-1/2 top-1/2 h-auto w-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "177.78vh",
                minWidth: "100%",
                minHeight: "100%",
                pointerEvents: "none",
                border: "none",
              }}
            />
          </div>
        )}

        {/* Legibility overlay — text must always read over the video */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(157deg, oklch(0.175 0.028 276 / 0.90), oklch(0.125 0.020 276 / 0.80))",
          }}
        />

        {/* Aurora glow — navy → cyan, dimmed over the video */}
        <div
          aria-hidden
          className="aurora-dark pointer-events-none absolute inset-0 z-[3] opacity-60"
        />

        {/* Film grain — premium texture */}
        <div aria-hidden className="grain pointer-events-none absolute inset-0 z-[4]" />

        {/* Section top rule */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px z-[5]"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, oklch(0.746 0.1235 224 / 0.30) 35%, oklch(0.746 0.1235 224 / 0.30) 65%, transparent 100%)",
          }}
        />

        {/* ── Content — single centered column ───────────── */}
        <motion.div
          className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 pb-24 pt-32 text-center lg:pb-32 lg:pt-40"
          style={{ y: copyY, opacity: exitOpacity }}
        >

          {/* Status row */}
          <motion.div
            className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            <span className="flex items-center gap-2 mono-label text-white/70">
              <span className="motion-safe:animate-pulse inline-block size-1.5 rounded-full bg-cyan" />
              Ingeniería industrial · Chile
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="hidden sm:inline mono-label text-white/50">
              Procesos inteligentes. Impacto real.
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
                style={{ textShadow: "0 0 32px oklch(0.746 0.1235 224 / 0.35)" }}
              >
                <SplitText text={LINE_4} delay={0.08} stagger={0.04} startIndex={4} />
              </span>
            </h1>
          </motion.div>

          {/* Subhead */}
          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed text-steel-300 lg:text-lg"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Ponemos en orden tus procesos, implementamos tu ERP y resolvemos tu cumplimiento
            ambiental. Ingeniería aplicada para industrias en Chile.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.55 }}
          >
            <Link
              href="#contacto"
              className="group inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold text-carbon transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan hover:shadow-[0_0_48px_-8px_oklch(0.746_0.1235_224_/_0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep"
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
            className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-white/12 pt-5"
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

          {/* Mini stats grid */}
          <motion.div
            className="mt-5 grid w-full max-w-md grid-cols-3 gap-px border border-white/10 bg-white/10"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {MINI_STATS.map(({ val, suffix, label, accent }) => (
              <div
                key={label}
                className="relative flex flex-col items-center gap-0.5 px-3 py-3"
                style={{ background: "var(--carbon)" }}
              >
                <span
                  className={`font-display font-bold tabular leading-none text-white ${accent ? "text-2xl" : "text-xl"}`}
                >
                  <NumberTicker value={val} duration={1800} />
                  {suffix}
                </span>
                <span className="mono-label text-white/70">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom hairline — crisp dark→light seam into the next section */}
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-px z-[5]"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, oklch(0.746 0.1235 224 / 0.25) 50%, transparent 100%)",
          }}
        />
      </section>
    </MotionConfig>
  );
}
