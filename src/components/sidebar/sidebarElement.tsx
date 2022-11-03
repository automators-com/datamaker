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
      <Link key={props.key} href={props.path}
          className={`flex h-10 w-full cursor-pointer items-center ${
            props.open ? `justify-between` : `justify-center`
          }  p-4 ${
            props.active ? "bg-automatorsPurple text-whiteText" : "bg-transparent hover:bg-grayHover hover:text-automatorsPurple text-automatorsBlue"
          } flex-row group flex items-center px-2 my-1 text-base font-medium rounded-md`}
        >
          <div className="w-7">
            {props.active ? props.iconSolid : props.icon}
          </div>
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
