/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  ArrowUturnDownIcon,
  CheckIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { TemplateForm } from "./types";
import type { Template } from "./types";
import Divider from "../../../components/divider";
import { Input } from "../../../components/input";
import CollapsedContainer from "./collapsedContainer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormMenu from "./formMenu";

export default function Form({
  selectedTemplate,
  setSelectedTemplate,
  setIsFormOpen,
}: {
  selectedTemplate: Template | null;
  setSelectedTemplate: Dispatch<SetStateAction<Template | null>>;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const defaultValues: TemplateForm = {
    isOpen: true,
    templateName: selectedTemplate ? selectedTemplate.name : "",
    fieldList: selectedTemplate
      ? selectedTemplate.fields
      : [
          {
            fieldName: "",
            constraints: [],
            dataType: { id: 1, name: "String" },
          },
        ],
  };

  const [isSubmit, setIsSubmit] = useState(false); // validate only onSubmit

  const {
    control,
    formState: { errors },
    reset,
    register,
  } = useFormContext<TemplateForm>(); // retrieve all hook methods

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "fieldList",
  });

  // Ensure rerender when selectedTemplate changes
  useEffect(() => {
    reset(defaultValues);
  }, [selectedTemplate]);

  // Handle creation and updates of templates
  const queryClient = useQueryClient();

  const deleteTemplate = async (temp: Template): Promise<Template[]> => {
    const res = await fetch(`/api/templates/${temp.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  };

  const deleteMutation = useMutation({
    // @ts-ignore t
    mutationFn: deleteTemplate,
    onMutate: async (temp: Template) => {
      await queryClient.cancelQueries({ queryKey: ["templates"] });
      const previousTemplates = queryClient.getQueryData(["templates"]);

      // Optimistically update to the new value
      queryClient.setQueryData(["templates"], (old: Template[] | undefined) => {
        // get all templates except newTemplate
        const other = old?.filter(
          (template: Template) => template.id !== temp.id
        );
        if (other) return [...other];
      });
      return { MutationKey: "deleteTemplate", previousTemplates };
    },
    onError: (
      err: Error,
      newTemplate: Template,
      context: { previousTemplate: Template }
    ) => {
      queryClient.setQueryData(["templates"], context.previousTemplate);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["templates"] });
    },
  });

  return (
    <>
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

      <div className="p-6 sm:p-6 md:p-8 lg:p-9">
        <Input
          formRegister={register("templateName", {
            required: "Please enter a template name",
          })}
          error={isSubmit ? errors.templateName?.message : ""}
          id={"templateName"}
          placeholder="Template Name"
          type="text"
          label="Template Name"
        />

        <Divider />

        {fields.map((item, index) => {
          return (
            <CollapsedContainer
              key={item.id}
              index={index}
              deleteField={(i: number) => {
                if (fields.length === 1) return;
                remove(i);
              }}
              move={move}
              isSubmit={isSubmit}
            />
          );
        })}

        <button
          className="btn btn-link mt-2 flex !pl-0 font-normal"
          onClick={() =>
            append({
              fieldName: "",
              dataType: { id: 1, name: "String" },
              constraints: [],
            })
          }
        >
          <PlusCircleIcon className="!h-5 !w-5 text-accent" /> Add Field
        </button>
      </div>
    </>
  );
}
