# Entrega a producción — Sinergia Industrias

Guía secuencial para poner el sitio en producción, dejar los formularios 100%
funcionales y prepararlo para evaluación de **Google Ads**. El segundo paso
(SEO / motores de IA) está al final como roadmap separado.

- **Stack:** Next.js 16 (SSG) + React 19 + Tailwind v4. Deploy en **Vercel**
  (push a `main` = deploy).
- **Dominio / correo:** `sinergiaindustrias.cl` e `info@sinergiaindustrias.cl`
  ya operativos.

---

## Paso 0 — Verificación crítica de formularios (BLOQUEANTE)

Los formularios de contacto envían vía **FormSubmit.co** al correo
`info@sinergiaindustrias.cl` (`src/components/ui/form-submit.tsx`). FormSubmit
exige una **activación única**: hasta que alguien confirme el correo, el
formulario dice "enviado" pero **no llega nada**.

**Hazlo antes de gastar un peso en Google Ads:**

1. Entra al sitio en producción y envía el formulario de `/contacto` con datos
   de prueba reales.
2. Abre el buzón `info@sinergiaindustrias.cl`. Si hay un correo de FormSubmit
   pidiendo confirmar la dirección → **confírmalo** (un clic).
3. Envía el formulario otra vez y confirma que el mensaje **llega** al buzón.
4. Si no llega: revisa spam y verifica que `info@` recibe correo externo.

> Sin este paso, toda inversión en Ads genera leads que se pierden en silencio.

---

## Paso 1 — Formularios: cómo conectarlos con correo (las 3 opciones)

### Opción A — FormSubmit.co (actual · gratis · sin servidor) ← elegida

Es lo que ya está implementado y lo recomendado para salir **ya** a Google Ads.

1. El formulario hace POST a `formsubmit.co/ajax/info@sinergiaindustrias.cl`.
2. Confirmar el correo una sola vez (Paso 0).
3. Ya incluye protección anti-spam: captcha de FormSubmit (`_captcha`) + honeypot.
4. Si en el futuro llega spam, activar reCAPTCHA desde el panel de FormSubmit.

- **Ventajas:** cero costo, cero infraestructura, funciona en sitio estático.
- **Límites:** dependes de un tercero gratuito, no guardas los leads en una base
  de datos, personalización del correo limitada.

### Opción B — API propia + email transaccional (recomendada a mediano plazo)

Cuando quieran independencia de terceros y correos con la marca propia.

1. Crear una **API route** en Next: `src/app/api/contacto/route.ts` (Vercel la
   sirve como función serverless, sin costo fijo).
2. Enviar el correo con **Resend** (o SendGrid) desde el dominio propio.
   Requiere verificar **SPF/DKIM** en el DNS de `sinergiaindustrias.cl`.
3. Guardar las credenciales como variables de entorno en Vercel
   (`RESEND_API_KEY`, correo destino).
4. Apuntar el hook `useFormSubmit` a `/api/contacto` en vez de a FormSubmit.
- **Ventajas:** sin terceros, correos con tu dominio, validación server-side,
  control total. **Costo:** Resend tiene plan gratuito generoso.

### Opción C — Plataforma con base de datos (a futuro, si quieren CRM)

1. Todo lo de la Opción B **+** guardar cada lead en **Supabase (Postgres)**.
2. Panel de leads / mini-CRM y autenticación.
- **Ventajas:** histórico de leads, métricas, seguimiento comercial.
- **Costo/tiempo:** el mayor de los tres; 1-2 semanas de desarrollo.

> **Para Google Ads basta la Opción A verificada.** B y C quedan como roadmap.

---

## Paso 2 — Medición de conversiones para Google Ads

Ya está implementado en código: al enviarse un formulario con éxito, el sitio
dispara el evento **`generate_lead`** hacia `dataLayer` (GTM) y `gtag`
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
> quedan midiendo. El disparo del evento ya está listo.

---

## Paso 3 — Checklist "listo para Google Ads"

- [ ] Paso 0 completado: un lead de prueba llegó al correo.
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
