import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Filter from "../filter";

export default function List({ list, text }: { list: any[]; text: string }) {
  const [filteredList, setFilteredList] = useState(list);

  return (
    <div className="w-auto overflow-hidden">
      <p className="mb-3 text-xs">
        <span className="text-accent"> {filteredList.length} </span>
        <span className="text-base-content">{`${text}s found`}</span>
      </p>
      <Filter
        placeholder="Filter Templeates .."
        updateList={setFilteredList}
        originList={list}
      />

      <ul role="list">
        {filteredList.map((item, index) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`${
                index % 2 === 1 && "bg-base-200 bg-opacity-30"
              } block rounded-md  text-base-content hover:bg-secondary hover:text-secondary-content`}
            >
              <div className="flex items-center p-3 sm:px-3">
                <p className="truncate text-sm">{item.name}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-8 w-full border-t border-base-200 border-opacity-40" />

      <button className="btn btn-link mt-2 flex !pl-0 font-normal">
        <PlusCircleIcon className="!h-5 !w-5 text-accent" /> {`Add new ${text}`}
      </button>
    </div>
  );
}
