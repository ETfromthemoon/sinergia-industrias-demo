import Link from "next/link";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { OdooLogo } from "@/components/ui/odoo-logo";

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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 50% at 88% 0%, oklch(0.68 0.14 205 / 0.06), transparent 70%)" }}
      />
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
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
              <CheckCircle2 className="size-3.5 text-white/60" />
            </p>
          </div>

          {/* nav */}
          <nav aria-label="Enlaces del sitio">
            <p className="mono-label mb-5 text-white/30">Navegación</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-steel-400 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <p className="mono-label mb-5 text-white/30">Contacto</p>
            <ul className="space-y-3 text-sm text-steel-400">
              <li>
                <a href="mailto:info@sinergiaindustrias.cl" className="transition-colors hover:text-white">
                  info@sinergiaindustrias.cl
                </a>
              </li>
              <li>
                <a href="tel:+56994584617" className="tabular transition-colors hover:text-white">
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
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  LinkedIn
                  <ExternalLink className="size-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-label text-white/30">© {new Date().getFullYear()} SINERGIA INDUSTRIAS SPA</p>
          <p className="mono-label text-white/20">Viña del Mar, Chile</p>
        </div>
      </div>
    </footer>
  );
}
