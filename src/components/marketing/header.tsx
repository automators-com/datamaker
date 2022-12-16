import Link from "next/link";

export default function Header({
  scrollToWhat,
  scrollToWhy,
  scrollToHow,
}: {
  scrollToWhat: () => void;
  scrollToWhy: () => void;
  scrollToHow: () => void;
}) {
  return (
    <header className="fixed z-50 flex h-10 w-full items-center justify-between py-8 pr-4 text-xs font-bold">
      <Link
        href="/"
        className="rounded-r-full border border-l-0 border-[#459CA7] bg-[#1D1E39] py-3 px-16 text-[#EBFF00] transition duration-300 ease-in-out hover:bg-[#08FFB3] hover:text-[#1D1E39]"
      >
        dataMaker();
      </Link>
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
