import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
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

        <div className="relative my-5">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-base-200 border-opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
