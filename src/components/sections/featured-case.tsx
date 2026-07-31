import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CLIENTS } from "@/content/site";

export function FeaturedCaseSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="editorial-shell">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Experiencia</p>
            <h2 className="mt-7 text-5xl leading-[0.98] sm:text-6xl">
              La evidencia está
              <br />
              <em className="font-normal text-navy">en la operación.</em>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Trabajamos con empresas de alimentos, retail, servicios, residuos y
              manufactura. Cuando no existe una métrica auditada, describimos el cambio
              sin convertirlo en un porcentaje ficticio.
            </p>
          </div>

          <article className="group relative overflow-hidden bg-steel-50 p-7 shadow-[0_0_0_rgba(5,27,46,0)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(5,27,46,0.12)] sm:p-10 lg:p-12">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-cyan transition-transform duration-700 group-hover:scale-x-100"
            />
            <div
              aria-hidden
              className="absolute -right-24 -top-24 size-80 rounded-full border border-navy/8 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105"
            />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <p className="mono-label text-cyan-deep">Caso destacado · Manufactura</p>
                <p className="font-display text-3xl text-steel-300">01</p>
              </div>
              <h3 className="mt-10 text-5xl text-foreground">Ecostandard</h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Levantamos el proceso productivo e implementamos Odoo MRP y CRM para
                conectar materias primas, inventario, pedidos y oportunidades comerciales.
              </p>
              <div className="mt-9 grid gap-6 border-t border-steel-200 pt-7 sm:grid-cols-2">
                <div>
                  <p className="mono-label text-steel-400">Intervención</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Procesos, manufactura, inventario y gestión comercial en una misma
                    secuencia operacional.
                  </p>
                </div>
                <div>
                  <p className="mono-label text-navy">Cambio logrado</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    Mayor control de fabricación, automatización de tareas y mejor
                    seguimiento de clientes potenciales.
                  </p>
                </div>
              </div>
              <Link
                href="/casos-de-exito"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-navy"
              >
                Explorar todos los casos
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-steel-200 pt-7">
          <span className="mono-label text-steel-400">Han trabajado con Sinergia</span>
          {CLIENTS.map((client) => (
            <span
              key={client}
              className="font-display text-lg text-steel-600 transition-colors duration-300 hover:text-cyan-deep"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
