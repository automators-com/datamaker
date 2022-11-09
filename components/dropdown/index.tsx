import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type dropDownList = { id: number; name: string };

interface IProps {
  label?: string;
  name: string;
  value: dropDownList;
  list: dropDownList[];
  setValue: any; // function
}

const DropDown = ({ value, label, list, setValue }: IProps) => {
  return (
    <Listbox value={value} onChange={setValue}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-base-content">
            {label}
          </Listbox.Label>
          <div className="relative mt-1 mb-3">
            <Listbox.Button
              className="relative w-full cursor-default rounded-md
                         border bg-base-100 py-1 pl-3 pr-5 text-left text-base-content shadow-sm hover:border-accent focus:border-accent 
                            focus:outline-none sm:text-sm"
            >
              <span className="block truncate">{value.name}</span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-base-100 py-1 text-base-content shadow-lg ring-1 ring-accent ring-opacity-5 focus:outline-none sm:text-sm">
                {list.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active && "bg-accent text-accent-content",
                        "text-base-content",
                        "relative cursor-default select-none py-2 px-4"
                      )
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
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
          </div>
        </>
      )}
    </Listbox>
  );
};

export default DropDown;
