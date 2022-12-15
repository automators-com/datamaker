/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import { useEffect, useRef } from "react";
import Header from "../../../components/marketing/header";
import Hero from "../../../components/marketing/hero";
import Footer from "../../../components/marketing/footer";
import DataGeneration from "../../../components/marketing/dataGeneration";
import Image from "next/image";
import SignUp from "../../../components/marketing/signup";
import Features from "../../../components/marketing/features";

export default function LandingPage() {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-[#1D1E39]");
    body.classList.add("text-white");
  }, []);

  const whatRef = useRef(null);
  const whyRef = useRef(null);
  const howRef = useRef(null);

  const handleScroll = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="landing" className="relative min-h-screen w-full">
      <Image
        src="/assets/globe2.png"
        className="fixed top-40 z-0 mx-auto animate-globe opacity-50 bg-blend-color-burn md:-right-[20em] md:top-[12em]"
        width={1300 * 0.7}
        height={1387 * 0.7}
        alt="globe"
      />
      <Header
        scrollToWhat={() => handleScroll(whatRef)}
        scrollToWhy={() => handleScroll(whyRef)}
        scrollToHow={() => handleScroll(howRef)}
      />
      <Hero />

      <span ref={whatRef} className="invisible" />
      <DataGeneration />
      <Features />
      <span ref={whyRef} className="invisible" />
      <section className="relative z-10 flex h-96 flex-col items-center justify-center bg-gradient-to-b from-[#1D1E39] to-[#482B7C]">
        Section 3
      </section>
      <span ref={howRef} className="invisible" />
      <section className="relative z-10 flex h-96 items-center justify-center">
        <div className="h-full w-full bg-[#459CA7]">Left</div>
        <div className="h-full w-full bg-[#1D1E39]">Right</div>
      </section>
      <section className="flex h-[100em] flex-col items-center justify-center bg-white text-black">
        Section 5
      </section>
      <SignUp />
      <Footer />
    </div>
  );
}
