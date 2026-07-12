import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Content from "./content";

export const metadata: Metadata = {
  title: "Contacto — Sinergia Industrias",
  description:
    "Cuéntanos qué necesita tu empresa. Una conversación de 30 minutos basta para saber si podemos ayudarte y cómo.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto — Sinergia Industrias",
    description:
      "Cuéntanos qué necesita tu empresa. Una conversación de 30 minutos basta para saber si podemos ayudarte y cómo.",
    type: "website",
    url: "/contacto",
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
