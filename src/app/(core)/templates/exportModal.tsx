import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import DropDown from "../../../components/dropdown";
import { Input } from "../../../components/input";
import PreviewModal from "./previewModal";
import type { Template, TemplateField } from "./types";
import { faker } from "@faker-js/faker";

const Target = [
  { id: 1, name: "CSV/Excel" },
  { id: 2, name: "JSON" },
];

export default function ExportModal({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: Template;
}) {
  const [exportData, setExportData] = useState({
    dataPoint: 4,
    target: Target[0],
  });

  const [openPreview, setOpenPreview] = useState(false);

  const TableHeader = data?.fields; //?.map((x) => x.fieldName);

  const tableData = Array.from({ length: exportData.dataPoint }).map(() => {
    const o: any = {};
    TableHeader?.forEach((str: TemplateField) => {
      const min = str.constraints.filter((cons) => cons.name?.id === 1)[0]
        ? str.constraints.filter((cons) => cons.name?.id === 1)[0].value
        : 1;
      const max = str.constraints.filter((cons) => cons.name?.id === 2)[0]
        ? str.constraints.filter((cons) => cons.name?.id === 2)[0].value
        : 20;

      const type = str.dataType.id ? str.dataType.id : str.dataType;
      // console.log(min, max, type);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      o[str.fieldName] =
        type === 2
          ? faker.datatype.number({ min: min, max: max })
          : type === 4
          ? faker.datatype.array(min)
          : type === 5
          ? faker.datatype.boolean()
          : faker.datatype.string(max);
    });

    return o;
  });

  // console.log(data, tableData);

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
          <div className="fixed inset-0 bg-base-300 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className={`m-auto flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative transform overflow-hidden rounded-md bg-base-100 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full ${
                  openPreview ? "sm:max-w-2xl" : "sm:max-w-sm"
                } sm:p-6`}
              >
                {openPreview ? (
                  <PreviewModal
                    handleEdit={() => {
                      setOpenPreview(false);
                      setOpen(false);
                    }}
                    handleBack={() => setOpenPreview(false)}
                    TableHeader={TableHeader?.map((x) => x.fieldName)}
                    tableData={tableData}
                  />
                ) : (
                  <>
                    <div className="mt-2 sm:mt-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-base-content"
                      >
                        <p>
                          Send/Export{" "}
                          <span className="text-accent">
                            Customer: <br />
                            E-Commerce General
                          </span>
                        </p>
                      </Dialog.Title>

                      <p className="my-6 text-sm text-base-content">
                        Select how to export or send your data.
                      </p>

                      <DropDown
                        list={Target}
                        name="target"
                        setValue={(e: any) =>
                          setExportData({
                            ...exportData,
                            target: e,
                          })
                        }
                        value={exportData.target}
                        label="Select Target"
                        addClass="mb-7"
                      />

                      <Input
                        name="dataPoint"
                        type="number"
                        value={exportData.dataPoint}
                        setValue={(e) =>
                          setExportData((prev) => {
                            return {
                              ...prev,
                              dataPoint: Number(e.target.value),
                            };
                          })
                        }
                        label="Number of Datapoints"
                        addClass="w-24 !pr-1"
                      />
                    </div>

                    <p className="my-5 text-end text-xs text-base-content">
                      {exportData.dataPoint} Datapoints will be sent to API
                    </p>

                    <div className="flex justify-end gap-3 sm:flex sm:flex-row">
                      <button
                        className="btn btn-secondary"
                        onClick={() => setOpen(false)}
                      >
                        Abort
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setOpenPreview(true);
                        }}
                      >
                        {" "}
                        Preview & Edit
                      </button>
                      <button className="btn btn-primary-accent">
                        {" "}
                        Execute{" "}
                      </button>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
