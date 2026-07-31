import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BlogCta } from "@/components/sections/blog-cta";
import { ArticleContent } from "@/components/blog/article-content";
import { ReadingProgress } from "@/components/blog/reading-progress";
import {
  extractPostHeadings,
  getAllPosts,
  getPost,
  postDateToISO,
} from "@/lib/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artículo no encontrado" };

  const publishedTime = postDateToISO(post.date);

  return {
    title: `${post.title} · Sinergia Industrias`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime,
      authors: ["Sinergia Industrias"],
    },
    twitter: {
      card: "summary_large_image",
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

  const content = post.content ?? "";
  const headings = extractPostHeadings(content);
  const sectionHeadings = headings.filter((heading) => heading.level === 2);
  const imageSrc = post.image || "/media/analytics-dashboard.jpg";
  const relatedPosts = getAllPosts()
    .filter((candidate) => candidate.slug !== slug)
    .sort((a, b) => Number(b.tag === post.tag) - Number(a.tag === post.tag))
    .slice(0, 3);
  const siteUrl = "https://www.sinergiaindustrias.cl";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [imageSrc],
    datePublished: postDateToISO(post.date),
    author: { "@type": "Organization", name: "Sinergia Industrias" },
    publisher: {
      "@type": "Organization",
      name: "Sinergia Industrias",
      logo: { "@type": "ImageObject", url: `${siteUrl}/sinergia-logo.png` },
    },
    description: post.excerpt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${slug}` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteUrl}/blog/${slug}` },
    ],
  };

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <main className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <header className="relative overflow-hidden bg-carbon pb-16 pt-32 text-white sm:pb-24 sm:pt-40">
          <div aria-hidden className="aurora-dark absolute inset-0" />
          <div aria-hidden className="surface-noise absolute inset-0" />
          <div aria-hidden className="page-orbits">
            <span className="page-orbit" />
            <span className="page-orbit" />
            <span className="page-orbit" />
          </div>

          <div className="editorial-shell relative grid gap-12 lg:grid-cols-[1.2fr_0.58fr] lg:items-end">
            <div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/52 transition-colors hover:text-cyan"
              >
                <ArrowLeft className="size-3.5" />
                Volver al conocimiento
              </Link>
              <p className="mono-label mt-12 text-cyan">{post.tag}</p>
              <h1 className="mt-6 max-w-5xl text-[clamp(2.7rem,6vw,5.4rem)] leading-[0.96] text-white">
                {post.title}
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/62 sm:text-lg">
                {post.excerpt}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/46">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-3.5 text-cyan" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="size-3.5 text-cyan" />
                  {post.readTime} de lectura
                </span>
                <span>{sectionHeadings.length} temas principales</span>
              </div>
            </div>

            <figure className="group relative hidden aspect-[4/5] overflow-hidden border border-white/12 bg-navy lg:block">
              <Image
                src={imageSrc}
                alt=""
                fill
                priority
                sizes="34vw"
                className="object-cover opacity-72 transition-transform duration-1000 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <span className="mono-label text-white/62">Perspectiva Sinergia</span>
                <span className="font-display text-4xl text-cyan">
                  {String(sectionHeadings.length).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          </div>
        </header>

        <section className="px-4 py-14 sm:py-24">
          <div className="editorial-shell grid gap-12 lg:grid-cols-[13rem_minmax(0,46rem)] lg:items-start lg:justify-center xl:grid-cols-[13rem_minmax(0,46rem)_11rem]">
            <aside className="article-toc hidden lg:sticky lg:top-28 lg:block">
              <p className="mono-label text-cyan-deep">En este artículo</p>
              <nav className="mt-5" aria-label="Índice del artículo">
                {sectionHeadings.map((heading, index) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className="block border-l border-steel-200 py-2.5 pl-4 text-xs leading-relaxed text-muted-foreground transition-colors hover:border-cyan hover:text-navy"
                  >
                    <span className="mr-2 font-mono text-[0.58rem] text-steel-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {heading.text}
                  </a>
                ))}
              </nav>
            </aside>

            <article className="min-w-0">
              {sectionHeadings.length > 0 ? (
                <details className="mb-12 border border-steel-200 bg-steel-50 p-5 lg:hidden">
                  <summary className="cursor-pointer font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-navy">
                    Ver índice temático
                  </summary>
                  <nav className="mt-4 grid gap-2" aria-label="Índice móvil del artículo">
                    {sectionHeadings.map((heading, index) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className="text-sm text-muted-foreground"
                      >
                        <span className="mr-2 font-mono text-[0.6rem] text-cyan-deep">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </details>
              ) : null}

              {content ? (
                <ArticleContent content={content} headings={headings} />
              ) : (
                <div className="border border-steel-200 bg-steel-50 px-6 py-16 text-center">
                  <p className="text-muted-foreground">Este artículo está en preparación.</p>
                </div>
              )}
              <BlogCta />
            </article>

            <aside className="hidden xl:sticky xl:top-28 xl:block">
              <p className="mono-label text-steel-400">Criterio editorial</p>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Contenido técnico organizado para apoyar decisiones, no para llenar espacio.
              </p>
              <div className="mt-6 h-px w-10 bg-cyan" />
            </aside>
          </div>
        </section>

        {relatedPosts.length > 0 ? (
          <section className="border-t border-steel-200 bg-steel-50 px-4 py-20 sm:py-24">
            <div className="editorial-shell">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">Siguiente lectura</p>
                  <h2 className="mt-5 text-4xl text-navy sm:text-5xl">Continúa explorando.</h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy"
                >
                  Ver todo el blog
                  <ArrowUpRight className="size-4 text-cyan-deep" />
                </Link>
              </div>
              <div className="mt-10 grid gap-px overflow-hidden border border-steel-200 bg-steel-200 md:grid-cols-3">
                {relatedPosts.map((related, index) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex min-h-72 flex-col bg-white p-7 transition-colors hover:bg-navy hover:text-white"
                  >
                    <div className="flex items-center justify-between">
                      <span className="mono-label text-cyan-deep group-hover:text-cyan">{related.tag}</span>
                      <span className="font-mono text-[0.62rem] text-steel-400">0{index + 1}</span>
                    </div>
                    <h3 className="mt-10 font-sans text-xl font-bold leading-snug tracking-tight">
                      {related.title}
                    </h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/58">
                      {related.excerpt}
                    </p>
                    <ArrowUpRight className="mt-auto size-5 text-cyan-deep transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
