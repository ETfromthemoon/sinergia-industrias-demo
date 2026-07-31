"use client";

import { motion, MotionConfig } from "motion/react";

type ClientsStripProps = {
  title: string;
  index?: string;
  clients: string[];
  jointVentureLabel?: string;
  jointVentureClients?: string[];
};

export function ClientsStrip({
  title,
  clients,
  jointVentureLabel,
  jointVentureClients,
}: ClientsStripProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="section-motion-surface border-y border-steel-200 bg-background py-20 sm:py-24">
        <div className="editorial-shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">Experiencia sectorial</p>
              <h2 className="mt-7 max-w-lg text-4xl leading-tight sm:text-5xl">{title}</h2>
            </div>
            <div>
              <div className="grid grid-cols-2 border-l border-t border-steel-200 sm:grid-cols-3">
                {clients.map((client, index) => (
                  <motion.div
                    key={client}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: (index % 6) * 0.05, duration: 0.5 }}
                    className="group relative flex min-h-28 items-center justify-center overflow-hidden border-b border-r border-steel-200 px-4 text-center transition-colors duration-300 hover:bg-steel-50"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-cyan transition-transform duration-500 group-hover:scale-x-100"
                    />
                    <span className="font-display text-lg text-ink-soft transition-colors duration-300 group-hover:text-navy">
                      {client}
                    </span>
                  </motion.div>
                ))}
              </div>

              {jointVentureLabel && jointVentureClients?.length ? (
                <div className="mt-8">
                  <p className="mono-label mb-4 text-steel-400">
                    Proyectos conjuntos · {jointVentureLabel}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {jointVentureClients.join(" · ")}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
