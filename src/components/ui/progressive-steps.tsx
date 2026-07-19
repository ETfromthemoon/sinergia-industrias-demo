"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

type Step = {
  number: string;
  code?: string;
  title: string;
  body: string;
  duration?: string;
};

type ProgressiveStepsProps = {
  title: string;
  eyebrow: string;
  index?: string;
  steps: Step[];
  variant?: "light" | "dark";
};

export function ProgressiveSteps({
  title,
  eyebrow,
  index = "02",
  steps,
  variant = "light",
}: ProgressiveStepsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isDark = variant === "dark";
  const activeStep = steps[activeIdx];

  const goTo = useCallback(
    (i: number) => {
      setActiveIdx(i);
    },
    []
  );

  useEffect(() => {
    if (isPaused || steps.length <= 1) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, steps.length]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        className={cn(
          "relative overflow-hidden px-4 py-24",
          isDark
            ? "border-y border-white/10 bg-navy-dark"
            : "border-y border-steel-200 bg-steel-50"
        )}
      >
        {isDark && (
          <>
            <div className="pointer-events-none absolute inset-0 blueprint-grid-dark" />
            <div className="pointer-events-none absolute inset-0 grain" />
          </>
        )}

        <div className="relative mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel
                index={index}
                tone={isDark ? "dark" : "light"}
                className="mb-5"
              >
                {eyebrow}
              </SectionLabel>
              <h2
                className={cn(
                  "font-display text-4xl font-bold tracking-tight sm:text-[clamp(2.4rem,5vw,3.8rem)]",
                  isDark ? "text-white" : "text-foreground"
                )}
              >
                {title}
              </h2>
            </div>
            <span className={cn("mono-label", isDark ? "text-steel-400" : "text-steel-400")}>
              {steps.length} PASOS · AUTO-AVANCE
            </span>
          </div>

          {/* Progress bar */}
          <div className="mb-10">
            <div
              className={cn(
                "h-1 w-full",
                isDark ? "bg-white/10" : "bg-steel-200"
              )}
            >
              <motion.div
                className="h-full bg-cyan"
                initial={{ width: 0 }}
                animate={{
                  width: `${((activeIdx + 1) / steps.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
              />
            </div>
          </div>

          <div
            className="grid gap-0 lg:grid-cols-[280px_1fr] lg:gap-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Thumbnails column — collapsed steps */}
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => {
                const isActive = i === activeIdx;
                return (
                  <motion.button
                    key={step.number}
                    onClick={() => goTo(i)}
                    className={cn(
                      "group relative flex items-center gap-4 border-l-2 px-5 py-4 text-left transition-colors",
                      isActive
                        ? isDark
                          ? "border-cyan bg-cyan/5"
                          : "border-navy bg-white"
                        : isDark
                          ? "border-transparent hover:border-white/15 hover:bg-white/[0.03]"
                          : "border-transparent hover:border-steel-300 hover:bg-white/60"
                    )}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Step number */}
                    <motion.span
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center border text-sm font-bold font-mono tabular",
                        isActive
                          ? isDark
                            ? "border-cyan text-cyan"
                            : "border-navy text-navy"
                          : isDark
                            ? "border-white/15 text-white/50"
                            : "border-steel-200 text-steel-400"
                      )}
                      animate={
                        isActive
                          ? { scale: [1, 1.1, 1], transition: { duration: 0.4 } }
                          : {}
                      }
                    >
                      {step.number}
                    </motion.span>

                    <div className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "block font-display text-sm font-semibold truncate",
                          isActive
                            ? isDark
                              ? "text-white"
                              : "text-navy"
                            : isDark
                              ? "text-white/60"
                              : "text-muted-foreground"
                        )}
                      >
                        {step.title}
                      </span>
                      {step.duration && isActive && (
                        <span className="mono-label text-steel-400">{step.duration}</span>
                      )}
                    </div>

                    {/* Active indicator dot */}
                    {isActive && (
                      <motion.span
                        layoutId="step-active-dot"
                        className="size-2 shrink-0 rounded-full bg-cyan"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Expanded content panel */}
            <div className="relative mt-8 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: EASE_OUT }}
                  className={cn(
                    "relative p-8 lg:p-10",
                    isDark
                      ? "border border-white/10 bg-white/[0.03]"
                      : "border border-steel-200 bg-white"
                  )}
                >
                  {/* Decorative corner ticks — consistent with blueprint-frame */}
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-0 size-3 -translate-x-px -translate-y-px"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke={isDark ? "oklch(1 0 0 / 0.2)" : "oklch(0.75 0.010 240)"}
                    strokeWidth="1.5"
                  >
                    <path d="M12 1V0H0v1" />
                    <path d="M12 1V0H0v1" />
                  </svg>
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 right-0 size-3 translate-x-px translate-y-px"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke={isDark ? "oklch(1 0 0 / 0.2)" : "oklch(0.75 0.010 240)"}
                    strokeWidth="1.5"
                  >
                    <path d="M0 11v1h12v-1" />
                  </svg>

                  {/* Code label */}
                  {activeStep.code && (
                    <span
                      className={cn(
                        "mono-label mb-4 inline-block",
                        isDark ? "text-steel-400" : "text-steel-400"
                      )}
                    >
                      ETAPA.{activeStep.code}
                    </span>
                  )}

                  {/* Large step number — editorial */}
                  <motion.span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute right-6 top-6 select-none font-display font-bold leading-none",
                      isDark ? "text-white/[0.04]" : "text-steel-100"
                    )}
                    style={{ fontSize: "clamp(80px, 10vw, 130px)" }}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                  >
                    {activeStep.number}
                  </motion.span>

                  <h3
                    className={cn(
                      "font-display relative z-10 mb-4 text-2xl font-bold",
                      isDark ? "text-white" : "text-navy"
                    )}
                  >
                    {activeStep.title}
                  </h3>

                  <p
                    className={cn(
                      "relative z-10 max-w-lg text-base leading-relaxed",
                      isDark ? "text-steel-300" : "text-muted-foreground"
                    )}
                  >
                    {activeStep.body}
                  </p>

                  {/* Duration badge */}
                  {activeStep.duration && (
                    <motion.span
                      className={cn(
                        "mt-6 inline-flex items-center gap-2 border px-3 py-1.5 mono-label",
                        isDark
                          ? "border-white/15 text-steel-300"
                          : "border-steel-200 text-steel-400"
                      )}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <span className="size-1.5 rounded-full bg-cyan" />
                      Duración estimada: {activeStep.duration}
                    </motion.span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
