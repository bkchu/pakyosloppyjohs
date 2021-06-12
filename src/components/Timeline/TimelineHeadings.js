import { animated } from "@react-spring/web";
import React from "react";
import { useEnterExitAnimation } from "../../hooks/useEnterExitAnimation";
import Grid from "../Grid/Grid";
import Heading from "../Heading/Heading";

const AnimatedHeading = animated(Grid.Span);

const TimelineHeadings = ({ date, title }) => {
  const headerSpring = useEnterExitAnimation({
    springConfig: { mass: 11, tension: 2000, friction: 150 },
    delay: 50,
    defineSpring: (inView) => ({
      x: inView ? 0 : 30,
      from: { opacity: 0, x: 30 },
    }),
  });

  return (
    <AnimatedHeading start={2} span={10} {...headerSpring} className="z-10 -mb-16">
      <Heading h="h5" as="p" className="text-center lg:text-left">
        {date}
      </Heading>
      <Heading h="body-md" as="p" className="text-center lg:text-left">
        {title}
      </Heading>
    </AnimatedHeading>
  );
};

export default TimelineHeadings;
