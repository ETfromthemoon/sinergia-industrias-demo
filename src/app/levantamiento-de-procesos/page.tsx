import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: "Levantamiento de procesos — Diagnóstico operacional · Sinergia",
  description:
    "Mapeamos tu operación, identificamos cuellos de botella y entregamos un plan técnico ejecutable.",
  alternates: { canonical: "/levantamiento-de-procesos" },
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
