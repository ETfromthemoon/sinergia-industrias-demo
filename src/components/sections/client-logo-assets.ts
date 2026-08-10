export const CLIENT_LOGOS = {
  "Arriendo Legal": { src: "/client-logos/arriendo-legal.png", alt: "Arriendo Legal" },
  Aramark: { src: "/client-logos/aramark.svg", alt: "Aramark" },
  Asalvo: { src: "/client-logos/asalvo.png", alt: "Asalvo" },
  CIAL: { src: "/client-logos/cial.svg", alt: "CIAL" },
  "CV Trading": { src: "/client-logos/cv-trading.png", alt: "CV Trading" },
  Corona: { src: "/client-logos/corona.png", alt: "Corona" },
  Dimerc: { src: "/client-logos/dimerc.png", alt: "Dimerc" },
  Easy: { src: "/client-logos/easy.svg", alt: "Easy", inverse: true },
  Ecostandard: { src: "/client-logos/ecostandard.png", alt: "Ecostandard" },
  Iansa: { src: "/client-logos/iansa.png", alt: "Empresas Iansa" },
  Inacap: { src: "/client-logos/inacap.png", alt: "INACAP" },
  Jumbo: { src: "/client-logos/jumbo.svg", alt: "Jumbo" },
  "MB Chemicals": { src: "/client-logos/mb-chemicals.png", alt: "MB Chemicals" },
  Moriah: { src: "/client-logos/moriah.png", alt: "Moriah" },
  Paris: { src: "/client-logos/paris.png", alt: "Paris" },
  "Podas Chile": { src: "/client-logos/podas-chile.png", alt: "Podas Chile" },
  "Red Circular": { src: "/client-logos/red-circular.png", alt: "Red Circular" },
  Ripley: { src: "/client-logos/ripley.png", alt: "Ripley" },
  Tottus: { src: "/client-logos/tottus.png", alt: "Tottus" },
  "Tresmontes Lucchetti": { src: "/client-logos/tresmontes-lucchetti.png", alt: "Tresmontes Lucchetti" },
  Vinderchile: { src: "/client-logos/vinderchile.png", alt: "Vinder Chile" },
} as const;

export const ALL_CLIENTS = Object.keys(CLIENT_LOGOS) as Array<keyof typeof CLIENT_LOGOS>;

export type ClientName = keyof typeof CLIENT_LOGOS;
