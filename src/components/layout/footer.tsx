"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { OdooLogo } from "@/components/ui/odoo-logo";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { EASE_OUT } from "@/lib/motion";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Ley REP", href: "/ley-rep" },
  { label: "Implementación Odoo", href: "/implementacion-odoo" },
  { label: "Levantamiento de Procesos", href: "/levantamiento-de-procesos" },
  { label: "Levantamiento de Datos", href: "/levantamiento-de-datos" },
  { label: "Casos de Éxito", href: "/casos-de-exito" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-dark px-4 pt-16 pb-10">
      {/* Top divider — gradient wave */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent 0%, oklch(0.60 0.105 208 / 0.35) 20%, oklch(0.60 0.105 208 / 0.35) 80%, transparent 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 50% at 88% 0%, oklch(0.60 0.105 208 / 0.08), transparent 70%)" }}
      />
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE_OUT }}
          >
            <div className="mb-4 flex items-center gap-2.5">
              <img
                src="/sinergia-logo.png"
                alt="Sinergia Industrias"
                className="h-7 w-auto brightness-0 invert"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-steel-400">
              Ingeniería de procesos. Tecnología que funciona. Cumplimiento que no falla.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 mono-label text-steel-400">
              <OdooLogo size={14} />
              Ready Partner Oficial Odoo
              <AnimatedIcon name="shield" size={14} tone="white" className="opacity-60" />
            </p>
          </motion.div>

          {/* nav */}
          <motion.nav
            aria-label="Enlaces del sitio"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.55, ease: EASE_OUT }}
          >
            <p className="mono-label mb-5 text-white/30">Navegación</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-steel-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.55, ease: EASE_OUT }}
          >
            <p className="mono-label mb-5 text-white/30">Contacto</p>
            <ul className="space-y-3 text-sm text-steel-400">
              <li>
                <a
                  href="mailto:info@sinergiaindustrias.cl"
                  className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep"
                >
                  info@sinergiaindustrias.cl
                </a>
              </li>
              <li>
                <a
                  href="tel:+56994584617"
                  className="tabular transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep"
                >
                  +56 9 9458 4617
                </a>
              </li>
              <li>Calle Limache 3421, of. 724</li>
              <li>Viña del Mar, Chile</li>
              <li className="pt-1">
                <a
                  href="https://www.linkedin.com/company/sinergia-industrias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep"
                >
                  LinkedIn
                  <ExternalLink className="size-3" />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col gap-2 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <p className="mono-label text-white/30">&copy; {new Date().getFullYear()} SINERGIA INDUSTRIAS SPA</p>
          <p className="mono-label text-white/20">Viña del Mar, Chile</p>
        </motion.div>
      </div>
    </footer>
  );
}
