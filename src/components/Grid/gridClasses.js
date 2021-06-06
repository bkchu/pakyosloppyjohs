const gridClasses = [
  "grid-cols-1",
  "grid-cols-2",
  "grid-cols-3",
  "grid-cols-4",
  "grid-cols-5",
  "grid-cols-6",
  "grid-cols-7",
  "grid-cols-8",
  "grid-cols-9",
  "grid-cols-10",
  "grid-cols-11",
  "grid-cols-12",
]

const laptopGridClasses = [
  "laptop:grid-cols-1",
  "laptop:grid-cols-2",
  "laptop:grid-cols-3",
  "laptop:grid-cols-4",
  "laptop:grid-cols-5",
  "laptop:grid-cols-6",
  "laptop:grid-cols-7",
  "laptop:grid-cols-8",
  "laptop:grid-cols-9",
  "laptop:grid-cols-10",
  "laptop:grid-cols-11",
  "laptop:grid-cols-12",
]

const startClasses = [
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
  "col-start-8",
  "col-start-9",
  "col-start-10",
  "col-start-11",
  "col-start-12",
]

const laptopStartClasses = [
  "laptop:col-start-1",
  "laptop:col-start-2",
  "laptop:col-start-3",
  "laptop:col-start-4",
  "laptop:col-start-5",
  "laptop:col-start-6",
  "laptop:col-start-7",
  "laptop:col-start-8",
  "laptop:col-start-9",
  "laptop:col-start-10",
  "laptop:col-start-11",
  "laptop:col-start-12",
]

const endClasses = [
  "col-end-1",
  "col-end-2",
  "col-end-3",
  "col-end-4",
  "col-end-5",
  "col-end-6",
  "col-end-7",
  "col-end-8",
  "col-end-9",
  "col-end-10",
  "col-end-11",
  "col-end-12",
]

const laptopEndClasses = [
  "laptop:col-end-1",
  "laptop:col-end-2",
  "laptop:col-end-3",
  "laptop:col-end-4",
  "laptop:col-end-5",
  "laptop:col-end-6",
  "laptop:col-end-7",
  "laptop:col-end-8",
  "laptop:col-end-9",
  "laptop:col-end-10",
  "laptop:col-end-11",
  "laptop:col-end-12",
]

const spanClasses = [
  "col-span-1",
  "col-span-2",
  "col-span-3",
  "col-span-4",
  "col-span-5",
  "col-span-6",
  "col-span-7",
  "col-span-8",
  "col-span-9",
  "col-span-10",
  "col-span-11",
  "col-span-12",
]

const laptopSpanClasses = [
  "laptop:col-span-1",
  "laptop:col-span-2",
  "laptop:col-span-3",
  "laptop:col-span-4",
  "laptop:col-span-5",
  "laptop:col-span-6",
  "laptop:col-span-7",
  "laptop:col-span-8",
  "laptop:col-span-9",
  "laptop:col-span-10",
  "laptop:col-span-11",
  "laptop:col-span-12",
]

export const getGridClasses = cols => {
  const isLaptop = Array.isArray(cols)

  return isLaptop
    ? [gridClasses[cols[0] - 1], laptopGridClasses[cols[1] - 1]]
    : [gridClasses[cols - 1], laptopGridClasses[cols - 1]]
}

export const getColStartClasses = start => {
  const isLaptop = Array.isArray(start)

  return isLaptop
    ? [startClasses[start[0] - 1], laptopStartClasses[start[1] - 1]]
    : [startClasses[start - 1], laptopStartClasses[start - 1]]
}

export const getColEndClasses = end => {
  const isLaptop = Array.isArray(end)

  return isLaptop
    ? [endClasses[end[0] - 1], laptopEndClasses[end[1] - 1]]
    : [endClasses[end - 1], laptopEndClasses[end - 1]]
}

export const getColSpanClasses = span => {
  if (span === "full") {
    return ["col-span-full"]
  }
  const isLaptop = Array.isArray(span)

  return isLaptop
    ? [spanClasses[span[0] - 1], laptopSpanClasses[span[1] - 1]]
    : [spanClasses[span - 1], laptopSpanClasses[span - 1]]
}
