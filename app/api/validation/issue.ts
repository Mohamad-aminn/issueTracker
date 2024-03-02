import { z } from "zod";

export const addIssueValidation = z.object({
  title: z.string().min(3, "title must be atleast 3 characters").max(255),
  description: z
    .string()
    .min(3, "description must be atleast 3 characters")
    .max(511),
});
