import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import LeyRepContent from "./content";

export const metadata: Metadata = {
  title: "Ley REP 20.920 — Cumplimiento normativo · Sinergia Industrias",
  description:
    "Levantamiento, cálculo de metas y reporte completo bajo la Ley 20.920. Cumplimiento REP sin multas ni sorpresas.",
  alternates: { canonical: "/ley-rep" },
  openGraph: {
    title: "Ley REP 20.920 — Cumplimiento normativo · Sinergia Industrias",
    description:
      "Levantamiento, cálculo de metas y reporte completo bajo la Ley 20.920. Cumplimiento REP sin multas ni sorpresas.",
    type: "website",
    url: "/ley-rep",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <LeyRepContent />
      <Footer />
    </>
  );
}
