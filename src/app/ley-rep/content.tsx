"use client";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ClientsStrip } from "@/components/sections/clients-strip";
import { FeatureSection } from "@/components/sections/feature-section";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SectionLabel } from "@/components/ui/section-label";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { motion, MotionConfig } from "motion/react";
import { Box, Droplets, Battery, Disc, CircleDot, Monitor } from "lucide-react";

const productos = [
  { icon: Box, label: "Envases y Embalajes", slug: "envases-y-embalajes" },
  { icon: Droplets, label: "Aceites Lubricantes", slug: "aceites-lubricantes" },
  { icon: Battery, label: "Baterías", slug: "baterias" },
  { icon: Disc, label: "Pilas", slug: "pilas" },
  { icon: CircleDot, label: "Neumáticos", slug: "neumaticos" },
  { icon: Monitor, label: "Aparatos Eléctricos y Electrónicos", slug: "aparatos-electricos-y-electronicos" },
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

      <FeatureSection
        id="productos-prioritarios"
        index="02"
        eyebrow="Alcance"
        title="¿Qué productos prioritarios regula la Ley REP?"
        columns={3}
        className="bg-steel-50 border-y border-steel-200"
        items={productos.map((p) => ({
          icon: p.icon,
          title: p.label,
          body: "economiacircular.mma.gob.cl",
        }))}
      />

      {/* Enlaces a la fuente oficial por producto prioritario */}
      <section className="sr-only">
        <ul>
          {productos.map((p) => (
            <li key={p.slug}>
              <a
                href={`${baseLink}${p.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.label}
                <span className="sr-only"> (se abre en pestaña nueva)</span>
              </a>
            </li>
          ))}
        </ul>
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

      <ProcessSteps
        variant="dark"
        index="04"
        eyebrow="Nuestro proceso"
        title="Así funciona nuestro servicio REP"
        steps={etapas.map((e) => ({
          number: e.code,
          code: e.code,
          title: `Etapa ${e.code}`,
          body: e.label,
        }))}
      />

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
