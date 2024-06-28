"use client";
import React, { useState } from "react";
import Section from "@/components/shared/section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { AiToolsTemplate } from "@/config/ai-tools-template";
import { AiTemplate } from "@/types/ai-template";
import AiOutputSection from "@/app/tools/_components/AiOutputSection";
import HeaderSection from "@/components/shared/header-section";
import AiFormSection from "@/app/tools/_components/AiFromSection";

interface ParamsProps {
  params: {
    "tools-slug": string;
  };
}

const Page = ({ params }: ParamsProps) => {
  const [aiOutput, setAiOutput] = useState<string>("");

  const getCurrentToolTemplate = AiToolsTemplate.find(
    (template) => template.slug === params["tools-slug"],
  ) as AiTemplate;

  return (
    <main className="my-14 flex flex-1 items-center">
      <MaxWidthWrapper>
        <Section className="mb-10">
          <HeaderSection
            label="Current Template"
            title={getCurrentToolTemplate.name}
          />
        </Section>
        <Section className="glass-container grid w-fit grid-cols-1 gap-2 space-y-4 md:grid-cols-3">
          <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl" />
          <AiFormSection
            selectedToolTemplate={getCurrentToolTemplate}
            setAiOutput={setAiOutput}
            className="rounded-lg bg-gradient-to-b from-gray-900 to-gray-950"
          />
          <AiOutputSection
            className="col-span-2 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950"
            aiOutput={aiOutput}
          />
        </Section>
      </MaxWidthWrapper>
    </main>
  );
};

export default Page;
