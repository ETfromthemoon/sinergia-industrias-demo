"use client";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ClientsStrip } from "@/components/sections/clients-strip";
import { OdooModulesGrid } from "@/components/sections/odoo-modules-grid";
import { RelatedServices } from "@/components/sections/related-services";
import { SectionLabel } from "@/components/ui/section-label";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedIcon } from "@/components/ui/animated-icon";

const beneficios = [
  "Gestión integrada de todas las áreas de tu empresa",
  "Reducción de costos operativos y errores manuales",
  "Acceso a información en tiempo real para tomar decisiones",
  "Automatización de procesos financieros y contables",
  "Escalabilidad: crece sin cambiar de sistema",
  "Código abierto: sin licencias restrictivas ni costos ocultos",
];

export default function Content() {
  return (
    <main>
      <PageHero
        variant="dark"
        eyebrow="Ready Partner Oficial Odoo"
        headline="Unifica, optimiza,"
        headlineAccent="triunfa"
        subhead="Potencia la gestión de tu empresa con Odoo. Nuestro servicio de implementación de ERP te brinda la solución integral que necesitas. Con Odoo, podrás utilizar un sistema de aplicaciones integradas para gestionar y optimizar tus actividades financieras, suministros, operaciones y más."
        badge="OFICIAL"
      />

      {/* ¿Qué es Odoo? */}
      <MotionConfig reducedMotion="user">
        <section className="bg-steel-50 border-y border-steel-200 py-24 px-4">
          <div className="mx-auto max-w-6xl">
            <SectionLabel index="01" className="mb-6">
              ERP
            </SectionLabel>

            <motion.h2
              className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              ¿Qué es Odoo?
            </motion.h2>

            <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
              {/* LEFT — text */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-base leading-relaxed text-muted-foreground">
                  Odoo ERP es una poderosa herramienta utilizada mundialmente para dar una solución adaptativa a las diferentes necesidades de organizaciones de todo tipo en ámbitos diversos tales como: la gestión de sus activos, manejo de inventarios, gestión de clientes potenciales, gestión contable, entre muchas otras. A través de su implementación adaptada a cada cliente somos capaces de generar una solución robusta pero acotada a la problemática en poco tiempo gracias a la utilización de herramientas ya existentes para la solución de nuevas problemáticas.
                </p>

                <Link
                  href="https://www.odoo.com/es_ES"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 mono-label underline-offset-4 transition-colors text-navy hover:text-cyan"
                >
                  Conocer más sobre Odoo{" "}
                  <ArrowRight className="size-3.5" />
                </Link>
              </motion.div>

              {/* RIGHT — bordered panel */}
              <motion.div
                className="relative border border-steel-200 bg-white shadow-elevated p-10"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <CornerTicks className="text-navy" size={12} />

                <div className="mb-6 flex items-center gap-3">
                  <div className="inline-flex items-center justify-center size-10 border border-steel-200 bg-white">
                    <AnimatedIcon name="cpu" size={20} tone="navy" />
                  </div>
                  <span className="mono-label text-steel-400">BENEFICIOS CLAVE</span>
                </div>

                <ul className="space-y-4">
                  {beneficios.map((b) => (
                    <li key={b} className="flex gap-4 items-start">
                      <AnimatedIcon name="shield" size={20} tone="cyan" className="shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </MotionConfig>

      <OdooModulesGrid />

      <ClientsStrip
        title="Clientes que han integrado Odoo"
        index="02"
        clients={[
          "Tottus",
          "Aramark",
          "Iansa",
          "Tresmontes Lucchetti",
          "Dimerc",
          "Asalvo",
          "Ecostandard",
          "CV Trading",
          "Vinderchile",
          "Red Circular",
          "Moriah",
          "CIAL",
          "MB Chemicals",
          "Podas Chile",
        ]}
        jointVentureLabel="Asalvo"
        jointVentureClients={["Jumbo", "Paris", "Easy", "Corona", "Ripley", "Inacap"]}
      />

      <RelatedServices current="implementacion-odoo" />

      <CtaBand />
    </main>
  );
}
