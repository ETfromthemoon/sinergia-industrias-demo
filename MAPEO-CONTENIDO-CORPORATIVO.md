# Mapeo de Contenido — Landing → Sitio Corporativo

> Transformación del diseño aprobado (landing page) a sitio corporativo de 8 páginas,
> migrando el contenido del sitio antiguo (sinergiaindustrias.cl / Odoo 15) al nuevo diseño.

---

## 0. Sitio antiguo mapeado (fuente de contenido)

Se scrapearon las 8 páginas actuales de `sinergiaindustrias.cl`:

| # | URL antigua | Slug nuevo |
|---|---|---|
| 1 | `/inicio` | `/` |
| 2 | `/ley-rep` | `/ley-rep` |
| 3 | `/implementacion-odoo-15` | `/implementacion-odoo` |
| 4 | `/levantamiento-de-procesos` | `/levantamiento-de-procesos` |
| 5 | `/levantamiento-de-informacion` | `/levantamiento-de-datos` |
| 6 | `/casos-de-exito` | `/casos-de-exito` |
| 7 | `/sobre-sinergia` | `/nosotros` |
| 8 | `/contactus` | `/contacto` |

**Datos del cliente (verificados en sitio vivo):**
- Email: `info@sinergiaindustrias.cl`
- Teléfono: `+56 9 9458 4617`
- Dirección: Calle Limache 3421, Reitz II of. 724, Viña del Mar
- LinkedIn: `/company/sinergia-industrias`

---

## 1. Arquitectura del sitio corporativo (App Router)

```
src/app/
├── layout.tsx                    ← root layout (Navbar + Footer + fonts + metadata)
├── page.tsx                      ← HOME (landing optimizada)
├── globals.css
├── sitemap.ts                    ← NUEVO: sitemap dinámico
├── robots.ts                     ← NUEVO: robots.txt
├── ley-rep/
│   └── page.tsx                  ← Página Ley REP
├── implementacion-odoo/
│   └── page.tsx                  ← Página Implementación ERP Odoo
├── levantamiento-de-procesos/
│   └── page.tsx                  ← Página Levantamiento de Procesos
├── levantamiento-de-datos/
│   └── page.tsx                  ← Página Levantamiento de Datos
├── casos-de-exito/
│   └── page.tsx                  ← Página Casos de Éxito
├── nosotros/
│   └── page.tsx                  ← Página Nosotros
└── contacto/
    └── page.tsx                  ← Página Contacto
```

**Navbar:** cambia de anchor links (`#servicios`) a rutas reales (`/ley-rep`, `/nosotros`, etc.) con dropdown "Soluciones".

**Footer:** links a las 8 páginas + datos de contacto + badge Ready Partner.

---

## 2. Componentes del diseño aprobado (reutilización)

### Componentes UI existentes — se reutilizan tal cual:
- `src/components/ui/badge.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/magnetic.tsx`
- `src/components/ui/number-ticker.tsx`
- `src/components/ui/section-label.tsx`
- `src/components/ui/separator.tsx`
- `src/components/ui/split-text.tsx`
- `src/components/ui/hero-backdrop.tsx`
- `src/components/ui/process-schematic.tsx`
- `src/components/ui/blueprint-frame.tsx` (CornerTicks)

### Layout components — se adaptan:
- `navbar.tsx` → agregar dropdown "Soluciones" + links a rutas
- `footer.tsx` → actualizar NAV_LINKS con rutas reales

### Section components — se distribuyen entre páginas:
- `hero.tsx` → se mantiene en HOME, versiones adaptadas en páginas internas (PageHero)
- `credibility-bar.tsx` → se mantiene en HOME
- `services.tsx` → se mantiene en HOME (resumen), cada card enlaza a su página
- `ley-rep.tsx` → se mantiene en HOME (resumen), versión extendida en `/ley-rep`
- `method.tsx` → se mantiene en HOME, también en `/nosotros`
- `contact.tsx` → se mantiene en HOME (resumen), versión completa en `/contacto`

### Componentes NUEVOS a crear:
- `src/components/layout/page-hero.tsx` — hero compacto para páginas internas (variante clara/oscura)
- `src/components/sections/cta-band.tsx` — banda CTA reutilizable entre secciones
- `src/components/sections/clients-strip.tsx` — carril de logos de clientes (reutilizable)
- `src/components/sections/odoo-modules-grid.tsx` — grid de módulos Odoo
- `src/components/sections/case-study-card.tsx` — tarjeta de caso de éxito
- `src/components/sections/process-steps.tsx` — stepper reutilizable (organiza/programa/planea/analiza)

---

## 3. Mapeo página por página

### PÁGINA 1 — HOME (`/`)

**Estructura:** mantiene las 8 secciones de la landing aprobada, con ajustes de enlaces.

| Sección | Componente | Cambios |
|---|---|---|
| Navbar | `navbar.tsx` | Links a rutas reales + dropdown Soluciones |
| Hero | `hero.tsx` | Sin cambios de copy. CTAs apuntan a `/contacto` y `/casos-de-exito` |
| Credibilidad | `credibility-bar.tsx` | Sin cambios |
| Servicios | `services.tsx` | Cada card ahora es `<Link>` a su página interna |
| Ley REP | `ley-rep.tsx` | CTA "Conocer Ley REP" → `/ley-rep` |
| Método | `method.tsx` | Sin cambios |
| Contacto | `contact.tsx` | CTA "Ver todos los casos" → `/casos-de-exito` |
| Footer | `footer.tsx` | Links a 8 páginas |

**Copy del hero (mantener del diseño aprobado):**
- Eyebrow: `Ready Partner Oficial Odoo · Especialistas Ley REP`
- Headline: `Procesos que funcionan. / Cumplimiento que no falla.`
- Subhead: `Ponemos en orden tus procesos, implementamos tu ERP y resolvemos tu cumplimiento ambiental. Ingeniería aplicada para industrias en Chile.`
- CTA: `Conversemos tu proyecto →`

---

### PÁGINA 2 — Ley REP (`/ley-rep`)

**Contenido fuente:** `/ley-rep` del sitio antiguo.

**Estructura de la página:**

| # | Sección | Componente | Contenido (del sitio antiguo) |
|---|---|---|---|
| 1 | PageHero (dark) | `page-hero.tsx` | Eyebrow: `Cumplimiento normativo · Ley 20.920` / Headline: `Levantamiento y sistematización REP` / Subhead: `Cumple con la REP de manera eficiente. Diseñamos un software intuitivo que consolida todos los productos prioritarios.` / CTA: `Conversemos tu proyecto →` |
| 2 | ¿Qué es la REP? | bloque texto+imagen | Título: `¿Qué es la REP?` / Body: `La ley tiene como instrumento principal la Responsabilidad Extendida del Productor (REP), mecanismo en virtud del cual los productores de productos prioritarios son responsables de la organización y financiamiento de la gestión de los residuos derivados de la comercialización de sus productos en el país.` |
| 3 | Productos prioritarios | grid 6 cards | Título: `¿Qué productos prioritarios regula la Ley REP?` / Cards: 1) Envases y embalajes 2) Aceites lubricantes 3) Baterías 4) Pilas 5) Neumáticos 6) Aparatos eléctricos y electrónicos. Cada card con ícono + link a `economiacircular.mma.gob.cl` |
| 4 | ¿Quiénes son los productores? | bloque 3 puntos | Título: `¿Quiénes son los productores de productos prioritarios?` / Intro: `El Productor de Producto Prioritario se define como un fabricante y/o importador que:` / 3 ítems: 1) Coloca un producto prioritario por primera vez en el mercado nacional. 2) Importa un producto prioritario para su propio uso profesional. 3) Coloca un producto prioritario bajo marca propia, adquirido de un tercero. |
| 5 | ¿Qué es un SIG? | bloque texto | Título: `¿Qué es un SIG?` / Body: `El Sistema Integrado de Gestión se establece como instrumento para que los productores den cumplimiento a las obligaciones de la REP, a través de la implementación de un plan de gestión (Ley 20.920, art.3 numeral 27). Los productores deben cumplir sus obligaciones a través de un SIG autorizado por el Ministerio de Medio Ambiente y conformado únicamente por productores.` |
| 6 | Proceso REP (checklist) | reutiliza patrón `ley-rep.tsx` | Panel `PROC.REP / LEY 20.920` con 4 etapas: 01 Levantamiento de residuos por categoría / 02 Cálculo de metas anuales / 03 Gestión plataforma REP del Ministerio / 04 Reporte final auditado |
| 7 | Clientes REP | `clients-strip.tsx` | Título: `Clientes que están cumpliendo con la REP` / Logos: Tottus, Iansa, TMLUC, Aramark, Dimerc + Joint Venture Asalvo (Jumbo, Paris, Easy, Corona, Ripley) |
| 8 | CTA band | `cta-band.tsx` | `Queremos construir nuevos horizontes junto a ti.` / CTA: `Conversemos tu proyecto →` |

---

### PÁGINA 3 — Implementación ERP Odoo (`/implementacion-odoo`)

**Contenido fuente:** `/implementacion-odoo-15` del sitio antiguo.

**Estructura de la página:**

| # | Sección | Componente | Contenido |
|---|---|---|---|
| 1 | PageHero (dark) | `page-hero.tsx` | Eyebrow: `Ready Partner Oficial Odoo` / Headline: `Unifica, optimiza, triunfa` / Subhead: `Potencia la gestión de tu empresa con Odoo. Una sola plataforma para finanzas, bodega, RRHH y operaciones.` / Badge: `OFICIAL` |
| 2 | ¿Qué es Odoo? | bloque texto+imagen | Título: `¿Qué es Odoo?` / Body: `Odoo ERP es una poderosa herramienta utilizada mundialmente para dar solución adaptativa a las diferentes necesidades de organizaciones. A través de su implementación adaptada a cada cliente generamos una solución robusta pero acotada a la problemática en poco tiempo.` / CTA: `Descubra más →` (link a odoo.com) |
| 3 | Módulos Odoo | `odoo-modules-grid.tsx` | Título: `Una aplicación para cada necesidad` / 6 categorías con sub-módulos: **Inventario y fabricación:** Inventario, MRP, PLM, Compra, Mantenimiento, Calidad / **Finanzas:** Contabilidad, Facturación, Gastos, Documentos, Firma / **Ventas:** CRM, Ventas, Punto de venta, Suscripciones, Alquiler / **Sitio web:** Sitios web, E-commerce, Blogs, Foro, eLearning, Chat en vivo / **RRHH:** Empleados, Reclutamiento, Vacaciones, Valoraciones, Referencias, Flota / **Marketing:** Automatización, Email, SMS, Social, Eventos, Encuestas / **Servicios:** Proyectos, Registro de horas, Servicio externo, Asistencia, Planeación, Agenda / **Productividad:** Conversaciones, Aprobaciones, VoIP / **Personalización:** Odoo Studio |
| 4 | Propuesta de valor | bloque texto | Título: `El fin de las integraciones problemáticas` / Body: `Si tienes soluciones que no se comunican entre sí, ingresas información más de una vez y pierdes visión general. Las aplicaciones de Odoo están perfectamente integradas, permitiendo automatizar procesos y aprovechar ganancias.` |
| 5 | Clientes Odoo | `clients-strip.tsx` | Título: `Clientes que han integrado Odoo` / Logos: Tottus, Aramark, Iansa, TMLUC, Dimerc, Asalvo, Ecostandard, CV Trading, Vinderchile, Red Circular, Moriah, CIAL + Joint Venture Asalvo |
| 6 | CTA band | `cta-band.tsx` | `Queremos construir nuevos horizontes junto a ti.` / CTA: `Conversemos tu proyecto →` |

---

### PÁGINA 4 — Levantamiento de Procesos (`/levantamiento-de-procesos`)

**Contenido fuente:** `/levantamiento-de-procesos` del sitio antiguo.

**Estructura de la página:**

| # | Sección | Componente | Contenido |
|---|---|---|---|
| 1 | PageHero (dark) | `page-hero.tsx` | Eyebrow: `Diagnóstico operacional` / Headline: `Optimiza, innova, triunfa` / Subhead: `Estudiamos minuciosamente tus operaciones para identificar áreas de mejora y eficiencia. Enfoque estratégico que te brinda ventajas competitivas.` |
| 2 | El proceso | `process-steps.tsx` | Título: `Lo que necesitas, como te gusta` / 4 pasos: 01 **Organiza** — Resumen claro y eficiente de tus procesos / 02 **Programa** — Lleva seguimiento de las operaciones / 03 **Planea** — Asigna el tiempo necesario a tareas específicas en un turno planeado / 04 **Analiza** — Genera reportes y realiza análisis |
| 3 | ¿Por qué optimizar? | bloque texto | Título: `¿Por qué optimizar tus procesos con Sinergia?` / Body: `El levantamiento de procesos consiste en realizar una investigación exhaustiva, análisis detallado y definición precisa de cada elemento que conforma los procesos de tu empresa. Esto implica identificar todas las actividades necesarias para lograr un resultado. Al definir estos elementos con claridad, obtienes: optimización de costos, reducción de tiempos de producción y nuevas metodologías de producción.` |
| 4 | Clientes | `clients-strip.tsx` | Título: `Clientes que han levantado sus procesos junto a Sinergia` / Logos: Tottus, Red Circular, Asalvo, Ecostandard, CIAL, Vinderchile + otros |
| 5 | CTA band | `cta-band.tsx` | `Queremos construir nuevos horizontes junto a ti.` / CTA: `Conversemos tu proyecto →` |

---

### PÁGINA 5 — Levantamiento de Datos (`/levantamiento-de-datos`)

**Contenido fuente:** `/levantamiento-de-informacion` del sitio antiguo.

**Estructura de la página:**

| # | Sección | Componente | Contenido |
|---|---|---|---|
| 1 | PageHero (dark) | `page-hero.tsx` | Eyebrow: `Business Intelligence` / Headline: `Datos que hablan, decisiones que impactan` / Subhead: `Transformamos montañas de información en valiosos insights que cuentan una historia. Te brindamos el conocimiento necesario para tomar decisiones estratégicas.` |
| 2 | Propósito | bloque texto | Título: `Nuestro propósito es ayudar a transformar los negocios` / Body: `Los desafíos presentes en nuestro entorno nos impulsan a crear iniciativas tecnológicas con una respuesta ágil y flexible, sin sacrificar eficiencia, robustez y seguridad.` |
| 3 | Reportes | bloque texto+imagen | Título: `Reportes claros y completos` / Body: `Mantente al día con reportes en tiempo real. Toma mejores decisiones con reportes dinámicos que puedes guardar y compartir. Mantén la información clave al alcance con tableros personalizados.` |
| 4 | Cómo transformamos | `process-steps.tsx` (variante) | Título: `¿Cómo transformamos los negocios?` / 4 pasos: 01 **Diseño de soluciones** — Diseñar soluciones y experiencias personalizadas con visión de sustentabilidad / 02 **Consultoría especializada** — Mapeo de procesos, Discovery / 03 **Desarrollo e implementación** — Implementación de soluciones a medida / 04 **Soporte y continuidad** — Servicio de soporte y continuidad de excelencia |
| 5 | Clientes | `clients-strip.tsx` | Título: `Clientes que han realizado levantamientos de información junto a Sinergia` / Logos: Tottus, Iansa, CV Trading, Dimerc, TMLUC, Aramark + Joint Venture Asalvo |
| 6 | CTA band | `cta-band.tsx` | `Queremos construir nuevos horizontes junto a ti.` / CTA: `Conversemos tu proyecto →` |

---

### PÁGINA 6 — Casos de Éxito (`/casos-de-exito`)

**Contenido fuente:** `/casos-de-exito` del sitio antiguo.

**Estructura de la página:**

| # | Sección | Componente | Contenido |
|---|---|---|---|
| 1 | PageHero (dark) | `page-hero.tsx` | Eyebrow: `Resultados comprobables` / Headline: `Creamos proyectos que nos enorgullecen` / Subhead: `Una mirada a los proyectos donde aplicamos ingeniería de procesos, implementación Odoo y cumplimiento Ley REP.` |
| 2 | Grid de casos | `case-study-card.tsx` ×10 | Título: `Casos de éxito` / 10 tarjetas, cada una con: nombre del cliente, rubro, tabs Contexto/Servicio/Resultados |
| 3 | CTA band | `cta-band.tsx` | `¿Tu empresa podría ser el próximo caso?` / CTA: `Conversemos tu proyecto →` |

**Casos de éxito (datos del sitio antiguo):**

| Cliente | Rubro | Servicio | Resultado |
|---|---|---|---|
| Moriah | Leasing operativo | Levantamiento de procesos | Mejora sustancial en tiempos de procesamiento de solicitudes de Leasing, eliminación de partes redundantes |
| Tottus | Supermercados | Levantamiento de información REP | Diseño de índice innovador de reciclabilidad de packaging, mejoras continuas en cada proceso |
| Iansa | Alimentos (azúcar, legumbres) | Levantamiento de información REP | Sistematización y levantamiento normativo REP para declaración de productos prioritarios |
| Tresmontes Lucchetti | Importación y fabricación de alimentos | Levantamiento de información REP | Sistematización y levantamiento normativo REP para declaración de productos prioritarios |
| Aramark | Alimentación y gestión de instalaciones | Levantamiento de información REP | Sistematización y levantamiento normativo REP para declaración de productos prioritarios |
| Dimerc | Distribución de productos de oficina | Levantamiento de información REP | Sistematización y levantamiento normativo REP para declaración de productos prioritarios |
| Asalvo | Asesoría ambiental | Implementación Odoo ERP | Agenda de servicios, manejo integral de inventario en tiempo real, unificación de información |
| Ecostandard | Sistemas de almacenamiento de residuos | Levantamiento de procesos + Odoo MRP/CRM | Reducción en tiempos de fabricación, automatización de tareas, mejora en ratio de conversión |
| Red Circular | Economía circular | Levantamiento de procesos + Odoo MRP/CRM | Optimización de línea de producción, mejora en conversión de clientes potenciales |
| CIAL | Trabajo en altura | Implementación Odoo ERP | Agenda de servicios, manejo integral de inventario, unificación de procesos |
| MB Chemicals | Sanitización industrial | Implementación Odoo ERP | Agenda de servicios, manejo integral de inventario, unificación de información |
| Podas Chile | Poda y corte preventivo | Implementación Odoo ERP | Agenda de servicios, manejo integral de inventario, unificación de procesos |

---

### PÁGINA 7 — Nosotros (`/nosotros`)

**Contenido fuente:** `/sobre-sinergia` del sitio antiguo.

**Estructura de la página:**

| # | Sección | Componente | Contenido |
|---|---|---|---|
| 1 | PageHero (dark) | `page-hero.tsx` | Eyebrow: `Ingeniería de procesos` / Headline: `Transformamos empresas, creando sinergia` / Subhead: `Somos apasionados por la tecnología y la transformación organizacional. Llevamos a nuestros clientes hacia nuevos horizontes con medidas tangibles y demostrables.` |
| 2 | Historia y visión | bloque texto | Título: `Historia y visión` / Body: `Somos personas comunes, criados en un entorno donde la tecnología era un concepto ajeno. A lo largo de nuestras carreras nos dimos cuenta del potencial transformador de la información y donde se hacen las diferencias entre emprendimientos y empresas de gran tamaño. Decidimos ser agentes de cambio, acercar el conocimiento y la tecnología a todos los negocios que lo requieran, sin importar su tamaño. Vamos e iremos siempre por la innovación, el conocimiento y el autoaprendizaje. Creamos y crearemos Sinergia en conjunto.` |
| 3 | Odoo Partner | bloque texto+badge | Título: `Una herramienta para conectarlas a todas` / Body: `Creemos en la libertad del conocimiento, por eso somos Odoo Partner, un software de código abierto que nos brinda posibilidades ilimitadas. Odoo nos ha permitido llevar nuestros objetivos más allá.` / Badge: `Ready Partner Oficial Odoo` |
| 4 | Método | `method.tsx` (reutilizado) | Sección de 4 pasos: Diagnóstico / Plan técnico / Implementación / Seguimiento. Copy: `Somos un equipo de ingenieros con trabajo de campo real — no consultores de escritorio.` |
| 5 | CTA band | `cta-band.tsx` | `¿Trabajamos juntos?` / CTA: `Conversemos tu proyecto →` |

---

### PÁGINA 8 — Contacto (`/contacto`)

**Contenido fuente:** `/contactus` del sitio antiguo + sección contact del diseño aprobado.

**Estructura de la página:**

| # | Sección | Componente | Contenido |
|---|---|---|---|
| 1 | PageHero (light) | `page-hero.tsx` | Eyebrow: `Contacto` / Headline: `¿Por dónde empezamos?` / Subhead: `Cuéntanos qué necesita tu empresa. Una conversación de 30 minutos basta para saber si podemos ayudarte y cómo.` |
| 2 | Contacto completo | `contact.tsx` (versión standalone) | Reutiliza el componente de contacto del diseño aprobado: formulario (Nombre, Empresa, Email, Área de interés, Mensaje) + datos de contacto (email, teléfono, dirección) + botón WhatsApp |
| 3 | Mapa | NUEVO — embed Google Maps | Dirección: Calle Limache 3421, Reitz II of. 724, Viña del Mar |

---

## 4. Sistema de diseño (mantener del diseño aprobado)

### Paleta de colores (CSS variables en `globals.css`)
- `--carbon` / `--carbon-2` — fondos oscuros (hero, secciones navy)
- `--navy` / `--navy-dark` — primario corporativo
- `--cyan` / `--cyan-deep` — acento técnico (CTAs, highlights)
- `--signal` — verde-cyan para badges de estado (Ready Partner)
- `--steel-100/200/300/400/500` — escala de grises acero
- `--background` / `--foreground` — blanco / casi negro con tinte azul

### Tipografía
- **Display:** Space Grotesk 700 (titulares) — variable `--font-display`
- **Cuerpo:** Inter 400/500 — variable `--font-sans`
- **Datos/badges:** JetBrains Mono — variable `--font-mono`

### Patrones visuales (mantener en todas las páginas)
- `blueprint-grid` / `blueprint-grid-dark` — grid sutil de fondo
- `aurora-dark` — blobs navy en hero
- `grain` — textura de film grain
- `mono-label` — labels técnicos en monoespaciado
- `CornerTicks` — marcas de esquina en paneles
- `Magnetic` — botones magnéticos en CTAs principales
- `SectionLabel` — etiqueta de sección con índice (01, 02, 03...)
- `scan` / `status` — animaciones sutiles de scan line y status dot

### Motion (motion/react)
- Blur-to-focus en titulares (< 0.7s)
- `whileInView` con `once: true` para reveals
- Easing: `[0.22, 1, 0.36, 1]` (out-expo suave)
- `MotionConfig reducedMotion="user"` en secciones con motion

### CTA único
- **Texto:** `Conversemos tu proyecto →`
- **Destino:** `/contacto` o `#contacto` en home
- **WhatsApp:** `https://wa.me/56994584617`

---

## 5. SEO — metadata por página

Cada `page.tsx` debe exportar `metadata` con:

```typescript
export const metadata: Metadata = {
  title: "... — Sinergia Industrias",
  description: "...",
  alternates: { canonical: "..." },
};
```

| Página | Title | Description |
|---|---|---|
| Home | `Sinergia Industrias — Ingeniería de procesos. Tecnología que funciona.` | `Consultora B2B chilena especializada en cumplimiento Ley REP 20.920, levantamiento de procesos, implementación ERP Odoo y análisis de datos. Ready Partner Oficial Odoo.` |
| Ley REP | `Ley REP 20.920 — Cumplimiento normativo · Sinergia Industrias` | `Levantamiento, cálculo de metas y reporte completo bajo la Ley 20.920. Cumplimiento REP sin multas ni sorpresas.` |
| Odoo | `Implementación ERP Odoo — Ready Partner Oficial · Sinergia Industrias` | `Somos Ready Partner Oficial Odoo en Chile. Implementamos Odoo para finanzas, inventario, RRHH, ventas y operaciones.` |
| Procesos | `Levantamiento de procesos — Diagnóstico operacional · Sinergia` | `Mapeamos tu operación, identificamos cuellos de botella y entregamos un plan técnico ejecutable.` |
| Datos | `Levantamiento de datos — Business Intelligence · Sinergia` | `Transformamos datos dispersos en insights accionables. Reportes en tiempo real y tableros personalizados.` |
| Casos | `Casos de éxito — Resultados comprobables · Sinergia Industrias` | `Proyectos de ingeniería de procesos, implementación Odoo y cumplimiento Ley REP para industrias en Chile.` |
| Nosotros | `Nosotros — Ingeniería de procesos · Sinergia Industrias` | `Equipo de ingenieros con trabajo de campo real. Ready Partner Oficial Odoo. Transformamos empresas con tecnología.` |
| Contacto | `Contacto — Sinergia Industrias` | `Cuéntanos qué necesita tu empresa. Una conversación de 30 minutos basta para saber si podemos ayudarte.` |

**Archivos técnicos SEO (NUEVOS):**
- `src/app/sitemap.ts` — genera sitemap.xml con las 8 páginas
- `src/app/robots.ts` — robots.txt permitiendo indexación
- Schema markup: `Organization` en layout, `Service` en páginas de servicios, `Article` en blog (futuro)

---

## 6. Navbar corporativo (adaptación)

El navbar pasa de anchor links a rutas reales:

```
Inicio              → /
Soluciones ▼        → dropdown
  Ley REP           → /ley-rep
  Implementación Odoo → /implementacion-odoo
  Levant. Procesos  → /levantamiento-de-procesos
  Levant. Datos     → /levantamiento-de-datos
Casos de éxito      → /casos-de-exito
Nosotros            → /nosotros
Contacto            → /contacto
[CTA: Conversemos]  → /contacto
```

**Comportamiento:**
- Sticky, transparente sobre hero dark, blanco al scroll
- Logo "SI" + "Sinergia Industrias" → link a `/`
- Dropdown "Soluciones" con hover/click en desktop
- Menú hamburguesa en mobile con panel deslizable

---

## 7. Orden de implementación sugerido

1. **Setup rutas:** crear las 8 carpetas bajo `src/app/` con `page.tsx` placeholder
2. **Adaptar Navbar + Footer:** rutas reales + dropdown Soluciones
3. **Crear componentes nuevos:** `page-hero.tsx`, `cta-band.tsx`, `clients-strip.tsx`, `case-study-card.tsx`, `process-steps.tsx`, `odoo-modules-grid.tsx`
4. **Página Home:** ajustar enlaces de las secciones existentes
5. **Página Ley REP:** construir con contenido del sitio antiguo
6. **Página Implementación Odoo:** construir grid de módulos
7. **Página Levantamiento de Procesos:** construir stepper
8. **Página Levantamiento de Datos:** construir stepper variante
9. **Página Casos de Éxito:** construir grid de 10+ tarjetas
10. **Página Nosotros:** construir con historia + método
11. **Página Contacto:** migrar sección contact a página standalone
12. **SEO:** sitemap.ts, robots.ts, metadata por página, schema markup
13. **QA:** responsive, Core Web Vitals, links, formularios

---

## 8. Notas técnicas (Next.js 16)

> ⚠️ **Next.js 16 tiene breaking changes.** Leer `node_modules/next/dist/docs/` antes de programar.

- App Router con SSG (Static Site Generation)
- `metadata` export en cada `page.tsx` (no `<Head>`)
- Componentes cliente: `"use client"` al inicio
- `next/link` para navegación interna
- `next/font/google` para Inter, Space Grotesk, JetBrains Mono
- Tailwind v4 (config en `globals.css`, no `tailwind.config.js`)
