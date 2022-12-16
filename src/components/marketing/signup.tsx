import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center bg-gradient-to-t from-[#459CA7] to-[#482B7C] py-28 text-2xl">
      <p className="max-w-[24em] text-center">
        <span className="text-[#EBFF00]">Sign Up Today</span> To Create, Manage,
        and Monitor Your Test Data Sets Seamlessly for a Truly Streamlined
        Development Process!
      </p>
      <Link href={`/signup`}>
        <button className="my-20 rounded-full bg-[#EBFF00] px-10 py-2 text-base text-black">
          Start Making Data
        </button>
      </Link>
      <div className="relative h-20 w-full object-contain">
        <Image
          src="/assets/dashed-lines-white.svg"
          alt="dashed lines"
          fill={true}
        />
      </div>
    </section>
  );
}
