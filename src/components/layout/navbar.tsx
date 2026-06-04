"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Áreas", href: "#servicios", index: "01" },
  { label: "Ley REP", href: "#servicios", index: "02" },
  { label: "Método", href: "#metodo", index: "03" },
  { label: "Contacto", href: "#contacto", index: "04" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
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
              scrolled
                ? "bg-navy text-white group-hover:bg-navy-dark"
                : "bg-white/10 text-white ring-1 ring-inset ring-white/25 group-hover:bg-white/20"
            )}
          >
            SI
          </span>
          <span
            className={cn(
              "font-display text-base font-semibold tracking-tight transition-colors",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            Sinergia Industrias
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={cn(
                "group flex items-center gap-1.5 text-sm transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white"
              )}
            >
              <span
                className={cn(
                  "mono-label transition-colors",
                  scrolled
                    ? "text-steel-400 group-hover:text-cyan-deep"
                    : "text-white/40 group-hover:text-cyan"
                )}
              >
                {l.index}
              </span>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contacto"
          className={cn(
            "px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
            scrolled
              ? "bg-navy text-white hover:bg-navy-dark"
              : "bg-white text-carbon hover:bg-cyan"
          )}
        >
          Conversemos
        </Link>
      </div>
    </motion.header>
  );
}
