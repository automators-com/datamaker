"use client";
import { useState } from "react";
import { ThemeContext } from "../../components/context/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { NavContext } from "../../components/context/context";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import "../globals.css";
import MoonLoader from "../../components/loaders/moonLoader";
import { classNames } from "../../utilities/className";

export default function CoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("root");
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <MoonLoader />;
  }

  if (!session) {
    // redirect to sign in page if not signed in
    router.push("/signin");
  } else if (session && session.user) {
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
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
        </NavContext.Provider>
      </ThemeContext.Provider>
    );
  }
}
