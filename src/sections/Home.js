import React from "react";
import { animated, useSpring } from "react-spring";
import Button from "../components/Button/Button";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Image from "../components/Image/Image";
import Polaroid from "../components/Polaroid/Polaroid";
import { useEnterExitAnimation } from "../hooks/useEnterExitAnimation";
import { useMediaQuery } from "../hooks/useMediaQuery";

const AnimatedHeading = animated(Heading);
const AnimatedPolaroid = animated(Polaroid);
const AnimatedButton = animated(Button);

const headings = [
  {
    h: "h1",
    element: "h1",
    className: "flex items-center justify-center text-center",
    children: "“In Hawaii? Wait, really?!”",
  },
  {
    h: "h2",
    as: "h2",
    color: "text-disabled-text",
    className: "flex items-center justify-center",
    children: "Sam & Grace",
  },
];

const polaroids = [
  {
    link: "/our-story",
    text: "OUR STORY",
    className: "w-96",
    image: (
      <Image
        fileName="samgrace"
        alt="Sam and Grace"
        className="polaroid-absolute"
        objectPosition="90% 50%"
      />
    ),
  },
  {
    link: "/the-wedding",
    text: "THE WEDDING",
    className: "w-96",
    image: (
      <Image
        fileName="wedding1"
        alt="Sam and Grace holding a flower bouquet together"
        className="polaroid-absolute"
      />
    ),
  },
  {
    link: "/registry",
    text: "REGISTRY",
    className: "w-96",
    image: (
      <Image
        fileName="proposal3"
        alt="Sam and Grace with a confetti popper"
        className="polaroid-absolute"
        objectPosition="75% 50%"
      />
    ),
  },
];

const Home = () => {
  const isPageWide = useMediaQuery("(min-width: 800px)");
  const headingSpring1 = useSpring({
    config: { mass: 9, tension: 2000, friction: 150 },
    delay: 300,
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  const headingSpring2 = useSpring({
    config: { mass: 9, tension: 2000, friction: 150 },
    delay: 500,
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  const polaroidSpring = (inView) =>
    isPageWide
      ? {
          y: inView ? 0 : 50,
          from: { opacity: 0, y: 50 },
        }
      : {
          x: inView ? 0 : 30,
          from: { opacity: 0, x: 30 },
        };

  const polaroidSpring1 = useEnterExitAnimation({
    springConfig: { mass: 11, tension: 2000, friction: 150 },
    delay: isPageWide ? 750 : 50,
    defineSpring: polaroidSpring,
  });

  const polaroidSpring2 = useEnterExitAnimation({
    springConfig: { mass: 11, tension: 2000, friction: 150 },
    delay: isPageWide ? 900 : 50,
    defineSpring: polaroidSpring,
  });

  const polaroidSpring3 = useEnterExitAnimation({
    springConfig: { mass: 11, tension: 2000, friction: 150 },
    delay: isPageWide ? 1050 : 50,
    defineSpring: polaroidSpring,
  });

  const ctaSpring = useSpring({
    config: { mass: 9, tension: 2000, friction: 150 },
    delay: isPageWide ? 1450 : 600,
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  return (
    <section className="py-12">
      <Grid>
        <Grid.Span start={2} end={12}>
          <div className="flex flex-col justify-center items-center">
            <AnimatedHeading {...headings[0]} style={headingSpring1} />
            <AnimatedHeading {...headings[1]} style={headingSpring2} />
            <AnimatedButton
              to="/the-wedding"
              className="my-16"
              style={ctaSpring}
            >
              Livestream
            </AnimatedButton>
          </div>
        </Grid.Span>
        <Grid.Span start={2} end={12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimatedPolaroid {...polaroids[0]} {...polaroidSpring1} />
            <AnimatedPolaroid {...polaroids[1]} {...polaroidSpring2} />
            <AnimatedPolaroid {...polaroids[2]} {...polaroidSpring3} />
          </div>
        </Grid.Span>
      </Grid>
    </section>
  );
};

export default Home;
