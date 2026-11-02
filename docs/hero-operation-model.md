# Hero: la operación toma forma

El hero de Inicio conserva el mensaje, las acciones, el sello Odoo y los cuatro servicios. La maqueta abstracta representa capacidades conectadas; no es una fotografía de un proyecto, un dashboard ni una fuente de métricas comerciales.

## Composición

- `src/components/sections/hero.tsx`: contenido y enlaces, renderizados desde el servidor.
- `src/components/sections/hero.css`: composición editorial, franja de credenciales y servicios, foco y adaptación responsive.
- `src/components/ui/operation-model.tsx`: geometría isométrica SVG original; no requiere imágenes externas ni librerías 3D.
- `src/components/ui/operation-model.css`: ensamblaje finito y un único recorrido de señal. La versión móvil simplifica detalles y cambia el encuadre.

Los colores y las fuentes reutilizan la identidad del sitio. El SVG es decorativo y está oculto para lectores de pantalla; los servicios cuentan con enlaces HTML independientes. La presentación móvil conserva el orden del documento para la navegación por teclado.

## Movimiento y rendimiento

La secuencia completa termina a los 2,35 segundos en escritorio y 1,4 segundos en móvil. No hay un bucle activo después de la entrada. `prefers-reduced-motion: reduce` muestra la composición final estática. El contenido y los enlaces funcionan sin JavaScript.

El hero y su maqueta son Server Components, sin listeners, estado React, video ni dependencias adicionales. Las propiedades de ensamblaje animadas son transform y opacity; el recorrido de señal utiliza un trazo SVG pequeño y finito.

## Verificación

Se revisaron 320, 390, 768, 1024 y 1440 px, los destinos de los siete enlaces, el foco de teclado, el contenido conservado, movimiento reducido y la versión sin JavaScript. A 1024 px el borde del plano decorativo se recorta dentro del hero; textos y enlaces permanecen dentro del área visible. La evaluación responsive es de laboratorio, no una medición de fluidez en dispositivos físicos.

Checks del proyecto: `npm run lint` y `npx next build --webpack`.
