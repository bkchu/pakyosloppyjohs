import React from "react";
import Button from "../components/Button/Button";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Image from "../components/Image/Image";
import TheNavigationLayout from "../layouts/TheNavigationLayout";

const Registry = () => {
  return (
    <TheNavigationLayout>
      <Grid className="pb-24">
        <Grid.Span className="h-full" start={2} span={10}>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-2/5 h-[500px] lg:h-full mr-16 pt-16">
              <Image
                fileName="registry-page"
                className="rounded-3xl shadow-photo h-full"
              />
            </div>
            <div className="h-full flex flex-col items-start pt-8 lg:pt-16 max-w-[500px]">
              <Heading h="body" as="p" className="mb-4 text-2xl lg:text-3xl">
                Celebrating our marriage with you is the greatest gift we could
                ask for! However, for friends and family who have expressed an
                interest, a contribution to our honeymoon fund would be much
                appreciated!
              </Heading>
              <Button
                href="http://www.zola.com/registry/samandgraceinhawaii"
                target="_blank"
                noreferrer="true"
                noopener="true"
                nofollow="true"
              >
                Go To The Registry
              </Button>
            </div>
          </div>
        </Grid.Span>
      </Grid>
    </TheNavigationLayout>
  );
};

export default Registry;
