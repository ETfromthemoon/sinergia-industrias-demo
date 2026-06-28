"use client";
import { motion } from "motion/react";
import { ShieldCheck, GitBranch, BarChart3, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { OdooLogo } from "@/components/ui/odoo-logo";

function ServiceCard({
  index,
  icon: Icon,
  title,
  body,
  className,
  delay,
}: {
  index: string;
  icon: React.ElementType;
  title: string;
  body: string;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`group relative flex flex-col bg-white p-8 transition-colors duration-300 hover:bg-steel-50 ${className ?? ""}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* top cyan rule on hover */}
      <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
      <div className="mb-6 flex items-start justify-between">
        <div className="inline-flex border border-steel-200 bg-white p-3 transition-colors duration-300 group-hover:border-navy/30">
          <Icon className="size-5 text-navy" />
        </div>
        <span className="mono-label text-steel-400">MÓD.{index}</span>
      </div>
      <h3 className="font-display mb-3 text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
      <ArrowUpRight className="mt-6 size-5 text-steel-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
    </motion.div>
  );
}

const ODOO_MODULES = ["Finanzas", "Inventario", "RRHH", "Ventas", "Operaciones", "Reportería"];

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-background py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="01" className="mb-5">
              Áreas de servicio
            </SectionLabel>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Cuatro áreas.
              <br />
              Un solo equipo.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Cada módulo opera por separado o integrado. Conectamos cumplimiento, procesos y
            tecnología en un mismo sistema.
          </p>
        </div>

        {/* bento — hairline grid, lifted off the page for depth */}
        <div className="grid grid-cols-1 gap-px border border-steel-200 bg-steel-200 shadow-elevated lg:grid-cols-3 lg:grid-rows-2">
          {/* ODOO — dominant */}
          <motion.div
            className="group relative flex flex-col justify-between bg-navy p-8 lg:col-span-2 lg:row-span-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* dark blueprint texture + cyan glow (echoes the hero panel) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid-dark opacity-70" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(62% 60% at 82% 18%, oklch(0.68 0.14 205 / 0.13), transparent 70%)" }}
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
              <span className="mono-label text-white/40">MÓD.03</span>
              <h3 className="font-display mt-2 text-3xl font-bold text-white">
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
          </motion.div>

          {/* REP */}
          <ServiceCard
            index="01"
            icon={ShieldCheck}
            title="Cumplimiento Ley REP"
            body="Calculamos, documentamos y reportamos tus obligaciones bajo la ley 20.920. Sin multas, sin sorpresas."
            delay={0.1}
          />
          {/* PROC */}
          <ServiceCard
            index="02"
            icon={GitBranch}
            title="Levantamiento de procesos"
            body="Mapeamos tu operación, identificamos los cuellos de botella reales y entregamos un plan técnico ejecutable."
            delay={0.18}
          />
          {/* DATA — wide strip */}
          <ServiceCard
            index="04"
            icon={BarChart3}
            title="Levantamiento de datos"
            body="Ordenamos los datos dispersos de tu operación para que los reportes reflejen lo que realmente pasa y las decisiones se tomen con información real."
            className="lg:col-span-3"
            delay={0.24}
          />
        </div>
      </div>
    </section>
  );
}
