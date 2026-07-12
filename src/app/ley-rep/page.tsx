import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buildServiceJsonLd } from "@/lib/service-jsonld";
import LeyRepContent from "./content";

const description =
  "Levantamiento, cálculo de metas y reporte completo bajo la Ley 20.920. Cumplimiento REP sin multas ni sorpresas.";

export const metadata: Metadata = {
  title: "Ley REP 20.920 — Cumplimiento normativo · Sinergia Industrias",
  description,
  alternates: { canonical: "/ley-rep" },
  openGraph: {
    title: "Ley REP 20.920 — Cumplimiento normativo · Sinergia Industrias",
    description,
    type: "website",
    url: "/ley-rep",
  },
};

const jsonLd = buildServiceJsonLd({
  name: "Cumplimiento Ley REP",
  description,
  path: "/ley-rep",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <LeyRepContent />
      <Footer />
    </>
  );
}
