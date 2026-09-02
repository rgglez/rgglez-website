# rgglez-website — instrucciones para agentes

Sitio Astro (AstroPaper) desplegado en Cloudflare Workers. El proyecto Astro
vive en `src/`, así que las rutas reales son `src/src/...`.

La tarea habitual en este repo es **escribir un post del blog**. Todo lo de
abajo aplica a esa tarea.

## Regla de idioma

Se escribe **solo en español**. Las traducciones NO se generan junto con el
post: yo reviso y corrijo el `.mdx` en español a mano, y después indico
explícitamente a qué idiomas traducirlo. No crear directorios `en/`, `fr/`,
`de/` ni `zh/` salvo petición expresa.

## Ubicación de archivos

| Qué | Dónde |
| :-- | :-- |
| Post | `src/src/data/blog/<AAAA>/<MM>/<lang>/<nombre-base>.mdx` |
| Imágenes | `src/src/assets/posts/<AAAA>/<MM>/<nombre-base>/` |
| Plantilla | `src/src/data/blog/_template.mdx` |
| Schema del frontmatter | `src/src/content.config.ts` (fuente de verdad) |

`<nombre-base>` es el nombre del archivo en español, en kebab-case, y **es el
mismo en todos los idiomas**. Lo que cambia entre idiomas es el campo `slug`
del frontmatter, no el nombre del archivo ni la carpeta de assets.

`<AAAA>/<MM>` corresponden a `pubDatetime`.

Ejemplo real:

```
src/src/data/blog/2026/06/es/contador-visitas-blog-cloudflare-d1.mdx   slug: contador-visitas-blog-cloudflare-d1
src/src/data/blog/2026/06/en/contador-visitas-blog-cloudflare-d1.mdx   slug: old-school-visit-counter-blog-cloudflare-d1
src/src/assets/posts/2026/06/contador-visitas-blog-cloudflare-d1/header.webp
```

## Frontmatter

Copiar `_template.mdx`. Campos validados en `content.config.ts`; no inventar
campos nuevos. Valores fijos de este sitio:

- `author`: omitir (default `Rodolfo González González` desde `config.ts`).
- `timezone`: `"America/Mexico_City"`.
- `license`: `"CC BY-NC-ND 4.0"`.
- `licenseUrl`: `https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.<lang>`
  — sufijo `es`/`en`/`fr`/`de`; para `zh` usar `en` (no existe versión china).
- `featured: false` y `draft: false` salvo indicación contraria.
- `pubDatetime` y `modDatetime`: iguales al crear, formato
  `AAAA-MM-DDT00:00:00-06:00`.
- `ogImage`: ruta **relativa** desde el `.mdx`, cinco niveles arriba, apuntando
  al `<nombre-base>` en español:
  `"../../../../../assets/posts/<AAAA>/<MM>/<nombre-base>/header.webp"`.
  El alias `@/` NO funciona aquí.
- `tags`: kebab-case, minúsculas. Los tags técnicos (`cloudflare`, `astro`,
  `d1`) se dejan igual en todos los idiomas; solo se traducen los descriptivos.
- `description`: bloque `>-`, 2–4 líneas; se usa en `<meta description>` y en
  las tarjetas del índice.

## Estructura del cuerpo

```
## Introducción

<párrafos>

---

## Tabla de contenido

---

## <secciones del post>

## Fuentes verificadas

- <a href="https://..." target="_blank">Título del recurso</a>
```

- La lista del índice se genera sola: **nunca** escribir a mano una lista de
  enlaces `- [Sección](#seccion)` debajo del heading. Solo van el heading y los
  dos `---`.
- El heading de TOC lo detecta `remarkToc` + `remarkCollapse` en
  `src/astro.config.ts`. Debe escribirse exactamente `Tabla de contenido` (es),
  `Table of contents` (en), `Table des matières` (fr), `Inhaltsverzeichnis`
  (de), `目录` (zh). Si se añade un idioma, hay que añadirlo en los **dos**
  sitios: la opción `heading` de `remarkToc` y el `test` de `remarkCollapse`.
- Encabezados de sección en `##`. No usar `#`: el `<h1>` lo pone el layout con
  el `title`.
- **Todo enlace externo va como HTML, no como enlace markdown**, para que abra
  en una pestaña nueva y el lector no salga del blog:

  ```mdx
  <a href="https://ejemplo.com/" target="_blank">Título del recurso</a>
  ```

  Aplica igual dentro del texto, en las tablas y en `## Fuentes verificadas`.
- Los enlaces **internos** van al contrario: ruta relativa, sin dominio y sin
  `target`, para que naveguen en la misma pestaña.

  ```mdx
  [otro post del blog](/es/posts/2026/04/slug-del-post)
  ```

  Nunca escribir `https://rodolfo.gg/...`: rompe la navegación en local.
  Antes de enlazar una traducción, comprobar que ese idioma existe; si no,
  dejar el texto sin enlace.
- Terminar siempre con `## Fuentes verificadas` y enlaces reales y
  comprobables. Guías de instalación: indicar en un `<Aside>` la fecha de
  verificación y las versiones exactas probadas.

## Tono

Técnico y directo. Segunda persona (`ejecuta`, `revisa`). Sin marketing ni
adjetivos de relleno. Comandos y salidas literales en bloques de código,
nunca parafraseados. Nombres de archivo, rutas, variables de entorno y
paquetes siempre en backticks. Los pasos de una guía se numeran en el heading
(`## Paso 1: ...`). Problemas y soluciones van en tabla al final, antes de las
fuentes.

Prettier con `printWidth: 80`: envolver la prosa a 80 columnas.

## Componentes disponibles

Importar solo lo que se use, justo después del frontmatter.

```mdx
import Aside from "@rgglez/astro-aside";
import { Image } from "astro:assets";
import DownloadChecklist from "@rgglez/astro-downloadchecklist";
import DownloadTable from "@rgglez/astro-downloadtable";
import CollapsibleCode from "@rgglez/astro-collapsiblecode";
import YouTubeEmbed from "@rgglez/astro-ytembed";
import P5Sketch from "@rgglez/astro-p5js-sketch";
```

- `<Aside type="note|tip|warning|danger" title="...">` — dejar **línea en
  blanco** antes y después del contenido interno o el MDX no renderiza el
  markdown.
- `<Image src={variable} alt="..." />` — la imagen se importa arriba con alias
  `@/assets/posts/...`; `alt` obligatorio y traducido.
- `<DownloadChecklist filename="checklist-<nombre-base>.csv">` con una lista
  `- [ ]` dentro; el `filename` se traduce con el post.
- Diagramas: bloque cercado ```mermaid, sin importar ninguna librería (lo
  resuelve `remarkMermaidBypass`).
- Fórmulas: LaTeX vía `remarkMath` + `rehypeKatex` (`$...$`, `$$...$$`).
- Código: bloques cercados con lenguaje; los resalta Shiki.

## Imagen de cabecera

Cada post lleva `header.webp` en su carpeta de assets. Se genera con este
prompt base, **invariable**, más una frase final que describe el contenido:

> Genera una imagen apta tanto para og:image como para hero header de un blog
> post. Fondo blanco. Trazos negros. Escala de grises. Caricaturezco y
> minimalista.

Al escribir un post nuevo, proponer la frase específica que se le añade al
prompt (qué debe aparecer en la imagen). No generar la imagen: yo la produzco.

## Verificación

Antes de dar por terminado un post:

```bash
cd src && bun run build
```

Falla el build si el frontmatter no cumple el schema o si una ruta de imagen
no resuelve. Los archivos que empiezan con `_` quedan fuera de la colección
(`**/[^_]*.{md,mdx}`), por eso `_template.mdx` no se publica.
