import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/content/site";

export function ServicesSection() {
  return (
    <section id="servicios" aria-labelledby="services-title" className="bg-background py-14 sm:py-20">
      <div className="editorial-shell">
        <h2 id="services-title" className="max-w-3xl text-4xl leading-tight text-foreground sm:text-5xl">
          Cuatro capacidades. <span className="text-navy">Un solo criterio.</span>
        </h2>

        <ul className="mt-8 border-t border-steel-200 sm:mt-10">
          {SERVICES.map((service) => (
            <li key={service.href} className="border-b border-steel-200">
              <Link
                href={service.href}
                className="group grid grid-cols-[1fr_auto] items-start gap-x-5 gap-y-3 py-6 transition-[background-color] hover:bg-steel-50 sm:grid-cols-[0.7fr_1fr_auto] sm:items-center sm:gap-8 sm:px-4 sm:py-7"
              >
                <span>
                  <span className="block text-sm font-semibold text-cyan-text">{service.eyebrow}</span>
                  <span className="mt-1 block font-display text-3xl leading-tight text-foreground">
                    {service.shortTitle}
                  </span>
                </span>
                <span className="col-start-1 row-start-2 max-w-xl text-base leading-relaxed text-muted-foreground sm:col-start-auto sm:row-start-auto">
                  {service.description}
                </span>
                <span aria-hidden="true" className="col-start-2 row-start-1 grid size-10 place-items-center text-navy transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:col-start-auto sm:row-start-auto">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
