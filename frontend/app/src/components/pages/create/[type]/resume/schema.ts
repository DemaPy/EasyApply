import { z } from "zod";

export const resumeSchema = z.object({
  resume: z.string().min(6, {
    message: "Title must be at least 2 characters.",
  }),
  context: z.string(),
  template: z.string(),
  jobDescription: z.string().min(20, {
    message: "Job description must be at least 20 characters.",
  }),
});

export type ResumeSchema = typeof resumeSchema;
