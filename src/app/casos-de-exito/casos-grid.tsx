"use client";
import { useState, useCallback, useSyncExternalStore, type KeyboardEvent } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import { CaseSlide } from "./case-slide";
import { SectionLabel } from "@/components/ui/section-label";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CASES = [
  {
    client: "MORIAH",
    code: "C01",
    industry: "Leasing operativo.",
    image: "/case-studies/moriah.jpg",
    imagePosition: "50% 89.8498%",
    context:
      "MORIAH Limitada, es un empresa que nació en Calama, ante la necesidad que tienen otras empresas, de utilizar equipos autónomos de toda índole; soldadoras, generadores, compresores, luminarias, entre otros equipos. De esta forma, muchas faenas requieren de estos servicios de arriendo, además de pedidos de fabricación de estructuras.",
    service:
      "Realizamos el levantamiento de procesos para Moriah con la finalidad de obtener un panorama completo sobre su operación y presentar oportunidades de optimización en escala general.",
    result:
      "A través del levantamiento de procesos pudimos mejorar de forma sustancial los tiempos de procesamiento de solicitudes de Leasing para Moriah y eliminar algunas partes redundantes de los procesos para dar paso a soluciones más compactas para las necesidades de la empresa.",
  },
  {
    client: "TOTTUS",
    code: "C02",
    industry: "Supermercados e hipermercados.",
    image: "/case-studies/tottus.jpg",
    imagePosition: "50% 89.8498%",
    context:
      "Cadena de supermercados e hipermercados perteneciente al grupo Falabella, su servicio enfatiza la atención al cliente y variedad de productos de gama media alta.",
    service:
      "Mediante el levantamiento de información para la declaración REP pudimos dar una respuesta robusta a la necesidad de claridad de la organización respecto a las implicancias de sus desechos con esta ley.\n\nAl ser un servicio prestado en reiteradas oportunidades fuimos implementando mejoras continuas en cada proceso, lo cual dio lugar a una sumatoria de valor creciente en cada implementación.\n\nEsa misma mirada integral nos permitió plantear la necesidad del desarrollo de un índice innovador hasta el momento y que aportó y sigue aportando relevancia en la información en la organización.",
    result:
      "Diseñado desde cero, este índice nos permitió identificar qué tan reciclable es el packaging de los productos y realizar propuestas de mejoras constantes, aportando valor continuamente incluso una vez finalizado el servicio.",
  },
  {
    client: "IANSA",
    code: "C03",
    industry: "Empresa de alimentos: retail y agrícola.",
    image: "/case-studies/iansa.jpeg",
    imagePosition: "50% 0.337865%",
    context:
      "Iansa, empresa de alimentos líder en producción de azúcar de remolacha, endulzantes, legumbres, jugos y pulpas, productos agrícolas y de nutrición animal.",
    service:
      "Mediante el levantamiento de información para la declaración REP pudimos dar una respuesta robusta a la necesidad de claridad de la organización respecto a las implicancias de sus desechos con esta ley.\n\nAl ser un servicio prestado en reiteradas oportunidades fuimos implementando mejoras continuas en cada proceso, lo cual dio lugar a una sumatoria de valor creciente en cada implementación.",
    result:
      "Sistematización y levantamiento normativo REP para la declaración de productos prioritarios.",
  },
  {
    client: "TRESMONTES LUCCHETTI",
    code: "C04",
    industry: "Importación y fabricacióin de alimentos.",
    image: "/case-studies/tresmontes-lucchetti.png",
    imagePosition: "50% 52.699%",
    context:
      "TMLUC es una empresa Chilena de alimentos. Formada a partir de la fusión de la Córpora Tresmontes S.A., dedicada a la importación de alimentos, y Lucchetti Chile S.A., dedicada a la fabricación de pastas.",
    service:
      "Mediante el levantamiento de información para la declaración REP pudimos dar una respuesta robusta a la necesidad de claridad de la organización respecto a las implicancias de sus desechos con esta ley.\n\nAl ser un servicio prestado en reiteradas oportunidades fuimos implementando mejoras continuas en cada proceso, lo cual dio lugar a una sumatoria de valor creciente en cada implementación.",
    result:
      "Sistematización y levantamiento normativo REP para la declaración de productos prioritarios.",
  },
  {
    client: "ARAMARK",
    code: "C05",
    industry: "Alimentación y Gestión de instalaciones.",
    image: "/case-studies/aramark.jpg",
    imagePosition: "50% 89.8498%",
    context:
      "Aramark es una empresa multinacional de alimentación y gestión de instalaciones.",
    service:
      "Mediante el levantamiento de información para la declaración REP pudimos dar una respuesta robusta a la necesidad de claridad de la organización respecto a las implicancias de sus desechos con esta ley.\n\nAl ser un servicio prestado en reiteradas oportunidades fuimos implementando mejoras continuas en cada proceso, lo cual dio lugar a una sumatoria de valor creciente en cada implementación.",
    result:
      "Sistematización y levantamiento normativo REP para la declaración de productos prioritarios.",
  },
  {
    client: "DIMERC",
    code: "C06",
    industry:
      "Distribución y abastecimiento de productos de oficina al segmento empresas, desde PYMES hasta grandes corporaciones.",
    image: "/case-studies/dimerc.png",
    imagePosition: "50% 0.337865%",
    context:
      "Empresas DIMERC, Dimerc fue creada en 1997 para distribuir y abastecer de productos de oficina al segmento de empresas, desde PYMES hasta grandes corporaciones. El principal objetivo de Dimerc es solucionar el problema de abastecimiento de insumos no estratégicos para la oficina en Chile.",
    service:
      "Mediante el levantamiento de información para la declaración REP pudimos dar una respuesta robusta a la necesidad de claridad de la organización respecto a las implicancias de sus desechos con esta ley.\n\nAl ser un servicio prestado en reiteradas oportunidades fuimos implementando mejoras continuas en cada proceso, lo cual dio lugar a una sumatoria de valor creciente en cada implementación.",
    result:
      "Sistematización y levantamiento normativo REP para la declaración de productos prioritarios.",
  },
  {
    client: "ASALVO LIMITADA",
    code: "C07",
    industry: "Asesoría ambiental.",
    image: "/case-studies/asalvo.jpg",
    imagePosition: "50% 89.8498%",
    context:
      "ASALVO es una consultora ambiental cuyo propósito es entregar asesoría ambiental de calidad para todo tipo de empresas, fue creada hace más de 15 años por su director Rodrigo Salvo, Ingeniero Ambiental y Magíster en Ingeniería Ambiental, cuenta con gran experiencia en insertar estratégicamente la sostentabilidad ambiental en el centro del negocio, logrando con éxito a través de los años el desarrollo de proyectos de economía circular, gestión de residuos, LEY REP y cumplimiento normativo.",
    service:
      "Se realizó una implementación avanzada de odoo ERP con diferentes módulos, atendiendo a la necesidad de la digitalización y centralización en nube de toda la información sobre servicios de certificación de los clientes.",
    result:
      "El servicio de implementación de odoo ERP tuvo como resultado la correcta habilitación de las siguientes funcionalidades: agenda de servicios y complemento logístico para la realización de éstos, manejo integral y en tiempo real del inventario utilizado en sus servicios (materias primas y productos). Todo esto desde una sola plataforma centralizada, en tiempo real y robusta, que permite la unificación tanto de la información de la organización como también de los tiempos y procesos de sus trabajadores.",
  },
  {
    client: "ECOSTANDARD",
    code: "C08",
    industry:
      "Manejo responsable y fabricación de sistemas de almacenamiento para residuos y sustancias peligrosas.",
    image: "/case-studies/ecostandard.jpg",
    imagePosition: "50% 89.8498%",
    context:
      "Ecostandard se dedica al manejo responsable y fabricación de sistemas de almacenamiento para residuos y sustancias peligrosas, siendo un referente en el mercado por su compromiso con la impecabilidad y por contar con 25 años de experiencia en el rubro, instalaciones de primer nivel y un equipo de expertos para el diseño, fabricación y capacitación sobre el uso adecuado de nuestros productos y asesoría para el correcto cumplimiento de las normativas medioambientales vigentes.",
    service:
      "Realizamos el levantamiento de procesos productivo del área de fabricación de la empresa. Implementamos el módulo para la gestión organizacional, en particular el módulo MRP (Material requirement planning) de odoo que permite el control en tiempo real de materias primas, inventarios, pedidos y todos los costos involucrados en el proceso. Además de la integración del proceso de ventas, usando CRM (Customer Relationship Management) para manejar oportunidades y convertirlas en pedidos de fabricación de bodegas de manera oportuna.",
    result:
      "A través del levantamiento de procesos pudimos identificar amplias oportunidades de optimización en diferentes áreas de la operación, brindando así una reducción en tiempos de fabricación e implementando mejoras en la automatización de tareas no consideradas antes del servicio.\n\nEl módulo MRP nos permitió optimizar de gran manera la forma en que los diferentes módulos de la línea de producción se comunican, dando paso a un procesamiento optimizado y consistente en la producción de cada pedido.\n\nEl módulo CRM brindó una mejora sustancial a la manera en que los clientes potenciales se relacionan con la organización y por tanto mejoró tangiblemente el ratio de conversión de clientes potenciales a clientes regulares.",
  },
  {
    client: "MB CHEMICALS",
    code: "C09",
    industry: "Servicios y articulos de sanitización.",
    image: "/case-studies/mb-chemicals.jpg",
    imagePosition: "50% 50%",
    context:
      "Empresa con amplia trayectoria en el rubro de la sanitización industrial, prestando servicios actualmente en la región metropolitana.",
    service:
      "Se realizó una implementación avanzada de odoo ERP con diferentes módulos, atendiendo a la necesidad de la digitalización y centralización en nube de toda la información sobre servicios de certificación de los clientes.",
    result:
      "El servicio de implementación de odoo ERP tuvo como resultado la correcta habilitación de las siguientes funcionalidades: agenda de servicios y complemento logístico para la realización de éstos, manejo integral y en tiempo real del inventario utilizado en sus servicios (materias primas y productos). Todo esto desde una sola plataforma centralizada, en tiempo real y robusta, que permite la unificación tanto de la información de la organización como también de los tiempos y procesos de sus trabajadores.",
  },
  {
    client: "RED CIRCULAR",
    code: "C10",
    industry:
      "Red Circular es una iniciativa que nace con el objetivo de promover el establecimiento de proyectos de economía circular en América Latina.",
    image: "/case-studies/red-circular.png",
    imagePosition: "50% 0.337865%",
    context:
      "Empresas RED CIRCULAR es una iniciativa que nace con el objetivo de promover el establecimiento de proyectos de economía circular en América Latina.",
    service:
      "Realizamos el levantamiento de procesos productivo del área de fabricación de la empresa. Implementamos el módulo para la gestión organizacional, en particular el módulo MRP (Material requirement planning) de odoo que permite el control en tiempo real de materias primas, inventarios, pedidos y todos los costos involucrados en el proceso. Además de la integración del proceso de ventas, usando CRM (Customer Relationship Management) para manejar oportunidades y convertirlas en pedidos de fabricación de bodegas de manera oportuna.",
    result:
      "A través del levantamiento de procesos pudimos identificar amplias oportunidades de optimización en diferentes áreas de la operación, brindando así una reducción en tiempos de fabricación e implementando mejoras en la automatización de tareas no consideradas antes del servicio.\n\nEl módulo MRP nos permitió optimizar de gran manera la forma en que los diferentes módulos de la línea de producción se comunican, dando paso a un procesamiento optimizado y consistente en la producción de cada pedido.\n\nEl módulo CRM brindó una mejora sustancial a la manera en que los clientes potenciales se relacionan con la organización y por tanto mejoró tangiblemente el ratio de conversión de clientes potenciales a clientes regulares.",
  },
  {
    client: "CIAL",
    code: "C11",
    industry:
      "CIAL Group, es una empresa nacional local especialista y certificada en todo lo referente a trabajo en altura y protección contra caídas.",
    image: "/case-studies/cial.png",
    imagePosition: "50% 56.9608%",
    context:
      "CIAL Group, es una empresa nacional local especialista y certificada en todo lo referente a trabajo en altura y protección contra caídas. Trabajan en base a soluciones innovadoras enfocadas principalmente en garantizar la seguridad de los trabajadores e incrementar la productividad y eficiencia de sus procesos y tareas.",
    service:
      "Se realizó una implementación avanzada de odoo ERP con diferentes módulos, atendiendo a la necesidad de la digitalización y centralización en nube de toda la información sobre servicios de certificación de los clientes.",
    result:
      "El servicio de implementación de odoo ERP tuvo como resultado la correcta habilitación de las siguientes funcionalidades: agenda de servicios y complemento logístico para la realización de éstos, manejo integral y en tiempo real del inventario utilizado en sus servicios (materias primas y productos). Todo esto desde una sola plataforma centralizada, en tiempo real y robusta, que permite la unificación tanto de la información de la organización como también de los tiempos y procesos de sus trabajadores.",
  },
  {
    client: "PODAS CHILE",
    code: "C12",
    industry:
      "PODAS CHILE SPA, es una empresa nacional local especialista en poda y corte preventivo nativo, eliminacion de troncos y ramas muertas.",
    image: "/case-studies/podas-chile.jpeg",
    imagePosition: "50% 52.719%",
    context:
      "PODAS CHILE SPA, es una empresa nacional local especialista en poda y corte preventivo nativo, eliminacion de troncos y ramas muertas, poda de sección viva por evidente inclinación sobre viviendas.",
    service:
      "Se realizó una implementación avanzada de odoo ERP con diferentes módulos, atendiendo a la necesidad de la digitalización y centralización en nube de toda la información sobre servicios de certificación de los clientes.",
    result:
      "El servicio de implementación de odoo ERP tuvo como resultado la correcta habilitación de las siguientes funcionalidades: agenda de servicios y complemento logístico para la realización de éstos, manejo integral y en tiempo real del inventario utilizado en sus servicios (materias primas y productos). Todo esto desde una sola plataforma centralizada, en tiempo real y robusta, que permite la unificación tanto de la información de la organización como también de los tiempos y procesos de sus trabajadores.",
  },
];

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function isEcostandardLink() {
  return window.location.hash === "#ecostandard";
}

function getServerHash() {
  return false;
}

export function CasosGrid() {
  const ecostandardLink = useSyncExternalStore(
    subscribeToHash,
    isEcostandardLink,
    getServerHash,
  );

  return (
    <CasesCarousel
      key={ecostandardLink ? "ecostandard" : "all"}
      initialIndex={ecostandardLink ? CASES.findIndex((study) => study.code === "C08") : 0}
    />
  );
}

function CasesCarousel({ initialIndex }: { initialIndex: number }) {
  const [current, setCurrent] = useState(initialIndex);
  const total = CASES.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + total) % total),
    [total],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
    },
    [next, prev],
  );

  return (
    <MotionConfig reducedMotion="user">
      <section id="ecostandard" className="focus-surface scroll-mt-24 bg-background py-16 px-4 sm:py-20">
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
            Cada caso reúne el contexto, el trabajo realizado y los resultados disponibles.
          </motion.p>

          {/* Slider container — full width */}
          <div className="relative">
            <div
              className="relative mt-14"
              role="region"
              aria-roledescription="carrusel"
              aria-label="Casos de éxito"
              tabIndex={0}
              onKeyDown={handleKeyDown}
            >
              <AnimatePresence mode="wait">
                <CaseSlide
                  key={CASES[current].code}
                  study={CASES[current]}
                  current={current}
                  total={total}
                />
              </AnimatePresence>
            </div>

            <div className="mt-4 flex justify-between sm:contents">
              <button
                onClick={prev}
                className="flex size-12 items-center justify-center border border-steel-200 bg-white text-navy transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-white sm:absolute sm:left-4 sm:top-1/2 sm:z-20 sm:-translate-y-1/2 sm:border-white/20 sm:bg-carbon/60 sm:text-white sm:backdrop-blur-sm sm:[--focus-color:var(--cyan)] sm:hover:border-cyan sm:hover:bg-cyan sm:hover:text-carbon"
                aria-label="Caso anterior"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={next}
                className="flex size-12 items-center justify-center border border-steel-200 bg-white text-navy transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-white sm:absolute sm:right-4 sm:top-1/2 sm:z-20 sm:-translate-y-1/2 sm:border-white/20 sm:bg-carbon/60 sm:text-white sm:backdrop-blur-sm sm:[--focus-color:var(--cyan)] sm:hover:border-cyan sm:hover:bg-cyan sm:hover:text-carbon"
                aria-label="Caso siguiente"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="mt-8 hidden justify-center sm:flex" role="group" aria-label="Seleccionar caso">
            {CASES.map((c, i) => (
              <button
                key={c.code}
                onClick={() => setCurrent(i)}
                aria-label={`Caso ${i + 1}: ${c.client}`}
                aria-current={i === current ? "true" : undefined}
                className={`grid size-9 place-items-center rounded-full ${
                  i === current
                    ? "after:h-2 after:w-8 after:rounded-full after:bg-cyan-text"
                    : "after:size-2 after:rounded-full after:bg-steel-600 hover:after:bg-navy"
                }`}
              />
            ))}
          </div>

          {/* Active case info below dots */}
          <div className="mt-6 text-center sm:mt-4">
            <span className="mono-label text-text-subtle">
              {CASES[current].code} — {CASES[current].client} ·{" "}
              {CASES[current].industry}
            </span>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
