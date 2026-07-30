import { SITE } from "@/content/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneDisplay,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: SITE.locality,
      addressCountry: "CL",
    },
    areaServed: {
      "@type": "Country",
      name: SITE.country,
    },
    sameAs: [SITE.linkedin],
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
