import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import CallbackItem from "../callbackItem";

const initialCallback = { fieldName: "", value: 0 };

const CallbackList = () => {
  const [callbacks, setCallbacks] = useState([initialCallback]);
  // const [field, setField] = useState("");

  const handleDelete = (id: number) => {
    console.log(id);

    if (callbacks.length === 1) return;
    const updatedList = callbacks.filter((_, index) => index !== id);
    setCallbacks(updatedList);
  };

  const handleItemChange = (
    id: number,
    item: { fieldName: string; value: number }
  ) => {
    const _list = callbacks;
    _list[id] = item;

    setCallbacks(_list);
  };

  const handleAddCallback = () => {
    setCallbacks((prev) => {
      return [...prev, initialCallback];
    });
  };


  return (
    <div>
      <div>
        <div className="ml-6 flex text-xs">
          <span className="w-1/2 text-base-content"> Callback Field Name</span>
          <span className="w-auto text-base-content"> Callback Value Source</span>
        </div>
        {callbacks.map((item, index) => {
          return (
            <CallbackItem
              key={index}
              id={index}
              handleDelete={handleDelete}
              item={item}
              setItem={handleItemChange}
            />
          );
        })}
      </div>
      <button
        className="btn btn-primary-accent-light ml-6 h-9 font-normal"
        onClick={handleAddCallback}
      >
        <PlusIcon className="text-accent" /> Add Callback
      </button>
    </div>
  );
};

export default CallbackList;
