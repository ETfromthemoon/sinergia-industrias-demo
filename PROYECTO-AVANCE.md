# Sinergia Industrias — Demo Web · Estado del Proyecto

> **Actualizado:** 19 Julio 2026 · **Commit:** `8523297` (master)
> **Demo:** https://sinergia-industrias-demo.vercel.app
> **Repo:** https://github.com/ETfromthemoon/sinergia-industrias-demo
> **Stack:** Next.js 16 · Tailwind v4 · motion/react · shadcn/ui · Vercel

---

## 📊 Panorama General

| Indicador | Valor |
|---|---|
| Páginas | 9 (+ blog con 11 artículos) |
| Build | ✅ 0 errores |
| Deploy | ✅ Vercel (auto on push a master) |
| Diseño | Premium cinematográfico — glass, aurora, cursor glow (evolución del Swiss/blueprint original) |
| Dominio | `sinergiaindustrias.cl` operativo (DNS + correo) |
| Presupuesto | STR-2025-001 · $300.000 CLP · Pagado |

---

## 🗺️ Páginas

| Ruta | Página | Estado |
|---|---|---|
| `/` | Home — hero cinematográfico con video loop, servicios, credibilidad, método, contacto | ✅ |
| `/ley-rep` | Ley REP 20.920 — set-piece con dolly-zoom, productos, obligados, servicio | ✅ |
| `/implementacion-odoo` | ERP Odoo — módulos, proceso, beneficios | ✅ |
| `/levantamiento-de-procesos` | Levantamiento de procesos | ✅ |
| `/levantamiento-de-datos` | Levantamiento de datos | ✅ |
| `/casos-de-exito` | 12 casos reales — slider full-width con imágenes | ✅ |
| `/nosotros` | Video hero YouTube + historia + Odoo Partner | ✅ |
| `/contacto` | Formulario (FormSubmit.co) + WhatsApp + mapa | ✅ |
| `/blog` | 11 artículos reales, diseño editorial corporativo | ✅ |

---

## 🎨 Dirección Visual Actual

Evolución del diseño Swiss/blueprint original hacia un lenguaje **premium cinematográfico**:

- **Sistema glass** con aurora navy animada (blobs lentos, drift 22/28/34s)
- **Cursor glow** interactivo (`cursor-glow.tsx`)
- **Hero con video loop** + blur-in + parallax en scroll
- **Set-piece Ley REP** con efecto dolly-zoom
- **Navbar glass** + footer depurado
- `CornerTicks` / blueprint-frame se conservan — siguen siendo parte vigente del lenguaje visual técnico (ver `design-direction.md`)
- Tipografía: Space Grotesk (display) + Archivo (títulos evolucionados) + Inter (body) + JetBrains Mono (datos)
- Micro-lift corporativo en botones (reemplazó el efecto magnético anterior)
- Paleta: navy profundo + acero + cyan técnico (sin verde, sin gris medio de fondo)

Detalle completo en [`design-direction.md`](./design-direction.md).

---

## 🎨 Assets de Marca

| Asset | Archivo | Uso |
|---|---|---|
| Logo Sinergia | `public/sinergia-logo.png` | Navbar, Footer |
| Logo Odoo oficial | `public/odoo-logo.png` | Componente `OdooLogo` |
| Favicon | `public/favicon.ico` | Navegador |
| Apple icon | `public/apple-touch-icon.png` | iOS/Android |
| Media industrial curada | `public/media/*.jpg`, `hero-loop.mp4` | Hero, servicios, CTA band, set-pieces |

---

## 🔧 Historial de Cambios

### Rediseño premium (fases 0-7, jun-jul 2026)
- ✅ Fase 0-1: limpieza de boilerplate, sistema glass, aurora con drift, librería de motion, cursor glow
- ✅ Fase 2: media industrial curada (fotos + video loop hero)
- ✅ Fase 3: hero cinematográfico con video, blur-in y parallax
- ✅ Fase 4: navbar glass y footer depurado
- ✅ Fase 5: set-piece Ley REP con dolly-zoom + credibility bar depurada
- ✅ Fase 6: services/method/contact, fin del patrón clonado
- ✅ Fase 7: QA integral, hook de media query compartido, script de verificación visual

### Refinamiento post-rediseño (jul 2026)
- ✅ Ajustes de tipografía (Archivo) y layout lado a lado en Ley REP
- ✅ Reducción de subheader de métricas (evitar duplicación con hero)
- ✅ Micro-lift corporativo reemplaza efecto magnético en botones
- ✅ Fotografía real en servicios y CTA band
- ✅ Rediseño UI: sliders animados, pasos progresivos con autoplay
- ✅ Iconos más grandes (44px), animaciones más lentas y suaves
- ✅ CTA de blog posts rediseñada — minimalista con blueprint frame

### Blog y contenido (jun-jul 2026)
- ✅ 6 placeholders → **11 artículos reales** publicados (Ley REP, Odoo, procesos, sostenibilidad)
- ✅ Diseño editorial corporativo puro (sin íconos, sin drop cap, sin sidebar)
- ✅ Guía de formato vinculante `content/blog/FORMATO.md`
- ✅ Pipeline de automatización de blog documentado (`docs/AUTOMATIZACION-BLOG.md`) — nuevos artículos llegan como ramas `draft/post-*` para revisión antes de mergear a master

### Preparación para producción (jul 2026)
- ✅ Auditoría de UI y sistema de diseño
- ✅ Formularios medibles (evento `generate_lead` → dataLayer/gtag, no-op hasta instalar GTM/GA4)
- ✅ SEO/GEO base: metadata, OpenGraph, JSON-LD `BlogPosting`, robots.txt, sitemap.xml

### Consolidación de ramas (19 jul 2026)
- ✅ Se unificaron 5 ramas activas en una sola `master` (fast-forward, sin merge commits)
- ✅ Se rescató artículo de blog que solo existía en rama draft antes de eliminarla
- ✅ Ramas eliminadas: `feat/redesign-premium`, `ajustes-estetica`, `feat/auditoria-ui-sistema-diseno`, `draft/post-fiscalizacion-ley-rep-sma-sanciones-2026`

---

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx            # Home
│   ├── blog/                # Blog (11 artículos)
│   ├── casos-de-exito/      # Slider full-width
│   ├── contacto/            # Formulario + mapa
│   ├── implementacion-odoo/
│   ├── levantamiento-de-datos/
│   ├── levantamiento-de-procesos/
│   ├── ley-rep/              # Set-piece dolly-zoom
│   └── nosotros/             # Video hero
├── components/
│   ├── layout/
│   │   ├── navbar.tsx        # Glass
│   │   ├── footer.tsx
│   │   ├── page-hero.tsx
│   │   └── video-hero.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── method.tsx
│   │   ├── contact.tsx
│   │   ├── cta-band.tsx
│   │   ├── clients-strip.tsx
│   │   ├── odoo-modules-grid.tsx
│   │   ├── case-study-card.tsx
│   │   ├── ley-rep.tsx
│   │   ├── process-steps.tsx
│   │   ├── feature-section.tsx
│   │   ├── blog-cta.tsx
│   │   └── related-services.tsx
│   └── ui/
│       ├── odoo-logo.tsx
│       ├── blueprint-frame.tsx
│       ├── section-label.tsx
│       ├── cursor-glow.tsx      # Nuevo — reemplaza magnetic.tsx
│       ├── split-text.tsx
│       ├── number-ticker.tsx
│       ├── process-schematic.tsx
│       ├── progressive-steps.tsx
│       ├── module-slider.tsx
│       ├── animated-icon.tsx
│       └── form-submit.tsx      # Envío FormSubmit.co con analytics
├── lib/
│   ├── motion.ts             # Librería de motion compartida
│   ├── use-media-query.ts    # Hook compartido
│   └── analytics.ts          # Evento generate_lead
└── content/blog/              # 11 artículos MDX + FORMATO.md
```

---

## ⚠️ Pendientes

- [ ] **Bloqueante Google Ads:** confirmar activación de FormSubmit.co (correo de confirmación a `info@sinergiaindustrias.cl`) — sin esto los leads no llegan
- [ ] Instalar GTM/GA4 y vincular conversión `generate_lead` en Google Ads
- [ ] Fotos reales de proyectos (reemplazar Unsplash en algunos casos de éxito)
- [ ] SEO técnico avanzado: `Organization`, `LocalBusiness`, `Service`, `BreadcrumbList` (JSON-LD)
- [ ] GEO/AEO: contenido pregunta-respuesta, `llms.txt` opcional
- [ ] Autoridad local: Google Business Profile, backlinks
- [ ] Revisar y aprobar ramas `draft/post-*` pendientes (pipeline de blog automatizado)

Detalle completo del checklist de producción en [`docs/ENTREGA-PRODUCCION.md`](./docs/ENTREGA-PRODUCCION.md).

---

## 📞 Contacto del Cliente

- **Email:** info@sinergiaindustrias.cl
- **Tel:** +56 9 9458 4617
- **Dirección:** Calle Limache 3421, of. 724, Viña del Mar
- **LinkedIn:** linkedin.com/company/sinergia-industrias
