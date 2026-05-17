#!/usr/bin/env bun
import { readdir, readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import yaml from "js-yaml";
import { generateOgImageForPost } from "../src/utils/generateOgImages.ts";
import { getPath } from "../src/utils/getPath.ts";

const ROOT = resolve(import.meta.dirname, "..");
const BLOG_DIR = join(ROOT, "src/data/blog");
const OUT_BASE = join(ROOT, "dist/client");

type Frontmatter = {
  slug?: string;
  title?: string;
  author?: string;
  draft?: boolean;
  ogImage?: string;
};

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async e => {
      const full = join(dir, e.name);
      if (e.isDirectory()) return walk(full);
      return e.name.endsWith(".mdx") || e.name.endsWith(".md") ? [full] : [];
    })
  );
  return files.flat();
}

function parseFrontmatter(src: string): Frontmatter | null {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  return yaml.load(m[1]) as Frontmatter;
}

async function main() {
  const files = await walk(BLOG_DIR);
  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (const filePath of files) {
    const src = await readFile(filePath, "utf8");
    const fm = parseFrontmatter(src);
    if (!fm) {
      console.warn(`[og] no frontmatter: ${filePath}`);
      continue;
    }
    if (fm.draft || fm.ogImage) {
      skipped++;
      continue;
    }
    if (!fm.slug || !fm.title) {
      console.warn(`[og] missing slug/title: ${filePath}`);
      continue;
    }

    const urlPath = getPath(fm.slug, filePath);
    const outPath = join(OUT_BASE, urlPath, "index.png");

    if (existsSync(outPath)) {
      try {
        const [srcStat, outStat] = await Promise.all([
          stat(filePath),
          stat(outPath),
        ]);
        if (outStat.mtimeMs >= srcStat.mtimeMs) {
          skipped++;
          continue;
        }
      } catch {
        /* regenerate */
      }
    }

    const post = {
      id: fm.slug,
      filePath,
      data: {
        title: fm.title,
        author: fm.author ?? "",
      },
    };

    try {
      const buf = await generateOgImageForPost(post as never);
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, buf);
      generated++;
      console.log(`[og] ${urlPath}/index.png`);
    } catch (err) {
      failed++;
      console.error(`[og] FAIL ${filePath}:`, (err as Error).message);
    }
  }

  console.log(
    `[og] done: ${generated} generated, ${skipped} skipped, ${failed} failed`
  );
  if (failed > 0) process.exit(1);
}

main();
