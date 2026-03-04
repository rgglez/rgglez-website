import type { CollectionEntry } from "astro:content";
import { getPath } from "@/utils/getPath";

export const getFileLang = (fp: string | undefined): string => {
  if (!fp) return "";
  const parts = fp.split("/");
  return parts[parts.length - 2] ?? "";
};

export const getTranslationKey = (fp: string | undefined): string => {
  if (!fp) return "";
  const parts = fp.split("/");
  return [...parts.slice(0, -2), parts[parts.length - 1]].join("/");
};

export const getTranslations = (
  post: CollectionEntry<"blog">,
  allPosts: CollectionEntry<"blog">[]
) => {
  const currentLang = getFileLang(post.filePath);
  const currentKey = getTranslationKey(post.filePath);

  return allPosts
    .filter(p => p.filePath && getTranslationKey(p.filePath) === currentKey)
    .map(p => ({
      lang: getFileLang(p.filePath),
      href: getPath(p.id, p.filePath),
      isCurrent: getFileLang(p.filePath) === currentLang,
    }))
    .sort((a, b) => a.lang.localeCompare(b.lang));
};
