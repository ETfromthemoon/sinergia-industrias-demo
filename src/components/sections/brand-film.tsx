"use client";

import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Check, Play, X } from "lucide-react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";

const VIDEO_ID = "Tody2AVL6ys";

const PRINCIPLES = [
  "Uso estratégico de tecnologías de información",
  "Metodologías de procesos alineadas a la Industria 4.0",
  "Enfoque en conocimiento, autoaprendizaje y mejora continua",
] as const;

export function BrandFilmSection() {
  const [isOpen, setIsOpen] = useState(false);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = playButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button, a[href], iframe, [tabindex]:not([tabindex="-1"])',
    );

    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

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
                    className="group flex items-start gap-3 border-t border-steel-200 pt-3 text-sm text-ink-soft"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-cyan-deep transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
                    {principle}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="film-frame mt-14 bg-navy p-2 shadow-[0_36px_90px_-50px_rgba(46,51,82,0.72)] sm:p-3"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5 sm:px-4">
              <span className="mono-label text-cyan">Sinergia Consultores</span>
              <span className="hidden font-mono text-[0.58rem] uppercase tracking-[0.12em] text-white/38 sm:block">
                Procesos inteligentes · Impacto real
              </span>
            </div>

            <button
              ref={playButtonRef}
              type="button"
              onClick={() => setIsOpen(true)}
              className="group relative block aspect-video w-full overflow-hidden bg-carbon text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
              aria-label="Reproducir video corporativo de Sinergia Consultores"
            >
              <Image
                src="/media/sinergia-film-poster.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,18,34,0.76)_0%,rgba(9,18,34,0.2)_52%,rgba(9,18,34,0.35)_100%)] transition-colors duration-500 group-hover:bg-[linear-gradient(90deg,rgba(9,18,34,0.7)_0%,rgba(9,18,34,0.13)_52%,rgba(9,18,34,0.28)_100%)]"
              />
              <span aria-hidden="true" className="film-frame-grid absolute inset-0" />

              <span className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 sm:inset-x-8 sm:bottom-8">
                <span>
                  <span className="mono-label block text-cyan">Película de marca</span>
                  <span className="mt-2 block max-w-md font-display text-3xl leading-none text-white sm:text-5xl">
                    Conoce Sinergia desde dentro.
                  </span>
                </span>

                <span className="relative grid size-14 shrink-0 place-items-center rounded-full border border-white/50 bg-white text-navy transition-all duration-500 group-hover:scale-110 group-hover:border-cyan group-hover:bg-cyan sm:size-20">
                  <span
                    aria-hidden="true"
                    className="absolute -inset-2 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-110"
                  />
                  <Play className="ml-1 size-5 fill-current sm:size-7" />
                </span>
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-[100] grid place-items-center bg-carbon/92 p-3 backdrop-blur-xl sm:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onMouseDown={() => setIsOpen(false)}
              >
                <motion.div
                  ref={dialogRef}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="brand-film-title"
                  onKeyDown={handleDialogKeyDown}
                  onMouseDown={(event) => event.stopPropagation()}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.985 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full max-w-6xl overflow-hidden border border-white/12 bg-navy shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
                    <div>
                      <p className="mono-label text-cyan">Sinergia Consultores</p>
                      <h2 id="brand-film-title" className="sr-only">
                        Video corporativo de Sinergia Consultores
                      </h2>
                    </div>
                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="grid size-10 place-items-center rounded-full border border-white/16 text-white transition-colors hover:border-cyan hover:bg-cyan hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
                      aria-label="Cerrar video"
                    >
                      <X className="size-4" />
                    </button>
                  </div>

                  <div className="aspect-video bg-black">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                      title="Video corporativo de Sinergia Consultores"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="size-full border-0"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </MotionConfig>
  );
}
