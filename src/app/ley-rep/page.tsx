import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import LeyRepContent from "./content";
import { ServiceJsonLd } from "@/components/seo/service-json-ld";

const description =
  "Levantamiento, cálculo de metas y reporte completo bajo la Ley 20.920. Cumplimiento REP sin multas ni sorpresas.";

export const metadata: Metadata = {
  title: "Cumplimiento Ley REP 20.920",
  description:
    "Levantamiento, cálculo de obligaciones, respaldo documental y acompañamiento para el cumplimiento de la Ley REP en Chile.",
  alternates: { canonical: "/ley-rep" },
  openGraph: {
    title: "Ley REP 20.920 — Cumplimiento normativo · Sinergia Industrias",
    description,
    type: "website",
    url: "/ley-rep",
  },
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Cumplimiento Ley REP 20.920"
        description="Levantamiento, cálculo de obligaciones, respaldo documental y acompañamiento para empresas en Chile."
        path="/ley-rep"
      />
      <Navbar />
      <LeyRepContent />
      <Footer />
    </>
  );
}
