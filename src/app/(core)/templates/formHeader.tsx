"use client";

import type { Dispatch, SetStateAction } from "react";
import { ArrowUturnDownIcon, CheckIcon } from "@heroicons/react/24/outline";
import FormMenu from "./formMenu";
import type { Template } from "./types";
import type { UseMutationResult } from "@tanstack/react-query";

export default function FormHeader({
  setIsFormOpen,
  setIsSubmit,
  setSelectedTemplate,
  selectedTemplate,
  deleteMutation,
}: {
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
  setIsSubmit: Dispatch<SetStateAction<boolean>>;
  setSelectedTemplate: Dispatch<SetStateAction<Template | null>>;
  selectedTemplate: Template | null;
  deleteMutation: UseMutationResult<Template[], Error, Template, unknown>;
}) {
  return (
    <div className="flex  items-center justify-between rounded-tl-md border-b border-base-200 border-opacity-40 bg-neutral py-6 px-6 lg:px-9">
      <span className="font-semibold text-neutral-content">
        {selectedTemplate?.name || "New Template"}
      </span>
      <div className="flex items-center space-x-2">
        <button
          className="btn btn-secondary"
          onClick={() => {
            setIsFormOpen(false);
            setSelectedTemplate(null);
          }}
        >
          <ArrowUturnDownIcon />
          Discard
        </button>

        <button
          className="btn btn-primary-accent"
          type="submit"
          onClick={() => setIsSubmit(true)}
        >
          <CheckIcon />
          Save
        </button>
        <FormMenu
          selectedTemplate={selectedTemplate}
          deleteMutation={deleteMutation}
          setIsFormOpen={setIsFormOpen}
          setSelectedTemplate={setSelectedTemplate}
        />
      </div>
    </div>
  );
}
