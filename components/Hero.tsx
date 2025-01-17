import React from "react";
import SearchForm from "./SearchForm";

interface HeroSectionProps {
  supertitle?: string;
  title: React.ReactNode;
  subtitle?: string;
  query?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  supertitle,
  title,
  subtitle,
  query,
}) => {
  return (
    <div className="bg-primary wallpaper-grid px-3 py-5 md:px-5 md:py-[72px] flex flex-col items-center">
      {supertitle && (
        <p className="w-fit relative bg-secondary uppercase mb-4 px-3.5 py-1.5 md:px-5 md:py-2.5 text-base tracking-[.1rem] font-bold text-foreground before:content-['◤'] before:text-[.6rem] after:text-[.6rem] after:content-['◢'] before:absolute after:absolute before:top-0 before:left-1 after:bottom-0 after:right-1">
          {supertitle}
        </p>
      )}

      <h1 className="w-fit mb-4 uppercase px-2 py-2.5 md:px-4 md:py-3 font-extrabold text-center leading-tight text-[2.25rem] md:text-[3.375rem] bg-secondary text-secondary-foreground">
        {title}
      </h1>

      {subtitle && (
        <p className="w-fit text-xl max-w-prose text-center font-medium text-primary-foreground">
          {subtitle}
        </p>
      )}
      {typeof query === "string" && (
        <div className="w-full flex justify-center mt-4 md:mt-8">
          <SearchForm query={query} />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
