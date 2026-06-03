"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Ley REP", href: "#servicios" },
  { label: "ERP Odoo", href: "#servicios" },
  { label: "Procesos", href: "#servicios" },
  { label: "Método", href: "#metodo" },
];

export function Navbar() {
  return (
    <motion.header
      className="fixed top-0 z-50 w-full border-b border-steel-200/60 bg-white/90 backdrop-blur-md"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-navy text-white text-xs font-bold font-mono group-hover:bg-navy-dark transition-colors">
            SI
          </span>
          <span className="font-display text-base font-semibold text-foreground">
            Sinergia Industrias
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contacto"
          className={cn(
            buttonVariants({ size: "sm" }),
            "rounded-full bg-navy text-white text-sm px-5 hover:bg-navy-dark transition-colors duration-200"
          )}
        >
          Conversemos
        </Link>
      </div>
    </motion.header>
  );
}
