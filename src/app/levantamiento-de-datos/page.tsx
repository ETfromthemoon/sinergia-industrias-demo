import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buildServiceJsonLd } from "@/lib/service-jsonld";
import Content from "./content";
import { ServiceJsonLd } from "@/components/seo/service-json-ld";

const title = "Levantamiento de datos — Business Intelligence · Sinergia Industrias";
const description =
  "Transformamos datos dispersos en insights accionables. Reportes en tiempo real y tableros personalizados.";

export const metadata: Metadata = {
  title: "Levantamiento de datos y Business Intelligence",
  description:
    "Ordenamos datos operacionales y creamos reportes y tableros que ayudan a decidir con información confiable.",
  alternates: { canonical: "/levantamiento-de-datos" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/levantamiento-de-datos",
  },
};

const jsonLd = buildServiceJsonLd({
  name: "Levantamiento de datos",
  description,
  path: "/levantamiento-de-datos",
});

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
