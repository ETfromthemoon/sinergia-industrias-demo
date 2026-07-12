# Automatización de publicación del blog — Sinergia Industrias

Este documento explica **cómo se publica un post hoy** (manual) y deja la
**especificación lista** para automatizarlo con una tarea programada (cron) de
**Claude Cowork** en el entorno del cliente.

> Estado actual: **no existe ninguna automatización operativa**. El "cron
> `sinergia-content-research`" que se menciona en `content/blog/FORMATO.md` y en
> el historial de commits nunca se implementó (el archivo `.hermes/cron-jobs.md`
> no existe). Publicar hoy = crear un `.mdx` + commit + deploy.

---

## 1. Cómo funciona el blog (git-as-CMS)

- Los posts son archivos `.mdx` en `content/blog/`.
- `src/lib/posts.ts` los lee en tiempo de build con `gray-matter` y valida el
  frontmatter.
- `src/app/blog/[slug]/page.tsx` genera una ruta estática por cada `.mdx`
  (`generateStaticParams`), con metadata OpenGraph y JSON-LD `BlogPosting`.
- **No hay CMS, ni base de datos, ni backend.** La fuente de verdad es el repo.

Deploy: **Vercel**. Push a `main` en `github.com/ETfromthemoon/sinergia-industrias-demo`
= build + publicación automática.

---

## 2. Publicación manual (proceso confiable, hazlo así hoy)

1. Crear `content/blog/<slug>.mdx`. El `<slug>` es la URL: `/blog/<slug>`.
   Usar kebab-case con la keyword principal (ej. `ley-rep-multas-comunes-evitarlas`).
2. Escribir el frontmatter obligatorio (ver `content/blog/FORMATO.md`):
   ```yaml
   ---
   title: "Título con la keyword (60-70 caracteres)"
   date: "05 Jul 2026"          # DD MMM YYYY, mes abreviado en español
   tag: "Ley REP"               # solo: Ley REP | ERP Odoo | Procesos | Datos | Sostenibilidad
   readTime: "8 min"
   excerpt: "150-160 caracteres con la keyword."
   image: "https://images.unsplash.com/photo-XXXX?w=800&q=80"  # verificar que responda 200
   ---
   ```
3. Escribir el cuerpo en **Markdown puro** siguiendo `FORMATO.md` (solo H2/H3,
   sin emojis, sin HTML, CTA final con link a contacto y correo).
4. Verificar en local: `npm run dev` → abrir `/blog` y `/blog/<slug>`.
5. Commit + push a `main`. Vercel despliega en ~1-2 min.

Checklist de calidad: ver la sección final de `content/blog/FORMATO.md`.

---

## 3. Especificación para el cron de Claude Cowork

Objetivo: que Claude Cowork genere un **borrador** de post nuevo de forma
periódica y lo deje **listo para aprobar con 1 clic**, sin publicar nada
automáticamente sin revisión humana.

### 3.1 Disparador (schedule)

- Frecuencia sugerida: **semanal** (ej. domingos por la mañana).
- Se configura como tarea programada de Claude Cowork (routine/cron) en la
  cuenta del cliente.

### 3.2 Entradas que usa el agente

- `content/blog/FORMATO.md` — reglas de formato **vinculantes**.
- `.hermes/10-posts-seo-sinergia.md` — banco de 10 posts SEO ya redactados /
  temas priorizados. El agente toma el siguiente tema no publicado.
- `content/blog/*.mdx` — para no repetir temas ni slugs existentes.
- `VALID_TAGS` de `src/lib/posts.ts` — tags permitidos.

### 3.3 Pasos que ejecuta el agente en cada corrida

1. Elegir el siguiente tema pendiente (de `.hermes/10-posts-seo-sinergia.md` o
   por investigación web sobre Ley REP / Odoo / procesos / datos).
2. Redactar el post cumpliendo `FORMATO.md` (frontmatter completo, Markdown
   puro, solo H2/H3, CTA final).
3. Verificar que la imagen de Unsplash responda HTTP 200.
4. Crear el archivo `content/blog/<slug>.mdx`.
5. **No mergear a `main`.** En su lugar, dejarlo como **borrador para aprobación**
   (ver 3.4).
6. Notificar al responsable (correo o el canal que use Cowork) con el enlace
   para revisar y aprobar.

### 3.4 Cómo dejarlo "listo para 1 clic" (elegir una vía)

- **Opción recomendada — Pull Request:** el agente crea una rama
  `post/<slug>` y abre un PR contra `main`. Vercel genera un **Preview
  Deployment** automático del PR para revisar el artículo renderizado. Aprobar =
  merge del PR (1 clic) → publicación.
- **Opción alternativa — carpeta de borradores:** el agente escribe en
  `content/blog/_drafts/` (excluida del build) y el humano mueve el archivo a
  `content/blog/` para publicar. Requiere ignorar `_drafts/` en `getAllPosts()`.

### 3.5 Checklist de aprobación (antes del merge)

- [ ] Sin emojis ni HTML inline
- [ ] Solo H2/H3
- [ ] Frontmatter completo y `tag` válido
- [ ] Imagen Unsplash responde 200
- [ ] `date` en formato `DD MMM YYYY`
- [ ] CTA final con link a `/contacto` y a `info@sinergiaindustrias.cl`
- [ ] Slug único (no colisiona con posts existentes)

### 3.6 Barreras de seguridad

- El agente **nunca** publica directo a producción sin aprobación humana.
- El agente **no** toca código de la app, solo archivos dentro de `content/blog/`.
- Un post mal formado no rompe el build: `posts.ts` emite `console.warn` y usa
  valores por defecto, pero igual conviene rechazarlo en revisión.
