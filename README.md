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

## Build de producción

```bash
npm run build
npm start
```

## Re-publicar en Vercel

Cualquier push a `master` despliega automáticamente. O manualmente:

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
