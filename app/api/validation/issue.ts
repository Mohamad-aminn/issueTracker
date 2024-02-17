import { z } from "zod";

export const addIssueValidation = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(3).max(511),
});
