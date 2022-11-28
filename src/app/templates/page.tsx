"use client";
import { PaperAirplaneIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import List from "../../components/List";
import ExportModal from "../../components/template/exportModal";
import Form from "../../components/template/form";
import NoContentRobot from "../../../public/assets/NoContentRobot.svg";

const TemplateList = [
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
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => setIsOpen(!isOpen);

  return (
    <div className="w-full max-w-[81rem] flex-grow py-6 lg:flex xl:px-8">
      {/* Left sidebar & main wrapper */}
      <div className="min-w-[18rem] xl:w-80 xl:flex-shrink-0">
        <div
          className="relative h-full flex-none pl-8 pr-6 pt-5 pb-10 sm:pl-6 lg:pl-8 xl:pl-0"
          style={{ minHeight: "12rem" }}
        >
          <List text="Template" list={TemplateList} />
        </div>
      </div>

      {isOpen ? (
        <div
          className="min-w-0 flex-1 rounded-md xl:flex"
          style={{ boxShadow: "0px 0px 30px #0000001A" }}
        >
          <div
            className="relative h-full flex-auto rounded-l-md bg-base-100 lg:min-w-[400px] lg:flex-1"
            style={{ minHeight: "36rem" }}
          >
            <Form handleClose={handleOpenForm} />
          </div>

          <div className="rounded-r-md bg-base-200 bg-opacity-50 lg:flex-shrink-0 xl:pr-0">
            <div
              className="relative h-full xl:w-96"
              style={{ minHeight: "16rem" }}
            >
              <div className="flex h-20 items-center justify-between p-6">
                <span className="text-xs font-medium text-base-content">
                  LIVE PREVIEW
                </span>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <PaperAirplaneIcon /> Export/Send Data
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex flex-col gap-5 self-center text-center lg:pt-16 xl:pt-16">
          <NoContentRobot className="scale-80 mx-auto w-40 fill-secondary" />

          <p className="text-xs text-base-content">
            Nothing to show for now … Select a template to see details.
          </p>

          <button
            className="btn btn-primary-accent mx-auto p-3 px-4"
            onClick={handleOpenForm}
          >
            <PlusIcon /> Create new template
          </button>
        </div>
      )}

      {<ExportModal open={open} setOpen={setOpen} />}
    </div>
  );
}
