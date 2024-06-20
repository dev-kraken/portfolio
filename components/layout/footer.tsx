import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import Logo from "@/components/layout/logo";

const Footer = () => {
  return (
    <footer className={cn("border-t")}>
      <div className="border-t py-4">
        <div className="container flex max-w-6xl items-center justify-between">
          <p className="text-left text-sm text-muted-foreground">
            Built by{" "}
            <Link
              href="https://github.com/dev-kraken"
              rel="noreferrer"
              target="_blank"
              className="font-medium underline underline-offset-4"
              aria-label="Git-Hub Dev Kraken"
            >
              Dev Kraken
            </Link>
          </p>

          <div className="flex items-center gap-3">
            <Logo width={22} height={22} color="#fff" />
            <Link
              href="https://github.com/dev-kraken"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
              aria-label="Git Hub Dev Kraken"
            >
              <GithubIcon className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
