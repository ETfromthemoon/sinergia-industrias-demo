import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: "Implementación ERP Odoo — Ready Partner Oficial · Sinergia Industrias",
  description:
    "Somos Ready Partner Oficial Odoo en Chile. Implementamos Odoo para finanzas, inventario, RRHH, ventas y operaciones.",
  alternates: { canonical: "/implementacion-odoo" },
  openGraph: {
    title: "Implementación ERP Odoo — Ready Partner Oficial · Sinergia Industrias",
    description:
      "Somos Ready Partner Oficial Odoo en Chile. Implementamos Odoo para finanzas, inventario, RRHH, ventas y operaciones.",
    type: "website",
    url: "/implementacion-odoo",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}
