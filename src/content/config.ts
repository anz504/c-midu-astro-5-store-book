import { defineCollection, z } from 'astro:content';

// z -> zod schema
const booksCollections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    year: z.number(),
    readtime: z.number(),
    description: z.string(),
    img: z.string(),
    buy: z.object({
      spain: z.string().url(),
      usa: z.string().url(),
    }).optional(),
  }),
});

export const collections = {
  books: booksCollections,
};