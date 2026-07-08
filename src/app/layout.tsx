import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import ReactDOM from "react-dom";
import "./globals.css";
import { cn } from "@/lib/utils";

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
      className={cn("h-full antialiased", inter.variable, spaceGrotesk.variable, jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
