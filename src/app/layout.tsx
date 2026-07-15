import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import ReactDOM from "react-dom";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CursorGlow } from "@/components/ui/cursor-glow";

// Preconnect to YouTube origins used by embedded video players,
// so the connection is warm before any video component mounts.
const YOUTUBE_ORIGINS = [
  "https://www.youtube.com",
  "https://www.youtube-nocookie.com",
  "https://i.ytimg.com",
];

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Fraunces: editorial serif with real weight contrast. Replaces Space
// Grotesk to give headings gravity and depth instead of the flat, uniform
// look of a geometric grotesque — while Inter (body) keeps the technical
// neutrality for running text.
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
  metadataBase: new URL(SITE_URL),
  title: "Sinergia Industrias — Ingeniería de procesos. Tecnología que funciona.",
  description:
    "Consultora B2B chilena especializada en cumplimiento Ley REP 20.920, levantamiento de procesos industriales, implementación ERP Odoo y análisis de datos. Ready Partner Oficial Odoo.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sinergia Industrias — Ingeniería de procesos. Tecnología que funciona.",
    description:
      "Consultora B2B chilena especializada en cumplimiento Ley REP 20.920, levantamiento de procesos industriales, implementación ERP Odoo y análisis de datos.",
    url: "/",
    siteName: "Sinergia Industrias",
    locale: "es_CL",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "application-name": "Sinergia Industrias",
    "msapplication-TileColor": "#0A1628",
    "msapplication-TileImage": "/android-chrome-192x192.png",
  },
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
      className={cn("h-full antialiased", inter.variable, fraunces.variable, jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
