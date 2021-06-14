import React, { useState } from "react";
import Button from "../components/Button/Button";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Image from "../components/Image/Image";
import Input from "../components/Input/Input";
import Spacer from "../components/Spacer/Spacer";
import TheNavigationLayout from "../layouts/TheNavigationLayout";

const WEDDING_IN_UTC_TIME = new Date(Date.UTC(2021, 6, 2, 2));

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
            <Heading
              h="body-md"
              as="p"
              className="text-left lg:text-right text-2xl"
            >
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
          className="h-full mt-4 lg:mt-0"
          start={[2, 2, 8, 8, 8]}
          span={[10, 10, 4, 4, 4]}
        >
          <div className="h-full flex flex-col items-start justify-center">
            <div className="mb-8 bg-gray-200 px-4 py-4 -mx-4 rounded-lg flex">
              <div className="h-6 w-6 mr-2 text-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <Heading h="body-sm" className=" font-semibold">
                This is the date and time of the wedding in your current
                timezone.
              </Heading>
            </div>
            <Heading h="eyebrow" as="p">
              Date
            </Heading>
            <Heading h="h1" as="h3">
              {WEDDING_IN_UTC_TIME.toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Heading>
            <Spacer size="6" />
            <Heading h="eyebrow" as="p">
              Time
            </Heading>
            <Heading h="h1" as="h3">
              {WEDDING_IN_UTC_TIME.toLocaleTimeString([], {
                timeZoneName: "short",
              })}
            </Heading>
            <Spacer size="6" />
            {isPasswordInputEnabled ? (
              <>
                <Heading h="h3" as="p" color="text-blue">
                  Please enter the password provided on your invitation to go to
                  the livestreaming site.
                </Heading>
                <Input
                  type="password"
                  onChange={onPasswordChange}
                  placeholder="Password"
                />
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
