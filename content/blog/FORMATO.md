# Formato de artículos — Sinergia Industrias Blog

Todo artículo publicado en este blog DEBE cumplir estas reglas. El renderizado en
`src/app/blog/[slug]/page.tsx` asume este formato. Cualquier desviación degrada
la calidad visual del sitio.

---

## Reglas obligatorias

### 1. Markdown puro — sin HTML, sin emojis, sin íconos

```
CORRECTO:
## Calendario de obligaciones 2026-2027

INCORRECTO:
## 📅 Calendario de obligaciones 2026-2027
## <span class="icon">Calendario</span> de obligaciones
```

**Prohibido:**
- Emojis de cualquier tipo (✅ ❌ 🚩 ⚠️ 🔥 🎯 📋 📱 🖥️ ⚙️ 🏭 📊 🏅 🌱)
- HTML inline (`<span>`, `<div>`, `<i>`, `<img>` con clases)
- Entidades HTML decorativas
- Referencias a librerías de íconos (lucide, fontawesome, etc.)

**Permitido:**
- Markdown estándar: `##`, `###`, `**negrita**`, `*itálica*`, listas, tablas, links
- Imágenes con `![alt](url)` — solo cuando sea estrictamente necesario
- Enlaces con `[texto](url)`

### 2. Encabezados: solo H2 y H3

```
CORRECTO:
## Sección principal
### Subsección

INCORRECTO:
# Título H1 (el título ya lo pone el frontmatter)
#### H4 (no hay estilo definido, se verá genérico)
```

### 3. Separadores visuales: solo `---`

```
CORRECTO:
---

INCORRECTO:
***
___
<hr class="fancy">
```

### 4. Negritas para énfasis, no para decoración

```
CORRECTO:
**El ERP no arregla procesos mal diseñados: los automatiza y los empeora.**

INCORRECTO:
**🌟 ¡DESCUBRE EL SECRETO! 🌟**
```

### 5. Sin callouts, sin "cards", sin badges

No uses sintaxis inventada para crear cajas de color, badges o callouts. Si el
contenido necesita énfasis visual, usá blockquote:

```
CORRECTO:
> Esto es una cita o llamado de atención. El CSS lo renderiza con
> borde izquierdo cyan y fondo gris.

INCORRECTO:
:::warning
Esto no es markdown estándar
:::

<div class="card">Contenido especial</div>
```

### 6. Links: texto descriptivo, no URLs crudas

```
CORRECTO:
[info@sinergiaindustrias.cl](mailto:info@sinergiaindustrias.cl)

INCORRECTO:
info@sinergiaindustrias.cl (sin link)
```

### 7. Listas: sin checkboxes falsos

```
CORRECTO:
- Item uno
- Item dos

INCORRECTO:
- [x] Item completado
- [ ] Item pendiente
```

---

## Frontmatter obligatorio

```yaml
---
title: "Título del artículo (60-70 caracteres, incluir keyword principal)"
date: "DD MMM YYYY"  # Ej: 05 Jul 2026
tag: "Ley REP" | "ERP Odoo" | "Procesos" | "Datos" | "Sostenibilidad"
readTime: "X min"  # 5-9 minutos
excerpt: "150-160 caracteres con keyword. Sin revelar todo."
image: "https://images.unsplash.com/photo-XXXXX?w=800&q=80"
---
```

**Reglas del frontmatter:**
- `image`: Solo URLs de Unsplash con parámetros `?w=800&q=80`. Verificar que
  responda HTTP 200 antes de usar. Sin imágenes rotas.
- `tag`: Solo uno de los 5 valores permitidos. No inventar tags nuevos sin
  consenso.
- `date`: Formato fijo `DD MMM YYYY` en español (mes abreviado: Ene, Feb, Mar...).
- `readTime`: Número entero + " min". Basado en ~200 palabras/min.

---

## Estructura del contenido

```
[Intro: 2-3 párrafos con dato/problema concreto]
[Secciones H2: 3-5, cada una con 2-5 párrafos]
[Tablas markdown donde aporten claridad — no decorativas]
[CTA final: siempre con link a contacto y email]
```

---

## Ejemplo completo correcto

```markdown
---
title: "Ley REP 2026-2027: calendario completo de obligaciones para empresas en Chile"
date: "05 Jul 2026"
tag: "Ley REP"
readTime: "8 min"
excerpt: "Fechas clave, metas progresivas y productos prioritarios. Guía actualizada para que tu empresa cumpla sin contratiempos."
image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80"
---

La Ley 20.920 de Responsabilidad Extendida del Productor no se detiene. Cada año
suma nuevas metas, nuevos productos y nuevas empresas que entran al régimen.

## Productos prioritarios regulados

| Producto | Estado | Próximo hito |
|---|---|---|
| Envases y Embalajes | Activo | Meta 2027: 50% |

## Cómo preparar a tu empresa

### Identifica tus productos

No todos los productos están regulados. Haz un inventario completo.

### Calcula tu obligación real

Muchas empresas sobrestiman o subestiman su obligación.

---

En Sinergia hacemos el levantamiento completo. Escríbenos a
[info@sinergiaindustrias.cl](mailto:info@sinergiaindustrias.cl).
```

---

## Validación automática (cron job)

El cron job `sinergia-content-research` genera posts nuevos cada domingo. Sigue
este mismo formato. Ver `.hermes/cron-jobs.md` para referencia.

Antes de mergear cualquier PR del cron, verificar:
- [ ] Sin emojis
- [ ] Sin HTML
- [ ] Imagen Unsplash responde 200
- [ ] Frontmatter completo y correcto
- [ ] Solo H2/H3
- [ ] CTA con link a contacto y email
