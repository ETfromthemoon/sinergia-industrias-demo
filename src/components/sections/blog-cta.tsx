"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";

export function BlogCta() {
  return (
    <>
      {/* Divider with animated cyan accent */}
      <div className="mt-20 mb-12 flex items-center gap-4">
        <div className="h-px flex-1 bg-steel-200" />
        <motion.span
          className="size-1.5 rounded-full bg-cyan shrink-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        />
        <div className="h-px w-16 bg-cyan/30" />
      </div>

      <motion.div
        className="relative border border-steel-200 bg-white p-8 sm:p-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        {/* Corner ticks */}
        <svg aria-hidden className="pointer-events-none absolute left-0 top-0 size-3 -translate-x-px -translate-y-px" viewBox="0 0 12 12" fill="none" stroke="oklch(0.75 0.010 240)" strokeWidth="1.5">
          <path d="M12 1V0H0v1" />
        </svg>
        <svg aria-hidden className="pointer-events-none absolute bottom-0 right-0 size-3 translate-x-px translate-y-px" viewBox="0 0 12 12" fill="none" stroke="oklch(0.75 0.010 240)" strokeWidth="1.5">
          <path d="M0 11v1h12v-1" />
        </svg>

        <span className="mono-label text-steel-400 mb-3 block">CONTACTO</span>

        <p className="font-display text-2xl font-bold text-navy mb-3">
          ¿Conversemos?
        </p>

        <p className="text-steel-500 text-sm leading-relaxed max-w-md mx-auto mb-8">
          En Sinergia Industrias ayudamos a empresas chilenas con cumplimiento REP,
          ERP Odoo y procesos industriales. Escríbenos y coordinamos una reunión sin costo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-2 bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            Agendar reunión
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="mailto:info@sinergiaindustrias.cl"
            className="text-sm text-steel-500 hover:text-navy transition-colors px-3 py-2.5"
          >
            info@sinergiaindustrias.cl
          </a>
        </div>
      </motion.div>
    </>
  );
}
