"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { ModuleSlider } from "@/components/ui/module-slider";
import { AnimatedIcon } from "@/components/ui/animated-icon";

const ALL_SERVICES = [
  {
    slug: "ley-rep",
    code: "REP",
    icon: "shield" as const,
    title: "Cumplimiento Ley REP",
    body: "Levantamiento y sistematización de tus obligaciones bajo la Ley 20.920.",
  },
  {
    slug: "levantamiento-de-procesos",
    code: "PRC",
    icon: "git-branch" as const,
    title: "Levantamiento de procesos",
    body: "Mapeamos tu operación e identificamos cuellos de botella reales.",
  },
  {
    slug: "levantamiento-de-datos",
    code: "DAT",
    icon: "bar-chart" as const,
    title: "Levantamiento de datos",
    body: "Ordenamos los datos dispersos de tu operación en reportes que sirven.",
  },
  {
    slug: "implementacion-odoo",
    code: "ERP",
    icon: "cpu" as const,
    title: "Implementación ERP Odoo",
    body: "Ready Partner Oficial Odoo en Chile: finanzas, inventario, RRHH y ventas en una sola plataforma.",
  },
] as const;

type RelatedServicesProps = {
  current: (typeof ALL_SERVICES)[number]["slug"];
  index?: string;
};

export function RelatedServices({ current, index = "06" }: RelatedServicesProps) {
  const related = ALL_SERVICES.filter((service) => service.slug !== current);

  return (
    <section className="section-motion-surface border-t border-steel-200 bg-steel-50 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index={index} className="mb-6">
          Servicios relacionados
        </SectionLabel>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          También puede interesarte
        </h2>

        <div className="mt-10">
          <ModuleSlider
            items={related}
            autoplayInterval={0}
            renderItem={(service) => (
              <Link
                href={`/${service.slug}`}
                className="solution-card group relative flex h-full flex-col overflow-hidden border border-steel-200 bg-white p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-cyan transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="grid size-12 place-items-center border border-steel-200 bg-steel-50 transition-colors duration-300 group-hover:border-cyan group-hover:bg-cyan/10">
                    <AnimatedIcon name={service.icon} size={25} tone="navy" />
                  </span>
                  <span className="mono-label text-steel-400 transition-colors duration-300 group-hover:text-cyan-deep">
                    {service.code}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-cyan-deep">
                  Conocer más
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            )}
          />
        </div>
      </div>
    </section>
  );
}
