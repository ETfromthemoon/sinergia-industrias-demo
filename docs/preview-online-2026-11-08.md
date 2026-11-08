# Sinergia: preview online del 8 de noviembre de 2026

## Objetivo y alcance

Publicar la candidata revisada en una rama de GitHub y una preview de Vercel, sin
merge ni cambios de producción. El receptor online genera un comprobante persistente
en una base Neon dedicada. No envía correo ni conserva los datos personales del formulario.

- Repositorio: `ETfromthemoon/sinergia-industrias-demo`.
- Rama: `codex/demo-online-20261108`, basada en `8ce8378986e16f71a2a34d584311de8b9dcf442c`.
- Commit publicado y URL canónica: pendientes de despliegue y verificación.
- Acceso: se conserva la protección del proyecto Vercel; enlaces temporales fuera de Git.

## Aislamiento y comportamiento

- Tres flags explícitas, `VERCEL=1`, entorno `preview` y conexión dedicada obligatorios.
- Origen, host y protocolo deben coincidir exactamente con la URL HTTPS del deployment.
- Cuerpo JSON limitado a 16 KiB; campos de contacto limitados a 100/200/254/4000/120 caracteres.
- Un error o configuración incompleta nunca deriva al proveedor de correo.
- Sólo se informa éxito después de confirmar el UUID devuelto por el INSERT.
- Tabla `demo.receipts`: UUID, flujo, fecha, `email_sent=false`, cantidad de campos y bytes.
- Privilegios verificados del rol: INSERT y SELECT de `id`; sin lectura de tabla, UPDATE, DELETE o CREATE.
- Cuota transaccional con bloqueo: 30 recibos/minuto y 5000 totales; el rol no puede sobrescribir fechas ni ejecutar directamente la función de cuota. Prueba de 31 inserciones rechazada, con rollback completo y cero filas restantes.
- El modo local anterior sigue disponible para desarrollo; su servidor se cerrará al verificar la preview.

## Verificación

| Comprobación | Estado | Evidencia |
| --- | --- | --- |
| ESLint | PASS | `npm run lint` |
| TypeScript | PASS | `npx tsc --noEmit -p tsconfig.json` |
| Contratos | PASS | `node scripts/contact-contract.mjs`: 13 grupos; transporte externo y SQL sustituidos, recibos locales reales |
| Privilegios de almacenamiento | PASS | Consulta `has_table_privilege`/`has_column_privilege`/`has_schema_privilege` en la base aislada |
| Revisión independiente del delta | PASS | Seguridad, TypeScript, React y código aprobados; cuota y privilegios del esquema comprobados |
| Build remoto desde GitHub | NOT_RUN | Pendiente |
| Formularios online y persistencia cloud | NOT_RUN | Pendiente; usar exclusivamente datos sintéticos |
| Rutas y smoke online | NOT_RUN | Pendiente |
| Correo externo real | NOT_TESTED | No forma parte de esta demo |
| Producción | NOT_RUN | No merge ni publicación a producción |

## Mostrar la demo

1. Abrir la URL canónica con acceso autorizado a Vercel o el enlace temporal facilitado.
2. Mostrar Inicio, soluciones, los doce casos y Blog.
3. Enviar datos sintéticos en Contacto y suscripción; señalar la confirmación y su UUID.
4. El comprobante existe en Neon; los datos personales introducidos no se guardan allí.

Los logs, capturas, recibos, credenciales y enlaces de acceso temporal permanecen fuera del repositorio.
