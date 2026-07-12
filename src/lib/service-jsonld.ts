const SITE_URL = "https://www.sinergiaindustrias.cl";

/** JSON-LD Schema.org Service para las landings de servicio. */
export function buildServiceJsonLd(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: {
      "@type": "Organization",
      name: "Sinergia Industrias",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
  };
}
