"use client";
import { motion } from "motion/react";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { SectionLabel } from "@/components/ui/section-label";

const CASES = [
  { client: "Moriah", code: "C01", industry: "Leasing Operativo", context: "Moriah Limitada nació en Calama ante la necesidad de empresas de utilizar equipos autónomos: soldadoras, generadores, compresores, luminarias, entre otros. Muchas faenas requieren estos servicios de arriendo y pedidos de fabricación de estructuras.", service: "Realizamos el levantamiento de procesos para obtener un panorama completo sobre su operación y presentar oportunidades de optimización en escala general.", result: "Mejoramos de forma sustancial los tiempos de procesamiento de solicitudes de Leasing y eliminamos partes redundantes de los procesos." },
  { client: "Tottus", code: "C02", industry: "Supermercados", context: "Cadena de supermercados e hipermercados perteneciente al grupo Falabella. Su servicio enfatiza la atención al cliente y variedad de productos de gama media alta.", service: "Mediante el levantamiento de información para la declaración REP dimos una respuesta robusta a la necesidad de claridad respecto a las implicancias de sus desechos con esta ley.", result: "Diseñamos desde cero un índice innovador que permitió identificar qué tan reciclable es el packaging de los productos y realizar propuestas de mejoras constantes." },
  { client: "Iansa", code: "C03", industry: "Alimentos", context: "Empresa de alimentos líder en producción de azúcar de remolacha, endulzantes, legumbres, jugos y pulpas, productos agrícolas y de nutrición animal.", service: "Mediante el levantamiento de información para la declaración REP dimos una respuesta robusta. Implementamos mejoras continuas en cada proceso con sumatoria de valor creciente.", result: "Sistematización y levantamiento normativo REP para la declaración de productos prioritarios." },
  { client: "Tresmontes Lucchetti", code: "C04", industry: "Alimentos", context: "Empresa Chilena de alimentos formada a partir de la fusión de la Córpora Tresmontes S.A. y Lucchetti Chile S.A., dedicada a la fabricación de pastas.", service: "Levantamiento de información para la declaración REP. Mejoras continuas en cada proceso con sumatoria de valor creciente en cada implementación.", result: "Sistematización y levantamiento normativo REP para la declaración de productos prioritarios." },
  { client: "Aramark", code: "C05", industry: "Alimentación", context: "Aramark es una empresa multinacional de alimentación y gestión de instalaciones.", service: "Levantamiento de información para la declaración REP con respuesta robusta a la necesidad de claridad de la organización.", result: "Sistematización y levantamiento normativo REP para la declaración de productos prioritarios." },
  { client: "Dimerc", code: "C06", industry: "Distribución", context: "Dimerc fue creada en 1997 para distribuir y abastecer de productos de oficina al segmento de empresas, desde PYMES hasta grandes corporaciones.", service: "Levantamiento de información para la declaración REP.", result: "Sistematización y levantamiento normativo REP para la declaración de productos prioritarios." },
  { client: "Asalvo", code: "C07", industry: "Asesoría Ambiental", context: "ASALVO es una consultora ambiental con más de 15 años de experiencia en insertar la sostenibilidad ambiental en el centro del negocio, con proyectos de economía circular, gestión de residuos y cumplimiento normativo.", service: "Implementación avanzada de Odoo ERP con diferentes módulos para la digitalización y centralización en nube de toda la información sobre servicios de certificación de clientes.", result: "Agenda de servicios con complemento logístico, manejo integral y en tiempo real del inventario. Todo desde una sola plataforma centralizada." },
  { client: "Ecostandard", code: "C08", industry: "Residuos", context: "Ecostandard se dedica al manejo responsable y fabricación de sistemas de almacenamiento para residuos y sustancias peligrosas, con 25 años de experiencia en el rubro.", service: "Levantamiento de procesos productivo del área de fabricación. Implementamos el módulo MRP de Odoo para control en tiempo real de materias primas, inventarios y pedidos, además de CRM para gestión de oportunidades.", result: "Reducción en tiempos de fabricación, automatización de tareas no consideradas antes, mejora sustancial en el ratio de conversión de clientes potenciales a regulares." },
  { client: "MB Chemicals", code: "C09", industry: "Sanitización", context: "Empresa con amplia trayectoria en el rubro de la sanitización industrial, prestando servicios actualmente en la región metropolitana.", service: "Implementación avanzada de Odoo ERP con diferentes módulos para la digitalización y centralización en nube.", result: "Agenda de servicios, manejo integral y en tiempo real del inventario. Unificación de información y procesos de trabajadores." },
  { client: "Red Circular", code: "C10", industry: "Economía Circular", context: "Red Circular es una iniciativa que nace con el objetivo de promover el establecimiento de proyectos de economía circular en América Latina.", service: "Levantamiento de procesos productivo e implementación del módulo MRP de Odoo para control de materias primas, inventarios y pedidos. Integración de CRM.", result: "Optimización de la línea de producción, mejora en la comunicación entre módulos y aumento del ratio de conversión de clientes." },
  { client: "CIAL", code: "C11", industry: "Trabajo en Altura", context: "CIAL Group es una empresa nacional especialista y certificada en trabajo en altura y protección contra caídas, con soluciones innovadoras para la seguridad de trabajadores.", service: "Implementación avanzada de Odoo ERP con diferentes módulos para digitalización y centralización en nube de servicios de certificación.", result: "Agenda de servicios, manejo integral de inventario, unificación de información de la organización y procesos de trabajadores." },
  { client: "Podas Chile", code: "C12", industry: "Servicios Forestales", context: "Podas Chile SPA es una empresa nacional especialista en poda y corte preventivo nativo, eliminación de troncos y ramas muertas.", service: "Implementación avanzada de Odoo ERP con diferentes módulos para digitalización y centralización en nube.", result: "Agenda de servicios, manejo integral de inventario, unificación de información de la organización." },
];

export function CasosGrid() {
  return (
    <section className="bg-background py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="01" className="mb-6">
          Evidencia
        </SectionLabel>

        <motion.h2
          className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Casos de éxito
        </motion.h2>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Cada proyecto es una historia de transformación. Desde el diagnóstico hasta los resultados, aquí están los hechos.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {CASES.map((study, i) => (
            <CaseStudyCard key={study.code} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
