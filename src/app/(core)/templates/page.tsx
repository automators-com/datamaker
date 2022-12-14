"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import List from "../../../components/list";
import ExportModal from "./exportModal";
import Form from "./form";
import Placeholder from "./placeholder";
import LivePreview from "./livePreview";

import type { Template } from "./types";
import { getTableData } from "../../../utilities/tableData";

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

  if (isLoading) {
    // TODO: Add skeleton loader
    return <span>Loading...</span>;
  }

  if (isError) {
    // TODO: Add error state
    return <span>There was an error fetching templates.</span>;
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  const tableData = getTableData(1, selectedTemplate?.fields!);

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
          <Form
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
            setIsFormOpen={setIsFormOpen}
          />
          <LivePreview data={tableData} setIsModalOpen={setIsModalOpen} />
        </div>
      ) : (
        <Placeholder setIsFormOpen={setIsFormOpen} />
      )}

      <ExportModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        data={selectedTemplate!}
      />
    </div>
  );
}
