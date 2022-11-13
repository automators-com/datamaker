import React, { useEffect, useState } from "react";

const Filter = ({
  placeholder,
  updateList,
  originList,
}: {
  placeholder: string;
  updateList: (list: any[]) => void;
  originList: any[];
}) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let _list: any[] = originList;
    _list = _list.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log(_list);
    updateList(_list);
  }, [searchText]);

  return (
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <input
        type="text"
        className="form-control relative m-0 min-w-0 flex-auto
             rounded-md border border-accent bg-base-100 px-3 py-1.5 
             text-xs text-accent transition ease-in-out placeholder:text-accent focus:border-accent
              focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />

      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pl-3">
        <svg
          aria-hidden="true"
          className="h-4 w-4 text-accent"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Filter;
