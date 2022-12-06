import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import type { Item, TemplateForm } from "../../app/templates/types";
import DropDown from "../dropdown";
import { Input } from "../input";

export const Constraints = ({
  register,
  setValue,
  handleDelete,
  index,
  nestedIndex,
  list,
}: {
  register?: UseFormRegister<TemplateForm>;
  setValue?: UseFormSetValue<TemplateForm>;
  handleDelete: () => void;
  index: number;
  nestedIndex: number;
  list: Item[];
}) => {
  const [selected, setSelected] = useState<Item>(list[0]);

  // console.log(errors.fieldList);

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

          // const constraintsName = getValues(`fieldList.${index}.constraints`).map(x => x.name.id)

          // if (constraintsName.length === 1) return
          // const updatedList = list.filter(x => !constraintsName.includes(x.id))
          // // setList(updatedList)

          // console.log(constraintsName, updatedList);
          // // setList(list)
        }}
      ></DropDown>

      {selected?.id !== 3 && (
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
                    min: 10,
                    // max: ,
                    // validate: {
                    //   max: (value) => value! > (constraint ? constraint.filter(x => x.name?.id === 1) ? constraint.filter(x => x.name?.id === 1)[0].value! : 1000 : 1000),
                    //   // min: (value) => parseFloat(value) < 200
                    // } // min,
                  }
                ),
              }
            }
            // error={
            //   fields ? fields[nestedIndex]?.value?.message : ""
            // }
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
