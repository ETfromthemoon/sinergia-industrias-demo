"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";
import { motion, MotionConfig } from "motion/react";
import { SERVICES, SITE } from "@/content/site";
import { OdooPartnerBadge } from "@/components/ui/odoo-partner-badge";

export function HeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        className="cinematic-hero relative min-h-[100svh] overflow-hidden bg-carbon text-white lg:h-[100svh] lg:min-h-[42rem]"
      >
        <div aria-hidden="true" className="cinematic-field absolute inset-0" />
        <div aria-hidden="true" className="blueprint-grid-dark absolute inset-0 opacity-35" />

        <svg
          aria-hidden="true"
          className="cinematic-flow absolute inset-0 size-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path d="M-80 690C180 610 270 330 520 350S820 660 1080 520s280-330 480-270" />
          <path d="M-60 760C220 660 330 430 570 440s350 260 610 100 240-270 390-250" />
          <path d="M120 950C180 640 420 600 610 620s310 180 520 10 200-390 430-430" />
          <path d="M460-100C390 150 560 250 760 260s390-90 510 90 40 370 260 470" />
        </svg>

        <div aria-hidden="true" className="cinematic-aperture">
          <span className="cinematic-orbit cinematic-orbit--outer">
            <span className="cinematic-orbit-signal cinematic-orbit-signal--primary" />
          </span>
          <span className="cinematic-orbit cinematic-orbit--middle">
            <span className="cinematic-orbit-signal cinematic-orbit-signal--secondary" />
          </span>
          <span className="cinematic-orbit cinematic-orbit--inner" />
        </div>
        <div aria-hidden="true" className="surface-noise pointer-events-none absolute inset-0" />

        <div className="editorial-shell relative z-10 grid min-h-[100svh] content-end gap-8 pb-8 pt-28 sm:gap-10 sm:pb-10 lg:h-full lg:min-h-0 lg:grid-cols-[1.18fr_0.62fr] lg:content-center lg:items-center lg:gap-16 lg:pb-8 lg:pt-20 xl:gap-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="eyebrow text-cyan before:bg-cyan"
            >
              Tecnología · Procesos · Conocimiento
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-5xl text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.88] text-white sm:mt-7"
            >
              Construimos modelos
              <br />
              <em className="font-normal text-cyan">para el mundo real.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.65 }}
              className="mt-6 max-w-2xl text-sm leading-relaxed text-white/68 sm:mt-8 sm:text-lg"
            >
              Tecnología, procesos y conocimiento aplicados a desafíos reales de las
              organizaciones.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.65 }}
              className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
            >
              <Link
                href="/contacto"
                className="micro-sheen group inline-flex items-center justify-center gap-2 bg-cyan px-6 py-3.5 text-sm font-semibold text-carbon shadow-[0_0_0_rgba(0,194,255,0)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_34px_rgba(0,194,255,0.18)]"
              >
                Evaluar mi proyecto
                <ArrowRight className="relative z-[2] size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/casos-de-exito"
                className="group inline-flex items-center justify-center gap-2 border border-white/18 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
              >
                Ver experiencia
                <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.24, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="cinematic-console border-t border-white/16 pt-5 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0"
          >
            <OdooPartnerBadge className="bg-white shadow-lg shadow-black/10" />
            <p className="mt-5 font-display text-2xl leading-[1.08] text-white sm:mt-7 sm:text-4xl">
              Procesos inteligentes.
              <span className="mt-1 flex items-center gap-3 text-cyan">
                <span className="signal-dot size-2 rounded-full bg-cyan text-cyan" />
                Impacto real.
              </span>
            </p>

            <div className="mt-8 hidden space-y-3 lg:block">
              {SERVICES.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center justify-between border-b border-white/10 pb-3 text-sm text-white/72 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Check className="size-3.5 text-cyan transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
                    {service.shortTitle}
                  </span>
                  <ArrowRight className="size-3.5 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-0 group-hover:opacity-100" />
                </Link>
              ))}
            </div>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 hidden text-xs font-semibold text-cyan transition-colors hover:text-white lg:inline-flex"
            >
              Respuesta directa por WhatsApp
            </a>
          </motion.aside>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-white/34 lg:flex"
        >
          <span className="cinematic-scroll-line h-10 w-px overflow-hidden bg-white/12" />
        </div>
      </section>
    </MotionConfig>
  );
}
