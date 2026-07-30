# Dirección Visual — Sinergia Industrias

## Elección: Azul ingeniería + acero

### Por qué este camino

Sinergia no vende creatividad ni calidez — vende rigor técnico, cumplimiento normativo y exactitud en procesos industriales. La dirección visual tiene que comunicar eso antes de que el visitante lea la primera línea.

El azul navy profundo es el color del tablero de control, de las normas ISO, de los dashboards industriales serios. El gris acero es el metal de la planta, no la pantalla de un startup. Juntos transmiten precisión y confianza sin necesidad de explicarlo.

### Paleta
- **Fondo:** Blanco puro + gris acero muy claro (`oklch(0.97 0.005 240)`)
- **Primario:** Navy corporativo profundo (`oklch(0.28 0.12 255)`)
- **Acento técnico:** Cyan contenido (`oklch(0.68 0.14 205)`) — solo en elementos interactivos y destacados, nunca como color de fondo
- **Texto:** Casi negro con tinte azul (`oklch(0.14 0.010 250)`)

### Tipografía
- **Titulares:** Space Grotesk 700 — condensado, fuerte, de ingeniería (fuente realmente cargada vía next/font como `--font-display`)
- **Cuerpo:** Inter 400/500 — legible y neutro
- **Datos/badges:** JetBrains Mono — refuerza el registro técnico en métricas

### Elementos de diseño
- Grid sutil visible en fondo hero (dot pattern, opacidad 8%)
- Líneas finas de 1px en separadores y tarjetas (no sombras pesadas)
- Secciones alternadas blanco/acero para definir bloques sin ruido visual
- Una sección oscura (navy dark) para el CTA final — contraste y cierre
- `CornerTicks` (crosshairs de esquina) es parte vigente del lenguaje visual Swiss/técnico del sitio — no es chrome sobrante, refuerza el registro de plano de ingeniería y debe conservarse en futuras iteraciones

### Motion
- Muy sutil. Blur-to-focus en titulares (< 0.7s por elemento)
- Aurora navy en hero — blobs lentos, 22/28/34s, opacidad máx. 18%
- Hover states en tarjetas: border-color navy + sombra contenida
- Sin bouncing, sin spring exagerado, sin efectos "wow" decorativos

### No hacer
- No usamos gris medio como color de fondo principal — parecería una plantilla genérica
- No usamos verde (aunque hay servicios de sustentabilidad) — el nicho principal es precisión técnica, no ecología
- No mezclamos el cyan con el navy en el mismo componente — uno o el otro
- No animaciones infinitas de texto o iconos flotantes
