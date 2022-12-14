import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import type { TemplateForm } from "./types";
import { getTableData } from "../../../utilities/tableData";
import PreviewModal from "./previewModal";
import DropDown from "../../../components/dropdown";
import { Input } from "../../../components/input";
import { exportCSV, exportJson } from "../../../utilities/exportData";

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
  data: TemplateForm;
}) {
  const [exportData, setExportData] = useState({
    dataPoint: 4,
    target: Target[0],
  });

  const [openPreview, setOpenPreview] = useState(false);

  const TableHeader = data?.fieldList; //?.map((x) => x.fieldName);
  const tableData: any[] = getTableData(exportData.dataPoint, TableHeader);

  const handleClose = () => {
    setOpen(false);
    setOpenPreview(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
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
                className={`relative transform overflow-hidden rounded-md bg-base-100 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full ${openPreview ? "sm:max-w-2xl" : "sm:max-w-sm"
                  } sm:p-6`}
              >
                {openPreview ? (
                  <PreviewModal
                    // handleEdit={() => {
                    //   setOpenPreview(false);
                    //   setOpen(false);
                    // }}
                    target={exportData.target.id}
                    name={data.templateName}
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
                            {/* : <br /> */}
                            {data?.templateName}:
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
                        Preview & Edit
                      </button>
                      <button
                        className="btn btn-primary-accent"
                        onClick={() => {
                          exportData.target.id === 1
                            ? exportCSV(tableData)
                            : exportJson(tableData, data.templateName);
                          handleClose();
                        }}
                      >
                        Execute
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
