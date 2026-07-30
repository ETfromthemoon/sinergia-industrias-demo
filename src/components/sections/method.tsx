"use client";

import { motion, MotionConfig } from "motion/react";
import { METHOD } from "@/content/site";

export function MethodSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="metodo" className="overflow-hidden bg-steel-50 py-20 sm:py-28">
        <div className="editorial-shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">Cómo trabajamos</p>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                La metodología se adapta al desafío, pero el principio no cambia:
                comprender antes de proponer y acompañar hasta que funcione.
              </p>
            </div>
            <div>
              <h2 className="max-w-3xl text-5xl leading-[0.98] sm:text-6xl">
                Menos promesas.
                <br />
                <em className="font-normal text-navy">Más oficio.</em>
              </h2>

              <div className="mt-14">
                {METHOD.map((step, index) => (
                  <motion.article
                    key={step.number}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.55 }}
                    className="group grid gap-4 border-t border-steel-200 py-7 transition-colors duration-300 hover:bg-white/70 sm:grid-cols-[4rem_0.6fr_1fr] sm:px-4"
                  >
                    <span className="font-mono text-xs text-cyan-deep transition-transform duration-300 group-hover:translate-x-1">
                      {step.number}
                    </span>
                    <h3 className="text-3xl text-foreground transition-transform duration-300 group-hover:translate-x-1">
                      {step.title}
                    </h3>
                    <div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                      <p className="mono-label mt-4 text-navy">{step.deliverable}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
