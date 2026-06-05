import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Space Grotesk: geometric grotesque with technical character.
// Differentiates from Inter's neutrality — the right call for the
// Swiss / Blueprint industrial direction (Neue Haas spirit, Google-hosted).
const spaceGrotesk = Space_Grotesk({
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

export const metadata: Metadata = {
  title: "Sinergia Industrias — Ingeniería de procesos. Tecnología que funciona.",
  description:
    "Consultora B2B chilena especializada en cumplimiento Ley REP 20.920, levantamiento de procesos industriales, implementación ERP Odoo y análisis de datos. Ready Partner Oficial Odoo.",
  keywords:
    "Ley REP, Odoo Chile, levantamiento de procesos, consultoría industrial, ERP Chile, gestión residuos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("h-full antialiased", inter.variable, spaceGrotesk.variable, jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
