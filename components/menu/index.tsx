import { Menu, Transition } from "@headlessui/react";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  DocumentDuplicateIcon,
  EllipsisHorizontalIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { classNames } from "../../utilities/className";

const options = [
  { text: "Delete Field", icon: <TrashIcon className="text-error" /> },
  { text: "Duplicate Field", icon: <DocumentDuplicateIcon /> },
  { text: "Move Up", icon: <ArrowUpCircleIcon /> },
  { text: "Move Down", icon: <ArrowDownCircleIcon /> },
];

export const MenuI = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center text-base-content focus:outline-none">
        <EllipsisHorizontalIcon className="h-5 w-8" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right overflow-auto rounded-md bg-base-100 shadow-lg ring-1 ring-secondary ring-opacity-5 focus:outline-none">
          {options.map((option, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? "bg-base-200 bg-opacity-50 text-base-content"
                      : "text-base-content",
                    "group flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <span className="mr-3 h-5 w-5 text-accent" aria-hidden="true">
                    {option.icon}
                  </span>

                  {option.text}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
