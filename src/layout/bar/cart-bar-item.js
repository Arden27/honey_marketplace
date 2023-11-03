import SetQuantityButton from "@/components/btn/SetQuantityButton";
import InputQuantity from "@/components/btn/InputQuantity";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCartItem } from "@/redux/store";
import { formatPrice } from "@/components/formatPrice";

import Image from "next/image";
import TrashIcon from "public/icons/trash.svg";

const CartItem = ({ item, removeFromCart }) => {
  const [quantity, setQuantity] = useState(item.quantity); // Initial quantity is from props
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateCartItem({
        id: item.id,
        weight: item.weight,
        quantity: quantity,
      }),
    ); 
  }, [quantity]); // Update the cart item in the store if quantity changes

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const handleRemove = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="relative mb-sm grid h-[calc(theme(spacing.3xl)+theme(spacing.xl))] grid-cols-[3fr_7fr] grid-rows-1 overflow-hidden rounded-[2rem] bg-bg3">
      <Image
        className="h-full w-full object-cover object-center"
        src={item.image}
        width={50}
        height={50}
        alt={item.name}
      />
      <div className="m-xs flex flex-col justify-between">
        <div>
          <h3 className="w-[90%] 380px:w-full">{item.name}</h3>
          <h4 className="">{item.name2}</h4>
        </div>

        <div className="flex">
          <h4>{item.weight}</h4>
          <span className="dot"></span>
          <h4>IV 2023</h4>
        </div>

        <div className="flex w-full items-center justify-between ">
          <div className="flex h-[calc(theme(spacing.lg)+theme(spacing.3xs))] items-center justify-center rounded-[2rem] border-2 border-text">

            <SetQuantityButton
              quantity={quantity}
              setQuantity={setQuantity}
              direction={"minus"}
              className={
                "ml-3xs h-sm w-sm justify-center rounded-[2rem] text-center font-btn leading-none hover:bg-text hover:text-bg"
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
                "mr-3xs h-sm w-sm justify-center rounded-[2rem] text-center font-btn leading-none hover:bg-text hover:text-bg"
              }
            />
          </div>

          <h3 className="font-sans text-lg leading-none">&#215;</h3>

          <div className="relative flex [&>*]:whitespace-nowrap  [&>*]:font-sans [&>*]:leading-none ">
            <h3 className=" absolute -top-sm min-w-full text-sm text-warning line-through">
              {formatPrice(item.price, 1.1)} zł
            </h3>
            <h3>{formatPrice(item.price)} zł</h3>
          </div>

          <button
            className="[&>*]:hover:stroke-shop-item [&>*]:focus:stroke-shop-item absolute right-xs top-xs  flex  h-md w-md items-center  justify-center rounded-[2rem] text-center font-btn hover:bg-text hover:text-bg 380px:static"
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