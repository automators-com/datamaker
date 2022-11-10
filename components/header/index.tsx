import { Menu, Transition } from "@headlessui/react";
import { MoonIcon, SunIcon, TvIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Fragment } from "react";
import LogoWhite from "../../public/assets/LogoWhite.svg";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(): JSX.Element {
  // const _theme = localStorage.getItem('data_maker_theme')

  const { theme, setTheme } = useTheme();

  return (
    <header
      id="header"
      className="flex min-h-[4.6rem] w-full flex-row items-center justify-center bg-primary text-primary-content shadow-md md:h-20"
    >
      <Link
        href={"/"}
        id="logo"
        className="flex h-full w-16 min-w-[4rem] items-center justify-center bg-secondary md:w-20 md:min-w-[5rem]"
      >
        <LogoWhite />
      </Link>
      <div className="flex h-full w-full items-center pl-4 md:pl-10">
        <h1 className="text-xl font-normal uppercase tracking-widest">
          datamaker
        </h1>
      </div>

      <Menu as="div" className="relative mr-10 inline-block text-left">
        <Menu.Button className="flex items-center text-primary-content focus:outline-none">
          {theme === "dark" ? (
            <MoonIcon className="h-6 w-6" />
          ) : theme === "contrast" ? (
            <TvIcon className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-base-100 shadow-lg ring-1 ring-secondary ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => {
                      setTheme("root");
                      // localStorage.setItem("data_maker_theme", theme!);
                    }}
                    className={classNames(
                      active
                        ? "bg-accent text-accent-content"
                        : "text-base-content",
                      "group flex cursor-pointer items-center px-2 py-2 text-sm"
                    )}
                  >
                    <SunIcon className="h-5 w-8" />
                    Light
                  </a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => {
                      setTheme("dark");
                      // console.log(theme);
                    }}
                    className={classNames(
                      active
                        ? "bg-accent text-accent-content"
                        : "text-base-content",
                      "group flex cursor-pointer items-center px-2 py-2 text-sm"
                    )}
                  >
                    <MoonIcon className="h-5 w-8" />
                    Dark
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => {
                      setTheme("contrast");
                      // console.log(theme);
                    }}
                    className={classNames(
                      active
                        ? "bg-accent text-accent-content"
                        : "text-base-content",
                      "group flex cursor-pointer items-center px-2 py-2 text-sm"
                    )}
                  >
                    <TvIcon className="h-5 w-8" />
                    Contrast
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
}
