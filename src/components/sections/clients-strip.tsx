"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";

type ClientsStripProps = {
  title: string;
  index?: string;
  clients: string[];
  jointVentureLabel?: string;
  jointVentureClients?: string[];
};

const EASE = [0.16, 1, 0.3, 1] as const;

/* Extract initials / monogram from company name */
function monogram(name: string): string {
  const words = name.split(/\s+/).filter(w => w.length > 2);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function ClientSpotlight({ clients, autoplay = true }: { clients: string[]; autoplay?: boolean }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = clients.length;

  const prevIdx = (active - 1 + len) % len;
  const nextIdx = (active + 1) % len;

  const goNext = useCallback(() => setActive((p) => (p + 1) % len), [len]);

  useEffect(() => {
    if (!autoplay || paused || len <= 1) return;
    const t = setInterval(goNext, 3500);
    return () => clearInterval(t);
  }, [autoplay, paused, goNext, len]);

  return (
    <div
      className="relative flex items-center justify-center gap-2 sm:gap-4 lg:gap-8 py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Prev card — small, faded */}
      <button
        onClick={() => setActive(prevIdx)}
        className="hidden sm:flex shrink-0 w-[140px] lg:w-[180px] flex-col items-center gap-2 opacity-30 hover:opacity-50 transition-opacity cursor-pointer"
      >
        <div className="flex size-12 lg:size-14 items-center justify-center border border-steel-200 bg-white">
          <span className="font-display text-base lg:text-lg font-bold text-steel-400">
            {monogram(clients[prevIdx])}
          </span>
        </div>
        <span className="text-xs text-steel-400 text-center leading-tight line-clamp-2">
          {clients[prevIdx]}
        </span>
      </button>

      {/* Center card — HERO 150% */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -8 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex shrink-0 flex-col items-center gap-3"
        >
          {/* Monogram box */}
          <motion.div
            className="relative flex size-24 sm:size-28 lg:size-32 items-center justify-center border-2 border-navy bg-white shadow-lg"
            animate={{ boxShadow: ["0 4px 24px -4px oklch(0.24 0.12 256 / 0.08)", "0 8px 32px -4px oklch(0.24 0.12 256 / 0.15)", "0 4px 24px -4px oklch(0.24 0.12 256 / 0.08)"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Corner ticks */}
            <svg aria-hidden className="pointer-events-none absolute left-0 top-0 size-2 -translate-x-px -translate-y-px" viewBox="0 0 8 8" fill="none" stroke="oklch(0.75 0.010 240)" strokeWidth="1"><path d="M8 1V0H0v1" /></svg>
            <svg aria-hidden className="pointer-events-none absolute bottom-0 right-0 size-2 translate-x-px translate-y-px" viewBox="0 0 8 8" fill="none" stroke="oklch(0.75 0.010 240)" strokeWidth="1"><path d="M0 7v1h8V7" /></svg>

            {/* Decorative line before monogram */}
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 h-1 w-10 bg-cyan" />

            <span className="relative z-10 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              {monogram(clients[active])}
            </span>
          </motion.div>

          {/* Company name */}
          <div className="text-center max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]">
            <p className="font-display text-base sm:text-lg lg:text-xl font-semibold text-navy leading-tight">
              {clients[active]}
            </p>
            <p className="mt-1 mono-label text-steel-400">
              {active + 1} / {len}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Next card — small, faded */}
      <button
        onClick={() => setActive(nextIdx)}
        className="hidden sm:flex shrink-0 w-[140px] lg:w-[180px] flex-col items-center gap-2 opacity-30 hover:opacity-50 transition-opacity cursor-pointer"
      >
        <div className="flex size-12 lg:size-14 items-center justify-center border border-steel-200 bg-white">
          <span className="font-display text-base lg:text-lg font-bold text-steel-400">
            {monogram(clients[nextIdx])}
          </span>
        </div>
        <span className="text-xs text-steel-400 text-center leading-tight line-clamp-2">
          {clients[nextIdx]}
        </span>
      </button>

      {/* Navigation dots */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {clients.slice(0, Math.min(len, 12)).map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`size-1.5 rounded-full transition-all duration-300 ${i === active ? "bg-navy scale-125" : "bg-steel-300 hover:bg-steel-400"}`}
            aria-label={`Cliente ${i + 1}`}
          />
        ))}
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
            <span className="inline-flex items-center gap-2 mono-label text-steel-400">
              <span className="size-1.5 rounded-full bg-cyan animate-pulse" />
              {clients.length} CLIENTES
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ClientSpotlight clients={clients} />
        </motion.div>

        {jointVentureLabel && jointVentureClients && jointVentureClients.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="mono-label text-signal-deep">JOINT VENTURE</span>
              <span className="h-px flex-1 bg-steel-200" />
              <span className="mono-label text-steel-400">{jointVentureLabel}</span>
            </div>
            <ClientSpotlight clients={jointVentureClients} />
          </motion.div>
        )}
      </div>
    </section>
  );
}
