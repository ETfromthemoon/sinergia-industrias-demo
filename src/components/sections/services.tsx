"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, GitBranch, BarChart3, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { OdooLogo } from "@/components/ui/odoo-logo";
import { fadeUp } from "@/lib/motion";

function ServiceCard({
  icon: Icon,
  title,
  body,
  href,
  className,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
  href: string;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className="group relative flex h-full flex-col bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated"
      >
        <div className="mb-6">
          <div className="inline-flex border border-steel-200 bg-white p-3 transition-colors duration-200 group-hover:border-navy/30">
            <Icon className="size-5 text-navy" />
          </div>
        </div>
        <h3 className="font-display mb-3 text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
        <ArrowUpRight className="mt-6 size-5 text-steel-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
      </Link>
    </motion.div>
  );
}

const ODOO_MODULES = ["Finanzas", "Inventario", "RRHH", "Ventas", "Operaciones", "Reportería"];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const numeralY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} id="servicios" className="bg-background py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <div className="relative mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          {/* Giant background numeral — subtle depth cue, parallax on scroll */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -left-2 -top-14 select-none font-display font-bold text-steel-100 lg:-top-20"
            style={{ fontSize: "clamp(120px, 14vw, 180px)", y: numeralY }}
          >
            01
          </motion.span>
          <div className="relative">
            <SectionLabel index="01" className="mb-5">
              Áreas de servicio
            </SectionLabel>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Cuatro áreas.
              <br />
              Un solo equipo.
            </h2>
          </div>
          <p className="relative max-w-xs text-sm leading-relaxed text-muted-foreground">
            Cada módulo opera por separado o integrado. Conectamos cumplimiento, procesos y
            tecnología en un mismo sistema.
          </p>
        </div>

        {/* bento — hairline grid, lifted off the page for depth */}
        <div className="grid grid-cols-1 gap-px border border-steel-200 bg-steel-200 shadow-elevated lg:grid-cols-3 lg:grid-rows-2">
          {/* ODOO — dominant, real photography behind the pitch */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2"
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/implementacion-odoo"
              className="group relative flex h-full flex-col justify-between overflow-hidden p-8"
            >
              <Image
                src="/media/plant-floor.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: "oklch(0.28 0.12 255 / 0.82)" }}
              />
              <div aria-hidden className="grain pointer-events-none absolute inset-0" />
              <div className="relative">
                <div className="mb-6 flex items-start justify-between">
                  <div className="inline-flex border border-white/20 bg-white/5 p-3">
                    <OdooLogo size={24} />
                  </div>
                  <span className="border border-cyan/40 bg-cyan/10 px-2.5 py-1 mono-label text-cyan">
                    OFICIAL
                  </span>
                </div>
                <h3 className="font-display mt-6 text-3xl font-bold text-white">
                  Implementación ERP Odoo
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-steel-300">
                  Somos Ready Partner Oficial Odoo en Chile. Una sola plataforma para que finanzas,
                  bodega, RRHH y operaciones trabajen con los mismos datos, en tiempo real.
                </p>
              </div>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {ODOO_MODULES.map((mod) => (
                  <span
                    key={mod}
                    className="border border-white/15 px-3 py-1.5 text-xs text-white/70 transition-colors group-hover:border-cyan/40"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>

          {/* REP */}
          <ServiceCard
            icon={ShieldCheck}
            title="Cumplimiento Ley REP"
            body="Calculamos, documentamos y reportamos tus obligaciones bajo la ley 20.920. Sin multas, sin sorpresas."
            href="/ley-rep"
            delay={0.1}
          />
          {/* PROC */}
          <ServiceCard
            icon={GitBranch}
            title="Levantamiento de procesos"
            body="Mapeamos tu operación, identificamos los cuellos de botella reales y entregamos un plan técnico ejecutable."
            href="/levantamiento-de-procesos"
            delay={0.18}
          />
          {/* DATA — wide strip, horizontal layout to break the vertical-card template */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeUp(0.24)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/levantamiento-de-datos"
              className="group relative flex flex-col gap-6 bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated sm:flex-row sm:items-center"
            >
              <div className="flex shrink-0 items-center gap-4 sm:w-64">
                <div className="inline-flex border border-steel-200 bg-white p-3 transition-colors duration-200 group-hover:border-navy/30">
                  <BarChart3 className="size-5 text-navy" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Levantamiento de datos
                </h3>
              </div>
              <div className="hidden h-12 w-px shrink-0 bg-steel-200 sm:block" aria-hidden />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Ordenamos los datos dispersos de tu operación para que los reportes reflejen lo que
                realmente pasa y las decisiones se tomen con información real.
              </p>
              <ArrowUpRight className="size-5 shrink-0 text-steel-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
