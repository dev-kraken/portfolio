import React from "react";
import Section from "@/components/shared/section";
import { Illustration } from "@/components/sections/hero-illustration";
import {ArrowUpRight, MoveRight, Sparkle} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const HeroLanding = () => {
  return (
    <Section className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden bg-cover bg-center">
      <Illustration />
      <div className="container z-10 flex max-w-6xl flex-col items-start gap-10 text-start">
        <h2 className="text-balance text-start font-urban text-5xl font-bold leading-none tracking-normal sm:text-5xl md:text-6xl lg:text-[100px] lg:leading-[7rem]">
          <span className="flex gap-10">
            Hi there !
            <Sparkle className="size-24 animate-spin text-[#6366f1]" />
          </span>
          I&#39;m{" "}
          <span className="text-gradient_indigo-purple font-extrabold">
            Dev Kraken
          </span>
          <br />
          Full Stack{" "}
          <span className="text-gradient_indigo-purple font-extrabold">
            Developer.
          </span>
        </h2>
        <p
          className="max-w-6xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          A versatile Full Stack Developer specializing in creating dynamic web
          applications. Proficient in PHP, Wordpress, JavaScript, Next.js, and more, I
          build robust and scalable solutions tailored to your needs. Let&#39;s
          create something amazing together!
        </p>
        <Button variant="secondary" size="lg" className="px-8 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span>Let&#39;s discuss</span>
            <MoveRight className="size-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default HeroLanding;
