import React from "react";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Image from "../components/Image/Image";
import Polaroid from "../components/Polaroid/Polaroid";
import Spacer from "../components/Spacer/Spacer";
import TheNavigationLayout from "../layouts/TheNavigationLayout";
import timeline from "../utils/ourStoryImages.json";

const OurStory = () => {
  return (
    <TheNavigationLayout>
      <Grid>
        <Spacer size="14" />
        {timeline.map((section) => (
          <>
            <Grid.Span start={2} span={10}>
              <Heading h="h5" as="p" className="text-center">
                {section.sectionDate}
              </Heading>
              <Spacer size="2" />
              <Heading h="body" as="p" className="text-center">
                {section.sectionTitle}
              </Heading>
            </Grid.Span>
            <Spacer size="3" />
            <Grid.Span start={1} span={12} className="mb-32 last:mb-0">
              <div className="flex w-full justify-center">
                {section.sectionImageFileNames.map((fileName) => (
                  <div className="w-60 mr-12 last:mr-0">
                    <Polaroid
                      image={
                        <Image
                          fileName={fileName}
                          className="polaroid-absolute"
                        />
                      }
                    />
                  </div>
                ))}
              </div>
            </Grid.Span>
          </>
        ))}
      </Grid>
    </TheNavigationLayout>
  );
};

export default OurStory;
