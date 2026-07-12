// Capa de tracking framework-agnóstica.
// Todas las funciones son seguras en SSR y son NO-OP si el cliente aún no
// instaló Google Tag Manager / GA4 / Google Ads. Cuando el tag esté presente,
// los eventos fluyen automáticamente sin cambiar este código.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara el evento de conversión "generate_lead" hacia GTM (dataLayer) y GA4/Google Ads (gtag),
 * usado por Google Ads para optimizar por leads reales. No-op si no hay tag instalado.
 */
export function trackLeadConversion(detail?: Record<string, string>): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: "generate_lead", ...detail });

  window.gtag?.("event", "generate_lead", detail ?? {});
}
