import React from "react";
import Section from "@/components/shared/section";
import { Illustration } from "@/components/sections/hero-illustration";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero3D from "@/components/sections/hero-3d";
import Image from "next/image";

const HeroLanding = () => {
  return (
    <Section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-cover bg-center">
      <Illustration />
      <div className="container z-10 grid max-w-6xl grid-cols-1 items-start gap-14 text-start md:grid-cols-2 md:gap-0">
        <div className="sm:item-center relative col-span-2 flex h-full flex-col items-start justify-center gap-10 sm:col-span-1">
          <h1 className="text-balance text-start font-urban text-5xl font-bold leading-none tracking-normal sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[5rem]">
            <span className="flex gap-4 lg:gap-8">Hi there !</span>
            I&#39;m{" "}
            <span className="text-gradient_indigo-purple font-extrabold">
              Dev Kraken
            </span>
            <br />
            Full Stack{" "}
            <span className="text-gradient_indigo-purple font-extrabold">
              Developer.
            </span>
          </h1>
          <p
            className="max-w-6xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            A versatile Full Stack Developer specializing in creating dynamic
            web applications. Proficient in PHP, Wordpress, JavaScript, Next.js,
            and more, I build robust and scalable solutions tailored to your
            needs. Let&#39;s create something amazing together!
          </p>
          <Link href="/" aria-label="Let's Discuss">
            <Button
              variant="secondary"
              size="default"
              className="px-8 py-6 text-lg"
            >
              <span>Let&#39;s discuss</span>
              <MoveRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
        <div className="mx-auto hidden w-full lg:block">
          <Hero3D />
        </div>
      </div>
    </Section>
  );
};

export default HeroLanding;
