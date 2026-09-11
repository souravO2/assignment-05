import { FaStar } from "react-icons/fa";
import type { TechTypes } from "../TechTypes";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "sonner";

interface CardProps {
  tech: TechTypes;
  adder: TechTypes[];
  setAdder: Dispatch<SetStateAction<TechTypes[]>>;
}

const Card = ({ tech, adder, setAdder }: CardProps) => {
  const [selected, setSelected] = useState(false);
  const adderHandler = (tech: TechTypes) => {
    toast.success(`${tech.name} added to stack.`)
    setSelected(true);
    setAdder([...adder, tech]);
  };

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gray-50">
          <img
            src={tech.icon}
            alt={tech.description}
            className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-green-50 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-green-600">
          {tech.badge}
        </span>
      </div>
      <div className="mt-4 sm:mt-5 flex flex-1 flex-col">
        <h2 className="text-base sm:text-lg font-bold text-gray-900">
          {tech.name}
        </h2>

        <p className="mt-2 line-clamp-3 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500">
          {tech.description}
        </p>

        <div className="md:flex-col xl:flex-row font-semibold mt-4 sm:mt-5 flex items-center justify-between gap-1 sm:gap-2 text-xs sm:text-sm">
          <span className="rounded-lg bg-gray-100 px-2 sm:px-3 py-1 sm:py-1.5 font-medium text-gray-600">
            {tech.category}
          </span>

          <span className="text-gray-500">{tech.difficulty}</span>

          <span className="flex items-center gap-1 font-medium text-gray-700">
            <FaStar className="text-[#ffe234]" />
            {tech.rating}
          </span>
        </div>

        <button
          onClick={() => adderHandler(tech)}
          className={`${selected ? `bg-white text-green-500 border border-green-200` : "bg-black text-white"} btn mt-5 sm:mt-6 w-full rounded-xl py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-200 hover:bg-[#d91b7e]`}
          disabled={selected}
        >
          {selected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default Card;
