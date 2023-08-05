import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCartItem } from "@/redux/store";

const CartItem = ({ item, removeFromCart }) => {
  const [quantity, setQuantity] = useState(item.quantity); // Initial quantity is from props
  const dispatch = useDispatch();

  const handleQuantityChange = (value) => {
    // const value = Math.round(Number(e.target.value));
    let clampedValue = value;

    if (clampedValue < 1) {
      clampedValue = 1;
    } else if (clampedValue > 99) {
      clampedValue = 99;
    }

    setQuantity(clampedValue);
    dispatch(
      updateCartItem({
        id: item.id,
        weight: item.weight,
        quantity: clampedValue,
      }),
    ); // Update the cart item in the store
  };

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const handleRemove = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="mb-gap grid h-[15rem] grid-cols-[3fr_7fr] grid-rows-1 overflow-hidden rounded-[3rem] bg-cart-bar-item">
      <Image
        className=" h-full w-full object-cover object-center"
        src={item.image}
        width={50}
        height={50}
        alt={item.name}
      />
      <div className="m-sm flex max-h-fit flex-col justify-between">
        <div>
          <h3 className="mb-2xs">{item.name}</h3>
          <h4>{item.weight}</h4>
        </div>

        <div className="flex w-full items-center justify-between ">
          <div className="flex h-btn-sm items-center justify-center rounded-[3rem] border-2 border-text">
            <button
              className="ml-3xs h-md w-md justify-center rounded-[3rem] text-center font-btn leading-none hover:bg-text hover:text-bg"
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              -
            </button>
            <input
              className="h-xl w-xl rounded-[3rem] bg-transparent text-center font-btn text-sm"
              type="number"
              value={quantity.toString()}
              min="1"
              max="99"
              step="1"
              onChange={(e) =>
                handleQuantityChange(Math.round(Number(e.target.value)))
              }
            />
            <button
              className="mr-3xs h-md w-md justify-center rounded-[3rem] text-center font-btn leading-none hover:bg-text hover:text-bg"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              +
            </button>
          </div>
          <h3 className="font-sans text-sm leading-none">x</h3>
          <div className="relative top-0.5 flex [&>*]:font-sans [&>*]:leading-none ">
            <h3 className="absolute -top-7 text-sm text-warning line-through ">
              {item.price} zł
            </h3>
            <h3 className=" ">{item.price} zł</h3>
          </div>
          <button
            className="flex h-lg w-lg items-center  justify-center rounded-[3rem] text-center font-btn hover:bg-text hover:text-bg [&>*]:stroke-text [&>*]:hover:stroke-shop-item"
            onClick={handleRemove}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 7l16 0"></path>
              <path d="M10 11l0 6"></path>
              <path d="M14 11l0 6"></path>
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            </svg>
          </button>{" "}
          {/* Make sure to wire up this delete button as well */}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
