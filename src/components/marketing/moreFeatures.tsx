import Image from "next/image";
import Link from "next/link";

function MoreFeatures() {
  const scale = 0.7;
  return (
    <section className="relative z-10 flex flex-col items-center justify-center bg-gradient-to-b from-[#1D1E39] to-[#482B7C] py-40">
      <Link href="/signup" className="absolute -top-4">
        <button className="rounded-full bg-[#EBFF00] py-4 px-10 text-[#1D1E39]">
          Get full access
        </button>
        <p className="pt-4 text-center text-xs text-[#EBFF00]">
          Starting from €9.90/month
        </p>
      </Link>
      <div className="mt-20 flex h-auto w-full py-40">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-96 flex-col">
            <strong className="w-64 text-xl text-[#08FFB3]">
              AI-Augmentation That’s Built-In, Not Built On
            </strong>
            <div>
              <p className="pt-10 text-sm">
                <span className="float-left flex h-4 items-center pr-2">
                  <Image
                    src="/assets/green-dots.svg"
                    alt="green dots"
                    width={38 * scale}
                    height={10 * scale}
                  />
                </span>
                Datamaker’s unique data generation approach is supported by AI,
                so you can be confident that your data sets are of the highest
                quality and realism. This AI augmentation enhances usability on
                key existing features and simplifies the application’s usage
                while improving capabilities. As a result, you’ll be able to
                focus on optimizing test coverage and running the right tests
                every time.
              </p>
              <p className="pt-4 text-sm">
                In the coming weeks, we will have AI create constraints for you
                based on simple text input, so you can be even more productive
                and save time, money, and headaches.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-x-hidden overflow-y-visible">
          <Image
            className="relative -right-48 scale-150"
            src="/assets/templates-screen.webp"
            alt="templates screenshot"
            width={2836}
            height={1774}
          />
        </div>
      </div>
      <div className="mt-20 flex h-auto w-full py-40">
        <div className="relative flex h-[600px] w-full max-w-[750px] flex-col items-center justify-center rounded-r-lg bg-white shadow-xl">
          <Image
            className="absolute -top-32 -left-10"
            src="/assets/white-robot.svg"
            alt="white robot"
            width={191.226 * scale}
            height={213.085 * scale}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-96 flex-col">
            <p className="w-80 text-xl text-[#459CA7]">
              <strong>Run End To End Data Creation & Management</strong> and Say
              Goodbye To Test Data Headaches Forever without coding!
            </p>
            <div>
              <p className="pt-10 text-sm">
                <span className="float-left flex h-4 items-center pr-2">
                  <Image
                    src="/assets/blue-dots.svg"
                    alt="blue dots"
                    width={38 * scale}
                    height={10 * scale}
                  />
                </span>
                This no-code tool makes it easy to quickly generate large
                volumes of high-quality test data on-demand and at the click of
                a button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreFeatures;
