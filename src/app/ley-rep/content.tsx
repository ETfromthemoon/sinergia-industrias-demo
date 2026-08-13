"use client";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ClientsStrip } from "@/components/sections/clients-strip";
import { FeatureSection } from "@/components/sections/feature-section";
import { ProcessSteps } from "@/components/sections/process-steps";
import { RelatedServices } from "@/components/sections/related-services";
import { SectionLabel } from "@/components/ui/section-label";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { motion, MotionConfig } from "motion/react";
import { Box, Droplets, Battery, Disc, CircleDot, Monitor } from "lucide-react";

const productos = [
  { icon: Box, iconName: "box" as const, label: "Envases y Embalajes", slug: "envases-y-embalajes" },
  { icon: Droplets, iconName: "droplets" as const, label: "Aceites Lubricantes", slug: "aceites-lubricantes" },
  { icon: Battery, iconName: "battery" as const, label: "Baterías", slug: "baterias" },
  { icon: Disc, iconName: "disc" as const, label: "Pilas", slug: "pilas" },
  { icon: CircleDot, iconName: "circle-dot" as const, label: "Neumáticos", slug: "neumaticos" },
  { icon: Monitor, iconName: "monitor" as const, label: "Aparatos Eléctricos y Electrónicos", slug: "aparatos-electricos-y-electronicos" },
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
        eyebrow="Cumplimiento · Ley 20.920"
        headline="Cumplimiento REP"
        headlineAccent="sin zonas grises"
        subhead="Ordenamos la información, calculamos tus obligaciones y construimos el respaldo que tu empresa necesita para declarar con trazabilidad."
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
        itemsPerView={{ sm: 1, md: 2, lg: 3 }}
        className="bg-steel-50 border-y border-steel-200"
        items={productos.map((p) => ({
          icon: p.icon,
          iconName: p.iconName,
          title: p.label,
          body: "economiacircular.mma.gob.cl",
          href: `${baseLink}${p.slug}`,
          linkLabel: "Fuente oficial",
        }))}
      />

      {/* Enlaces a la fuente oficial por producto prioritario */}
      <section className="hidden" aria-hidden="true">
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
              <ul className="grid gap-4 md:grid-cols-3 md:gap-0">
                {subjectItems.map((item, itemIndex) => (
                  <motion.li
                    key={item.n}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: itemIndex * 0.08, duration: 0.5 }}
                    className="solution-card group relative min-h-full border border-steel-200 bg-white p-6 md:-ml-px md:first:ml-0"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-cyan transition-transform duration-500 group-hover:scale-x-100"
                    />
                    <CornerTicks className="text-steel-400" size={8} />
                    <span className="mono-label text-cyan-deep">Caso {item.n}</span>
                    <p className="mt-6 text-sm leading-relaxed text-foreground">{item.text}</p>
                  </motion.li>
                ))}
              </ul>
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
          "Jumbo",
          "Paris",
          "Easy",
          "Corona",
          "Ripley",
        ]}
      />

      <RelatedServices current="ley-rep" />

      <CtaBand />
    </main>
  );
}
