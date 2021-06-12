import clsx from "clsx";
import React, { Fragment } from "react";
import Grid from "../Grid/Grid";
import TimelineHeadings from "./TimelineHeadings";
import TimelinePhoto from "./TimelinePhoto";

const Timeline = ({ timeline }) => {
  return timeline.map((section, i) => {
    const sectionClsx = clsx(
      "flex",
      "flex-col",
      "lg:flex-row",
      "space-y-12",
      "lg:space-y-0",
      "lg:space-x-12",
      "items-center",
      "px-16",
      "last:pb-36",
      "pt-16",
      "lg:pb-36",
      section.sectionImageFileNames.length > 4
        ? ["max-w-full", "overflow-x-auto"]
        : null
    );
    return (
      <Fragment key={i}>
        <TimelineHeadings
          date={section.sectionDate}
          title={section.sectionTitle}
        />
        <Grid.Span start={1} span={12} className="mb-36 last:mb-0">
          <div className={sectionClsx}>
            {section.sectionImageFileNames.map((fileName) => (
              <TimelinePhoto key={fileName} fileName={fileName} />
            ))}
          </div>
        </Grid.Span>
      </Fragment>
    );
  });
};

export default Timeline;
