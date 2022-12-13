import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import {
  UseFormClearErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import type { Item, TemplateForm } from "../../app/(core)/templates/types";
import DropDown from "../dropdown";
import { Input } from "../input";

export const Constraints = ({
  register,
  setValue,
  handleDelete,
  index,
  nestedIndex,
  list,
  clearErrors,
  getValues,
  setError,
}: {
  register?: UseFormRegister<TemplateForm>;
  setValue?: UseFormSetValue<TemplateForm>;
  handleDelete: () => void;
  index: number;
  nestedIndex: number;
  list: Item[];
  clearErrors?: UseFormClearErrors<TemplateForm>;
  getValues?: UseFormGetValues<TemplateForm>;
  setError?: UseFormSetError<TemplateForm>;
}) => {
  const [selected, setSelected] = useState<Item>(list[0]);
  // console.log(getValues && getValues(`fieldList.${index}.constraints`), list[0]);

  useEffect(() => {
    setValue &&
      setValue(`fieldList.${index}.constraints.${nestedIndex}.name`, list[0]);
  }, []);

  return (
    <div className="my-2 inline-flex w-[200px] flex-row space-x-2 rounded-md bg-base-content bg-opacity-10 py-2 px-2">
      <DropDown
        list={list}
        name=""
        value={selected}
        addClass="w-full"
        setValue={(e: Item) => {
          setSelected(e);
          setValue &&
            setValue(`fieldList.${index}.constraints.${nestedIndex}.name`, e);
        }}
      ></DropDown>

      {(selected?.name === "Min" || selected?.name === "Max") && (
        <>
          <Input
            type="number"
            addClass="w-14 !pr-0.5 text-center"
            formRegister={
              register && {
                ...register(
                  `fieldList.${index}.constraints.${nestedIndex}.value`,
                  {
                    required: "Please enter value",
                    valueAsNumber: true,
                    onChange: () => {
                      const minValue =
                        getValues &&
                        getValues(`fieldList.${index}.constraints`).find(
                          (x) => x.name?.id === 1
                        )?.value;
                      const maxValue =
                        getValues &&
                        getValues(`fieldList.${index}.constraints`).find(
                          (x) => x.name?.id === 2
                        )?.value;
                      if (
                        typeof minValue !== "undefined" &&
                        typeof maxValue !== "undefined"
                      ) {
                        if (minValue < maxValue)
                          clearErrors &&
                            clearErrors(`fieldList.${index}.constraints`);
                        else
                          setError &&
                            setError(`fieldList.${index}.constraints`, {
                              message:
                                "Minimum value cannot be more than the maximum value.",
                              type: "required",
                            });
                      }
                    },
                  }
                ),
              }
            }
          />
        </>
      )}
      <button onClick={handleDelete}>
        <TrashIcon className="h-3 w-3 text-base-content hover:text-base-content hover:text-opacity-70" />
      </button>
    </div>
  );
};

export default Constraints;
