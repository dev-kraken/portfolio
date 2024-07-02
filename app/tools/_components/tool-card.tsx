import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import Image from "next/image";
import { CopyButton } from "@/components/shared/copy-button";

interface ToolCardProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  buttonText?: string;
  buttonValue?: string;
  image?: string;
}

const ToolCard = ({
  title,
  description,
  className,
  children,
  buttonText,
  buttonValue,
  image,
}: ToolCardProps) => {
  return (
    <Card className={cn(className, "w-full")}>
      <CardHeader>
        <div
          className={cn(
            buttonText && "flex w-full items-center justify-between",
            "",
          )}
        >
          <>
            {image && (
              <Image
                src={image}
                alt="icon"
                width={70}
                height={70}
                className="mb-2"
              />
            )}
            <CardTitle className="my-3">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </>
          {buttonText && (
            <CopyButton
              className="w-fit gap-1.5 p-4"
              value={buttonValue as string}
              text="Copy"
            />
          )}
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ToolCard;
