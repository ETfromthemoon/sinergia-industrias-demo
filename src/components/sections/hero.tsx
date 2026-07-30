"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";
import { motion, MotionConfig } from "motion/react";
import { SERVICES, SITE } from "@/content/site";
import { OdooPartnerBadge } from "@/components/ui/odoo-partner-badge";

export function HeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative min-h-[46rem] overflow-hidden bg-carbon text-white sm:min-h-[50rem]">
        <div aria-hidden className="aurora-dark absolute inset-0" />
        <div aria-hidden className="blueprint-grid-dark absolute inset-0 opacity-40" />
        <div aria-hidden className="surface-noise pointer-events-none absolute inset-0" />
        <div aria-hidden className="page-orbits">
          <span className="page-orbit" />
          <span className="page-orbit" />
          <span className="page-orbit" />
        </div>
        <div aria-hidden className="ambient-scan" />

        <div className="editorial-shell relative z-10 grid min-h-[46rem] items-end gap-12 pb-12 pt-32 sm:min-h-[50rem] sm:pb-16 lg:grid-cols-[1.15fr_0.65fr] lg:items-center lg:gap-20 lg:pb-0 lg:pt-24">
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
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-5xl text-[clamp(3.4rem,8.5vw,7rem)] leading-[0.9] text-white"
            >
              Construimos modelos{" "}
              <br />
              <em className="font-normal text-cyan">para el mundo real.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6 }}
              className="mt-8 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg"
            >
              Tecnología, procesos y conocimiento aplicados a desafíos reales de las
              organizaciones.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.27, duration: 0.6 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contacto"
                className="micro-sheen group inline-flex items-center justify-center gap-2 bg-cyan px-6 py-3.5 text-sm font-semibold text-carbon shadow-[0_0_0_rgba(0,194,255,0)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_34px_rgba(0,194,255,0.18)]"
              >
                Evaluar mi proyecto
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
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
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="border-t border-white/16 pt-6 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0"
          >
            <OdooPartnerBadge className="bg-white shadow-lg shadow-black/10" />
            <p className="mt-7 font-display text-3xl leading-[1.08] text-white sm:text-4xl">
              Procesos inteligentes.
              <span className="mt-1 flex items-center gap-3 text-cyan">
                <span className="signal-dot size-2 rounded-full bg-cyan text-cyan" />
                Impacto real.
              </span>
            </p>
            <div className="mt-8 space-y-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center justify-between border-b border-white/10 pb-3 text-sm text-white/56 transition-colors hover:text-white"
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
