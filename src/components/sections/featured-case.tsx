import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ALL_CLIENTS, ClientLogoMarquee } from "@/components/sections/client-logo-marquee";

export function FeaturedCaseSection() {
  return (
    <section id="experiencia" aria-labelledby="experience-title" className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="editorial-shell grid items-start gap-x-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <h2 id="experience-title" className="text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl xl:text-6xl">
            La evidencia está en la operación.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
            Trabajamos con empresas de alimentos, retail, servicios, residuos y manufactura.
          </p>
        </div>

        <article aria-labelledby="featured-client-title" className="mt-8 border-t-2 border-cyan bg-steel-50 sm:mt-10 lg:mt-0">
          <figure>
            <div className="relative h-56 sm:h-64 lg:h-56 xl:h-64">
              <Image
                src="/case-studies/ecostandard.jpg"
                alt="Contenedor de almacenamiento en la imagen publicada para el caso Ecostandard."
                fill
                sizes="(min-width: 1216px) 728px, (min-width: 1024px) calc(64vw - 51px), 100vw"
                className="object-cover object-[60%_center]"
              />
            </div>
            <figcaption className="border-t border-steel-200 px-5 py-3 text-xs leading-relaxed text-muted-foreground">
              Imagen publicada en el caso Ecostandard.
            </figcaption>
          </figure>

          <div className="relative isolate overflow-hidden p-6 sm:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 -z-10 size-80 rounded-full border border-navy/6"
            />
            <h3 id="featured-client-title" className="text-3xl leading-tight text-navy sm:text-4xl">Ecostandard</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Levantamos el proceso productivo e implementamos Odoo MRP y CRM para
              conectar materias primas, inventario, pedidos y oportunidades comerciales.
            </p>
            <dl className="mt-6 grid gap-5 border-t border-steel-200 pt-6 sm:grid-cols-2 sm:gap-8">
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
              className="group/link mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-navy underline decoration-navy/35 underline-offset-4 transition-colors hover:text-cyan-text focus-visible:text-cyan-text"
            >
              Ver el caso Ecostandard
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 motion-safe:transition-transform motion-safe:group-hover/link:translate-x-0.5 motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-focus-visible/link:translate-x-0.5 motion-safe:group-focus-visible/link:-translate-y-0.5"
              />
            </Link>
          </div>
        </article>

        <ClientLogoMarquee className="mt-10 sm:mt-14 lg:col-span-2" clients={ALL_CLIENTS} />
      </div>
    </section>
  );
}
