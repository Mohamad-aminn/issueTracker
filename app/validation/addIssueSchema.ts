import { z } from "zod";

export const addIssueSchema = z.object({
  title: z
    .string()
    .min(2, { message: "We Need atleast 2 characters Developer" })
    .max(31)
    .trim(),
  description: z.string().min(2).max(511).trim(),
});
