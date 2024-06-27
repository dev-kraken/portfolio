"use server";
import * as z from "zod";
import { AxiosWrapper } from "@/lib/axios-wrapper";
import { EmailCheckerForm } from "@/schema/zod/email-checker-form";
import { Email_Checker } from "@/types/actions";

export const EmailChecker = async (
  values: z.infer<typeof EmailCheckerForm>,
) => {
  const response = await AxiosWrapper.post<Email_Checker>(
    "/verify-email",
    values,
  );
  return response;
};
