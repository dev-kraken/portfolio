import React from "react";
import Section from "@/components/shared/section";
import HeaderSection from "@/components/shared/header-section";
import FormEmailChecker from "@/app/email-checker/_components/form-email-checker";
import FaqSectionEmail from "@/app/email-checker/_components/faq-section-email";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const Page = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center py-10">
      <MaxWidthWrapper>
        <Section>
          <HeaderSection label="FREE TOOL" title="Email Checker" />
          <h1 className="mx-auto mt-4 w-full text-center font-urban text-2xl font-semibold sm:w-9/12">
            <span className="text-gradient_indigo-purple font-extrabold">
              Quickly and accurately verify
            </span>{" "}
            whether an email is valid and can receive email
          </h1>

          <FormEmailChecker />
        </Section>
        <FaqSectionEmail />
      </MaxWidthWrapper>
    </main>
  );
};

export default Page;
