import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buildServiceJsonLd } from "@/lib/service-jsonld";
import Content from "./content";
import { ServiceJsonLd } from "@/components/seo/service-json-ld";

const title = "Levantamiento de procesos — Diagnóstico operacional · Sinergia Industrias";
const description =
  "Mapeamos tu operación, identificamos cuellos de botella y entregamos un plan técnico ejecutable.";

export const metadata: Metadata = {
  title: "Levantamiento y mejora de procesos",
  description:
    "Observamos tu operación, identificamos cuellos de botella y diseñamos un plan de mejora ejecutable para equipos industriales.",
  alternates: { canonical: "/levantamiento-de-procesos" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/levantamiento-de-procesos",
  },
};

const jsonLd = buildServiceJsonLd({
  name: "Levantamiento de procesos",
  description,
  path: "/levantamiento-de-procesos",
});

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Levantamiento y mejora de procesos"
        description="Diagnóstico de operaciones, identificación de cuellos de botella y diseño de mejoras ejecutables."
        path="/levantamiento-de-procesos"
      />
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}
