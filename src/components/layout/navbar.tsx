"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS, SERVICES } from "@/content/site";
import { BrandLogo } from "@/components/ui/brand-logo";
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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenus = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        transparent
          ? "border-white/10 bg-carbon/18 text-white backdrop-blur-[2px]"
          : "border-steel-200/80 bg-white/94 text-foreground shadow-[0_16px_44px_-38px_rgba(46,51,82,0.65)] backdrop-blur-xl",
      )}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="editorial-shell grid h-[4.75rem] grid-cols-[auto_1fr_auto] items-center gap-5">
        <Link
          href="/"
          onClick={closeMenus}
          className={cn(
            "relative z-10 flex items-center rounded-sm transition-all",
            transparent ? "bg-white px-3 py-2 shadow-lg shadow-black/10" : "py-2",
          )}
          aria-label="Sinergia Consultores, inicio"
        >
          <BrandLogo priority className="w-[9.6rem] xl:w-[10.75rem]" />
        </Link>

        <nav
          className="hidden items-center justify-self-center gap-5 xl:gap-7 lg:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenus}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "whitespace-nowrap text-[0.78rem] font-semibold transition-colors",
                transparent ? "text-white/72 hover:text-white" : "text-ink-soft hover:text-navy",
                pathname === link.href && (transparent ? "text-white" : "text-navy"),
              )}
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            className={cn(
              "flex items-center gap-1.5 whitespace-nowrap text-[0.78rem] font-semibold transition-colors",
              transparent ? "text-white/72 hover:text-white" : "text-ink-soft hover:text-navy",
            )}
            aria-expanded={servicesOpen}
            aria-controls="solutions-megamenu"
            onMouseEnter={() => setServicesOpen(true)}
            onFocus={() => setServicesOpen(true)}
            onClick={() => setServicesOpen(true)}
          >
            Soluciones
            <ChevronDown className={cn("size-3.5 transition-transform", servicesOpen && "rotate-180")} />
          </button>
        </nav>

        <div className="relative z-10 flex items-center justify-end gap-2">
          <Link
            href="/contacto"
            onClick={closeMenus}
            className={cn(
              "hidden items-center gap-2 px-5 py-2.5 text-xs font-semibold transition-all sm:inline-flex",
              transparent
                ? "bg-white text-navy hover:bg-cyan"
                : "bg-navy text-white hover:-translate-y-0.5 hover:bg-navy-dark",
            )}
          >
            Hablemos
            <ArrowUpRight className="size-3.5" />
          </Link>
          <button
            type="button"
            className={cn(
              "grid size-11 place-items-center lg:hidden",
              transparent ? "text-white" : "text-foreground",
            )}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            id="solutions-megamenu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full hidden border-y border-steel-200 bg-white text-foreground shadow-[0_32px_80px_-42px_rgba(46,51,82,0.5)] lg:block"
          >
            <div className="editorial-shell grid grid-cols-[0.55fr_1.45fr] gap-10 py-7">
              <div className="border-r border-steel-200 pr-10">
                <p className="mono-label text-cyan-deep">Capacidades conectadas</p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  Estrategia, procesos y tecnología articulados para resolver desafíos reales.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-3 xl:grid-cols-4">
                {SERVICES.map((service, index) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeMenus}
                    className="group relative min-w-0 border-l border-steel-200 px-5 py-2 transition-colors hover:bg-steel-50"
                  >
                    <span className="font-mono text-[0.62rem] text-cyan-deep">
                      {String(index + 1).padStart(2, "0")} / {service.eyebrow}
                    </span>
                    <span className="mt-3 block text-sm font-bold text-navy">{service.shortTitle}</span>
                    <span className="mt-1.5 block text-xs leading-relaxed text-muted-foreground">
                      {service.outcome}
                    </span>
                    <ArrowUpRight className="mt-4 size-4 text-steel-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-deep" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="min-h-[calc(100dvh-4.75rem)] max-h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-steel-200 bg-white text-foreground lg:hidden"
          >
            <nav className="editorial-shell py-5" aria-label="Navegación móvil">
              <p className="mono-label mb-2 text-steel-400">Explorar</p>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenus}
                  className="flex items-center justify-between border-b border-steel-100 py-3 text-sm font-semibold"
                >
                  {link.label}
                  <ArrowUpRight className="size-4 text-steel-400" />
                </Link>
              ))}
              <p className="mono-label mb-2 mt-6 text-cyan-deep">Soluciones</p>
              {SERVICES.map((service, index) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={closeMenus}
                  className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-steel-100 py-3"
                >
                  <span className="font-mono text-[0.65rem] text-cyan-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold">{service.shortTitle}</span>
                  <ArrowUpRight className="size-4 text-steel-400" />
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={closeMenus}
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
