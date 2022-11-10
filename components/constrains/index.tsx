import React, { useState } from "react";
import DropDown from "../dropdown";
import { Input } from "../input";

const _list = [
  { id: 1, name: "Min" },
  { id: 2, name: "Max" },
  { id: 3, name: "RegEx (Words)" },
];

export const Constrains = ({ handleDelete }: { handleDelete: any }) => {
  const [selected, setSelected] = useState(_list[0]);
  const [number, setNumber] = useState(0);

  return (
    <div className="my-2 flex max-w-min flex-row space-x-2 rounded-md bg-base-300 py-2 pr-2">
      <DropDown
        list={_list}
        name=""
        // setValue={setSelected}
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
          addClass="w-16 pr-1 text-left"
          value={number}
        />
      )}

      <button onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#442E78"
          className="h-5 w-5 hover:text-primary-focus"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>{" "}
      </button>
    </div>
  );
};

export default Constrains;
