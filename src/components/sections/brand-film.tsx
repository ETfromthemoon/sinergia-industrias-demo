"use client";

import { Check } from "lucide-react";
import { motion, MotionConfig } from "motion/react";

const VIDEO_ID = "Tody2AVL6ys";

const PRINCIPLES = [
  "Uso estratégico de tecnologías de información",
  "Metodologías de procesos alineadas a la Industria 4.0",
  "Enfoque en conocimiento, autoaprendizaje y mejora continua",
] as const;

export function BrandFilmSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="section-motion-surface border-b border-steel-200 bg-steel-50 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">La solución</p>
              <h2 className="mt-7 text-4xl leading-[1.02] text-navy sm:text-5xl">
                Diseñamos e implementamos soluciones de transformación digital que
                optimizan procesos y generan impacto real.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Sinergia integra tecnología, procesos y conocimiento para transformar
                organizaciones de manera sostenible y eficiente.
              </p>
              <div className="mt-7 grid gap-3">
                {PRINCIPLES.map((principle) => (
                  <p
                    key={principle}
                    className="flex items-start gap-3 border-t border-steel-200 pt-3 text-sm text-ink-soft"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-cyan-deep" />
                    {principle}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 border border-navy/15 bg-navy p-2 shadow-[0_36px_90px_-50px_rgba(46,51,82,0.72)] sm:p-3"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5 sm:px-4">
              <span className="mono-label text-cyan">Sinergia Consultores</span>
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-white/38">
                Procesos inteligentes · Impacto real
              </span>
            </div>
            <div className="aspect-video overflow-hidden bg-carbon">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&playsinline=1`}
                title="Video corporativo de Sinergia Consultores"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="size-full border-0"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
