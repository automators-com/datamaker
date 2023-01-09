import { Disclosure } from "@headlessui/react";
// import {
//   ChevronDownIcon,
//   ChevronUpIcon,
//   PlusIcon,
// } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { DataTypes } from "../../../utilities/constants";
// import Constraints from "../../../components/constraints";
import Divider from "../../../components/divider";
import DropDown from "../../../components/dropdown";
import { Input } from "../../../components/input";
import { MenuI } from "../../../components/menu";
import type { UseFieldArrayMove } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import type { Item, TemplateForm } from "./types";
import ReactTooltip from "react-tooltip";
import Image from "next/image";

const CollapsedContainer = ({
  deleteField,
  index,
  move,
  isSubmit,
  landing,
}: {
  index: number;
  deleteField?: (i: number) => void;
  move?: UseFieldArrayMove;
  isSubmit?: boolean;
  landing?: boolean;
}) => {
  const {
    register,
    // control,
    getValues,
    setValue,
    formState: { errors },
    // clearErrors,
    // setError,
  } = useFormContext<TemplateForm>(); // retrieve all hook methods

  const Fields = getValues("fieldList");
  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: `fieldList.${index}.constraints`,
  //   rules: {
  //     validate: (fields: Constraint[]) => {
  //       const minValue = fields.find((x) => x.name?.id === 1)?.value;
  //       const maxValue = fields.find((x) => x.name?.id === 2)?.value;

  //       if (minValue && maxValue) {
  //         if (minValue > maxValue)
  //           return "Minimum value cannot be more than the maximum value.";
  //       }
  //     },
  //   },
  // });
  console.log({ Fields, index });
  const [type, setType] = useState(Fields[index].dataType);
  // const [list, setList] = useState(_list);

  const handleDuplicate = () =>
    setValue("fieldList", [...Fields, Fields[index]]);

  // const addConstraints = (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   e.preventDefault();
  //   append({
  //     name: null,
  //     value: 0,
  //   });
  //   const constraintsName = getValues(`fieldList.${index}.constraints`).map(
  //     (x) => x.name?.id
  //   );

  //   const updatedList = _list.filter((x) => !constraintsName.includes(x.id));
  //   if (constraintsName.length === 1) return;

  //   setList([...updatedList]);
  // };

  // const deleteConstraints = (i: number) => {
  //   remove(i);
  //   const constraintsName = getValues(`fieldList.${index}.constraints`).map(
  //     (x) => x.name?.id
  //   );

  //   const updatedList = _list.filter((x) => !constraintsName.includes(x.id));
  //   setList([...updatedList]);
  // };

  return (
    <>
      <Disclosure
        defaultOpen={
          (index === 0 || (index === Fields.length - 1 && !landing)) && true
        }
      >
        {/* {({ open }) => ( */}
        <>
          <div
            className={`flex w-full ${
              landing && index !== 0 ? "pt-6" : ""
            } gap-2 lg:gap-2 ${
              isSubmit && errors.fieldList ? "items-flex-end" : "items-end"
            }`}
          >
            {/* <Disclosure.Button
            aria-label="Toggle Constraints"
                className={`inline-grid h-8 min-w-[32px] ${
                  isSubmit && errors.fieldList ? "mt-6" : ""
                }
                cursor-pointer place-content-center rounded-lg bg-accent hover:bg-accent-focus`}
              >
                {open ? (
                  <ChevronUpIcon className="h-4 w-4 text-accent-content" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4 text-accent-content" />
                )}
              </Disclosure.Button> */}

            <div
              className={`inline-flex w-full gap-2 lg:gap-3 ${
                isSubmit && errors.fieldList ? "items-flex-end" : "items-center"
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
                  isSubmit && errors.fieldList
                    ? errors.fieldList[index]?.fieldName?.message
                    : ""
                }
                pClass="w-[55%]"
              />
              <div className="relative w-[45%]">
                <DropDown
                  label="Data Type"
                  list={DataTypes}
                  name="dataType"
                  setValue={(e: Item) => {
                    setType(e);
                    setValue(`fieldList.${index}.dataType`, e);
                  }}
                  value={type}
                  addClass=""
                  formRegister={{ ...register(`fieldList.${index}.dataType`) }}
                />
                {index === 0 && landing && (
                  <>
                    <div
                      data-tip
                      data-for="data"
                      className="absolute -top-1 left-20 rounded-full bg-[#F46256] p-2"
                    >
                      <Image
                        src="/assets/question-mark-icon.svg"
                        alt="question icon"
                        width={8}
                        height={8}
                      />
                    </div>
                    <ReactTooltip
                      id="data"
                      place="top"
                      delayHide={300}
                      effect="solid"
                      className="!rounded-md !bg-black !p-3"
                    >
                      <p className="w-64 text-xs">
                        <strong>
                          Data Types determine the general form a data a field
                          will generate,{" "}
                        </strong>
                        The list of data types is constantly growing already
                        features a number of smart and AI-Driven methods.
                      </p>
                    </ReactTooltip>
                  </>
                )}
              </div>
              {!landing && (
                <MenuI
                  addClass={`${isSubmit && errors.fieldList ? "mt-7" : "mt-6"}`}
                  handleDelete={() => deleteField && deleteField(index)}
                  handleDuplicate={handleDuplicate}
                  handleMoveDown={() => move && move(index, index + 1)}
                  handleMoveUp={() => move && move(index, index - 1)}
                />
              )}
            </div>
          </div>
          <Disclosure.Panel className="flex flex-wrap items-center gap-x-2 px-5 pt-3">
            {/* <>
                <span className="w-[72px] pr-20 text-xs font-medium text-base-content opacity-50">
                  Field Constraints
                </span>

                {fields.map((item, i) => {
                  return (
                    <Constraints
                      handleDelete={() => deleteConstraints(i)}
                      key={item.id}
                      nestedIndex={i}
                      index={index}
                      list={list}
                      register={register}
                      setValue={setValue}
                      clearErrors={clearErrors}
                      getValues={getValues}
                      setError={setError}
                    />
                  );
                })}

                {fields.length < 3 && (
                  <button
                    aria-label="Add Constraints"
                    className="btn-primary-accent-light !inline-grid h-12 w-12"
                    onClick={addConstraints}
                  >
                    <PlusIcon className="h-5 w-5" />
                  </button>
                )}
                <br />
              </> */}
          </Disclosure.Panel>
          {/* {errors.fieldList && errors.fieldList[index]?.constraints?.message && (
              <p className="mt-2 pl-5 text-xs text-error" id="email-error">
                {errors.fieldList[index]?.constraints?.message}
              </p>
            )} */}
          {/* {errors.fieldList &&
              errors.fieldList[index]?.constraints?.root &&
              isSubmit && (
                <p className="mt-2 pl-5 text-xs text-error" id="email-error">
                  {errors.fieldList[index]?.constraints?.root?.message}
                </p>
              )} */}
        </>
        {/* )} */}
      </Disclosure>
      {!landing && <Divider />}
    </>
  );
};

export default CollapsedContainer;
