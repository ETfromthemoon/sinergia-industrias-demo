"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const MAIN_LINKS = [
  { label: "Inicio", href: "/", index: "00" },
  { label: "Casos de éxito", href: "/casos-de-exito", index: "03" },
  { label: "Nosotros", href: "/nosotros", index: "04" },
];

const SOLUTIONS_LINKS = [
  { label: "Ley REP", href: "/ley-rep", index: "01" },
  { label: "Implementación Odoo", href: "/implementacion-odoo", index: "02" },
  { label: "Levantamiento de procesos", href: "/levantamiento-de-procesos", index: "05" },
  { label: "Levantamiento de datos", href: "/levantamiento-de-datos", index: "06" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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

  const linkCls = (active?: boolean) =>
    cn(
      "group flex items-center gap-1.5 text-sm transition-colors",
      scrolled || !isHome
        ? active ? "text-navy font-semibold" : "text-muted-foreground hover:text-foreground"
        : "text-white/70 hover:text-white"
    );

  const indexCls = (active?: boolean) =>
    cn(
      "mono-label transition-colors",
      scrolled || !isHome
        ? active ? "text-cyan-deep" : "text-steel-400 group-hover:text-cyan-deep"
        : active ? "text-cyan" : "text-white/40 group-hover:text-cyan"
    );

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled || !isHome
          ? "border-steel-200 bg-white/90 backdrop-blur-md"
          : "border-white/10 bg-transparent"
      )}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            className={cn(
              "inline-flex size-8 items-center justify-center font-mono text-xs font-bold transition-colors",
              scrolled || !isHome
                ? "bg-navy text-white group-hover:bg-navy-dark"
                : "bg-white/10 text-white ring-1 ring-inset ring-white/25 group-hover:bg-white/20"
            )}
          >
            SI
          </span>
          <span
            className={cn(
              "font-display text-base font-semibold tracking-tight transition-colors",
              scrolled || !isHome ? "text-foreground" : "text-white"
            )}
          >
            Sinergia Industrias
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {MAIN_LINKS.map((l) => {
            const active = pathname === l.href || (l.href === "/" && pathname === "/");
            return (
              <Link key={l.label} href={l.href} className={linkCls(active)}>
                <span className={indexCls(active)}>{l.index}</span>
                {l.label}
              </Link>
            );
          })}

          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className={cn(
                linkCls(),
                "cursor-pointer"
              )}
              onClick={() => setSolutionsOpen(!solutionsOpen)}
            >
              <span className={cn("mono-label transition-colors", scrolled || !isHome ? "text-steel-400" : "text-white/40")}>SOL</span>
              Soluciones
              <svg className={cn("ml-1 size-3 transition-transform", solutionsOpen && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {solutionsOpen && (
              <motion.div
                className="absolute top-full left-0 mt-1 w-64 border border-steel-200 bg-white shadow-elevated"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
              >
                {SOLUTIONS_LINKS.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.label}
                      href={l.href}
                      className={cn(
                        "flex items-center gap-2 px-4 py-3 text-sm transition-colors hover:bg-steel-50",
                        active ? "text-navy font-semibold" : "text-muted-foreground"
                      )}
                    >
                      <span className={cn("mono-label", active ? "text-cyan-deep" : "text-steel-400")}>{l.index}</span>
                      {l.label}
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </div>
        </nav>

        {/* mobile burger + CTA */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            <span className={cn("block h-px w-5 transition-all", scrolled || !isHome ? "bg-navy" : "bg-white", mobileOpen && "rotate-45 translate-y-[5px]")} />
            <span className={cn("block h-px w-5 transition-all", scrolled || !isHome ? "bg-navy" : "bg-white", mobileOpen && "opacity-0")} />
            <span className={cn("block h-px w-5 transition-all", scrolled || !isHome ? "bg-navy" : "bg-white", mobileOpen && "-rotate-45 -translate-y-[5px]")} />
          </button>
          <Link
            href="/contacto"
            className={cn(
              "px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
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
            {[...MAIN_LINKS, ...SOLUTIONS_LINKS].map((l) => {
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
                  <span className={cn("mono-label", active ? "text-cyan-deep" : "text-steel-400")}>{l.index}</span>
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
