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

        {/* Client logos grid — text-based badges in technical frames */}
        <motion.div
          className="grid grid-cols-2 gap-px border border-steel-200 bg-steel-200 sm:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {clients.map((client, i) => (
            <motion.div
              key={client}
              className="group relative flex items-center justify-center bg-white px-6 py-10 transition-colors hover:bg-steel-50"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <span className="font-display text-lg font-semibold tracking-tight text-steel-600 transition-colors group-hover:text-navy">
                {client}
              </span>
              <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Joint venture section */}
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
            <div className="grid grid-cols-2 gap-px border border-steel-200 bg-steel-200 sm:grid-cols-3 lg:grid-cols-5">
              {jointVentureClients.map((client, i) => (
                <motion.div
                  key={client}
                  className="flex items-center justify-center bg-white px-4 py-8 transition-colors hover:bg-steel-50"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                >
                  <span className="font-display text-sm font-semibold tracking-tight text-steel-600">
                    {client}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
