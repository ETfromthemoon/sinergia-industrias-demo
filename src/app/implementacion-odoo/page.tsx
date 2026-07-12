import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buildServiceJsonLd } from "@/lib/service-jsonld";
import Content from "./content";

const description =
  "Somos Ready Partner Oficial Odoo en Chile. Implementamos Odoo para finanzas, inventario, RRHH, ventas y operaciones.";

export const metadata: Metadata = {
  title: "Implementación ERP Odoo — Ready Partner Oficial · Sinergia Industrias",
  description,
  alternates: { canonical: "/implementacion-odoo" },
  openGraph: {
    title: "Implementación ERP Odoo — Ready Partner Oficial · Sinergia Industrias",
    description,
    type: "website",
    url: "/implementacion-odoo",
  },
};

const jsonLd = buildServiceJsonLd({
  name: "Implementación ERP Odoo",
  description,
  path: "/implementacion-odoo",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}
