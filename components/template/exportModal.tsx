import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import DropDown from "../dropdown";
import { Input } from "../input";

const Target = [{ id: 1, name: "Send To API" }];

const API = [{ id: 1, name: "ErsteBank-USERAPI_intern_EU" }];

export default function ExportModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [exportData, setExportData] = useState({
    dataPoint: 0,
    api: API[0],
    target: Target[0],
  });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-md bg-base-100 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="mt-2 sm:mt-3">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-primary"
                  >
                    <p>
                      {" "}
                      Send/Export{" "}
                      <span className="text-accent">
                        {" "}
                        Customer: <br /> E-Commerce General{" "}
                      </span>
                    </p>
                  </Dialog.Title>

                  <p className="my-6 text-sm">
                    Select how to export or send your data.
                  </p>

                  <DropDown
                    list={Target}
                    name="target"
                    setValue={null}
                    value={exportData.target}
                    label="Select Target"
                    addClass="mb-7"
                  />

                  <DropDown
                    list={API}
                    name="api"
                    setValue={null}
                    value={exportData.api}
                    label="Select API"
                    addClass="mb-7"
                  />

                  <Input
                    name="dataPoint"
                    type="number"
                    value={exportData.dataPoint}
                    setValue={(e) =>
                      setExportData((prev) => {
                        return { ...prev, dataPoint: Number(e.target.value) };
                      })
                    }
                    label="Number of Datapoints"
                    addClass="w-24 !pr-1"
                  />
                </div>

                <p className="my-5 text-end text-xs">
                  {" "}
                  {exportData.dataPoint} Datapoints will be sent to API{" "}
                </p>

                <div className="flex justify-end gap-3 sm:flex sm:flex-row">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setOpen(false)}
                  >
                    Abort
                  </button>
                  <button className="btn btn-primary"> Preview & Edit</button>
                  <button className="btn btn-primary-accent"> Execute </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
