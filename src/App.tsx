import { Suspense, useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Techs from "./components/Techs";
import type { TechTypes } from "./TechTypes";
import Footer from "./Footer";

const techFetch = async (): Promise<TechTypes[]> => {
  const res = await fetch("/data.json");
  const data = res.json();
  return data;
};

function App() {
  const [techPromise] = useState(() => techFetch());

  return (
    <>
      <Navbar />
      <Hero />

      <div className="container mx-auto flex flex-col items-center gap-6 px-5 py-8 md:items-start lg:gap-12 lg:px-0 lg:py-0">
        <h1 className="text-center text-3xl font-semibold md:text-left lg:text-[36px]">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="text-center text-[#64748b] md:text-left">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Techs techPromise={techPromise}></Techs>
      </Suspense>
      <hr className="border-gray-300" />
      <Footer />
    </>
  );
}

export default App;
