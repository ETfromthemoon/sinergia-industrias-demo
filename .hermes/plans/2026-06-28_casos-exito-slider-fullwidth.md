# Casos de Éxito — Rediseño Slider Full-Width · Plan de Implementación

> **Para Hermes:** Implementar con dev-team skill, task por task.

**Goal:** Transformar `/casos-de-exito` de un grid 2-columnas de texto a un slider full-width con imágenes grandes y cards visuales por cliente.

**Architecture:** Nuevo componente `CaseSlider` reemplaza a `CasosGrid`. Cada slide es full-width con imagen de fondo del sector industrial, datos del caso, y navegación por dots/flechas. Se elimina el CtaBand inferior (CTA solo en hero).

**Tech Stack:** Next.js 16, Tailwind v4, motion/react, TypeScript, Unsplash images

---

### Task 1: Agregar imágenes a los datos de casos

**Objective:** Cada caso necesita una imagen representativa de su industria.

**Files:**
- Modify: `src/app/casos-de-exito/casos-grid.tsx` → agregar campo `image` al array CASES

**Action:**
Agregar campo `image` con URLs de Unsplash por industria a cada uno de los 12 casos:

```typescript
const CASES = [
  { 
    client: "Moriah", code: "C01", industry: "Leasing Operativo",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    // ... resto de campos
  },
  { client: "Tottus", code: "C02", industry: "Supermercados",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80" },
  { client: "Iansa", code: "C03", industry: "Alimentos",
    image: "https://images.unsplash.com/photo-1586444248902-2b1d5f8c8b9e?w=1200&q=80" },
  { client: "Tresmontes Lucchetti", code: "C04", industry: "Alimentos",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80" },
  { client: "Aramark", code: "C05", industry: "Alimentación",
    image: "https://images.unsplash.com/photo-1556910103-1e75e3da0d2f?w=1200&q=80" },
  { client: "Dimerc", code: "C06", industry: "Distribución",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80" },
  { client: "Asalvo", code: "C07", industry: "Asesoría Ambiental",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80" },
  { client: "Ecostandard", code: "C08", industry: "Residuos",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&q=80" },
  { client: "MB Chemicals", code: "C09", industry: "Sanitización",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1200&q=80" },
  { client: "Red Circular", code: "C10", industry: "Economía Circular",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f2a37?w=1200&q=80" },
  { client: "CIAL", code: "C11", industry: "Trabajo en Altura",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80" },
  { client: "Podas Chile", code: "C12", industry: "Servicios Forestales",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80" },
];
```

---

### Task 2: Crear componente CaseSlide (card visual full-width)

**Objective:** Nueva card visual con imagen de fondo, overlay gradient, y datos del caso.

**Files:**
- Create: `src/app/casos-de-exito/case-slide.tsx`

**Complete code:**

```tsx
"use client";
import { motion } from "motion/react";
import { CornerTicks } from "@/components/ui/blueprint-frame";
import { Building2, Wrench, TrendingUp } from "lucide-react";

type CaseStudy = {
  client: string;
  code: string;
  industry: string;
  context: string;
  service: string;
  result: string;
  image: string;
};

export function CaseSlide({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      className="relative w-full min-h-[520px] sm:min-h-[560px] overflow-hidden border border-steel-200 bg-carbon"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${study.image})` }}
      />
      
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-carbon/95 via-carbon/80 to-carbon/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />
      
      {/* Tech crosshairs */}
      <CornerTicks className="text-cyan/50 z-10" size={16} />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8 sm:p-12 lg:p-16">
        {/* Code + Industry row */}
        <div className="flex items-center gap-4 mb-4">
          <span className="mono-label text-cyan">{study.code}</span>
          <span className="inline-flex items-center gap-1.5 border border-cyan/30 bg-cyan/10 px-3 py-1 mono-label text-cyan">
            <Building2 className="size-3" />
            {study.industry}
          </span>
        </div>
        
        {/* Client name */}
        <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          {study.client}
        </h3>
        
        {/* Context */}
        <p className="max-w-2xl text-base leading-relaxed text-steel-300 mb-8">
          {study.context}
        </p>
        
        {/* Three-column data */}
        <div className="grid gap-6 sm:grid-cols-3 max-w-3xl">
          <div className="border-l-2 border-cyan/60 pl-4">
            <span className="mono-label mb-2 block text-cyan text-xs">CONTEXTO</span>
            <p className="text-sm leading-relaxed text-steel-400">{study.context.slice(0, 120)}...</p>
          </div>
          <div className="border-l-2 border-navy/60 pl-4">
            <span className="mono-label mb-2 block text-white/70 text-xs">
              <Wrench className="inline size-3 mr-1" />
              SERVICIO
            </span>
            <p className="text-sm leading-relaxed text-steel-400">{study.service}</p>
          </div>
          <div className="border-l-2 border-signal/60 pl-4">
            <span className="mono-label mb-2 block text-signal text-xs">
              <TrendingUp className="inline size-3 mr-1" />
              RESULTADOS
            </span>
            <p className="text-sm leading-relaxed text-steel-400">{study.result}</p>
          </div>
        </div>
      </div>
      
      {/* Slide counter (e.g. "01 / 12") */}
      <div className="absolute top-6 right-8 z-10 mono-label text-white/40">
        {study.code.replace("C", "")} / 12
      </div>
    </motion.div>
  );
}
```

---

### Task 3: Construir el slider con navegación

**Objective:** Slider con dots + flechas + swipe, animado con motion/react.

**Files:**
- Modify: `src/app/casos-de-exito/casos-grid.tsx` → reemplazar contenido con el slider

**Action:** Reescribir CasosGrid para que sea un slider con AnimatePresence:

```tsx
"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CaseSlide } from "./case-slide";
import { SectionLabel } from "@/components/ui/section-label";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ... (CASES array with images stays here)

export function CasosGrid() {
  const [current, setCurrent] = useState(0);
  const total = CASES.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  return (
    <section className="bg-background py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="01" className="mb-6">
          Evidencia
        </SectionLabel>

        <motion.h2
          className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Casos de éxito
        </motion.h2>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Cada proyecto es una historia de transformación. Desde el diagnóstico hasta los resultados, aquí están los hechos.
        </motion.p>

        {/* Slider container — full width */}
        <div className="mt-14 relative">
          <AnimatePresence mode="wait">
            <CaseSlide key={CASES[current].code} study={CASES[current]} />
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-white/20 bg-carbon/60 backdrop-blur-sm text-white hover:bg-cyan hover:border-cyan transition-all duration-200"
            aria-label="Caso anterior"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-white/20 bg-carbon/60 backdrop-blur-sm text-white hover:bg-cyan hover:border-cyan transition-all duration-200"
            aria-label="Caso siguiente"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="mt-8 flex justify-center gap-2">
          {CASES.map((c, i) => (
            <button
              key={c.code}
              onClick={() => setCurrent(i)}
              className={`h-2 transition-all duration-300 ${
                i === current
                  ? "w-8 bg-cyan"
                  : "w-2 bg-steel-300 hover:bg-steel-400"
              }`}
              aria-label={`Ver caso ${c.client}`}
            />
          ))}
        </div>

        {/* Client name strip below dots */}
        <div className="mt-4 text-center">
          <span className="mono-label text-steel-400">
            {CASES[current].code} — {CASES[current].client} · {CASES[current].industry}
          </span>
        </div>
      </div>
    </section>
  );
}
```

---

### Task 4: Remover CtaBand del page.tsx

**Objective:** CTA solo en el hero (arriba), eliminar el CtaBand repetido abajo.

**Files:**
- Modify: `src/app/casos-de-exito/page.tsx`

**Action:** Quitar la importación de CtaBand y su uso en el JSX:

Antes:
```tsx
import { CtaBand } from "@/components/sections/cta-band";
// ...
<CasosGrid />
<CtaBand
  title="¿Tu empresa podría ser el próximo caso?"
  subhead="Conversemos sobre tu proyecto..."
/>
```

Después:
```tsx
// Eliminar import de CtaBand
// ...
<CasosGrid />
{/* CtaBand removido — CTA está en el hero */}
```

---

### Task 5: Verificar build y visual

**Objective:** Build sin errores, slider funcional en dev.

**Commands:**
```bash
cd C:\Users\sergio\SERGIOIA\WEB\CLIENTES\Sinergiaconsultores\sinergia-industrias-demo
npm run build
```

Verificar en `http://localhost:3000/casos-de-exito`:
- [ ] Slider muestra primera slide con imagen
- [ ] Flechas izquierda/derecha navegan correctamente
- [ ] Dots navegan al caso correcto
- [ ] AnimatePresence hace fade entre slides
- [ ] CtaBand no aparece al final
- [ ] Mobile responsive (imagen no se corta, texto legible)
- [ ] Los 12 casos son navegables

---

### Task 6: Commit y push

```bash
git add src/app/casos-de-exito/
git commit -m "feat: rediseño casos de éxito — slider full-width con imágenes, CTA solo en hero"
git push origin master
```

---

## Riesgos y notas

- **Imágenes:** Se usan URLs de Unsplash como placeholders. Si el cliente quiere imágenes reales de cada proyecto, se reemplazan luego.
- **Performance:** 12 slides con imágenes full-width → usar `loading="lazy"` en imágenes de fondo o Next.js Image. Considerar precargar solo la primera slide.
- **SEO:** Las slides ocultas no son indexables. Si es crítico, renderizar todas en SSR con display none en vez de AnimatePresence.
- **Accesibilidad:** Flechas tienen aria-label, dots tienen aria-label. Considerar añadir soporte de teclado (ArrowLeft/ArrowRight).

---

## Tiempo estimado

| Task | Minutos |
|---|---|
| 1. Agregar imágenes a CASES | 5 |
| 2. Crear CaseSlide | 10 |
| 3. Slider + navegación | 15 |
| 4. Remover CtaBand | 2 |
| 5. Build + verificar | 5 |
| 6. Commit + push | 2 |
| **Total** | **~40 min** |
