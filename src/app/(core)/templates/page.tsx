"use client";

import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import List from "../../../components/list";
import ExportModal from "./exportModal";
import Form from "./form";
import Placeholder from "./placeholder";
import LivePreview from "./livePreview";

import type { Template, TemplateForm } from "./types";
import { getTableData } from "../../../utilities/tableData";
import MoonLoader from "../../../components/loaders/moonLoader";
import { FormProvider, useForm } from "react-hook-form";

const fetchTemplates = () => {
  return fetch(`/api/templates?orderBy={"createdAt":"$asc"}`).then((res) =>
    res.json()
  );
};

export default function Page() {
  // fetch templates
  const {
    data: templates,
    isError,
    isLoading,
  } = useQuery<Template[]>({
    queryKey: ["templates"],
    queryFn: fetchTemplates,
  });

  // state management
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );

  const methods = useForm<TemplateForm>();

  const { getValues, watch } = methods;

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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

  const tableData = getTableData(1, watch().fieldList);

  const onSubmit = (data: TemplateForm) => {
    console.log(data);

    mutation.mutate({
      ...selectedTemplate,
      name: getValues("templateName"),
      fields: getValues("fieldList"),
    });
    setIsFormOpen(false);
    setSelectedTemplate(null);
  };

  if (isLoading) {
    // TODO: Add skeleton loader
    return <MoonLoader />;
  }

  if (isError) {
    // TODO: Add error state
    return <span>There was an error fetching templates.</span>;
  }

  return (
    <div className="w-full max-w-[83rem] flex-grow py-6 lg:flex xl:px-8">
      <div className="min-w-[18rem] xl:w-80 xl:flex-shrink-0">
        <div className="relative h-full min-h-[12rem] flex-none pl-8 pr-6 pt-5 pb-10 sm:pl-6 lg:pl-8 xl:pl-0">
          <List
            text="Template"
            list={templates}
            onClickAdd={() => {
              setIsFormOpen(false);
              setSelectedTemplate(null);
              setIsFormOpen(true);
            }}
            onClickItem={() => setIsFormOpen(true)}
            setSelected={setSelectedTemplate}
          />
        </div>
      </div>

      {isFormOpen ? (
        <div className="min-w-0 flex-1 rounded-md shadow-lg xl:flex">
          <FormProvider {...methods}>
            <form
              className="relative h-full min-h-[36rem] flex-auto rounded-l-md bg-base-100 lg:min-w-[400px] lg:flex-1"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <Form
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                setIsFormOpen={setIsFormOpen}
              />
            </form>
          </FormProvider>

          <LivePreview data={tableData} setIsModalOpen={setIsModalOpen} />
        </div>
      ) : (
        <Placeholder setIsFormOpen={setIsFormOpen} />
      )}

      <ExportModal open={isModalOpen} setOpen={setIsModalOpen} data={watch()} />
    </div>
  );
}
