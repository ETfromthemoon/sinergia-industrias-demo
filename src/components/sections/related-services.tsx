"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { ModuleSlider } from "@/components/ui/module-slider";

const ALL_SERVICES = [
  { slug: "ley-rep", title: "Cumplimiento Ley REP", body: "Levantamiento y sistematización de tus obligaciones bajo la Ley 20.920." },
  { slug: "levantamiento-de-procesos", title: "Levantamiento de procesos", body: "Mapeamos tu operación e identificamos cuellos de botella reales." },
  { slug: "levantamiento-de-datos", title: "Levantamiento de datos", body: "Ordenamos los datos dispersos de tu operación en reportes que sirven." },
  { slug: "implementacion-odoo", title: "Implementación ERP Odoo", body: "Ready Partner Oficial Odoo en Chile: finanzas, inventario, RRHH y ventas en una sola plataforma." },
] as const;

type RelatedServicesProps = {
  current: (typeof ALL_SERVICES)[number]["slug"];
  index?: string;
};

export function RelatedServices({ current, index = "06" }: RelatedServicesProps) {
  const related = ALL_SERVICES.filter((s) => s.slug !== current);

  return (
    <section className="border-t border-steel-200 bg-steel-50 py-24 px-4">
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
            itemsPerView={{ sm: 1, md: 2, lg: 3 }}
            autoplayInterval={0}
            renderItem={(service) => (
              <Link
                href={`/${service.slug}`}
                className="group flex h-full flex-col border border-steel-200 bg-white p-6 transition-colors hover:bg-white hover:border-navy/30"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                  Conocer más
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )}
          />
        </div>
      </div>
    </section>
  );
}
