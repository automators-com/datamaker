import { useContext } from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import { NavContext } from "../context/navContext";

type defaultLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: defaultLayoutProps) => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);
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
