import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
  large?: boolean;
}

const MaxWidthWrapper = ({
  className,
  children,
  large = false,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "container",
        large ? "max-w-screen-2xl" : "max-w-6xl",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
