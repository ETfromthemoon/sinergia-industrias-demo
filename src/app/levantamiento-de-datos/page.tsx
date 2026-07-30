import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Content from "./content";
import { ServiceJsonLd } from "@/components/seo/service-json-ld";

export const metadata: Metadata = {
  title: "Levantamiento de datos y Business Intelligence",
  description:
    "Ordenamos datos operacionales y creamos reportes y tableros que ayudan a decidir con información confiable.",
  alternates: { canonical: "/levantamiento-de-datos" },
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Levantamiento de datos y Business Intelligence"
        description="Ordenamiento de datos operacionales, reportes y tableros para decisiones empresariales."
        path="/levantamiento-de-datos"
      />
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}
