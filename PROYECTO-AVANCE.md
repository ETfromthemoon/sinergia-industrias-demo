# Sinergia Industrias — Demo Web · Estado del Proyecto

> **Actualizado:** 28 Junio 2026 · **Commit:** `5ba0d28`
> **Demo:** https://sinergia-industrias-demo.vercel.app
> **Repo:** https://github.com/ETfromthemoon/sinergia-industrias-demo
> **Stack:** Next.js 16 · Tailwind v4 · motion/react · shadcn/ui · Vercel

---

## 📊 Panorama General

| Indicador | Valor |
|---|---|
| Páginas | 10 (+ blog) |
| Build | ✅ 0 errores |
| Deploy | ✅ Vercel (auto on push) |
| Diseño | Swiss / Blueprint técnico |
| Presupuesto | STR-2025-001 · $300.000 CLP · Pagado |

---

## 🗺️ Páginas

| Ruta | Página | Estado |
|---|---|---|
| `/` | Home — hero con video, servicios, casos, contacto | ✅ |
| `/ley-rep` | Ley REP 20.920 — productos, obligados, servicio | ✅ |
| `/implementacion-odoo` | ERP Odoo — módulos, proceso, beneficios | ✅ |
| `/levantamiento-de-procesos` | Levantamiento de procesos | ✅ |
| `/levantamiento-de-datos` | Levantamiento de datos | ✅ |
| `/casos-de-exito` | 12 casos reales — slider full-width con imágenes | ✅ |
| `/nosotros` | Video hero YouTube + historia + Odoo Partner | ✅ |
| `/contacto` | Formulario + WhatsApp + mapa | ✅ |
| `/blog` | 6 artículos con diseño Swiss/blueprint | ✅ |

---

## 🎨 Assets de Marca

| Asset | Archivo | Uso |
|---|---|---|
| Logo Sinergia | `public/sinergia-logo.png` | Navbar, Footer |
| Logo Odoo oficial | `public/odoo-logo.png` | 7 ubicaciones (componente `OdooLogo`) |
| Favicon | `public/favicon.ico` | Navegador |
| Apple icon | `public/apple-touch-icon.png` | iOS/Android |

---

## 🔧 Cambios Recientes (28 Jun 2026)

### Sesión actual
- ✅ Navbar reordenada: SOL Soluciones (01-04) → 05 Casos → 06 Nosotros → 07 Blog
- ✅ Eliminado "00 Inicio" del navbar (logo ya va al home)
- ✅ Slider full-width en /casos-de-exito con imágenes Unsplash
- ✅ 12 imágenes verificadas (4 URLs rotas corregidas)
- ✅ CtaBand eliminado de /casos-de-exito (CTA solo en hero)
- ✅ Video hero YouTube del sitio original incorporado en /nosotros
- ✅ Logo oficial de Sinergia reemplaza "SI" en navbar y footer
- ✅ Favicon generado desde el logo
- ✅ Logo oficial de Odoo reemplaza SVG personalizado
- ✅ Imágenes de fundadores eliminadas de /nosotros (no fidedignas)
- ✅ Íconos genéricos (Layers, Cpu) reemplazados por OdooLogo en cards Odoo
- ✅ Coordenadas GPS eliminadas del hero (solo footer conserva referencia)
- ✅ Teléfonos corregidos (estaban truncados con asteriscos)
- ✅ 52 botones mapeados y verificados
- ✅ Blog con 6 artículos, newsletter CTA, diseño Swiss

### Anterior
- ✅ 8 páginas base construidas
- ✅ Ajustes estéticos (navbar, submenu hover, hero atmosphere)
- ✅ Diseño Swiss/blueprint técnico (nivel talla mundial)
- ✅ Odoo Modules Grid + Clients Strip
- ✅ 12 casos de éxito con contenido real

---

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Metadata + favicon + fuentes
│   ├── page.tsx            # Home
│   ├── blog/               # Blog (6 artículos)
│   ├── casos-de-exito/     # Slider full-width
│   ├── contacto/           # Formulario + mapa
│   ├── implementacion-odoo/
│   ├── levantamiento-de-datos/
│   ├── levantamiento-de-procesos/
│   ├── ley-rep/
│   └── nosotros/           # Video hero
├── components/
│   ├── layout/
│   │   ├── navbar.tsx      # SOL dropdown primero
│   │   ├── footer.tsx      # Logo Sinergia + Odoo
│   │   ├── page-hero.tsx
│   │   └── video-hero.tsx  # YouTube bg hero
│   ├── sections/
│   │   ├── hero.tsx        # Home hero
│   │   ├── services.tsx    # Bento grid Odoo card
│   │   ├── credibility-bar.tsx
│   │   ├── method.tsx
│   │   ├── contact.tsx
│   │   ├── cta-band.tsx
│   │   ├── clients-strip.tsx
│   │   ├── odoo-modules-grid.tsx
│   │   ├── case-study-card.tsx
│   │   ├── ley-rep.tsx
│   │   └── process-steps.tsx
│   └── ui/
│       ├── odoo-logo.tsx   # Logo oficial Odoo (componente)
│       ├── blueprint-frame.tsx
│       ├── section-label.tsx
│       ├── magnetic.tsx
│       ├── split-text.tsx
│       ├── number-ticker.tsx
│       ├── hero-backdrop.tsx
│       └── process-schematic.tsx
└── public/
    ├── sinergia-logo.png   # Logo Sinergia
    ├── odoo-logo.png       # Logo Odoo oficial
    ├── favicon.ico
    ├── favicon-32x32.png
    └── apple-touch-icon.png
```

---

## ⚠️ Pendientes

- [ ] Dominio `sinergiaindustrias.cl` (actualmente en Odoo 15)
- [ ] 10 artículos SEO (presupuesto adicional)
- [ ] Google Ads campaign
- [ ] Conexión backend Odoo (sitio actualmente estático)
- [ ] Fotos reales de proyectos (reemplazar Unsplash)
- [ ] Contenido real de artículos del blog (ahora son placeholders)

---

## 📞 Contacto del Cliente

- **Email:** info@sinergiaindustrias.cl
- **Tel:** +56 9 9458 4617
- **Dirección:** Calle Limache 3421, of. 724, Viña del Mar
- **LinkedIn:** linkedin.com/company/sinergia-industrias
