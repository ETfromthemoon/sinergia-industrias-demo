"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";

type ClientsStripProps = {
  title: string;
  index?: string;
  clients: string[];
  jointVentureLabel?: string;
  jointVentureClients?: string[];
};

function GlowMarquee({ clients }: { clients: string[] }) {
  const [glowIdx, setGlowIdx] = useState(0);
  const doubled = [...clients, ...clients];

  useEffect(() => {
    const t = setInterval(() => {
      setGlowIdx((prev) => (prev + 1) % clients.length);
    }, 400);
    return () => clearInterval(t);
  }, [clients.length]);

  return (
    <div className="relative">
      {/* Glass overlay panels at edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-steel-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-r from-transparent to-steel-50" />

      {/* Marquee track */}
      <div className="relative overflow-hidden py-2">
        <div className="animate-marquee flex w-max gap-0">
          {doubled.map((client, i) => {
            const isGlowing = i % clients.length === glowIdx;
            return (
              <div
                key={`${client}-${i}`}
                className="relative flex shrink-0 items-center justify-center border border-steel-200 bg-white px-8 py-9 transition-all duration-500"
              >
                {/* Scanner glow */}
                <span
                  className={`absolute inset-0 transition-opacity duration-500 ${isGlowing ? "opacity-100" : "opacity-0"}`}
                  style={{
                    background: "radial-gradient(ellipse at center, oklch(0.60 0.105 208 / 0.12) 0%, transparent 70%)",
                  }}
                />
                <span
                  className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent transition-opacity duration-500 ${isGlowing ? "opacity-100" : "opacity-0"}`}
                />
                <span className="relative z-10 font-display text-lg font-semibold tracking-tight text-steel-600 transition-colors duration-500"
                  style={{ color: isGlowing ? "oklch(0.24 0.12 256)" : undefined }}>
                  {client}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ClientsStrip({
  title,
  index = "06",
  clients,
  jointVentureLabel,
  jointVentureClients,
}: ClientsStripProps) {
  return (
    <section className="border-y border-steel-200 bg-steel-50 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <SectionLabel index={index} className="mb-5">Clientes</SectionLabel>
            <h2 className="font-display max-w-lg text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <motion.span
              className="inline-flex items-center gap-2 mono-label text-steel-400"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            >
              <span className="size-1.5 rounded-full bg-cyan animate-pulse" />
              {clients.length} CLIENTES
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlowMarquee clients={clients} />
        </motion.div>

        {jointVentureLabel && jointVentureClients && jointVentureClients.length > 0 && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="mono-label text-signal-deep">JOINT VENTURE</span>
              <span className="h-px flex-1 bg-steel-200" />
              <span className="mono-label text-steel-400">{jointVentureLabel}</span>
            </div>
            <GlowMarquee clients={jointVentureClients} />
          </motion.div>
        )}
      </div>
    </section>
  );
}
