import { defineConfig, envField, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mermaid from 'astro-mermaid';
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

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',

  site: SITE.website,

  integrations: [
    sitemap({
        filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
    mermaid({
        theme: 'forest',
        autoTheme: false,
        mermaidConfig: {
            startOnLoad: false,
            logLevel: 'error',
            securityLevel: 'strict'
        }
    }),
    expressiveCode({
        themes: ['dracula', 'github-light'],
    }),
    mdx({
        extendMarkdownConfig: true,
        remarkPlugins: [
            [remarkToc, { heading: "(table[ -]of[ -])?contents?|toc|tabla de contenido|table des matières" }],
             remarkMath,
            [remarkCollapse, { test: /^(table of contents|tabla de contenido|table des mati[eè]res)$/i, summary: (str: string) => str }],
        ],
        rehypePlugins: [rehypeKatex],
    }),
    react(),
  ],

  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [
      [remarkToc, { heading: "(table[ -]of[ -])?contents?|toc|tabla de contenido|table des matières" }],
      remarkMath,
      [remarkCollapse, { test: /^(table of contents|tabla de contenido|table des mati[eè]res)$/i, summary: (str: string) => str }],
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