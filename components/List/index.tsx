import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Filter from "../filter";

export default function List({
  list,
  textButton,
}: {
  list: any[];
  textButton: string;
}) {
  const [filteredList, setFilteredList] = useState(list);

  return (
    <div className="w-80 overflow-hidden">
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
              className={`${index % 2 === 1 && "bg-neutral"} block rounded-md 
            text-base-content hover:bg-secondary hover:text-secondary-content`}
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
        <PlusCircleIcon className="!h-5 !w-5 text-accent" /> {textButton}
      </button>
    </div>
  );
}
