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
    <section id="contacto" className="bg-background py-20 sm:py-28">
      <div className="editorial-shell">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Primera conversación</p>
            <h2 className="mt-7 text-5xl leading-[0.98] sm:text-6xl">
              Empecemos por
              <br />
              <em className="font-normal text-navy">entender el problema.</em>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
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
                  className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-navy"
                >
                  <Icon className="size-4 text-cyan-deep" />
                  {label}
                </a>
              ))}
              <p className="flex items-start gap-3 pt-1 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-cyan-deep" />
                {SITE.address}, {SITE.locality}
              </p>
            </div>
          </div>

          <div className="border border-steel-200 bg-white p-6 shadow-card sm:p-9 lg:p-11">
            <div className="hidden">
              <div>
                <p className="mono-label text-cyan-deep">Solicitud de contacto</p>
                <p className="mt-2 text-sm text-muted-foreground">Cinco campos, sin rodeos.</p>
              </div>
              <span className="hidden font-display text-3xl text-steel-300 sm:block">01</span>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
