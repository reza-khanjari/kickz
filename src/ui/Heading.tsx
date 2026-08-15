import type { ReactNode } from "react";
import type { JSX } from "react/jsx-runtime";

interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: ReactNode;
}

function Heading({ level = "h1", className, children }: HeadingProps): JSX.Element {
  const TagName = level;
  const baseClasses = "";
  const sizes: Record<HeadingProps["level"], string> = {
    h1: "text-4xl lg:text-5xl",
    h2: "text-3xl lg:text-4xl",
    h3: "text-2xl lg:text-3xl",
    h4: "text-lg md:text-xl lg:text-2xl",
    h5: "text-lg md:text-xl lg:text-2xl",
    h6: "text-base",
  };
  return (
    <TagName className={`${sizes[TagName]} ${baseClasses} ${className} `}>
      {children}
    </TagName>
  );
}

export default Heading;
