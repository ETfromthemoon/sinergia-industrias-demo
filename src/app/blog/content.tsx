"use client";

import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
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

  if (posts.length === 0) {
    return (
      <main>
        <PageHero
          variant="dark"
          index="05"
          eyebrow="Blog"
          headline="Ideas, metodología"
          headlineAccent="y casos reales"
          subhead="Pronto publicaremos artículos sobre procesos industriales, cumplimiento normativo, tecnología ERP y datos que generan valor."
          ctaLabel="Conversemos tu proyecto"
          ctaHref="/contacto"
        />
      </main>
    );
  }

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main>
      {/* ── HERO: Último artículo full-width ────────── */}
      <section className="relative overflow-hidden bg-navy-dark">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={featured.image}
            alt=""
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy-dark/40" />
          <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid-dark opacity-40" />
          <div aria-hidden className="grain pointer-events-none absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-32 sm:py-40">
          <CornerTicks className="text-cyan/50 mb-8" size={14} />

          <div className="max-w-3xl">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="border border-cyan/40 bg-cyan/10 px-3 py-1 mono-label text-cyan text-xs backdrop-blur-sm">
                {featured.tag}
              </span>
              <span className="flex items-center gap-1.5 text-steel-300 text-sm">
                <Calendar className="size-3.5" />
                {featured.date}
              </span>
              <span className="flex items-center gap-1.5 text-steel-300 text-sm">
                <AnimatedIcon name="clock" size={14} />
                {featured.readTime}
              </span>
            </div>

            {/* Section label */}
            <span className="inline-block mono-label text-cyan/70 text-xs tracking-[0.2em] uppercase mb-4">
              Último artículo
            </span>

            {/* Title */}
            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {featured.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              className="mt-5 text-base sm:text-lg leading-relaxed text-steel-300 max-w-2xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {featured.excerpt}
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/blog/${featured.slug}`}
                className="group inline-flex items-center gap-2 bg-cyan px-6 py-3 text-sm font-semibold text-carbon transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_32px_-4px_oklch(0.60_0.105_208_/_0.5)]"
              >
                Leer artículo completo
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── Más artículos ──────────────────────────── */}
      {rest.length > 0 && (
        <section className="bg-background py-24 px-4">
          <div className="mx-auto max-w-6xl">
            <SectionLabel index="01" className="mb-6">
              Más artículos
            </SectionLabel>

            <motion.h2
              className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              Sigue explorando
            </motion.h2>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
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
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1 mono-label text-steel-400 text-xs">
                        <Calendar className="size-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1 mono-label text-steel-400 text-xs">
                        <AnimatedIcon name="clock" size={12} />
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
          </div>
        </section>
      )}

      {/* ── CTA Final ──────────────────────────────── */}
      <section className="bg-background pb-24 px-4">
        <div className="mx-auto max-w-6xl">
          <MotionConfig reducedMotion="user">
            <motion.div
              className="relative overflow-hidden border border-steel-200 bg-navy-dark"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid-dark opacity-60" />
              <div aria-hidden className="grain pointer-events-none absolute inset-0" />
              <CornerTicks className="text-cyan/50 z-10" size={12} />

              <div className="relative z-10 px-8 py-16 sm:px-14">
                <div className="grid sm:grid-cols-2 gap-10 items-center">
                  {/* Newsletter */}
                  <div>
                    <SectionLabel index="02" tone="accent" className="mb-4">
                      Mantente al día
                    </SectionLabel>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      ¿Quieres recibir nuestros artículos?
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-steel-300 max-w-md">
                      Escribimos sobre procesos, tecnología ERP y cumplimiento normativo. Sin spam, solo cuando hay algo que vale la pena leer.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-6 flex gap-2"
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
                          className="bg-cyan px-6 py-3 text-sm font-semibold text-carbon transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_32px_-4px_oklch(0.60_0.105_208_/_0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 shrink-0"
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

                  {/* Contacto directo */}
                  <div className="sm:border-l sm:border-white/10 sm:pl-10">
                    <SectionLabel index="03" tone="accent" className="mb-4">
                      Conversemos
                    </SectionLabel>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      ¿Necesitas ayuda con tu empresa?
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-steel-300 max-w-md">
                      Una conversación de 30 minutos basta para saber si podemos ayudarte y cómo. Sin compromiso.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href="/contacto"
                        className="bg-cyan px-6 py-3 text-sm font-semibold text-carbon transition-all duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep"
                      >
                        Conversemos tu proyecto
                      </Link>
                      <a
                        href="mailto:info@sinergiaindustrias.cl"
                        className="border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-deep inline-flex items-center gap-1.5"
                      >
                        info@sinergiaindustrias.cl
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </MotionConfig>
        </div>
      </section>
    </main>
  );
}
