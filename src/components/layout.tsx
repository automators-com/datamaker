import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

type defaultLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: defaultLayoutProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen auto-cols-max auto-rows-max flex-col font-sans text-white">
        <Header />
        <div className="flex h-full w-full">
          <Sidebar open={open} setOpen={setOpen} />
          <main className="">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
