import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: "Levantamiento de datos — Business Intelligence · Sinergia",
  description:
    "Transformamos datos dispersos en insights accionables. Reportes en tiempo real y tableros personalizados.",
  alternates: { canonical: "/levantamiento-de-datos" },
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
