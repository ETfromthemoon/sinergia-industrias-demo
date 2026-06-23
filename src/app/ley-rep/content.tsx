"use client";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ClientsStrip } from "@/components/sections/clients-strip";
import { SectionLabel } from "@/components/ui/section-label";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { motion, MotionConfig } from "motion/react";
import { CheckCircle2, ArrowRight, Box, Droplets, Battery, Disc, CircleDot, Monitor } from "lucide-react";
import Link from "next/link";

const productos = [
  { icon: Box, label: "Envases y Embalajes" },
  { icon: Droplets, label: "Aceites Lubricantes" },
  { icon: Battery, label: "Baterías" },
  { icon: Disc, label: "Pilas" },
  { icon: CircleDot, label: "Neumáticos" },
  { icon: Monitor, label: "Aparatos Eléctricos y Electrónicos" },
] as const;

const baseLink =
  "https://economiacircular.mma.gob.cl/productos-prioritarios/";

const etapas = [
  { code: "01", label: "Levantamiento de residuos por categoría de producto" },
  { code: "02", label: "Cálculo de metas anuales exigidas por ley" },
  { code: "03", label: "Gestión de la plataforma REP del Ministerio" },
  { code: "04", label: "Reporte final auditado y presentado" },
];

const subjectItems = [
  {
    n: "01",
    text: "Enajene un producto prioritario por primera vez en el mercado nacional.",
  },
  {
    n: "02",
    text: "Enajene bajo marca propia un producto prioritario adquirido de un tercero no inscrito en el registro correspondiente.",
  },
  {
    n: "03",
    text: "Importe un producto prioritario para su propio uso profesional.",
  },
];

export default function LeyRepContent() {
  return (
    <main>
      <PageHero
        variant="dark"
        index="02"
        eyebrow="Cumplimiento normativo · Ley 20.920"
        headline="Levantamiento y sistematización REP"
        headlineAccent=""
        subhead="Cumple con la Ley REP de manera eficiente. Nuestro servicio de levantamiento y sistematización te brinda la solución perfecta. Diseñamos un software intuitivo que consolida todos los productos prioritarios, facilitando el control y entregando resultados de forma rápida y sencilla."
        badge="Ley 20.920"
      />

      {/* ¿Qué es la REP? */}
      <section className="bg-background py-24 px-4">
        <div className="mx-auto max-w-4xl">
          <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionLabel index="01" tone="light">
                Ley REP
              </SectionLabel>
            </motion.div>

            <motion.h2
              className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-navy"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              ¿Qué es la REP?
            </motion.h2>

            <motion.p
              className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              La Ley tiene como instrumento principal la Responsabilidad
              Extendida del Productor (REP), mecanismo en virtud del cual los
              productores de productos prioritarios son responsables de la
              organización y financiamiento de la gestión de los residuos
              derivados de la comercialización de sus productos en el país.
            </motion.p>
          </MotionConfig>
        </div>
      </section>

      {/* Productos prioritarios */}
      <section className="bg-steel-50 border-y border-steel-200 py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionLabel index="02">Alcance</SectionLabel>
            </motion.div>

            <motion.h2
              className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-navy"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              ¿Qué productos prioritarios regula la Ley REP?
            </motion.h2>

            <motion.div
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {productos.map((p, i) => {
                const Icon = p.icon;
                const slug = p.label
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/ /g, "-")
                  .replace(/y/g, "e");
                return (
                  <Link
                    key={i}
                    href={`${baseLink}${slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white border border-steel-200 p-6 hover:bg-steel-50 transition-colors"
                  >
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    <span className="inline-flex items-center justify-center w-11 h-11 border border-steel-200 mb-4 text-navy">
                      <Icon className="w-5 h-5" />
                    </span>

                    <h3 className="font-display font-semibold text-navy group-hover:text-cyan transition-colors">
                      {p.label}
                    </h3>

                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-mono text-steel-400 group-hover:text-cyan transition-colors">
                      <ArrowRight className="w-3 h-3" />
                      economiacircular.mma.gob.cl
                    </span>
                  </Link>
                );
              })}
            </motion.div>
          </MotionConfig>
        </div>
      </section>

      {/* ¿Quiénes son los productores? */}
      <section className="bg-background py-24 px-4">
        <div className="mx-auto max-w-4xl">
          <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionLabel index="03">Sujetos obligados</SectionLabel>
            </motion.div>

            <motion.h2
              className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-navy"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              ¿Quiénes son los productores de productos prioritarios?
            </motion.h2>

            <motion.p
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              El Productor de Producto Prioritario se define como un
              fabricante y/o importador que, independiente de la técnica de
              comercialización:
            </motion.p>

            <motion.div
              className="mt-10 relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative border border-steel-200 bg-white p-8">
                <CornerTicks />

                <ul className="space-y-6">
                  {subjectItems.map((item) => (
                    <li key={item.n} className="flex gap-5">
                      <span className="mono-label text-steel-400 translate-y-0.5 shrink-0">
                        {item.n}
                      </span>
                      <span className="text-foreground leading-relaxed">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </MotionConfig>
        </div>
      </section>

      {/* Proceso REP */}
      <section className="relative bg-navy-dark py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="relative mx-auto max-w-6xl">
          <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-start"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Left */}
              <div>
                <SectionLabel index="04" tone="accent">
                  Nuestro proceso
                </SectionLabel>

                <h2 className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-white">
                  Así funciona nuestro servicio REP
                </h2>
              </div>

              {/* Right — checklist panel */}
              <div className="relative border border-white/15 bg-white/[0.03] p-8">
                <CornerTicks />

                <div className="flex items-center gap-3 mb-8">
                  <span className="mono-label text-cyan">PROC.REP</span>
                  <span className="text-steel-400 text-sm">/</span>
                  <span className="mono-label text-steel-400">
                    LEY 20.920
                  </span>
                  <span className="ml-auto mono-label text-steel-400">
                    4 ETAPAS
                  </span>
                </div>

                <ul className="space-y-5">
                  {etapas.map((e) => (
                    <li key={e.code} className="flex gap-4 items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                      <div className="flex gap-3">
                        <span className="mono-label text-white/70">
                          {e.code}
                        </span>
                        <span className="text-white/85 leading-relaxed">
                          {e.label}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </MotionConfig>
        </div>
      </section>

      <ClientsStrip
        title="Clientes que están cumpliendo con la REP"
        index="05"
        clients={[
          "Tottus",
          "Iansa",
          "Tresmontes Lucchetti",
          "Aramark",
          "Dimerc",
          "Ecostandard",
          "CV Trading",
          "Vinderchile",
          "Red Circular",
          "Moriah",
          "CIAL",
          "MB Chemicals",
        ]}
        jointVentureLabel="Asalvo"
        jointVentureClients={["Jumbo", "Paris", "Easy", "Corona", "Ripley"]}
      />

      <CtaBand />
    </main>
  );
}
