import type { Dispatch, SetStateAction } from "react";
import type { TechTypes } from "../TechTypes";
import CartCard from "./CartCard";

interface CartProps {
  adder: TechTypes[];
  setAdder: Dispatch<SetStateAction<TechTypes[]>>;
}

const Cart = ({ adder, setAdder }: CartProps) => {
  return (
    <div className="max-h-75 overflow-y-auto ">
      {adder.map((card) => (
        <CartCard key={card.id} adder={adder} setAdder={setAdder} card={card} />
      ))}
    </div>
  );
};

export default Cart;
