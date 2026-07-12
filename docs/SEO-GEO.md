# SEO técnico, on-page y GEO/AEO — Sinergia Industrias

Segundo paso de la entrega, separado de la puesta en producción
([docs/ENTREGA-PRODUCCION.md](./ENTREGA-PRODUCCION.md)). Cubre lo ya
implementado y el roadmap de autoridad/medición pendiente.

---

## 1. Cambios implementados (verificados en vivo)

### Crítico

- **`metadataBase` en `src/app/layout.tsx`**: sin esto, todos los `canonical` y
  `og:url` del sitio resolvían contra `localhost:3000` en producción,
  invalidando la señal de canonicalización de **todas** las páginas. Ahora
  resuelven a `https://www.sinergiaindustrias.cl` (verificado en home y en un
  post de blog).
- **Sitemap incompleto**: `/blog` y los 10 posts individuales no estaban en
  `sitemap.xml`. Ahora `src/app/sitemap.ts` los genera dinámicamente desde
  `getAllPosts()`, con `lastmod` real por artículo (verificado en
  `/sitemap.xml`).

### Alto

- **Dominio inconsistente** (`www` vs sin `www`): el JSON-LD del blog usaba
  `sinergiaindustrias.cl` sin `www` mientras sitemap/robots usan `www`.
  Unificado a `www` en todo el sitio.
- **Home sin metadata propia**: resuelto de raíz añadiendo `alternates.canonical`
  y bloque `openGraph` completo al `layout.tsx` (aplica a `/`).
- **Enlazado interno cero entre servicios**: se creó el componente
  `RelatedServices` ([src/components/sections/related-services.tsx](../src/components/sections/related-services.tsx))
  y se insertó en las 4 landings de servicio, enlazando cada una a las otras 3.
- **Blog sin enlaces a landings comerciales**: se añadieron enlaces
  contextuales (anchor text descriptivo, no URLs crudas) en los 10 posts
  `.mdx` hacia la landing de servicio correspondiente.
- **Bug encontrado de paso**: 5 de los 10 posts enlazaban a
  `sinergia-industrias-demo.vercel.app` (dominio de *preview*, no de
  producción). Corregido a rutas relativas (`/contacto`, etc.).
- **JSON-LD faltante**: se agregó `Organization` (sitewide, en `layout.tsx`),
  `Service` en las 4 landings ([src/lib/service-jsonld.ts](../src/lib/service-jsonld.ts))
  y `BreadcrumbList` en cada post de blog. Verificado en vivo: home = 1
  (`Organization`), landings = 2 (`Organization` + `Service`), posts = 3
  (`Organization` + `BlogPosting` + `BreadcrumbList`).
- **Home sin enlaces a las 4 landings**: las tarjetas de servicio del bento
  grid (`src/components/sections/services.tsx`) no eran clicables. Ahora cada
  una (incluida la de Odoo y la franja de datos) es un `Link` hacia su landing.

### Medio

- **Imágenes sin optimizar**: se habilitó `images.remotePatterns` para
  `images.unsplash.com` en `next.config.ts` y se migraron a `next/image` las
  imágenes above-the-fold (LCP): hero de cada post de blog, imagen destacada
  del índice del blog y las miniaturas de artículo. Verificado que
  `/_next/image` optimiza correctamente.
- **`meta keywords` obsoleto**: eliminado de `layout.tsx` (Google no lo usa
  hace más de una década).

### No aplican / correctos desde antes

- `robots.ts` ya permitía crawl completo y referenciaba el sitemap.
- Jerarquía de H1 correcta en todas las páginas (un H1 por página).
- Sitio monolingüe (es-CL): no se requiere `hreflang`.

---

## 2. GEO/AEO — optimización para motores de IA

- **`public/llms.txt`** creado: describe la empresa, los 4 servicios y el blog
  en formato que los motores de IA (ChatGPT, Perplexity, Google AI Overviews)
  pueden leer directamente para entender qué ofrece el sitio. Verificado que
  se sirve en `/llms.txt`.
- El contenido ya es rastreable (SSG, sin JS requerido para el contenido
  principal) — condición base para que los motores de IA puedan citarlo.
- Los datos estructurados (`Organization`, `Service`, `BlogPosting`,
  `BreadcrumbList`) añadidos en el paso 1 son la misma señal que alimenta
  tanto rich results de Google como el entendimiento de entidades por IA.

### Recomendaciones de contenido para los próximos posts (aplicar en `FORMATO.md`)

Para que el contenido sea más citable por motores de IA:

- Preferir estructura de **pregunta directa → respuesta concisa** en el primer
  párrafo de cada sección H2 (los motores de IA extraen mejor un párrafo que
  responde la pregunta implícita del encabezado).
- Usar **datos concretos y verificables** (cifras, plazos, montos en UTM/CLP)
  en vez de afirmaciones vagas — ya es una fortaleza de los posts actuales.
- Mantener las entidades nombradas de forma consistente ("Ley REP 20.920",
  "Sinergia Industrias", "Odoo Ready Partner") en vez de variarlas, para
  reforzar la asociación entidad-marca.
- No se recomienda agregar JSON-LD `FAQPage` a menos que el contenido visible
  de la página sea realmente un Q&A explícito (Google penaliza schema que no
  coincide con el contenido visible).

---

## 3. Roadmap de autoridad local y medición (pendiente, fuera de código)

Estas acciones no se implementan en el repo — son gestión externa del cliente:

1. **Google Business Profile**: crear/reclamar el perfil de Sinergia
   Industrias con la dirección de Viña del Mar, categoría de consultora, y
   enlace al sitio.
2. **Google Search Console**: verificar el dominio `sinergiaindustrias.cl` y
   enviar el sitemap (`https://www.sinergiaindustrias.cl/sitemap.xml`).
3. **GA4 / Google Tag Manager**: instalar el tag (ver
   [docs/ENTREGA-PRODUCCION.md](./ENTREGA-PRODUCCION.md#paso-2--medición-de-conversiones-para-google-ads))
   para medir tráfico orgánico y de blog junto con las conversiones de Ads.
4. **Backlinks / autoridad**: directorios de cámaras de comercio chilenas,
   perfil de LinkedIn de la empresa (ya enlazado en el footer y en el JSON-LD
   `Organization`), menciones de clientes reales listados en las landings
   (Tottus, Iansa, Falabella, etc.) si aceptan ser citados con enlace.
5. **Cadencia de contenido**: mantener publicación regular vía el flujo
   documentado en [docs/AUTOMATIZACION-BLOG.md](./AUTOMATIZACION-BLOG.md) —
   la frescura de contenido es señal tanto para SEO tradicional como para
   motores de IA.

---

## Archivos modificados en este paso

- `src/app/layout.tsx` — metadataBase, OG home, JSON-LD Organization
- `src/app/sitemap.ts` — blog + posts dinámicos
- `src/app/blog/[slug]/page.tsx` — dominio unificado, BreadcrumbList, next/image
- `src/app/blog/content.tsx` — next/image
- `src/components/sections/services.tsx` — tarjetas clicables
- `src/components/sections/related-services.tsx` — nuevo componente
- `src/lib/service-jsonld.ts` — nuevo helper
- `src/app/{ley-rep,implementacion-odoo,levantamiento-de-procesos,levantamiento-de-datos}/{page,content}.tsx`
- `content/blog/*.mdx` — 10 archivos, enlaces internos + fix de dominio
- `next.config.ts` — remotePatterns Unsplash
- `public/llms.txt` — nuevo
- `README.md` — corrección de tipografías (arrastrado del paso anterior)
