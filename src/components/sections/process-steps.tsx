"use client";
import { motion, MotionConfig } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";

type Step = {
  number: string;
  code: string;
  title: string;
  body: string;
};

type ProcessStepsProps = {
  title: string;
  eyebrow: string;
  index?: string;
  steps: Step[];
};

export function ProcessSteps({ title, eyebrow, index = "02", steps }: ProcessStepsProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden border-y border-steel-200 bg-steel-50 px-4 py-24">
        {/* Large editorial number */}
        <div
          aria-hidden
          className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 leading-none opacity-[0.035]"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(10rem, 22vw, 18rem)",
            color: "var(--navy)",
            letterSpacing: "-0.05em",
          }}
        >
          {index}
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel index={index} className="mb-5">
                {eyebrow}
              </SectionLabel>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-[clamp(2.4rem,5vw,3.8rem)]">
                {title}
              </h2>
            </div>
            <span className="mono-label text-steel-400">{steps.length} PASOS · PROCESO SISTEMÁTICO</span>
          </div>

          {/* Stepper */}
          <div className="relative">
            {/* Connecting beam */}
            <motion.span
              aria-hidden
              className="absolute left-0 top-[1.375rem] hidden h-px w-full origin-left bg-steel-200 lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              aria-hidden
              className="absolute left-0 top-[1.375rem] hidden h-px w-3/4 origin-left bg-cyan lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ opacity: 0.45 }}
            />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative flex flex-col"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="mono-label text-steel-400">{step.code}</span>
                  </div>

                  <div
                    className="mb-5 flex items-center justify-center size-11 border bg-white shadow-sm transition-shadow duration-300"
                    style={{ borderColor: "oklch(0.28 0.12 255 / 0.22)" }}
                  >
                    <span className="font-mono text-sm font-bold tabular text-navy">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display mb-2.5 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>

                  <div
                    className="mt-5 flex items-center gap-2 border-t pt-3"
                    style={{ borderColor: "oklch(0.88 0.010 240)" }}
                  >
                    <span className="size-1 shrink-0 rounded-full bg-cyan" />
                    <span
                      className="mono-label"
                      style={{ color: "oklch(0.50 0.012 240)", fontSize: "0.58rem" }}
                    >
                      ETAPA.{step.code}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
