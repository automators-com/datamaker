import { useContext, useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import { NavContext } from "../context/navContext";
import { MenuI } from "../menu";
import { Input } from "../input";
import DropDown from "../dropdown";

type defaultLayoutProps = {
  children: React.ReactNode;
};

// testing

// const people = [
//   { id: 1, name: 'Wade Cooper' },
//   { id: 2, name: 'Arlene Mccoy' },
//   { id: 3, name: 'Devon Webb' },
//   { id: 4, name: 'Tom Cook' },
//   { id: 5, name: 'Tanya Fox' },
//   { id: 6, name: 'Hellen Schmidt' },
//   { id: 7, name: 'Caroline Schultz' },
//   { id: 8, name: 'Mason Heaney' },
//   { id: 9, name: 'Claudie Smitham' },
//   { id: 10, name: 'Emil Schaefer' },
// ]


const Layout = ({ children }: defaultLayoutProps) => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);
  // const [selected, setSelected] = useState(people[3]);
  // const [input, setInput] = useState('');
  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <Header />
        <div className="flex h-full w-full flex-row">
          <Sidebar open={isNavOpen} setOpen={setIsNavOpen} />
          <main className="w-full pl-10">{children}

            {/* <MenuI /> */}
            {/* <DropDown name="nsma" label="Select" value={selected!} list={people} setValue={setSelected} /> */}

            {/* <Input name="name" placeholder="name" value={input} setValue={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} label="Name" type="text" error="" /> */}

          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
