/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../../../components/marketing/header";
import Hero from "../../../components/marketing/hero";
import Footer from "../../../components/marketing/footer";
import DataGeneration from "../../../components/marketing/dataGeneration";
import SplitSection from "../../../components/marketing/splitSection";
import Image from "next/image";
import SignUp from "../../../components/marketing/signup";
import { useForm } from "react-hook-form";
import type { TemplateForm } from "../../(core)/templates/types";
import { DataTypes } from "../../../utilities/constants";
import Features from "../../../components/marketing/features";
// import MoreFeatures from "../../../components/marketing/moreFeatures";
import Understand from "../../../components/marketing/understand";

export default function LandingPage() {
  const [row, setRow] = useState(10);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-[#1D1E39]");
    body.classList.add("text-white");
  }, []);

  const topRef = useRef(null);
  const whatRef = useRef(null);
  const whyRef = useRef(null);
  const howRef = useRef(null);

  const handleScroll = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const defaultValues: TemplateForm = {
    fieldList: [
      {
        fieldName: "Name",
        dataType: DataTypes[2],
        constraints: [],
      },
      {
        fieldName: "E-Mail",
        dataType: DataTypes[3],
        constraints: [],
      },
      {
        fieldName: "Language",
        dataType: DataTypes[0],
        constraints: [],
      },
    ],
    templateName: "",
    isOpen: true,
  };

  const methods = useForm<TemplateForm>({ defaultValues });

  const [scale, setScale] = useState(0.75);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 630) setScale(0.4);
    else setScale(0.75);
  };

  // create an event listener
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("You are on the browser");
      handleResize();

      // ✅ Can use window here
      window.addEventListener("resize", handleResize);
    }
  }, []);
  return (
    <body className="font-JetBrainsMono text-white">
      <div id="landing" className="relative min-h-screen w-full">
        <span ref={topRef} className="invisible" />
        <Image
          src="/assets/globe.png"
          className="fixed top-40 z-0 mx-auto animate-globe opacity-50 bg-blend-color-burn md:-right-[20em] md:top-[12em]"
          width={1300 * 0.7}
          height={1387 * 0.7}
          alt="globe"
        />
        <Header
          scrollToTop={() => handleScroll(topRef)}
          scrollToWhat={() => handleScroll(whatRef)}
          scrollToWhy={() => handleScroll(whyRef)}
          scrollToHow={() => handleScroll(howRef)}
        />
        <Hero />
        <span ref={whatRef} className="invisible" />
        <div className="relative">
          <DataGeneration
            methods={methods}
            row={row}
            setRow={setRow}
            scale={scale}
          />
          <div className="absolute bottom-[50%] left-1/2 z-20  lg:left-0">
            <Image
              className="relative left-4 top-[19rem] scale-150 lg:left-20"
              src="/assets/vertical-yellow-dashed.svg"
              alt="templates screenshot"
              width={4}
              height={80}
            />
            <Image
              className="relative top-48 scale-150 lg:top-56 lg:left-28"
              src="/assets/vertical-white-dashed.svg"
              alt="templates screenshot"
              width={4}
              height={80}
            />
          </div>
          <Features methods={methods} rows={row} />
        </div>
        <span ref={whyRef} className="invisible" />
        {/* <MoreFeatures /> */}
        <span ref={howRef} className="invisible" />
        <SplitSection scale={scale} />
        <Understand />
        <SignUp />
        <Footer />
      </div>
    </body>
  );
}
