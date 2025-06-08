import { z } from "zod";

export const formSchema = z.object({
  context: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(30)
    .optional(),
  resume: z
    .string()
    .min(2, {
      message: "Resume must be at least 2 characters.",
    })
    .max(30)
    .optional(),
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(10),
  surname: z
    .string()
    .min(2, {
      message: "Surname must be at least 2 characters.",
    })
    .max(10),
  email: z
    .string()
    .email()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .max(30),
  age: z.string().min(2).max(2),
  github: z
    .string()
    .min(20, {
      message: "Url must be at least 20 characters.",
    })
    .url(),
  linkedin: z
    .string()
    .min(20, {
      message: "Url must be at least 20 characters.",
    })
    .url(),
});

export type ContextSchema = typeof formSchema;
