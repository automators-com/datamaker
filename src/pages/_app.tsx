// src/pages/_app.tsx
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { useState } from "react";
import { NavContext } from "../components/context/navContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <SessionProvider session={session}>
      <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
        <Component {...pageProps} />
      </NavContext.Provider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
