"use client";
import React, { useState } from "react";
import AiFormSection from "@/app/tools/_components/AiFromSection";
import AiOutputSection from "@/app/tools/_components/AiOutputSection";
import Section from "@/components/shared/section";
import { AiTemplate } from "@/types/ai-template";

interface Props {
  getCurrentToolTemplate: AiTemplate;
}

const GridFormOutputAi = ({ getCurrentToolTemplate }: Props) => {
  const [aiOutput, setAiOutput] = useState<string>("");
  return (
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
  );
};

export default GridFormOutputAi;
