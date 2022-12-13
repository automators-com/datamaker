import React, { useState } from "react";
import {
  ArrowLeftIcon,
  PaperAirplaneIcon as PaperAirplaneIconOutline,
} from "@heroicons/react/24/outline";
import { RadioGroup } from "@headlessui/react";
import { classNames } from "../../../utilities/className";

const Types = [
  { name: "Table", id: 1 },
  { name: "JSON", id: 2 },
];

export default function PreviewModal({
  handleEdit,
  handleBack,
  TableHeader,
  tableData,
}: {
  TableHeader: string[];
  handleEdit: any;
  handleBack: any;
  tableData: any;
}) {
  const [preview, setPreview] = useState(Types[0]);
  const pretty = JSON.stringify(tableData, null, 4);

  return (
    <>
      <div className="relative rounded-md border border-base-content p-4 pb-10 sm:p-6 lg:p-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-base-content">
              Data Preview
            </h1>
            <p className="mt-1 text-xs text-base-content">
              Preview your data as table or switch to JSON view
            </p>
          </div>
          <div className="mt-4 flex items-center gap-3 sm:mt-0 sm:ml-16 sm:flex-none">
            <button className="btn btn-secondary" onClick={handleBack}>
              <ArrowLeftIcon /> Back
            </button>
            <button className="btn btn-primary-accent" onClick={handleEdit}>
              {" "}
              Edit{" "}
            </button>
            <span className="text-xs text-base-content"> OR </span>
            <button className="btn btn-primary">
              {" "}
              <PaperAirplaneIconOutline /> Export/Send Data
            </button>
          </div>
        </div>
        {preview.id === 1 ? (
          <div className="-mx-4 mt-7 h-80 overflow-auto shadow ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="min-w-full divide-y divide-base-200">
              <thead className="bg-secondary">
                <tr>
                  {TableHeader?.map((header, i) => {
                    return (
                      <th
                        scope="col"
                        key={i}
                        className="py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-secondary-content sm:pl-6"
                      >
                        {header}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-base-200 bg-base-100">
                {tableData.map((data: any, index: number) => (
                  <tr key={index}>
                    {TableHeader?.map((x, i) => {
                      return (
                        <td
                          key={i}
                          className="whitespace-nowrap py-4 pl-4 pr-3 text-xs text-base-content sm:pl-6"
                        >
                          {typeof data[x] === "boolean"
                            ? data[x].toString()
                            : data[x]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div
            id="preview_data"
            className="mt-7 flex h-80 flex-col flex-wrap overflow-auto 
                            whitespace-pre-wrap rounded-md bg-primary p-6 text-sm
                            text-primary-content"
          >
            {pretty}
          </div>
        )}
      </div>
      <RadioGroup value={preview} onChange={setPreview}>
        <div className="relative mt-[-20px] flex flex-row justify-center rounded-md">
          {Types.map((plan, planIdx) => (
            <RadioGroup.Option
              key={plan.name}
              value={plan}
              className={({ checked }) =>
                classNames(
                  planIdx === 0 ? "rounded-l-md border-r-0" : "rounded-r-md",
                  checked ? "z-10 bg-secondary" : "border-base-content",
                  "relative flex cursor-pointer flex-col border bg-base-100 p-2 px-5 focus:outline-none"
                )
              }
            >
              {({ checked }) => (
                <>
                  <span className="flex items-center text-sm">
                    <RadioGroup.Label
                      as="span"
                      className={classNames(
                        checked
                          ? "text-secondary-content"
                          : "text-base-content",
                        "font-medium"
                      )}
                    >
                      {plan.name}
                    </RadioGroup.Label>
                  </span>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </>
  );
}
