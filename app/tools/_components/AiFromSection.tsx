"use client";
import React, { SetStateAction, useTransition } from "react";
import { AiTemplate } from "@/types/ai-template";
import ToolCard from "@/app/tools/_components/tool-card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AiFormSchema } from "@/schema/zod/ai-form-schema";
import { chatSession } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

interface AiFormSectionProps {
  selectedToolTemplate: AiTemplate;
  setAiOutput: React.Dispatch<SetStateAction<string>>;
  className?: string;
}

const AiFormSection = ({
  selectedToolTemplate,
  setAiOutput,
  className,
}: AiFormSectionProps) => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof AiFormSchema>>({
    resolver: zodResolver(AiFormSchema),
    defaultValues: {
      ...(selectedToolTemplate.form?.reduce(
        (
          acc: Record<string, string>,
          curr: { name: string; value: string },
        ) => {
          acc[curr.name] = curr.value || "";
          return acc;
        },
        {},
      ) || {}),
    },
  });
  const onSubmit = async (values: z.infer<typeof AiFormSchema>) => {
    startTransition(async () => {
      const aiPrompt = selectedToolTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(values) + ", " + aiPrompt;
      const result = await chatSession.sendMessage(finalAIPrompt);
      setAiOutput(result?.response.text());
    });
  };

  return (
    <ToolCard
      title={selectedToolTemplate.name}
      description={selectedToolTemplate.desc}
      className={className}
      image={selectedToolTemplate.icon}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {selectedToolTemplate?.form?.map((item, index) => (
            <div key={index}>
              {item.field === "input" && (
                <FormField
                  control={form.control}
                  name={item.name as keyof z.infer<typeof AiFormSchema>}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{item.label}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-white/40 dark:bg-slate-800"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
              {item.field !== "input" && (
                <FormField
                  control={form.control}
                  name={item.name as keyof z.infer<typeof AiFormSchema>}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{item.label}</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-64 resize-none border-white/40 dark:bg-slate-800"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-xs">
                        Note: Max 2000 words
                      </FormDescription>
                    </FormItem>
                  )}
                />
              )}
            </div>
          ))}
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending && <Loader2Icon className="mr-2 size-4 animate-spin" />}
            Generate Content
          </Button>
        </form>
      </Form>
    </ToolCard>
  );
};

export default AiFormSection;
