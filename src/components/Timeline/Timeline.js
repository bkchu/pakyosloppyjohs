import React, { Fragment } from "react";
import Grid from "../Grid/Grid";
import TimelineHeadings from "./TimelineHeadings";
import TimelinePhoto from "./TimelinePhoto";

const Timeline = ({ timeline }) => {
  return timeline.map((section, i) => (
    <Fragment key={i}>
      <TimelineHeadings
        date={section.sectionDate}
        title={section.sectionTitle}
      />
      <Grid.Span start={1} span={12} className="mb-32 last:mb-0">
        <div className="flex flex-col md:flex-row w-full items-center justify-center pt-0 md:p-12 md:pt-0">
          {section.sectionImageFileNames.map((fileName) => (
            <TimelinePhoto key={fileName} fileName={fileName} />
          ))}
        </div>
      </Grid.Span>
    </Fragment>
  ));
};

export default Timeline;
