import React from "react";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Image from "../components/Image/Image";
import Polaroid from "../components/Polaroid/Polaroid";
import TheNavigationLayout from "../layouts/TheNavigationLayout";

const peopleToThank = [
  {
    caption: "Pastor Calvin Kim",
    fileName: "pastorcalvin",
    thankYouMessage: "For officiating our wedding",
  },
  {
    caption: "Danielle Park",
    fileName: "danibob",
    thankYouMessage: "For drawing illustrations for the invitations and website",
  },
  {
    caption: "Brandon Chung",
    fileName: "brandon",
    thankYouMessage: "For building this website within a week, while making it really pretty",
  },
];

const SpecialThanks = () => {
  return (
    <TheNavigationLayout title="Special Thanks">
      <Grid className="my-12">
        <Grid.Span start={[2, 2, 4, 4, 4]} span={[10, 10, 6, 6, 6]}>
          <Heading h="h1" as="h1" className="mb-12 max-w-md lg:max-w-none lg:mx-auto lg:w-auto">
            Special Thanks To
          </Heading>
        </Grid.Span>

        {peopleToThank.map((person) => (
          <>
            <Grid.Span start={[2, 2, 4, 4, 4]} span={[10, 10, 3, 3, 3]}>
              <div className="max-w-md lg:w-64 mx-auto lg:ml-auto">
                <Polaroid
                  text={person.caption}
                  image={
                    <Image
                      fileName={person.fileName}
                      className="polaroid-absolute"
                    />
                  }
                />
              </div>
              {/* <Heading>{person.thankYouMessage}</Heading> */}
            </Grid.Span>
            <Grid.Span
              start={[2, 2, 7, 7, 7]}
              span={[10, 10, 3, 3, 3]}
              className="flex justify-center items-center text-center mt-12 mb-24 lg:mb-0"
            >
              <Heading h="h2">{person.thankYouMessage}</Heading>
            </Grid.Span>
          </>
        ))}
      </Grid>
    </TheNavigationLayout>
  );
};

export default SpecialThanks;
