import clsx from "clsx";
import { Link } from "gatsby";
import React, { forwardRef } from "react";
import Heading from "../Heading/Heading";
import "./Polaroid.css";

const Polaroid = forwardRef(
  (
    {
      link = null,
      image,
      text,
      className,
      alt = "generic alt message",
      ...props
    },
    ref
  ) => {
    const _containerClassNames = clsx(
      "bg-gradient-to-b",
      "from-[#ece9e6]",
      "to-[#fafafa]",
      "p-[5%]",
      "transition-shadow",
      "duration-300",
      link ? "shadow-md hover:shadow-card" : "shadow-card",
      "filter",
      className
    );

    const renderContent = (
      <div className={_containerClassNames} ref={ref} {...props}>
        <div className="aspect-w-3 aspect-h-4 mb-[10%]">
          {typeof image === "string" ? (
            <img className="w-full h-full object-cover" src={image} alt={alt} />
          ) : (
            image
          )}
        </div>

        <Heading h="h4" as="p" className="text-center mb-[8%]">
          {text !== "" ? text : <>&nbsp;</>}
        </Heading>
      </div>
    );

    const renderPolaroid = () => {
      if (link) {
        return <Link to={link}>{renderContent}</Link>;
      }

      return renderContent;
    };

    return renderPolaroid();
  }
);

export default Polaroid;
