# Sinergia Industrias — Sitio corporativo

Sitio corporativo de [Sinergia Industrias](https://www.sinergiaindustrias.cl).
Presenta servicios de Ley REP, procesos, implementación Odoo y datos.

## Stack

- **Framework:** Next.js 16 (App Router, SSG)
- **UI:** shadcn/ui + Tailwind v4
- **Motion:** motion/react (Framer Motion v12)
- **Tipografía:** Newsreader + Manrope + IBM Plex Mono (next/font)
- **Deploy:** Vercel

## Correr localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Demo local con formularios seguros

`npm run demo` compila y abre el servidor en `http://127.0.0.1:3213`.
Un aviso visible identifica el modo demo. Contacto y suscripción guardan recibos
JSON en `scripts/shots/demo-inbox/` (ignorado por Git) y no envían correos.
Usar datos sintéticos. Los recibos permanecen disponibles para comprobar la demo.

El runner activa `SINERGIA_DEMO_MODE` y `NEXT_PUBLIC_DEMO_MODE` sólo en sus procesos.
El modo local requiere ambas variables y origen local; no funciona en Vercel sin
la configuración adicional de preview descrita abajo. Una configuración incompleta
se rechaza sin recurrir a un envío real. Para una
compilación normal, detener el servidor demo y ejecutar `npm run build` sin esas
variables; nunca publicar la compilación demo como una entrega comercial.

Verificación: `node scripts/contact-contract.mjs` prueba el contrato con transporte
sustituido; con la demo levantada, `node scripts/demo-readiness.mjs` comprueba
recorridos, estados y recibos locales. Edge instalado es el canal predeterminado;
`PLAYWRIGHT_CHANNEL` permite seleccionar otro canal disponible.

## Demo online en preview

La rama `codex/demo-online-20261108` usa variables exclusivas del entorno preview:
`SINERGIA_DEMO_MODE=true`, `NEXT_PUBLIC_DEMO_MODE=true`,
`SINERGIA_CLOUD_DEMO_MODE=true` y `SINERGIA_DEMO_DATABASE_URL` como secreto de servidor.
La conexión apunta a una base Neon dedicada, con el esquema de
[`docs/demo-receipts-schema.sql`](docs/demo-receipts-schema.sql).

El receptor exige `VERCEL=1`, `VERCEL_ENV=preview` y origen/host HTTPS exactamente
iguales a la URL inmutable del deployment indicada por `VERCEL_URL`. Los alias de
rama no sirven para enviar formularios: usar la URL canónica del deployment.
No se habilita este modo en producción ni se recurre al correo si falta una variable.

La demo valida entradas de hasta 16 KiB y confirma un INSERT antes de mostrar éxito.
Sólo persiste UUID, flujo, fecha y metadatos de tamaño; no almacena nombre, correo
ni mensaje. El banner explica ese alcance. El rol de la aplicación únicamente puede
insertar y devolver el UUID, sin leer otros campos ni modificar o eliminar recibos.
Una cuota transaccional limita la demo a 30 comprobantes por minuto y 5000 en total.
El rol tampoco puede sobrescribir la fecha ni desactivar el trigger de cuota.
No existe un endpoint público para listar recibos. La verificación del almacenamiento
se realiza desde Neon con acceso administrativo separado.

La preview conserva las protecciones existentes de Vercel. Si se comparte un enlace
temporal de acceso, debe permanecer fuera de Git y de los informes públicos. La URL
canónica y el SHA verificado se registran en el informe de preview.

## Build de producción

```bash
npm run build
npm start
```

## Re-publicar en Vercel

La rama de producción debe comprobarse en la configuración del proyecto Vercel antes de publicar. No asumir que `main`, `master` o la rama local de revisión son la rama desplegada. Con autorización para publicar, el comando manual es:

```bash
vercel --prod
```

## Variables del formulario

Copia `.env.example` y configura las variables en Vercel:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_FROM_EMAIL=Sitio Sinergia <contacto@sinergiaindustrias.cl>
```

`CONTACT_FROM_EMAIL` debe usar un dominio validado en Resend. Sin estas
variables, el formulario informa que el envío no está disponible y mantiene
visibles WhatsApp, teléfono y email como canales alternativos.

## Capacidades incluidas

1. Navegación responsive y acceso directo a las cuatro soluciones.
2. Métricas centralizadas y renderizadas desde servidor.
3. Ocho rutas corporativas más política de privacidad.
4. Formulario con validación, estados accesibles y endpoint de servidor.
5. Metadata, Open Graph, JSON-LD, sitemap, robots y manifest.
6. Diseño mobile-first con soporte para reducción de movimiento.

## Contacto real del cliente

- Email: info@sinergiaindustrias.cl
- Tel: +56 9 9458 4617
- Dirección: Calle Limache 3421, Reitz II of. 724, Viña del Mar
