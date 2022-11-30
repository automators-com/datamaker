"use client";

import type { Dispatch, SetStateAction } from "react";
import NoContentRobot from "../../../public/assets/NoContentRobot.svg";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Placeholder(props: {
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <div className="mx-auto flex flex-col gap-5 self-center text-center lg:pt-16 xl:pt-16">
      <NoContentRobot className="scale-80 mx-auto w-40 fill-secondary" />

      <p className="text-xs text-base-content">
        Nothing to show for now. Select a template to see details.
      </p>

      <button
        className="btn btn-primary-accent mx-auto p-3 px-4"
        onClick={() => props.setIsFormOpen(true)}
      >
        <PlusIcon /> Create new template
      </button>
    </div>
  );
}
