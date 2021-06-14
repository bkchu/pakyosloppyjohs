import React, { useState } from "react";
import Button from "../components/Button/Button";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Image from "../components/Image/Image";
import Input from "../components/Input/Input";
import Spacer from "../components/Spacer/Spacer";
import TheNavigationLayout from "../layouts/TheNavigationLayout";

const TheWedding = () => {
  const [isPasswordInputEnabled, setIsPasswordInputEnabled] = useState();

  const onPasswordChange = (event) => {
    if (event.target.value.toLowerCase().trim() === "aloha2021") {
      window.location.replace("https://www.wedhawaii.com/samuel-and-grace");
    }
  };

  return (
    <TheNavigationLayout title="The Wedding">
      <Grid className="md:min-h-[calc(100vh-96px)] pb-24">
        <Grid.Span className="h-full" start={2} span={[10, 10, 4, 4, 4]}>
          <div className="h-full flex flex-col-reverse lg:flex-col items-end justify-center">
            <Heading h="body-md" as="p" className="text-left lg:text-right text-2xl">
              We can’t say we do without all of you! Please join us, virtually,
              as we exchange our vows.
            </Heading>
            <Spacer size="16" />
            <Image
              fileName="venue"
              className="w-full rounded-3xl shadow-photo mt-16 lg:mt-0"
            />
          </div>
        </Grid.Span>

        <Grid.Span
          className="h-full hidden lg:block"
          start={6}
          span={[0, 0, 0, 2, 2]}
        >
          <div className="h-full flex items-center justify-center">
            <div className="bg-black w-px h-[calc(100%-256px)] mx-auto"></div>
          </div>
        </Grid.Span>

        <Grid.Span
          className="h-full mt-12 lg:mt-0"
          start={[2, 2, 8, 8, 8]}
          span={[10, 10, 4, 4, 4]}
        >
          <div className="h-full flex flex-col items-start justify-center">
            <Heading h="eyebrow" as="p">
              Date
            </Heading>
            <Heading h="h1" as="h3">
              Thursday, July 1, 2021
            </Heading>
            <Spacer size="6" />
            <Heading h="eyebrow" as="p">
              Time
            </Heading>
            <Heading h="h1" as="h3">
              9:00pm CST
            </Heading>
            <Spacer size="6" />
            {isPasswordInputEnabled ? (
              <>
                <Heading h="h3" as="p" color="text-blue">
                  Please enter the password provided on your invitation to go to
                  the livestreaming site.
                </Heading>
                <Input type="password" onChange={onPasswordChange} placeholder="Password"/>
              </>
            ) : (
              <Button onClick={() => setIsPasswordInputEnabled(true)}>
                Watch Virtually
              </Button>
            )}
          </div>
        </Grid.Span>
      </Grid>
    </TheNavigationLayout>
  );
};

export default TheWedding;
