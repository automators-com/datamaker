import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { classNames } from "../../utilities/className";
import type { Item } from "../../app/(core)/templates/types";
import type { IProps } from "../dropdown/dropdownProps";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ComboBox({ value, label, setValue, list }: IProps) {
  const [query, setQuery] = useState("");

  const filteredTypes =
    query === ""
      ? list
      : list.filter((type: Item) => {
          return type.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={value} onChange={setValue}>
      <Combobox.Label className="mb-2 block text-[11px] font-medium text-base-content opacity-50">
        {label}
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="relative flex h-8 w-full cursor-default content-center items-center
                     justify-between truncate rounded-md border bg-base-100 py-1 pl-3 pr-7 text-left text-sm font-medium text-accent 
                     shadow-sm hover:border-accent focus:border-accent focus:outline-none "
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(type: Item) => type?.name}
        />

        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronDownIcon className="h-4 w-4 text-accent" />
        </Combobox.Button>

        {filteredTypes.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-base-100 text-sm text-base-content shadow-lg ring-1 ring-accent ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredTypes.map((type) => (
              <Combobox.Option
                key={type.id}
                className={({ active }) =>
                  classNames(
                    active && "bg-accent text-accent-content",
                    "relative cursor-default select-none py-2 px-4"
                  )
                }
                value={type}
              >
                {({ selected }) => (
                  <span
                    className={classNames(
                      selected ? "font-semibold" : "font-medium",
                      "block truncate text-sm"
                    )}
                  >
                    {type.name}
                  </span>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
