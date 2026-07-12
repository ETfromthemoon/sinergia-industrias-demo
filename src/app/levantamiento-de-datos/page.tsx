import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buildServiceJsonLd } from "@/lib/service-jsonld";
import Content from "./content";

const title = "Levantamiento de datos — Business Intelligence · Sinergia Industrias";
const description =
  "Transformamos datos dispersos en insights accionables. Reportes en tiempo real y tableros personalizados.";

export const metadata: Metadata = {
  title,
  description,
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
