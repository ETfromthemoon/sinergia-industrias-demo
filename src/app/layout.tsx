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
  robots: { index: process.env.NEXT_PUBLIC_DEMO_MODE !== "true", follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === "true";
  const isCloudDemo = process.env.SINERGIA_CLOUD_DEMO_MODE === "true";
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
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />
      </head>
      <body className={cn("min-h-full flex flex-col bg-background text-foreground", isDemo && "pb-24 sm:pb-14")}>
        <OrganizationJsonLd />
        {children}
        {isDemo ? (
          <aside data-demo-mode="true" aria-label="Modo de demostración" className="fixed inset-x-0 bottom-0 z-[70] border-t border-white/20 bg-carbon px-4 py-3 text-center text-sm text-white">
            {isCloudDemo ? <><strong>Demo online.</strong> Validamos el formulario y guardamos sólo un comprobante sin datos personales. No enviamos correos.</>
              : <><strong>Demo local.</strong> Los formularios guardan un recibo local; no envían correos.</>}
          </aside>
        ) : null}
      </body>
    </html>
  );
}
