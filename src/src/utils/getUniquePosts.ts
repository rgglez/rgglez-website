import type { CollectionEntry } from "astro:content";
import { getTranslationKey, getFileLang } from "./getTranslations";
import { SITE } from "@/config";

/**
 * Deduplicate posts by translationKey, keeping the best language version per article.
 * Priority: preferredLang > defaultLang > supportedLangs order > first available.
 * Input must already be sorted (order is preserved).
 */
const getUniquePosts = (
  posts: CollectionEntry<"blog">[],
  preferredLang?: string
): CollectionEntry<"blog">[] => {
  const groups = new Map<string, CollectionEntry<"blog">[]>();
  const insertionOrder: string[] = [];

  posts.forEach(post => {
    const key = getTranslationKey(post.filePath);
    if (!groups.has(key)) {
      groups.set(key, []);
      insertionOrder.push(key);
    }
    groups.get(key)!.push(post);
  });

  const preferredLangs = [
    ...(preferredLang && preferredLang !== SITE.defaultLang ? [preferredLang] : []),
    SITE.defaultLang,
    ...(SITE.supportedLangs as readonly string[]),
  ];

  return insertionOrder.map(key => {
    const group = groups.get(key)!;
    for (const lang of preferredLangs) {
      const found = group.find(p => getFileLang(p.filePath) === lang);
      if (found) return found;
    }
    return group[0];
  });
};

export default getUniquePosts;
