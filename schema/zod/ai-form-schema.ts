import * as z from "zod";

export const AiFormSchema = z.record(
  z.string({
    errorMap: (issue) => ({
      message: `${issue.path} is required.`,
    }),
  }),
);
