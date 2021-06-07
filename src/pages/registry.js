import React from "react";
import Button from "../components/Button/Button";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Image from "../components/Image/Image";
import TheNavigationLayout from "../layouts/TheNavigationLayout";

const Registry = () => {
  return (
    <TheNavigationLayout>
      <Grid>
        <Grid.Span className="h-full" start={2} span={10}>
          <div className="flex justify-center">
            <div className="w-2/5 mr-16 pt-32">
              <Image
                fileName="registry-page"
                className="rounded-3xl shadow-photo"
              />
            </div>
            <div className="h-full flex flex-col items-start pt-32 max-w-[500px]">
              <Heading h="body-md" as="p" className="mb-4">
                Celebrating our marriage with you is the greatest gift we could
                ask for! However, for friends and family who have expressed an
                interest, a contribution to our honeymoon fund would be much
                appreciated!
              </Heading>
              <Button>Go To The Registry</Button>
            </div>
          </div>
        </Grid.Span>
      </Grid>
    </TheNavigationLayout>
  );
};

export default Registry;
