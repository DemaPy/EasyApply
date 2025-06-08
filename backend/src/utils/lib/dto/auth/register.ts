import { createZodDto } from 'nestjs-zod/dto';
import { z } from 'zod';

const registerSchema = z.object({
  email: z
    .string()
    .email()
    .transform((value) => value.toLowerCase()),
  password: z.string().min(8),
  name: z
    .string()
    .min(4, {
      message: 'Name too short',
    })
    .max(255, {
      message: 'Name too long',
    }),
});

export class RegisterDTO extends createZodDto(registerSchema) {}
