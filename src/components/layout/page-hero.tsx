"use client";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeroArtifact, type ArtifactVariant } from "@/components/ui/page-hero-artifact";

type PageHeroProps = {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  subhead: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  badge?: string;
  variant?: "dark" | "light";
  artifact?: ArtifactVariant;
  index?: string;
  refCode?: string;
};

export function PageHero({
  eyebrow,
  headline,
  headlineAccent,
  subhead,
  ctaLabel = "Conversemos tu proyecto",
  ctaHref = "/contacto",
  secondaryCtaLabel,
  secondaryCtaHref,
  badge,
  artifact,
  variant = "dark",
}: PageHeroProps) {
  const isDark = variant === "dark";

  return (
    <MotionConfig reducedMotion="user">
      <section
        className={cn(
          "relative overflow-hidden px-4 pb-20 pt-32 lg:pb-28 lg:pt-40",
          isDark ? "bg-carbon" : "bg-steel-50"
        )}
        style={
          isDark
            ? {
                background:
                  "linear-gradient(157deg, var(--carbon) 0%, var(--carbon-2) 72%, var(--carbon) 100%)",
              }
            : undefined
        }
      >
        {/* ── Atmosphere — quiet layers ──────────────── */}
        {isDark ? (
          <>
            <div aria-hidden className="aurora-dark pointer-events-none absolute inset-0 -z-10" />
            <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid-dark -z-10" />
            <div aria-hidden className="grain pointer-events-none absolute inset-0 z-[1]" />
          </>
        ) : (
          <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid -z-10 opacity-50" />
        )}

        {/* Top rule */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background: isDark
              ? "linear-gradient(to right, transparent 0%, oklch(0.60 0.105 208 / 0.30) 35%, oklch(0.60 0.105 208 / 0.30) 65%, transparent 100%)"
              : "linear-gradient(to right, transparent 0%, oklch(0.28 0.12 255 / 0.12) 35%, oklch(0.28 0.12 255 / 0.12) 65%, transparent 100%)",
          }}
        />

        <div className={cn("relative z-10 mx-auto max-w-6xl", artifact && "grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-12 items-center")}>
          <div>
          {/* Eyebrow */}
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            <span className={cn("mono-label", isDark ? "text-white/70" : "text-navy")}>
              <span className="inline-block size-1.5 rounded-full mr-2 bg-cyan" />
              {eyebrow}
            </span>
            {badge && (
              <span className={cn(
                "border px-2.5 py-1 mono-label",
                isDark ? "border-cyan/40 bg-cyan/10 text-cyan" : "border-signal/40 bg-signal/10 text-signal-deep"
              )}>
                {badge}
              </span>
            )}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className={cn(
              "font-display font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,6vw,4.5rem)]",
              isDark ? "text-white" : "text-foreground"
            )}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {headline}
            {headlineAccent && (
              <span
                className={cn("block", isDark ? "text-cyan" : "text-navy")}
                style={isDark ? { textShadow: "0 0 32px oklch(0.60 0.105 208 / 0.35)" } : undefined}
              >
                {headlineAccent}
              </span>
            )}
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className={cn(
              "mt-7 max-w-xl text-base leading-relaxed lg:text-lg",
              isDark ? "text-steel-300" : "text-muted-foreground"
            )}
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
            <Link
              href={ctaHref}
              className={cn(
                "group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep",
                isDark
                  ? "bg-white text-carbon hover:bg-cyan hover:shadow-[0_0_48px_-8px_oklch(0.60_0.105_208_/_0.5)]"
                  : "bg-navy text-white hover:bg-navy-dark"
              )}
            >
              {ctaLabel}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className={cn(
                  "mono-label underline-offset-4 transition-colors hover:underline",
                  isDark ? "text-white/65 hover:text-cyan" : "text-muted-foreground hover:text-navy"
                )}
              >
                {secondaryCtaLabel} →
              </Link>
            )}
          </motion.div>
          </div>

          {/* Animated artifact */}
          {artifact && (
            <div className="hidden lg:flex items-center justify-center w-[320px] h-[280px] shrink-0">
              <PageHeroArtifact variant={artifact} className="w-full h-full" />
            </div>
          )}
        </div>

        {/* Bottom hairline */}
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-px"
          style={{
            background: isDark
              ? "linear-gradient(to right, transparent 0%, oklch(0.60 0.105 208 / 0.25) 50%, transparent 100%)"
              : "linear-gradient(to right, transparent 0%, oklch(0.28 0.12 255 / 0.10) 50%, transparent 100%)",
          }}
        />
      </section>
    </MotionConfig>
  );
}
