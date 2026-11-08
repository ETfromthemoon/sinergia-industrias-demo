import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { SERVICES, SITE } from "@/content/site";
import { OdooPartnerBadge } from "@/components/ui/odoo-partner-badge";
import { OperationModel } from "@/components/ui/operation-model";
import "./hero.css";

export function HeroSection() {
  return (
    <section className="operation-hero" aria-labelledby="hero-title">
      <div className="operation-hero__field" aria-hidden="true" />

      <div className="editorial-shell operation-hero__shell">
        <div className="operation-hero__body">
          <div className="operation-hero__copy">
            <p className="operation-hero__eyebrow">
              <span aria-hidden="true" />
              Tecnología · Procesos · Conocimiento
            </p>

            <h1 id="hero-title" className="operation-hero__title">
              Construimos modelos{" "}
              <span className="operation-hero__title-accent">para el mundo real.</span>
            </h1>

            <p className="operation-hero__description">
              Tecnología, procesos y conocimiento aplicados a desafíos reales de las
              organizaciones.
            </p>

            <div className="operation-hero__actions">
              <Link href="/contacto" className="operation-hero__primary action-button">
                Evaluar mi proyecto
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link href="/casos-de-exito" className="operation-hero__secondary action-button">
                Ver experiencia
                <ArrowDownRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>

          <div className="operation-hero__visual">
            <OperationModel />
            <p className="operation-hero__signature">
              Procesos inteligentes. <span>Impacto real.</span>
            </p>
          </div>
        </div>

        <div className="operation-hero__footer">
          <div className="operation-hero__credentials">
            <OdooPartnerBadge className="operation-hero__partner" />
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
              className="operation-hero__whatsapp">
              Respuesta directa por WhatsApp
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </div>

          <nav className="operation-hero__services" aria-label="Servicios de Sinergia">
            {SERVICES.map((service, index) => (
              <Link key={service.href} href={service.href} className="operation-hero__service">
                <span className="operation-hero__service-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{service.shortTitle}</span>
                <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
