import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { classNames } from "../../utilities/className";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { dropDownList } from "../../utilities/types";

interface IProps {
  label?: string;
  name: string;
  value: dropDownList;
  list: dropDownList[];
  addClass?: string;
  setValue: any; // function
}

const DropDown = ({ value, label, list, setValue, addClass }: IProps) => {
  return (
    <Listbox value={value} onChange={setValue}>
      {({ open }) => (
        <div className={classNames("relative", addClass)}>
          {label && (
            <Listbox.Label className="mb-1 block text-sm font-medium text-base-content opacity-50">
              {label}
            </Listbox.Label>
          )}

          <>
            <Listbox.Button
              className="relative flex w-full cursor-default content-center items-center
                         justify-between rounded-md border bg-base-100 py-1 pl-3 pr-2 text-left font-medium text-accent shadow-sm 
                            hover:border-accent focus:border-accent focus:outline-none "
            >
              <span className="block truncate">{value.name}</span>

              <ChevronDownIcon className="h-5 w-5" />
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-base-100 text-base-content shadow-lg ring-1 ring-accent ring-opacity-5 focus:outline-none sm:text-sm">
                {list.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active && "bg-accent text-accent-content",
                        "relative cursor-default select-none py-2 px-4"
                      )
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-medium",
                          "block truncate"
                        )}
                      >
                        {person.name}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        </div>
      )}
    </Listbox>
  );
};

export default DropDown;
