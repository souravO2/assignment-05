import Banner from "./assets/banner-stack.png";

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-between gap-12 px-5 py-12 lg:container lg:mx-auto lg:flex-row lg:gap-25 lg:px-0 lg:py-20">
      <div className="flex flex-col justify-center gap-y-6 lg:gap-y-10 text-center lg:text-left w-full lg:w-1/2">
        <h1 className="font-extrabold text-[40px] sm:text-[48px] lg:text-[60px] leading-tight lg:leading-16">
          Build Your Ideal
          <br />
          <span className="bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="leading-6">
          Explore frontend, backend, database, and tooling options,
          <br className="hidden lg:block" /> compare them side by side, and put
          together the stack that fits your
          <br className="hidden lg:block" /> next project.
        </p>
        <div className="flex flex-row justify-center lg:justify-start gap-4">
          <button className="btn font-semibold bg-linear-to-r from-[#f97316] to-[#ec4899] text-white rounded-xl px-4">
            Explore Technologies
          </button>
          <button className="btn rounded-xl">Learn More</button>
        </div>
      </div>
      <div className="flex w-full justify-center lg:w-1/2">
        <img
          src={Banner}
          alt="Hero Banner Photo"
          className="h-auto w-full max-w-122 object-contain md:max-w-122 lg:max-w-122"
        />
      </div>
    </main>
  );
};

export default Hero;
