/**
 * Get the URL path for a blog post.
 *
 * In Astro 5 with the glob loader, `id` is the frontmatter `slug` field
 * (e.g. "jean-michel-jarre-origen-musica-electronica-moderna"), so we derive
 * year / month / lang from `filePath` instead.
 *
 * filePath structure: .../{BLOG_PATH}/{year}/{month}/{lang}/{filename}.{ext}
 *
 * @param id          - entry id (= frontmatter slug)
 * @param filePath    - absolute path to the source file
 * @param includeBase - true  → "/{lang}/posts/{year}/{month}/{id}"
 *                      false → "{year}/{month}/{id}"  (for [..slug] params)
 */
export function getPath(
  id: string,
  filePath?: string,
  includeBase = true
): string {
  if (filePath) {
    const parts = filePath.split("/");
    // parts from end: [-1]=filename.ext  [-2]=lang  [-3]=month  [-4]=year
    const lang  = parts[parts.length - 2] ?? "";
    const month = parts[parts.length - 3] ?? "";
    const year  = parts[parts.length - 4] ?? "";

    if (includeBase) {
      return `/${lang}/posts/${year}/${month}/${id}`;
    }
    return `${year}/${month}/${id}`;
  }

  // Fallback when filePath is unavailable: treat id as "year/month/lang/slug"
  const segs = id.split("/");
  const lang     = segs.length >= 2 ? segs[segs.length - 2] : "";
  const slug     = segs[segs.length - 1] ?? id;
  const dirSegs  = segs.slice(0, -2);

  if (includeBase) {
    return ["", lang, "posts", ...dirSegs, slug].join("/");
  }
  return [...dirSegs, slug].join("/");
}
