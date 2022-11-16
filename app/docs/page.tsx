"use client";
import {
  CheckIcon,
  ChevronUpIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import CallbackList from "../../components/callbackList";
import Constrains from "../../components/constrains";
import DropDown from "../../components/dropdown";
import { Input } from "../../components/input";
import List from "../../components/List";
import { MenuI } from "../../components/menu";
import Toggle from "../../components/toggleButton";
import Example from "./example";

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

const Templates = [
  {
    name: "Ricardo Cooper",
    href: "#",
  },
  {
    name: "Kristen Ramos",
    href: "#",
  },
  {
    name: "Ted Fox",
    href: "#",
  },
  {
    name: "Ted Fox 2344",
    href: "#",
  },
];

export default function Documentation() {
  const [selected, setSelected] = useState(people[3]);
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="m-10 grid w-11/12 gap-10 md:grid-cols-2">
        <Example title="Buttons">
          <Example.Component>
            <div className="flex w-full justify-evenly">
              <button className="btn btn-primary"> Hello</button>
              <button className="btn btn-primary-accent">Hello</button>
              <button className="btn btn-secondary">Hello</button>
              <button className="btn btn-link">Hello</button>
              <button className="btn btn-error"> Hello</button>
            </div>
          </Example.Component>
          <Example.Snippet>
            {`
          <div className="flex w-full justify-evenly">
            <button className="btn btn-primary"> Hello</button>
            <button className="btn btn-primary-accent">Hello</button>
            <button className="btn btn-secondary">Hello</button>
            <button className="btn btn-link">Hello</button>
            <button className="btn btn-error"> Hello</button>
          </div>
          `}
          </Example.Snippet>
        </Example>

        <Example title="Save Button">
          <Example.Component>
            <button className="btn btn-primary">
              <CheckIcon /> Save
            </button>
          </Example.Component>
          <Example.Snippet>
            {`
          <button className="btn btn-primary">
            <CheckIcon /> Save
          </button>
          `}
          </Example.Snippet>
        </Example>

        <Example title="Toggle">
          <Example.Component>
            <Toggle toggle={toggle} setToggle={setToggle} text="Text" />
          </Example.Component>
          <Example.Snippet>
            {`<Toggle toggle={toggle} setToggle={setToggle} text="Text" />`}
          </Example.Snippet>
        </Example>

        <Example title="Menu">
          <Example.Component>
            <MenuI />
          </Example.Component>
          <Example.Snippet>{`<MenuI />`}</Example.Snippet>
        </Example>

        <Example title="Dropdown" tag="Needs minor fix">
          <Example.Component>
            <DropDown
              name="dropdown"
              value={selected}
              list={people}
              setValue={setSelected}
              addClass="my-2 p-2 bg-accent bg-opacity-10 rounded-md"
            />
          </Example.Component>
          <Example.Snippet>
            {`<DropDown
        name="dropdown"
        value={selected}
        list={people}
        setValue={setSelected}
        addClass="my-2 p-2 bg-accent bg-opacity-10 rounded-md"
      />`}
          </Example.Snippet>
        </Example>

        <Example title="Dropdown with Label" tag="Needs minor fix">
          <Example.Component>
            <DropDown
              name="nsma"
              label="Select"
              value={selected}
              list={people}
              setValue={setSelected}
              addClass="my-2"
            />
          </Example.Component>
          <Example.Snippet>
            {`<DropDown
        name="nsma"
        label="Select"
        value={selected}
        list={people}
        setValue={setSelected}
        addClass="my-2"
      />`}
          </Example.Snippet>
        </Example>

        <Example title="Input With Label" tag="Needs minor fix">
          <Example.Component>
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
          </Example.Component>
          <Example.Snippet>
            {`<Input
        name="name"
        placeholder="name"
        value={input}
        setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        label="Name"
        type="text"
        error=""
      />`}
          </Example.Snippet>
        </Example>

        <Example title="Constraints" tag="Needs Renaming">
          <Example.Component>
            <Constrains handleDelete={() => console.log("TODO Delete Fn")} />
          </Example.Component>
          <Example.Snippet>
            {`<Constrains handleDelete={() => console.log("TODO Delete Fn")} />`}
          </Example.Snippet>
        </Example>

        <Example title="Add Button">
          <Example.Component>
            <button className="btn-primary-accent-light mb-5 h-12 w-12">
              <PlusIcon className="h-5 w-5" />
            </button>
          </Example.Component>
          <Example.Snippet>
            {`<button className="btn-primary-accent-light mb-5 h-12 w-12">
          <PlusIcon className="h-5 w-5" />
          </button>`}
          </Example.Snippet>
        </Example>

        <Example title="Scroll Up Button">
          <Example.Component>
            <button className="btn-primary-accent-light mb-5 h-10 w-10 bg-accent hover:bg-accent-focus">
              <ChevronUpIcon className="h-6 w-6 text-accent-content" />
            </button>
          </Example.Component>
          <Example.Snippet>
            {`<button className="btn-primary-accent-light mb-5 h-10 w-10 bg-accent hover:bg-accent-focus">
          <ChevronUpIcon className="h-6 w-6 text-accent-content" />
          </button>`}
          </Example.Snippet>
        </Example>

        <Example title="Callback List" tag="Needs minor fixes">
          <Example.Component>
            <CallbackList />
          </Example.Component>
          <Example.Snippet>{`<CallbackList />`}</Example.Snippet>
        </Example>

        <Example title="Template List">
          <Example.Component>
            <List list={Templates} text="Template" />
          </Example.Component>
          <Example.Snippet>{`<List list={Templates} text="Template" />`}</Example.Snippet>
        </Example>
      </div>
    </>
  );
}
