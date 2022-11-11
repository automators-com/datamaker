import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import DropDown from "../dropdown";
import { Input } from "../input";

const _list = [
  { id: 1, name: "Min" },
  { id: 2, name: "Max" },
  { id: 3, name: "RegEx (Words)" },
];

export const Constrains = ({ handleDelete }: { handleDelete: () => void }) => {
  const [selected, setSelected] = useState(_list[0]);
  const [number, setNumber] = useState(0);

  return (
    <div className="my-2 flex max-w-min flex-row space-x-2 rounded-md bg-secondary bg-opacity-10 py-2 pr-2">
      <DropDown
        list={_list}
        name=""
        value={selected}
        addClass="w-auto min-w-[120px]"
        setValue={setSelected}
      ></DropDown>

      {selected.id !== 3 && (
        <Input
          type="number"
          name="number"
          placeholder={selected.name}
          setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNumber(Number(e.target.value))
          }
          addClass="w-16 pr-0.5 text-left"
          value={number}
        />
      )}
      <button onClick={handleDelete}>
        <TrashIcon className="h-4 w-4 hover:text-primary-focus" />
      </button>
    </div>
  );
};

export default Constrains;
