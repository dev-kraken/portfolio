import React from "react";
import Section from "@/components/shared/section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import HeaderSection from "@/components/shared/header-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { features } from "@/config/landing";
import { ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/shared/icons";

const Services = () => {
  return (
    <Section>
      <div className="pb-6 pt-28">
        <MaxWidthWrapper>
          <HeaderSection
            label="Services"
            title="Discover all services."
            subtitle="Explore a comprehensive suite of solutions designed to enhance collaboration, drive innovation, and ensure scalability for your business."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = Icons[feature.icon || "arrowRight"];
              return (
                <div
                  className="group relative overflow-hidden rounded-2xl border bg-background p-4 md:p-6"
                  key={feature.title}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-purple-500/80 to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
                  />
                  <div className="relative">
                    <div className="relative flex size-12 rounded-2xl border border-border shadow-sm *:relative *:m-auto *:size-6 ">
                      <Icon className="text-muted-foreground" />
                    </div>
                    <h4 className="my-4 font-medium text-gray-300">
                      {feature.title}
                    </h4>
                    <p className="pb-6 text-muted-foreground">
                      {feature.description}
                    </p>

                    <div className="-mb-5 flex gap-3 border-t border-muted py-4 md:-mb-7">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="px-4"
                        disabled
                      >
                        <Link href="/" className="flex items-center gap-2">
                          <span>Learn More...</span>
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </Section>
  );
};

export default Services;
