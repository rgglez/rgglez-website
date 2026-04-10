import { type CollectionEntry } from "astro:content";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

async function svgBufferToPngBuffer(svg: string) {
  // Dynamic non-literal import prevents Rollup from bundling sharp into the
  // Miniflare prerender server chunk. Sharp uses native binaries and cannot
  // run inside a Workers/Miniflare environment; it is only called at build
  // time via Node.js.
  const sharpPkg = "sharp";
  const { default: sharp } = (await import(/* @vite-ignore */ sharpPkg)) as {
    default: typeof import("sharp");
  };
  return sharp(Buffer.from(svg)).png().toBuffer();
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await postOgImage(post);
  return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite() {
  const svg = await siteOgImage();
  return svgBufferToPngBuffer(svg);
}
