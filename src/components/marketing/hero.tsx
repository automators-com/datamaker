export default function Hero() {
  return (
    <section className="relative -z-10 flex h-[90vh] flex-col items-center justify-start overflow-visible bg-gradient-to-r from-[#459CA7] to-[#482B7C]">
      <div className="mx-5 mt-[10em] flex flex-col items-center text-center">
        <p className="mb-4 text-4xl md:mb-0">
          <strong>Fake it. While you make it.</strong>
        </p>
        <p className="pt-2 text-xl">
          With our intuitive point-and-click interface, creating high-quality
          synthetic data has never been easier.
        </p>
      </div>
    </section>
  );
}
