import type { AnimationControls } from "framer-motion";


export const squareVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 40, type: "spring", stiffness: 120, delay: 0.2 },
  },
  hidden: { opacity: 0, scale: 0.5 },
};

export async function startAnimation(controls:  AnimationControls) {
    await controls
      .start("visible")
      .then()
      .catch((err) => console.log(err));
  }


  export async function stopAnimation(controls:  AnimationControls) {
    await controls
      .start("hidden")
      .then()
      .catch((err) => console.log(err));
  }