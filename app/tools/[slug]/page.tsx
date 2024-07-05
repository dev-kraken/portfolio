import dynamic from "next/dynamic";
import Section from "@/components/shared/section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { AiToolsTemplate } from "@/config/ai-tools-template";
import { AiTemplate } from "@/types/ai-template";
import HeaderSectionH1 from "@/components/shared/header-section-h1";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/utils";
import { notFound } from "next/navigation";

const GridFormOutputAi = dynamic(
  () => import("@/app/tools/_components/grid-form-output-ai"),
  { ssr: false },
);

export async function generateStaticParams() {
  return AiToolsTemplate.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const template = AiToolsTemplate.find(
    (template) => template.slug === params.slug,
  );
  if (!template) {
    return;
  }

  const { name, desc, keywords } = template;

  return constructMetadata({
    title: `${name} –Dev Kraken`,
    description: desc,
    image: "/images/og/ai-tools.jpg",
    keywords: keywords,
  });
}

interface ParamsProps {
  params: {
    slug: string;
  };
}

const Page = ({ params }: ParamsProps) => {
  const getCurrentToolTemplate = AiToolsTemplate.find(
    (template) => template.slug === params.slug,
  ) as AiTemplate;

  if (!getCurrentToolTemplate) {
    notFound();
  }
  return (
    <main className="my-14 flex flex-1 items-center">
      <MaxWidthWrapper>
        <Section className="mb-10">
          <HeaderSectionH1
            label="Current Template"
            title={getCurrentToolTemplate.name}
          />
        </Section>
        <GridFormOutputAi getCurrentToolTemplate={getCurrentToolTemplate} />
      </MaxWidthWrapper>
    </main>
  );
};

export default Page;
