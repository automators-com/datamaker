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
      <div className="flex flex-row rounded-md shadow-md">
        <div className="min-h-[600px] min-w-[610px] flex-auto rounded-md rounded-r-none bg-base-100 shadow-base-200">
          <Form />
        </div>
        <div className="w-96 flex-none rounded-r-md rounded-l-none bg-base-200 bg-opacity-50 ">
          <div className="flex h-20 items-center justify-between p-9">
            <span className="text-xs font-medium text-base-content">
              LIVE PREVIEW
            </span>
            <button className="btn btn-primary">
              <PaperAirplaneIcon /> Export/Send Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
