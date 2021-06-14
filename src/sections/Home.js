import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
import { animated, useSpring } from "react-spring";
import Button from "../components/Button/Button";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Image from "../components/Image/Image";
import Logo from "../components/Logo/Logo";
import Polaroid from "../components/Polaroid/Polaroid";
import Seo from "../components/SEO/SEO";
import Spacer from "../components/Spacer/Spacer";
import { useEnterExitAnimation } from "../hooks/useEnterExitAnimation";

const AnimatedHeading = animated(Heading);
const AnimatedPolaroid = animated(Polaroid);
const AnimatedButton = animated(Button);

const headings = [
  {
    h: "h1",
    element: "h1",
    className: "flex items-center justify-center text-center ",
    children: "Celebrate our marriage with us!",
  },
];

const polaroids = [
  {
    link: "/our-story",
    text: "OUR STORY",
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
  const isPageWide = useMediaQuery("(min-width: 1280px)");
  const headingSpring1 = useSpring({
    config: { mass: 9, tension: 2000, friction: 150 },
    delay: 300,
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  const polaroidSpring = (inView) => ({
    y: inView ? 0 : 50,
    from: { opacity: 0, y: 50 },
  });

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

  const photoLinkClasses = clsx(
    "flex",
    "flex-col",
    "xl:flex-row",
    "space-y-6",
    "xl:space-y-0",
    "xl:space-x-12",
    "items-center",
    "justify-center"
  );

  return (
    <>
      <Seo title="Home" />

      <section className="pt-12 pb-36 xl:py-12">
        <Grid>
          <Grid.Span start={2} span={10}>
            <div className="flex flex-col lg:flex-row items-center">
              <Logo className="w-4/5 lg:w-1/2 h-auto lg:h-96 my-12 lg:my-0" />
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center my-6">
                <AnimatedHeading {...headings[0]} style={headingSpring1} />
                <Spacer axis="v" size={8} />
                <AnimatedButton
                  to="/the-wedding"
                  style={ctaSpring}
                  className="mb-12"
                >
                  Livestream
                </AnimatedButton>
              </div>
            </div>
          </Grid.Span>
          <Grid.Span start={1} span={12}>
            <div className={photoLinkClasses}>
              <div className="w-96 p-6">
                <AnimatedPolaroid {...polaroids[0]} {...polaroidSpring1} />
              </div>
              <div className="w-96 p-6">
                <AnimatedPolaroid {...polaroids[1]} {...polaroidSpring2} />
              </div>
              <div className="w-96 p-6">
                <AnimatedPolaroid {...polaroids[2]} {...polaroidSpring3} />
              </div>
            </div>
          </Grid.Span>
          <Grid.Span
            start={1}
            span={12}
            className="flex items-center justify-center mt-12"
          >
            <Button variant="secondary" to="/special-thanks">
              Special Thanks To
            </Button>
          </Grid.Span>
        </Grid>
      </section>
    </>
  );
};

export default Home;
