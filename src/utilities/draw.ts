export const draw = (i: number) => {
  return {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      const delay = i;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 5 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
};
