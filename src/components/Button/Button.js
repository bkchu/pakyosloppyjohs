import clsx from "clsx";
import { navigate } from "gatsby";
import React from "react";

const Button = ({
  variant = "primary",
  className = "",
  to,
  href,
  onClick,
  children,
  ...props
}) => {
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
    tertiary: clsx(
      base,
      "px-3",
      "bg-none",
      "border-none",
      "shadow-none",
      "hover:shadow-none"
    ),
    icon: clsx(base, "bg-none w-12 h-12 flex justify-center"),
  };

  const _className = clsx(buttonStyles[variant], className);

  return href ? (
    <a href={href} className={_className} {...props}>{children}</a>
  ) : (
    <button
      className={_className}
      onClick={to ? () => navigate(to) : onClick}
      {...props}
    >{children}</button>
  );
};

export default Button;
