"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS, SERVICES } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const transparent = pathname === "/" && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        transparent
          ? "border-white/10 bg-transparent text-white"
          : "border-steel-200/80 bg-[color:color-mix(in_oklab,var(--paper)_92%,transparent)] text-foreground shadow-[0_14px_40px_-34px_oklch(0.15_0.03_230/0.45)] backdrop-blur-xl",
      )}
    >
      <div className="editorial-shell flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label="Sinergia Industrias, inicio">
          <span
            className={cn(
              "grid size-9 place-items-center rounded-full border font-mono text-[0.65rem] font-semibold transition-colors",
              transparent ? "border-white/30 bg-white/5 text-white" : "border-navy/20 bg-navy text-white",
            )}
          >
            SI
          </span>
          <span className="font-sans text-sm font-semibold tracking-[-0.02em] sm:text-[0.95rem]">
            Sinergia Industrias
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "text-[0.82rem] font-medium transition-colors",
                transparent ? "text-white/72 hover:text-white" : "text-ink-soft hover:text-navy",
                pathname === link.href && (transparent ? "text-white" : "text-navy"),
              )}
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "flex items-center gap-1.5 text-[0.82rem] font-medium transition-colors",
                transparent ? "text-white/72 hover:text-white" : "text-ink-soft hover:text-navy",
              )}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Soluciones
              <ChevronDown className={cn("size-3.5 transition-transform", servicesOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full pt-5"
                >
                  <div className="w-[30rem] border border-steel-200 bg-white p-2 shadow-elevated">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className="group grid grid-cols-[6rem_1fr_auto] items-center gap-4 border-b border-steel-100 px-4 py-4 last:border-0 hover:bg-steel-50"
                      >
                        <span className="mono-label text-cyan-deep">{service.eyebrow}</span>
                        <span>
                          <span className="block text-sm font-semibold text-foreground">{service.shortTitle}</span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                            {service.outcome}
                          </span>
                        </span>
                        <ArrowUpRight className="size-4 text-steel-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contacto"
            className={cn(
              "hidden items-center gap-2 px-5 py-2.5 text-xs font-semibold transition-colors sm:inline-flex",
              transparent ? "bg-white text-foreground hover:bg-cyan" : "bg-navy text-white hover:bg-navy-dark",
            )}
          >
            Hablemos
            <ArrowUpRight className="size-3.5" />
          </Link>
          <button
            type="button"
            className={cn("grid size-10 place-items-center lg:hidden", transparent ? "text-white" : "text-foreground")}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-steel-200 bg-white text-foreground lg:hidden"
          >
            <nav className="editorial-shell py-5" aria-label="Navegación móvil">
              <p className="mono-label mb-3 text-steel-400">Navegación</p>
              {[...NAV_LINKS, ...SERVICES.map(({ shortTitle: label, href }) => ({ label, href }))].map(
                (link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between border-b border-steel-100 py-3.5 text-sm font-medium"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4 text-steel-400" />
                  </Link>
                ),
              )}
              <Link
                href="/contacto"
                className="mt-5 flex items-center justify-center gap-2 bg-navy px-5 py-3.5 text-sm font-semibold text-white"
              >
                Hablemos de tu proyecto
                <ArrowUpRight className="size-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
