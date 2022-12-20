import Image from "next/image";
import type { StaticImageData } from "next/image";
import bg1 from "../../../public/assets/understand-1.jpg";
import bg2 from "../../../public/assets/understand-2.jpg";
import bg3 from "../../../public/assets/understand-3.jpg";
import bg4 from "../../../public/assets/understand-4.jpg";
import bg5 from "../../../public/assets/understand-5.jpg";

export default function Understand() {
  const scale = 0.7;
  return (
    <section className="flex flex-col items-center justify-start bg-white pt-40 pb-20 text-black">
      <p className="text-center text-3xl">
        Understand How Datamaker Makes Your <br /> Job Easier
      </p>

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
      <div className="mt-10 flex w-full flex-col gap-7 py-10 lg:flex-row xl:flex-row">
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
      </div>
      <div className="mt-10 flex w-full flex-col gap-7 py-10 lg:flex-row-reverse xl:flex-row-reverse">
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
      <span className="absolute -top-6 -right-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#459CA7] bg-white text-center text-[#459CA7]">
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
      <span className="absolute -top-6 -left-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#F46256] bg-white text-center">
        {number}
      </span>
      <p className="text-center text-xl text-white lg:text-right xl:text-right">
        {headline}
      </p>
    </div>
  );
}
