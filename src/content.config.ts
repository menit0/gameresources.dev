import { defineCollection } from "astro/content/config";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const collectionSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
});

const engines = defineCollection({
  loader: file("src/content/engines/engines.json"),
  schema: collectionSchema,
});

const threed = defineCollection({
  loader: file("src/content/3d/3d.json"),
  schema: collectionSchema,
});

const assets = defineCollection({
  loader: file("src/content/assets/assets.json"),
  schema: collectionSchema,
});

export const collections = {
  engines,
  threed,
  assets,
};
