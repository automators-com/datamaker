"use client";

import { useEffect } from "react";
import Header from "../../../components/marketing/header";
import Hero from "../../../components/marketing/hero";
import Footer from "../../../components/marketing/footer";
import DataGeneration from "../../../components/marketing/dataGeneration";
import Image from "next/image";
import SignUp from "../../../components/marketing/signup";

export default function LandingPage() {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-[#1D1E39]");
    body.classList.add("text-white");
  }, []);

  return (
    <div id="landing" className="relative min-h-screen w-full">
      <Image
        src="/assets/globe2.png"
        className="animate-globe fixed top-40 z-0 mx-auto opacity-50 bg-blend-color-burn md:-right-[20em] md:top-[12em]"
        width={1300 * 0.7}
        height={1387 * 0.7}
        alt="globe"
      />
      <Header />
      <Hero />

      <DataGeneration />
      <section className="relative z-10 flex h-[50em] flex-col items-center justify-center bg-gradient-to-t from-[#459CA7] to-[#482B7C]">
        Section 2
      </section>
      <section className="relative z-10 flex h-96 flex-col items-center justify-center bg-gradient-to-b from-[#1D1E39] to-[#482B7C]">
        Section 3
      </section>
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


