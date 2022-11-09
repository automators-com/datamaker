"use client";
import { useState } from "react";
import { NavContext } from "../components/context/navContext";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body className="contrast flex h-screen w-screen flex-col bg-base-100">
          <Header />
          <div className="flex h-full w-full flex-row">
            <Sidebar open={isNavOpen} setOpen={setIsNavOpen} />
            <main>{children} </main>
          </div>
        </body>
      </html>
    </NavContext.Provider>
  );
}
