import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center bg-gradient-to-t
     from-[#459CA7] to-[#482B7C] py-20 px-10 text-lg lg:py-28 lg:text-2xl xl:py-28 xl:text-2xl"
    >
      <p className="max-w-[24em] text-center">
        <span className="text-[#EBFF00]">Sign Up Today</span> To Create, Manage,
        and Monitor Your Test Data Sets Seamlessly for a Truly Streamlined
        Development Process!
      </p>
      <Link href={`/signup`}>
        <button className="my-14 rounded-full bg-[#EBFF00] px-10 py-3 text-base font-medium text-black hover:bg-[#08FFB3] lg:my-20 xl:my-20">
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
