import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";
import postFilter from "./postFilter";

const getTagsWithCount = (posts: CollectionEntry<"blog">[]) => {
  const map = new Map<string, { tagName: string; count: number }>();
  posts.filter(postFilter).forEach(post => {
    post.data.tags.forEach(tag => {
      const slug = slugifyStr(tag);
      const entry = map.get(slug);
      if (entry) entry.count++;
      else map.set(slug, { tagName: tag, count: 1 });
    });
  });
  return [...map.entries()]
    .map(([tag, { tagName, count }]) => ({ tag, tagName, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
};

export default getTagsWithCount;
