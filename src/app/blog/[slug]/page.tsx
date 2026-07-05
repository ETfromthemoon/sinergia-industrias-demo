import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost, getAllPosts } from "@/lib/posts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import ArticleSidebar from "./article-sidebar";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function extractHeadings(markdown: string): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/[`*_~\[\]()]/g, "").trim();
    const id = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    headings.push({ id, text, level });
  }
  return headings;
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

  const headings = post.content ? extractHeadings(post.content) : [];
  const hasContent = !!post.content;

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO FULL-BLEED ─────────────────────── */}
        <section className="relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 h-[70vh] min-h-[500px]">
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 via-navy-dark/70 to-navy-dark/95" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 pt-32 pb-20 sm:pt-40 sm:pb-28 h-[70vh] min-h-[500px] flex flex-col justify-end">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-block text-steel-300 hover:text-white text-sm tracking-wide transition-colors mb-8"
            >
              ← Volver al blog
            </Link>

            {/* Tag + meta */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5">
              <span className="text-cyan text-xs tracking-[0.15em] uppercase font-semibold">
                {post.tag}
              </span>
              <span className="text-steel-300 text-sm">
                {post.date}
              </span>
              <span className="text-steel-300 text-sm">
                {post.readTime} de lectura
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </section>

        {/* ── CONTENT + SIDEBAR ───────────────────── */}
        <section className="bg-white pb-24 px-4">
          <div className="mx-auto max-w-6xl flex gap-12">
            {/* Article body */}
            <article className="flex-1 min-w-0 max-w-3xl pt-12">
              {hasContent ? (
                <div className="prose-content">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({ children, ...props }) => {
                        const text = String(children);
                        const id = text
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "");
                        return (
                          <h2 id={id} {...props}>
                            {children}
                          </h2>
                        );
                      },
                      h3: ({ children, ...props }) => {
                        const text = String(children);
                        const id = text
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "");
                        return (
                          <h3 id={id} {...props}>
                            {children}
                          </h3>
                        );
                      },
                      // Drop cap on first paragraph
                      p: ({ children, ...props }) => {
                        // Check if this is the first text paragraph
                        const text = typeof children === "string" ? children : "";
                        return <p {...props}>{children}</p>;
                      },
                      table: ({ children }) => (
                        <div className="overflow-x-auto my-8">
                          <table className="w-full border-collapse text-sm">
                            {children}
                          </table>
                        </div>
                      ),
                      th: ({ children }) => (
                        <th className="border-b-2 border-steel-200 bg-steel-50 px-5 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider first:pl-0">
                          {children}
                        </th>
                      ),
                      td: ({ children }) => (
                        <td className="border-b border-steel-100 px-5 py-3 text-muted-foreground first:pl-0">
                          {children}
                        </td>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-navy font-medium hover:text-cyan-deep transition-colors"
                          style={{
                            textDecoration: "underline",
                            textDecorationColor: "oklch(0.68 0.14 205 / 0.3)",
                            textUnderlineOffset: "3px",
                            textDecorationThickness: "1px",
                          }}
                        >
                          {children}
                        </a>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-2 border-cyan my-8 pl-6 py-1 bg-steel-50/50 italic text-muted-foreground">
                          {children}
                        </blockquote>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-foreground">
                          {children}
                        </strong>
                      ),
                      code: ({ children }) => (
                        <code className="text-cyan-deep bg-steel-50 px-1.5 py-0.5 rounded text-sm font-normal">
                          {children}
                        </code>
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-steel-400 text-lg leading-relaxed">
                    Este artículo está en preparación. Pronto publicaremos el contenido completo.
                  </p>
                </div>
              )}

              {/* Divider */}
              <hr className="my-16 border-steel-150" />

              {/* CTA Footer — minimal */}
              <div className="bg-navy-dark px-10 py-12 text-center">
                <p className="font-display text-2xl font-bold text-white mb-3">
                  ¿Necesitas ayuda con este tema?
                </p>
                <p className="text-steel-300 text-sm max-w-md mx-auto leading-relaxed mb-8">
                  En Sinergia Industrias resolvemos estos desafíos todos los días. Conversemos 30 minutos sin costo ni compromiso.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href="/contacto"
                    className="bg-cyan px-8 py-3.5 text-sm font-semibold text-carbon hover:bg-white transition-all duration-200"
                  >
                    Conversemos tu proyecto
                  </Link>
                  <a
                    href="mailto:info@sinergiaindustrias.cl"
                    className="px-8 py-3.5 text-sm font-medium text-steel-300 hover:text-white transition-colors duration-200"
                  >
                    info@sinergiaindustrias.cl
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <ArticleSidebar headings={headings} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
