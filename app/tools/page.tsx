import React from "react";
import ToolTemplateCards from "@/app/tools/_components/tool-template-cards";
import { AiToolsTemplate } from "@/config/ai-tools-template";
import Section from "@/components/shared/section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import HeaderSection from "@/components/shared/header-section";

const Page = () => {
  return (
    <main>
      <MaxWidthWrapper className="my-10 space-y-10">
        <HeaderSection
          label="Tools"
          title="Browse All Templates"
          subtitle="What would you like to create today?"
        />
        <Section className="flex flex-wrap items-center justify-center gap-10">
          <ToolTemplateCards templates={AiToolsTemplate} />
        </Section>
      </MaxWidthWrapper>
    </main>
  );
};

export default Page;
