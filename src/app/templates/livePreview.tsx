"use client";

import type { Dispatch, SetStateAction } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function LivePreview(props: {
  data: unknown;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const pretty = JSON.stringify(props.data, null, 4);
  return (
    <div
      id="live_preview"
      className="rounded-r-md bg-base-200 bg-opacity-50 lg:flex-shrink-0 xl:pr-0"
    >
      <div className="relative h-full xl:w-96" style={{ minHeight: "16rem" }}>
        <div className="flex h-20 items-center justify-between p-6">
          <span className="text-xs font-medium text-base-content">
            LIVE PREVIEW
          </span>
          <button
            className="btn btn-primary"
            onClick={() => props.setIsModalOpen(true)}
          >
            <PaperAirplaneIcon /> Export/Send Data
          </button>
        </div>
        <div
          id="preview_data"
          className="flex flex-col flex-wrap whitespace-pre-wrap p-6 text-sm"
        >
          {pretty}
        </div>
      </div>
    </div>
  );
}
