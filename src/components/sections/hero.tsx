"use client";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { Aurora } from "@/components/ui/aurora";
import { DotPattern } from "@/components/ui/dot-pattern";
import { SplitText } from "@/components/ui/split-text";
import { Magnetic } from "@/components/ui/magnetic";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShieldCheck, Award, MapPin } from "lucide-react";

const LINE_1 = "Procesos que funcionan.";
const LINE_2 = "Cumplimiento que no falla.";
const line1Words = LINE_1.split(" ").length;

export function HeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-background px-4 py-24 text-center">
        <Aurora />
        <DotPattern className="text-steel-200/40" />

        {/* Eyebrow badge */}
        <motion.div
          className="mb-8 flex items-center gap-3 flex-wrap justify-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 bg-navy/5 px-3.5 py-1.5 text-xs font-medium text-navy tracking-wide">
            <Award className="size-3.5" />
            Ready Partner Oficial Odoo
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-steel-200 bg-white px-3.5 py-1.5 text-xs font-medium text-foreground/70 tracking-wide">
            <ShieldCheck className="size-3.5 text-cyan" />
            Especialistas Ley REP 20.920
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl mb-6">
          <span className="block text-foreground">
            <SplitText text={LINE_1} delay={0.08} stagger={0.04} startIndex={0} />
          </span>
          <span className="block text-navy mt-1">
            <SplitText text={LINE_2} delay={0.08} stagger={0.04} startIndex={line1Words} />
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          className="max-w-xl text-lg text-muted-foreground leading-relaxed mb-10"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Tu empresa necesita que los procesos estén en orden, que el ERP se use bien y que el
          cumplimiento ambiental no sea una amenaza. En Sinergia llevamos años haciendo eso
          para industrias en Chile.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.88, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Magnetic>
            <Link
              href="#contacto"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-navy text-white px-8 py-3 text-base font-semibold shadow-navy hover:bg-navy-dark transition-colors duration-200"
              )}
            >
              Conversemos tu proyecto →
            </Link>
          </Magnetic>
          <Link
            href="#servicios"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline transition-colors"
          >
            Ver qué hacemos
          </Link>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.5 }}
        >
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-cyan inline-block" />
            Certificados Odoo
          </span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-navy inline-block" />
            Ley REP 20.920
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-3.5" />
            Viña del Mar, Chile
          </span>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
              scroll
            </span>
            <span className="h-7 w-px bg-gradient-to-b from-muted-foreground/50 to-transparent" />
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
