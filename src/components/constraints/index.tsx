import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { TemplateForm } from "../../app/templates/types";
import DropDown from "../dropdown";
import { Input } from "../input";

const _list = [
  { id: 1, name: "Min" },
  { id: 2, name: "Max" },
  { id: 3, name: "RegEx (Words)" },
];

export const Constraints = ({
  handleDelete,
  register,
  index,
  nestedIndex,
}: {
  handleDelete: () => void;
  register: UseFormRegister<TemplateForm> | null;
  index: number;
  nestedIndex: number;
}) => {
  const [selected, setSelected] = useState(_list[0]);

  return (
    <div className="my-2 inline-flex w-[200px] flex-row space-x-2 rounded-md bg-base-content bg-opacity-10 py-2 px-2">
      <DropDown
        list={_list}
        name=""
        value={selected}
        addClass="w-full"
        setValue={setSelected}
      ></DropDown>

      {selected.id !== 3 && (
        <Input
          type="number"
          placeholder={selected.name}
          addClass="w-14 !pr-0.5 text-center"
          formRegister={
            register && {
              ...register(
                `fieldList.${index}.constraints.${nestedIndex}.value`,
                {
                  required: "Please enter value",
                }
              ),
            }
          }
        />
      )}
      <button onClick={handleDelete}>
        <TrashIcon className="h-3 w-3 text-base-content hover:text-base-content hover:text-opacity-70" />
      </button>
    </div>
  );
};

export default Constraints;
