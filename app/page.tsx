"use client";
import { useState } from "react";
import DropDown from "../components/dropdown";
import { Input } from "../components/input";
import { MenuI } from "../components/menu";
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

  return (
    <div className={styles.container}>
      <div className="my-2 space-x-4">
        <button className="btn btn-primary">Hello</button>
        <button className="btn btn-primary-accent ">Hello</button>
        <button className="btn btn-secondary ">Hello</button>
        <button className="btn btn-link">Hello</button>

        <MenuI />
      </div>

      <DropDown
        name="nsma"
        label="Select"
        value={selected!}
        list={people}
        setValue={setSelected}
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
    </div>
  );
}
