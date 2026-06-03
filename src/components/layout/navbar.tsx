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
        scrolled ? "border-steel-200 bg-white/90 backdrop-blur-md" : "border-transparent bg-transparent"
      )}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="inline-flex size-8 items-center justify-center bg-navy font-mono text-xs font-bold text-white transition-colors group-hover:bg-navy-dark">
            SI
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-foreground">
            Sinergia Industrias
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="mono-label text-steel-400 transition-colors group-hover:text-cyan-deep">
                {l.index}
              </span>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contacto"
          className="bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-dark"
        >
          Conversemos
        </Link>
      </div>
    </motion.header>
  );
}
