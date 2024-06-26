import React from "react";
import Section from "@/components/shared/section";
import HeaderSection from "@/components/shared/header-section";
import { HowEmailCheckerWork } from "@/app/email-checker/_components/content/how-email-checker-work";
import { Icons } from "@/components/shared/icons";

const InfoEmailChecker = () => {
  return (
    <Section>
      <HeaderSection label="Info" title="What is Email Checker ?" />
      <p className="mb-20 mt-6 text-center text-lg">
        Email Checker is a simple little tool for verifying an email address.
        It&apos;s free and quite easy to use. Just enter the email address and
        hit the check button. It tells you whether the email id is real or fake.
        Sometimes, it’s unable to correctly predict and say unknown because some
        email providers have put some limits and restrictions or they simply
        don’t like any verification checks on their mailboxes.
      </p>
      <HeaderSection
        title="How Does the Email Checker Work?"
        subtitle="To determine whether an address is valid, our tool performs the following steps:"
      />
      <div className="mx-auto mt-10 w-full space-y-5 rounded-md border p-4 shadow sm:w-9/12">
        {HowEmailCheckerWork.map((data) => {
          const Icon = Icons[data.icon || "arrowRight"];
          return (
            <div className="space-y-4">
              <span className="flex items-center gap-2 text-2xl font-bold">
                <Icon className="size-6" />
                {data.title}
              </span>
              <p className="ml-8 text-lg leading-8 text-gray-400">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default InfoEmailChecker;
