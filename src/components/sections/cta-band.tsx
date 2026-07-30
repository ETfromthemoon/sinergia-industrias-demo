import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type CtaBandProps = {
  title?: string;
  subhead?: string;
  ctaLabel?: string;
  ctaHref?: string;
  index?: string;
};

export function CtaBand({
  title = "Conversemos sobre lo que hoy está frenando tu operación.",
  subhead = "Una primera conversación basta para ordenar el desafío y definir si somos el equipo adecuado.",
  ctaLabel = "Iniciar una conversación",
  ctaHref = "/contacto",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-20 text-white sm:py-24">
      <div aria-hidden className="surface-noise absolute inset-0" />
      <div className="editorial-shell relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <p className="eyebrow text-cyan before:bg-cyan">Siguiente paso</p>
          <h2 className="mt-7 max-w-4xl text-5xl leading-[0.98] text-white sm:text-6xl">
            {title}
          </h2>
        </div>
        <div className="border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="text-sm leading-relaxed text-white/60">{subhead}</p>
          <Link
            href={ctaHref}
            className="group mt-7 inline-flex items-center gap-2 bg-cyan px-6 py-3.5 text-sm font-semibold text-carbon hover:bg-white"
          >
            {ctaLabel}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
