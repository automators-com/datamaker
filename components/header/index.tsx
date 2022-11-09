import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Fragment } from "react";
import LogoWhite from "../../public/assets/LogoWhite.svg";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}


const lightIcon = (_class: string) => {
  return <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className={_class}
  >
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
  />
  </svg>
}


const darkIcon = (_class: string) => {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={_class}
    >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    />
    </svg>
}


export default function Header(): JSX.Element {
  // const _theme = localStorage.getItem('data_maker_theme')


  const {theme, setTheme} = useTheme();

  console.log(theme);
  

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
        <Menu.Button className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none">
          {theme === 'dark' ?  lightIcon("h-8 w-8") : darkIcon("h-8 w-8") }
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => {
                      setTheme('light')
                      // localStorage.setItem("data_maker_theme", theme!);
                    }}
                    className={classNames(
                      active ? "bg-base-200 text-primary" : "text-gray-700",
                      "group flex items-center px-4 py-2 text-sm"
                    )}
                  >
                    {lightIcon("h-5 w-8")}                   
                    Light
                  </a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => {
                      setTheme('dark')
                      // console.log(theme);

                    }}
                    className={classNames(
                      active ? "bg-base-200 text-primary" : "text-gray-700",
                      "group flex items-center px-4 py-2 text-sm"
                    )}
                  >
                    {darkIcon("h-5 w-8")}
                    Dark
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
