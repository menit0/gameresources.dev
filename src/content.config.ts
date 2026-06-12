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

const audio = defineCollection({
  loader: file("src/content/audio/audio.json"),
  schema: collectionSchema,
});

const backend = defineCollection({
  loader: file("src/content/backend/backend.json"),
  schema: collectionSchema,
});

const ui = defineCollection({
  loader: file("src/content/ui/ui.json"),
  schema: collectionSchema,
});

const organization = defineCollection({
  loader: file("src/content/organization/organization.json"),
  schema: collectionSchema,
});

const marketing = defineCollection({
  loader: file("src/content/marketing/marketing.json"),
  schema: collectionSchema,
});

const twod = defineCollection({
  loader: file("src/content/2d/2d.json"),
  schema: collectionSchema,
});

const code = defineCollection({
  loader: file("src/content/code/code.json"),
  schema: collectionSchema,
});

const media = defineCollection({
  loader: file("src/content/media/media.json"),
  schema: collectionSchema,
});

const jobs = defineCollection({
  loader: file("src/content/jobs/jobs.json"),
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
  media,
  jobs,
};
