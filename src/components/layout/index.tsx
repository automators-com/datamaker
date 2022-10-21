import { useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";

type defaultLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: defaultLayoutProps) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <Header />
        <div className="flex h-full w-full flex-row">
          <Sidebar open={isNavOpen} setOpen={setIsNavOpen} />
          <main className="w-full">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
