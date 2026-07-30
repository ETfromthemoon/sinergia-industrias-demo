import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { CasosGrid } from "./casos-grid";

export const metadata: Metadata = {
  title: "Casos y experiencia",
  description: "Experiencia de Sinergia Industrias en procesos, implementación Odoo y cumplimiento Ley REP para empresas en Chile.",
  alternates: { canonical: "/casos-de-exito" },
};

export default function CasosDeExitoPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          variant="dark"
          index="03"
          eyebrow="Experiencia aplicada"
          headline="Problemas reales."
          headlineAccent="Trabajo que permanece."
          subhead="Una selección de organizaciones donde hemos intervenido procesos, sistemas y cumplimiento. Los resultados cualitativos se presentan sin inventar métricas."
        />
        <CasosGrid />
        <CtaBand
          title="El próximo caso puede empezar con una conversación honesta."
          subhead="Cuéntanos qué necesita cambiar en tu operación y evaluemos juntos el mejor punto de partida."
        />
      </main>
      <Footer />
    </>
  );
}
