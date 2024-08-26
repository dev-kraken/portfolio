import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
}

const Logo = ({ width = 20, height = 100, color = "#586c87" }: LogoProps) => {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      width={width}
      height={height}
      className={cn(color)}
    />
  );
};

export default Logo;
