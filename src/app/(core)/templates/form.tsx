"use client";
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  ArrowUturnDownIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { TemplateForm } from "./types";
import type { Template } from "./types";
import Divider from "../../../components/divider";
import { Input } from "../../../components/input";
import CollapsedContainer from "./collapsedContainer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "../../../utilities/className";

export default function Form(props: {
  selectedTemplate: Template | null;
  setSelectedTemplate: Dispatch<SetStateAction<Template | null>>;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const defaultValues: TemplateForm = {
    isOpen: true,
    templateName: props.selectedTemplate ? props.selectedTemplate.name : "",
    fieldList: props.selectedTemplate
      ? props.selectedTemplate.fields
      : [
        {
          fieldName: "",
          constraints: [],
          dataType: { id: 1, name: "String" },
        },
      ],
  };
  const methods = useForm<TemplateForm>({
    // mode: "onChange",
    // reValidateMode: "onChange",
  });

  const {
    control,
    formState: { errors },
    getValues,
    reset,
  } = methods;

  const [isSubmit, setIsSubmit] = useState(false); // validate only onSubmit

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "fieldList",
  });

  // Ensure rerender when selectedTemplate changes
  useEffect(() => {
    reset(defaultValues);
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
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["templates"] });
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: TemplateForm) => {
    console.log(data);

    mutation.mutate({
      ...props.selectedTemplate,
      name: getValues("templateName"),
      fields: getValues("fieldList"),
    });

    // props.setIsFormOpen(false);
    // props.setSelectedTemplate(null);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="relative h-full min-h-[36rem] flex-auto rounded-l-md bg-base-100 lg:min-w-[400px] lg:flex-1"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="flex  items-center justify-between rounded-tl-md border-b border-base-200 border-opacity-40 bg-neutral py-6 px-6 lg:px-9">
          <span className="font-semibold text-neutral-content">
            New Template
          </span>
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
              type="submit"
              // onClick={() => handleSave()}
              onClick={() => setIsSubmit(true)}
            >
              <CheckIcon />
              Save
            </button>
            <Menu as="div" className={`relative inline-block text-left`}>
              <Menu.Button className="flex items-center text-base-content focus:outline-none">
                <EllipsisVerticalIcon
                  className="h-5 w-8"
                  aria-hidden="true"
                />
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
                  <Menu.Item >
                    {({ active }) => (
                      <a
                        className={classNames(
                          active
                            ? "bg-base-200 bg-opacity-50 text-base-content"
                            : "text-base-content",
                          "group flex items-center px-4 py-2 text-sm hover:cursor-pointer"
                        )}
                        onClick={() => {
                          //TODO: delete function
                          props.setIsFormOpen(false);
                          props.setSelectedTemplate(null);
                        }}
                      >
                        <span
                          className="mr-3 h-5 w-5 text-accent"
                          aria-hidden="true"
                        >
                          <TrashIcon className="text-error" />
                        </span>
                        Delete Template
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <div className="p-6 sm:p-6 md:p-8 lg:p-9">
          <Input
            formRegister={{
              ...methods.register("templateName", {
                required: "Please enter a template name",
              }),
            }}
            error={isSubmit ? errors.templateName?.message : ""}
            id={"templateName"}
            placeholder="name"
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
      </form>
    </FormProvider>
  );
}
