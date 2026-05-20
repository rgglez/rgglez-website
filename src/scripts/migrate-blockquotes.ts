#!/usr/bin/env bun
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve, relative } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const BLOG_DIR = join(ROOT, "src/data/blog");
const APPLY = process.argv.includes("--apply");
const ASIDE_IMPORT = `import Aside from "@/components/Aside.astro";`;

type Variant = "note" | "tip" | "caution" | "danger";

const PREFIX_PATTERNS: { re: RegExp; variant: Variant }[] = [
  { re: /^(?:\*\*)?(tip|consejo|pro\s*tip)(?:\*\*)?\s*[:.\-]\s*/i, variant: "tip" },
  {
    re: /^(?:\*\*)?(importante|important|atenci[oó]n|warning|aviso|requisito(?:\s+de\s+[^:]+)?|cuidado|precauci[oó]n)(?:\*\*)?\s*[:.\-]\s*/i,
    variant: "caution",
  },
  {
    re: /^(?:\*\*)?(peligro|danger|cr[ií]tico|critical|alerta)(?:\*\*)?\s*[:.\-]\s*/i,
    variant: "danger",
  },
  { re: /^(?:\*\*)?(nota|note|info|informaci[oó]n)(?:\*\*)?\s*[:.\-]\s*/i, variant: "note" },
];

const EMOJI_MAP: { chars: string[]; variant: Variant }[] = [
  { chars: ["💡"], variant: "tip" },
  { chars: ["⚠️", "⚠", "🟡", "🟠"], variant: "caution" },
  { chars: ["❗", "🔴", "🚨"], variant: "danger" },
  { chars: ["ℹ️", "ℹ", "📌", "📝"], variant: "note" },
];

function detectVariantAndStrip(firstLine: string): { variant: Variant; stripped: string } {
  for (const { re, variant } of PREFIX_PATTERNS) {
    if (re.test(firstLine)) {
      return { variant, stripped: firstLine.replace(re, "") };
    }
  }
  for (const { chars, variant } of EMOJI_MAP) {
    for (const ch of chars) {
      if (firstLine.startsWith(ch)) {
        return { variant, stripped: firstLine.slice(ch.length).replace(/^\s+/, "") };
      }
    }
  }
  return { variant: "note", stripped: firstLine };
}

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = await Promise.all(
    entries.map(async e => {
      const full = join(dir, e.name);
      if (e.isDirectory()) return walk(full);
      return e.name.endsWith(".mdx") || e.name.endsWith(".md") ? [full] : [];
    })
  );
  return out.flat();
}

type Block = { startLine: number; endLine: number; innerLines: string[] };

function findBlockquoteBlocks(lines: string[]): Block[] {
  const blocks: Block[] = [];
  let inFence = false;
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      i++;
      continue;
    }
    if (!inFence && /^>(?: |$)/.test(line)) {
      const start = i;
      const innerLines: string[] = [];
      while (i < lines.length && /^>(?: |$)/.test(lines[i])) {
        innerLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ startLine: start, endLine: i - 1, innerLines });
      continue;
    }
    i++;
  }
  return blocks;
}

function buildAsideReplacement(block: Block): {
  variant: Variant;
  replacement: string[];
} {
  const inner = [...block.innerLines];
  let firstIdx = inner.findIndex(l => l.trim() !== "");
  if (firstIdx === -1) firstIdx = 0;
  const { variant, stripped } = detectVariantAndStrip(inner[firstIdx] ?? "");
  if (stripped.trim() === "") {
    inner.splice(firstIdx, 1);
  } else {
    inner[firstIdx] = stripped;
  }
  while (inner.length && inner[0].trim() === "") inner.shift();
  while (inner.length && inner[inner.length - 1].trim() === "") inner.pop();

  const replacement = [`<Aside type="${variant}">`, "", ...inner, "", `</Aside>`];
  return { variant, replacement };
}

function ensureImport(lines: string[]): { lines: string[]; inserted: boolean } {
  if (lines.some(l => l.includes(`from "@/components/Aside.astro"`))) {
    return { lines, inserted: false };
  }
  let fmEnd = -1;
  if (lines[0] === "---") {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === "---") {
        fmEnd = i;
        break;
      }
    }
  }
  const out = [...lines];
  if (fmEnd >= 0) {
    const insertion = ["", ASIDE_IMPORT];
    if ((out[fmEnd + 1] ?? "").trim() !== "") insertion.push("");
    out.splice(fmEnd + 1, 0, ...insertion);
  } else {
    const insertion = [ASIDE_IMPORT];
    if ((out[0] ?? "").trim() !== "") insertion.push("");
    out.unshift(...insertion);
  }
  return { lines: out, inserted: true };
}

type FileStats = {
  path: string;
  counts: Record<Variant, number>;
  total: number;
  importInserted: boolean;
  sample?: { before: string; after: string };
};

function processFile(content: string): { newContent: string; stats: Omit<FileStats, "path"> } {
  const lines = content.split("\n");
  const blocks = findBlockquoteBlocks(lines);
  const counts: Record<Variant, number> = { note: 0, tip: 0, caution: 0, danger: 0 };

  if (blocks.length === 0) {
    return {
      newContent: content,
      stats: { counts, total: 0, importInserted: false },
    };
  }

  const out: string[] = [];
  let cursor = 0;
  let sample: FileStats["sample"];

  for (const block of blocks) {
    while (cursor < block.startLine) out.push(lines[cursor++]);
    const { variant, replacement } = buildAsideReplacement(block);
    counts[variant]++;
    if (!sample) {
      const beforeBlock = lines.slice(block.startLine, block.endLine + 1).join("\n");
      sample = { before: beforeBlock, after: replacement.join("\n") };
    }
    out.push(...replacement);
    cursor = block.endLine + 1;
  }
  while (cursor < lines.length) out.push(lines[cursor++]);

  const { lines: finalLines, inserted } = ensureImport(out);
  return {
    newContent: finalLines.join("\n"),
    stats: {
      counts,
      total: blocks.length,
      importInserted: inserted,
      sample,
    },
  };
}

async function main() {
  const files = await walk(BLOG_DIR);
  const results: FileStats[] = [];
  const totals: Record<Variant, number> = { note: 0, tip: 0, caution: 0, danger: 0 };
  let modifiedCount = 0;

  for (const path of files) {
    const content = await readFile(path, "utf8");
    const { newContent, stats } = processFile(content);
    if (stats.total === 0) continue;
    results.push({ path, ...stats });
    for (const k of Object.keys(totals) as Variant[]) totals[k] += stats.counts[k];
    if (APPLY && newContent !== content) {
      await writeFile(path, newContent);
      modifiedCount++;
      console.log(`[modified] ${relative(ROOT, path)}`);
    }
  }

  if (!APPLY) {
    for (const r of results) {
      console.log(
        `${relative(ROOT, r.path)}: ${r.total} blocks → ${JSON.stringify(r.counts)}${r.importInserted ? "  (+import)" : ""}`
      );
      if (r.sample) {
        console.log("  ── BEFORE ──");
        console.log(r.sample.before.split("\n").map(l => `    ${l}`).join("\n"));
        console.log("  ── AFTER ──");
        console.log(r.sample.after.split("\n").map(l => `    ${l}`).join("\n"));
      }
    }
  }

  console.log("\n=== summary ===");
  console.log(`Files with blockquotes: ${results.length}`);
  console.log(`Total blocks:           ${Object.values(totals).reduce((a, b) => a + b, 0)}`);
  console.log(`  note:    ${totals.note}`);
  console.log(`  tip:     ${totals.tip}`);
  console.log(`  caution: ${totals.caution}`);
  console.log(`  danger:  ${totals.danger}`);
  if (APPLY) {
    console.log(`Files written: ${modifiedCount}`);
  } else {
    console.log(`(dry-run; pass --apply to write changes)`);
  }
}

main();
