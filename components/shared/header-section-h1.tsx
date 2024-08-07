import React from "react";

interface HeaderSectionProps {
  label?: string;
  title: string;
  subtitle?: string;
}

const HeaderSectionH1 = ({ label, title, subtitle }: HeaderSectionProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      {label ? (
        <div className="text-gradient_indigo-purple mb-4 font-semibold">
          {label}
        </div>
      ) : null}
      <h1 className="font-heading text-3xl md:text-4xl lg:text-[40px]">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-6 text-balance text-lg text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};

export default HeaderSectionH1;
