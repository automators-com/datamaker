export default function Hero() {
  return (
    <section className="relative -z-10 flex h-[90vh] flex-col items-center justify-start overflow-visible bg-gradient-to-r from-[#459CA7] to-[#482B7C]">
      <div className="mt-[10em] flex flex-col items-center text-center">
        <strong className="text-2xl">
          Generate massive synthetic Test Data
        </strong>
        <p className="text-2xl">for any Use Case, Environment or Scale.</p>
        <p className="mt-28 text-center text-[#08FFB3]">
          Make some data right now
        </p>
        <div
          id="down_arrow"
          className="m-4 h-0 w-0 border-t-[5px] border-l-[5px] border-r-[5px] border-solid border-[#08FFB3] border-l-transparent border-r-transparent"
        ></div>
      </div>
    </section>
  );
}
