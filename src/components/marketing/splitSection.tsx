import Image from "next/image";

export default function SplitSection() {
  const scale = 0.75;
  return (
    <section className="relative z-10 flex h-96 flex-col items-center justify-center md:flex-row">
      <div className="flex h-full w-full flex-col bg-[#482B7C] sm:flex-row">
        <div className="flex w-full flex-col items-start justify-center px-10 pt-10 sm:w-2/3 sm:px-20 sm:pt-20">
          <strong className="text-xl">Multiple Templates</strong>
          <p className="py-10 text-sm sm:pb-20">
            <span className="float-left flex h-4 items-center pr-2">
              <Image
                src="/assets/yellow-dots.svg"
                alt="yellow dots"
                width={38 * scale}
                height={10 * scale}
              />
            </span>
            Multiple reusable templates and data export options allows you to
            loop in different teams and stakeholders as needed, so you can avoid
            costly delays and errors.
          </p>
        </div>
        <div className="flex w-full items-center justify-center sm:w-1/3">
          <Image
            src="/assets/clipboard-icon.svg"
            width={116.789 * scale}
            height={137.114 * scale}
            alt="clipboard icon"
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-col bg-[#1D1E39] sm:flex-row">
        <div className="flex w-full flex-col items-start justify-center px-10 pt-10 sm:w-2/3 sm:px-20 sm:pt-20">
          <strong className="text-xl">The future is AI</strong>
          <p className="py-10 text-sm sm:pb-20">
            <span className="float-left flex h-4 items-center pr-2">
              <Image
                src="/assets/yellow-dots.svg"
                alt="yellow dots"
                width={38 * scale}
                height={10 * scale}
                className="w-5"
              />
            </span>
            In the coming days, we want to have AI create data for you based on
            simple text input, so you can be even more productive and save time,
            money, and headaches.
          </p>
        </div>
        <div className="flex w-full items-center  justify-center sm:w-1/3">
          <Image
            src="/assets/terminal-icon.svg"
            width={130.241 * scale}
            height={119.805 * scale}
            alt="terminal icon"
          />
        </div>
      </div>
    </section>
  );
}