# Portfolio

Public GitHub repositories shown on the site under `/{lang}/portfolio`, grouped by **language** and curated **topics**.

UI copy is English only for now (i18n via gettext is a future TODO).

## How it works

1. A sync script calls the GitHub API and writes a static JSON file.
2. Astro imports that JSON at **build time** and prerenders the portfolio page.
3. Tabs in the browser only switch panels; there is **no** client-side call to GitHub.

```
GitHub API → scripts/sync-portfolio.mjs → src/src/data/portfolio/repos.json
                                              ↓
                                    astro build → /{lang}/portfolio
```

## Key paths

| Path | Role |
|------|------|
| `src/src/data/portfolio/config.ts` | GitHub user, topic allowlist, language order, exclude rules |
| `src/src/data/portfolio/repos.json` | Generated data (committed; consumed at build) |
| `src/src/data/portfolio/types.ts` | TypeScript types for the JSON |
| `src/scripts/sync-portfolio.mjs` | Fetch + filter + write `repos.json` |
| `src/src/pages/[lang]/portfolio/index.astro` | Portfolio page (prerendered) |
| `src/src/components/PortfolioTabs.astro` | Languages / Topics tabs + repo list |
| `src/src/components/Header.astro` | Nav link **Portfolio** |
| `.github/workflows/portfolio-sync.yml` | Weekly (and manual) sync + commit |

Astro project root is the `src/` directory.

## Configuration

Edit `src/src/data/portfolio/config.ts`:

- **`githubUser`** — GitHub username whose public owned repos are listed.
- **`topicAllowlist`** — Only these GitHub **topics** become topic tabs (and are kept on each repo in the JSON). Other topics are dropped.
- **`languageOrder`** — Preferred order of language tabs; any other languages found are appended alphabetically; `Other` (null language) last if present.
- **`exclude.forks`** / **`exclude.archived`** — Skip forks and/or archived repos when `true`.
- **`exclude.names`** — Exact repo names to hide.

After changing config, re-run the sync script so `repos.json` matches.

### Tabs behavior

- **Languages** — One tab per language present in the filtered repos (primary language from GitHub).
- **Topics** — One tab per allowlisted topic that appears on at least one repo.
- A repo can appear under several topic tabs and under one language tab.
- Empty tabs are not shown.

### What appears on GitHub

For a repo to show under a topic tab, set that topic on the repository (GitHub → About → Topics). Languages come from GitHub’s detected primary language.

## Manual sync

From the Astro project root (`src/`):

```bash
cd src
node scripts/sync-portfolio.mjs
# or
npm run sync:portfolio
```

Optional: set `GITHUB_TOKEN` for a higher API rate limit (public repos work unauthenticated with lower limits):

```bash
export GITHUB_TOKEN=ghp_...
node scripts/sync-portfolio.mjs
```

The script writes `src/src/data/portfolio/repos.json`. Commit it (or let the workflow commit) and redeploy so the site picks up changes.

## Automated sync (GitHub Actions)

Workflow: `.github/workflows/portfolio-sync.yml` (repo root).

- **Schedule:** Mondays 06:00 UTC (`0 6 * * 1`).
- **Manual:** Actions → **Portfolio sync** → Run workflow.
- Runs `node scripts/sync-portfolio.mjs` with `working-directory: src`.
- If `repos.json` changed, commits as `github-actions[bot]` with message `chore(portfolio): sync GitHub repos` and pushes.

Requires `contents: write` (already set). Uses `secrets.GITHUB_TOKEN`.

If your deploy runs on push to the default branch, that commit triggers a rebuild. Otherwise trigger deploy after the sync commit.

## Local preview

```bash
cd src
node scripts/sync-portfolio.mjs   # optional refresh
npm run dev                       # or bun / your usual runner
```

Open e.g. `http://localhost:4321/en/portfolio` (lang prefix from `SITE.supportedLangs`).

## Deploy notes

- Portfolio pages are **prerendered** (`export const prerender = true`). Fresh data requires a new build after `repos.json` updates.
- No Cloudflare secrets or runtime GitHub API access are required for the portfolio page.

## Out of scope / TODOs

- UI string i18n (planned: gettext).
- Private repositories.
- Client-side live fetch of GitHub or remote JSON.
