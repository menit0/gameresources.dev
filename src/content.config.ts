import { defineCollection } from "astro/content/config";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const engines = defineCollection({
  loader: file("src/content/engines/engines.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    url: z.string(),
  }),
});

export const collections = {
  engines,
};
