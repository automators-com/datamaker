import {
  ArrowLeftIcon,
  CheckIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { TemplateField } from "../../utilities/types";
import Divider from "../../components/divider";
import { Input } from "../../components/input";
import CollapsedContainer from "./collapsedContainer";

export default function Form(props: {
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const [name, setName] = useState<string>("");
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
    <div
      className="relative h-full flex-auto rounded-l-md bg-base-100 lg:min-w-[400px] lg:flex-1"
      style={{ minHeight: "36rem" }}
    >
      <div className="flex h-20 items-center justify-between rounded-tl-md border-b border-base-200 border-opacity-40 bg-neutral bg-opacity-50 py-6 px-6 lg:px-9">
        <span className="font-medium text-neutral-content"> New Template</span>
        <div className="space-x-2">
          <button
            className="btn btn-secondary"
            onClick={() => props.setIsFormOpen(false)}
          >
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
          placeholder="Name"
          type="text"
          label="Template Name"
          value={name}
          setValue={(e: { target: { value: string } }) =>
            setName(e.target.value)
          }
        />

        <Divider />

        {FieldList.map((item, index) => {
          return (
            <CollapsedContainer
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
    </div>
  );
}
