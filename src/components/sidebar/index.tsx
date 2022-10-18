import {
  ChevronLeftIcon as ChevronLeftIconSolid,
  ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
  PaperAirplaneIcon as PaperAirplaneIconSolid,
  QueueListIcon as QueueListIconSolid,
} from "@heroicons/react/24/solid";
import {
  ChevronLeftIcon as ChevronLeftIconOutline,
  ClipboardDocumentListIcon as ClipboardDocumentListIconOutline,
  PaperAirplaneIcon as PaperAirplaneIconOutline,
  QueueListIcon as QueueListIconOutline,
} from "@heroicons/react/24/outline";

import { useRouter } from "next/router";
import { FC, useMemo, useState } from "react";
import Robot from "../../../public/assets/Robot.svg";
import SidebarElement from "./sidebarElement";

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
  setOpen: (open: boolean) => void;
}

const Sidebar: FC<IProps> = ({ open, setOpen }) => {
  const router = useRouter();
  // const [open, setOpen] = useState(false);

  const activeMenu = useMemo(() => {
    return routes.find((route) => route.path === router.pathname);
  }, [router.pathname]);

  return (
    <>
      <div
        className={`h-full ${
          open ? "w-60" : "w-20"
        } relative bg-gray-200 shadow-inner duration-300`}
      >
        <ul className=" flex w-full flex-col items-center justify-center pt-4 text-automatorsPurple">
          {routes.map((route) => (
            <SidebarElement
              key={route.key}
              open={open}
              text={route.name}
              icon={route.icon}
              iconSolid={route.iconSolid}
              path={route.path}
              active={activeMenu?.path === route.path}
            />
          ))}
        </ul>
        <ChevronLeftIconOutline
          className={`absolute -right-3 bottom-40 h-7 w-7 cursor-pointer rounded-md border-2 border-gray-400 bg-white p-1 text-gray-400 ${
            open || "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <Robot
          className={`${
            !open && "scale-0"
          } absolute left-10 bottom-0 w-40 transition-all duration-100`}
        />
      </div>
    </>
  );
};

export default Sidebar;
