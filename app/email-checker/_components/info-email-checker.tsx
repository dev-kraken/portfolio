import React from "react";
import Section from "@/components/shared/section";
import HeaderSection from "@/components/shared/header-section";

const InfoEmailChecker = () => {
  return (
    <Section>
      <HeaderSection label="Info" title="What is Email Checker ?" />
      <p className="mt-6 text-center text-lg">
        Email Checker is a simple little tool for verifying an email address.
        It&apos;s free and quite easy to use. Just enter the email address and
        hit the check button. It tells you whether the email id is real or fake.
        Sometimes, it’s unable to correctly predict and say unknown because some
        email providers have put some limits and restrictions or they simply
        don’t like any verification checks on their mailboxes.
      </p>
    </Section>
  );
};

export default InfoEmailChecker;
