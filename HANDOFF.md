# Sinergia Industrias — Handoff Prompt

Copia esto en una nueva conversación o compártelo con otro agente/desarrollador para continuar el proyecto desde el estado actual:

---

Eres un agente trabajando en el proyecto Sinergia Industrias.

## 🎯 Contexto

Estás construyendo el sitio web para **Sinergia Consultores SpA**, una consultora B2B chilena especializada en cumplimiento Ley REP 20.920, implementación ERP Odoo, levantamiento de procesos industriales y análisis de datos. El proyecto está avanzado (9 páginas + blog de 11 artículos) y desplegado en Vercel, con dominio propio operativo.

**Demo:** https://sinergia-industrias-demo.vercel.app
**Dominio productivo:** sinergiaindustrias.cl
**Repo:** https://github.com/ETfromthemoon/sinergia-industrias-demo
**Ruta local:** `C:\Users\sergio\SERGIOIA\WEB\CLIENTES\Sinergiaconsultores\sinergia-industrias-demo\`
**Stack:** Next.js 16, Tailwind v4, motion/react, shadcn/ui, TypeScript
**Deploy:** Vercel (auto-deploy on push a `master`)
**GitHub:** ETfromthemoon (gh CLI autenticado)
**Presupuesto:** STR-2025-001 · $300.000 CLP (pagado)
**Cliente:** info@sinergiaindustrias.cl · +56 9 9458 4617 · Calle Limache 3421, of. 724, Viña del Mar

## 📊 Estado actual (19 Julio 2026)

### Ramas
El repo tiene **una sola rama principal: `master`**. Todo el trabajo histórico (rediseño Swiss/blueprint original + rediseño premium + refinamientos) fue consolidado ahí el 19-jul-2026.

El pipeline de blog automatizado (ver abajo) crea ramas temporales `draft/post-*` con artículos nuevos pendientes de revisión — es normal verlas aparecer; no se mergean automáticamente a master, requieren aprobación.

### Páginas construidas (9 + blog)
| Ruta | Descripción |
|---|---|
| `/` | Home — hero cinematográfico con video loop, servicios bento, credibilidad, método, contacto |
| `/ley-rep` | Ley REP 20.920 — set-piece con dolly-zoom, productos, obligados, servicio |
| `/implementacion-odoo` | ERP Odoo — módulos, proceso, beneficios |
| `/levantamiento-de-procesos` | Levantamiento de procesos |
| `/levantamiento-de-datos` | Levantamiento de datos |
| `/casos-de-exito` | 12 casos reales — slider full-width con imágenes |
| `/nosotros` | Video hero YouTube + historia + Odoo Partner |
| `/contacto` | Formulario (FormSubmit.co) + WhatsApp + Google Maps |
| `/blog` | 11 artículos reales, diseño editorial corporativo |

### Diseño — Premium cinematográfico (evolución del Swiss/blueprint)
El sitio pasó por un rediseño completo en 7 fases que evolucionó el estilo Swiss/blueprint técnico original hacia un lenguaje más premium, sin perder el registro de ingeniería:

- Sistema **glass** con aurora navy animada (drift lento 22/28/34s)
- **Cursor glow** interactivo, hero con video loop + blur-in + parallax
- Set-piece Ley REP con efecto **dolly-zoom**
- Navbar glass, footer depurado, micro-lift corporativo en botones (no magnético)
- `CornerTicks` / `blueprint-frame` se conservan — siguen vigentes en el lenguaje visual
- Paleta: navy profundo + acero + cyan técnico
- Tipografía: Space Grotesk + Archivo (display) / Inter (body) / JetBrains Mono (datos)

Detalle completo en `design-direction.md`.

### Assets de marca
| Archivo | Uso |
|---|---|
| `public/sinergia-logo.png` | Logo Sinergia (navbar + footer) |
| `public/odoo-logo.png` | Logo oficial Odoo (componente `OdooLogo`) |
| `public/favicon.ico` | Favicon |
| `public/apple-touch-icon.png` | iOS/Android |
| `public/media/*.jpg`, `hero-loop.mp4` | Media industrial curada (hero, servicios, CTA, set-pieces) |

### Componentes clave
- `src/lib/motion.ts` — librería de motion compartida (nueva, del rediseño)
- `src/lib/use-media-query.ts` — hook compartido
- `src/lib/analytics.ts` — evento `generate_lead` (dataLayer/gtag, no-op sin GTM instalado)
- `src/components/ui/cursor-glow.tsx` — reemplaza el antiguo `magnetic.tsx`
- `src/components/ui/form-submit.tsx` — envío de formularios vía FormSubmit.co
- `src/components/layout/video-hero.tsx` — hero con video de fondo
- `src/app/blog/` — 11 artículos MDX en `content/blog/`, guía de formato en `content/blog/FORMATO.md`

### Blog
- 11 artículos reales publicados (Ley REP, Odoo, procesos, sostenibilidad) — ya no hay placeholders
- Diseño editorial corporativo puro (sin íconos, sin drop cap, sin sidebar)
- Pipeline de automatización documentado en `docs/AUTOMATIZACION-BLOG.md` — artículos nuevos llegan como ramas `draft/post-*`, requieren revisión y merge manual

## ⚠️ Pendientes

- **Bloqueante para Google Ads:** confirmar activación de FormSubmit.co (revisar correo de confirmación en `info@sinergiaindustrias.cl`) — sin esto los formularios "envían" pero no llega nada
- Instalar GTM/GA4 y vincular la conversión `generate_lead` en Google Ads
- Fotos reales de proyectos (reemplazar algunas imágenes Unsplash en casos de éxito)
- SEO técnico avanzado: JSON-LD `Organization`, `LocalBusiness`, `Service`, `BreadcrumbList`
- GEO/AEO: contenido pregunta-respuesta, `llms.txt` opcional
- Autoridad local: Google Business Profile, backlinks
- Revisar ramas `draft/post-*` pendientes del pipeline de blog

## 🔧 Comandos útiles
```bash
cd "C:\Users\sergio\SERGIOIA\WEB\CLIENTES\Sinergiaconsultores\sinergia-industrias-demo"
npm run dev      # desarrollo local
npm run build    # build de producción
git push origin master  # Vercel auto-deploya
```

## 📄 Documentos del proyecto
- `PROYECTO-AVANCE.md` — resumen completo del estado
- `design-direction.md` — dirección visual y principios de diseño
- `docs/ENTREGA-PRODUCCION.md` — checklist de puesta en producción (formularios, analytics, Google Ads)
- `docs/AUTOMATIZACION-BLOG.md` — pipeline de generación automática de artículos
- `docs/SEO-GEO.md` — roadmap de SEO y GEO/AEO
- `content/blog/FORMATO.md` — guía de formato vinculante para artículos del blog

---

El usuario es **Sergio Astudillo** (CRECE CON IA Chile). Prefiere respuestas concisas, audio resumen con voz Lorenzo es-CL +40%, y contenido visual (no solo terminal). Casi siempre en móvil.
