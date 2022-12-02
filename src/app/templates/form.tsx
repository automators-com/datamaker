"use client";
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
import type { TemplateField } from "./types";
import type { Template } from "./types";
import Divider from "../../components/divider";
import { Input } from "../../components/input";
import CollapsedContainer from "./collapsedContainer";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Form(props: {
  selectedTemplate: Template | null;
  setSelectedTemplate: Dispatch<SetStateAction<Template | null>>;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  // state management
  const [name, setName] = useState<string>("");
  const [FieldList, setFieldList] = useState<TemplateField[]>([
    { constraints: [{ name: "Min", value: 1 }], fieldName: "", dataType: 1 },
  ]);

  const updateFieldList = (list: TemplateField[]) => {
    setFieldList(list);
  };

  const handleAddField = () => {
    setFieldList((prev) => {
      return [
        ...prev,
        {
          constraints: [{ name: "Min", value: 1 }],
          fieldName: "",
          dataType: 1,
        },
      ];
    });
  };

  // Ensure rerender when selectedTemplate changes
  useEffect(() => {
    if (props.selectedTemplate) {
      setName(props.selectedTemplate.name);
      setFieldList(props.selectedTemplate.fields);
    } else {
      setName("");
    }
  }, [props.selectedTemplate]);

  // Handle creation and updates of templates
  const queryClient = useQueryClient();

  const createOrUpdateTemplate = async (
    template: Template
  ): Promise<Template[]> => {
    if (template.id) {
      const res = await fetch(`/api/templates/${template.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(template),
      });
      return await res.json();
    } else {
      const res = await fetch(`/api/templates/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(template),
      });
      return await res.json();
    }
  };

  const mutation = useMutation({
    // @ts-ignore t
    mutationFn: createOrUpdateTemplate,
    // When mutate is called:
    onMutate: async (newTemplate: Template) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["templates"] });

      // Snapshot the previous value
      const previousTemplates = queryClient.getQueryData(["templates"]);

      // Optimistically update to the new value
      if (newTemplate.id) {
        queryClient.setQueryData(
          ["templates"],
          (old: Template[] | undefined) => {
            // get all templates except newTemplate
            const other = old?.filter(
              (template: Template) => template.id !== newTemplate.id
            );
            if (other) {
              return [...other, newTemplate];
            }
          }
        );
      } else {
        queryClient.setQueryData(["templates"], (old: any) => [
          ...old,
          newTemplate,
        ]);
      }
      // Return a context object with the snapshotted value
      return { MutationKey: "createOrUpdateTemplates", previousTemplates };
    },
    // If the mutation fails, use the context we returned above
    onError: (
      err: Error,
      newTemplate: Template,
      context: { previousTemplate: Template }
    ) => {
      queryClient.setQueryData(["templates"], context.previousTemplate);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["templates"] });
    },
  });

  const handleSave = () => {
    mutation.mutate({ ...props.selectedTemplate, name, fields: FieldList });
  };

  return (
    <div className="relative h-full min-h-[36rem] flex-auto rounded-l-md bg-base-100 lg:min-w-[400px] lg:flex-1">
      <div className="flex h-20 items-center justify-between rounded-tl-md border-b border-base-200 border-opacity-40 bg-neutral py-6 px-6 lg:px-9">
        <span className="font-semibold text-neutral-content">New Template</span>
        <div className="space-x-2">
          <button
            className="btn btn-secondary"
            onClick={() => {
              props.setIsFormOpen(false);
              props.setSelectedTemplate(null);
            }}
          >
            <ArrowUturnDownIcon />
            Discard
          </button>

          <button
            className="btn btn-primary-accent"
            onClick={() => handleSave()}
          >
            <CheckIcon />
            Save
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-6 md:p-8 lg:p-9">
        <Input
          name="templateName"
          placeholder="Name"
          type="text"
          label="Template Name"
          value={name}
          setValue={(e: { target: { value: string } }) =>
            setName(e.target.value)
          }
        />

        <Divider />

        {FieldList.map((item, index) => {
          return (
            <CollapsedContainer
              key={index}
              constraints={item.constraints}
              updateFieldList={updateFieldList}
              item={item}
              FieldList={FieldList}
            />
          );
        })}

        <button
          className="btn btn-link mt-2 flex !pl-0 font-normal"
          onClick={handleAddField}
        >
          <PlusCircleIcon className="!h-5 !w-5 text-accent" /> Add Field
        </button>
      </div>
    </div>
  );
}
