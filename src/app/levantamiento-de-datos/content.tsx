"use client";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ClientsStrip } from "@/components/sections/clients-strip";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FeatureSection } from "@/components/sections/feature-section";
import { RelatedServices } from "@/components/sections/related-services";
import { SectionLabel } from "@/components/ui/section-label";
import { motion, MotionConfig } from "motion/react";
import { BarChart3, FileText, TrendingUp } from "lucide-react";

const reportCards = [
  {
    icon: FileText,
    iconName: "file-text" as const,
    title: "Reportes en tiempo real",
    body: "Consolidamos los datos disponibles para que cada reporte refleje el último corte acordado con tu equipo.",
  },
  {
    icon: BarChart3,
    iconName: "bar-chart" as const,
    title: "Tableros personalizados",
    body: "Definimos indicadores y visualizaciones según las decisiones reales de cada área.",
  },
  {
    icon: TrendingUp,
    iconName: "trending-up" as const,
    title: "Comparte con tu equipo",
    body: "Dejamos reportes claros para que cada área consulte y comparta la misma información.",
  },
];

const processSteps = [
  {
    number: "01",
    code: "DSGN",
    title: "Diseño de soluciones",
    body: "Definimos fuentes, indicadores y vistas según lo que el equipo necesita revisar en su operación.",
  },
  {
    number: "02",
    code: "CONS",
    title: "Consultoría especializada",
    body: "Mapeamos el origen, la calidad y los responsables de los datos para detectar brechas.",
  },
  {
    number: "03",
    code: "IMPL",
    title: "Desarrollo e implementación",
    body: "Configuramos modelos, tableros y flujos de actualización integrados a la operación.",
  },
  {
    number: "04",
    code: "SUPP",
    title: "Soporte y continuidad",
    body: "Documentamos, capacitamos y ajustamos para que la información se mantenga útil.",
  },
];

export default function Content() {
  return (
    <main>
      <PageHero
        variant="dark"
        index="06"
        eyebrow="Datos · Business Intelligence"
        headline="Información que muestra"
        headlineAccent="lo que realmente pasa"
        subhead="Ordenamos fuentes dispersas y diseñamos reportes que permiten comparar, detectar desvíos y tomar decisiones con una misma versión de la realidad."
      />

      {/* Nuestro propósito */}
      <section className="bg-background py-24 px-4">
        <div className="mx-auto max-w-4xl">
          <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionLabel index="01" tone="light">
                Propósito
              </SectionLabel>
            </motion.div>

            <motion.h2
              className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-navy"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Nuestro propósito es ayudar a transformar los negocios
            </motion.h2>

            <motion.p
              className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Reunimos fuentes dispersas, acordamos definiciones y dejamos reportes claros
              para que el equipo compare y actúe sobre la misma información.
            </motion.p>
          </MotionConfig>
        </div>
      </section>

      <FeatureSection
        index="02"
        eyebrow="Entregables"
        title="Reportes claros y completos"
        intro="Diseñamos reportes y tableros con las métricas que cada área necesita revisar. La información queda disponible para consultar, compartir y dar seguimiento."
        items={reportCards}
        columns={3}
        itemsPerView={{ sm: 1, md: 2, lg: 3 }}
        variant="light"
      />

      <ProcessSteps
        title="¿Cómo transformamos los negocios?"
        eyebrow="Método"
        index="03"
        steps={processSteps}
      />

      <ClientsStrip
        title="Clientes que han realizado levantamientos de información junto a Sinergia"
        index="04"
        clients={[
          "Tottus",
          "Iansa",
          "CV Trading",
          "Dimerc",
          "Tresmontes Lucchetti",
          "Aramark",
          "Ecostandard",
          "CIAL",
          "MB Chemicals",
          "Podas Chile",
          "Jumbo",
          "Paris",
          "Easy",
          "Corona",
          "Ripley",
        ]}
      />

      <RelatedServices current="levantamiento-de-datos" />

      <CtaBand />
    </main>
  );
}
