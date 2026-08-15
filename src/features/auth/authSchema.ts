import { z } from "zod";

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const ACCEPTED_IMAGES_TYPES = ["image/jpeg", "image/png", "image/webp"];
export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters.")
      .max(24, "Username must be less than 24 characters."),
    avatar: z
      .instanceof(FileList)
      .refine((files) => {
        if (!files || files.length === 0) return true;
        return files[0] instanceof File;
      }, "Invalid file type")
      .refine((files) => {
        if (!files || files.length === 0) return true;
        return files[0].size <= MAX_FILE_SIZE;
      }, "Max image size is 8M.")
      .refine((files) => {
        if (!files || files.length === 0) return true;
        return ACCEPTED_IMAGES_TYPES.includes(files[0].type);
      }, "Only .jpg, .jpeg, .png and .webp formats are supported.")
      .optional(),

    email: z
      .email("Please enter a valid email address.")
      .min(1, "Please fill out an email address."),
    password: z
      .string()
      .min(8, "Password must at least 8 characters.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[*\d!@#$%^&*])/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number or special character.",
      ),
    confirmPassword: z.string().min(1, "Please confirm your password "),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Please fill out an email address.")
    .email("Please enter a valid email address."),
  password: z.string().min(8, "Please enter your password."),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
