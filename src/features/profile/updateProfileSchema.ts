import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { z } from "zod";

export const updateInfoSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(24, "Username must be less than 24 characters."),

  email: z
    .string()
    .min(1, "Please fill out an email address.")
    .email("Please enter a valid email address."),

  full_name: z.string().min(3, "Full Name must at least have 3 characters"),

  national_code: z
    .string()
    .regex(/^\d{10}$/, "Natoinal code Must exacly be 10 digits."),

  phone_number: z
    .string()
    .regex(/^\d{11}$/, "Phone Number Must exacly be 11 digits."),

  birthday: z
    .custom<Dayjs>((val) => dayjs.isDayjs(val), "Invalid Date")
    .refine((val) => val.isValid(), "Invalid Date Format")
    .refine((val) => !val.isAfter(dayjs()), "Date cannot be in the future")
    .nullable(),
});
