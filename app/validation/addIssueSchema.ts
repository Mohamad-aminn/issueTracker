import { z } from "zod";

export const addIssueSchema = z.object({
  title: z
    .string()
    .min(3, { message: "We Need atleast 3 characters Developer" })
    .max(31)
    .trim(),
  description: z
    .string()
    .min(3, "please fill description with more detail")
    .max(511)
    .trim(),
});
