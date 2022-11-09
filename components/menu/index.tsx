import { Menu, Transition } from "@headlessui/react";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  DocumentDuplicateIcon,
  EllipsisHorizontalIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export const MenuI = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none">
          <EllipsisHorizontalIcon className="h-5 w-8" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-base-200 text-primary" : "text-gray-700",
                    "group flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <TrashIcon
                    className="mr-3 h-5 w-5 text-error group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Delete Field
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-base-200 text-primary" : "text-gray-700",
                    "group flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <DocumentDuplicateIcon
                    className="mr-3 h-5 w-5 text-accent group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Duplicate Field
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-base-200 text-primary" : "text-gray-700",
                    "group flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <ArrowUpCircleIcon
                    className="mr-3 h-5 w-5 text-accent group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Move Up
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-base-200 text-primary" : "text-gray-700",
                    "group flex items-center px-4 py-2 text-sm"
                  )}
                >
                  <ArrowDownCircleIcon
                    className="mr-3 h-5 w-5 text-accent group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Move Down
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
