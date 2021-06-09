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
              <div className="flex flex-col md:flex-row w-full items-center justify-center md:p-12">
                {section.sectionImageFileNames.map((fileName) => (
                  <div className="w-full md:w-60 p-12 md:p-0 md:mr-12 md:last:mr-0">
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
