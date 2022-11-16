import {
  ArrowLeftIcon,
  CheckIcon,
  ChevronUpIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Constrains from "../constrains";
import Divider from "../divider";
import { Input } from "../input";

const Form = () => {
  const [name, setName] = useState("");

  return (
    <div className="">
      <div className="flex justify-between border-b bg-base-200 bg-opacity-10 py-6 px-9">
        <span className="font-medium text-base-content"> New Template</span>
        <div className="space-x-2">
          <button className="btn btn-secondary">
            <ArrowLeftIcon /> Discard
          </button>

          <button className="btn btn-primary-accent">
            <CheckIcon /> Save
          </button>
        </div>
      </div>

      <div className="p-9">
        <Input
          name="tempplateName"
          placeholder="name"
          type="text"
          label="Template Name"
          value={name}
          setValue={(e) => setName(e.target.value)}
        />

        <Divider />

        <div className="rounded-md">
          <details className="duration-300">
            <summary className="btn-primary-accent-light h-10 w-10 cursor-pointer bg-accent hover:bg-accent-focus">
              <ChevronUpIcon className="h-6 w-6 text-accent-content" />
            </summary>
            <div className=" flex items-center space-x-2 px-5 py-3">
              <span className="mb-1 text-sm font-medium text-base-content opacity-50">
                {" "}
                Field Constraints{" "}
              </span>
              <Constrains handleDelete={() => console.log("dsd")} />

              <button className="btn-primary-accent-light !inline-grid h-12 w-12">
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Form;
