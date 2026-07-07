import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost, getAllPosts } from "@/lib/posts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

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

  const hasContent = !!post.content;

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* ── HERO — corporate, imagen con overlay ligero ── */}
        <section className="relative bg-navy-dark overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover opacity-25"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 sm:py-36">
            <Link
              href="/blog"
              className="inline-block text-steel-400 hover:text-white text-sm tracking-wide transition-colors mb-8"
            >
              Blog
            </Link>

            <span className="block text-cyan text-xs tracking-[0.18em] uppercase font-semibold mb-6">
              {post.tag}
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-[2.625rem] font-bold tracking-tight text-white leading-[1.15]">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mt-8 text-steel-400 text-sm">
              <span>{post.date}</span>
              <span aria-hidden="true" className="text-steel-600">·</span>
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
        </section>

        {/* ── BODY — columna única, corporate editorial ── */}
        <section className="px-6 py-16 sm:py-24">
          <article className="mx-auto max-w-[680px]">
            {hasContent ? (
              <div className="prose-corporate">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ children }) => (
                      <h2>{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3>{children}</h3>
                    ),
                    table: ({ children }) => (
                      <div className="table-wrapper">
                        <table>{children}</table>
                      </div>
                    ),
                    th: ({ children }) => <th>{children}</th>,
                    td: ({ children }) => <td>{children}</td>,
                    a: ({ href, children }) => (
                      <a href={href}>{children}</a>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote>{children}</blockquote>
                    ),
                    strong: ({ children }) => <strong>{children}</strong>,
                    code: ({ children }) => <code>{children}</code>,
                    hr: () => <hr />,
                    ul: ({ children }) => <ul>{children}</ul>,
                    ol: ({ children }) => <ol>{children}</ol>,
                    li: ({ children }) => <li>{children}</li>,
                    p: ({ children }) => <p>{children}</p>,
                    img: ({ src, alt }) => (
                      <img src={src} alt={alt || ""} className="content-image" />
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-steel-400 text-lg">
                  Este artículo está en preparación.
                </p>
              </div>
            )}

            {/* ── CTA — minimal, sin caja de color ── */}
            <hr className="mt-20 mb-12 border-steel-100" />
            <div className="text-center">
              <p className="font-display text-xl font-bold text-navy mb-2">
                ¿Conversemos?
              </p>
              <p className="text-steel-500 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                En Sinergia Industrias ayudamos a empresas chilenas con cumplimiento REP, ERP Odoo y procesos industriales.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <Link
                  href="/contacto"
                  className="font-semibold text-navy hover:text-cyan-deep transition-colors"
                >
                  Contacto
                </Link>
                <span className="text-steel-300">·</span>
                <a
                  href="mailto:info@sinergiaindustrias.cl"
                  className="text-steel-500 hover:text-navy transition-colors"
                >
                  info@sinergiaindustrias.cl
                </a>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
