"use client";
import { Dialog, Transition } from "@headlessui/react";
import {
  ChevronLeftIcon as ChevronLeftIconOutline,
  // ClipboardDocumentListIcon as ClipboardDocumentListIconOutline,
  // PaperAirplaneIcon as PaperAirplaneIconOutline,
  QueueListIcon as QueueListIconOutline,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  // ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
  // PaperAirplaneIcon as PaperAirplaneIconSolid,
  QueueListIcon as QueueListIconSolid,
} from "@heroicons/react/24/solid";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Fragment, useMemo } from "react";
import ReactTooltip from "react-tooltip";
import Robot from "../../../public/assets/Robot.svg";
import { classNames } from "../../utilities/className";

const routes = [
  {
    name: "Templates",
    path: "/templates",
    icon: <QueueListIconOutline />,
    iconSolid: <QueueListIconSolid />,
    key: "key1",
  },
  // {
  //   name: "Modifications",
  //   path: "/modifications",
  //   icon: <ClipboardDocumentListIconOutline />,
  //   iconSolid: <ClipboardDocumentListIconSolid />,
  //   key: "key2",
  // },
  // {
  //   name: "Connections",
  //   path: "/connections",
  //   icon: <PaperAirplaneIconOutline />,
  //   iconSolid: <PaperAirplaneIconSolid />,
  //   key: "key3",
  // },
];

export default function Sidebar({
  open, // lg screen
  setOpen,
  sidebarOpen, // md screen
  setSidebarOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}) {
  const pathName = usePathname();

  const activeMenu = useMemo(() => {
    return routes?.find((route) => route?.path === pathName);
  }, [pathName]);

  return (
    <>
      <nav
        className={classNames(
          open
            ? "w-80 min-w-[10rem] md:w-60 md:min-w-[10rem]"
            : "md:w-18 w-14 min-w-[4rem] md:min-w-[5rem]",
          "visible relative flex h-[calc(100vh)_-_4rem] flex-col justify-between space-y-1 bg-neutral px-4 shadow-inner duration-200 md:h-[calc(100vh)_-_5rem]",
          "hidden md:flex md:flex-col"
        )}
      >
        <div className="flex flex-col items-center justify-center pt-4 text-secondary">
          {routes.map((route) => (
            <Link
              key={route.key}
              href={route.path}
              data-tip={!open ? route.name : ""}
              className={classNames(
                open ? "justify-between pl-4" : "rounded-xl",
                activeMenu?.path === route.path
                  ? "bg-primary text-primary-content"
                  : "bg-transparent text-neutral-content hover:bg-neutral-focus hover:text-neutral-content",
                "group my-1 flex h-12 w-full cursor-pointer flex-row items-center rounded-xl px-2 pl-[0.88rem] text-base font-medium transition-all duration-500 ease-in-out"
              )}
            >
              <div className="w-5">
                {activeMenu?.path === route.path ? route.iconSolid : route.icon}
              </div>
              <div
                className={classNames(
                  !open && "hidden",
                  "absolute left-16 flex h-16 w-6 items-center text-center font-sans text-sm"
                )}
              >
                {route.name}
                <ReactTooltip
                  uuid="mytt"
                  key={route.key}
                  effect="solid"
                  textColor="hsl(var(--color-secondary-content))"
                  backgroundColor="hsl(var(--color-secondary))"
                  overridePosition={({ left, top }) => ({
                    left: left + 20,
                    top: top,
                  })}
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="py-10"></div>
        <ChevronLeftIconOutline
          className={classNames(
            "absolute -right-3 bottom-40 z-10 h-7 w-7 cursor-pointer rounded-md bg-base-200 p-1 text-primary-content",
            open || "rotate-180"
          )}
          onClick={() => setOpen(!open)}
        />
        <div className="w-full items-center justify-center self-end justify-self-end overflow-hidden">
          <Robot
            className={classNames(
              !open && "scale-x-80 scale-y-80 translate-y-full",
              "mx-auto w-full scale-100 fill-primary transition-all duration-300 ease-in-out"
            )}
          />
        </div>
      </nav>

      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-[230px] flex-1 flex-col">
                <nav
                  className={classNames(
                    "w-60 min-w-[10rem] md:w-60 md:min-w-[10rem]",
                    "visible relative flex h-full flex-col justify-between space-y-1 bg-neutral px-4 shadow-inner duration-200"
                  )}
                >
                  <div className="flex flex-col items-center justify-center pt-4 text-secondary">
                    {routes.map((route) => (
                      <Link
                        key={route.key}
                        href={route.path}
                        data-tip={!sidebarOpen ? route.name : ""}
                        className={classNames(
                          sidebarOpen ? "justify-between pl-4" : "rounded-xl",
                          activeMenu?.path === route.path
                            ? "bg-primary text-primary-content"
                            : "bg-transparent text-neutral-content hover:bg-neutral-focus hover:text-neutral-content",
                          "group my-1 flex h-12 w-full cursor-pointer flex-row items-center rounded-xl px-2 pl-[0.88rem] text-base font-medium transition-all duration-500 ease-in-out"
                        )}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <div className="w-5">
                          {activeMenu?.path === route.path
                            ? route.iconSolid
                            : route.icon}
                        </div>
                        <div
                          className={classNames(
                            !sidebarOpen && "hidden",
                            "absolute left-16 flex h-16 w-6 items-center text-center font-sans text-sm"
                          )}
                        >
                          {route.name}
                          <ReactTooltip
                            uuid="mytt"
                            key={route.key}
                            effect="solid"
                            textColor="hsl(var(--color-secondary-content))"
                            backgroundColor="hsl(var(--color-secondary))"
                            overridePosition={({ left, top }) => ({
                              left: left + 20,
                              top: top,
                            })}
                          />
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="w-full items-center justify-center self-end justify-self-end overflow-hidden">
                    <Robot
                      className={classNames(
                        !sidebarOpen &&
                          "scale-x-80 scale-y-80 translate-y-full",
                        "scale-80 mx-auto w-44 fill-primary transition-all duration-300 ease-in-out"
                      )}
                    />
                  </div>
                </nav>
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
