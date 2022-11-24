"use client";
import { Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  FireIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";
import LogoWhite from "../../../public/assets/LogoWhite.svg";
import { classNames } from "../../utilities/className";

const themes = [
  { name: "Light", key: "root", icon: <SunIcon /> },
  { name: "Dark", key: "dark", icon: <MoonIcon /> },
  { name: "Fire", key: "fire", icon: <FireIcon /> },
];

export default function Header({
  theme,
  setTheme,
  setSidebarOpen,
}: {
  theme: string;
  setTheme: (value: string) => void;
  setSidebarOpen: (value: boolean) => void;
}) {
  return (
    <header
      id="header"
      className="flex h-16 min-h-[4rem] w-full flex-row items-center justify-center bg-primary text-primary-content shadow-md md:h-20 md:min-h-[5rem] md:justify-between"
    >
      <Link
        href={"/"}
        id="logo"
        className="flex h-full w-16 min-w-[4rem] items-center justify-center bg-secondary md:w-20 md:min-w-[5rem]"
      >
        <LogoWhite />
      </Link>
      <div className="flex h-full w-full items-center pl-4 md:pl-10">
        <h1 className="font-normal uppercase tracking-widest lg:text-xl">
          datamaker
        </h1>
      </div>

      <Menu as="div" className="relative mr-5 inline-block text-left">
        <Menu.Button className="flex items-center text-primary-content focus:outline-none">
          {themes.map((t) => {
            if (t.key === theme) {
              return (
                <span className="h-6 w-6" key={t.name}>
                  {t.icon}
                </span>
              );
            }
          })}
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-md bg-base-100 shadow-lg ring-1 ring-secondary ring-opacity-5 focus:outline-none">
            {themes.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    onClick={() => setTheme(item.key)}
                    className={classNames(
                      active
                        ? "bg-accent text-accent-content"
                        : "text-base-content",
                      "group flex cursor-pointer items-center px-2 py-2 text-sm "
                    )}
                  >
                    <span className="h-5 w-5">{item.icon}</span>
                    <span className="ml-2">{item.name}</span>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>

      <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 shadow">
        <button
          type="button"
          className="px-4 text-base-100 focus:outline-none md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Bars3BottomLeftIcon
            className="h-6 w-6 text-primary-content"
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
}
