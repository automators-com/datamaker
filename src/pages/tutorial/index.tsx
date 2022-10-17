import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import LogoWhite from "../../../public/assets/LogoWhite.svg";
import React, { useState } from "react";
import {
  ChevronLeftIcon,
  QueueListIcon,
  ClipboardDocumentListIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const Tutorial: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="grid h-screen grid-cols-2 grid-rows-2 font-sans auto-rows-max auto-cols-max text-white">
        <div className="col-span-2 col-start-1 row-start-1 flex h-20 w-full">
          <div className="flex w-20 items-center justify-center bg-automatorsPurple">
            <LogoWhite />
          </div>
          <div className="flex w-full items-center bg-automatorsBlue p-7 text-white">
            <h1 className="b-2 text-xl font-extralight tracking-widest">
              TEST:DATA
            </h1>
          </div>
        </div>
        <div className="col-start-1 row-start-2 flex">
          <div
            className={`h-screen ${
              open ? "w-60" : "w-20"
            } relative bg-gray-200 shadow-inner duration-300`}
          >
            <div className=" flex w-full flex-col items-center justify-center   pt-4 text-automatorsPurple">
              <button className="flex h-16 w-full cursor-pointer items-center justify-center bg-gray-100">
                <div className="absolute left-0.5 h-16  w-1 rounded-full bg-automatorsPurple"></div>
                <QueueListIcon className="absolute left-6 w-7 "></QueueListIcon>
                <h1
                  className={`${
                    !open && "scale-0"
                  } absolute left-16 flex h-16 w-6 items-center text-center font-sans text-sm duration-300`}
                >
                  Templates
                </h1>
              </button>
              <div className="flex h-16 w-full cursor-pointer items-center justify-center">
                {/* <div className="absolute left-0.5 h-16  w-1 rounded-full bg-automatorsPurple"></div> */}
                <ClipboardDocumentListIcon className="absolute left-6 w-7 "></ClipboardDocumentListIcon>
                <h1
                  className={`${
                    !open && "scale-0"
                  } absolute left-16 flex h-16 w-6 items-center text-center font-sans text-sm text-black duration-300`}
                >
                  Modifications
                </h1>
              </div>
              <div className="flex h-16 w-full cursor-pointer items-center justify-center">
                {/* <div className="absolute left-0.5 h-16  w-1 rounded-full bg-automatorsPurple"></div> */}
                <PaperAirplaneIcon className="absolute left-6 w-7 "></PaperAirplaneIcon>
                <h1
                  className={`${
                    !open && "scale-0"
                  } absolute left-16 flex h-16 w-6 items-center text-center font-sans text-sm text-black duration-300`}
                >
                  API
                </h1>
              </div>
            </div>
            <ChevronLeftIcon
              className={`absolute -right-3 bottom-40 h-7 w-7 cursor-pointer rounded-md border-2 border-gray-400 bg-white p-1 text-gray-400 ${
                open || "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        <div className="m-7 w-full col-start-2 row-start-2">
          <form className="w-full shadow-lg">
            <div className="flex h-fit content-center items-center justify-between gap-3 border-b-2 bg-gray-50 p-7 font-sans">
              <h1 className="h-fit text-lg font-medium text-automatorsPurple">
                New Template
              </h1>
              <div className="flex h-fit flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex h-8 w-24 items-center rounded-md  bg-automatorsPurple text-center font-sans text-sm text-white hover:bg-automatorsPurpleHover"
                >
                  <svg
                    className="ml-4 mr-2 h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                  Import
                </button>
                <a className="h-8 border-r-2 border-gray-300" />
                <button
                  type="button"
                  className="inline-flex h-8 w-28 items-center rounded-md border-2 border-automatorsBlue bg-white text-center font-sans text-sm text-automatorsBlue hover:bg-automatorsPurpleLightHover"
                >
                  <svg
                    className="ml-4 mr-2 h-4 w-4 text-automatorsBlue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    ></path>
                  </svg>
                  Discard
                </button>
                <button
                  type="button"
                  className="inline-flex h-8 w-20 items-center rounded-md bg-automatorsTourquoise text-center font-sans text-sm text-white hover:bg-automatorsTourquoiseHover"
                >
                  <svg
                    className="ml-3 mr-2 h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                    ></path>
                  </svg>
                  Save
                </button>
              </div>
            </div>
            <div className="m-7 flex h-80 bg-white">
              <h1>...</h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Tutorial;
