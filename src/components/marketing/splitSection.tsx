/* eslint-disable @typescript-eslint/no-floating-promises */

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  squareVariants,
  startAnimation,
  stopAnimation,
} from "../../utilities/controlAnimation";

export default function SplitSection({ scale }: { scale: number }) {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) startAnimation(controls);
    else stopAnimation(controls);
  }, [controls, isInView]);

  return (
    <section
      className="relative z-10 flex h-96 flex-col items-center justify-center md:flex-row"
      ref={ref}
    >
      <div className="flex h-full w-full flex-col bg-[#482B7C] sm:flex-row">
        <motion.div
          className="flex w-full flex-col items-center justify-center px-10 pt-10 sm:w-2/3 sm:px-20 sm:pt-20 md:items-start"
          transition={{ duration: 2 }}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
        >
          <strong className="text-xl">Multiple Templates</strong>
          <p className="py-10 text-center text-sm sm:pb-20 md:text-left">
            <span className="float-left flex h-4 items-center pr-2">
              <Image
                src="/assets/yellow-dots.svg"
                alt="yellow dots"
                width={38 * scale}
                height={10 * scale}
              />
            </span>
            Multiple reusable templates and data export options allows you to
            loop in different teams and stakeholders as needed, so you can avoid
            costly delays and errors.
          </p>
        </motion.div>
        <motion.div
          className="mb-6 flex w-full items-center justify-center sm:w-1/3 "
          transition={{ duration: 2 }}
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
        >
          <Image
            src="/assets/clipboard-icon.svg"
            width={116.789 * scale}
            height={137.114 * scale}
            alt="clipboard icon"
          />
        </motion.div>
      </div>
      <div className="flex h-full w-full flex-col bg-[#1D1E39] sm:flex-row">
        <motion.div
          className="flex w-full flex-col items-center justify-center px-10 pt-10 sm:w-2/3 sm:px-20 sm:pt-20 md:items-start"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
          transition={{ duration: 2 }}
        >
          <strong className="text-xl">The future is AI</strong>
          <p className="py-10 text-center text-sm sm:pb-20 md:text-left">
            <span className="float-left flex h-4 items-center pr-2">
              <Image
                src="/assets/yellow-dots.svg"
                alt="yellow dots"
                width={38 * scale}
                height={10 * scale}
              />
            </span>
            In the coming days, we want to have AI create data for you based on
            simple text input, so you can be even more productive and save time,
            money, and headaches.
          </p>
        </motion.div>
        <motion.div
          className="mb-6 flex w-full  items-center justify-center sm:w-1/3"
          transition={{ duration: 2 }}
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
        >
          <Image
            src="/assets/terminal-icon.svg"
            width={130.241 * scale}
            height={119.805 * scale}
            alt="terminal icon"
          />
        </motion.div>
      </div>
    </section>
  );
}
