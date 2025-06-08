import { createZodDto } from 'nestjs-zod/dto';
import { z } from 'zod';
import { secretsSchema } from '../secrets';

const userSchema = z.object({
  id: z.string(),
  email: z
    .string()
    .email()
    .transform((value) => value.toLowerCase()),
});

export class UserDTO extends createZodDto(userSchema) {}

const userWithSecrets = userSchema.merge(
  z.object({ secrets: secretsSchema.nullable().default(null) }),
);

export class UserWithSecrets extends createZodDto(userWithSecrets) {}
