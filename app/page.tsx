"use client";
import {
  CheckIcon,
  EnvelopeIcon,
  TrashIcon,
  TvIcon,
} from "@heroicons/react/24/outline";
import { ArrowUturnDownIcon, CogIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Constrains from "../components/constrains";
import DropDown from "../components/dropdown";
import { Input } from "../components/input";
import { MenuI } from "../components/menu";
import Toggle from "../components/toggleButton";
import styles from "./page.module.css";

// testing
const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Caroline Schultz" },
  { id: 8, name: "Mason Heaney" },
  { id: 9, name: "Claudie Smitham" },
  { id: 10, name: "Emil Schaefer" },
];

export default function Home() {
  const [selected, setSelected] = useState(people[3]);
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.container}>
      <div className="my-2 space-x-4">
        <button className="btn btn-primary"> Hello</button>
        <button className="btn btn-primary-accent">Hello</button>
        <button className="btn btn-secondary ">Hello</button>
        <button className="btn btn-link">Hello</button>
        <button className="btn btn-error"> Hello</button>

        {/* button with label */}
        <button className="btn btn-primary">
          {" "}
          <CheckIcon /> Save
        </button>
      </div>

      <div className="my-2 space-x-4">
        <Toggle toggle={toggle} setToggle={setToggle} text="Text" />

        <MenuI />
      </div>
      <DropDown
        name="nsma"
        label="Select"
        value={selected!}
        list={people}
        setValue={setSelected}
        addClass="my-2"
      />

      <Input
        name="name"
        placeholder="name"
        value={input}
        setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        label="Name"
        type="text"
        error=""
      />

      <Constrains handleDelete={null} />
    </div>
  );
}
