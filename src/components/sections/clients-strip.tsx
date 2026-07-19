"use client";
import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";

type ClientsStripProps = {
  title: string;
  index?: string;
  clients: string[];
  jointVentureLabel?: string;
  jointVentureClients?: string[];
};

function MarqueeRow({ clients }: { clients: string[] }) {
  const doubled = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden">
      <div className="animate-marquee flex w-max gap-px">
        {doubled.map((client, i) => (
          <div
            key={`${client}-${i}`}
            className="flex shrink-0 items-center justify-center border border-steel-200 bg-white px-8 py-8 transition-colors hover:bg-steel-50"
          >
            <span className="font-display text-lg font-semibold tracking-tight text-steel-600 transition-colors hover:text-navy whitespace-nowrap">
              {client}
            </span>
          </div>
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
            <SectionLabel index={index} className="mb-5">
              Clientes
            </SectionLabel>
            <h2 className="font-display max-w-lg text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          </div>
          <span className="mono-label text-steel-400">{clients.length} CLIENTES</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MarqueeRow clients={clients} />
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
            <MarqueeRow clients={jointVentureClients} />
          </motion.div>
        )}
      </div>
    </section>
  );
}
