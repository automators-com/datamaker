export default function Hero() {
  return (
    <section className="hero relative -z-10 flex flex-col items-center justify-start overflow-visible bg-gradient-to-r from-[#459CA7] to-[#482B7C]">
      <div className="flex flex-col items-center text-center md:mx-5 md:mt-10">
        <p className="mb-4 mt-48 text-lg md:mb-0 md:mt-96 md:text-4xl">
          <strong>Fake it. While you make it.</strong>
        </p>
        <p className="pt-2 text-lg md:text-xl">
          With our intuitive point-and-click interface, creating high-quality
          synthetic data has never been easier.
        </p>
      </div>
    </section>
  );
}
