import React from "react";
import { AiTemplate } from "@/types/ai-template";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface ToolTemplateCardProps {
  templates: AiTemplate[];
}

const ToolTemplateCards = ({ templates }: ToolTemplateCardProps) => {
  return (
    <>
      {templates.map((template) => {
        return (
          <Link
            href={`tools/${template.slug}`}
            key={template.slug}
            className="glass-container w-fit"
          >
            <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl" />
            <Card className="h-[300px] w-[330px] cursor-pointer rounded-lg bg-gradient-to-b from-gray-900 to-gray-950">
              <CardHeader className="space-y-4">
                <Image src={template.icon} alt="icon" width={50} height={50} />
                <CardTitle>{template.name}</CardTitle>
              </CardHeader>
              <CardContent>{template.desc}</CardContent>
            </Card>
          </Link>
        );
      })}
    </>
  );
};

export default ToolTemplateCards;
