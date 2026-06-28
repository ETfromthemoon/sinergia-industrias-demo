"use client";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

type VideoHeroProps = {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  subhead: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  badge?: string;
  videoId: string;
};

export function VideoHero({
  eyebrow,
  headline,
  headlineAccent,
  subhead,
  ctaLabel = "Conversemos tu proyecto",
  ctaHref = "/contacto",
  secondaryCtaLabel,
  secondaryCtaHref,
  badge,
  videoId,
}: VideoHeroProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden px-4 pb-20 pt-32 lg:pb-28 lg:pt-40 bg-carbon">
        {/* ── YouTube video background ─────────────── */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=${videoId}&fs=0&modestbranding=1&playsinline=1`}
            allow="autoplay; encrypted-media"
            title="Video de fondo"
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
            style={{ 
              width: "177.78vh", 
              minWidth: "100%", 
              minHeight: "100%",
              pointerEvents: "none",
              border: "none",
            }}
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-[1] bg-carbon/75" />
        {/* Extra gradient at bottom */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-carbon via-carbon/50 to-transparent" />

        {/* ── Atmosphere overlays ──────────────────── */}
        <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid-dark z-[2] opacity-30" />
        <div aria-hidden className="grain pointer-events-none absolute inset-0 z-[3]" />

        {/* Data-stream lines */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 w-full h-full z-[2]"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="32%" x2="100%" y2="32%" stroke="oklch(1 0 0 / 0.04)" strokeWidth="0.8" strokeDasharray="7 22" />
          <line x1="0" y1="68%" x2="100%" y2="68%" stroke="oklch(0.68 0.14 205 / 0.08)" strokeWidth="0.8" strokeDasharray="5 30" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="oklch(1 0 0 / 0.03)" strokeWidth="0.75" strokeDasharray="4 28" />
        </svg>

        {/* Scan line */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent animate-scan" />
        </div>

        {/* Corner crosshairs */}
        <svg aria-hidden className="pointer-events-none absolute top-5 left-5 z-[4]" width="18" height="18">
          <path d="M9 0 L9 7 M0 9 L7 9" stroke="oklch(0.68 0.14 205 / 0.45)" strokeWidth="0.8" fill="none" />
        </svg>
        <svg aria-hidden className="pointer-events-none absolute top-5 right-5 z-[4]" width="18" height="18">
          <path d="M9 0 L9 7 M11 9 L18 9" stroke="oklch(0.68 0.14 205 / 0.45)" strokeWidth="0.8" fill="none" />
        </svg>
        <svg aria-hidden className="pointer-events-none absolute bottom-5 left-5 z-[4]" width="18" height="18">
          <path d="M9 11 L9 18 M0 9 L7 9" stroke="oklch(0.68 0.14 205 / 0.45)" strokeWidth="0.8" fill="none" />
        </svg>
        <svg aria-hidden className="pointer-events-none absolute bottom-5 right-5 z-[4]" width="18" height="18">
          <path d="M9 11 L9 18 M11 9 L18 9" stroke="oklch(0.68 0.14 205 / 0.45)" strokeWidth="0.8" fill="none" />
        </svg>

        {/* Bottom measurement annotation */}
        <motion.div
          aria-hidden
          className="pointer-events-none select-none absolute bottom-6 inset-x-12 z-[4] hidden lg:flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.9 }}
        >
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, oklch(1 0 0 / 0.16))" }} />
          <span className="mono-label text-white/35" style={{ fontSize: "0.5rem", letterSpacing: "0.22em" }}>
            REGION DE VALPARAISO · CHILE · REF.SIS.02
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, oklch(1 0 0 / 0.16))" }} />
        </motion.div>

        {/* Top rule */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px z-[4]"
          style={{
            background: "linear-gradient(to right, transparent 0%, oklch(0.68 0.14 205 / 0.30) 35%, oklch(0.68 0.14 205 / 0.30) 65%, transparent 100%)",
          }}
        />

        {/* Bottom hairline */}
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-px z-[4]"
          style={{
            background: "linear-gradient(to right, transparent 0%, oklch(0.68 0.14 205 / 0.25) 50%, transparent 100%)",
          }}
        />

        {/* ── Content ───────────────────────────────── */}
        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            <span className="mono-label text-white/70">
              <span className="inline-block size-1.5 rounded-full mr-2 bg-cyan animate-status" />
              {eyebrow}
            </span>
            {badge && (
              <span className="border border-cyan/40 bg-cyan/10 px-2.5 py-1 mono-label text-cyan">
                {badge}
              </span>
            )}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,6vw,4.5rem)] text-white"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {headline}
            {headlineAccent && (
              <span className="block text-cyan" style={{ textShadow: "0 0 32px oklch(0.68 0.14 205 / 0.35)" }}>
                {headlineAccent}
              </span>
            )}
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed lg:text-lg text-steel-300"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
          >
            {subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <Magnetic>
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold text-carbon transition-all duration-200 hover:bg-cyan hover:shadow-[0_0_48px_-8px_oklch(0.68_0.14_205_/_0.5)]"
              >
                {ctaLabel}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="mono-label text-white/65 underline-offset-4 transition-colors hover:text-cyan hover:underline"
              >
                {secondaryCtaLabel} →
              </Link>
            )}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
