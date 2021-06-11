import clsx from "clsx";
import React from "react";

const Input = (props) => {
  const _className = [
    "py-3",
    "px-6",
    "rounded-full",
    "font-extrabold",
    "font-sans",
    "uppercase",
    "tracking-widest",
    "shadow-button",
    "focus:outline-none"
  ];

  return <input className={clsx(_className)} type="text" {...props} />;
};

export default Input;
