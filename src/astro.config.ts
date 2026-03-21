import { defineConfig, envField, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
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

// https://astro.build/config
export default defineConfig({
  output: 'server',

  site: SITE.website,

  integrations: [
    sitemap({
        filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
    expressiveCode({
        themes: ['dracula', 'github-light'],
    }),
    mdx(),
  ],

  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkToc, remarkMath, [remarkCollapse, { test: "Table of contents" }]],
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
    build: {
      rollupOptions: {
        external: [/\.node$/],
      },
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