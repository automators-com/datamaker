"use client";
import { useState } from "react";
import { NavContext } from "../../components/context/context";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import "../globals.css";

export default function CoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("root");

  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
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
    </NavContext.Provider>
  );
}
