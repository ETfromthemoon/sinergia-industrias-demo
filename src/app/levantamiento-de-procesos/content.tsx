"use client";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ClientsStrip } from "@/components/sections/clients-strip";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SectionLabel } from "@/components/ui/section-label";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { motion, MotionConfig } from "motion/react";
import { TrendingUp, Clock, DollarSign, Award } from "lucide-react";

const benefits = [
  { icon: TrendingUp, label: "Reducción de costos operativos" },
  { icon: Clock, label: "Optimización de tiempos de producción" },
  { icon: DollarSign, label: "Nuevas metodologías de producción" },
  { icon: Award, label: "Ventaja competitiva sostenible" },
] as const;

export default function Content() {
  return (
    <main>
      <PageHero
        variant="dark"
        index="05"
        eyebrow="Diagnóstico operacional"
        headline="Optimiza, innova,"
        headlineAccent="triunfa"
        subhead="Potencia tu negocio con procesos optimizados. Estudiamos minuciosamente tus operaciones para identificar áreas de mejora y eficiencia. Nuestro enfoque estratégico te brinda ventajas competitivas, permitiéndote alcanzar tus objetivos de manera más efectiva."
      />

      <ProcessSteps
        title="Lo que necesitas, como te gusta"
        eyebrow="Proceso"
        index="01"
        steps={[
          {
            number: "01",
            code: "ORG",
            title: "Organiza",
            body: "Resumen claro y eficiente de tus procesos. Identificamos cada elemento que conforma tu operación.",
          },
          {
            number: "02",
            code: "PROG",
            title: "Programa",
            body: "Lleva seguimiento de las operaciones con cronogramas y asignación de recursos.",
          },
          {
            number: "03",
            code: "PLAN",
            title: "Planea",
            body: "Asigna el tiempo necesario a tareas específicas en un turno planeado. Optimiza la secuencia.",
          },
          {
            number: "04",
            code: "ANAL",
            title: "Analiza",
            body: "Genera reportes y realiza análisis de rendimiento. Datos para decisiones estratégicas.",
          },
        ]}
      />

      {/* ¿Por qué optimizar? */}
      <section className="bg-steel-50 border-y border-steel-200 py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <MotionConfig
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionLabel index="02">Beneficios</SectionLabel>
            </motion.div>

            <motion.h2
              className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-navy"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              ¿Por qué optimizar tus procesos con Sinergia?
            </motion.h2>

            <motion.p
              className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              El levantamiento de procesos consiste en realizar una
              investigación exhaustiva, análisis detallado y definición
              precisa de cada elemento que conforma los procesos de tu
              empresa. Esto implica identificar todas las actividades y tareas
              necesarias para lograr un resultado, servicio o producto final.
            </motion.p>

            <motion.div
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={i}
                    className="relative bg-white border border-steel-200 p-6"
                  >
                    <CornerTicks />

                    <span className="inline-flex items-center justify-center w-11 h-11 border border-steel-200 mb-4 text-navy">
                      <Icon className="w-5 h-5" />
                    </span>

                    <span className="mono-label text-steel-400">
                      BENEFICIO.{String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 font-display font-semibold text-navy leading-snug">
                      {b.label}
                    </h3>
                  </div>
                );
              })}
            </motion.div>
          </MotionConfig>
        </div>
      </section>

      <ClientsStrip
        title="Clientes que han levantado sus procesos junto a Sinergia"
        index="03"
        clients={[
          "Tottus",
          "Red Circular",
          "Asalvo",
          "Ecostandard",
          "CIAL",
          "Vinderchile",
          "Moriah",
          "Arriendo Legal",
        ]}
      />

      <CtaBand />
    </main>
  );
}
