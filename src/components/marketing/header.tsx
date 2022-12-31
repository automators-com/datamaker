import Link from "next/link";

export default function Header({
  scrollToWhat,
  scrollToWhy,
  scrollToHow,
  scrollToTop,
}: {
  scrollToWhat: () => void;
  scrollToWhy: () => void;
  scrollToHow: () => void;
  scrollToTop: () => void;
}) {
  return (
    <header className="fixed z-50 flex h-10 w-full items-center justify-between py-8 pr-4 text-xs font-bold">
      <div
        onClick={() => scrollToTop()}
        className="bg-header rounded-r-full border border-l-0 border-[#459CA7] py-3 px-16"
      >
        dataMaker();
      </div>
      <div className="flex items-center">
        <ul className="flex !hidden">
          <li className="mx-4 cursor-pointer" onClick={() => scrollToWhat()}>
            What?
          </li>
          <li className="mx-4 cursor-pointer" onClick={() => scrollToWhy()}>
            Why?
          </li>
          <li className="mx-4 cursor-pointer" onClick={() => scrollToHow()}>
            How?
          </li>
        </ul>
        <Link href={`/signin`}>
          <button className="ml-4 rounded-full bg-[#EBFF00] py-2 px-6 text-[#1D1E39]">
            Sign In
          </button>
        </Link>
      </div>
    </header>
  );
}
