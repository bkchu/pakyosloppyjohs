import React from "react";
import Grid from "../components/Grid/Grid";
import Spacer from "../components/Spacer/Spacer";
import Timeline from "../components/Timeline/Timeline";
import TheNavigationLayout from "../layouts/TheNavigationLayout";
import timeline from "../utils/ourStoryImages.json";

const OurStory = () => {
  return (
    <TheNavigationLayout title="Our Story">
      <Grid>
        <Spacer size="14" />
        <Timeline timeline={timeline} />
      </Grid>
    </TheNavigationLayout>
  );
};

export default OurStory;
