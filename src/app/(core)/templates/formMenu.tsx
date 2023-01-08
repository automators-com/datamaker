"use client";

import { Fragment, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { UseMutationResult } from "@tanstack/react-query";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "../../../utilities/className";
import {
  EllipsisVerticalIcon,
  TrashIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import type { Template } from "./types";
import GenerateModal from "./generateModal";

export default function FormMenu({
  selectedTemplate,
  deleteMutation,
  setIsFormOpen,
  setSelectedTemplate,
}: {
  selectedTemplate: Template | null;
  deleteMutation: UseMutationResult<Template[], Error, Template, unknown>;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedTemplate: Dispatch<SetStateAction<Template | null>>;
}): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <Menu as="div" className={`relative inline-block h-full text-left`}>
        <Menu.Button className="flex items-center text-base-content focus:outline-none">
          <EllipsisVerticalIcon className="h-5 w-8" aria-hidden="true" />
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
          <Menu.Items className="absolute right-0 z-10 mt-4 w-48 origin-top-right overflow-auto rounded-md bg-base-100 shadow-lg ring-1 ring-secondary ring-opacity-5 focus:outline-none">
            {!selectedTemplate?.id && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active
                        ? "bg-base-200 bg-opacity-50 text-base-content"
                        : "text-base-content",
                      "group flex items-center px-4 py-2 text-sm hover:cursor-pointer"
                    )}
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                  >
                    <span
                      className="mr-3 h-5 w-5 text-accent"
                      aria-hidden="true"
                    >
                      <SparklesIcon />
                    </span>
                    Analyze Dataset
                  </a>
                )}
              </Menu.Item>
            )}
            <Menu.Item>
              {({ active }) => (
                <a
                  className={classNames(
                    active
                      ? "bg-base-200 bg-opacity-50 text-base-content"
                      : "text-base-content",
                    "group flex items-center px-4 py-2 text-sm hover:cursor-pointer"
                  )}
                  onClick={() => {
                    if (selectedTemplate)
                      deleteMutation.mutate(selectedTemplate);
                    setIsFormOpen(false);
                    setSelectedTemplate(null);
                  }}
                >
                  <span className="mr-3 h-5 w-5 text-accent" aria-hidden="true">
                    <TrashIcon className="text-error" />
                  </span>
                  Delete Template
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
      {isModalOpen && (
        <GenerateModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </>
  );
}
