import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { CasosGrid } from "./casos-grid";

export const metadata: Metadata = {
  title: "Casos de éxito — Resultados comprobables · Sinergia Industrias",
  description: "Proyectos de ingeniería de procesos, implementación Odoo y cumplimiento Ley REP para industrias en Chile.",
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
          eyebrow="Resultados comprobables"
          headline="Creamos proyectos"
          headlineAccent="que nos enorgullecen"
          subhead="Una mirada a los proyectos donde aplicamos ingeniería de procesos, implementación Odoo y cumplimiento Ley REP para industrias en Chile."
        />
        <CasosGrid />
      </main>
      <Footer />
    </>
  );
}
