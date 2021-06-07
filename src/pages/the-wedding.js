import React from "react";
import Button from "../components/Button/Button";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Image from "../components/Image/Image";
import Spacer from "../components/Spacer/Spacer";
import TheNavigationLayout from "../layouts/TheNavigationLayout";

const TheWedding = () => {
  return (
    <TheNavigationLayout>
      <Grid className="min-h-[calc(100vh-96px)]">
        <Grid.Span className="h-full" start={2} span={4}>
          <div className="h-full flex flex-col items-end justify-center">
            <Heading h="body-large" as="p" className="text-right">
              We can’t say we do without all of you! Please join us, virtually,
              as we exchange our vows.
            </Heading>
            <Image
              fileName="the-wedding-page"
              className="mt-8 w-full rounded-3xl shadow-photo"
            />
          </div>
        </Grid.Span>
        <Grid.Span className="h-full" start={6} span={2}>
          <div className="h-full flex items-center justify-center">
            <div className="bg-black w-px h-[calc(100%-256px)] mx-auto"></div>
          </div>
        </Grid.Span>
        <Grid.Span className="h-full" start={8} span={4}>
          <div className="h-full flex flex-col items-start justify-center">
            <Heading h="eyebrow" as="p">
              Date
            </Heading>
            <Heading h="h1" as="h3">
              Thursday, July 1, 2021
            </Heading>
            <Spacer size="6" />
            <Heading h="eyebrow" as="p">
              Date
            </Heading>
            <Heading h="h1" as="h3">
              9:00pm CST
            </Heading>
            <Spacer size="6" />
            <Button>Watch Virtually</Button>
          </div>
        </Grid.Span>
      </Grid>
    </TheNavigationLayout>
  );
};

export default TheWedding;
