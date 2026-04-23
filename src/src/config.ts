export const SITE = {
  website: "https://rodolfo.gg/",
  author: "Rodolfo González González",
  profile: "https://rodolfo.gg/",
  desc: "Sitio web de Rodolfo González González",
  title: "rodolfo.gg",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 8,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/rgglez/rgglez-website/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  defaultLang: "en", // fallback when browser language is not in supportedLangs
  supportedLangs: ["es", "en", "fr", "de"], // extend this array to add more languages
  timezone: "America/Mexico_City", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
