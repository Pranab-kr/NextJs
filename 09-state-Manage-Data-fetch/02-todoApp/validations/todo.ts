import z from "zod";

export const todoSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().max(500).optional(),
  priority: z.enum(["low", "medium", "high"]).optional().default("medium"),
  completed: z.boolean().optional().default(false),
});
