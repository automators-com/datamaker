import { ArrowLeftIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import Divider from "../../../components/divider";
import CollapsedContainer from "./collapsedContainer";
import { TemplateForm } from "./types";

export default function ArrayForm({
  isSubmit,
  setIsArray,
  isArray,
  index,
}: {
  isSubmit: boolean;
  setIsArray: any;
  isArray: boolean;
  index: number;
}) {
  const { control } = useFormContext<TemplateForm>();

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `fieldList.${index}.arrayData`,
  });

  console.log(fields);

  return (
    <>
      {fields.map((item, arrayIndex) => {
        return (
          <CollapsedContainer
            key={item.id}
            index={index}
            deleteField={(i: number) => {
              if (fields.length === 1) return;
              remove(i);
            }}
            move={move}
            isSubmit={isSubmit}
            setIsArray={setIsArray}
            isArray={isArray}
            arrayIndex={arrayIndex}
          />
        );
      })}

      <button
        className="btn btn-link mt-2 flex !pl-0 font-normal"
        onClick={() =>
          append({
            fieldName: "",
            dataType: { id: 1, name: "String" },
          })
        }
      >
        <PlusCircleIcon className="!h-5 !w-5 text-accent" /> Add Field
      </button>

      <Divider />

      <button
        className="btn btn-link"
        onClick={() => {
          setIsArray(false);
        }}
      >
        <ArrowLeftIcon /> Go back{" "}
      </button>
    </>
  );
}
