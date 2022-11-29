import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {
  Control,
  FieldErrorsImpl,
  useFieldArray,
  UseFormRegister,
} from "react-hook-form";
import { DataTypes } from "../../utilities/constants";
import type { TemplateField, TemplateForm } from "../../utilities/types";
import Constrains from "../constrains";
import Divider from "../divider";
import DropDown from "../dropdown";
import { Input } from "../input";
import { MenuI } from "../menu";

const CollapasedContainer = ({
  // constrains,
  item,
  updateFieldList,
  FieldList,
  register,
  index,
  control,
  // setValue,
  // getValues,
  errors,
  deleteField,
}: {
  // constrains: Constrain[];
  updateFieldList: (list: TemplateField[]) => void;
  FieldList: TemplateField[];
  item: TemplateField;
  register: UseFormRegister<TemplateForm>;
  index: number;
  control: Control<TemplateForm, any>;
  // setValue: ,
  // getValues: ,
  deleteField: any;
  errors: Partial<FieldErrorsImpl<TemplateForm>>;
}) => {
  const [type, setType] = useState(DataTypes[0]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: `fieldList.${index}.constrains`,
  });

  // console.log(errors.fieldList ? errors.fieldList[index] : "");

  // const handleAddConstrain = () => {
  //   const index = FieldList.indexOf(item);
  //   FieldList[index] = {
  //     ...FieldList[index],
  //     constrains: [...FieldList[index].constrains, { name: "Min", value: 0 }],
  //   };

  //   updateFieldList([...FieldList]);
  // };

  // const handleDeleteConstrain = (id: number) => {
  //   if (item.constrains.length === 1) return;

  //   const _list = FieldList;
  //   const index = _list.indexOf(item);
  //   _list[index].constrains.splice(id, 1);

  //   updateFieldList([..._list]);
  // };

  // const handleDelete = () => {
  //   const index = FieldList.indexOf(item);

  //   if (FieldList.length === 1) return;
  //   const updatedList = FieldList.filter((_: any, i: number) => index !== i);

  //   updateFieldList([...updatedList]);
  // };

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
      <Disclosure defaultOpen={index === 0 && true}>
        {({ open }) => (
          <>
            <div className="flex w-full items-end gap-2 lg:gap-4">
              <Disclosure.Button className="btn-primary-accent-light inline-grid h-[34px] w-10 cursor-pointer bg-accent py-2 hover:bg-accent-focus">
                {open ? (
                  <ChevronUpIcon className="h-5 w-5 text-accent-content" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-accent-content" />
                )}
              </Disclosure.Button>

              <div className="inline-flex items-center gap-2 lg:gap-4">
                <Input
                  label="Field Name"
                  // name="fieldName"
                  addClass="border-base-content"
                  placeholder="Name"
                  type="text"
                  // setValue={(e) => {
                  //   const index = FieldList.indexOf(item);
                  //   FieldList[index].fieldName = e.target.value;

                  //   updateFieldList([...FieldList]);
                  // }}
                  value={item.fieldName}
                  formRegister={{
                    ...register(`fieldList.${index}.fieldName`, {
                      required: "Please enter field name",
                    }),
                  }}
                  error={
                    errors.fieldList ? errors.fieldList[index]?.message : ""
                  }
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
                  handleDelete={() => deleteField(index)}
                  handleDuplicate={handleDuplicate}
                  handleMoveDown={handleMoveDown}
                  handleMoveUp={handleMoveUp}
                />
              </div>
            </div>
            <Disclosure.Panel className="flex flex-wrap items-center gap-x-2 px-5 pt-3">
              <span className="mb-1 w-[72px] pr-20 text-sm font-medium text-base-content opacity-50">
                Field Constraints
              </span>

              {fields.map((item, i) => {
                return (
                  <Constrains
                    // handleDelete={() => handleDeleteConstrain(index)}
                    handleDelete={() => {
                      if (fields.length === 1) return;
                      remove(i);
                    }}
                    key={index}
                    // setFieldList={setFieldList}
                  />
                );
              })}

              <button
                className="btn-primary-accent-light !inline-grid h-12 w-12"
                onClick={() => {
                  append({
                    name: "",
                    value: 0,
                  });
                }}
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
