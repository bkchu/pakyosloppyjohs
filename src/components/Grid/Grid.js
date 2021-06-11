import React, { forwardRef } from "react";
import clsx from "clsx";
import {
  getGridClasses,
  getColStartClasses,
  getColEndClasses,
  getColSpanClasses,
} from "./gridClasses";

const Grid = ({ cols = 12, children, className = "" }) => {
  const _classNames = clsx(
    "grid",
    "gap-2 laptop:gap-6",
    ...getGridClasses(cols),
    className
  );

  return <div className={_classNames}>{children}</div>;
};

const GridSpan = forwardRef(
  ({ start, end, span, children, className = "", ...props }, ref) => {
    if (start === undefined) {
      throw Error("Must have `start` value");
    }

    const _classNames = clsx(
      ...getColEndClasses(end),
      ...getColSpanClasses(span),
      ...getColStartClasses(start),
      className
    );

    return (
      <div className={_classNames} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Grid.Span = GridSpan;

export default Grid;
