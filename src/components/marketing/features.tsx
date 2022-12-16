import Image from "next/image";
import type { UseFormReturn } from "react-hook-form";
import PreviewModal from "../../app/(core)/templates/previewModal";
import type { TemplateForm } from "../../app/(core)/templates/types";
import { Target } from "../../utilities/constants";
import { getTableData } from "../../utilities/tableData";

export default function Features({
  methods,
  rows,
}: {
  methods: UseFormReturn<TemplateForm, any>;
  rows: number;
}) {
  const scale = 0.7;
  const DataTable = methods.watch().fieldList;

  return (
    <section className="relative z-10 flex h-auto flex-col items-center justify-start overflow-x-hidden bg-gradient-to-t from-[#459CA7] to-[#482B7C] py-40">
      <p className="w-96 text-center text-2xl font-bold">
        Robust Features For Your Data Ecosystem
      </p>
      <div className="mt-20 flex h-auto w-full py-40">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-96 flex-col">
            <strong className="w-64 text-xl text-[#08FFB3]">
              Automated Data Pipeline:
            </strong>
            <p className="w-64 text-xl font-light text-[#08FFB3]">
              Modular, Flexible & Highly Configurable To Your Needs
            </p>
            <div>
              <p className="border-b border-gray-400 pb-20 pt-10 text-sm">
                <span className="float-left flex h-4 items-center pr-2">
                  <Image
                    src="/assets/green-dots.svg"
                    alt="green dots"
                    width={38 * scale}
                    height={10 * scale}
                  />
                </span>
                Create randomly generated data sets in a few clicks by selecting
                the data types & patterns. You can also specify conditions and
                rules to create unique values or use the built-in functions to
                create derived values.
              </p>
              <p className="pt-4 text-xs">
                »We needed this tool for ourself and thought, why not make it
                beautiful and available for others to use?«
              </p>
              <div className="flex items-center pt-4 text-xs">
                <Image
                  className="pr-2"
                  src="/assets/amin-chirazi.png"
                  alt="Amin Chirazi"
                  width={66 * scale}
                  height={66 * scale}
                />
                <p className="font-semibold">Amin Chirazi, CEO at Automators</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center">
          <Image
            className="relative -right-48 scale-150"
            src="/assets/templates-screen.png"
            alt="templates screenshot"
            width={2836}
            height={1774}
          />
        </div>
      </div>
      <div className="mt-20 flex h-auto w-full py-40">
        <div
          id="data-preview"
          className="relative flex h-[600px] w-full max-w-[750px] flex-col items-center justify-center rounded-r-lg bg-[#F3F4F6] shadow-xl"
        >
          <PreviewModal
            name=""
            TableHeader={DataTable.map((x) => x.fieldName)}
            tableData={getTableData(rows, DataTable)}
            target={Target[0].id}
            landing={true}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-96 flex-col">
            <strong className="w-64 text-xl text-[#EBFF00]">
              Heightened Data Synthesis:
            </strong>
            <p className="w-64 text-xl font-light text-[#EBFF00]">
              Generate Production-Like Data On The Fly
            </p>
            <div>
              <p className="border-b border-gray-400 pb-20 pt-10 text-sm">
                <span className="float-left flex h-4 items-center pr-2">
                  <Image
                    src="/assets/yellow-dots.svg"
                    alt="yellow dots"
                    width={38 * scale}
                    height={10 * scale}
                  />
                </span>
                Datamaker is natively web-based so that you can generate data
                anywhere, anytime: Define your data constraints, review it on
                the go and generate multiple rich and sophisticated data sets
                with a click of a button. Export your data directly to:{" "}
                <span className="cursor-default rounded-full border border-[#1D1E39] bg-[#08FFB3] px-2 text-[#1D1E39]">
                  JSON
                </span>
                <span className="cursor-default rounded-full border border-[#1D1E39] bg-[#08FFB3] px-2 text-[#1D1E39]">
                  XLSX
                </span>
                <span className="cursor-default rounded-full border border-[#1D1E39] bg-[#08FFB3] px-2 text-[#1D1E39]">
                  CSV
                </span>
                <span className="cursor-default rounded-full border border-[#1D1E39] bg-[#08FFB3] px-2 text-[#1D1E39]">
                  SQL
                </span>
              </p>
              <p className="pt-4 text-xs">
                »We needed this tool for ourself and thought, why not make it
                beautiful and available for others to use?«
              </p>
              <div className="flex items-center pt-4 text-xs">
                <Image
                  className="pr-2"
                  src="/assets/valentin-ober.png"
                  alt="Valentin Ober"
                  width={66 * scale}
                  height={66 * scale}
                />
                <p className="font-semibold">
                  Valentin Ober, CEO at Automators
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
