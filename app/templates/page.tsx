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
    <div className="m-10 flex max-w-7xl">
      <div className="w-72 flex-none pr-8 pt-5">
        <List text="Template" list={TempleateList} />
      </div>
      <div className="min-h-[600px] min-w-[600px] flex-auto rounded-md bg-base-100 shadow-md shadow-base-200">
        <Form />
      </div>
      <div className="w-1/3 flex-none bg-base-200 bg-opacity-50">
        <div className="flex justify-between px-4 py-6">
          <span className="font-medium text-base-content"> LIVE PREVIEW</span>
          <button className="btn btn-primary">
            <PaperAirplaneIcon /> Export/Send Data
          </button>
        </div>
      </div>
    </div>
  );
}
