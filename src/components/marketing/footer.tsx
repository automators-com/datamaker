import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 flex w-screen flex-col items-center bg-[#1D1E39] py-24 px-20 md:z-0 md:items-start md:bg-transparent md:px-40">
      <div className="flex w-full flex-col text-center md:flex-row md:text-left">
        <div className="flex-grow">
          <p className="md:max-w-xs">
            <span className="text-[#EBFF00]">datamaker();</span> — GENERATE
            MASSIVE SYNTHETIC TEST DATA FOR ANY USE CASE, ENVIRONMENT, OR SCALE.
          </p>
        </div>
        <ul className="mx-20 hidden text-[#08FFB3]">
          <li>Plans & prices</li>
          <li>All features</li>
          <li>Custom Add-ons</li>
        </ul>
        <ul className="text-[#EBFF00]">
          <Link href="mailto:office@automators.com">
            <li>Support</li>
          </Link>
          <Link
            href="https://www.automators.com/about#comp-kwuvehkx"
            target={"_blank"}
          >
            <li>Legal</li>
          </Link>
          <Link
            href="https://www.automators.com/privacy-policy"
            target={"_blank"}
          >
            <li>Data protection</li>
          </Link>
        </ul>
      </div>
      <hr className="my-14 h-[1px] w-full border-none bg-[#442E78]" />
      <div className="flex w-full text-center text-white opacity-30 md:items-start md:text-left">
        dataMaker. AUTOMATORS GmbH, Leonard Bernstein-Straße 10, Saturn Tower,
        1220 Vienna, Austria
      </div>
      <div className="flex h-10 flex-nowrap items-center pt-20 text-sm">
        <span>Built with </span>
        <Image
          className="mx-2"
          src="/assets/heart.png"
          alt="love"
          width={57 * 0.3}
          height={52 * 0.3}
        />
        <span>by Automators </span>
        <Image
          className="ml-4"
          src="/assets/automators-round.png"
          alt="automators logo"
          width={30}
          height={30}
        />
      </div>
    </footer>
  );
}
