# Handoff actual - Sinergia Industrias

Usar este archivo como contexto base para la siguiente conversacion.

## Proyecto

- Cliente: Sinergia Consultores SpA, consultora B2B chilena.
- Especialidades: Ley REP 20.920, procesos industriales, Odoo ERP y datos.
- Ruta local: `C:\Users\sergio\SERGIOIA\WEB\Landings\Sinergiaconsultores`
- Repositorio: `https://github.com/ETfromthemoon/sinergia-industrias-demo`
- Rama de trabajo: `codex/streamline-content-and-client-logos`
- PR activo: `https://github.com/ETfromthemoon/sinergia-industrias-demo/pull/11`
- Stack: Next.js 16, React 19, TypeScript, Tailwind v4, motion/react.

## Vercel

- Cuenta autenticada: `sergio.bkg@gmail.com`.
- Equipo personal: `sergio-astudillo-s-projects`.
- Proyecto: `sinergia-industrias-demo`.
- Proyecto vinculado en `.vercel/project.json`.
- URL productiva: `https://sinergia-industrias-demo.vercel.app`.
- URL de preview del ultimo PR: `https://sinergia-industrias-demo-git-a1c413-sergio-astudillo-s-projects.vercel.app`.

## Estado visual reciente

- Se auditaron los 21 logos de clientes en el marquee; 42 instancias renderizadas y 0 imagenes rotas.
- Aramark y Jumbo tenian SVG invalidos por caracteres sobrantes al final; ya estan reparados.
- Easy ahora usa un emblema oficial a color y ya no depende de un parche oscuro artificial.
- Paris ahora usa una fuente limpia, sin patron cuadriculado incrustado.
- Se eliminaron fondos blancos conectados al borde en los PNG que los conservaban.
- Arriendo Legal y MB Chemicals mantienen sus versiones claras sobre una placa navy para garantizar contraste.
- La logica de normalizacion esta en `scripts/normalize-client-logo-backgrounds.mjs`.
- Fuentes y criterios documentados en `docs/client-logo-sources.md`.

## Verificacion

- `npm run lint`: aprobado.
- `npm run build`: aprobado con 30 rutas generadas.
- Verificacion visual en navegador: carrusel completo cargado sin errores.

## Ultimo commit

- `0c55ed7 fix: restore logo contrast and transparency`

## Archivos auxiliares no versionados

No versionar ni borrar sin revisar: `client-logo-contact-sheet.png`, `easy-alt.png`, `public/client-logos/easy-alt.svg` y `graphify-out/`. Son salidas de diagnostico o pruebas previas.

## Pendientes recomendados

1. Confirmar que FormSubmit.co este activado para `info@sinergiaindustrias.cl`.
2. Instalar GTM/GA4 y conectar el evento `generate_lead` con Google Ads.
3. Revisar en movil los carruseles y las placas de contraste despues del deploy productivo.
4. Mantener el formato editorial MDX documentado en `docs/AUTOMATIZACION-BLOG.md`.
5. Considerar reemplazar imagenes genericas de casos de exito por fotografias reales del cliente.

## Instruccion para continuar

Continuar desde este estado. Antes de editar, revisar `HANDOFF-ACTUAL-2026-08-11.md`, `docs/client-logo-sources.md` y el estado de Git. Preservar los archivos auxiliares no versionados. No cambiar titulos ni slogans de marca sin validar el manual de marca.
