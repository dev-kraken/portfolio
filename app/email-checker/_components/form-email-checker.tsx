"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ResultEmailChecker from "@/app/email-checker/_components/result-email-checker";
import { EmailCheckerForm } from "@/schema/zod/email-checker-form";
import { EmailChecker } from "@/action/email-checker";
import { Email_Checker } from "@/types/actions";
import { AtSign, Loader2, MailSearch } from "lucide-react";
import { cn } from "@/lib/utils";

const FormEmailChecker = () => {
  const [apiData, setApiData] = React.useState<Email_Checker | null>(null);
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<z.infer<typeof EmailCheckerForm>>({
    resolver: zodResolver(EmailCheckerForm),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof EmailCheckerForm>) {
    setApiData(null);
    startTransition(async () => {
      await EmailChecker(values).then((res) => {
        setApiData(res);
      });
    });
  }

  return (
    <div className="mx-auto w-full sm:w-10/12">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative my-10 rounded-lg border border-gray-200/20 bg-slate-900/40 p-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <AtSign className="size-5 text-gray-500 dark:text-gray-400" />
                </div>
                <FormControl>
                  <Input
                    className={cn(
                      form.getFieldState("email").error
                        ? "dark:ring:red-blue-500 border-red-300 focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                      "block w-full rounded-lg border bg-gray-50 p-7 ps-10 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400",
                    )}
                    placeholder="example@devkraken.com"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            disabled={isPending}
            type="submit"
            size="default"
            className="absolute bottom-6 end-6 rounded-lg bg-blue-700 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isPending ? (
              <>
                <Loader2 className="mx-auto mr-2 size-4 animate-spin" />
                Checking...
              </>
            ) : (
              <>
                <MailSearch className="mx-auto mr-2 size-4" />
                Verify Email
              </>
            )}
          </Button>
        </form>
      </Form>
      {apiData && <ResultEmailChecker data={apiData} />}
    </div>
  );
};

export default FormEmailChecker;
