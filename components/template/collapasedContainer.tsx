import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { DataTypes } from "../../utilities/constants";
import Constrains from "../constrains";
import Divider from "../divider";
import DropDown from "../dropdown";
import { Input } from "../input";
import { MenuI } from "../menu";

const CollapasedContainer = ({
  constrains,
  item,
  setFieldList,
}: {
  constrains: any[];
  setFieldList: any;
  item: any;
}) => {
  const [field, setField] = useState("");
  const [type, setType] = useState(DataTypes[0]);

  const handleAddConstrain = () => {
    setFieldList((prev: any) => {
      const index = prev.indexOf(item);
      prev[index] = {
        ...prev[index],
        constrains: [...prev[index].constrains, {}],
      };
      console.log(prev);

      return [...prev];
    });
  };

  const handleDelete = (id: number) => {
    if (item.constrains.length === 1) return;

    console.log(id);
    //   // const updatedConstrains = item.constrains.filter((_:any, index: number) => index !== id);
    //   // setFieldList((prev: any) => {

    //   //     const index = prev.indexOf(item);
    //   //     prev[index]= { ...prev[index], constrains: updatedConstrains}
    //   //     console.log(id, prev);

    //   //     return prev
    //   // })
  };

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex w-full items-end gap-4">
              <Disclosure.Button className="btn-primary-accent-light inline-grid h-[34px] w-10 cursor-pointer bg-accent py-2 hover:bg-accent-focus">
                {open ? (
                  <ChevronUpIcon className="h-5 w-5 text-accent-content" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-accent-content" />
                )}
              </Disclosure.Button>

              <div className="inline-flex items-center gap-4">
                <Input
                  label="Field Name"
                  name="fieldName"
                  addClass="border-base-content"
                  placeholder=""
                  type="text"
                  setValue={(e) => setField(e.target.value)}
                  value={field}
                />
                <DropDown
                  label="Data Type"
                  list={DataTypes}
                  name="dataType"
                  setValue={setType}
                  value={type}
                  addClass="w-52"
                />
                <MenuI addClass="mt-5" />
              </div>
            </div>
            <Disclosure.Panel className="flex flex-wrap items-center gap-x-2 px-5 pt-3">
              <span className="mb-1 w-[72px] pr-20 text-sm font-medium text-base-content opacity-50">
                Field Constraints
              </span>

              {constrains.map((item, index) => {
                return (
                  <Constrains
                    handleDelete={() => handleDelete(index)}
                    key={index}
                  />
                );
              })}

              <button
                className="btn-primary-accent-light !inline-grid h-12 w-12"
                onClick={handleAddConstrain}
              >
                <PlusIcon className="h-5 w-5" />
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Divider />
    </>
  );
};

export default CollapasedContainer;
