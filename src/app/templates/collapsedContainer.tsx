import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { DataTypes } from "../../utilities/constants";
import type { Constraint, TemplateField } from "./types";
import Constraints from "../../components/constraints";
import Divider from "../../components/divider";
import DropDown from "../../components/dropdown";
import { Input } from "../../components/input";
import { MenuI } from "../../components/menu";

const CollapsedContainer = ({
  constraints,
  item,
  updateFieldList,
  FieldList,
}: {
  constraints: Constraint[];
  updateFieldList: (list: TemplateField[]) => void;
  FieldList: TemplateField[];
  item: TemplateField;
}) => {
  const [type, setType] = useState(DataTypes[0]);

  const handleAddConstrain = () => {
    const index = FieldList.indexOf(item);
    FieldList[index] = {
      ...FieldList[index],
      constraints: [...FieldList[index].constraints, { name: "Min", value: 0 }],
    };

    updateFieldList([...FieldList]);
  };

  const handleDeleteConstrain = (id: number) => {
    if (item.constraints.length === 1) return;

    const _list = FieldList;
    const index = _list.indexOf(item);
    _list[index].constraints.splice(id, 1);

    updateFieldList([..._list]);
  };

  const handleDelete = () => {
    const index = FieldList.indexOf(item);

    if (FieldList.length === 1) return;
    const updatedList = FieldList.filter((_: any, i: number) => index !== i);

    updateFieldList([...updatedList]);
  };

  const handleDuplicate = () => {
    const index = FieldList.indexOf(item);
    updateFieldList([...FieldList, { ...FieldList[index] }]);
  };

  const handleMoveDown = () => {
    const index = FieldList.indexOf(item);

    if (index !== -1 && index < FieldList.length - 1) {
      const el = FieldList[index];
      FieldList[index] = FieldList[index + 1];
      FieldList[index + 1] = el;
    }
    updateFieldList([...FieldList]);
  };

  const handleMoveUp = () => {
    const _list = FieldList;
    const index = _list.indexOf(item);

    if (index > 0) {
      const el = _list[index];
      _list[index] = _list[index - 1];
      _list[index - 1] = el;
    }

    updateFieldList([..._list]);
  };

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex w-full items-end gap-2 lg:gap-4">
              <Disclosure.Button className="inline-grid h-[30px] cursor-pointer place-content-center rounded-lg bg-accent py-2 hover:bg-accent-focus lg:w-[30px]">
                {open ? (
                  <ChevronUpIcon className="h-4 w-4 text-accent-content" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4 text-accent-content" />
                )}
              </Disclosure.Button>

              <div className="inline-flex items-center gap-2 lg:gap-4">
                <Input
                  label="Field Name"
                  name="fieldName"
                  addClass="border-base-content"
                  placeholder="Name"
                  type="text"
                  setValue={(e) => {
                    const index = FieldList.indexOf(item);
                    FieldList[index].fieldName = e.target.value;

                    updateFieldList([...FieldList]);
                  }}
                  value={item.fieldName}
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
                  addClass="mt-5"
                  handleDelete={handleDelete}
                  handleDuplicate={handleDuplicate}
                  handleMoveDown={handleMoveDown}
                  handleMoveUp={handleMoveUp}
                />
              </div>
            </div>
            <Disclosure.Panel className="flex flex-wrap items-center gap-x-2 px-5 pt-3">
              <span className="w-[72px] pr-20 text-xs font-medium text-base-content opacity-50">
                Field Constraints
              </span>

              {constraints.map((item, index) => {
                return (
                  <Constraints
                    handleDelete={() => handleDeleteConstrain(index)}
                    key={index}
                    // setFieldList={setFieldList}
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

export default CollapsedContainer;
