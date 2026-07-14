"use client";
import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { SectionLabel } from "@/components/ui/section-label";
import { clipReveal } from "@/lib/motion";

const ITEMS = [
  { code: "01", text: "Levantamiento de residuos por categoría de producto" },
  { code: "02", text: "Cálculo de metas anuales exigidas por ley" },
  { code: "03", text: "Gestión de la plataforma REP del Ministerio" },
  { code: "04", text: "Reporte final auditado y presentado" },
];

/** Gates the scroll-driven dolly/overlap set-piece to hydrated desktop
 * clients that don't prefer reduced motion. Until this resolves (or when it
 * resolves false), the section renders as a normal stacked layout — no
 * sticky pin, no scroll-linked transforms, no duplicated copy in the DOM. */
function useCinematicSetPiece(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isDesktop = window.matchMedia("(min-width: 1024px)");

    const update = () => setEnabled(!reduceMotion.matches && isDesktop.matches);
    update();

    reduceMotion.addEventListener("change", update);
    isDesktop.addEventListener("change", update);
    return () => {
      reduceMotion.removeEventListener("change", update);
      isDesktop.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

function PanelContent() {
  return (
    <div className="px-6 py-8 sm:px-8 sm:py-10">
      <SectionLabel index="02" tone="accent" className="mb-6">
        Cumplimiento normativo
      </SectionLabel>

      <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl">
        La Ley REP no es opcional.
        <br />
        <span className="text-steel-400">Tampoco lo es hacerla bien.</span>
      </h2>

      <p className="mt-6 text-base leading-relaxed text-steel-300">
        La ley 20.920 obliga a gestionar residuos de envases y aparatos eléctricos, con
        plazos y reportes ante el Ministerio del Medio Ambiente. Una declaración tardía o
        incorrecta tiene consecuencias reales.
      </p>

      <p className="mt-4 text-base leading-relaxed text-white/85">
        Hacemos el levantamiento, el cálculo de metas y el reporte completo. Tu empresa
        cumple sin desviar a tu equipo a descifrar la normativa.
      </p>

      <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
        {ITEMS.map((item) => (
          <li key={item.code} className="flex items-center gap-4 py-4">
            <span className="mono-label tabular text-cyan/70">{item.code}</span>
            <CheckCircle2 className="size-4 shrink-0 text-cyan" />
            <span className="text-sm text-white/85">{item.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Magnetic>
          <Link
            href="#contacto"
            className="group inline-flex items-center gap-2 border border-cyan/40 bg-cyan/10 px-7 py-3.5 text-sm font-semibold text-cyan transition-colors duration-200 hover:bg-cyan/20"
          >
            Conversemos tu proyecto
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Magnetic>
      </div>
    </div>
  );
}

function RepImage() {
  return (
    <Image
      src="/media/rep-containers.jpg"
      alt="Fardos de residuos reciclables apilados en una planta de gestión industrial"
      fill
      sizes="(min-width: 1024px) 66vw, 100vw"
      className="object-cover"
    />
  );
}

export function LeyRepSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isCinematic = useCinematicSetPiece();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 30, restDelta: 0.0005 });

  const imageY = useTransform(progress, [0, 1], ["-5%", "5%"]);
  const imageScale = useTransform(progress, [0, 0.5], [1.12, 1]);
  const panelY = useTransform(progress, [0, 1], ["8%", "-8%"]);
  const numeralY = useTransform(progress, [0, 1], ["32%", "-32%"]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-navy-dark"
        style={isCinematic ? { height: "280vh" } : undefined}
      >
        <div aria-hidden className="grain pointer-events-none absolute inset-0" />

        <div
          className={
            isCinematic
              ? "sticky top-0 flex min-h-[100dvh] items-center overflow-hidden px-4 py-24"
              : "px-4 py-24"
          }
        >
          <div className="relative mx-auto w-full max-w-6xl lg:grid lg:grid-cols-12 lg:items-center lg:gap-6">
            {/* Numeral gigante de fondo — solo en el set-piece de escritorio */}
            {isCinematic && (
              <motion.div
                aria-hidden
                className="pointer-events-none absolute right-2 top-[-1rem] hidden select-none lg:col-span-4 lg:col-start-9 lg:block"
                style={{ y: numeralY }}
              >
                <span
                  className="font-display font-bold text-white/[0.04]"
                  style={{ fontSize: "clamp(120px, 14vw, 180px)" }}
                >
                  20.920
                </span>
              </motion.div>
            )}

            {/* Imagen */}
            <div className="relative aspect-[4/3] lg:col-span-8 lg:aspect-auto lg:h-[62vh]">
              {isCinematic ? (
                <motion.div className="relative h-full w-full" style={{ y: imageY }}>
                  <motion.div className="relative h-full w-full overflow-hidden" style={{ scale: imageScale }}>
                    <motion.div
                      className="relative h-full w-full"
                      variants={clipReveal}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-10%" }}
                    >
                      <RepImage />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  className="relative h-full w-full overflow-hidden"
                  variants={clipReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <RepImage />
                </motion.div>
              )}
            </div>

            {/* Panel glass — invade la imagen en desktop */}
            <motion.div
              className={
                isCinematic
                  ? "relative z-10 mt-8 lg:col-span-6 lg:col-start-7 lg:-ml-16 lg:mt-0 xl:-ml-24"
                  : "relative z-10 mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0"
              }
              style={isCinematic ? { y: panelY } : undefined}
            >
              <motion.div
                className="glass-dark glass-sheen relative"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <PanelContent />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
