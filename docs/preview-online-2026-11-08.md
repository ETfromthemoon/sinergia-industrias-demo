# Sinergia: preview online del 8 de noviembre de 2026

## Objetivo y alcance

Publicar la candidata revisada en una rama de GitHub y una preview de Vercel, sin
merge ni cambios de producción. El receptor online genera un comprobante persistente
en una base Neon dedicada. No envía correo ni conserva los datos personales del formulario.

- Repositorio: `ETfromthemoon/sinergia-industrias-demo`.
- Rama: `codex/demo-online-20261108`, basada en `8ce8378986e16f71a2a34d584311de8b9dcf442c`.
- Commit de aplicación publicado y verificado: `7cd97b43ea55e9eac8ed822ff80cb0ea3b400ebe`.
- Preview canónica: https://sinergia-industrias-demo-36ayfna1p-sergio-astudillo-s-projects.vercel.app
- Deployment: `dpl_BUZmY6xTCNWHRnpMwhy4Y1AoQ9VV`, estado READY, entorno preview, generado por la integración Git desde ese SHA.
- El commit documental posterior `1a172c562685f31e33174db6a72cb4cb1b82071d` generó `dpl_8iB8bmaBMsNFCmXdDKiFg4RNFvsL` (READY). La API de Vercel atribuye cada deployment a su commit respectivo; `git diff --name-only 7cd97b4 1a172c5` muestra sólo este informe. Esta constatación del 20/11/2026 vincula ambos despliegues con el mismo código de aplicación, pero no sustituye una nueva prueba funcional ni verifica por sí sola el acceso temporal.
- Acceso: se conserva la protección del proyecto Vercel. La URL anónima redirige a Vercel (302); el enlace temporal de acceso fue verificado en un navegador aislado. Ese enlace permanece fuera de Git.
- Este informe se respalda en un commit documental posterior al commit de aplicación probado; no cambia la aplicación.

## Aislamiento y comportamiento

- Tres flags explícitas, `VERCEL=1`, entorno `preview` y conexión dedicada obligatorios.
- Origen, host y protocolo deben coincidir exactamente con la URL HTTPS del deployment.
- Cuerpo JSON limitado a 16 KiB; campos de contacto limitados a 100/200/254/4000/120 caracteres.
- Un error o configuración incompleta nunca deriva al proveedor de correo.
- Sólo se informa éxito después de confirmar el UUID devuelto por el INSERT.
- Tabla `demo.receipts`: UUID, flujo, fecha, `email_sent=false`, cantidad de campos y bytes.
- Privilegios verificados del rol: INSERT y SELECT de `id`; sin lectura de tabla, UPDATE, DELETE o CREATE.
- Cuota transaccional con bloqueo: 30 recibos/minuto y 5000 totales; el rol no puede sobrescribir fechas ni ejecutar directamente la función de cuota. Prueba de 31 inserciones rechazada, con rollback completo y cero filas restantes.
- El modo local anterior sigue disponible para desarrollo. El servidor 3213 fue cerrado el 8/11 a las 19:14 UTC después de validar su reemplazo online.

## Verificación

| Comprobación | Estado | Evidencia |
| --- | --- | --- |
| ESLint | PASS | `npm run lint` |
| TypeScript | PASS | `npx tsc --noEmit -p tsconfig.json` |
| Contratos | PASS | `node scripts/contact-contract.mjs`: 13 grupos; transporte externo y SQL sustituidos, recibos locales reales |
| Privilegios de almacenamiento | PASS | Consulta `has_table_privilege`/`has_column_privilege`/`has_schema_privilege` en la base aislada |
| Revisión independiente del delta | PASS | Seguridad, TypeScript, React y código aprobados; cuota y privilegios del esquema comprobados |
| Build remoto desde GitHub | PASS | Vercel READY para `7cd97b43ea55e9eac8ed822ff80cb0ea3b400ebe`; compilación y TypeScript aprobados en Linux/Node24 |
| CI del commit | PASS | Estado GitHub `Vercel: success` sobre ese SHA; no se añadió un workflow de GitHub Actions |
| Formularios online y persistencia cloud | PASS | Contacto y suscripción desde UI, con datos sintéticos; ambos UUID consultados directamente en Neon, `email_sent=false`; sólo existen las seis columnas descritas |
| Rutas y smoke online | PASS | `node scripts/cloud-demo-smoke.mjs`: 34 PASS / 0 FAIL; 22 rutas, 8 layouts a375/1440, ambos formularios, origen ajeno403, cuerpo excesivo413 y cero excepciones de aplicación |
| Cierre local | PASS | PID servidor y padre verificados; procesos propios detenidos y ausencia de listener3213 comprobada |
| Correo externo real | NOT_TESTED | No forma parte de esta demo |
| Producción | NOT_RUN | No merge ni publicación a producción |

## Mostrar la demo

1. Abrir la URL canónica con acceso autorizado a Vercel o el enlace temporal facilitado.
2. Mostrar Inicio, soluciones, los doce casos y Blog.
3. Enviar datos sintéticos en Contacto y suscripción; señalar la confirmación y su UUID.
4. El comprobante existe en Neon; los datos personales introducidos no se guardan allí.

Los logs, capturas, recibos, credenciales y enlaces de acceso temporal permanecen fuera del repositorio.

Extracto sanitizado para el coordinador:

```json
{
  "verifiedAt": "2026-11-08T19:14:35Z",
  "appCommit": "7cd97b43ea55e9eac8ed822ff80cb0ea3b400ebe",
  "remoteBranch": "codex/demo-online-20261108",
  "deploymentId": "dpl_BUZmY6xTCNWHRnpMwhy4Y1AoQ9VV",
  "deploymentState": "READY",
  "target": "preview",
  "ci": "Vercel: success",
  "smoke": { "passed": 34, "failed": 0 },
  "contracts": { "passedGroups": 13 },
  "persistedReceiptsVerified": 2,
  "personalDataStored": false,
  "externalEmailsSent": false,
  "anonymousAccess": "302 to Vercel authentication",
  "temporaryShareAccess": "VERIFIED",
  "localPort3213": "CLOSED",
  "productionDeployment": "NOT_RUN"
}
```

Evidencias privadas: `scripts/shots/demo-review/cloud/results.json`,
`cloud/persistence.json`, `cloud/local-server-closed.json` y `cloud-storage-privileges.json`.

## Contraste de evidencia primaria (20/11/2026)

- `results.json`, fechado `2026-11-08T19:13:34.084Z`, contiene `passed: 34`, `failed: 0` y 34 comprobaciones: 22 rutas, ocho layouts a 375/1440 px, creación de recibos de contacto y newsletter, rechazo online de origen ajeno/cuerpo excesivo y ausencia de excepciones de aplicación. La evidencia original sigue privada porque incluye datos de acceso temporal.
- `persistence.json`, verificado `2026-11-08T19:14:35Z`, registra dos recibos cotejados, seis columnas (`id`, `flow`, `created_at`, `email_sent`, `field_count`, `input_bytes`), `personalDataStored: false` y `externalEmailsSent: false`. Los UUID y datos de prueba no se publican.
- `share-recheck-after-doc-deploy.json` confirma que el 8/11 a las 19:20:54Z la página inicial y `/contacto` respondieron 200 en el deployment documental `dpl_8iB8bmaBMsNFCmXdDKiFg4RNFvsL`. Ese enlace temporal venció el 9/11; no se presenta como acceso actual.
- El 20/11, `web_fetch_vercel_url` de la cuenta Vercel devolvió HTTP 200 y HTML con títulos correctos para `/` y `/contacto` del deployment documental. Este acceso autenticado confirma ambas páginas en esa fecha; los formularios y la persistencia no se reejecutaron en esta revisión.

Estado de entrega: revisión abierta hasta comprobar de nuevo los formularios online y disponer de un enlace temporal vigente para la presentación al cliente. El resultado del revisor automático `needs_work` se conserva como evaluación del informe, no como fallo funcional demostrado.

## Revalidación online (21/11/2026)

- Se creó un nuevo acceso temporal privado para `dpl_8iB8bmaBMsNFCmXdDKiFg4RNFvsL` (READY, commit documental `1a172c5`, código de aplicación `7cd97b4`). Vercel informó que el enlace está vigente hasta el 22/11; se conserva sólo en `scripts/shots/demo-review/preview-access.json`, ignorado por Git.
- `node scripts/cloud-demo-smoke.mjs` terminó con código 0: **34 PASS / 0 FAIL**. Recorrió las 22 rutas, ocho layouts, ambos formularios desde la interfaz y los rechazos de origen ajeno/cuerpo excesivo; sin mocks de transporte ni errores de aplicación. `cloud/results.json` guarda la salida del 21/11 a las 15:05:58Z; la salida del 8/11 se conservó en `cloud/results-20261108.backup.json`.
- La consulta de sólo lectura en el proyecto Neon aislado `sinergia-demo-receipts-20261108` encontró exactamente los dos UUID devueltos por los formularios, con flujos `contact` y `newsletter` y `email_sent=false` en ambos. `cloud/persistence-20261121.json` conserva el cotejo privado; este informe omite los UUID.
- Esta revalidación cubre la demo online actual. La entrega al cliente sigue pendiente de una presentación y su aceptación; el enlace temporal debe renovarse si se usa después del 22/11.
Los recibos sintéticos permanecen en la base aislada como evidencia; la prueba de cuota
se revirtió dentro de su transacción y no dejó filas adicionales.
