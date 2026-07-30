import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import BlogContent from "./content";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Procesos, ERP y cumplimiento · Sinergia Industrias",
  description: "Artículos sobre Ley REP, implementación Odoo, levantamiento de procesos industriales y análisis de datos para empresas en Chile.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <BlogContent posts={posts} />
      <Footer />
    </>
  );
}
