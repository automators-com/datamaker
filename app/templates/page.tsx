"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import List from "../../components/List";
import Form from "../../components/template/form";


const TempleateList = [
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

export default function Templates() {
  return (
    <div className="m-6 flex">
      <div className="w-80 flex-none pr-4">
        <List text="Template" list={TempleateList} />
      </div>
      <div className="w-56 flex-auto rounded-md bg-base-100 shadow-md shadow-base-200">
        <Form />
      </div>
      <div className="w-80 flex-none bg-base-200">
        <div className="flex justify-between bg-base-200 p-4">
          <span> LIVE PREVIEW</span>
          <div className="space-x-2">
            <button className="btn btn-primary">
              <PaperAirplaneIcon /> Export/Send Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
