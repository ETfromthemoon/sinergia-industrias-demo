"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { OdooLogo } from "@/components/ui/odoo-logo";
import { ModuleSlider } from "@/components/ui/module-slider";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import type { IconName } from "@/components/ui/animated-icon";

type ServiceData = {
  title: string;
  body: string;
  href: string;
  image: string;
  imageAlt: string;
  iconName: IconName;
  isOdoo?: boolean;
  odooModules?: string[];
};

const SERVICES: ServiceData[] = [
  {
    title: "Implementación ERP Odoo",
    body: "Somos Ready Partner Oficial Odoo en Chile. Una sola plataforma para que finanzas, bodega, RRHH y operaciones trabajen con los mismos datos, en tiempo real.",
    href: "/implementacion-odoo",
    image: "/media/plant-floor.jpg",
    imageAlt: "Planta industrial con implementación Odoo",
    iconName: "box",
    isOdoo: true,
    odooModules: ["Finanzas", "Inventario", "RRHH", "Ventas", "Operaciones", "Reportería"],
  },
  {
    title: "Cumplimiento Ley REP",
    body: "Calculamos, documentamos y reportamos tus obligaciones bajo la ley 20.920. Sin multas, sin sorpresas.",
    href: "/ley-rep",
    image: "/media/warehouse-storage.jpg",
    imageAlt: "Bodega industrial con estanterías de almacenamiento",
    iconName: "shield",
  },
  {
    title: "Levantamiento de procesos",
    body: "Mapeamos tu operación, identificamos los cuellos de botella reales y entregamos un plan técnico ejecutable.",
    href: "/levantamiento-de-procesos",
    image: "/media/whiteboard-process.jpg",
    imageAlt: "Equipo mapeando un proceso en una pizarra",
    iconName: "git-branch",
  },
  {
    title: "Levantamiento de datos",
    body: "Ordenamos los datos dispersos de tu operación para que los reportes reflejen lo que realmente pasa y las decisiones se tomen con información real.",
    href: "/levantamiento-de-datos",
    image: "/media/analytics-dashboard.jpg",
    imageAlt: "Panel de analítica con gráficos de datos en una pantalla",
    iconName: "bar-chart",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const numeralY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} id="servicios" className="bg-background py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <div className="relative mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -left-2 -top-14 select-none font-display font-bold text-steel-100 lg:-top-20"
            style={{ fontSize: "clamp(120px, 14vw, 180px)", y: numeralY }}
          >
            01
          </motion.span>
          <div className="relative">
            <SectionLabel index="01" className="mb-5">
              Áreas de servicio
            </SectionLabel>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Cuatro áreas.
              <br />
              Un solo equipo.
            </h2>
          </div>
          <p className="relative max-w-xs text-sm leading-relaxed text-muted-foreground">
            Cada módulo opera por separado o integrado. Conectamos cumplimiento, procesos y
            tecnología en un mismo sistema.
          </p>
        </div>

        {/* Service slider */}
        <ModuleSlider
          items={SERVICES}
          itemsPerView={{ sm: 1, md: 2, lg: 3 }}
          renderItem={(service) => (
            <Link
              href={service.href}
              className="group relative flex h-full flex-col bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated"
            >
              {/* Image area */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/40 to-transparent"
                />
                {/* Icon */}
                <div className="absolute bottom-3 left-3 inline-flex border border-white/20 bg-white/10 p-2 backdrop-blur-sm">
                  {service.isOdoo ? (
                    <OdooLogo size={18} />
                  ) : (
                    <AnimatedIcon name={service.iconName} size={18} tone="white" />
                  )}
                </div>
                {/* Odoo badge */}
                {service.isOdoo && (
                  <span className="absolute right-3 top-3 border border-cyan/40 bg-cyan/10 px-2 py-0.5 text-[0.6rem] font-mono uppercase tracking-wider text-cyan backdrop-blur-sm">
                    OFICIAL
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Big animated icon */}
                <div className="mb-4 inline-flex items-center justify-center size-12 border border-steel-200 bg-steel-50">
                  {service.isOdoo ? (
                    <OdooLogo size={28} />
                  ) : (
                    <AnimatedIcon name={service.iconName} size={28} tone="navy" />
                  )}
                </div>
                <h3 className="font-display mb-3 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>

                {/* Module badges for Odoo */}
                {service.isOdoo && service.odooModules && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.odooModules.map((mod) => (
                      <span
                        key={mod}
                        className="border border-steel-200 px-2 py-0.5 text-[0.65rem] text-steel-500 transition-colors group-hover:border-cyan/30 group-hover:text-cyan"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                )}

                <ArrowUpRight className="mt-4 size-5 self-end text-steel-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
              </div>
            </Link>
          )}
        />
      </div>
    </section>
  );
}
