# Identidad digital de Sinergia Consultores

Esta guía traduce el `Manual de marca - Sinergia Consultores` a decisiones
concretas para el sitio. No reemplaza el manual; define cómo aplicarlo en
interfaces, contenido y nuevas páginas.

## Fundamentos

- Propósito: resolver problemáticas empresariales y sociales mediante
  tecnología, procesos y conocimiento.
- Posicionamiento: partner estratégico en transformación digital, no solo
  proveedor tecnológico.
- Claim: `Construimos modelos para el mundo real.`
- Slogan: `Procesos inteligentes. Impacto real.`
- Personalidad: estratégica, técnica, confiable, innovadora y visionaria.
- Tono: profesional, claro, directo, basado en conocimiento y orientado a
  soluciones.

## Sistema visual

- Azul oscuro principal: `#2E3352`.
- Celeste de innovación y movimiento: `#3ABDE6`.
- Fondos claros: blanco y grises con matiz azul, evitando tonos cálidos que
  compitan con la identidad.
- Imagotipo: usar exclusivamente `/public/sinergia-logo.png`, sin reconstruir
  sus formas o reemplazarlo por iniciales.
- Tipografía: el imagotipo conserva Nexa. En interfaz se usa Manrope como
  alternativa digital geométrica y legible; Newsreader queda reservada para
  titulares editoriales y lectura larga.

## Movimiento

- El movimiento representa conexión entre estrategia, procesos y tecnología.
- Las órbitas y nodos usan tiempos largos y desplazamientos sutiles.
- Las secciones aparecen mediante opacidad y traslación breve, sin rebotes.
- El video corporativo se monta de forma diferida y solo cuando el dispositivo,
  las preferencias de movimiento y el ahorro de datos lo permiten.
- Toda animación debe tener una alternativa estática bajo
  `prefers-reduced-motion`.

## Odoo

- En piezas visuales usar solo el wordmark oficial acompañado por
  `Ready Partner Oficial`.
- No repetir simultáneamente `Odoo`, `Odoo Partner` y `Ready Partner Oficial`
  dentro de una misma tarjeta o sección.
- Las menciones descriptivas y SEO pueden conservar el nombre completo cuando
  entreguen contexto real al lector.

## Artículos MDX

- El primer párrafo funciona como introducción editorial.
- Cada `##` crea una sección principal numerada y una entrada en el índice.
- Cada `###` crea una subsección navegable.
- Las tablas deben permanecer dentro del contenedor responsivo generado por el
  motor editorial.
- Usar listas para decisiones, requisitos o secuencias; evitar bloques extensos
  sin subtítulos.
- Los nuevos posts heredan automáticamente progreso de lectura, índice,
  jerarquía, tablas, destacados y lecturas relacionadas.

## Criterio de calidad

Antes de publicar una nueva página:

1. Verificar escritorio y un viewport móvil de 390 px.
2. Confirmar que no exista desplazamiento horizontal.
3. Revisar contraste, foco de teclado y reducción de movimiento.
4. Ejecutar `npm run lint` y `npm run build`.
5. Evitar métricas sin fuente o porcentajes presentados como hechos.
