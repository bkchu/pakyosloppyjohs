import clsx from "clsx";
import React from "react";

const Heading = ({
  as = "p",
  h = "p",
  className,
  color = "text-text",
  children,
}) => {
  const baseHeadingClasses = clsx(color);
  const headingClassNames = {
    h1: clsx("font-serif", "text-[56px]", "font-bold", "leading-tight"),
    h2: clsx("font-serif", "text-3xl", "font-bold"),
    h3: clsx(
      "font-serif",
      "font-bold",
      "text-disabled-text",
      "text-2xl",
      "my-6"
    ),
    h4: clsx("text-xs", "laptop:text-base", "leading-none", "tracking-widest"),
    h5: clsx("text-[12px]", "leading-none", "tracking-wide"),
    p: clsx("font-serif", "text-base", "my-2", "leading-golden"),
    body: clsx("font-serif", "text-2xl"),
    eyebrow: clsx("text-base", "font-bold", "uppercase", "tracking-widest"),
  };

  const _classNames = clsx(
    baseHeadingClasses,
    headingClassNames?.[h],
    className
  );

  return React.createElement(as, {
    className: _classNames,
    children,
  });
};

export default Heading;