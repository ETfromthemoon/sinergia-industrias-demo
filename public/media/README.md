# Manifiesto de Media — Rediseño Premium

Este directorio contiene los assets de media (imágenes, video, ilustraciones) usados en el rediseño premium del sitio.

## Fase 2 — Curación completada

| Archivo | Uso | Fuente | Autor | Licencia | Peso |
|---------|-----|--------|-------|----------|------|
| `hero-loop.mp4` | Video de fondo del hero | [Pexels — Wide View of Modern Factory Production Line](https://www.pexels.com/video/wide-view-of-modern-factory-production-line-30715848/) | Motion clips / Pexels | Pexels License (uso comercial, sin atribución) | 3.05 MB |
| `hero-poster.jpg` | Poster/LCP del video del hero | Primer frame extraído de `hero-loop.mp4` (mismo origen: Pexels 30715848) | Motion clips / Pexels | Pexels License | 142 KB |
| `rep-containers.jpg` | Set-piece Ley REP | [Pexels — Garbage Lot (bales de cartón reciclado)](https://www.pexels.com/photo/garbage-lot-2967770/) | Alex Fu (alexfu) / Pexels | Pexels License (uso comercial, sin atribución) | 246 KB |
| `plant-floor.jpg` | Panel Odoo / planta | [Pexels — Expansive Warehouse Aisle Filled with Products](https://www.pexels.com/photo/expansive-warehouse-aisle-filled-with-products-29454379/) | William Buzeichuk / Pexels | Pexels License (uso comercial, sin atribución) | 294 KB |

### Notas de curación

- **`hero-loop.mp4`**: original 2560×1440 @24fps, 10.09s, descargado de `videos.pexels.com`. Reprocesado con ffmpeg: sin audio, recortado a 9s, escalado a 1600px de ancho, H.264 CRF 28 preset slow, `+faststart`. Toma de dron/cámara fija con paneo lento sobre línea de producción moderna; tonos neutros/fríos, sin rostros en primer plano, sin logos de marca visibles. Verificado visualmente extrayendo frames inicial, medio y final — panorámica continua sin corte brusco, adecuada para loop de fondo con overlay navy oscuro.
- **`hero-poster.jpg`**: extraído como primer frame de `hero-loop.mp4` ya procesado (ffmpeg `-vframes 1 -q:v 6`).
- **`rep-containers.jpg`**: fardos de cartón reciclado apilados al aire libre en planta de reciclaje. Verificado visualmente — contenido real de reciclaje industrial, coincide con el uso (Ley REP). Reescalado a 1600px de ancho y recomprimido con ffmpeg (`-q:v 8`) para bajar de 613 KB a 246 KB.
- **`plant-floor.jpg`**: pasillo de racks industriales en almacén, alta reflectividad de piso pulido, buena profundidad para el panel de Odoo/ERP. Verificado visualmente. Reescalado (lado mayor ≤1600px) y recomprimido con ffmpeg (`-q:v 8`) de 760 KB a 294 KB.
- **`engineers.jpg` (opcional) — DESCARTADO**: se probaron 3 candidatos (`Engineer in Industrial Factory Using Tablet` 32845694, `Industrial Worker Using Tablet in Factory` 32845692, y `Industrial Robot Arm in a Manufacturing Facility` 34207359 de Pexels). Los dos primeros son la misma sesión fotográfica con el rostro del modelo como foco central y protagonista — no cumplen el requisito "sin rostros protagonistas". El tercero (brazo robótico) no tenía rostros, pero mostraba el logo de marca "FANUC" visible en el equipo y personas de fondo, lo cual tampoco calzaba con los criterios de curación. No se encontró un reemplazo limpio dentro del tiempo asignado a esta fase; se omite el asset y el layout de la sección "Method" debe funcionar sin él (o el equipo de diseño puede solicitar una ronda adicional de búsqueda dirigida).
