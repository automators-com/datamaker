"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import List from "../../components/List";
import ExportModal from "./exportModal";
import Form from "./form";
import Placeholder from "./placeholder";
import LivePreview from "./livePreview";

import type { Template } from "./types";

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

  if (isLoading) {
    // TODO: Add skeleton loader
    return <span>Loading...</span>;
  }

  if (isError) {
    // TODO: Add error state
    return <span>There was an error fetching templates.</span>;
  }

  return (
    <div className="w-full max-w-[81rem] flex-grow py-6 lg:flex xl:px-8">
      <div className="min-w-[18rem] xl:w-80 xl:flex-shrink-0">
        <div className="relative h-full min-h-[12rem] flex-none pl-8 pr-6 pt-5 pb-10 sm:pl-6 lg:pl-8 xl:pl-0">
          <List
            text="Template"
            list={templates}
            onClickAdd={() => setIsFormOpen(true)}
          />
        </div>
      </div>

      {isFormOpen ? (
        <div className="min-w-0 flex-1 rounded-md shadow-lg xl:flex">
          <Form setIsFormOpen={setIsFormOpen} />
          <LivePreview setIsModalOpen={setIsModalOpen} />
        </div>
      ) : (
        <Placeholder setIsFormOpen={setIsFormOpen} />
      )}

      <ExportModal open={isModalOpen} setOpen={setIsModalOpen} />
    </div>
  );
}
