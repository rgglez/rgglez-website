import { defineGettext } from "@rgglez/astro-i18n-gettext";
import { SITE } from "@/config";
import es from "./es/messages.json";
import en from "./en/messages.json";
import fr from "./fr/messages.json";
import de from "./de/messages.json";
import zh from "./zh/messages.json";

// Importing useGettext from here (not from the package) guarantees the
// catalogs are registered before the first translation.
export const useGettext = defineGettext({
  catalogs: { es, en, fr, de, zh },
  defaultLang: SITE.defaultLang,
});

export { sprintf } from "@rgglez/astro-i18n-gettext";
