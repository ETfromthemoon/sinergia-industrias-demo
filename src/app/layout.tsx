import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { SITE } from "@/content/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://www.sinergiaindustrias.cl";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sinergia Industrias",
  url: SITE_URL,
  logo: `${SITE_URL}/sinergia-logo.png`,
  image: `${SITE_URL}/sinergia-logo.png`,
  email: "info@sinergiaindustrias.cl",
  telephone: "+56994584617",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Limache 3421, of. 724",
    addressLocality: "Viña del Mar",
    addressCountry: "CL",
  },
  sameAs: ["https://www.linkedin.com/company/sinergia-industrias"],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Sinergia Industrias | Ingeniería que ordena y transforma",
    template: "%s | Sinergia Industrias",
  },
  description: SITE.description,
  keywords: [
    "Ley REP Chile",
    "implementación Odoo Chile",
    "levantamiento de procesos",
    "consultoría industrial",
    "gestión de datos",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE.url,
    siteName: SITE.name,
    title: "Sinergia Industrias | Ingeniería que ordena y transforma",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  YOUTUBE_ORIGINS.forEach((origin) => ReactDOM.preconnect(origin));

  return (
    <html
      lang="es"
      className={cn(
        "h-full antialiased",
        manrope.variable,
        newsreader.variable,
        ibmPlexMono.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
