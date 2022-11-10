"use client";
import { useEffect, useState } from "react";
import { NavContext, ThemeContext } from "../components/context/context";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { classNames } from "../utilities/className";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("root");

  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      <ThemeContext.Provider value={{ theme, setTheme: () => {} }}>
        <html lang="en">
          {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
          <head />
          <body
            className={classNames(
              theme,
              "flex h-screen w-screen flex-col bg-base-100"
            )}
          >
            <Header theme={theme} setTheme={setTheme} />
            <div className="flex h-full w-full flex-row">
              <Sidebar open={isNavOpen} setOpen={setIsNavOpen} />
              <main>{children} </main>
            </div>
          </body>
        </html>
      </ThemeContext.Provider>
    </NavContext.Provider>
  );
}
