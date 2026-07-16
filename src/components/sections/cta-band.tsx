"use client";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

type CtaBandProps = {
  title?: string;
  subhead?: string;
  ctaLabel?: string;
  ctaHref?: string;
  index?: string;
};

export function CtaBand({
  title = "Queremos construir nuevos horizontes junto a ti.",
  subhead = "Una conversación de 30 minutos basta para saber si podemos ayudarte y cómo.",
  ctaLabel = "Conversemos tu proyecto",
  ctaHref = "/contacto",
  index = "05",
}: CtaBandProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden bg-navy-dark px-4 py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid-dark" />
        <div aria-hidden className="grain pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(62% 60% at 82% 18%, oklch(0.60 0.105 208 / 0.13), transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel index={index} tone="accent">
              Hablemos
            </SectionLabel>
          </motion.div>

          <motion.h2
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-steel-300"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5 }}
          >
            {subhead}
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-2 bg-cyan px-8 py-4 text-sm font-semibold text-carbon transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_48px_-8px_oklch(0.60_0.105_208_/_0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep"
            >
              {ctaLabel}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 0%, oklch(0.60 0.105 208 / 0.25) 50%, transparent 100%)" }}
        />
      </section>
    </MotionConfig>
  );
}
