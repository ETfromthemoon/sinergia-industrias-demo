# Dirección Visual — Sinergia Industrias

> Fuente de verdad: [Manual de Marca Sinergia Consultores](docs/manual-de-marca-sinergia.pdf). Este documento explica cómo ese manual se interpreta en el sitio web — no lo reemplaza.

## Elección: Azul ingeniería + acero, sobre la paleta oficial del manual

### Por qué este camino

Sinergia no vende creatividad ni calidez — vende rigor técnico, cumplimiento normativo y exactitud en procesos industriales. La dirección visual tiene que comunicar eso antes de que el visitante lea la primera línea.

El Manual de Marca define exactamente dos colores oficiales: **celeste** y **azul oscuro**. El azul navy profundo es el color del tablero de control, de las normas ISO, de los dashboards industriales serios. El celeste es el acento técnico — claridad, innovación, apertura al cambio (así lo describe el manual). Juntos transmiten precisión y confianza sin necesidad de explicarlo.

### Paleta — anclas exactas del manual + escala derivada

El manual define solo 2 colores; el resto de la escala (steel, carbon, grid) se deriva manteniendo esos mismos hues, para que toda la interfaz se sienta una sola familia.

- **Azul oscuro (manual, exacto):** `#2E3352` → `oklch(0.332 0.055 276)` — primario corporativo
- **Celeste (manual, exacto):** `#3ABDE6` → `oklch(0.746 0.1235 224)` — acento técnico. Solo en elementos interactivos y destacados sobre fondo oscuro (falla contraste AA sobre blanco; usar `cyan-deep` ahí)
- **Fondo:** Blanco puro + gris acero muy claro (`oklch(0.972 0.004 276)`) — los grises comparten el hue 276 del azul oscuro, no un hue ajeno
- **Texto:** Casi negro con tinte azul (`oklch(0.14 0.010 276)`)

Valores completos y tabla de contraste en `src/app/globals.css` (comentario junto a `:root`).

### Tipografía

El manual fija **Nexa** como tipografía del nombre de marca. Nexa es de pago (Fontfabric) y el logo ya está resuelto como imagen (PNG), así que no bloquea nada — pero los títulos del sitio necesitan una fuente web real.

- **Titulares:** Archivo 700 — geométrica de alto contraste de peso, sustituto web de Nexa. Se documenta aquí como decisión formal, no como deuda pendiente (cargada vía `next/font` como `--font-display`)
- **Cuerpo:** Inter 400/500 — legible y neutro
- **Datos/badges:** JetBrains Mono — refuerza el registro técnico en métricas

### Elementos de diseño

- Grid sutil visible en fondo hero (dot pattern, opacidad 8%)
- Líneas finas de 1px en separadores y tarjetas (no sombras pesadas)
- Secciones alternadas blanco/acero para definir bloques sin ruido visual
- Una sección oscura (navy dark / carbon) para el CTA final — contraste y cierre
- `CornerTicks` (crosshairs de esquina) es parte vigente del lenguaje visual Swiss/técnico del sitio — no es chrome sobrante, refuerza el registro de plano de ingeniería y debe conservarse en futuras iteraciones

### Motion

- Muy sutil. Blur-to-focus en titulares (< 0.7s por elemento)
- Aurora navy→celeste en hero — blobs lentos, 22/28/34s, opacidad máx. 18%
- Hover states en tarjetas: border-color navy + sombra contenida
- Sin bouncing, sin spring exagerado, sin efectos "wow" decorativos

### No hacer

- No usamos gris medio de un hue ajeno como fondo principal — los grises siguen el hue del azul oscuro (276)
- No usamos verde (aunque hay servicios de sustentabilidad) — el nicho principal es precisión técnica, no ecología
- No mezclamos celeste sobre fondo blanco para texto — falla contraste AA; usar `cyan-deep`
- No hay tercer color decorativo (el ámbar `--signal` se retiró — no existe en el manual)
- No animaciones infinitas de texto o iconos flotantes

### Vocabulario de marca

El manual usa "transformación digital" e "innovación" como núcleo de la identidad (propósito, valores, categoría de negocio). Esto no contradice evitar el relleno de marketing vacío ("soluciones innovadoras de vanguardia") — ambas reglas conviven. Detalle en `brand-profile.json` → `tone`.
