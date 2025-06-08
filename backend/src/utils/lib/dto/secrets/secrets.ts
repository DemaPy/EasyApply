import { z } from 'zod';

export const secretsSchema = z.object({
  id: z.string().cuid2(),
  userId: z.string().cuid2(),
  password: z.string().nullable(),
  refreshToken: z.string().nullable(),
  verificationToken: z.string().nullable(),
});
