"use client";
import { motion } from "motion/react";
import { ShieldCheck, GitBranch, Layers, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Service = {
  icon: React.ElementType;
  title: string;
  body: string;
  tag: string;
  highlight?: boolean;
};

const SERVICES: readonly Service[] = [
  {
    icon: ShieldCheck,
    title: "Cumplimiento Ley REP",
    body: "Calculamos, documentamos y gestionamos tus obligaciones bajo la ley 20.920. Sin ambigüedades, sin multas, sin sorpresas al momento del reporte.",
    tag: "Ley 20.920",
  },
  {
    icon: GitBranch,
    title: "Levantamiento de procesos",
    body: "Mapeamos cómo opera tu empresa hoy, identificamos los cuellos de botella reales y entregamos un plan técnico para corregirlos. No solo diagnóstico: propuesta ejecutable.",
    tag: "Diagnóstico operacional",
  },
  {
    icon: Layers,
    title: "Implementación ERP Odoo",
    body: "Somos Ready Partner Oficial Odoo en Chile. Implementamos y configuramos el sistema para que tu equipo de finanzas, bodega, RRHH y operaciones trabajen sobre una sola plataforma.",
    tag: "Ready Partner Odoo",
    highlight: true,
  },
  {
    icon: BarChart3,
    title: "Levantamiento de datos",
    body: "Extraemos y ordenamos los datos dispersos de tu operación para que los reportes reflejen lo que realmente pasa y las decisiones se tomen con información real.",
    tag: "Business Intelligence",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-background py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">
            Lo que hacemos
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Cuatro áreas. Un solo equipo.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className={`group relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-navy/20 hover:shadow-lg ${
                  s.highlight
                    ? "border-navy/30 bg-navy/3"
                    : "border-steel-200 bg-white hover:border-navy/25"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {s.highlight && (
                  <span className="absolute right-4 top-4 rounded-full bg-cyan/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan">
                    Oficial
                  </span>
                )}
                <div className="mb-5 inline-flex rounded-xl border border-steel-200 bg-steel-50 p-3 transition-colors group-hover:border-navy/20 group-hover:bg-navy/5">
                  <Icon className="size-5 text-navy" />
                </div>
                <h3 className="font-display mb-3 text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <Badge
                  variant="outline"
                  className="border-steel-200 text-muted-foreground text-xs"
                >
                  {s.tag}
                </Badge>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
