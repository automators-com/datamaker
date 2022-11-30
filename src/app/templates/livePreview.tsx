"use client";

import type { Dispatch, SetStateAction } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function LivePreview(props: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
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
      </div>
    </div>
  );
}
