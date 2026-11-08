# Sinergia Web · revisión de demo del 8 de noviembre de 2026

Registro histórico de la candidata local anterior a su publicación. El estado vigente
de entrega se encuentra en [preview-online-2026-11-08.md](preview-online-2026-11-08.md).

## Resultado y candidata

La demo local pasó la batería funcional y visual después de actualizar Next.js a 16.4.5. Está disponible en **http://127.0.0.1:3213** con un aviso visible de modo demo. Contacto y suscripción guardan recibos locales comprobables: **no envían correos**. Las revisiones independientes de React, TypeScript, código y seguridad cerraron sus hallazgos en el alcance de esta demo. El coordinador cotejó directamente `results.json` (72 PASS, 0 FAIL, 0 SKIP) y `.next/BUILD_ID` con el extracto del informe: apta para mostrar la demo local según el guion. No se ha publicado ni hecho commit. El dictamen automático evalúa por separado la consistencia de este reporte.

- Checkout: raíz del repositorio `sinergia-industrias-demo` (carpeta local `Sinergiaconsultores`).
- Rama: `codex/sync-success-cases`; HEAD base `8ce8378986e16f71a2a34d584311de8b9dcf442c`.
- Build local de demo: `DwjeR-eY8yORsowtRqGe1` (`.next/BUILD_ID`), con Next.js 16.4.5. Incluye los cambios actuales de aplicación; los cambios están guardados en archivos, sin commit ni push.
- Se conservaron los cinco elementos previos sin seguimiento: `.impeccable/`, `graphify-out/`, `client-logo-contact-sheet.png`, `easy-alt.png` y `public/client-logos/easy-alt.svg`.

## Fallos reproducidos y correcciones

1. **Suscripción:** una respuesta satisfactoria de FormSubmit terminaba mostrando error de conexión; `e.currentTarget` se consultaba después de `await`. Se conserva la referencia al formulario antes de esperar, se evita doble envío simultáneo y se exige éxito HTTP además del cuerpo exitoso. La regresión verifica error, conservación del correo, reintento, éxito y limpieza.
2. **Contacto:** JSON inválido, `null` o tipos incorrectos producían HTTP 500. Ahora se validan entrada y consentimiento y se responde 400. Fallos de red del proveedor responden 502 con un mensaje controlado; no se presenta un envío fallido como exitoso.
3. **Texto ampliado:** a 375 px con texto 200%, contacto causaba 59 px de desbordamiento por mínimos de grid y correo indivisible. Se corrigieron columnas, mínimos y salto de texto; la repetición dio 0 px.
4. **Pedidos visuales pendientes:** botones/controles comparten una paleta verde, con foco visible; los títulos dejaron de mezclar redonda y cursiva. Se preservan la identidad azul/celeste de superficies, contenidos, 12 logos y 12 casos.
5. **Documentación:** se corrigió la atribución de transportes (contacto: Resend; blog: FormSubmit) y se retiraron suposiciones contradictorias sobre la rama de despliegue.
6. **Seguridad de Next.js en Windows:** la revisión detectó la versión 16.2.7 afectada por [GHSA-p293-qw3h-jr36](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36). Se actualizaron únicamente las dependencias directas `next` y `eslint-config-next` a 16.4.5, con sus dependencias transitivas y lockfile. Se revisaron las guías locales de actualización y Route Handlers de la versión instalada; no fue necesaria una migración de aplicación.
7. **Evidencia de pruebas:** la comprobación de recibos devolvía un resultado omitido cuando el modo demo estaba desactivado, pero el runner lo sumaba como PASS. Ahora emite `SKIP`, explica el motivo y lo contabiliza aparte. La prueba contra una compilación normal real dio 0 PASS / 0 FAIL / 1 SKIP.

## Modo demo seguro y reproducible

`npm run demo` compila con `SINERGIA_DEMO_MODE=true` y `NEXT_PUBLIC_DEMO_MODE=true`, y sirve únicamente en loopback: 3213. El runner verifica que el puerto esté libre antes de compilar para no reconstruir sobre un servidor existente.

- Banner permanente: «Demo local. Los formularios guardan un recibo local; no envían correos».
- Contacto guarda los datos validados en un JSON local y devuelve su UUID. Suscripción usa un endpoint local separado; no usa FormSubmit durante la demo.
- Los recibos están en `scripts/shots/demo-inbox/`, ignorados por Git, con `emailSent:false`. Utilizar sólo datos sintéticos. No hay un endpoint público que liste o lea esos recibos.
- Se requieren ambas variables, ausencia de Vercel y coincidencia del origen con la autoridad HTTP local. Configuración incompleta, Vercel y orígenes ajenos fallan de forma cerrada, sin caer al envío real.
- El modo normal sigue usando Resend/FormSubmit y permanece desactivado por defecto. Antes de una publicación comercial se debe reconstruir sin las variables de demo y verificar los transportes externos por separado.
- Los tests dejan recibos sintéticos como evidencia. Reiniciar no los elimina: para una nueva demostración basta con recargar los formularios y usar nuevos datos. Su eliminación no se realizó en esta tarea.

## Verificación ejecutada

| Comprobación | Resultado | Evidencia y alcance |
| --- | --- | --- |
| ESLint | PASS | `npm run lint`, sin errores ni advertencias al cierre de los cambios de aplicación. |
| Compilación/TypeScript | PASS | Repetidas tras actualizar a 16.4.5: `npm run build -- --webpack` en modo normal; después `npm run demo`, que compila la candidata local con webpack. Ambas incluyen verificación de tipos. |
| Contrato contacto | PASS, transporte externo sustituido | `node scripts/contact-contract.mjs`: 8 grupos repetidos con Next.js 16.4.5; entradas inválidas, configuración, respuesta del proveedor, error y excepción de red, aislamiento demo, recibo real local y bloqueo en Vercel. |
| Suite navegador | PASS | `node scripts/demo-readiness.mjs`: 72 casos aprobados, 0 fallos, 0 omitidos; resultado final 8/11 16:01 UTC. Edge/Playwright sobre la compilación demo de Next.js 16.4.5. |
| Rutas y medios | PASS |22 rutas (10 páginas y 12 artículos), imágenes decodificadas y22 destinos internos HTTP 200. |
| Presentación | PASS |10 plantillas a 320, 375, 768 y 1440 px: sin desbordamiento; títulos no cursivos y botones verdes. Capturas de Inicio/Blog/Contacto/Casos. |
| Navegación | PASS | Menú móvil, Escape, cierre al navegar, carrusel con 12 selectores, flechas y teclado; Ecostandard desde URL directa y enlace de Inicio. |
| Contacto UI | PASS con respuestas controladas y captura local real | Inicio/Contacto: error, conservar campos, reintento y éxito; recorrido adicional real contra el receptor de demo. |
| Suscripción UI | PASS con respuestas controladas y captura local real | Error HTTP, reintento, reset exitoso; envío manual del navegador al endpoint de demo verificado. |
| Persistencia demo | PASS | Recibos de ambos flujos leídos desde disco y contrastados con datos sintéticos; orígenes ajenos rechazados 403. |
| Teclado/texto 200%/movimiento reducido | PASS | Foco, ausencia de desbordamiento en recorridos representativos y suite con preferencia de movimiento reducido. |
| Excepciones de navegador | PASS | Ninguna excepción de ejecución capturada por la suite final. |
| Correo externo real | NOT_TESTED | No se envió correo a Resend/FormSubmit ni se confirmó recepción en un buzón. El modo demo no pretende acreditarlo. |
| Actualización Next.js | PASS | `npm ls next eslint-config-next`: ambas 16.4.5; `npm audit` ya no lista `next`. No se ejecutó `npm audit fix`. |
| Omisión en modo normal | PASS | `DEMO_TEST_MATCH='^local demo receipts'` sobre una compilación sin modo demo: 0 PASS / 0 FAIL / 1 SKIP. Evidencia `results-skip-normal-16.4.5.json`. |
| Publicación | NOT_RUN | Candidata local; no push, merge o despliegue. |
| Revisión React/TypeScript | PASS | Revisores independientes sin hallazgos materiales pendientes; ESLint y TypeScript comprobados. No hubo cambios JSX/TSX después de la revisión React. |
| Revisión genérica | PASS | El revisor comprobó PASS/FAIL/SKIP y lockfile alineado; P2 de omisión cerrado. Alcance: scripts, evidencias y coherencia de entrega. |
| Revisión de seguridad | PASS en alcance demo | P1 de Next.js cerrado al comprobar 16.4.5 instalado, manifiesto/lockfile y ausencia de Next/Sharp en audit. No acredita correo externo ni una auditoría integral de producción. |

La primera iteración del runner navegaba antes de la hidratación React y trataba una navegación sólo-hash como respuesta HTTP. Ambos problemas del test se corrigieron, sin debilitar aserciones de la aplicación. La batería final espera carga estable y comprueba la diapositiva real tras navegar.

Evidencias bajo `scripts/shots/demo-review/` (ignoradas por Git): `results.json`, `results-focused.json`, `results-skip-normal-16.4.5.json`, `contract/results.json`, `normal-build-16.4.5.log`, `demo-server-16.4.5.log`, `browser-16.4.5.log`, `audit-after-upgrade.json`, capturas por ancho y `local-receipt-contact.png`. No incluyen credenciales ni datos de clientes.

Extracto sanitizado de resultados observados para el coordinador (sin datos de formularios):

```json
{
  "verifiedAt": "2026-11-08T16:01:45.215Z",
  "buildId": "DwjeR-eY8yORsowtRqGe1",
  "versions": { "next": "16.4.5", "eslint-config-next": "16.4.5" },
  "browser": { "passed": 72, "failed": 0, "skipped": 0 },
  "normalModeReceiptCheck": { "passed": 0, "failed": 0, "skipped": 1 },
  "demoModeReceiptCheck": "PASS",
  "contactContract": { "passedGroups": 8, "failedGroups": 0 },
  "lint": "PASS",
  "normalBuild": "PASS",
  "demoBuild": "PASS",
  "independentReviews": { "react": "PASS", "typescript": "PASS", "code": "PASS", "securityDemoScope": "PASS" },
  "externalEmailDelivery": "NOT_TESTED",
  "publication": "NOT_RUN"
}
```

## Guion breve para mostrar

1. Abrir la URL local y señalar el aviso de demo.
2. Mostrar Inicio, las cuatro soluciones y navegación móvil.
3. Abrir Ecostandard desde Inicio; recorrer los 12 casos y el carrusel por teclado.
4. Abrir Blog y un artículo; suscribirse con `demo@example.test`. La confirmación explica que se capturó localmente.
5. Ir a Contacto, completar datos sintéticos, aceptar consentimiento y enviar. Mostrar el mensaje y el UUID de recibo; si se necesita comprobarlo, consultar el archivo JSON local correspondiente.
6. Recargar y repetir: no se necesita modificar una base de datos ni enviar mensajes a terceros.

## Guardado y límites

Cambios en controles/títulos, formularios, validación de contacto, receptor local de demo, runner y pruebas; README y guía actualizados. Se actualizaron Next.js y su configuración ESLint a 16.4.5, con lockfile; no se agregaron dependencias directas. Los archivos nuevos de esta tarea son `src/lib/demo-inbox.ts`, `src/app/api/demo-newsletter/route.ts`, `scripts/demo-server.mjs`, `scripts/contact-contract.mjs`, `scripts/demo-readiness.mjs` y este informe.

El análisis de dependencias posterior aún informa 27 hallazgos transitivos (1 bajo, 14 moderados, 11 altos y 1 crítico). El crítico corresponde a `proxy-addr@2.0.7`, en la cadena de herramientas `shadcn > @modelcontextprotocol/sdk > express`; no se modificó ese conjunto fuera de la actualización autorizada. Esto no equivale a una auditoría completa de seguridad ni acredita el uso seguro de esas herramientas como servidores expuestos.

La entrega no acredita funcionamiento del correo comercial ni una URL pública. El banner y las confirmaciones locales deben conservarse durante esta demo. `graphify query` y `graphify update .` fallaron por `uv trampoline failed to canonicalize script path`; se inspeccionaron directamente los archivos y se ejecutaron las verificaciones descritas.
