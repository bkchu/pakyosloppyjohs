import { a } from "@react-spring/web";
import React from "react";
import { useEnterExitAnimation } from "../../hooks/useEnterExitAnimation";
import Image from "../Image/Image";
import Polaroid from "../Polaroid/Polaroid";

const TimelinePhoto = ({ fileName, caption, objectPosition }) => {
  const photoSpringDef = useEnterExitAnimation({
    springConfig: { mass: 11, tension: 2000, friction: 150 },
    delay: 100,
    defineSpring: (inView) => ({
      y: inView ? 0 : 50,
      from: { opacity: 0, y: 50 },
    }),
  });

  return (
    <a.div {...photoSpringDef}>
      <Polaroid
        className="w-96 lg:w-80"
        text={caption}
        image={
          <Image
            fileName={fileName}
            className="polaroid-absolute"
            objectPosition={objectPosition}
          />
        }
      />
    </a.div>
  );
};

export default TimelinePhoto;
