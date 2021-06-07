import React from "react";
import Button from "../components/Button/Button";
import Grid from "../components/Grid/Grid";
import Polaroid from "../components/Polaroid/Polaroid";
import Spacer from "../components/Spacer/Spacer";
import { StaticImage } from "gatsby-plugin-image";
import Heading from "../components/Heading/Heading";

const Home = () => {
  return (
    <section>
      <Grid>
        <Grid.Span start={2} end={12}>
          <Spacer size="32" />
          <div className="flex flex-col justify-center items-center">
            <Heading
              h="h1"
              element="h1"
              className="flex items-center justify-center text-center"
            >
              &ldquo;In Hawaii? Wait, really?!&rdquo;
            </Heading>
            <Heading
              h="h2"
              as="h2"
              color="text-disabled-text"
              className="flex items-center justify-center"
            >
              Sam & Grace
            </Heading>

            <Button className="my-16">Livestream</Button>
          </div>
        </Grid.Span>
        <Grid.Span start={2} end={12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Polaroid
              link="/our-story"
              text="OUR STORY"
              image={
                <StaticImage
                  src="../images/samgrace.jpeg"
                  alt="Sam and Grace"
                  placeholder="tracedSVG"
                  layout="fullWidth"
                  objectFit="cover"
                  objectPosition="right"
                  className="polaroid-absolute"
                />
              }
            />
            <Polaroid
              link="/the-wedding"
              text="THE WEDDING"
              image="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=eb9893e527fa8cd97cb29e216b7da793"
            />
            <Polaroid
              link="/registry"
              text="REGISTRY"
              image="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=eb9893e527fa8cd97cb29e216b7da793"
            />
          </div>
        </Grid.Span>
      </Grid>
    </section>
  );
};

export default Home;
