import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ContactSection } from "@/components/sections/contact";
import { SITE } from "@/content/site";

export default function Content() {
  return (
    <main>
      <PageHero
        variant="dark"
        index="07"
        eyebrow="Contacto"
        headline="Primero entendamos"
        headlineAccent="el desafío"
        subhead="Cuéntanos qué está pasando en tu operación. Te responderemos con preguntas concretas y un siguiente paso claro."
        ctaLabel="Ir al formulario"
        ctaHref="#contacto"
        secondaryCtaLabel="WhatsApp directo"
        secondaryCtaHref={SITE.whatsapp}
      />
      <ContactSection />
      <section className="border-t border-steel-200 bg-steel-50 py-16 sm:py-20">
        <div className="editorial-shell grid gap-8 sm:grid-cols-2">
          <div className="flex items-start gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-navy">
              <Clock3 className="size-4" />
            </span>
            <div>
              <h2 className="font-sans text-sm font-semibold tracking-normal">Qué puedes esperar</h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                Revisamos cada solicitud de forma directa. Si podemos aportar, coordinamos
                una conversación breve con las personas adecuadas.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-navy">
              <MapPin className="size-4" />
            </span>
            <div>
              <h2 className="font-sans text-sm font-semibold tracking-normal">Oficina en Viña del Mar</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {SITE.address}, {SITE.locality}, {SITE.country}.
              </p>
              <Link
                href="https://maps.google.com/?q=Calle+Limache+3421+Viña+del+Mar+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-navy"
              >
                Abrir en Google Maps
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
