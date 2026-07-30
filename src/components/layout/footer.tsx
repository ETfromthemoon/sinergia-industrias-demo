import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE } from "@/content/site";
import { BrandLogo } from "@/components/ui/brand-logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-carbon-2 text-white">
      <div aria-hidden className="surface-noise pointer-events-none absolute inset-0" />
      <div className="editorial-shell relative py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div>
            <div className="inline-flex bg-white px-4 py-3">
              <BrandLogo className="w-[11.5rem]" />
            </div>
            <h2 className="mt-8 max-w-xl text-4xl leading-[1.02] text-white sm:text-5xl">
              Construimos modelos para{" "}
              <em className="font-normal text-cyan">el mundo real.</em>
            </h2>
            <p className="mono-label mt-5 text-white/45">Procesos inteligentes. Impacto real.</p>
            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 border-b border-cyan pb-1 text-sm font-semibold text-white"
            >
              Iniciar una conversación
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div>
            <p className="mono-label mb-5 text-white/35">Explorar</p>
            <ul className="space-y-3">
              {[...NAV_LINKS, { label: "Contacto", href: "/contacto" }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label mb-5 text-white/35">Soluciones</p>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-8 py-10 text-sm text-white/55 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mono-label mb-2 text-white/30">Email</p>
            <a href={`mailto:${SITE.email}`} className="hover:text-white">
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="mono-label mb-2 text-white/30">Teléfono</p>
            <a href={SITE.phoneHref} className="hover:text-white">
              {SITE.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="mono-label mb-2 text-white/30">Oficina</p>
            <p>{SITE.address}</p>
            <p>{SITE.locality}, {SITE.country}</p>
          </div>
          <div>
            <p className="mono-label mb-2 text-white/30">Red</p>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white">
              LinkedIn
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-7 text-xs text-white/30 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName}</p>
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
            <p>Viña del Mar · Proyectos en Chile</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
