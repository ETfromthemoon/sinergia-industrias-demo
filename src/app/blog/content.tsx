"use client";

import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionLabel } from "@/components/ui/section-label";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { useFormSubmit, FormSubmitFeedback } from "@/components/ui/form-submit";
import type { Post } from "@/lib/posts";

interface BlogContentProps {
  posts: Post[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  const { status, message, handleSubmit } = useFormSubmit();

  return (
    <main>
      <PageHero
        variant="dark"
        index="05"
        eyebrow="Blog"
        headline="Ideas, metodología"
        headlineAccent="y casos reales"
        subhead="Escribimos sobre lo que hacemos todos los días: procesos industriales, cumplimiento normativo, tecnología ERP y datos que generan valor."
        ctaLabel="Conversemos tu proyecto"
        ctaHref="/contacto"
      />

      {/* ── Posts grid ────────────────────────────── */}
      <section className="bg-background py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <SectionLabel index="01" className="mb-6">
            Artículos
          </SectionLabel>

          <motion.h2
            className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Lo último
          </motion.h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                className="group relative border border-steel-200 bg-white transition-colors hover:bg-steel-50 flex flex-col"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
                <CornerTicks className="text-steel-400" size={8} />

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="border border-cyan/40 bg-cyan/10 px-2.5 py-1 mono-label text-cyan text-xs backdrop-blur-sm">
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Meta row */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1 mono-label text-steel-400 text-xs">
                      <Calendar className="size-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 mono-label text-steel-400 text-xs">
                      <Clock className="size-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground leading-tight mb-2 group-hover:text-navy transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-cyan-deep transition-colors mt-auto"
                  >
                    Leer artículo
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <MotionConfig reducedMotion="user">
            <motion.div
              className="relative mt-20 overflow-hidden border border-steel-200 bg-navy-dark"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid-dark opacity-60" />
              <div aria-hidden className="grain pointer-events-none absolute inset-0" />
              <CornerTicks className="text-cyan/50 z-10" size={12} />

              <div className="relative z-10 px-8 py-14 sm:px-14 text-center">
                <SectionLabel index="02" tone="accent" className="mb-4 justify-center flex">
                  Mantente al día
                </SectionLabel>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  ¿Quieres recibir nuestros artículos?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-steel-300">
                  Escribimos sobre procesos, tecnología ERP y cumplimiento normativo. Sin spam, solo cuando hay algo que vale la pena leer.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-8 flex max-w-md gap-2"
                >
                  <input type="hidden" name="_subject" value="Suscripción Blog — Sinergia Industrias" />
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    required
                    className="flex-1 border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan focus:outline-none transition-colors"
                  />
                  {status !== "success" ? (
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="bg-cyan px-6 py-3 text-sm font-semibold text-carbon transition-all hover:bg-white hover:shadow-[0_0_32px_-4px_oklch(0.68_0.14_205_/_0.5)] disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
                    >
                      {status === "loading" ? "..." : "Suscribirme"}
                    </button>
                  ) : (
                    <div className="bg-cyan/20 px-6 py-3 text-sm font-semibold text-cyan shrink-0 flex items-center gap-2">
                      ✓ Suscrito
                    </div>
                  )}
                  <FormSubmitFeedback status={status} message={message} />
                </form>
              </div>
            </motion.div>
          </MotionConfig>
        </div>
      </section>
    </main>
  );
}
