"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion, MotionConfig, useReducedMotion } from "motion/react";

const VIDEO_ID = "Tody2AVL6ys";

const PRINCIPLES = [
  "Uso estratégico de tecnologías de información",
  "Metodologías de procesos alineadas a la Industria 4.0",
  "Enfoque en conocimiento, autoaprendizaje y mejora continua",
] as const;

export function BrandFilmSection() {
  const filmRef = useRef<HTMLElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !filmRef.current) return;

    const film = filmRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShouldPlay(true);
        observer.disconnect();
      },
      { rootMargin: "120px 0px" },
    );

    observer.observe(film);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={filmRef}
        className="section-motion-surface relative overflow-hidden border-b border-steel-200 bg-steel-50 px-4 py-24 sm:py-32"
      >
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/media/sinergia-film-poster.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.13] saturate-50"
          />

          {shouldPlay && (
            <div className="absolute inset-0 overflow-hidden opacity-[0.16]">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&playsinline=1&modestbranding=1&rel=0&disablekb=1`}
                title=""
                tabIndex={-1}
                allow="autoplay; encrypted-media"
                className="pointer-events-none absolute left-[105%] top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
                style={{ width: "250vw", height: "140.625vw" }}
              />
            </div>
          )}

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,247,249,0.96)_0%,rgba(246,247,249,0.88)_47%,rgba(246,247,249,0.94)_100%)]" />
          <div className="film-frame-grid absolute inset-0 opacity-[0.16]" />
          <div className="absolute inset-y-0 right-[12%] w-px bg-cyan/15" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
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
                Articulamos tecnología, procesos y conocimiento para ordenar la operación
                y sostener mejoras concretas.
              </p>
              <div className="mt-7 grid gap-3">
                {PRINCIPLES.map((principle) => (
                  <p
                    key={principle}
                    className="group flex items-start gap-3 border-t border-steel-200 pt-3 text-sm text-ink-soft"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-cyan-deep transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
                    {principle}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
