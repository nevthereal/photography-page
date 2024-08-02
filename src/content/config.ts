import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    author: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
