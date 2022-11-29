import {
  ArrowLeftIcon,
  CheckIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import type { TemplateField, TemplateForm } from "../../utilities/types";
import Divider from "../divider";
import { Input } from "../input";
import CollapasedContainer from "./collapasedContainer";

const defaultValues: TemplateForm = {
  isOpen: true,
  templateName: "test",
  fieldList: [
    {
      fieldName: "useFieldArray1",
      dataType: 1,
      constrains: [{ name: "Min", value: 1 }],
    },
  ],
};

const Form = () => {
  const {
    register,
    handleSubmit,
    // getValues,
    // reset,
    // setValue,
    control,
    formState: { errors },
  } = useForm<TemplateForm>({ defaultValues });
  // const [name, setName] = useState("");
  const [FieldList, setFieldList] = useState<TemplateField[]>([
    { constrains: [{ name: "Min", value: 1 }], fieldName: "", dataType: 1 },
  ]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fieldList",
  });

  const updateFieldList = (list: TemplateField[]) => {
    setFieldList(list);
  };

  // const handleAddField = () => {
  //   setFieldList((prev) => {
  //     return [
  //       ...prev,
  //       { constrains: [{ name: "Min", value: 1 }], fieldName: "", dataType: 1 },
  //     ];
  //   });
  // };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className="flex h-20 items-center justify-between rounded-tl-md border-b border-base-200 border-opacity-40 bg-neutral bg-opacity-50 py-6 px-6 lg:px-9">
        <span className="font-medium text-neutral-content"> New Template</span>
        <div className="space-x-2">
          <button className="btn btn-secondary ">
            <ArrowLeftIcon /> Discard
          </button>

          <button className="btn btn-primary-accent" type="submit">
            <CheckIcon /> Save
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-6 md:p-8 lg:p-9">
        <Input
          formRegister={{
            ...register("templateName", {
              required: "Please enter a template name",
            }),
          }}
          error={errors.templateName?.message}
          id={"templateName"}
          // name="templateName"
          placeholder="name"
          type="text"
          label="Template Name"
          // value={"templateName"}
          // setValue={(e) => setName(e.target.value)}
        />

        <Divider />

        {fields.map((item, index) => {
          return (
            <CollapasedContainer
              key={index}
              // constrains={item.constrains}
              updateFieldList={updateFieldList}
              item={item}
              FieldList={FieldList}
              register={register}
              index={index}
              errors={errors}
              control={control}
              deleteField={(i: number) => {
                if (fields.length === 1) return;
                remove(i);
              }}
            />
          );
        })}

        <button
          className="btn btn-link mt-2 flex !pl-0 font-normal"
          onClick={() =>
            append({
              fieldName: "",
              dataType: 1,
              constrains: [{ name: "", value: 1 }],
            })
          }
        >
          <PlusCircleIcon className="!h-5 !w-5 text-accent" /> Add Field
        </button>
      </div>
    </form>
  );
};

export default Form;
