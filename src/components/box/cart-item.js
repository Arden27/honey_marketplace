import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCartItem } from "@/redux/store";
import { formatPrice } from "@/components/formatPrice";

import Image from "next/image";
import TrashIcon from "public/icons/trash.svg";

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
    <div className="relative mb-sm grid h-fit min-h-[calc(theme(spacing.3xl)+theme(spacing.xl))] grid-cols-[3fr_7fr] grid-rows-1 overflow-hidden rounded-[2rem] bg-cart-bar-item">
      <Image
        className="h-full w-full object-cover object-center"
        src={item.image}
        width={50}
        height={50}
        alt={item.name}
      />
      <div className="m-xs flex flex-col justify-between">
        <div className="mb-sm flex flex-col justify-between">
          <div className="mb-2xs">
            <h3 className="w-[90%] 380px:w-full">{item.name}</h3>

            <h4 className="">z dodatkiem gryki</h4>
          </div>

          <div className=" flex ">
            <h4>{item.weight}</h4>
            <span className="dot"></span>

            <h4>IV 2023</h4>
          </div>
        </div>

        <div className="flex w-full items-center justify-between ">
          <div className="flex h-[calc(theme(spacing.lg)+theme(spacing.3xs))] items-center justify-center rounded-[2rem] border-2 border-text">
            <button
              className="ml-3xs h-sm w-sm justify-center rounded-[2rem] text-center font-btn leading-none hover:bg-text hover:text-bg"
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              -
            </button>

            <input
              className="h-lg w-lg rounded-[2rem] bg-transparent text-center font-btn text-sm"
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
              className="mr-3xs h-sm w-sm justify-center rounded-[2rem] text-center font-btn leading-none hover:bg-text hover:text-bg"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              +
            </button>
          </div>

          <h3 className="font-sans text-lg leading-none">&#215;</h3>

          <div className="[&>*]:whitespace-nowrap relative flex  [&>*]:font-sans [&>*]:leading-none ">
            <h3 className=" absolute -top-sm min-w-full text-sm text-warning line-through">
              {formatPrice(item.price, 1.1)} zł
            </h3>
            <h3>{formatPrice(item.price)} zł</h3>
          </div>

          <button
            className="absolute right-xs top-xs flex h-md  w-md  items-center justify-center rounded-[2rem]  text-center font-btn hover:bg-text hover:text-bg 380px:static [&>*]:hover:stroke-shop-item [&>*]:focus:stroke-shop-item"
            onClick={handleRemove}
          >
            <TrashIcon className="h-[16px] w-[16px] stroke-text stroke-2 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
