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
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-base-200 text-error" : "text-base-content",
                  "group flex items-center px-4 py-2 text-sm"
                )}
              >
                <TrashIcon
                  className="mr-3 h-5 w-5 text-error group-hover:text-error"
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
                  active
                    ? "bg-base-200 text-base-content"
                    : "text-base-content",
                  "group flex items-center px-4 py-2 text-sm"
                )}
              >
                <DocumentDuplicateIcon
                  className="mr-3 h-5 w-5 text-accent group-hover:text-accent"
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
                  active
                    ? "bg-base-200 text-base-content"
                    : "text-base-content",
                  "group flex items-center px-4 py-2 text-sm"
                )}
              >
                <ArrowUpCircleIcon
                  className="mr-3 h-5 w-5 text-accent group-hover:text-accent"
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
                  active
                    ? "bg-base-200 text-base-content"
                    : "text-base-content",
                  "group flex items-center px-4 py-2 text-sm"
                )}
              >
                <ArrowDownCircleIcon
                  className="mr-3 h-5 w-5 text-accent group-hover:text-accent"
                  aria-hidden="true"
                />
                Move Down
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
