# Madrigal Realty — Landing page

Landing page para **Madrigal Realty · Asesoría Inmobiliaria** (República Dominicana).
Astro + Tailwind CSS v4 + Alpine.js + Swiper. La conversión principal es WhatsApp.

## Requisitos

- **Node 24** (ver `.nvmrc`). Con [nvm](https://github.com/nvm-sh/nvm): `nvm install && nvm use`.
- **pnpm** (fijado en `package.json` → `packageManager`). La forma recomendada es Corepack:
  ```bash
  corepack enable          # habilita pnpm con la versión correcta del repo
  ```

## 🧞 Comandos

Desde la raíz del proyecto:

| Comando        | Acción                                                          |
| :------------- | :-------------------------------------------------------------- |
| `pnpm install` | Instala dependencias                                            |
| `pnpm dev`     | Servidor de desarrollo en **http://localhost:4360**             |
| `pnpm build`   | Compila el sitio de producción a `./dist/`                      |
| `pnpm preview` | Previsualiza la build de producción                             |
| `npx eslint .` | Linter (Astro + Tailwind + TypeScript)                          |

> El puerto de desarrollo (`4360`) está fijado en `astro.config.mjs` (`server.port`).

### Solución de problemas

- **`Node.js vX is not supported by Astro`** → estás en una versión de Node menor a 22.12. Ejecuta `nvm use` (Node 24).
- **`Cannot find native binding … @rolldown/binding-darwin-arm64`** → la dependencia nativa opcional de rolldown no se materializó en la primera instalación. Ejecuta:
  ```bash
  pnpm install --force
  ```

## Estructura

```
src/
├── components/   # Header, Footer, secciones (Hero, PropertyTypes, …), Icon, WhatsAppFab
├── layouts/      # Layout.astro (meta, fuentes, Alpine + Swiper por CDN)
├── pages/        # index.astro (compone las secciones)
├── styles/       # main.css (@theme: paleta + fuentes), fonts.css
└── consts.ts     # contenido + datos de contacto + helper waLink()
public/
├── img/          # hero, fotos de tarjetas, logos (optimizados a webp/png)
└── favicon.png
```

- **Contenido y enlaces de WhatsApp**: se editan en `src/consts.ts` (número, email, Instagram, textos de las secciones).
- **Colores**: paleta de marca en el bloque `@theme` de `src/styles/main.css` (copper `#CDA176`, slate `#4A4F54`, crema `#F2EDE6`, etc.).
- **Fuentes**: Montserrat Alternates (títulos) y Mulish (cuerpo), auto-hospedadas vía la Fonts API de Astro (`astro.config.mjs`).
- **Iconos**: SVG en línea reutilizables en `src/components/Icon.astro`.

## Despliegue (Cloudflare Pages)

El sitio es estático (`output: 'static'`, sin adapter) → la build genera un `dist/` plano.
En Cloudflare Pages, **"Build output directory" = `dist`**. El nombre del proyecto se configura en `wrangler.jsonc`.
