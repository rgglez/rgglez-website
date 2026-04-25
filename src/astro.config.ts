import { defineConfig, envField, fontProviders } from "astro/config";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { visit } from 'unist-util-visit';
import expressiveCode from 'astro-expressive-code';
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import { SITE } from "./src/config";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";
import type { AstroIntegration } from "astro";

import react from "@astrojs/react";

function fontPreloadIntegration(): AstroIntegration {
  return {
    name: 'font-preload',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const clientDir = resolve(dir.pathname, '..', 'client');

        async function findHtmlFiles(dirPath: string): Promise<string[]> {
          const entries = await readdir(dirPath, { withFileTypes: true });
          const files: string[] = [];
          for (const entry of entries) {
            const full = join(dirPath, entry.name);
            if (entry.isDirectory()) {
              files.push(...await findHtmlFiles(full));
            } else if (entry.name.endsWith('.html')) {
              files.push(full);
            }
          }
          return files;
        }

        const htmlFiles = await findHtmlFiles(clientDir).catch(() => [] as string[]);
        if (!htmlFiles.length) return;

        const html = await readFile(htmlFiles[0], 'utf-8');
        const fontFaceRegex = /@font-face\{[^}]+\}/g;
        const srcRegex = /src:url\("([^"]+)"\)/;
        let fontUrl: string | null = null;

        for (const match of html.matchAll(fontFaceRegex)) {
          const block = match[0];
          if (/font-weight:400/.test(block) && /font-style:normal/.test(block)) {
            const src = block.match(srcRegex);
            if (src) { fontUrl = src[1]; break; }
          }
        }

        if (!fontUrl) {
          logger.warn('font-preload: Could not extract font URL from built HTML');
          return;
        }

        const preloadTag = `<link rel="preload" as="font" type="font/woff2" href="${fontUrl}" crossorigin>`;
        const linkHeader = `<${fontUrl}>; rel=preload; as=font; type=font/woff2; crossorigin`;

        // Inject preload into all prerendered HTML files
        let injected = 0;
        for (const file of htmlFiles) {
          const content = await readFile(file, 'utf-8');
          if (content.includes(preloadTag)) continue;
          const updated = content.replace('<meta charset="UTF-8">', `<meta charset="UTF-8">${preloadTag}`);
          if (updated !== content) {
            await writeFile(file, updated);
            injected++;
          }
        }

        // Write _headers for Cloudflare Pages (covers SSR pages too)
        const headersPath = join(clientDir, '_headers');
        await writeFile(headersPath, `/*\n  Link: ${linkHeader}\n`);

        logger.info(`font-preload: preload injected into ${injected} HTML files, _headers written (${fontUrl})`);
      }
    }
  };
}

function remarkMermaidBypass() {
  return (tree: any) => {
    visit(tree, 'code', (node: any, index: number | undefined, parent: any) => {
      if (node.lang === 'mermaid' && parent && typeof index === 'number') {
        parent.children[index] = {
          type: 'html',
          value: `<pre class="mermaid">\n${node.value}\n</pre>`,
        };
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  output: 'server',

  site: SITE.website,

  integrations: [
    fontPreloadIntegration(),
    sitemap({
        filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
    expressiveCode({
        themes: ['dracula', 'github-light'],
    }),
    mdx({
        extendMarkdownConfig: true,
    }),
    react(),
  ],

  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [
      remarkMermaidBypass,
      [remarkToc, { heading: "(table[ -]of[ -])?contents?|toc|tabla de contenido|table des matières|inhaltsverzeichnis" }],
      remarkMath,
      [remarkCollapse, { test: /^(table of contents|tabla de contenido|table des mati[eè]res|inhaltsverzeichnis)$/i, summary: (str: string) => str }],
    ],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },

  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    // eslint-disable-next-line
    // @ts-ignore
    // This will be fixed in Astro 6 with Vite 7 support
    // See: https://github.com/withastro/astro/issues/14030
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    ssr: {
      external: ["@resvg/resvg-js"],
    },
  },

  image: {
    responsiveStyles: true,
    layout: "constrained",
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },

  fonts: [
    {
      name: "Funnel Sans",
      cssVariable: "--font-funnel-sans",
      provider: fontProviders.google(),
      fallbacks: ["monospace"],
      weights: [300, 400, 500, 600, 700],
      styles: ["normal", "italic"],
    },
  ],

  adapter: cloudflare(),
});
