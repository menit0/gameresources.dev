import { defineCollection } from "astro/content/config";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const collectionSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
});

const engines = defineCollection({
  loader: file("src/content/data/engines.json"),
  schema: collectionSchema,
});

const threed = defineCollection({
  loader: file("src/content/data/3d.json"),
  schema: collectionSchema,
});

const assets = defineCollection({
  loader: file("src/content/data/assets.json"),
  schema: collectionSchema,
});

const audio = defineCollection({
  loader: file("src/content/data/audio.json"),
  schema: collectionSchema,
});

const backend = defineCollection({
  loader: file("src/content/data/backend.json"),
  schema: collectionSchema,
});

const ui = defineCollection({
  loader: file("src/content/data/ui.json"),
  schema: collectionSchema,
});

const organization = defineCollection({
  loader: file("src/content/data/organization.json"),
  schema: collectionSchema,
});

const marketing = defineCollection({
  loader: file("src/content/data/marketing.json"),
  schema: collectionSchema,
});

const twod = defineCollection({
  loader: file("src/content/data/2d.json"),
  schema: collectionSchema,
});

const code = defineCollection({
  loader: file("src/content/data/code.json"),
  schema: collectionSchema,
});

const jobs = defineCollection({
  loader: file("src/content/data/jobs.json"),
  schema: collectionSchema,
});

const learning = defineCollection({
  loader: file("src/content/data/learning.json"),
  schema: collectionSchema,
});

export const collections = {
  engines,
  threed,
  assets,
  audio,
  backend,
  ui,
  organization,
  marketing,
  twod,
  code,
  jobs,
  learning,
};
