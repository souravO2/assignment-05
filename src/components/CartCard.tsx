import type { Dispatch, SetStateAction } from "react";
import type { TechTypes } from "../TechTypes";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";

interface CartCardProps {
  adder: TechTypes[];
  setAdder: Dispatch<SetStateAction<TechTypes[]>>;
  card: TechTypes;
}

const CartCard = ({ card, adder, setAdder }: CartCardProps) => {
  const cardHandler = (item: TechTypes) => {
    toast.warning(`${card.name} has been removed from stack.`)
    const newCard = adder.filter((c) => c !== item);
    setAdder(newCard);
  };

  return (
    <div className="border border-gray-200 items-center p-2 rounded-xl my-1 flex justify-between">
      <div className="flex gap-3 items-center">
        <img src={card.icon} className="w-8 h-8"></img>
        <div className="text-left items-center">
          <h1 className="font-bold">{card.name}</h1>
          <p className="text-[.8rem] text-gray-500">{card.category}</p>
        </div>
      </div>
      <button
        onClick={() => cardHandler(card)}
        className="btn bg-transparent border-none items-center "
      >
        <RxCross2 className="w-8 h-8 text-gray-500 hover:text-red-600" />
      </button>
    </div>
  );
};

export default CartCard;
