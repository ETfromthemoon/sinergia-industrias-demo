import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import NosotrosContent from "./content";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce al equipo y la forma de trabajo de Sinergia Industrias, consultora de procesos, Odoo, Ley REP y datos en Chile.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros — Ingeniería de procesos · Sinergia Industrias",
    description: "Equipo de ingenieros con trabajo de campo real. Ready Partner Oficial Odoo. Transformamos empresas con tecnología.",
    type: "website",
    url: "/nosotros",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <NosotrosContent />
      <Footer />
    </>
  );
}
