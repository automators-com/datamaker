import React, { useState } from "react";
import { PaperAirplaneIcon as PaperAirplaneIconOutline } from "@heroicons/react/24/outline";
import { RadioGroup } from "@headlessui/react";
import { classNames } from "../../utilities/className";
const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@exampcom",
  },
];

const Types = [
  { name: "Table", id: 1 },
  { name: "JSON", id: 2 },
];

export default function PreviewModal({ handleEdit }: { handleEdit: any }) {
  const [preview, setPreview] = useState(Types[0]);
  const pretty = JSON.stringify(
    [
      {
        id: "clb3bpeqd00023lr41ag0gaoc",
        name: "Template III New",
        fields: [
          {
            id: "d1acb9bf-32cf-4803-b858-e1f15cf186cd",
            dataType: 1,
            fieldName: "Field 1",
            constraints: [
              {
                name: {
                  id: 1,
                  name: "Min",
                },
                value: 1,
              },
              {
                name: {
                  id: 2,
                  name: "Max",
                },
                value: 30,
              },
            ],
          },
          {
            id: "fa471061-ce67-40d4-af56-c3770c89df62",
            dataType: 1,
            fieldName: "Field 2",
            constraints: [
              {
                name: "Min",
                value: 1,
              },
            ],
          },
          {
            id: "9b4bdc1b-aa69-40b7-9d60-15672d9daa9e",
            dataType: 1,
            fieldName: "Field 3",
            constraints: [
              {
                name: {
                  id: 1,
                  name: "Min",
                },
                value: 1,
              },
            ],
          },
        ],
        createdAt: "2022-11-30T07:25:11.510Z",
      },
      {
        id: "clb5pajdi00023lykur222k38",
        name: "Tes",
        fields: [
          {
            id: "2960e804-0bad-4cbc-80aa-bb0f1930b99e",
            dataType: 1,
            fieldName: "dd",
            constraints: [
              {
                name: {
                  id: 1,
                  name: "Min",
                },
                value: 1,
              },
            ],
          },
        ],
        createdAt: "2022-12-01T23:21:04.663Z",
      },
      {
        id: "clbf0a0rl0000fwln7dmzgi87",
        name: "kl",
        fields: [
          {
            dataType: {
              id: 1,
              name: "String",
            },
            fieldName: "kl",
            constraints: [
              {
                name: {
                  id: 1,
                  name: "Min",
                },
                value: 0,
              },
              {
                name: {
                  id: 2,
                  name: "Max",
                },
                value: 50,
              },
            ],
          },
        ],
        createdAt: "2022-12-08T11:38:31.906Z",
      },
    ],
    null,
    4
  );

  return (
    <>
      <div className="relative rounded-md border border-base-300  border-opacity-40 p-4 pb-10 sm:p-6 lg:p-8">
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
          <div className="-mx-4 mt-8 overflow-hidden shadow ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="min-w-full divide-y divide-base-200">
              <thead className="bg-secondary text-base-100">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold lg:table-cell"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-base-200 bg-base-100">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {person.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div
            id="preview_data"
            className="mt-5 flex h-80 flex-col flex-wrap overflow-auto whitespace-pre-wrap 
                            rounded-md bg-primary p-6 text-sm
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
                  checked ? "z-10 bg-secondary" : "border-base-200",
                  "relative flex cursor-pointer flex-col border bg-base-100 p-2 focus:outline-none md:pl-4 md:pr-6"
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
