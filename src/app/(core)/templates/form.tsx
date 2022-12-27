"use client";

/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import Divider from "../../../components/divider";
import { Input } from "../../../components/input";
import CollapsedContainer from "./collapsedContainer";
import FormHeader from "./formHeader";
import type { Template, TemplateForm } from "./types";

export default function Form({
  selectedTemplate,
  setSelectedTemplate,
  setIsFormOpen,
  setHasChanged,
}: {
  selectedTemplate: Template | null;
  setSelectedTemplate: Dispatch<SetStateAction<Template | null>>;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
  setHasChanged: Dispatch<SetStateAction<boolean>>;
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

  // validate only onSubmit
  const [isSubmit, setIsSubmit] = useState(false);

  // retrieve all hook methods
  const {
    control,
    formState: { errors, isDirty },
    reset,
    register,
  } = useFormContext<TemplateForm>();

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

  // update the hasChanged state based on the form state
  if (isDirty) {
    setHasChanged(true);
  } else {
    setHasChanged(false);
  }

  return (
    <>
      <FormHeader
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        setIsFormOpen={setIsFormOpen}
        deleteMutation={deleteMutation}
        setIsSubmit={setIsSubmit}
      />

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
