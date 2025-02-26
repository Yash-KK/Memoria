import { z } from "zod";

export const SignUpSchema = z.object({
  firstName: z.string(),
  lastName: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(8, "Password must be atleast 8 Characters Long"),
});

export type SignUpType = z.infer<typeof SignUpSchema>;
