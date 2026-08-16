#!/usr/bin/env node
/**
 * Fetch public repos for the portfolio JSON.
 * Usage (from Astro project root `src/`): node scripts/sync-portfolio.mjs
 * Auth: optional GITHUB_TOKEN env (higher rate limit).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "src/data/portfolio/repos.json");
const configPath = join(root, "src/data/portfolio/config.ts");

function loadConfig() {
  const src = readFileSync(configPath, "utf8");
  const user = src.match(/githubUser:\s*"([^"]+)"/)?.[1] ?? "rgglez";
  const topicAllowlist = [
    ...src.match(/topicAllowlist:\s*\[([^\]]*)\]/s)?.[1].matchAll(/"([^"]+)"/g),
  ].map(m => m[1]);
  const languageOrder = [
    ...src.match(/languageOrder:\s*\[([^\]]*)\]/s)?.[1].matchAll(/"([^"]+)"/g),
  ].map(m => m[1]);
  const forks = /forks:\s*true/.test(src);
  const archived = /archived:\s*true/.test(src);
  const names = [
    ...src.match(/names:\s*\[([^\]]*)\]/s)?.[1].matchAll(/"([^"]+)"/g) ?? [],
  ].map(m => m[1]);
  return {
    githubUser: user,
    topicAllowlist,
    languageOrder,
    exclude: { forks, archived, names },
  };
}

async function fetchRepos(user, token) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "rgglez-portfolio-sync",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const repos = [];
  let page = 1;
  for (;;) {
    const url = `https://api.github.com/users/${user}/repos?type=owner&per_page=100&page=${page}&sort=updated`;
    const res = await fetch(url, { headers });
    if (!res.ok) {
      throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
    }
    const batch = await res.json();
    if (!batch.length) break;
    repos.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }
  return repos;
}

function build(raw, config) {
  const allow = new Set(config.topicAllowlist);
  const excludeNames = new Set(config.exclude.names);

  const repos = raw
    .filter(r => {
      if (config.exclude.forks && r.fork) return false;
      if (config.exclude.archived && r.archived) return false;
      if (excludeNames.has(r.name)) return false;
      return true;
    })
    .map(r => {
      const topics = (r.topics ?? []).filter(t => allow.has(t));
      return {
        name: r.name,
        description: r.description ?? "",
        url: r.html_url,
        homepage: r.homepage || null,
        language: r.language,
        topics,
        stars: r.stargazers_count ?? 0,
        forks: r.forks_count ?? 0,
        archived: !!r.archived,
        pushedAt: r.pushed_at,
      };
    })
    .sort((a, b) => (a.pushedAt < b.pushedAt ? 1 : -1));

  const langSet = new Set();
  const topicSet = new Set();
  for (const r of repos) {
    if (r.language) langSet.add(r.language);
    else langSet.add("Other");
    for (const t of r.topics) topicSet.add(t);
  }

  const order = config.languageOrder;
  const languages = [
    ...order.filter(l => langSet.has(l)),
    ...[...langSet].filter(l => !order.includes(l) && l !== "Other").sort(),
    ...(langSet.has("Other") ? ["Other"] : []),
  ];

  const topics = config.topicAllowlist.filter(t => topicSet.has(t));

  return {
    generatedAt: new Date().toISOString(),
    source: `github:${config.githubUser}`,
    languages,
    topics,
    repos,
  };
}

const config = loadConfig();
const raw = await fetchRepos(config.githubUser, process.env.GITHUB_TOKEN);
const data = build(raw, config);
const json = `${JSON.stringify(data, null, 2)}\n`;
writeFileSync(outPath, json);
console.log(`Wrote ${data.repos.length} repos → ${outPath}`);
