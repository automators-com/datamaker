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

import { useRouter } from "next/router";
import { FC, useMemo } from "react";
import Robot from "../../../public/assets/Robot.svg";
import ToolTip from "../tooltip";

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
interface IProps {
  open: boolean;
  setOpen: (open: any) => void;
}

const Sidebar: FC<IProps> = ({ open, setOpen }) => {
  const router = useRouter();

  const activeMenu = useMemo(() => {
    return routes.find((route) => route.path === router.pathname);
  }, [router.pathname]);

  return (
    <>
      <nav
        className={`h-full ${open
            ? "w-80 min-w-[10rem] md:w-60 md:min-w-[10rem]"
            : "md:w-18 w-14 min-w-[4rem] md:min-w-[5rem]"
          } relative space-y-1 bg-gray-200 px-4 shadow-inner duration-300`}
      >
        <ul className=" flex w-full flex-col items-center justify-center pt-4 text-automatorsPurple">
          {routes.map((route, active) => (
            <ToolTip tooltip={!open ? route.name : ""} key={route.key}>
              <Link
                key={route.key}
                href={route.path}
                className={`flex h-12 w-full cursor-pointer items-center ${open ? `justify-between pl-4` : `justify-center rounded-xl`
                  }  p-4 ${activeMenu?.path === route.path
                    ? "bg-automatorsPurple text-whiteText"
                    : "bg-transparent text-automatorsBlue hover:bg-grayHover hover:text-automatorsPurple"
                  } group my-1 flex flex-row items-center rounded-xl px-2 text-base font-medium`}
              >
                <div className="w-5">
                  {activeMenu?.path === route.path
                    ? route.iconSolid
                    : route.icon}
                </div>
                <span
                  className={`${!open && "invisible"
                    } absolute left-16 flex h-16 w-6 items-center text-center font-sans text-sm`}
                >
                  {route.name}
                </span>
              </Link>
            </ToolTip>
          ))}
        </ul>
        <div className="py-10"></div>
        <ChevronLeftIconOutline
          className={`absolute -right-3 bottom-40 h-7 w-7 cursor-pointer rounded-md border-2 border-gray-400 bg-white p-1 text-gray-400 ${open || "rotate-180"
            }`}
          onClick={() => setOpen(!open)}
        />
        <Robot
          className={`${!open && "invisible"} absolute left-7 bottom-0 w-40`}
        />
      </nav>
    </>
  );
};

export default Sidebar;
