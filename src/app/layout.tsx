"use client";
import { useState } from "react";
import { ThemeContext } from "../components/context/context";
import { classNames } from "../utilities/className";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useState<string>("root");

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <html lang="en">
          <head />
          <body
            className={classNames(
              theme,
              "flex h-[calc(100vh_-_5rem)] max-h-[calc(100vh_-_5rem)] w-screen flex-col overflow-scroll bg-base-100"
            )}
          >
            {children}
          </body>
        </html>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}
