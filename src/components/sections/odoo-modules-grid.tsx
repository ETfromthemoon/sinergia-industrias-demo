"use client";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { SectionLabel } from "@/components/ui/section-label";
import { ModuleSlider } from "@/components/ui/module-slider";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import type { IconName } from "@/components/ui/animated-icon";

type ModuleCategory = {
  title: string;
  icon: IconName;
  code: string;
  modules: { name: string; description: string }[];
};

const MODULE_CATEGORIES: ModuleCategory[] = [
  {
    title: "Inventario y fabricación",
    icon: "box",
    code: "INV",
    modules: [
      { name: "Inventario", description: "Gestión de almacenes en línea" },
      { name: "MRP", description: "Fabricación + mantenimiento + PLM + calidad" },
      { name: "PLM", description: "Ciclo de vida del producto" },
      { name: "Compra", description: "Cadena de suministro y rendimiento" },
      { name: "Mantenimiento", description: "Software para fabricantes modernos" },
      { name: "Calidad", description: "Gestión de calidad industrial" },
    ],
  },
  {
    title: "Finanzas",
    icon: "calculator",
    code: "FIN",
    modules: [
      { name: "Contabilidad", description: "Accesible siempre y en cualquier lugar" },
      { name: "Facturación", description: "Gestiona contratos, cobra más rápido" },
      { name: "Gastos", description: "Gestión de gastos de empleados" },
      { name: "Documentos", description: "Conviértete en empresa digital" },
      { name: "Firma", description: "Envía, firma y aprueba documentos en línea" },
    ],
  },
  {
    title: "Ventas",
    icon: "cart",
    code: "CRM",
    modules: [
      { name: "CRM", description: "Seguimiento y cierre de oportunidades" },
      { name: "Ventas", description: "Cotizaciones claras con firmas electrónicas" },
      { name: "Punto de venta", description: "Configúralo en minutos, vende en segundos" },
      { name: "Suscripciones", description: "Facturas recurrentes de forma fácil" },
      { name: "Alquiler", description: "De la programación a la facturación" },
    ],
  },
  {
    title: "Sitio web",
    icon: "globe",
    code: "WEB",
    modules: [
      { name: "Sitios web", description: "Fácil. Para celulares. Código abierto" },
      { name: "E-commerce", description: "Código abierto. Escalable" },
      { name: "Blogs", description: "Plataforma de blog de código abierto" },
      { name: "eLearning", description: "Plataforma de eLearning" },
      { name: "Chat en vivo", description: "Asistencia en tiempo real" },
    ],
  },
  {
    title: "RRHH",
    icon: "users",
    code: "HR",
    modules: [
      { name: "Empleados", description: "Reclutamiento, valoraciones, permisos" },
      { name: "Reclutamiento", description: "Proceso de reclutamiento fácil" },
      { name: "Vacaciones", description: "Gestión de vacaciones y ausencias" },
      { name: "Valoraciones", description: "Evalúa el rendimiento" },
      { name: "Flota", description: "Vehículos, contratos, costos" },
    ],
  },
  {
    title: "Marketing",
    icon: "megaphone",
    code: "MKT",
    modules: [
      { name: "Automatización", description: "Pon tu empresa en piloto automático" },
      { name: "Email Marketing", description: "Diseña correos electrónicos" },
      { name: "SMS Marketing", description: "Campañas instantáneas" },
      { name: "Social", description: "Gestiona tus redes sociales" },
      { name: "Encuestas", description: "Mejora el rendimiento" },
    ],
  },
  {
    title: "Servicios",
    icon: "settings",
    code: "SRV",
    modules: [
      { name: "Proyectos", description: "Increíble, sencillo, código abierto" },
      { name: "Registro de horas", description: "Tan rápido como se te ocurran" },
      { name: "Servicio externo", description: "Excelentes servicios en todas partes" },
      { name: "Asistencia", description: "Excelente servicio al cliente" },
      { name: "Planeación", description: "Gran ejecución" },
      { name: "Citas", description: "Automatiza tu programación" },
    ],
  },
  {
    title: "Productividad",
    icon: "zap",
    code: "PRD",
    modules: [
      { name: "Conversaciones", description: "Chats privados y grupales integrados" },
      { name: "Aprobaciones", description: "Gestión de aprobaciones en línea" },
      { name: "VoIP", description: "Telefonía integrada" },
      { name: "Odoo Studio", description: "Crea y personaliza en minutos" },
    ],
  },
];

export function OdooModulesGrid() {
  return (
    <section className="bg-background px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="03" className="mb-5">
              Aplicaciones
            </SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Una aplicación para cada necesidad
            </h2>
          </div>
          <span className="mono-label text-steel-400">{MODULE_CATEGORIES.length} CATEGORÍAS · 40+ APLICACIONES</span>
        </div>

        <ModuleSlider
          items={MODULE_CATEGORIES}
          itemsPerView={{ sm: 1, md: 2, lg: 3 }}
          className="pb-4"
          renderItem={(cat) => (
            <div className="group relative border border-steel-200 bg-white p-6 transition-colors hover:bg-steel-50 h-full">
              <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
              <CornerTicks className="text-steel-400" size={8} />

              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex items-center justify-center size-12 border border-steel-200 bg-white">
                  <AnimatedIcon name={cat.icon} size={28} tone="navy" />
                </div>
                <div>
                  <span className="mono-label text-steel-400">{cat.code}</span>
                  <h3 className="font-display text-base font-semibold text-foreground">{cat.title}</h3>
                </div>
              </div>

              <ul className="space-y-2">
                {cat.modules.map((mod) => (
                  <li key={mod.name} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-cyan/60" />
                    <span>
                      <strong className="text-foreground">{mod.name}</strong>
                      <span className="text-muted-foreground"> — {mod.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        />

        {/* Value proposition */}
        <div className="mt-16 grid gap-10 border-t border-steel-200 pt-16 lg:grid-cols-2">
          <div>
            <h3 className="font-display mb-4 text-2xl font-bold text-foreground">
              El fin de las integraciones problemáticas
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Si tienes soluciones de software individuales que no se comunican entre sí, es probable
              que ingreses información más de una vez y pierdas una visión general. Las aplicaciones de
              Odoo están perfectamente integradas entre sí, lo que permite automatizar completamente
              los procesos de tu negocio.
            </p>
          </div>
          <div>
            <h3 className="font-display mb-4 text-2xl font-bold text-foreground">
              Una propuesta de valor exclusiva
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Todo lo que necesitas con una experiencia de usuario de primer nivel. El modelo de
              desarrollo de código abierto de Odoo nos ha permitido aprovechar a cientos de
              desarrolladores y expertos empresariales para construir el ecosistema más grande del
              mundo de aplicaciones empresariales totalmente integradas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
