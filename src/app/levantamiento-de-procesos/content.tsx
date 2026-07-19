"use client";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ClientsStrip } from "@/components/sections/clients-strip";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FeatureSection } from "@/components/sections/feature-section";
import { RelatedServices } from "@/components/sections/related-services";
import { TrendingUp, Clock, DollarSign, Award } from "lucide-react";

const benefits = [
  { icon: TrendingUp, iconName: "trending-up" as const, title: "Reducción de costos operativos", body: "" },
  { icon: Clock, iconName: "clock" as const, title: "Optimización de tiempos de producción", body: "" },
  { icon: DollarSign, iconName: "dollar" as const, title: "Nuevas metodologías de producción", body: "" },
  { icon: Award, iconName: "award" as const, title: "Ventaja competitiva sostenible", body: "" },
];

export default function Content() {
  return (
    <main>
      <PageHero
        variant="dark"
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

      <FeatureSection
        index="02"
        eyebrow="Beneficios"
        title="¿Por qué optimizar tus procesos con Sinergia?"
        intro="El levantamiento de procesos consiste en realizar una investigación exhaustiva, análisis detallado y definición precisa de cada elemento que conforma los procesos de tu empresa. Esto implica identificar todas las actividades y tareas necesarias para lograr un resultado, servicio o producto final."
        items={benefits}
        columns={4}
        variant="light"
      />

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

      <RelatedServices current="levantamiento-de-procesos" />

      <CtaBand />
    </main>
  );
}
