import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost, getAllPosts } from "@/lib/posts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CornerTicks } from "@/components/ui/blueprint-frame";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: `${post.title} · Sinergia Industrias`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-navy-dark py-24 px-4">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-steel-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="size-3.5" />
              Volver al blog
            </Link>

            <span className="inline-block border border-cyan/40 bg-cyan/10 px-3 py-1 mono-label text-cyan text-xs mb-4">
              {post.tag}
            </span>

            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 mt-6">
              <span className="flex items-center gap-1.5 mono-label text-steel-400 text-sm">
                <Calendar className="size-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 mono-label text-steel-400 text-sm">
                <Clock className="size-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background py-16 px-4">
          <article className="mx-auto max-w-3xl">
            {post.content ? (
              <div className="prose prose-lg prose-slate max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-navy prose-a:no-underline hover:prose-a:text-cyan-deep
                prose-li:text-muted-foreground
                prose-table:border prose-table:border-steel-200
                prose-th:bg-steel-50 prose-th:px-4 prose-th:py-2 prose-th:text-sm prose-th:font-semibold
                prose-td:px-4 prose-td:py-2 prose-td:text-sm
                prose-code:text-cyan-deep prose-code:bg-steel-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-blockquote:border-l-cyan prose-blockquote:bg-steel-50 prose-blockquote:py-2 prose-blockquote:px-4
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="relative border border-steel-200 bg-steel-50 p-12 text-center">
                <CornerTicks className="text-steel-400" size={8} />
                <p className="text-muted-foreground text-lg">
                  Este artículo está en preparación. Pronto publicaremos el contenido completo.
                </p>
                <Link
                  href="/contacto"
                  className="inline-block mt-6 bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-deep transition-colors"
                >
                  Mientras tanto, conversemos tu proyecto →
                </Link>
              </div>
            )}

            {/* CTA Footer */}
            <div className="relative mt-16 overflow-hidden border border-steel-200 bg-navy-dark p-8 sm:p-10">
              <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid-dark opacity-60" />
              <CornerTicks className="text-cyan/50 z-10" size={10} />
              <div className="relative z-10 text-center">
                <h3 className="font-display text-2xl font-bold text-white">
                  ¿Necesitas ayuda con este tema?
                </h3>
                <p className="mt-3 text-steel-300 text-sm max-w-md mx-auto">
                  En Sinergia Industrias resolvemos estos desafíos todos los días. Conversemos 30 minutos sin costo.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/contacto"
                    className="bg-cyan px-6 py-3 text-sm font-semibold text-carbon hover:bg-white transition-all"
                  >
                    Conversemos tu proyecto
                  </Link>
                  <a
                    href="mailto:info@sinergiaindustrias.cl"
                    className="border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white/50 transition-colors"
                  >
                    info@sinergiaindustrias.cl
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
