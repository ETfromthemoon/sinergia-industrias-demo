export const SITE = {
  name: "Sinergia Industrias",
  legalName: "Sinergia Industrias SpA",
  url: "https://www.sinergiaindustrias.cl",
  description:
    "Consultora chilena de ingeniería de procesos, implementación ERP Odoo, cumplimiento Ley REP y gestión de datos.",
  email: "info@sinergiaindustrias.cl",
  phoneDisplay: "+56 9 9458 4617",
  phoneHref: "tel:+56994584617",
  whatsapp:
    "https://wa.me/56994584617?text=Hola,%20quiero%20conversar%20sobre%20un%20proyecto",
  address: "Calle Limache 3421, oficina 724",
  locality: "Viña del Mar",
  country: "Chile",
  linkedin: "https://www.linkedin.com/company/sinergia-industrias",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Casos", href: "/casos-de-exito" },
  { label: "Nosotros", href: "/nosotros" },
] as const;

export const SERVICES = [
  {
    title: "Cumplimiento Ley REP",
    shortTitle: "Ley REP",
    href: "/ley-rep",
    eyebrow: "Cumplimiento",
    description:
      "Levantamos, calculamos y documentamos tus obligaciones bajo la Ley 20.920 con trazabilidad y criterio técnico.",
    outcome: "Declaraciones respaldadas y equipos internos con claridad.",
  },
  {
    title: "Levantamiento de procesos",
    shortTitle: "Procesos",
    href: "/levantamiento-de-procesos",
    eyebrow: "Operación",
    description:
      "Observamos cómo funciona tu operación, detectamos fricciones y diseñamos mejoras que se pueden ejecutar.",
    outcome: "Procesos visibles, responsables claros y menos retrabajo.",
  },
  {
    title: "Implementación ERP Odoo",
    shortTitle: "Odoo",
    href: "/implementacion-odoo",
    eyebrow: "Tecnología",
    description:
      "Configuramos Odoo alrededor de la realidad de tu empresa para conectar finanzas, inventario, ventas y operación.",
    outcome: "Una fuente confiable de información para operar y decidir.",
  },
  {
    title: "Levantamiento de datos",
    shortTitle: "Datos",
    href: "/levantamiento-de-datos",
    eyebrow: "Decisiones",
    description:
      "Ordenamos datos dispersos y construimos reportes que muestran lo que realmente está pasando en el negocio.",
    outcome: "Información legible, comparable y lista para decidir.",
  },
] as const;

// Estas cifras deben mantenerse sincronizadas con la validación comercial del cliente.
export const VERIFIED_METRICS = [
  {
    value: 40,
    display: "40+",
    label: "empresas asesoradas",
    detail: "en proyectos de operación, cumplimiento y tecnología",
    asOf: "2026",
  },
  {
    value: 8,
    display: "8+",
    label: "años de experiencia",
    detail: "acompañando operaciones de distintas escalas",
    asOf: "2026",
  },
  {
    value: 20,
    display: "20+",
    label: "implementaciones Odoo",
    detail: "adaptadas a procesos y equipos reales",
    asOf: "2026",
  },
] as const;

export const CLIENTS = [
  "Tottus",
  "Aramark",
  "Iansa",
  "Tresmontes Lucchetti",
  "Dimerc",
  "Asalvo",
  "Ecostandard",
  "Red Circular",
] as const;

export const METHOD = [
  {
    number: "01",
    title: "Entender",
    description:
      "Entramos a la operación, conversamos con quienes la ejecutan y separamos síntomas de causas.",
    deliverable: "Diagnóstico compartido",
  },
  {
    number: "02",
    title: "Diseñar",
    description:
      "Traducimos los hallazgos en decisiones, responsables, secuencia y una solución proporcional al problema.",
    deliverable: "Plan técnico",
  },
  {
    number: "03",
    title: "Implementar",
    description:
      "Configuramos, documentamos y acompañamos la adopción hasta que la solución funciona en el trabajo diario.",
    deliverable: "Operación en marcha",
  },
] as const;
