import { VERIFIED_METRICS } from "@/content/site";

export function CredibilityBar() {
  return (
    <section aria-label="Experiencia comprobada" className="border-b border-steel-200 bg-steel-50">
      <div className="editorial-shell grid md:grid-cols-[1.1fr_1.9fr]">
        <div className="flex items-center border-b border-steel-200 py-7 md:border-b-0 md:border-r md:pr-8">
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Experiencia acumulada en terreno, sistemas y cumplimiento.{" "}
            <span className="text-foreground">Cifras actualizadas a 2026.</span>
          </p>
        </div>
        <div className="grid grid-cols-3 divide-x divide-steel-200">
          {VERIFIED_METRICS.map((metric) => (
            <div key={metric.label} className="py-7 pl-4 sm:pl-7">
              <span className="block font-display text-3xl text-navy sm:text-4xl">
                {metric.display}
              </span>
              <span className="mt-1 block text-[0.67rem] leading-tight text-muted-foreground sm:text-xs">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
