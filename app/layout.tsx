"use client";
import { useContext, useState } from "react";
import { NavContext } from "../components/context/navContext";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import "./globals.css";

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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  // const [selected, setSelected] = useState(people[3]);
  // const [input, setInput] = useState('');


  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>
          <div className="flex h-screen w-screen flex-col">
            <Header />
            <div className="flex h-full w-full flex-row">
              <Sidebar open={isNavOpen} setOpen={setIsNavOpen} />
              <main>
                {children}

                {/* <MenuI /> */}
                {/* <DropDown name="nsma" label="Select" value={selected!} list={people} setValue={setSelected} /> */}

                {/* <Input name="name" placeholder="name" value={input} setValue={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} label="Name" type="text" error="" /> */}

              </main>

            </div>
          </div>
        </body>
      </html>
    </NavContext.Provider>
  );
}
