import { defineCollection, z } from 'astro:content';
import client from '../tina/__generated__/client';

const stories = defineCollection({
  loader: async () => {
    const postsResponse = await client.queries.storiesConnection();

    // Map Tina posts to the correct format for Astro
    return postsResponse.data.storiesConnection.edges
      ?.filter(post => !!post)
      .map(post => {
        const node = post?.node;

        return {
          ...node,
          id: node?._sys.relativePath.replace(/\.mdx?$/, ''), // Generate clean URLs
          tinaInfo: node?._sys, // Include Tina system info if needed
        };
      });
  },
  schema: z.object({
    tinaInfo: z.object({
      filename: z.string(),
      basename: z.string(),
      path: z.string(),
      relativePath: z.string(),
    }),
    title: z.string(),
    body: z.any(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().nullish(),
  }),
});

export const collections = { stories };
