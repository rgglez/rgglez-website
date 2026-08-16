export const PORTFOLIO = {
  githubUser: "rgglez",
  /** Topics that generate tabs; others ignored in the UI */
    topicAllowlist: ["astro", "pddl", "linux", "ai", "github", "ansible", "nagios",
        "svelte", "yii", "zitadel", "jabber", "aliyun", "cloudflare", "letsencrypt",
        "i18n", "music", "GIS", "database", "sysadmin", "academic", "graphics"],
  /** Fixed language tab order; missing langs append alphabetically */
  languageOrder: ["Go", "Python", "TypeScript", "PHP", "JavaScript", "Perl"],
  exclude: {
    forks: true,
    archived: true,
    names: [] as string[],
  },
} as const;
