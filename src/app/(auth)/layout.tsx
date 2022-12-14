"use client";

import "../globals.css";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <main className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-[#459CA7] to-[#482B7C] px-4 pb-10">
        {children}
        <Image
          src="/assets/globe.png"
          className="invisible fixed top-40 z-0 mx-auto opacity-50 bg-blend-color-burn md:visible md:-right-[20em] md:top-[12em]"
          width={1300 * 0.7}
          height={1387 * 0.7}
          alt="globe"
        />
      </main>
    </div>
  );
}
