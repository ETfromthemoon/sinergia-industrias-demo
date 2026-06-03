import Link from "next/link";
import { ExternalLink } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Ley REP", href: "#servicios" },
  { label: "Implementación Odoo", href: "#servicios" },
  { label: "Procesos", href: "#servicios" },
  { label: "Nosotros", href: "#metodo" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10 py-14 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-white text-xs font-bold font-mono">
                SI
              </span>
              <span className="font-display text-base font-semibold text-white">
                Sinergia Industrias
              </span>
            </div>
            <p className="text-sm text-steel-400 leading-relaxed max-w-xs">
              Ingeniería de procesos. Tecnología que funciona.
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
              Ready Partner Oficial Odoo
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
              Servicios
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-steel-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
              Contacto
            </p>
            <ul className="space-y-2.5 text-sm text-steel-400">
              <li>
                <a href="mailto:info@sinergiaindustrias.cl" className="hover:text-white transition-colors">
                  info@sinergiaindustrias.cl
                </a>
              </li>
              <li>
                <a href="tel:+56994584617" className="hover:text-white transition-colors">
                  +56 9 9458 4617
                </a>
              </li>
              <li>Calle Limache 3421, Reitz II of. 724</li>
              <li>Viña del Mar, Chile</li>
              <li className="pt-1">
                <a
                  href="https://www.linkedin.com/company/sinergia-industrias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  LinkedIn
                  <ExternalLink className="size-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Sinergia Industrias SpA. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/20">Viña del Mar, Chile</p>
        </div>
      </div>
    </footer>
  );
}
