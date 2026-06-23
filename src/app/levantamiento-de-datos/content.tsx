"use client";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ClientsStrip } from "@/components/sections/clients-strip";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SectionLabel } from "@/components/ui/section-label";
import { motion, MotionConfig } from "motion/react";
import { BarChart3, FileText, TrendingUp } from "lucide-react";

const reportCards = [
  {
    icon: FileText,
    title: "Reportes en tiempo real",
    body: "Mantente al día con reportes que se actualizan automáticamente con la información más reciente de tu operación.",
  },
  {
    icon: BarChart3,
    title: "Tableros personalizados",
    body: "Visualiza tus KPIs críticos en tableros diseñados a la medida de tu negocio y tus objetivos estratégicos.",
  },
  {
    icon: TrendingUp,
    title: "Comparte con tu equipo",
    body: "Distribuye reportes y dashboards con quien necesites. Toda la información clave al alcance de tu equipo.",
  },
];

const processSteps = [
  {
    number: "01",
    code: "DSGN",
    title: "Diseño de soluciones",
    body: "Diseñamos soluciones y experiencias personalizadas para cada uno de nuestros clientes y su negocio, con una visión de sustentabilidad.",
  },
  {
    number: "02",
    code: "CONS",
    title: "Consultoría especializada",
    body: "Mapeo de procesos. Discovery. Identificación de oportunidades de mejora y eficiencia.",
  },
  {
    number: "03",
    code: "IMPL",
    title: "Desarrollo e implementación",
    body: "Implementación de soluciones a medida que atienden las necesidades específicas de nuestros clientes.",
  },
  {
    number: "04",
    code: "SUPP",
    title: "Soporte y continuidad",
    body: "Brindamos un servicio de soporte y continuidad operativa de excelencia para asegurar resultados sostenibles.",
  },
];

export default function Content() {
  return (
    <main>
      <PageHero
        variant="dark"
        index="06"
        eyebrow="Business Intelligence"
        headline="Datos que hablan,"
        headlineAccent="decisiones que impactan"
        subhead="Descubre el poder de la información. Transformamos montañas de información en valiosos insights que cuentan una historia. Te brindamos el conocimiento necesario para tomar decisiones estratégicas y de impacto."
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
              Los desafíos presentes en nuestro entorno nos impulsan a crear
              iniciativas tecnológicas con una respuesta ágil y flexible, pero
              sin sacrificar eficiencia, robustez y seguridad que nos expongan
              a riesgos mayores.
            </motion.p>
          </MotionConfig>
        </div>
      </section>

      {/* Reportes */}
      <section className="bg-steel-50 border-y border-steel-200 py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionLabel index="02">Entregables</SectionLabel>
            </motion.div>

            <motion.h2
              className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-navy"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Reportes claros y completos
            </motion.h2>

            <motion.p
              className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Mantente al día con reportes en tiempo real. Toma mejores
              decisiones con la ayuda de reportes dinámicos que puedes guardar
              y compartir con quien sea. Mantén la información clave al
              alcance de tu mano con los tableros personalizados.
            </motion.p>

            <motion.div
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {reportCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    className="relative bg-white border border-steel-200 p-8"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                  >
                    <span className="inline-flex items-center justify-center w-11 h-11 border border-steel-200 mb-5 text-navy">
                      <Icon className="w-5 h-5" />
                    </span>

                    <h3 className="font-display font-semibold text-lg text-navy mb-3">
                      {card.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {card.body}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </MotionConfig>
        </div>
      </section>

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
        ]}
        jointVentureLabel="Asalvo"
        jointVentureClients={["Jumbo", "Paris", "Easy", "Corona", "Ripley"]}
      />

      <CtaBand />
    </main>
  );
}
