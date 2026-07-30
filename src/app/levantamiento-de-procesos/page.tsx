import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Content from "./content";
import { ServiceJsonLd } from "@/components/seo/service-json-ld";

export const metadata: Metadata = {
  title: "Levantamiento y mejora de procesos",
  description:
    "Observamos tu operación, identificamos cuellos de botella y diseñamos un plan de mejora ejecutable para equipos industriales.",
  alternates: { canonical: "/levantamiento-de-procesos" },
};

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
