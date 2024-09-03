export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const notificationsList = [
  // success tops
  {
    title: "success top-left",
    description: "success notification wth top-left position",
    position: "top-left" as const,
    status: "success" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "success top-center",
    description: "success notification wth top-center position",
    position: "top-center" as const,
    status: "success" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "success top-right",
    description: "success notification wth top-right position",
    position: "top-right" as const,
    status: "success" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  // error tops
  {
    title: "error top-left",
    description: "error notification wth top-left position",
    position: "top-left" as const,
    status: "error" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "error top-center",
    description: "error notification wth top-center position",
    position: "top-center" as const,
    status: "error" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "error top-right",
    description: "error notification wth top-right position",
    position: "top-right" as const,
    status: "error" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  // info tops
  {
    title: "info top-left",
    description: "info notification wth top-left position",
    position: "top-left" as const,
    status: "info" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "info top-center",
    description: "info notification wth top-center position",
    position: "top-center" as const,
    status: "info" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "info top-right",
    description: "info notification wth top-right position",
    position: "top-right" as const,
    status: "info" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  //warning tops
  {
    title: "warning top-left",
    description: "warning notification wth top-left position",
    position: "top-left" as const,
    status: "warning" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "warning top-center",
    description: "warning notification wth top-center position",
    position: "top-center" as const,
    status: "warning" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "warning top-right",
    description: "warning notification wth top-right position",
    position: "top-right" as const,
    status: "warning" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  ////////////////
  // bottom
  {
    title: "success bottom-left",
    description: "success notification wth bottom-left position",
    position: "bottom-left" as const,
    status: "success" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "success bottom-center",
    description: "success notification wth bottom-center position",
    position: "bottom-center" as const,
    status: "success" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "success bottom-right",
    description: "success notification wth bottom-right position",
    position: "bottom-right" as const,
    status: "success" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  // error bottoms
  {
    title: "error bottom-left",
    description: "error notification wth bottom-left position",
    position: "bottom-left" as const,
    status: "error" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "error bottom-center",
    description: "error notification wth bottom-center position",
    position: "bottom-center" as const,
    status: "error" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "error bottom-right",
    description: "error notification wth bottom-right position",
    position: "bottom-right" as const,
    status: "error" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  // info bottoms
  {
    title: "info bottom-left",
    description: "info notification wth bottom-left position",
    position: "bottom-left" as const,
    status: "info" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "info bottom-center",
    description: "info notification wth bottom-center position",
    position: "bottom-center" as const,
    status: "info" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "info bottom-right",
    description: "info notification wth bottom-right position",
    position: "bottom-right" as const,
    status: "info" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  //warning bottoms
  {
    title: "warning bottom-left",
    description: "warning notification wth bottom-left position",
    position: "bottom-left" as const,
    status: "warning" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "warning bottom-center",
    description: "warning notification wth bottom-center position",
    position: "bottom-center" as const,
    status: "warning" as const,
    duration: randomIntFromInterval(500, 8000),
  },
  {
    title: "warning bottom-right",
    description: "warning notification wth bottom-right position",
    position: "bottom-right" as const,
    status: "warning" as const,
    duration: randomIntFromInterval(500, 8000),
  },
];
