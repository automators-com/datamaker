import { useState } from "react";
import LogoWhite from "../../public/assets/LogoWhite.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex h-20 w-full">
        <div className="flex w-20 items-center justify-center bg-automatorsPurple">
          <LogoWhite />
        </div>
        <div className="flex w-full items-center bg-automatorsBlue p-7 text-white">
          <h1 className="b-2 text-xl font-extralight tracking-widest">
            TEST:DATA
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
