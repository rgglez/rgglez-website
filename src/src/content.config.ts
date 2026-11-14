import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const INTRO_PATH = "src/data/intro";
export const CV_PATH = "src/data/cv";

const intro = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: `./${INTRO_PATH}` }),
  schema: z.object({}),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      license: z.string().optional(),
      licenseUrl: z.string().optional(),
      lang: z.string().optional(),
      slug: z.string().optional(),
    }),
});

// ponytail: only the fields the CV page renders. Full validation lives in
// rgglez-cv/schema.rgglez.json; add fields here when the page shows them.
const tags = z.array(z.string()).optional();
const piece = { tags };
const dates = {
  startDate: z.string().optional(),
  endDate: z.string().optional(),
};
const location = z
  .union([
    z.string(),
    z.object({
      city: z.string().optional(),
      region: z.string().optional(),
      countryCode: z.string().optional(),
    }),
  ])
  .optional();
const highlights = z
  .array(z.object({ highlight: z.string(), ...piece }))
  .default([]);
const keywords = z.array(z.string()).default([]);

const cv = defineCollection({
  loader: glob({ pattern: "resume-*.json", base: `./${CV_PATH}` }),
  schema: z.object({
    basics: z.object({
      name: z.string(),
      label: z.string().optional(),
      email: z.string().optional(),
      url: z.string().optional(),
      summary: z.string().optional(),
      location,
      profiles: z
        .array(z.object({ network: z.string(), url: z.string() }))
        .default([]),
    }),
    objective: z.string().optional(),
    work: z
      .array(
        z.object({
          name: z.string(),
          position: z.string().optional(),
          location,
          workMode: z.enum(["remote", "onsite", "hybrid"]).optional(),
          url: z.string().optional(),
          summary: z.string().optional(),
          ...dates,
          highlights,
          keywords,
          tags,
        })
      )
      .default([]),
    projects: z
      .array(
        z.object({
          name: z.string(),
          summary: z.string().optional(),
          url: z.string().optional(),
          roles: z.array(z.string()).default([]),
          ...dates,
          highlights,
          keywords,
          tags,
        })
      )
      .default([]),
    education: z
      .array(
        z.object({
          institution: z.string(),
          url: z.string().optional(),
          area: z.string().optional(),
          studyType: z.string().optional(),
          score: z.string().optional(),
          summary: z.string().optional(),
          ...dates,
          courses: z
            .array(z.object({ course: z.string(), ...piece }))
            .default([]),
          tags,
        })
      )
      .default([]),
    volunteer: z
      .array(
        z.object({
          organization: z.string(),
          position: z.string().optional(),
          url: z.string().optional(),
          summary: z.string().optional(),
          ...dates,
          highlights,
          tags,
        })
      )
      .default([]),
    skills: z.array(z.object({ name: z.string(), keywords, tags })).default([]),
    languages: z
      .array(z.object({ language: z.string(), fluency: z.string() }))
      .default([]),
    interests: z.array(z.object({ name: z.string(), keywords })).default([]),
    meta: z
      .object({
        lastModified: z.string().optional(),
        exports: z.record(z.string(), z.array(z.string())).default({}),
      })
      .default({ exports: {} }),
  }),
});

export const collections = { blog, intro, cv };
