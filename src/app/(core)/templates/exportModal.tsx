"use client";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import type { TemplateForm } from "./types";
import { getTableData } from "../../../utilities/tableData";
import PreviewModal from "./previewModal";
import DropDown from "../../../components/dropdown";
import { exportJson } from "../../../utilities/exportData";
import { CSVLink } from "react-csv";
import { Target } from "../../../utilities/constants";

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
  const dataPointRef = useRef<HTMLInputElement>(null);

  const TableHeader = data?.fieldList; //?.map((x) => x.fieldName);
  const tableData: any[] = getTableData(exportData.dataPoint, TableHeader);

  const handleClose = () => {
    setOpen(false);
    setOpenPreview(false);
  };

  useEffect(() => {
    setTimeout(() => dataPointRef.current?.focus(), 200);
  }, [exportData, openPreview]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="modal relative z-10"
        onClose={handleClose}
        initialFocus={dataPointRef}
      >
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
                    // handleEdit={() => {
                    //   setOpenPreview(false);
                    //   setOpen(false);
                    // }}
                    handleClose={handleClose}
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

                      <label className="mb-2 block text-[11px] font-medium text-base-content opacity-50">
                        Number of Datapoints
                      </label>
                      <input
                        name="dataPoint"
                        type="number"
                        ref={dataPointRef}
                        className="block w-24 rounded-md border border-accent bg-base-100 py-1 pr-1 pl-3
                         text-left text-sm font-medium text-base-content placeholder-base-content placeholder-opacity-30 shadow-sm focus:outline-none"
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          if (val > 10000) return;
                          setExportData((prev) => {
                            return {
                              ...prev,
                              dataPoint: val,
                            };
                          });
                        }}
                        value={exportData.dataPoint}
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

                      {exportData.target.id === 1 ? (
                        <CSVLink
                          data={tableData}
                          filename={data.templateName}
                          className="btn btn-primary-accent"
                          target="_blank"
                          onClick={handleClose}
                        >
                          Execute
                        </CSVLink>
                      ) : (
                        <button
                          className="btn btn-primary-accent"
                          onClick={() => {
                            exportJson(tableData, data.templateName);
                            handleClose();
                          }}
                        >
                          Execute
                        </button>
                      )}
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
