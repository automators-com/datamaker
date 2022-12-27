import { Bars3Icon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import DropDown from "../dropdown";
import { Input } from "../input";

const sources = [
  { id: 1, name: "ID (Response)" },
  { id: 2, name: "CLIENT" },
];

const CallbackItem = ({
  id,
  setItem,
  item,
  handleDelete,
}: {
  id: number;
  setItem: (id: number, item: { fieldName: string; value: number }) => void;
  handleDelete: (index: number) => void;
  item: { fieldName: string; value: number };
}) => {
  const [source, setSource] = useState(sources[0]);
  const [currentItem, setCurrentItem] = useState(item);

  useEffect(() => {
    setItem(id, currentItem);
  }, [currentItem]);

  useEffect(() => {
    setCurrentItem((prev) => {
      return {
        ...prev,
        value: source.id,
      };
    });
  }, [source]);

  return (
    <div className="flex items-center space-x-2">
      <Bars3Icon className="h-4 w-4 text-base-content " />

      <div className="my-2 flex w-full flex-row space-x-2 rounded-md bg-secondary bg-opacity-10 py-2 px-2">
        <Input
          name="field"
          placeholder="Name"
          type="text"
          addClass="w-full"
          value={currentItem.fieldName}
          setValue={(e) =>
            setCurrentItem((prev) => {
              return {
                ...prev,
                fieldName: e.target.value,
              };
            })
          }
        />
        <DropDown
          list={sources}
          name="valueSource"
          setValue={setSource}
          value={source}
          addClass="w-3/6"
        />
      </div>

      <button onClick={() => handleDelete(id)}>
        <TrashIcon className="h-4 w-4 text-base-content hover:text-base-content hover:text-opacity-70" />
      </button>
    </div>
  );
};

export default CallbackItem;
