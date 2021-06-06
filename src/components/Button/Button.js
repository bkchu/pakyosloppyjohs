import clsx from "clsx";
import React from "react";

const Button = ({ variant = "primary", className = "", ...props }) => {
  const base = clsx(
    "py-3",
    "rounded-full",
    "text-text",
    "font-extrabold",
    "font-sans",
    "uppercase",
    "tracking-widest",
    "shadow-button",
    "hover:shadow-sm",
    "transition-shadow",
    "duration-300"
  );

  const buttonStyles = {
    primary: clsx(base, "px-6", "bg-yellow"),
    secondary: clsx(base, "px-6", "border-4", "border-yellow"),
    tertiary: clsx(base, "px-3"),
  };

  const _className = clsx(buttonStyles[variant], className);

  return <button className={_className} {...props} />;
};

export default Button;
