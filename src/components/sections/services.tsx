"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, MotionConfig } from "motion/react";
import { SERVICES } from "@/content/site";

export function ServicesSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="servicios" className="bg-background py-20 sm:py-28">
        <div className="editorial-shell">
          <div className="grid gap-8 border-b border-steel-200 pb-12 lg:grid-cols-[0.72fr_1.28fr]">
            <p className="eyebrow">Dónde intervenimos</p>
            <h2 className="max-w-4xl text-5xl leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
              Cuatro capacidades.
              <br />
              <em className="font-normal text-navy">Un solo criterio.</em>
            </h2>
          </div>
          <div>
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
              >
                <Link
                  href={service.href}
                  className="group relative grid gap-4 overflow-hidden border-b border-steel-200 py-8 transition-colors duration-300 hover:bg-steel-50/60 sm:grid-cols-[3rem_0.55fr_1fr_auto] sm:items-center sm:px-4 sm:py-9"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-0.5 origin-bottom scale-y-0 bg-cyan transition-transform duration-300 group-hover:scale-y-100"
                  />
                  <span className="font-mono text-xs text-steel-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-deep">
                    0{index + 1}
                  </span>
                  <span>
                    <span className="mono-label block text-cyan-deep">{service.eyebrow}</span>
                    <span className="mt-2 block font-display text-2xl text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                      {service.shortTitle}
                    </span>
                  </span>
                  <span className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </span>
                  <span className="grid size-10 place-items-center rounded-full border border-steel-200 text-navy transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
