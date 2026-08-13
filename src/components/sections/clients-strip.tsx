"use client";

import { ClientLogoMarquee } from "@/components/sections/client-logo-marquee";

type ClientsStripProps = {
  title: string;
  index?: string;
  clients: readonly string[];
};

export function ClientsStrip({ title, clients }: ClientsStripProps) {
  return (
    <section className="overflow-hidden border-y border-steel-200 bg-background py-20 sm:py-24">
      <div className="editorial-shell">
        <h2 className="max-w-3xl text-4xl leading-tight sm:text-5xl">{title}</h2>
      </div>

      <ClientLogoMarquee className="mt-12" clients={clients} />
    </section>
  );
}
