import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const scale = 0.75;
  return (
    <div className="relative flex w-full flex-col items-center justify-center border-b pb-10">
      <Link href="/">
        <Image
          width={268.56 * scale}
          height={75 * scale}
          src="/assets/datamaker.svg"
          alt="datamaker logo"
        />
      </Link>
    </div>
  );
}
