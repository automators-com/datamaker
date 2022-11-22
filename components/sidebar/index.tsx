"use client";
import {
  ChevronLeftIcon as ChevronLeftIconOutline,
  ClipboardDocumentListIcon as ClipboardDocumentListIconOutline,
  PaperAirplaneIcon as PaperAirplaneIconOutline,
  QueueListIcon as QueueListIconOutline,
} from "@heroicons/react/24/outline";
import {
  ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
  PaperAirplaneIcon as PaperAirplaneIconSolid,
  QueueListIcon as QueueListIconSolid,
} from "@heroicons/react/24/solid";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import ReactTooltip from "react-tooltip";
import Robot from "../../public/assets/Robot.svg";
import { classNames } from "../../utilities/className";

const routes = [
  {
    name: "Templates",
    path: "/templates",
    icon: <QueueListIconOutline />,
    iconSolid: <QueueListIconSolid />,
    key: "key1",
  },
  {
    name: "Modifications",
    path: "/modifications",
    icon: <ClipboardDocumentListIconOutline />,
    iconSolid: <ClipboardDocumentListIconSolid />,
    key: "key2",
  },
  {
    name: "Connections",
    path: "/connections",
    icon: <PaperAirplaneIconOutline />,
    iconSolid: <PaperAirplaneIconSolid />,
    key: "key3",
  },
];

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: any) => void;
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
          "visible relative hidden h-full flex-col justify-between space-y-1 bg-neutral px-4 shadow-inner duration-200 md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col"
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

      <div>
        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-grow flex-col overflow-y-auto bg-indigo-700 pt-5">
            <div className="flex flex-shrink-0 items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                alt="Your Company"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
