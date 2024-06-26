import React from "react";
import Section from "@/components/shared/section";
import HeaderSection from "@/components/shared/header-section";
import FormEmailChecker from "@/app/email-checker/_components/form-email-checker";
import FaqSectionEmail from "@/app/email-checker/_components/faq-section-email";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { CheckCircle } from "lucide-react";
import InfoEmailChecker from "@/app/email-checker/_components/info-email-checker";
import { constructMetadata } from "@/lib/utils";
export const metadata = constructMetadata({
  title: "Temporary Email Detector - Verify Authenticity of Email Addresses",
  description:
    "Identify and block temporary email addresses with our Temporary Email Detector. Ensure the authenticity of email addresses to protect your platform from fraudulent sign-ups and spam. Enhance your user database quality and maintain security by detecting disposable email domains in real-time.",
  keywords: [
    "temporary email detector, disposable email checker, fake email detection, verify email authenticity, temporary email blocking, email address validation, prevent spam sign-ups, secure user registration, real-time email verification, disposable email detection, temporary email domains, email verification tool, stop fake emails, email security tool, detect temporary emails",
  ],
  image: "/images/og/email-checker-og.png",
});

const Page = () => {
  return (
    <main className="h-full">
      <MaxWidthWrapper className="flex flex-wrap items-center justify-center gap-20 overflow-auto py-10">
        <Section className="mx-auto overflow-auto">
          <HeaderSection label="FREE TOOL" title="Email Checker" />
          <h1 className="mx-auto mt-4 w-full text-center font-urban text-2xl font-semibold sm:w-9/12">
            <span className="text-gradient_indigo-purple font-extrabold">
              Quickly and accurately verify
            </span>{" "}
            whether an email is valid and can receive email
          </h1>
          <div className="item-center w-100 mx-auto my-6 flex justify-center gap-7 text-center text-xs sm:text-lg">
            <span className="flex items-center gap-2">
              <CheckCircle className="size-5 text-green-500" />
              100% Free
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="size-5 text-green-500" />
              Verify if an email exist
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="size-5 text-green-500" />
              Reduce your bounce rate
            </span>
          </div>
          <FormEmailChecker />
        </Section>
        <InfoEmailChecker />
        <FaqSectionEmail />
      </MaxWidthWrapper>
    </main>
  );
};

export default Page;
