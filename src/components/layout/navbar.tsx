"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const MAIN_LINKS = [
  { label: "Casos de éxito", href: "/casos-de-exito" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
];

const SOLUTIONS_LINKS = [
  { label: "Ley REP", href: "/ley-rep" },
  { label: "Implementación Odoo", href: "/implementacion-odoo" },
  { label: "Levantamiento de procesos", href: "/levantamiento-de-procesos" },
  { label: "Levantamiento de datos", href: "/levantamiento-de-datos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  };

  // Close the "Soluciones" dropdown on outside click or Escape,
  // so keyboard and mouse users both get predictable dismiss behavior.
  useEffect(() => {
    if (!solutionsOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSolutionsOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [solutionsOpen]);

  const linkCls = (active?: boolean) =>
    cn(
      "group relative flex items-center gap-1.5 text-sm transition-colors",
      scrolled || !isHome
        ? active ? "text-navy font-semibold" : "text-muted-foreground hover:text-foreground"
        : "text-white/70 hover:text-white"
    );

  const underlineCls = (active?: boolean) =>
    cn(
      "pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-200 group-hover:scale-x-100",
      active && "scale-x-100"
    );

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled || !isHome
          ? "glass-light"
          : "border-white/10 bg-transparent"
      )}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* logo */}
        <Link href="/" className="group flex items-center">
          <img
            src="/sinergia-logo.png"
            alt="Sinergia Industrias"
            className={cn(
              "h-8 w-auto transition-all duration-300",
              scrolled || !isHome
                ? "brightness-0"
                : "brightness-0 invert"
            )}
          />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
          {/* Solutions dropdown */}
          <div
            className="relative"
            ref={solutionsRef}
            onMouseEnter={() => setSolutionsOpen(true)}
          >
            <button
              type="button"
              className={cn(
                linkCls(),
                "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep"
              )}
              aria-haspopup="menu"
              aria-expanded={solutionsOpen}
              onClick={() => setSolutionsOpen((open) => !open)}
            >
              Soluciones
              <svg className={cn("ml-1 size-3 transition-transform", solutionsOpen && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              <span className={underlineCls()} />
            </button>
            {solutionsOpen && (
              <motion.div
                role="menu"
                className="glass-light absolute top-full left-0 w-64"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* invisible bridge to prevent mouseleave gap */}
                <div className="absolute inset-x-0 bottom-full h-3 -top-3 bg-transparent" aria-hidden />
                {SOLUTIONS_LINKS.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.label}
                      href={l.href}
                      role="menuitem"
                      onClick={closeMenus}
                      className={cn(
                        "flex items-center gap-2 px-4 py-3 text-sm transition-colors hover:bg-steel-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep",
                        active ? "text-navy font-semibold" : "text-muted-foreground"
                      )}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </div>

          {MAIN_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.label} href={l.href} className={linkCls(active)}>
                {l.label}
                <span className={underlineCls(active)} />
              </Link>
            );
          })}
        </nav>

        {/* mobile burger + CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
            aria-expanded={mobileOpen}
          >
            <span className={cn("block h-px w-5 transition-all", scrolled || !isHome ? "bg-navy" : "bg-white", mobileOpen && "rotate-45 translate-y-[5px]")} />
            <span className={cn("block h-px w-5 transition-all", scrolled || !isHome ? "bg-navy" : "bg-white", mobileOpen && "opacity-0")} />
            <span className={cn("block h-px w-5 transition-all", scrolled || !isHome ? "bg-navy" : "bg-white", mobileOpen && "-rotate-45 -translate-y-[5px]")} />
          </button>
          <Link
            href="/contacto"
            className={cn(
              "px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep",
              scrolled || !isHome
                ? "bg-navy text-white hover:bg-navy-dark"
                : "bg-white text-carbon hover:bg-cyan"
            )}
          >
            Conversemos
          </Link>
        </div>
      </div>

      {/* mobile menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden border-t border-steel-200 bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.2 }}
        >
          <div className="divide-y divide-steel-200 px-4 py-4">
            {[...SOLUTIONS_LINKS, ...MAIN_LINKS].map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={closeMenus}
                  className={cn(
                    "flex items-center gap-2 py-3 text-sm transition-colors",
                    active ? "text-navy font-semibold" : "text-muted-foreground"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
