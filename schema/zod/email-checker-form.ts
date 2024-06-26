import * as z from "zod";

export const EmailCheckerForm = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
})