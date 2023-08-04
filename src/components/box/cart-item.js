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
    <div className="mb-gap grid h-[15rem] grid-cols-[2fr_5fr]  overflow-hidden rounded-[3rem] bg-cart-bar-item">
      <Image
        className="h-full w-full object-cover object-center"
        src={item.image}
        width={50}
        height={50}
        alt={item.name}
      />
      <div className="m-sm flex flex-col justify-between">
        <div>
          <h3 className="mb-sm">{item.name}</h3>
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
          <h4 className="text-m font-btn leading-none">x</h4>
          <div className=".[&>*]:font-btn [&>*]:text-base [&>*]:leading-none ">
            <h4 className="pb-xs line-through">{item.price} zł</h4>
            <h4 className=" text-warning ">{item.price} zł</h4>
          </div>
          <button
            className="flex h-lg w-lg items-center  justify-center rounded-[3rem] text-center font-btn hover:bg-text hover:text-bg [&>*]:stroke-text [&>*]:hover:stroke-shop-item"
            onClick={handleRemove}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class=""
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
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
