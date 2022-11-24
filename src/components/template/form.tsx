import {
  ArrowLeftIcon,
  CheckIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import type { TemplateField } from "../../utilities/types";
import Divider from "../divider";
import { Input } from "../input";
import CollapasedContainer from "./collapasedContainer";

const Form = () => {
  const [name, setName] = useState("");
  const [FieldList, setFieldList] = useState<TemplateField[]>([
    { constrains: [{ name: "Min", value: 1 }], fieldName: "", dataType: 1 },
  ]);

  const updateFieldList = (list: TemplateField[]) => {
    setFieldList(list);
  };

  const handleAddField = () => {
    setFieldList((prev) => {
      return [
        ...prev,
        { constrains: [{ name: "Min", value: 1 }], fieldName: "", dataType: 1 },
      ];
    });
  };

  return (
    <>
      <div className="flex h-20 items-center justify-between rounded-tl-md border-b border-base-200 border-opacity-40 bg-neutral bg-opacity-50 py-6 px-6 lg:px-9">
        <span className="font-medium text-neutral-content"> New Template</span>
        <div className="space-x-2">
          <button className="btn btn-secondary ">
            <ArrowLeftIcon /> Discard
          </button>

          <button className="btn btn-primary-accent">
            <CheckIcon /> Save
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-6 md:p-8 lg:p-9">
        <Input
          name="templateName"
          placeholder="name"
          type="text"
          label="Template Name"
          value={name}
          setValue={(e) => setName(e.target.value)}
        />

        <Divider />

        {FieldList.map((item, index) => {
          return (
            <CollapasedContainer
              key={index}
              constrains={item.constrains}
              updateFieldList={updateFieldList}
              item={item}
              FieldList={FieldList}
            />
          );
        })}

        <button
          className="btn btn-link mt-2 flex !pl-0 font-normal"
          onClick={handleAddField}
        >
          <PlusCircleIcon className="!h-5 !w-5 text-accent" /> Add Field
        </button>
      </div>
    </>
  );
};

export default Form;