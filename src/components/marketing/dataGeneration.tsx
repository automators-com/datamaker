import { EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import type { UseFormReturn } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import CollapsedContainer from "../../app/(core)/templates/collapsedContainer";
import type { TemplateForm } from "../../app/(core)/templates/types";
import { PaperAirplaneIcon as PaperAirplaneIconOutline } from "@heroicons/react/24/solid";
import { Input } from "../input";
import { useState } from "react";

export default function DataGeneration({
  methods,
}: {
  methods: UseFormReturn<TemplateForm, any>;
}) {
  const scale = 0.7;

  const [row, setRow] = useState(10);
  const F = methods.getValues("fieldList");
  console.log(F);

  return (
    <section
      id="what"
      className="relative z-10 flex h-auto flex-col items-center justify-start overflow-visible bg-[#1D1E39]"
    >
      <div className="relative -top-80 z-40 mx-auto mt-8 min-h-[400px] w-3/4 rounded-md bg-white shadow-lg">
        <FormProvider {...methods}>
          <form
            className="relative flex h-full rounded-l-md bg-base-100 lg:flex-1"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            // onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="p-6 sm:p-6 md:p-8 lg:p-9">
              {F.map((item, index) => {
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

            <div className="flex min-w-[300px] flex-col gap-3 p-6 sm:p-6 md:p-8 lg:border-l lg:p-9">
              <p className="flex items-center gap-2 pb-3 pt-6 text-xs text-primary">
                {" "}
                <span> Render Data with </span>
                <Input
                  addClass="w-16 pr-1"
                  type="number"
                  setValue={(e) => setRow(Number(e.target.value))}
                  value={row}
                />{" "}
                <span>rows</span>
              </p>
              <button className="btn btn-primary-accent">
                {" "}
                <EyeIcon /> Preview data table{" "}
              </button>
              <button className="btn btn-primary">
                {" "}
                <PaperAirplaneIconOutline /> Export/Send Data{" "}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className="-mt-80 flex h-96 w-full flex-col items-center bg-[#1D1E39]">
        <p className="my-40 max-w-[30em] text-center text-2xl">
          »
          <span className="text-[#459CA7]">
            Rapidly Generate Synthetic Data
          </span>{" "}
          With A Data Generator Tool That Always Delivers«
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center pb-10 md:flex-row">
        <div className="relative my-10 flex h-64 w-64 flex-col items-center justify-start rounded-md bg-white p-8 text-primary">
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
        </div>
        <div className="relative mx-8 my-10 flex h-64 w-64 flex-col items-center justify-start rounded-md bg-white p-8 text-primary">
          <Image
            className="absolute -top-6"
            src="/assets/smile-icon.svg"
            alt="smile icon"
            width={72 * scale}
            height={72 * scale}
          />
          <p className="my-4 text-[#482B7C]">Data made easy</p>
          <p className="text-center text-xs">
            Unlike conventional data masking tools, this JSON generator doesn’t
            require any form of production data or data anonymisation knowledge.
            Simply set minimum and maximum constraints for texts and numerals,
            and our data generator will do the rest.
          </p>
        </div>
        <div className="relative my-10 flex h-64 w-64 flex-col items-center justify-start rounded-md bg-white  p-8 text-primary">
          <Image
            className="absolute -top-6"
            src="/assets/click-icon.svg"
            alt="click icon"
            width={72 * scale}
            height={72 * scale}
          />
          <p className="my-4 text-[#459CA7]">Fit-for-purpose</p>
          <p className="text-center text-xs">
            Stop struggling with ad-hoc scripts or complex tools to generate the
            data you need. Datamaker is purpose-built to quickly and easily
            generate the synthetic test data you need with exceptional
            input-to-output consistency across all data types.
          </p>
        </div>
      </div>
      <div className="flex h-auto w-full flex-col items-center md:flex-row">
        <Image
          className="relative md:-left-10"
          src="/assets/dashed-lines.svg"
          alt="click icon"
          width={963.198 * scale}
          height={622.426 * scale}
        />
        <p className="w-2/3 text-center text-2xl text-[#F46256] md:w-1/3 md:text-left md:text-3xl">
          <strong>High-Quality test data is hard to come by,</strong> and using
          production data in test environments{" "}
          <span className="text-white">is risky.</span>
        </p>
      </div>
      <div className="flex w-full items-center justify-center px-10 py-40">
        <p className="relative inline text-lg md:w-1/2">
          <span className="float-left flex h-6 items-center pr-4">
            <Image
              src="/assets/red-dots.svg"
              alt="red dots"
              width={38 * scale}
              height={10 * scale}
            />
          </span>
          At Automators, we developed{" "}
          <span className="text-[#F46256]">datamaker</span> to make it super
          easy to rapidly generate fit-for-purpose data that emulates and
          behaves just like the real thing, giving you the power to create as
          much data as you need, when you need it, wherever you need it.
        </p>
      </div>
    </section>
  );
}
