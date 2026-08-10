# Client logo sources

The files in `public/client-logos` are preserved as local assets so the client marquee does not depend on third-party requests at runtime. Each file was checked against the named company's official site, official public company profile, or a public brand publication when the original domain was unavailable.

| Client | Asset source |
| --- | --- |
| Arriendo Legal | `arriendolegal.cl/wp-content/uploads/2023/08/logo.png` |
| Aramark | Wikimedia Commons publication of the Aramark brand SVG |
| Asalvo | `asalvo.cl/wp-content/uploads/2024/10/2_logo-asalvo-web.png` |
| CIAL | `cial.cl/content/uploads/2024/10/logo.svg` |
| CV Trading | CV Trading's Squarespace media asset |
| Corona | Corona Chile public company profile |
| Dimerc | Dimerc S.A. public company profile |
| Easy | Wikimedia Commons publication of the Easy brand emblem; verified against Easy/Cencosud public brand usage |
| Ecostandard | `ecostandard.cl/wp-content/uploads/2021/04/logotipo.png` |
| Iansa | Empresas Iansa public company profile |
| Inacap | INACAP public portal asset |
| Jumbo | `jumbo.cl/images/logo-jumbo-50.svg` |
| MB Chemicals | MB Chemicals SpA public company profile |
| Moriah | MORIAH public company profile |
| Paris | Wikimedia Commons publication sourced from `paris.cl` and attributed to Cencosud |
| Podas Chile | PODAS CHILE SPA public company profile |
| Red Circular | Red Circular public company profile |
| Ripley | Ripley Chile public company profile |
| Tottus | Tottus public company profile |
| Tresmontes Lucchetti | Pacto Global publication of the company wordmark |
| Vinder Chile | Vinder Chile public company profile |

Raster files supplied on white canvases are normalized with `scripts/normalize-client-logo-backgrounds.mjs`. The script removes only near-white pixels connected to the outer canvas, preserving enclosed white details that belong to the original mark.
