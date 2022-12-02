/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Filter from "../filter";

export default function List({
  list,
  text,
  onClickAdd,
  onClickItem,
  setSelected,
}: {
  list: Array<any>;
  text: string;
  onClickAdd: () => any;
  onClickItem: () => any;
  setSelected: (selected: any) => any;
}) {
  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {
    // sort list by createdAt date
    const sortedList = list.sort((a: any, b: any) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });

    setFilteredList(sortedList);
  }, [list]);

  return (
    <div className="w-auto overflow-hidden">
      <p className="mb-3 text-xs">
        <span className="text-accent"> {filteredList.length} </span>
        <span className="text-base-content">{`${text}s found`}</span>
      </p>
      <Filter
        placeholder="Filter Templates .."
        updateList={setFilteredList}
        originList={list}
      />

      <ul role="list">
        {filteredList.map((item, index) => (
          <li
            key={item.name}
            className={`${
              index % 2 === 1 && "bg-base-200 bg-opacity-30"
            } block w-full rounded-md text-base-content hover:bg-secondary hover:text-secondary-content`}
            onClick={() => {
              setSelected(item);
              onClickItem();
            }}
          >
            <div className="flex items-center p-3 sm:px-3">
              <p className="truncate text-xs">{item.name}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 w-full border-t border-base-200 border-opacity-40" />

      <button
        className="btn btn-link mt-2 flex !pl-0 font-normal"
        onClick={() => onClickAdd()}
      >
        <PlusCircleIcon className="!h-5 !w-5 text-accent" /> {`Add new ${text}`}
      </button>
    </div>
  );
}
