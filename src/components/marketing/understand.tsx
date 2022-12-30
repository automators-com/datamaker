/* eslint-disable @typescript-eslint/no-floating-promises */
import Image from "next/image";
import type { StaticImageData } from "next/image";
import bg1 from "../../../public/assets/understand-1.webp";
import bg2 from "../../../public/assets/understand-2.webp";
import bg3 from "../../../public/assets/understand-3.webp";
import bg4 from "../../../public/assets/understand-4.webp";
import bg5 from "../../../public/assets/understand-5.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { draw } from "../../utilities/draw";

export default function Understand() {
  const scale = 0.7;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: false });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: false });

  return (
    <section className="flex flex-col items-center justify-start bg-white pt-40 pb-20 text-black">
      <div className="relative w-full">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="200"
          viewBox="0 0 10 585"
          className="absolute -top-32 right-48 hidden scale-150 lg:inline"
          ref={ref3}
          initial="hidden"
          animate={isInView3 ? "visible" : undefined}
        >
          <motion.g
            id="Group_336"
            data-name="Group 336"
            transform="translate(-1337.5 -1898)"
          >
            <motion.rect
              id="Rectangle_16"
              variants={draw(0.3)}
              data-name="Rectangle 16"
              width="100"
              height="10"
              rx="5"
              transform="translate(1337.5 2306.5) rotate(-90)"
              fill="#1d1e39"
            />
            <motion.rect
              id="Rectangle_19"
              variants={draw(0.1)}
              data-name="Rectangle 19"
              width="237.5"
              height="10"
              rx="5"
              transform="translate(1337.5 2135.5) rotate(-90)"
              fill="#1d1e39"
            />
            <motion.rect
              id="Rectangle_17"
              variants={draw(0.35)}
              data-name="Rectangle 17"
              width="40"
              height="10"
              rx="5"
              transform="translate(1337.5 2362) rotate(-90)"
              fill="#1d1e39"
            />
            <motion.rect
              id="Rectangle_22"
              variants={draw(0.4)}
              data-name="Rectangle 22"
              width="10"
              height="10"
              rx="5"
              transform="translate(1337.5 2387.5) rotate(-90)"
              fill="#1d1e39"
            />
            <motion.rect
              id="Rectangle_23"
              variants={draw(0.45)}
              data-name="Rectangle 23"
              width="10"
              height="10"
              rx="5"
              transform="translate(1337.5 2483) rotate(-90)"
              fill="#1d1e39"
            />
            <motion.rect
              id="Rectangle_18"
              variants={draw(0.2)}
              data-name="Rectangle 18"
              width="40"
              height="10"
              rx="5"
              transform="translate(1337.5 2191) rotate(-90)"
              fill="#1d1e39"
            />
          </motion.g>
        </motion.svg>

        <p className="px-5 pt-10 text-center text-3xl md:px-0 md:pt-0">
          Understand How Datamaker Makes Your <br /> Job Easier
        </p>
      </div>

      <div className="mt-20 flex w-full flex-col gap-7 py-10 lg:flex-row xl:flex-row">
        <div className="flex w-full items-center justify-center px-8 lg:justify-end xl:justify-end">
          <BlueCard
            number={1}
            bg={bg1}
            headline={`Free Up Your Time To Focus On What Matters Most`}
          />
        </div>
        <div className="flex w-full items-center justify-center px-8 lg:justify-start xl:justify-start">
          <p className="w-[20rem] text-sm">
            <span className="float-left flex h-4 items-center pr-2">
              <Image
                src="/assets/blue-dots.svg"
                alt="blue dots"
                width={38 * scale}
                height={10 * scale}
              />
            </span>
            This powerful test data automation tool will free up your time so
            you and your team can focus on critical development processes and
            tasks. It is easy to use and{" "}
            <strong className="text-[#459CA7]">requires no coding</strong>,
            making it the perfect tool for busy developers and testers who want
            to create high-quality data sets quickly and efficiently.
          </p>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-col gap-7 py-10 lg:flex-row-reverse xl:flex-row-reverse">
        <div className="flex w-full items-center justify-center px-8 lg:justify-start xl:justify-start">
          <RedCard
            number={2}
            bg={bg2}
            headline={`Optimize Test Coverage and Run The Right Tests Every Time`}
          />
        </div>
        <div className="flex w-full items-center justify-center px-8 lg:justify-end xl:justify-end">
          <p className="w-[20rem] text-sm">
            <span className="float-left flex h-4 items-center pr-2">
              <Image
                src="/assets/red-dots.svg"
                alt="red dots"
                width={38 * scale}
                height={10 * scale}
              />
            </span>
            Avoid expensive and extensive software delivery delays caused by
            manual data generation and{" "}
            <strong className="text-[#F46256]">
              wipe out privacy bottlenecks
            </strong>{" "}
            that could be holding up your development process. This robust tool
            will help you automatically generate the right test data sets for
            your specific testing needs, so you can focus on optimizing test
            coverage and running the right tests every time.
          </p>
        </div>
      </div>
      <div className="relative mt-10 flex w-full flex-col gap-7 py-10 lg:flex-row xl:flex-row">
        <div className="flex w-full items-center justify-center px-8 lg:justify-end xl:justify-end">
          <BlueCard
            number={3}
            bg={bg3}
            headline={`Enterprise-Level Versatility`}
          />
        </div>
        <div className="flex w-full items-center justify-center px-8 lg:justify-start xl:justify-start">
          <p className="w-[20rem] text-sm">
            <span className="float-left flex h-4 items-center pr-2">
              <Image
                src="/assets/blue-dots.svg"
                alt="blue dots"
                width={38 * scale}
                height={10 * scale}
              />
            </span>
            Enterprises often have stricter data protection rules and need to
            control their own application infrastructure and data.{" "}
            <strong className="text-[#459CA7]">Datamaker is deployable</strong>{" "}
            in enterprise environments so that clients can configure their
            implementation based on their needs.
          </p>
        </div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="200"
          viewBox="0 0 10 585"
          ref={ref}
          className="absolute left-48 top-0 hidden scale-150 lg:inline"
          initial="hidden"
          animate={isInView ? "visible" : undefined}
        >
          <motion.g
            id="Group_334"
            data-name="Group 334"
            transform="translate(1347.5 2483) rotate(180)"
          >
            <motion.rect
              variants={draw(0.2)}
              id="Rectangle_16"
              data-name="Rectangle 16"
              width="100"
              height="10"
              rx="5"
              transform="translate(1337.5 2306.5) rotate(-90)"
              fill="#f46256"
            />
            <motion.rect
              variants={draw(0.35)}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              id="Rectangle_19"
              data-name="Rectangle 19"
              width="237.5"
              height="10"
              rx="5"
              transform="translate(1337.5 2135.5) rotate(-90)"
              fill="#f46256"
            />
            <motion.rect
              variants={draw(0.122)}
              id="Rectangle_17"
              data-name="Rectangle 17"
              width="40"
              height="10"
              rx="5"
              transform="translate(1337.5 2362) rotate(-90)"
              fill="#f46256"
            />
            <motion.rect
              variants={draw(0.1)}
              id="Rectangle_22"
              data-name="Rectangle 22"
              width="10"
              height="10"
              rx="5"
              transform="translate(1337.5 2387.5) rotate(-90)"
              fill="#f46256"
            />
            <motion.rect
              variants={draw(0.3)}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              id="Rectangle_18"
              data-name="Rectangle 18"
              width="40"
              height="10"
              rx="5"
              transform="translate(1337.5 2191) rotate(-90)"
              fill="#f46256"
            />
          </motion.g>
        </motion.svg>
      </div>
      <div className="relative mt-10 flex w-full flex-col gap-7 py-10 lg:flex-row-reverse xl:flex-row-reverse">
        <div className="flex w-full items-center justify-center px-8 lg:justify-start xl:justify-start">
          <RedCard
            number={4}
            bg={bg4}
            headline={`Total Control Over Your Data`}
          />
        </div>
        <div className="flex w-full items-center justify-center px-8 lg:justify-end xl:justify-end">
          <p className="w-[20rem] text-sm">
            <span className="float-left flex h-4 items-center pr-2">
              <Image
                src="/assets/red-dots.svg"
                alt="red dots"
                width={38 * scale}
                height={10 * scale}
              />
            </span>
            Create massive volumes of data for functional, load, and performance
            tests with ease. Test your application end-to-end with confidence,
            knowing that your production like test data is of the{" "}
            <strong className="text-[#F46256]">
              highest quality and integrity
            </strong>
            .
          </p>
        </div>
        <Image
          src="/assets/vertical-blue-dashed.svg"
          alt="templates screenshot"
          width={4}
          height={60}
        />
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="200"
          viewBox="0 0 10 585"
          ref={ref2}
          className="absolute right-48 hidden scale-150 lg:inline"
          initial="hidden"
          animate={isInView2 ? "visible" : undefined}
        >
          <motion.g
            id="Group_334"
            data-name="Group 334"
            transform="translate(1347.5 2483) rotate(180)"
          >
            <motion.rect
              variants={draw(0.38)}
              id="Rectangle_16"
              data-name="Rectangle 16"
              width="100"
              height="10"
              rx="5"
              transform="translate(1337.5 2306.5) rotate(-90)"
              fill="#459ca7"
            />
            <motion.rect
              variants={draw(0.5)}
              id="Rectangle_19"
              data-name="Rectangle 19"
              width="237.5"
              height="10"
              rx="5"
              transform="translate(1337.5 2135.5) rotate(-90)"
              fill="#459ca7"
            />
            <motion.rect
              variants={draw(0.3)}
              id="Rectangle_17"
              data-name="Rectangle 17"
              width="40"
              height="10"
              rx="5"
              transform="translate(1337.5 2362) rotate(-90)"
              fill="#459ca7"
            />
            <motion.rect
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              variants={draw(0.2)}
              id="Rectangle_22"
              data-name="Rectangle 22"
              width="10"
              height="10"
              rx="5"
              transform="translate(1337.5 2387.5) rotate(-90)"
              fill="#459ca7"
            />
            <motion.rect
              variants={draw(0.1)}
              id="Rectangle_23"
              data-name="Rectangle 23"
              width="10"
              height="10"
              rx="5"
              transform="translate(1337.5 2483) rotate(-90)"
              fill="#459ca7"
            />
            <motion.rect
              variants={draw(0.44)}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              id="Rectangle_18"
              data-name="Rectangle 18"
              width="40"
              height="10"
              rx="5"
              transform="translate(1337.5 2191) rotate(-90)"
              fill="#459ca7"
            />
          </motion.g>
        </motion.svg>
      </div>
      <div className="mt-10 flex w-full flex-col gap-7 py-10 lg:flex-row xl:flex-row">
        <div className="flex w-full items-center justify-center px-8 lg:justify-end xl:justify-end">
          <BlueCard
            number={5}
            bg={bg5}
            headline={`Generate and Distribute Test Data Definitions`}
          />
        </div>
        <div className="flex w-full items-center justify-center px-8 lg:justify-start xl:justify-start">
          <p className="w-[20rem] text-sm">
            <span className="float-left flex h-4 items-center pr-2">
              <Image
                src="/assets/blue-dots.svg"
                alt="blue dots"
                width={38 * scale}
                height={10 * scale}
              />
            </span>
            In Datamaker you can generate test data definitions that are shared
            with your colleagues—making it easy to work together on your test
            data needs.
          </p>
        </div>
      </div>
    </section>
  );
}

function BlueCard({
  headline,
  number,
  bg,
}: {
  headline: string;
  number: number;
  bg: StaticImageData;
}) {
  return (
    <div
      className="relative flex min-h-[15rem] w-[20rem] flex-col rounded-lg bg-[#459CA7] p-8"
      style={{
        backgroundImage: `linear-gradient(rgba(69, 156, 167, 1), rgba(69, 156, 167, 0.7), rgba(69, 156, 167, 0.3)), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="absolute -top-6 left-[43%] flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#459CA7] bg-white text-center text-[#459CA7] md:-right-5">
        {number}
      </span>
      <p className="text-center text-xl text-white lg:text-left xl:text-left">
        {headline}
      </p>
    </div>
  );
}

function RedCard({
  headline,
  number,
  bg,
}: {
  headline: string;
  number: number;
  bg: StaticImageData;
}) {
  return (
    <div
      className="relative flex min-h-[15rem] w-[20rem] flex-col rounded-lg bg-[#F46256] p-8 text-[#F46256] "
      style={{
        backgroundImage: `linear-gradient(rgba(244, 98, 86, 1), rgba(244, 98, 86, 0.9), rgba(244, 98, 86, 0.3)), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="absolute -top-6 left-[43%] flex  h-12 w-12 items-center justify-center rounded-full border-2 border-[#F46256] bg-white text-center md:-left-5">
        {number}
      </span>
      <p className="text-center text-xl text-white lg:text-right xl:text-right">
        {headline}
      </p>
    </div>
  );
}
