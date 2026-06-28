# Sinergia Industrias — Handoff Prompt

Copia esto en una nueva conversación o compártelo con otro agente/desarrollador para continuar el proyecto desde el estado actual:

---

Eres Hermes Agent trabajando en el proyecto Sinergia Industrias.

## 🎯 Contexto

Estás construyendo el demo web para **Sinergia Consultores SpA**, una consultora B2B chilena especializada en cumplimiento Ley REP 20.920, implementación ERP Odoo, levantamiento de procesos industriales y análisis de datos. El proyecto ya está avanzado (10 páginas) y desplegado en Vercel.

**Demo:** https://sinergia-industrias-demo.vercel.app
**Repo:** https://github.com/ETfromthemoon/sinergia-industrias-demo
**Ruta local:** `C:\Users\sergio\SERGIOIA\WEB\CLIENTES\Sinergiaconsultores\sinergia-industrias-demo\`
**Stack:** Next.js 16, Tailwind v4, motion/react, shadcn/ui, TypeScript
**Deploy:** Vercel (auto-deploy on push to master)
**GitHub:** ETfromthemoon (gh CLI autenticado)
**Presupuesto:** STR-2025-001 · $300.000 CLP (pagado)
**Cliente:** info@sinergiaindustrias.cl · +56 9 9458 4617 · Calle Limache 3421, of. 724, Viña del Mar

## 📊 Estado actual (28 Junio 2026)

### Páginas construidas (10)
| Ruta | Descripción |
|---|---|
| `/` | Home — hero oscuro + video, servicios bento, credibilidad, método, contacto |
| `/ley-rep` | Ley REP 20.920 — productos, obligados, servicio |
| `/implementacion-odoo` | ERP Odoo — módulos, proceso, beneficios |
| `/levantamiento-de-procesos` | Levantamiento de procesos |
| `/levantamiento-de-datos` | Levantamiento de datos |
| `/casos-de-exito` | 12 casos reales — slider full-width con imágenes Unsplash |
| `/nosotros` | Video hero YouTube (Tody2AVL6ys) + historia + Odoo Partner |
| `/contacto` | Formulario + WhatsApp + Google Maps |
| `/blog` | 6 artículos con diseño Swiss/blueprint + newsletter CTA |

### Diseño
- Estilo **Swiss / Blueprint técnico** — CornerTicks, blueprint-grid, grain, scan lines, crosshairs
- Paleta: carbon, navy, cyan, signal, steel
- Tipografía: Space Grotesk (display), Inter (body), JetBrains Mono (code)
- Componentes UI clave: `blueprint-frame`, `section-label`, `magnetic`, `split-text`, `number-ticker`, `hero-backdrop`, `process-schematic`

### Assets de marca
| Archivo | Uso |
|---|---|
| `public/sinergia-logo.png` | Logo Sinergia (navbar + footer) |
| `public/odoo-logo.png` | Logo oficial Odoo (7 ubicaciones vía componente `OdooLogo`) |
| `public/favicon.ico` | Favicon |
| `public/apple-touch-icon.png` | iOS/Android |

### Navbar
- "SOL Soluciones" es el dropdown (01 Ley REP, 02 Odoo, 03 Procesos, 04 Datos)
- Links directos: 05 Casos de éxito, 06 Nosotros, 07 Blog
- CTA "Conversemos" → /contacto

### Componentes clave
- `src/components/layout/video-hero.tsx` — hero con YouTube embed de fondo
- `src/components/layout/page-hero.tsx` — hero estándar dark/light
- `src/components/ui/odoo-logo.tsx` — componente logo oficial Odoo
- `src/app/casos-de-exito/case-slide.tsx` — slide full-width para slider
- `src/app/blog/content.tsx` — blog con 6 artículos placeholder

### Últimos cambios aplicados
- Logo oficial Sinergia reemplaza "SI" texto en navbar y footer
- Logo oficial Odoo reemplaza SVG personalizado
- Favicon generado desde logo Sinergia
- Coordenadas GPS eliminadas del hero (footer las conserva)
- Navbar reordenada (Soluciones primero)
- "00 Inicio" eliminado del navbar
- CtaBand eliminado de /casos-de-exito
- 12 imágenes Unsplash verificadas y corregidas (4 URLs rotas)
- Teléfonos corregidos (estaban con asteriscos)
- 52 botones mapeados en `.hermes/button-map-28jun-2026.md`

## ⚠️ Pendientes
- Dominio `sinergiaindustrias.cl` (actualmente en Odoo 15)
- 10 artículos SEO (presupuesto adicional)
- Google Ads campaign
- Conexión backend Odoo (sitio actualmente estático)
- Fotos reales de proyectos (reemplazar Unsplash en casos de éxito)
- Contenido real de artículos del blog

## 🔧 Comandos útiles
```bash
cd "C:\Users\sergio\SERGIOIA\WEB\CLIENTES\Sinergiaconsultores\sinergia-industrias-demo"
npm run dev      # desarrollo local
npm run build    # build de producción
git push origin master  # Vercel auto-deploya
```

## 📄 Documentos del proyecto
- `PROYECTO-AVANCE.md` — resumen completo del estado
- `.hermes/plans/2026-06-28_casos-exito-slider-fullwidth.md` — plan del slider
- `.hermes/button-map-28jun-2026.md` — mapa de 52 botones

---

El usuario es **Sergio Astudillo** (CRECE CON IA Chile). Prefiere respuestas concisas, audio resumen con voz Lorenzo es-CL +40%, y contenido visual (no solo terminal). Casi siempre en móvil.
