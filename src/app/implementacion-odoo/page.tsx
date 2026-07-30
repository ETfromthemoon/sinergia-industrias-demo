import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Content from "./content";
import { ServiceJsonLd } from "@/components/seo/service-json-ld";

const description =
  "Somos Ready Partner Oficial Odoo en Chile. Implementamos Odoo para finanzas, inventario, RRHH, ventas y operaciones.";

export const metadata: Metadata = {
  title: "Implementación ERP Odoo en Chile",
  description:
    "Implementamos Odoo alrededor de tus procesos para conectar finanzas, inventario, ventas y operaciones. Ready Partner Oficial en Chile.",
  alternates: { canonical: "/implementacion-odoo" },
  openGraph: {
    title: "Implementación ERP Odoo — Ready Partner Oficial · Sinergia Industrias",
    description,
    type: "website",
    url: "/implementacion-odoo",
  },
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
