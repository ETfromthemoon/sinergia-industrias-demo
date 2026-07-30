import { SITE } from "@/content/site";

type ServiceJsonLdProps = {
  name: string;
  description: string;
  path: string;
};

export function ServiceJsonLd({ name, description, path }: ServiceJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE.url}${path}`,
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
