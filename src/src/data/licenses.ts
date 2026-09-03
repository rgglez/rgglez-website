export const DEFAULT_LICENSE = "CC BY-NC-ND 4.0";

export const DEFAULT_LICENSE_URL =
  "https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.en";

/** Same-origin copies of license legal codes, keyed by front matter `license`. */
export const LOCAL_LICENSE_PATHS: Record<string, string> = {
  [DEFAULT_LICENSE]: "/licenses/cc-by-nc-nd-4.0.txt",
};

export function getLocalLicensePath(name?: string): string | undefined {
  if (!name) return LOCAL_LICENSE_PATHS[DEFAULT_LICENSE];
  return LOCAL_LICENSE_PATHS[name];
}
