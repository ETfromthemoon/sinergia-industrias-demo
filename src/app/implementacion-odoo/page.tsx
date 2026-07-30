import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Content from "./content";
import { ServiceJsonLd } from "@/components/seo/service-json-ld";

export const metadata: Metadata = {
  title: "Implementación ERP Odoo en Chile",
  description:
    "Implementamos Odoo alrededor de tus procesos para conectar finanzas, inventario, ventas y operaciones. Ready Partner Oficial en Chile.",
  alternates: { canonical: "/implementacion-odoo" },
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Implementación ERP Odoo"
        description="Implementación de Odoo para conectar finanzas, inventario, ventas y operaciones."
        path="/implementacion-odoo"
      />
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}
