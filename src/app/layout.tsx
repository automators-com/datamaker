"use client";
import { useState } from "react";
import { NavContext, ThemeContext } from "../components/context/context";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { classNames } from "../utilities/className";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("root");

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <html lang="en">
            <head />
            <body
              className={classNames(
                theme,
                "flex h-[calc(100vh_-_5rem)] max-h-[calc(100vh_-_5rem)] w-screen flex-col overflow-scroll bg-base-100"
              )}
            >
              <Header
                theme={theme}
                setTheme={setTheme}
                setSidebarOpen={setSidebarOpen}
              />
              <div className="flex flex-row">
                <Sidebar
                  open={isNavOpen}
                  setOpen={setIsNavOpen}
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                <main className="h-[calc(100vh_-_5rem)] max-h-[calc(100vh_-_5rem)] w-full overflow-auto">
                  {children}
                </main>
              </div>
            </body>
          </html>
        </ThemeContext.Provider>
      </NavContext.Provider>
    </QueryClientProvider>
  );
}
