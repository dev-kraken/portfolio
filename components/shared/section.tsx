import React from "react";

type SectionProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  as: Section = "section",
  className,
  children,
  ...restProps
}: SectionProps) {
  return (
    <Section className={className} {...restProps}>
      {children}
    </Section>
  );
}
