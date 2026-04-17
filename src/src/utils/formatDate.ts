import { SITE } from "@/config";

export function formatDate(
  date: string | Date,
  lang: string = SITE.lang,
  timezone: string = SITE.timezone
): string {
  return new Intl.DateTimeFormat(lang || SITE.lang, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: timezone,
  }).format(new Date(date));
}

export function getMonthName(
  monthIndex: number,
  lang: string = SITE.lang
): string {
  return new Intl.DateTimeFormat(lang || SITE.lang, { month: "long" }).format(
    new Date(2000, monthIndex, 1)
  );
}
