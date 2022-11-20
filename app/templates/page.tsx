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
    <div className="w-full max-w-7xl flex-grow py-6 lg:flex xl:px-8">
      {/* Left sidebar & main wrapper */}
      <div className="min-w-0 flex-1 xl:flex">
        <div className="xl:w-80 xl:flex-shrink-0">
          <div
            className="relative h-full flex-none pl-8 pr-6 pt-5 pb-10 sm:pl-6 lg:pl-8 xl:pl-0"
            style={{ minHeight: "12rem" }}
          >
            <List text="Template" list={TempleateList} />
          </div>
        </div>

        <div
          className="relative h-full flex-auto rounded-md rounded-r-none bg-base-100 shadow-base-200 lg:min-w-[400px] lg:flex-1"
          style={{ minHeight: "36rem" }}
        >
          <Form />
        </div>
      </div>

      <div className="rounded-r-md bg-base-200 bg-opacity-50 lg:flex-shrink-0 xl:pr-0">
        <div className="relative h-full lg:w-96" style={{ minHeight: "16rem" }}>
          <div className="flex h-20 items-center justify-between p-6">
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
