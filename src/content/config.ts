import { defineCollection, z } from 'astro:content';

const destinosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featuredImage: z.string(),
    galleryImages: z.array(z.string()).optional(),
    price: z.number().optional(),
    rating: z.number().optional(),
    reviewCount: z.number().optional(),
    isPromo: z.boolean().optional(),
    location: z.string().optional(),
    country: z.string().optional(),
    currency: z.string().optional(),
    tripDates: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'destinos': destinosCollection,
};
