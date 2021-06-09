import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { animated, useSpring, useTrail } from "react-spring";
import Button from "../components/Button/Button";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Polaroid from "../components/Polaroid/Polaroid";
import Spacer from "../components/Spacer/Spacer";
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
    image: (
      <StaticImage
        src="../images/samgrace.jpeg"
        alt="Sam and Grace"
        placeholder="tracedSVG"
        layout="fullWidth"
        objectFit="cover"
        objectPosition="right"
        className="polaroid-absolute"
      />
    ),
  },
  {
    link: "/the-wedding",
    text: "THE WEDDING",
    image:
      "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=eb9893e527fa8cd97cb29e216b7da793",
  },
  {
    link: "/registry",
    text: "REGISTRY",
    image:
      "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=eb9893e527fa8cd97cb29e216b7da793",
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

  const [polaroidSpring1, polaroidSpring1Ref] = useEnterExitAnimation({
    springConfig: { mass: 11, tension: 2000, friction: 150 },
    delay: isPageWide ? 750 : 50,
    defineSpring: polaroidSpring,
  });

  const [polaroidSpring2, polaroidSpring2Ref] = useEnterExitAnimation({
    springConfig: { mass: 11, tension: 2000, friction: 150 },
    delay: isPageWide ? 900 : 50,
    defineSpring: polaroidSpring,
  });

  const [polaroidSpring3, polaroidSpring3Ref] = useEnterExitAnimation({
    springConfig: { mass: 11, tension: 2000, friction: 150 },
    delay: isPageWide ? 1050 : 50,
    defineSpring: polaroidSpring,
  });

  const ctaSpring = useSpring({
    config: { mass: 9, tension: 2000, friction: 150 },
    delay: 1450,
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  return (
    <section className="pb-24">
      <Grid>
        <Grid.Span start={2} end={12}>
          <Spacer size="32" />
          <div className="flex flex-col justify-center items-center">
            <AnimatedHeading {...headings[0]} style={headingSpring1} />
            <AnimatedHeading {...headings[1]} style={headingSpring2} />
            <AnimatedButton className="my-16" style={ctaSpring}>
              Livestream
            </AnimatedButton>
          </div>
        </Grid.Span>
        <Grid.Span start={2} end={12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimatedPolaroid
              {...polaroids[0]}
              style={polaroidSpring1}
              ref={polaroidSpring1Ref}
            />
            <AnimatedPolaroid
              {...polaroids[1]}
              style={polaroidSpring2}
              ref={polaroidSpring2Ref}
            />
            <AnimatedPolaroid
              {...polaroids[2]}
              style={polaroidSpring3}
              ref={polaroidSpring3Ref}
            />
          </div>
        </Grid.Span>
      </Grid>
    </section>
  );
};

export default Home;
