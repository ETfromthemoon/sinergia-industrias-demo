import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ALL_CLIENTS, ClientLogoMarquee } from "@/components/sections/client-logo-marquee";

export function FeaturedCaseSection() {
  return (
    <section id="experiencia" aria-labelledby="experience-title" className="bg-steel-50 py-14 sm:py-20">
      <div className="editorial-shell">
        <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <h2 id="experience-title" className="max-w-2xl text-4xl leading-tight text-foreground sm:text-5xl">
            La evidencia está en la operación.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            Trabajamos con empresas de alimentos, retail, servicios, residuos y manufactura.
          </p>
        </div>

        <article aria-labelledby="featured-client-title" className="mt-8 grid overflow-hidden bg-white sm:mt-10 lg:grid-cols-[0.85fr_1.15fr]">
          <figure className="flex flex-col">
            <div className="relative min-h-56 flex-1 sm:min-h-72">
              <Image
                src="/case-studies/ecostandard.jpg"
                alt="Contenedor de almacenamiento en la imagen publicada para el caso Ecostandard."
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[60%_center]"
              />
            </div>
            <figcaption className="border-t border-steel-200 px-5 py-3 text-xs leading-relaxed text-muted-foreground">
              Imagen publicada en el caso Ecostandard.
            </figcaption>
          </figure>

          <div className="p-6 sm:p-9 lg:p-10">
            <h3 id="featured-client-title" className="text-3xl leading-tight text-navy sm:text-4xl">Ecostandard</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Levantamos el proceso productivo e implementamos Odoo MRP y CRM para
              conectar materias primas, inventario, pedidos y oportunidades comerciales.
            </p>
            <dl className="mt-6 space-y-5 border-t border-steel-200 pt-6">
              <div>
                <dt className="text-sm font-semibold text-navy">Intervención</dt>
                <dd className="mt-2 text-base leading-relaxed text-muted-foreground">
                  Control de materias primas, inventario, pedidos y costos; integración
                  del proceso de ventas con los pedidos de fabricación.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-navy">Cambio logrado</dt>
                <dd className="mt-2 text-base leading-relaxed text-foreground">
                  Reducción de tiempos de fabricación, automatización de tareas y
                  mejora de la comunicación entre los módulos de producción.
                </dd>
              </div>
            </dl>
            <Link
              href="/casos-de-exito#ecostandard"
              className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-navy underline decoration-navy/35 underline-offset-4 transition-[color] hover:text-cyan-text"
            >
              Ver el caso Ecostandard
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </article>

        <ClientLogoMarquee className="mt-9 sm:mt-12" clients={ALL_CLIENTS} />
      </div>
    </section>
  );
}
