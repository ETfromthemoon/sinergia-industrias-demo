import { Check } from "lucide-react";

const PRINCIPLES = [
  "Uso estratégico de tecnologías de información",
  "Metodologías de procesos alineadas a la Industria 4.0",
  "Enfoque en conocimiento, autoaprendizaje y mejora continua",
] as const;

export function BrandFilmSection() {
  return (
    <section aria-labelledby="approach-title" className="bg-background py-14 sm:py-20">
      <div className="editorial-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <h2 id="approach-title" className="max-w-2xl text-3xl leading-tight text-navy sm:text-4xl">
            Diseñamos e implementamos soluciones de transformación digital que
            optimizan procesos y generan impacto real.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Articulamos tecnología, procesos y conocimiento para ordenar la operación
            y sostener mejoras concretas.
          </p>
        </div>

        <ul className="self-center divide-y divide-steel-200">
          {PRINCIPLES.map((principle) => (
            <li key={principle} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-cyan-text" />
              <span className="text-base leading-relaxed text-ink-soft">{principle}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
