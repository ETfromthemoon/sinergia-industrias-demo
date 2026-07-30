import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Conversemos sobre procesos, Odoo, Ley REP o gestión de datos. Atención desde Viña del Mar para empresas en Chile.",
  alternates: { canonical: "/contacto" },
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
