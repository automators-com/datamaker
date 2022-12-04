import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { DataTypes } from "../../utilities/constants";
import Constraints from "../../components/constraints";
import Divider from "../../components/divider";
import DropDown from "../../components/dropdown";
import { Input } from "../../components/input";
import { MenuI } from "../../components/menu";
import {
  useFieldArray,
  UseFieldArrayMove,
  useFormContext,
} from "react-hook-form";
import { TemplateForm } from "./types";

const CollapsedContainer = ({
  deleteField,
  index,
  move,
}: {
  index: number;
  deleteField: (i: number) => void;
  move: UseFieldArrayMove;
}) => {
  const [type, setType] = useState(DataTypes[0]);

  const {
    register,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<TemplateForm>(); // retrieve all hook methods

  const Fields = getValues("fieldList");
  const { fields, append, remove } = useFieldArray({
    control,
    name: `fieldList.${index}.constraints`,
  });

  const handleDuplicate = () =>
    setValue("fieldList", [...Fields, Fields[index]]);

  return (
    <>
      <Disclosure defaultOpen={index === 0 && true}>
        {({ open }) => (
          <>
            <div
              className={`flex w-full gap-2 lg:gap-2  ${
                errors.fieldList ? "items-flex-end" : "items-end"
              }`}
            >
              <Disclosure.Button
                className={`inline-grid h-8 min-w-[32px] ${
                  errors.fieldList ? "mt-6" : ""
                }
                cursor-pointer place-content-center rounded-lg bg-accent hover:bg-accent-focus`}
              >
                {open ? (
                  <ChevronUpIcon className="h-4 w-4 text-accent-content" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4 text-accent-content" />
                )}
              </Disclosure.Button>

              <div
                className={`inline-flex gap-2 lg:gap-3 ${
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
                  addClass="mt-6"
                  handleDelete={() => deleteField(index)}
                  handleDuplicate={handleDuplicate}
                  handleMoveDown={() => move(index, index + 1)}
                  handleMoveUp={() => move(index, index - 1)}
                />
              </div>
            </div>
            <Disclosure.Panel className="flex flex-wrap items-center gap-x-2 px-5 pt-3">
              <span className="w-[72px] pr-20 text-xs font-medium text-base-content opacity-50">
                Field Constraints
              </span>

              {fields.map((item, i) => {
                return (
                  <Constraints
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
