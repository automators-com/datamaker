import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

const Form = () => {
  return (
    <div className="">
      <div className="flex justify-between bg-base-200 p-4">
        <span> New Template</span>
        <div className="space-x-2">
          <button className="btn btn-primary">
            <ArrowLeftIcon /> Discard
          </button>

          <button className="btn btn-primary">
            <CheckIcon /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
