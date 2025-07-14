import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

// Zod schema for fruits response
const GetFruitsResponseZod = z.object({
  fruits: z.array(z.string()),
  count: z.number(),
});

// Fastify-compatible JSON schema
export const getFruitsSchema = {
  tags: ["Fruits"],
  response: {
    200: zodToJsonSchema(GetFruitsResponseZod),
  },
};