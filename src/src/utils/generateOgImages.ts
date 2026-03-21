import type { Resvg as ResvgType } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

// Use a non-literal dynamic import so Rollup/bundlers cannot statically analyze
// this dependency. @resvg/resvg-js uses native .node binaries that cannot be
// bundled for Cloudflare Workers. These pages are prerender=true (Node.js
// build-time only), so the Worker never executes this code path.
async function svgBufferToPngBuffer(svg: string) {
  const resvgPkg = "@resvg/resvg-js";
  const { Resvg } = (await import(/* @vite-ignore */ resvgPkg)) as {
    Resvg: typeof ResvgType;
  };
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await postOgImage(post);
  return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite() {
  const svg = await siteOgImage();
  return svgBufferToPngBuffer(svg);
}
