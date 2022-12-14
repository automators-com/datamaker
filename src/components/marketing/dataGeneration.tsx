/* eslint-disable @typescript-eslint/no-floating-promises */

import { EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import type { UseFormReturn } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import CollapsedContainer from "../../app/(core)/templates/collapsedContainer";
import type { TemplateForm } from "../../app/(core)/templates/types";
import { PaperAirplaneIcon as PaperAirplaneIconOutline } from "@heroicons/react/24/solid";
import { Input } from "../input";
import { handleClickScroll } from "../../utilities/scrollTo";
import { exportJson } from "../../utilities/exportData";
import { getTableData } from "../../utilities/tableData";
import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  squareVariants,
  startAnimation,
  stopAnimation,
} from "../../utilities/controlAnimation";
import ReactTooltip from "react-tooltip";

export default function DataGeneration({
  methods,
  row,
  setRow,
  scale,
}: {
  methods: UseFormReturn<TemplateForm, any>;
  row: number;
  scale: number;
  setRow: any;
}) {
  const [robotHover, setRobotHover] = useState(false);
  // const scale = 0.7;
  const Fields = methods.getValues("fieldList");
  const tableData: any[] = getTableData(row, Fields);

  const controls = useAnimation();
  const controls3 = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: false });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3);

  const controls4 = useAnimation();
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4);

  useEffect(() => {
    if (isInView || isInView2) startAnimation(controls);
    else stopAnimation(controls);

    console.log(isInView4);

    if (isInView4) {
      controls4.start({ opacity: 1 });
    }
  }, [
    controls,
    controls3,
    controls4,
    isInView,
    isInView2,
    isInView3,
    isInView4,
  ]);

  // framer motion scroll animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const { scrollYProgress: scrollYProgressLines } = useScroll({
    target: ref3,
  });

  const { scrollYProgress: scrollYTitle } = useScroll({
    target: ref4,
    offset: ["end end", "start start"],
  });

  return (
    <section className="relative z-10 flex h-auto flex-col items-center justify-start overflow-visible bg-[#1D1E39]">
      <Image
        className="absolute -top-36 left-20 hidden transition-all delay-1000 ease-in-out lg:inline-block"
        src="/assets/purple-robot.svg"
        alt="robot"
        width={180}
        height={180}
        onMouseEnter={() => setRobotHover(true)}
        onMouseLeave={() => setRobotHover(false)}
      />
      {robotHover && (
        <span className="absolute -top-40 left-20  w-20 -rotate-45 text-center text-xs italic text-primary transition-all delay-1000 ease-in-out">
          {" "}
          I eat data for breakfast.{" "}
        </span>
      )}
      <div
        id="generate-form"
        className="relative -top-[30em] z-40 mx-auto flex h-full w-[90%] flex-col rounded-md md:-top-[50em] md:w-2/3"
      >
        <div className="flex w-full flex-col items-center text-center">
          <div className="flex w-full flex-col items-center justify-center py-20 text-center md:py-56">
            <p className="mb-4 text-lg md:text-4xl">
              <strong className="text-center">
                Fake it. While you make it.
              </strong>
            </p>
            <p className="pt-2 text-lg md:text-4xl">
              With our intuitive point-and-click interface, creating
              high-quality synthetic data has never been easier.
            </p>
          </div>
          <p className="pt-2 text-[#08FFB3]">
            Get a sneak peek at how <br className="md:hidden" />
            to make data work for you!
          </p>
          <span
            id="down_arrow"
            className="m-2 mb-4 h-0 w-0 border-t-[5px] border-l-[5px] border-r-[5px] border-solid border-[#08FFB3] border-l-transparent border-r-transparent"
          ></span>
        </div>
        <FormProvider {...methods}>
          <form className="relative flex h-full flex-col items-center gap-y-9 rounded bg-white p-3 py-20 shadow-lg md:flex-row ">
            <div className="absolute top-0 right-0">
              <div
                data-tip
                data-for="general"
                className="rounded-bl-full bg-[#F46256] p-3 pl-6 pb-5 hover:bg-primary"
              >
                <Image
                  src="/assets/question-mark-icon.svg"
                  alt="question icon"
                  width={25}
                  height={25}
                />
              </div>
              <ReactTooltip
                id="general"
                delayHide={300}
                effect="solid"
                place="top"
                className="!rounded-md !bg-black !p-3"
              >
                <p className="w-60 text-xs">
                  {" "}
                  <strong>
                    This is a simplified preview of datamaker();
                  </strong>{" "}
                  - Withfull access you gain a multude of additional
                  field-types, constraints and dynamic functions.
                </p>
              </ReactTooltip>
            </div>

            <div className="w-full px-6 sm:px-6 md:w-2/3 md:px-8 lg:px-9">
              {Fields.map((item, index) => {
                return (
                  <CollapsedContainer
                    key={index}
                    index={index}
                    isSubmit={false}
                    landing={true}
                  />
                );
              })}
            </div>

            <div className="flex min-w-[200px] max-w-xs flex-col gap-3 px-6 sm:px-6 md:px-8 lg:border-l lg:px-9">
              <p className="flex items-center gap-2 pb-3  text-xs text-primary">
                <span> Render Data with </span>
                <Input
                  aria-label="Number of rows"
                  addClass="w-16 pr-1"
                  type="number"
                  setValue={(e) => setRow(Number(e.target.value))}
                  value={row}
                />
                <span>rows</span>
              </p>
              <button
                className="btn btn-primary-accent"
                onClick={(e) => {
                  e.preventDefault();
                  handleClickScroll("data-preview");
                }}
              >
                <EyeIcon /> Preview data table
              </button>
              <div className="flex w-auto items-center gap-3">
                <button
                  className="btn btn-primary w-full"
                  onClick={() => exportJson(tableData, "testData")}
                >
                  <PaperAirplaneIconOutline /> Export/Send Data
                </button>

                <div
                  data-tip
                  data-for="export"
                  className="rounded-full bg-[#F46256] p-2"
                >
                  <Image
                    src="/assets/question-mark-icon.svg"
                    alt="question icon"
                    width={10}
                    height={10}
                  />
                </div>
                <ReactTooltip
                  id="export"
                  place="top"
                  delayHide={300}
                  effect="solid"
                  className="!rounded-md !bg-black !p-3"
                >
                  <p className="w-60 text-xs">
                    {" "}
                    <strong>Exporting your data: </strong> we cover
                    industry-standards like <strong>JSON, CSV </strong> and{" "}
                    <strong> EXCEL, SQL </strong> and{" "}
                    <strong> RAW-Text. </strong>
                    Data can also be directly sent to pre-defined{" "}
                    <span className="text-[#EFFD53]"> endpoints or APIs</span>.
                  </p>
                </ReactTooltip>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>

      <motion.div
        className="relative -mt-60 flex w-full flex-1 flex-col items-center bg-[#1D1E39] px-5 pt-20 md:-mt-[40rem] md:px-0"
        style={{ opacity: scrollYProgress }}
        transition={{ duration: 1 }}
      >
        <span className="invisble absolute -top-14 text-xl" ref={ref}></span>
        <p className="mb-20 max-w-[30em] text-center text-2xl">
          ??
          <span className="text-[#459CA7]">
            Rapidly Generate Synthetic Data
          </span>{" "}
          With An Open Source Data Generator Tool That Always Delivers??
        </p>
        <div className="flex w-full flex-col items-center justify-center pb-10 md:flex-row">
          <motion.div
            className="relative my-10 flex h-72 w-72 flex-col items-center justify-start rounded-md bg-white p-8 text-primary"
            transition={{ duration: 1 }}
            ref={ref2}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
          >
            <Image
              className="absolute -top-6"
              src="/assets/heart-icon.svg"
              alt="heart icon"
              width={72 * scale}
              height={72 * scale}
            />
            <p className="my-4 text-[#F46256]">Built by testers</p>
            <p className="text-center text-xs">
              We put our hearts into creating this simple-to-use, automated,
              self-service fake data generator to make your software development
              and testing fast, accurate, versatile, and painless, so you can
              deliver better quality products to your customers sooner.
            </p>
          </motion.div>
          <motion.div
            className="relative mx-8 my-10 flex h-72 w-72 flex-col items-center justify-start rounded-md bg-white p-8 text-primary"
            transition={{ duration: 1 }}
            ref={ref2}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
          >
            <Image
              className="absolute -top-6"
              src="/assets/smile-icon.svg"
              alt="smile icon"
              width={72 * scale}
              height={72 * scale}
            />
            <p className="my-4 text-[#482B7C]">Data made easy</p>
            <p className="text-center text-xs">
              Unlike conventional data masking tools, this JSON generator
              doesn???t require any form of production data or data anonymisation
              knowledge. Simply set minimum and maximum constraints for texts
              and numerals, and our data generator will do the rest.
            </p>
          </motion.div>
          <motion.div
            className="relative my-10 flex h-72 w-72 flex-col items-center justify-start rounded-md bg-white  p-8 text-primary"
            transition={{ duration: 1 }}
            ref={ref2}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
          >
            <Image
              className="absolute -top-6"
              src="/assets/click-icon.svg"
              alt="click icon"
              width={72 * scale}
              height={72 * scale}
            />
            <p className="my-4 text-[#459CA7]">Fit-for-purpose</p>
            <p className="text-center text-xs" ref={ref3}>
              Stop struggling with ad-hoc scripts or complex tools to generate
              the data you need. Datamaker is purpose-built to quickly and
              easily generate the synthetic test data you need with exceptional
              input-to-output consistency across all data types.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative flex h-auto w-full flex-col items-center md:flex-row">
        {/* <span className="absolute -top-14 text-xl" > hiiii</span> */}

        {/* <Image
          className="relative md:-left-10"
          src="/assets/dashed-lines.svg"
          alt="click icon"
          width={963.198 * scale}
          height={622.426 * scale}
        /> */}

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="relative md:-left-10"
          width={963.198 * scale}
          height={622.426 * scale}
          viewBox="0 0 963.198 622.426"
        >
          <g
            id="Group_302"
            data-name="Group 302"
            transform="translate(142.526 -2029.363)"
          >
            <motion.path
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ pathLength: 1, pathOffset: scrollYProgressLines }}
              initial={{ pathLength: 1, pathOffset: 0 }}
              id="Path_67"
              data-name="Path 67"
              d="M.464,74.768c211.777,4.6,271.991,206.464,420.863,193.537S730.635,79.96,595.952,23.062C459.494-34.587,300.964,40.209,339.791,139s545.537,238.44,545.537,238.44"
              transform="translate(819.437 2393.124) rotate(163)"
              fill="none"
              stroke="#442e78"
              stroke-linecap="round"
              stroke-width="4"
              stroke-dasharray="4 12"
            />
            <path
              stroke={"rgb(29,30,57)"}
              stroke-dasharray="10 12"
              strokeDashoffset="0"
              stroke-width="5"
              id="Path_67"
              data-name="Path 67"
              d="M.464,74.768c211.777,4.6,271.991,206.464,420.863,193.537S730.635,79.96,595.952,23.062C459.494-34.587,300.964,40.209,339.791,139s545.537,238.44,545.537,238.44"
              transform="translate(819.437 2393.124) rotate(163)"
              fill="none"
            />
            <motion.path
              id="Path_66"
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ pathLength: 1, pathOffset: scrollYProgressLines }}
              initial={{ pathLength: 1, pathOffset: 0 }}
              data-name="Path 66"
              d="M1951.05,1508.143c-226.722-1.4-324.5-217.674-453.9-220.535s-301.772,211.377-156.792,280.433,311.027,52.331,271.443-70-575-81.441-575-81.441"
              transform="matrix(0.985, -0.174, 0.174, 0.985, -1384.708, 1174.508)"
              fill="none"
              stroke="#f46256"
              stroke-linecap="round"
              stroke-width="4"
              stroke-dasharray="4 12"
            />
            <path
              stroke={"rgb(29,30,57)"}
              stroke-dasharray="10 12"
              strokeDashoffset="0"
              stroke-width="5"
              id="Path_66"
              data-name="Path 66"
              d="M1951.05,1508.143c-226.722-1.4-324.5-217.674-453.9-220.535s-301.772,211.377-156.792,280.433,311.027,52.331,271.443-70-575-81.441-575-81.441"
              transform="matrix(0.985, -0.174, 0.174, 0.985, -1384.708, 1174.508)"
              fill="none"
            />
          </g>
        </motion.svg>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          animate={controls4}
          ref={ref4}
          style={{ opacity: scrollYTitle }}
          className="invisible w-2/3 animate-[cssAnimation_0s_3s_forwards] text-center text-2xl text-[#F46256] md:w-1/3 md:text-left md:text-3xl"
        >
          <strong>High-Quality test data is hard to come by,</strong> and using
          production data in test environments{" "}
          <span className="text-white">is risky.</span>
        </motion.p>
      </div>
      <div className="invisible flex w-full animate-[cssAnimation_0s_3s_forwards] items-center justify-center px-10 pb-40 pt-14">
        <p className="relative inline text-lg font-light md:w-1/2">
          <span className="float-left flex h-6 items-center pr-4">
            <Image
              src="/assets/red-dots.svg"
              alt="red dots"
              width={38 * scale}
              height={10 * scale}
            />
          </span>
          <strong>At Automators</strong>, we developed{" "}
          <span className="text-[#F46256]">datamaker</span> to make it super
          easy to rapidly generate fit-for-purpose data that emulates and
          behaves just like the real thing, giving you the power to create as
          much data as you need, when you need it, wherever you need it.
        </p>
      </div>
    </section>
  );
}
