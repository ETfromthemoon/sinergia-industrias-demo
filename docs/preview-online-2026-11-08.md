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
Los recibos sintéticos permanecen en la base aislada como evidencia; la prueba de cuota
se revirtió dentro de su transacción y no dejó filas adicionales.
