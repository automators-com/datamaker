import Link from "next/link";
import { FC } from "react";

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
      <Link
        key={props.key}
        href={props.path}
        className={`flex h-12 w-full cursor-pointer items-center ${
          props.open ? `justify-between pl-4` : `justify-center rounded-xl hover:rounded-full`
        }  p-4 ${
          props.active
            ? "bg-automatorsPurple text-whiteText"
            : "bg-transparent rounded-full text-automatorsBlue hover:bg-grayHover hover:text-automatorsPurple"
        } group my-1 flex flex-row items-center rounded-xl px-2 text-base font-medium`}
      >
        <div className="w-5">{props.active ? props.iconSolid : props.icon}</div>
        <span
          className={`${
            !props.open && "scale-0"
          } absolute left-16 flex h-16 w-6 items-center text-center font-sans text-sm duration-300`}
        >
          {props.text}
        </span>
      </Link>
    </>
  );
};

export default SidebarElement;
