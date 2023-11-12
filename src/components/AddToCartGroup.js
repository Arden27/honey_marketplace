// import AddToCartButton from "./AddToCartButton";
// import SetQuantityButton from "@/components/SetQuantityButton";
// import InputQuantity from "@/components/InputQuantity";

export default function AddToCartGroup({
  item,
  quantity,
  setQuantity,
  selectedSize,
  className,
}) {
  return (
    <div className="relative">
      <AddToCartButton
        id={item.id}
        selectedSize={selectedSize}
        quantity={quantity}
        className={className}
      />

      <div className="absolute left-0 top-0 flex h-[calc(theme(spacing.lg)+theme(spacing.xs))] items-center justify-items-center rounded-[2rem] border-2 border-text bg-bg3">
        <SetQuantityButton
          quantity={quantity}
          setQuantity={setQuantity}
          direction={"minus"}
          className={
            "ml-3xs h-md w-md justify-center rounded-[2rem] text-center font-btn leading-none hover:bg-text hover:text-bg3 focus:bg-text focus:text-bg3"
          }
        />

        <InputQuantity
          quantity={quantity}
          setQuantity={setQuantity}
          className={
            "h-lg w-lg rounded-[2rem] bg-transparent text-center font-btn text-sm"
          }
        />

        <SetQuantityButton
          quantity={quantity}
          setQuantity={setQuantity}
          direction={"plus"}
          className={
            "mr-3xs h-md w-md justify-center rounded-[2rem] text-center font-btn leading-none hover:bg-text hover:text-bg3 focus:bg-text focus:text-bg3"
          }
        />
      </div>
    </div>
  );
}

export function SetQuantityButton({
  quantity,
  setQuantity,
  direction,
  className,
}) {
  const handleClick = () => {
    if (direction === "plus" && quantity < 99) {
      setQuantity(Math.round(quantity + 1));
    } else if (direction === "minus" && quantity > 1) {
      setQuantity(Math.round(quantity - 1));
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {direction === "plus" ? "+" : "-"}
    </button>
  );
}

export function InputQuantity({ quantity, setQuantity, className }) {
  const handleChange = (e) => {
    const value = Math.round(Number(e.target.value));
    if (value < 1) {
      setQuantity(1);
    } else if (value > 99) {
      setQuantity(99);
    } else {
      setQuantity(value);
    }
  };

  return (
    <input
      className={className}
      type="number"
      value={quantity.toString()}
      min="1"
      max="99"
      step="1"
      onChange={handleChange}
    />
  );
}

import { addToCart } from "@/redux/store";
import { useDispatch } from "react-redux";

export function AddToCartButton({ id, selectedSize, quantity, className }) {
  const dispatch = useDispatch();

  return (
    <button
      className={className}
      onClick={() => {
        dispatch(addToCart({ id: id, weight: selectedSize, quantity }));
      }}
    >
      Dodaj do koszyka
    </button>
  );
}
