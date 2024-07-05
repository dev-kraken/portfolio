import React from "react";
import ToolTemplateCards from "@/app/tools/_components/tool-template-cards";
import { AiToolsTemplate } from "@/config/ai-tools-template";
import Section from "@/components/shared/section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import HeaderSectionH1 from "@/components/shared/header-section-h1";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Powerful AI & Content Generation Tools by Dev Kraken",
  description:
    "Discover a comprehensive collection of AI-powered tools designed to enhance your digital presence and productivity. From generating blog titles and optimizing YouTube SEO to crafting Instagram posts and improving English grammar, explore tools tailored to streamline your creative process.",
  keywords: [
    "AI tools, content generation tools, blog title generator, YouTube SEO tools, Instagram post generator, grammar checker, code editor, product description generator",
  ],
  image: "/images/og/ai-tools.jpg",
});

const Page = () => {
  return (
    <main>
      <MaxWidthWrapper className="my-10 space-y-10">
        <HeaderSectionH1
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
