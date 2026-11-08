# Entrega a producción — Sinergia Industrias

Guía secuencial para poner el sitio en producción, dejar los formularios 100%
funcionales y prepararlo para evaluación de **Google Ads**. El segundo paso
(SEO / motores de IA) está al final como roadmap separado.

- **Stack:** Next.js 16 (SSG) + React 19 + Tailwind v4. Deploy en **Vercel**
  (rama de producción por verificar en la configuración de Vercel).
- **Dominio / correo:** `sinergiaindustrias.cl` e `info@sinergiaindustrias.cl`
  ya operativos.

---

## Paso 0 — Verificar los dos flujos de formulario

La implementación actual tiene transportes diferentes:

- **Contacto** (Inicio y `/contacto`): `ContactForm` → `/api/contact` → **Resend**. Requiere `RESEND_API_KEY` y `CONTACT_FROM_EMAIL` con remitente validado. Sin configuración responde 503 y ofrece WhatsApp/email. La validación exige nombre, empresa, email, mensaje y consentimiento.
- **Suscripción del blog**: `useFormSubmit` → **FormSubmit.co**. El servicio debe estar activado para el destinatario configurado. No hay una base propia de suscriptores.

Para una demo se prueban validación, espera, éxito y errores con transporte controlado, sin enviar a personas reales. Esa evidencia comprueba la interfaz y el contrato de la API; **no demuestra recepción de correo**.

`npm run demo` prepara el modo local con aviso visible: ambos formularios guardan recibos en `scripts/shots/demo-inbox/` y nunca llaman a los proveedores. Este modo exige las dos variables de demo, origen local y ausencia del entorno Vercel. Debe usarse sólo con datos sintéticos y no publicarse como compilación comercial.

Para declarar entrega externa de extremo a extremo, preparar un destino de prueba autorizado, comprobar remitente y configuración, enviar un caso sintético y verificar su recepción. No confundir una respuesta HTTP satisfactoria con correo recibido. No publicar credenciales en capturas o informes.

## Paso 1 — Candidata y publicación

La rama de producción debe comprobarse en Vercel. Las instrucciones históricas que asumían `main` o `master` no son evidencia vigente. Antes de publicar: identificar el commit candidato, confirmar los checks y el resultado de la demo, y comprobar que la URL corresponde a ese mismo código.

La revisión de demo del 8/11 se documenta en `docs/demo-readiness-2026-11-08.md`. No se habilita una nueva integración ni se realiza una publicación por el solo hecho de completar esa revisión.

---

## Paso 2 — Medición de conversiones para Google Ads

El hook de suscripción del blog dispara, tras una respuesta exitosa del servicio, el evento **`generate_lead`** hacia `dataLayer` (GTM) y `gtag`
(GA4 / Google Ads). Ver `src/lib/analytics.ts`. Es **no-op** hasta que se
instale el tag, así que no rompe nada.

**Lo que falta hacer (lado cliente, sin tocar código de la app):**

1. Crear/usar la cuenta de **Google Tag Manager** y/o **GA4** del cliente.
2. Instalar el contenedor de GTM (o el tag de GA4) en el sitio. La forma limpia
   en Next.js 16 es con `next/script` en el layout; puede hacerse en una
   iteración corta cuando tengas el **GTM ID**.
3. En **Google Ads**, crear una acción de conversión y vincularla al evento
   `generate_lead` (importándola desde GA4 o vía GTM).
4. Probar con **GA4 DebugView** / vista previa de GTM que el evento se dispara al
   enviar el formulario.

> Cuando tengas el **GTM ID / GA4 ID**, se instala el snippet y las conversiones
> quedan midiendo. El formulario de contacto no usa ese hook; su medición debe verificarse por separado.

---

## Paso 3 — Checklist "listo para Google Ads"

- [ ] Ambos transportes de formulario verificados con un destino de prueba autorizado.
- [ ] Tag de GTM/GA4 instalado y conversión `generate_lead` midiendo.
- [ ] Metadata y OpenGraph correctos por página (ya configurados).
- [ ] `robots.txt` y `sitemap.xml` sirviéndose (generados por Next).
- [ ] Las 4 landings de servicio (`/ley-rep`, `/levantamiento-de-procesos`,
      `/levantamiento-de-datos`, `/implementacion-odoo`) funcionan como destino
      del tráfico pagado.
- [ ] Móvil impecable, CTA claro arriba del pliegue, WhatsApp/teléfono visibles.
- [ ] (Opcional) Página `/gracias` como destino post-envío para medir conversión
      por pageview además del evento.

---

## Paso 4 — Blog

- Los 10 artículos reales ya se publican correctamente; se removieron los 6
  placeholders "en preparación".
- Publicación y automatización documentadas en
  [`docs/AUTOMATIZACION-BLOG.md`](./AUTOMATIZACION-BLOG.md) (incluye la
  especificación para el cron de **Claude Cowork**).

---

## Segundo paso (separado) — SEO / motores de búsqueda / motores de IA

Planificación aparte, a ejecutar después de producción:

1. **SEO técnico:** canonical, títulos/descripciones únicos, Core Web Vitals,
   datos estructurados (ya hay JSON-LD `BlogPosting`; sumar `Organization`,
   `LocalBusiness`, `Service`, `BreadcrumbList`).
2. **On-page:** mapa de keywords por servicio, enlazado interno blog ↔ landings.
3. **GEO/AEO (ChatGPT, Perplexity, Google AI Overviews):** contenido
   pregunta-respuesta, entidades claras, datos citables, `llms.txt` opcional.
4. **Autoridad local (Chile):** perfil de Google Business, backlinks.
5. **Medición:** Google Search Console + GA4.
