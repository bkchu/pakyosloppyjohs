import React from "react";
import Button from "../components/Button/Button";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Image from "../components/Image/Image";
import Spacer from "../components/Spacer/Spacer";
import TheNavigationLayout from "../layouts/TheNavigationLayout";

const Registry = () => {
  return (
    <TheNavigationLayout>
      <Grid className="min-h-[calc(100vh-96px)]">
        <Grid.Span className="h-full" start={2} span={5}>
          <div className="h-full flex flex-col items-end p-16 pt-32">
            <Image
              fileName="registry-page"
              className="w-full rounded-3xl shadow-photo"
            />
          </div>
        </Grid.Span>
        <Grid.Span className="h-full" start={7} span={5}>
          <div className="h-full flex flex-col items-start pt-32">
            <Heading h="body-md" as="p" className="mb-4">
              Celebrating our marriage with you is the greatest gift we could
              ask for! However, for friends and family who have expressed an
              interest, a contribution to our honeymoon fund would be much
              appreciated!
            </Heading>
            <Button>Go To The Registry</Button>
          </div>
        </Grid.Span>
      </Grid>
    </TheNavigationLayout>
  );
};

export default Registry;
