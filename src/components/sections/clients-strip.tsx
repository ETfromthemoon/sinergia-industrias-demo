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
    <section className="border-y border-steel-200 bg-background py-20 sm:py-24">
      <div className="editorial-shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Experiencia sectorial</p>
            <h2 className="mt-7 max-w-lg text-4xl leading-tight sm:text-5xl">{title}</h2>
          </div>
          <div>
            <div className="grid grid-cols-2 border-l border-t border-steel-200 sm:grid-cols-3">
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex min-h-28 items-center justify-center border-b border-r border-steel-200 px-4 text-center"
                >
                  <span className="font-display text-lg text-ink-soft">{client}</span>
                </div>
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
  );
}
