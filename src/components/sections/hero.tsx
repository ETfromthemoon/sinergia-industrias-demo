"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";
import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { SERVICES, SITE } from "@/content/site";
import { OdooPartnerBadge } from "@/components/ui/odoo-partner-badge";
import { useMediaQuery, useSaveData } from "@/lib/use-media-query";

const VIDEO_ID = "Tody2AVL6ys";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const saveData = useSaveData();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const canPlayVideo = !prefersReducedMotion && !saveData && isDesktop;
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!canPlayVideo) return;

    const mountVideo = () => setVideoReady(true);
    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(mountVideo, { timeout: 1800 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(mountVideo, 650);
    return () => window.clearTimeout(timeoutId);
  }, [canPlayVideo]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative min-h-[46rem] overflow-hidden bg-carbon text-white sm:min-h-[50rem]">
        <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
          {/* The poster remains the mobile and reduced-motion fallback. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt=""
            className="size-full object-cover"
          />
        </div>
        {videoReady ? (
          <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&fs=0&modestbranding=1&playsinline=1`}
              allow="autoplay; encrypted-media"
              title="Video corporativo de fondo"
              tabIndex={-1}
              className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
              style={{ width: "177.78vh", pointerEvents: "none" }}
            />
          </div>
        ) : null}
        <div aria-hidden className="absolute inset-0 z-[1] bg-carbon/84" />
        <div aria-hidden className="absolute inset-0 z-[1] bg-gradient-to-r from-carbon via-carbon/74 to-carbon/58" />
        <div aria-hidden className="aurora-dark absolute inset-0 z-[2]" />
        <div aria-hidden className="surface-noise pointer-events-none absolute inset-0 z-[3]" />
        <div aria-hidden className="page-orbits z-[3]">
          <span className="page-orbit" />
          <span className="page-orbit" />
          <span className="page-orbit" />
        </div>

        <div className="editorial-shell relative z-10 grid min-h-[46rem] items-end gap-12 pb-12 pt-32 sm:min-h-[50rem] sm:pb-16 lg:grid-cols-[1.15fr_0.65fr] lg:items-center lg:gap-20 lg:pb-0 lg:pt-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="eyebrow text-cyan before:bg-cyan"
            >
              Ingeniería aplicada · Chile
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-4xl text-[clamp(3.6rem,9vw,7.4rem)] leading-[0.88] text-white"
            >
              Tu operación,{" "}
              <br />
              <em className="font-normal text-cyan">bajo control.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-white/68 sm:text-lg"
            >
              Ordenamos procesos, implementamos Odoo y resolvemos el cumplimiento
              ambiental para que tu empresa pueda operar y decidir con claridad.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.27, duration: 0.6 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-2 bg-cyan px-6 py-3.5 text-sm font-semibold text-carbon transition-colors hover:bg-white"
              >
                Evaluar mi proyecto
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/casos-de-exito"
                className="inline-flex items-center justify-center gap-2 border border-white/18 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Ver experiencia
                <ArrowDownRight className="size-4" />
              </Link>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="border-t border-white/16 pt-6 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0"
          >
            <OdooPartnerBadge className="bg-white shadow-lg shadow-black/10" />
            <p className="mt-6 font-display text-2xl leading-snug text-white/90 sm:text-3xl">
              “La mejor solución no es la más compleja. Es la que el equipo puede
              sostener todos los días.”
            </p>
            <div className="mt-8 space-y-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center justify-between border-b border-white/10 pb-3 text-sm text-white/56 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Check className="size-3.5 text-cyan" />
                    {service.shortTitle}
                  </span>
                  <ArrowRight className="size-3.5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex text-xs font-semibold text-cyan hover:text-white"
            >
              Respuesta directa por WhatsApp
            </a>
          </motion.aside>
        </div>
      </section>
    </MotionConfig>
  );
}
