"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion, MotionConfig } from "motion/react";
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
  ctaLabel = "Evaluar mi proyecto",
  ctaHref = "/contacto",
  secondaryCtaLabel,
  secondaryCtaHref,
  badge,
  artifact,
  variant = "dark",
  index = "00",
}: PageHeroProps) {
  const dark = variant === "dark";

  return (
    <MotionConfig reducedMotion="user">
      <section
        className={cn(
          "relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40",
          dark ? "bg-carbon text-white" : "bg-steel-50 text-foreground",
        )}
      >
        {dark ? (
          <>
            <div aria-hidden className="aurora-dark absolute inset-0" />
            <div aria-hidden className="surface-noise absolute inset-0" />
          </>
        ) : null}
        <div
          aria-hidden
          className={cn(
            "absolute -right-24 top-16 size-[30rem] rounded-full border sm:size-[42rem]",
            dark ? "border-white/7" : "border-navy/7",
          )}
        />

        <div className="editorial-shell relative">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.55fr] lg:items-end">
            <div>
              <div className="flex items-center gap-4">
                <p className={cn("eyebrow", dark && "text-cyan before:bg-cyan")}>{eyebrow}</p>
                {badge ? (
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider",
                      dark ? "border-white/15 text-white/55" : "border-steel-200 text-muted-foreground",
                    )}
                  >
                    {badge}
                  </span>
                ) : null}
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 max-w-5xl text-[clamp(3.4rem,8vw,6.8rem)] leading-[0.9]"
              >
                {headline}{" "}
                {headlineAccent ? (
                  <>
                    <br />
                    <em className={cn("font-normal", dark ? "text-cyan" : "text-navy")}>
                      {headlineAccent}
                    </em>
                  </>
                ) : null}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6 }}
              className={cn(
                "border-t pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0",
                dark ? "border-white/15" : "border-steel-200",
              )}
            >
              <p className={cn("text-sm leading-relaxed", dark ? "text-white/65" : "text-muted-foreground")}>
                {subhead}
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href={ctaHref}
                  className={cn(
                    "group inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold",
                    dark ? "bg-cyan text-carbon hover:bg-white" : "bg-navy text-white hover:bg-navy-dark",
                  )}
                >
                  {ctaLabel}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                {secondaryCtaLabel && secondaryCtaHref ? (
                  <Link
                    href={secondaryCtaHref}
                    className={cn(
                      "inline-flex items-center gap-2 border-b pb-1 text-xs font-semibold",
                      dark ? "border-white/30" : "border-navy/30",
                    )}
                  >
                    {secondaryCtaLabel}
                    <ArrowDownRight className="size-3.5" />
                  </Link>
                ) : null}
              </div>
            </motion.div>
          </div>

          <div
            className={cn(
              "mt-14 flex items-center justify-between border-t pt-5",
              dark ? "border-white/10 text-white/28" : "border-steel-200 text-steel-400",
            )}
          >
            <span className="mono-label">Sinergia Industrias</span>
            <span className="font-display text-3xl">{index}</span>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
