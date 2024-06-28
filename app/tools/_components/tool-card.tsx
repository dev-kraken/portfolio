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

interface ToolCardProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  buttonText?: string;
  handelClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  image?: string;
}

const ToolCard = ({
  title,
  description,
  className,
  children,
  buttonText,
  handelClick,
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
            <Button onClick={handelClick} size="default">
              <Copy className="mr-2 size-4" />
              {buttonText}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ToolCard;
