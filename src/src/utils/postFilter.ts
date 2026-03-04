import type { CollectionEntry } from "astro:content";
import { SITE } from "@/config";

const postFilter = ({ data, filePath }: CollectionEntry<"blog">) => {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  const parts = (filePath ?? "").split("/");
  const lang = parts[parts.length - 2];
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed) && lang === "es";
};

export default postFilter;
