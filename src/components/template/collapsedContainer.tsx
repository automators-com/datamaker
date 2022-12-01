import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {
  useFieldArray,
  UseFieldArrayMove,
  useFormContext,
} from "react-hook-form";
import { DataTypes } from "../../utilities/constants";
import type { TemplateForm } from "../../utilities/types";
import Constrains from "../constrains";
import Divider from "../divider";
import DropDown from "../dropdown";
import { Input } from "../input";
import { MenuI } from "../menu";

const CollapsedContainer = ({
  index,
  deleteField,
  move,
}: {
  index: number;
  deleteField: (id: number) => void;
  move: UseFieldArrayMove;
}) => {
  const {
    register,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<TemplateForm>(); // retrieve all hook methods

  const [type, setType] = useState(DataTypes[0]);
  const Fields = getValues("fieldList");

  const { fields, append, remove } = useFieldArray({
    control,
    name: `fieldList.${index}.constrains`,
  });

  // console.log(errors.fieldList ? errors.fieldList[index] : "");

  const handleDuplicate = () =>
    setValue("fieldList", [...Fields, Fields[index]]);

  return (
    <>
      <Disclosure defaultOpen={index === 0 && true}>
        {({ open }) => (
          <>
            <div
              className={`flex  w-full ${
                errors.fieldList ? "items-flex-end" : "items-end"
              } gap-2 lg:gap-4`}
            >
              <Disclosure.Button
                className={`btn-primary-accent-light ${
                  errors.fieldList ? "mt-5" : ""
                } inline-grid h-[34px] w-10 cursor-pointer bg-accent py-2 hover:bg-accent-focus`}
              >
                {open ? (
                  <ChevronUpIcon className="h-5 w-5 text-accent-content" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-accent-content" />
                )}
              </Disclosure.Button>

              <div
                className={`inline-flex gap-2 lg:gap-4 ${
                  errors.fieldList ? "items-flex-end" : "items-center"
                }`}
              >
                <Input
                  label="Field Name"
                  addClass="border-base-content"
                  placeholder="Name"
                  type="text"
                  formRegister={{
                    ...register(`fieldList.${index}.fieldName`, {
                      required: "Please enter field name",
                    }),
                  }}
                  error={
                    errors.fieldList
                      ? errors.fieldList[index]?.fieldName?.message
                      : ""
                  }
                />
                <DropDown
                  label="Data Type"
                  list={DataTypes}
                  name="dataType"
                  setValue={setType}
                  value={type}
                  addClass="w-52 sm:w-48"
                />
                <MenuI
                  addClass="mt-5"
                  handleDelete={() => deleteField(index)}
                  handleDuplicate={handleDuplicate}
                  handleMoveDown={() => move(index, index + 1)}
                  handleMoveUp={() => move(index, index - 1)}
                />
              </div>
            </div>
            <Disclosure.Panel className="flex flex-wrap items-center gap-x-2 px-5 pt-3">
              <span className="mb-1 w-[72px] pr-20 text-sm font-medium text-base-content opacity-50">
                Field Constraints
              </span>

              {fields.map((item, i) => {
                return (
                  <Constrains
                    handleDelete={() => {
                      if (fields.length === 1) return;
                      remove(i);
                    }}
                    key={index}
                    register={register}
                    nestedIndex={i}
                    index={index}
                  />
                );
              })}

              {fields.length < 3 && (
                <button
                  className="btn-primary-accent-light !inline-grid h-12 w-12"
                  onClick={() => {
                    append({
                      name: "",
                      value: 0,
                    });
                  }}
                >
                  <PlusIcon className="h-5 w-5" />
                </button>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Divider />
    </>
  );
};

export default CollapsedContainer;
