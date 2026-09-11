import { use, useState } from "react";
import type { TechTypes } from "../TechTypes";
import Card from "./Card";
import Cart from "./Cart";

interface TechsProps {
  techPromise: Promise<TechTypes[]>;
}

const Techs = ({ techPromise }: TechsProps) => {
  const techs = use(techPromise);

  const [adder, setAdder] = useState<TechTypes[]>([]);

  return (
    <div className="lg:container px-10 mx-auto my-10 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
      <div className="col-span-1 grid grid-cols-1 gap-10 md:gap-2 lg:gap-10 md:col-span-2 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
        {techs.map((tech) => (
          <Card key={tech.id} tech={tech} adder={adder} setAdder={setAdder} />
        ))}
      </div>

      <div className="col-span-1">
        <div className="group flex sticky top-36 mb-10 z-40 flex-col gap-y-4 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
          <h1 className="font-bold text-xl sm:text-2xl">Your Stack</h1>

          <p className="text-sm sm:text-base">
            {adder.length !== 0
              ? `${adder.length} Technologies Selected.`
              : "No Technologies Selected Yet."}
          </p>

          <div
            className={`${adder.length === 0 ? "border border-dashed border-gray-400" : ""} rounded-xl text-center  py-3 sm:py-4 text-sm sm:text-base`}
          >
            {adder.length !== 0 ? (
              <Cart adder={adder} setAdder={setAdder} />
            ) : (
              <p className="text-gray-500">Your stack is empty.</p>
            )}
          </div>

          <button
            onClick={() => setAdder([])}
            className={`${adder.length === 0 ? "hidden" : ""} btn rounded-xl border border-red-500 text-red-600 font-bold w-full text-sm sm:text-base`}
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Techs;
