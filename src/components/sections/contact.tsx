import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE } from "@/content/site";

const CHANNELS = [
  { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: SITE.phoneDisplay, href: SITE.phoneHref },
  { icon: MessageCircle, label: "WhatsApp directo", href: SITE.whatsapp },
] as const;

export function ContactSection() {
  return (
    <section id="contacto" className="focus-surface scroll-mt-24 bg-background py-16 sm:py-20">
      <div className="editorial-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="max-w-md text-4xl leading-[1.08] text-navy sm:text-5xl">
              Empecemos por entender el problema.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              No necesitas llegar con una solución definida. Cuéntanos qué está frenando
              a tu equipo y te ayudaremos a ordenar el punto de partida.
            </p>

            <div className="mt-10 space-y-3">
              {CHANNELS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex min-h-11 items-center gap-3 text-base text-foreground transition-colors hover:text-navy"
                >
                  <Icon className="size-4 text-cyan-text" />
                  {label}
                </a>
              ))}
              <p className="flex items-start gap-3 pt-1 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-cyan-text" />
                {SITE.address}, {SITE.locality}
              </p>
            </div>
          </div>

          <div className="border border-steel-200 bg-white p-6 sm:p-8 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
