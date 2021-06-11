import { a } from "@react-spring/web";
import React from "react";
import { useEnterExitAnimation } from "../../hooks/useEnterExitAnimation";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Image from "../Image/Image";
import Polaroid from "../Polaroid/Polaroid";

const TimelinePhoto = ({ fileName }) => {
  const isPageWide = useMediaQuery("(min-width: 800px)");

  const photoSpring = (inView) =>
    isPageWide
      ? {
          y: inView ? 0 : 50,
          from: { opacity: 0, y: 50 },
        }
      : {
          x: inView ? 0 : 30,
          from: { opacity: 0, x: 30 },
        };

  const photoSpringDef = useEnterExitAnimation({
    springConfig: { mass: 11, tension: 2000, friction: 150 },
    delay: isPageWide ? 750 : 50,
    defineSpring: photoSpring,
  });

  return (
    <a.div
      className="w-full md:w-60 p-12 pt-4 md:p-0 md:mr-12 md:last:mr-0"
      {...photoSpringDef}
    >
      <Polaroid
        image={<Image fileName={fileName} className="polaroid-absolute" />}
      />
    </a.div>
  );
};

export default TimelinePhoto;
