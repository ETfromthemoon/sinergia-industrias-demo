import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Content from "./content";

const title = "Levantamiento de procesos — Diagnóstico operacional · Sinergia Industrias";
const description =
  "Mapeamos tu operación, identificamos cuellos de botella y entregamos un plan técnico ejecutable.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/levantamiento-de-procesos" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/levantamiento-de-procesos",
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
