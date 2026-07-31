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
  const filmRef = useRef<HTMLDivElement>(null);
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
      <section className="section-motion-surface bg-steel-50 px-4 pb-16 pt-24 sm:pb-20 sm:pt-32">
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

      <div
        ref={filmRef}
        aria-hidden="true"
        className="decorative-film-band relative h-[34svh] min-h-64 overflow-hidden border-y border-navy/15 bg-carbon sm:h-[40svh] sm:min-h-80"
      >
        <Image
          src="/media/sinergia-film-poster.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        {shouldPlay && (
          <div className="absolute inset-0 overflow-hidden">
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

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,12,25,0.78)_0%,rgba(5,12,25,0.37)_42%,rgba(5,12,25,0.7)_100%)]" />
        <div className="film-frame-grid absolute inset-0 opacity-55" />
        <div className="absolute inset-x-[8%] top-1/2 h-px bg-cyan/30" />
        <div className="absolute inset-y-0 left-[22%] w-px bg-white/10" />
        <div className="absolute inset-y-0 right-[17%] w-px bg-white/8" />
        <div className="surface-noise pointer-events-none absolute inset-0 opacity-[0.065]" />
      </div>
    </MotionConfig>
  );
}
