"use client";
import React from "react";
import { useScroll } from "@/hooks/use-scroll";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { DollarSign } from "lucide-react";
import Link from "next/link";
import { landingMenu } from "@/config/landing-menu";
import { cn } from "@/lib/utils";
import { useSelectedLayoutSegment } from "next/navigation";
import Logo from "@/components/layout/logo";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

const Navbar = ({ scroll = false }: NavBarProps) => {
  const scrolled = useScroll(50);
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <MaxWidthWrapper
        className="flex h-14 items-center justify-between py-4"
        large={false}
      >
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Logo width={40} color="#fff" />
            <span className="font-urban text-xl font-bold">Dev Kraken</span>
          </Link>
          {landingMenu && landingMenu.length > 0 ? (
            <nav className="hidden gap-6 md:flex">
              {landingMenu.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  prefetch={true}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${selectedLayout}`)
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
