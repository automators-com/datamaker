import {
  ChevronLeftIcon,
  ClipboardDocumentListIcon,
  PaperAirplaneIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { FC, useState } from "react";
import Robot from "../../../public/assets/Robot.svg";

interface IProps {
  open: boolean;
  active: boolean;
  text: string;
  icon: JSX.Element;
  iconSolid: JSX.Element;
  path: string;
  key: string;
}

const SidebarElement: FC<IProps> = (props: IProps) => {
  return (
    <>
      <Link key={props.key} href={props.path}>
        <a
          className={`justify-cente flex h-16 w-full cursor-pointer items-center hover:bg-gray-100 ${
            props.active ? "bg-gray-100" : "bg-transparent"
          }`}
        >
          <div
            className={`${
              !props.active && "scale-0"
            } ml-0.5 h-16 w-1 rounded-full bg-automatorsPurple`}
          ></div>
          <div className="absolute left-6 w-7 ">
            {props.active ? props.iconSolid : props.icon}
          </div>
          <h1
            className={`${
              !props.open && "scale-0"
            } absolute left-16 flex h-16 w-6 items-center text-center font-sans text-sm duration-300`}
          >
            {props.text}
          </h1>
        </a>
      </Link>
    </>
  );
};

export default SidebarElement;
