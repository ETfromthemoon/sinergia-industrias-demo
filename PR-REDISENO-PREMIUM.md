# PR: Rediseño premium de Sinergia Industrias

## Resumen

Esta propuesta redefine la experiencia completa de Sinergia Industrias para convertir la landing actual en un sitio corporativo premium, creíble y orientado a conversión B2B.

El rediseño debe conservar la autoridad técnica de la empresa, pero reemplazar la estética de “dashboard/blueprint” por una dirección editorial más sobria: evidencia real, jerarquía tipográfica, fotografía de contexto industrial, espacio en blanco y una interfaz que se sienta diseñada por una marca especializada, no ensamblada a partir de componentes genéricos.

Esta PR es estratégica y de arquitectura de interfaz. No modifica todavía las páginas productivas; deja definido qué se debe implementar, qué contenido necesita validación y cómo se comprobará el resultado.

## Estado actual auditado

### Rutas públicas

| Ruta | Rol actual | Propuesta de rol |
| --- | --- | --- |
| `/` | Landing general | Entrada editorial: problema, prueba, servicios y contacto |
| `/ley-rep` | Servicio normativo | Página de autoridad: obligaciones, alcance, entregables y CTA |
| `/implementacion-odoo` | Servicio ERP | Página de solución: cuándo aplicar Odoo, módulos, implementación y soporte |
| `/levantamiento-de-procesos` | Servicio operacional | Página de diagnóstico: síntomas, método, entregables y resultados |
| `/levantamiento-de-datos` | Servicio de datos | Página de inteligencia operativa: calidad, tableros, decisiones y gobierno |
| `/casos-de-exito` | Grid de casos | Biblioteca de evidencia con filtros por industria/servicio |
| `/nosotros` | Historia y credenciales | Equipo, método, principios, partner Odoo y territorio |
| `/contacto` | Formulario + ubicación | Conversión de alta intención, canales y expectativas de respuesta |

### Sistema visual actual

- Paleta navy/cyan/amber sobre blanco y fondos oscuros.
- Inter, Space Grotesk y JetBrains Mono.
- Grid blueprint, grano, auroras, líneas, coordenadas y códigos técnicos.
- Tarjetas con bordes, esquinas marcadas, labels monoespaciados y entradas animadas.
- Navegación sticky con dropdown de soluciones y menú móvil.
- Motion en casi todas las secciones, contadores animados y esquemas SVG.

### Lectura crítica

La dirección actual tiene una idea reconocible, pero la aplica en demasiados lugares y con demasiados signos. La repetición de `MÓD.`, `[01]`, `SYS.*`, `REF.*`, coordenadas, estados y rejillas termina desplazando el mensaje comercial. El visitante ve la interfaz antes que la empresa.

La sensación de “hecho con inteligencia artificial” no proviene de usar motion o una estética técnica en sí misma. Aparece por la combinación de:

- Un mismo patrón de tarjeta repetido en servicios, procesos, casos y contacto.
- Textos con tono uniforme y fórmulas previsibles: “sin multas, sin sorpresas”, “una sola plataforma”, “proceso claro”.
- Datos abstractos o decorativos que parecen inventados para llenar la composición.
- Mucha señalización visual de sistema y poca evidencia humana, fotográfica o documental.
- Animaciones que revelan casi todo con la misma curva y el mismo desplazamiento.

## Hallazgos prioritarios

### P0: Entidades numéricas inconsistentes

En el hero se declaran `40+ empresas`, `8+ años` y `20+ Odoo impl.` en [hero.tsx](C:\Users\sergio\SERGIOIA\WEB\Landings\Sinergiaconsultores\src\components\sections\hero.tsx). En la barra de credibilidad se declaran `40+ empresas`, `8+ años`, `20+ implementaciones Odoo`, `30+ proyectos Ley REP` y `12 industrias` en [credibility-bar.tsx](C:\Users\sergio\SERGIOIA\WEB\Landings\Sinergiaconsultores\src\components\sections\credibility-bar.tsx).

El componente [number-ticker.tsx](C:\Users\sergio\SERGIOIA\WEB\Landings\Sinergiaconsultores\src\components\ui\number-ticker.tsx) inicializa el valor en `0` y lo actualiza después de detectar viewport. En la lectura inicial del DOM y en ciertos estados de carga se ve `0+`, aunque el hero ya comunica otra cifra. Esto es un problema de confianza, SEO semántico y accesibilidad.

Acción requerida:

- Crear una única fuente de datos para todas las métricas.
- Renderizar siempre el valor final en SSR; la animación debe ser una mejora visual, no la fuente del contenido.
- Validar cada cifra con el cliente y añadir fecha de corte: por ejemplo, “40+ empresas asesoradas, actualizado en 2026”.
- Decidir si `20+ Odoo` es implementaciones, proyectos o clientes; no mezclar unidades.
- Decidir si `30+ REP` sigue vigente y cómo se calcula “industria atendida”.
- No mostrar una cifra si no existe respaldo auditable.

### P0: Formulario sin flujo de envío confiable

El formulario usa `action="mailto:info@sinergiaindustrias.cl"` en [contact.tsx](C:\Users\sergio\SERGIOIA\WEB\Landings\Sinergiaconsultores\src\components\sections\contact.tsx) y también en la página de contacto. `mailto` depende del cliente de correo del visitante, no entrega estados de éxito confiables, puede exponer datos en la URL y no permite una trazabilidad profesional.

Acción requerida:

- Implementar un endpoint de servidor o un proveedor de formularios autorizado.
- Validar campos, mostrar estados de envío, error y éxito.
- Añadir consentimiento de contacto y política de privacidad.
- Mantener WhatsApp como canal rápido, pero no como sustituto del formulario.

### P1: Jerarquía de marca insuficientemente humana

La página dice qué hace Sinergia, pero demuestra poco quién lo hace. Los casos tienen contexto y resultado, aunque no tienen imagen, cita, rol del cliente, entregable verificable ni indicador medible. Para una consultora premium, la evidencia debe sentirse concreta y situada.

Acción requerida:

- Incorporar fotografías propias o aprobadas de terreno, operación, equipo y sesiones de trabajo.
- Convertir casos en piezas editoriales con problema, intervención, entregables y resultado validado.
- Usar logos solo con autorización y con tratamiento consistente.
- Reservar los datos anónimos para casos donde exista confidencialidad explícita.

### P1: Arquitectura editorial demasiado técnica

La navegación y los hero secundarios usan índices como `03`, referencias de sistema, coordenadas y nomenclaturas de blueprint. Como detalle de marca puede funcionar; como sistema dominante genera ruido y reduce comprensión.

Acción requerida:

- Mantener la precisión técnica en diagramas, microcopy de apoyo y páginas de servicio.
- Eliminar códigos decorativos del primer plano comercial.
- Reducir la cantidad de etiquetas monoespaciadas al 20–30% de la presencia actual.
- Reemplazar “módulos” por categorías de decisión del cliente: Cumplimiento, Operación, Tecnología y Datos.

### P1: SEO técnico incompleto

Hay metadata por página y sitemap, pero falta una estrategia completa de entidades corporativas y de servicio.

Acción requerida:

- Corregir el texto mal codificado en metadata y contenido (`â€”`, `Ã³`, `Â¿`, etc.).
- Añadir `metadataBase`, Open Graph, Twitter/X cards e imagen social.
- Incorporar JSON-LD para `Organization`, `ProfessionalService`, `LocalBusiness` cuando corresponda, `Service`, `BreadcrumbList` y `Article` en casos.
- Crear títulos y descripciones con intención de búsqueda local: Chile, Región de Valparaíso y cobertura nacional si es real.
- Añadir breadcrumbs visibles o semánticos en páginas interiores.
- Revisar canónicas, `lastModified` y frecuencia del sitemap para que reflejen cambios reales.
- Usar un solo H1 por página y una estructura H2/H3 basada en preguntas del cliente.

### P1: Rendimiento y accesibilidad

El hero depende de SVG decorativo, grano, gradientes y varias animaciones. La información crítica debe seguir siendo legible sin motion, con conexión lenta o con lector de pantalla.

Acción requerida:

- Respetar `prefers-reduced-motion` también en componentes Motion, no solo en CSS.
- Añadir `loading`, `decoding`, dimensiones y estrategia responsive a imágenes reales.
- Evitar que el contenido relevante dependa de un SVG decorativo.
- Revisar contraste de cyan/amber sobre fondos claros y oscuros.
- Confirmar foco visible, navegación por teclado, labels persistentes y errores asociados a campos.
- Reservar espacio para evitar CLS en hero, fuentes, mapas e imágenes.

## Nueva dirección de interfaz

### Concepto

“Ingeniería con criterio”. Una marca B2B premium que combina claridad ejecutiva con profundidad técnica.

La interfaz debe sentirse como una consultora que conoce la operación desde dentro: sobria, precisa, editorial y cálida. La tecnología aparece como prueba de capacidad, no como decoración.

### Lenguaje visual

- Base marfil mineral, tinta carbón y azul petróleo.
- Un solo color de señal para CTA y estados positivos; eliminar el cyan y amber simultáneos como acentos protagonistas.
- Tipografía display con carácter editorial para titulares y sans neutral para lectura.
- Mono solo para datos, metadatos y leyendas de diagramas.
- Bordes suaves y paneles con profundidad ligera; mantener la geometría solo donde aporta orden.
- Fotografía documental con luz natural y textura industrial, no renders abstractos.
- Diagramas simples, explicativos y etiquetados con lenguaje humano.
- Animación de entrada corta, progresiva y contextual; no animar cada tarjeta.

### Principios de experiencia

1. Entender en cinco segundos qué problema resuelve Sinergia.
2. Encontrar la solución correcta en un solo nivel de navegación.
3. Ver evidencia antes de pedir contacto.
4. Leer cifras consistentes y fechadas.
5. Poder convertir desde móvil con WhatsApp, teléfono o formulario.
6. No depender de conocer Odoo o la Ley REP para orientarse.

## Propuesta de arquitectura de punta a punta

### Inicio

1. Header compacto con logo, Soluciones, Casos, Nosotros y CTA “Hablemos”.
2. Hero con una promesa concreta, dos CTA y una fotografía de trabajo real.
3. Banda de confianza con partner Odoo, cobertura geográfica y 3 métricas verificadas.
4. Bloque “Dónde intervenimos” con cuatro soluciones descritas por el problema que resuelven.
5. Sección de método en tres momentos: Entender, Diseñar, Implementar.
6. Caso destacado con resultado validado y enlace a la biblioteca de casos.
7. Panel Ley REP con alcance, entregables y próxima fecha relevante, solo si el dato está validado.
8. Bloque de equipo y principios.
9. CTA final con expectativa explícita de respuesta.

### Páginas de servicio

Cada servicio debe compartir una plantilla, pero no un contenido clonado:

- Hero: problema específico + quién debería contactar.
- Síntomas: señales que indican que la empresa necesita ayuda.
- Qué hacemos: alcance y exclusiones.
- Entregables: documentos, configuración, tableros o reportes.
- Cómo trabajamos: 3–4 pasos con tiempos solo si son reales.
- Evidencia: caso relacionado, testimonio o muestra de entregable.
- FAQ con preguntas de búsqueda.
- CTA contextual: “Evaluar mi situación”, “Revisar mi operación”, etc.

### Casos de éxito

- Filtros por servicio e industria, accesibles y compartibles por URL.
- Tarjetas breves con cliente, sector, reto, intervención y resultado.
- Vista de detalle para los casos autorizados.
- Etiquetas “resultado cuantificado” y “caso confidencial” para distinguir evidencia.
- No inventar porcentajes ni ahorros: si no hay métrica, describir el cambio operacional.

### Nosotros

- Historia breve y específica, sin párrafos genéricos.
- Equipo con nombres, roles y experiencia, si el cliente lo autoriza.
- Fotografía real de equipo/terreno.
- Credenciales y partner Odoo con enlace verificable.
- Principios de trabajo y cobertura territorial.

### Contacto

- Formulario corto en una columna en móvil.
- Campo de necesidad con opciones claras.
- Consentimiento, aviso de privacidad y estados accesibles.
- WhatsApp y teléfono como acciones persistentes en móvil.
- Dirección, mapa perezoso y enlace a mapas.
- Mensaje de expectativa: “Te responderemos dentro de X horas hábiles”, solo si operaciones lo puede cumplir.

## Modelo de contenido y datos

Crear `src/content/site.ts` como fuente única para:

- Datos de contacto.
- Métricas aprobadas con unidad, fecha de corte y fuente interna.
- Servicios y slugs.
- Casos, industrias, resultados y estado de autorización.
- FAQ y datos SEO.

Ejemplo de contrato recomendado:

```ts
type VerifiedMetric = {
  value: number;
  display: string;
  label: string;
  asOf: string;
  source: "client-approved";
};
```

Los componentes deben consumir este contenido y no declarar números sueltos. La presentación animada puede usar `value`, pero el texto SSR debe usar `display`.

## SEO, analítica y conversión

- Definir intención primaria por página y una keyword secundaria, evitando repetir “Sinergia Industrias” sin propósito.
- Crear OG image con título, servicio y ubicación.
- Añadir eventos: click WhatsApp, click teléfono, envío iniciado, envío exitoso, envío fallido, descarga de material y filtros de casos.
- Añadir UTM al CTA de campañas, sin contaminar canónicas.
- Preparar `404`, `loading` y estados de error consistentes con la marca.
- Añadir FAQ visible, no solo JSON-LD, para sostener el contenido semántico.
- Auditar enlaces externos, dirección, teléfono, LinkedIn y mapa antes de publicar.

## Plan de implementación

### Fase 0: Validación de contenido

- Aprobar métricas, fechas, definiciones y casos publicables.
- Confirmar partner Odoo, cobertura geográfica, tiempos de respuesta y canales.
- Corregir codificación UTF-8 en todo el contenido.

### Fase 1: Fundación

- Crear el modelo de contenido centralizado.
- Definir tokens premium y escalas responsive.
- Rehacer metadata, JSON-LD, sitemap y manifest.
- Implementar header, footer, botones, cards y estados de formulario.

### Fase 2: Experiencia pública

- Rediseñar Inicio.
- Crear plantilla de servicios y migrar las cuatro páginas.
- Rediseñar casos con filtros y detalle.
- Rediseñar Nosotros y Contacto.

### Fase 3: Calidad

- Pruebas visuales a 390, 768, 1024 y 1440 px.
- Lighthouse y Core Web Vitals.
- Validación con lector de pantalla y teclado.
- Revisión de enlaces, formularios, metadata, sitemap y datos estructurados.
- Revisión editorial final con el cliente.

## Criterios de aceptación

- No existe ninguna cifra duplicada fuera de la fuente central de contenido.
- El DOM inicial no muestra `0+` para métricas verificadas.
- Hero y CTA son comprensibles sin conocer el vocabulario técnico interno.
- Todas las páginas tienen un H1 único, title, description, canonical y datos estructurados apropiados.
- El formulario tiene estados de éxito y error sin depender de `mailto`.
- La navegación móvil se puede operar con una mano y conserva CTA visible.
- El sitio funciona con `prefers-reduced-motion` y navegación por teclado.
- Las imágenes principales tienen alt, dimensiones y carga optimizada.
- La estética técnica queda como soporte de la marca, no como protagonista repetitiva.
- El cliente aprueba por escrito cifras, claims, logos, fotografías y casos publicados.

## Riesgos y decisiones pendientes

- Las métricas actuales no tienen fecha de corte ni fuente visible; deben validarse antes de publicarlas.
- “Ready Partner Oficial Odoo” debe usar la denominación exacta autorizada por Odoo.
- Los resultados de casos deben separar hechos medidos de descripciones cualitativas.
- La política de privacidad y el proveedor de formulario requieren definición comercial/legal.
- Fotografías, logos y testimonios necesitan autorización de uso.

## Resultado esperado

Una web que comunique competencia sin sobreexplicarse, convierta mejor en móvil, sea indexable por servicio y ubicación, y sostenga sus afirmaciones con una capa de contenido verificable. El premium aquí no se consigue agregando más efectos; se consigue haciendo que cada palabra, número, imagen y transición tenga una razón.
