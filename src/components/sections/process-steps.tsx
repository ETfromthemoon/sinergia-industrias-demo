"use client";

import { motion, MotionConfig } from "motion/react";

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
  variant?: "light" | "dark";
};

export function ProcessSteps({ title, eyebrow, steps }: ProcessStepsProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="section-motion-surface bg-steel-50 py-20 sm:py-28">
        <div className="editorial-shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="mt-7 text-5xl leading-[0.98] sm:text-6xl">{title}</h2>
            </div>
            <div>
              {steps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.5 }}
                  className="grid gap-4 border-t border-steel-200 py-7 sm:grid-cols-[4rem_0.55fr_1fr]"
                >
                  <span className="font-mono text-xs text-cyan-deep">{step.number}</span>
                  <h3 className="text-3xl">{step.title}</h3>
                  <div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
