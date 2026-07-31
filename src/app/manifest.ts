import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sinergia Industrias",
    short_name: "Sinergia",
    description:
      "Ingeniería de procesos, Odoo, cumplimiento Ley REP y gestión de datos.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f7ef",
    theme_color: "#0b4451",
    lang: "es-CL",
  };
}
