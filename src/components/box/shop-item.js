"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/store";
import { formatPrice } from "@/components/formatPrice";
import { openCart, setShouldCloseCart } from "@/redux/store";

// import RadioButton from "./radio-button";

import dynamic from "next/dynamic";

const RadioButton = dynamic(() => import("../btn/radio-button"), {
  ssr: false,
});

export default function ShopItem({ item }) {
  // Find the default size object
  const defaultSize =
    item.sizes.find((sizeObj) => sizeObj.default) || item.sizes[1]; // Fallback to first size if no default found

  // Initialize state to store the currently selected size and price
  const [selectedSize, setSelectedSize] = useState(defaultSize.size);
  const [selectedPrice, setSelectedPrice] = useState(defaultSize.price);
  const [quantity, setQuantity] = useState(1);

  // const isCartOpen = useSelector((state) => state.isCartOpen);
  // const shouldCloseCart = useSelector((state) => state.shouldCloseCart);

  const dispatch = useDispatch();

  const handleSizeChange = (size, price) => {
    setSelectedSize(size);
    setSelectedPrice(price);
  };

  return (
    <section className="grid  h-[calc(100svh-2*theme(spacing.3xl)-theme(spacing.2xl))] min-h-[30rem] grid-cols-1 grid-rows-[1fr_auto] overflow-hidden rounded-[2rem] bg-shop-item 330px:h-[calc(100svh-2*theme(spacing.3xl))] sm:h-[calc(100svh-3*theme(spacing.3xl)-theme(spacing.lg)-theme(spacing.md))]">
      <div className="relative  overflow-hidden">
        <Image
          className="object-cover object-center duration-300 ease-in-out hover:scale-110"
          fill={true}
          src={item.image}
          alt={item.name}
        />
      </div>

      <div className="flex flex-col items-center justify-between p-sm  [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:text-center">
        <div className="h-[calc(theme(spacing.2xl)+theme(spacing.sm))] flex-col !justify-start  ">
          <h2 className=" min-w-[calc(100%+theme(spacing.lg))] !items-start justify-start">
            {item.name}
          </h2>

          <h3 className="">z dodatkiem gryki</h3>

          <h4 className="mt-xs">IV 2023</h4>
        </div>

        <div className="h-2xl  [&>*]:mx-[calc(1/2*theme(spacing.3xs))]">
          {item.sizes.map((sizeObj, index) => (
            <RadioButton
              key={index}
              sizeObj={sizeObj}
              item={item}
              handleSizeChange={handleSizeChange}
              selectedSize={selectedSize}
            />
          ))}
        </div>

        <div className="mb-sm  [&>*]:font-sans">
          <h3 className="text-warning line-through">
            {formatPrice(selectedPrice, 1.1)} zł
          </h3>
          <h3 className="mx-xs text-lg">{formatPrice(selectedPrice)} zł</h3>
        </div>

        <div className="relative rounded-[2rem]">
          <button
            className="btn-lg overflow-ellipsis whitespace-break-spaces border-text  pl-[calc(theme(spacing.3xl))] pr-2xs hover:text-bg3 hover:text-shop-item focus:text-bg3 315px:pl-[calc(theme(spacing.3xl)+theme(spacing.sm))]  315px:pr-md"
            onClick={() => {
              dispatch(setShouldCloseCart(false));
              // console.log("after click on Dodaj", shouldCloseCart)
              dispatch(
                addToCart({ id: item.id, weight: selectedSize, quantity }),
              );
              dispatch(openCart());

              setTimeout(() => {
                dispatch(setShouldCloseCart(true)); // allow cart to close after a short delay
                // console.log("timeout shouldCloseCart set to: ", shouldCloseCart)
              }, 500);
            }}
          >
            Dodaj do koszyka
          </button>

          <div
            className="absolute left-0 flex h-[calc(theme(spacing.lg)+theme(spacing.xs))] items-center justify-items-center rounded-[2rem] border-2 border-text bg-shop-item
					"
          >
            <button
              className="ml-3xs h-md w-md justify-center rounded-[2rem] text-center font-btn leading-none 
							hover:bg-text hover:text-bg3 focus:bg-text focus:text-bg3"
              onClick={() =>
                quantity > 1 && setQuantity(Math.round(quantity - 1))
              }
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
              onChange={(e) => {
                const value = Math.round(Number(e.target.value));
                if (value < 1) {
                  setQuantity(1);
                } else if (value > 99) {
                  setQuantity(99);
                } else {
                  setQuantity(value);
                }
              }}
            />
            <button
              className="mr-3xs h-md w-md justify-center rounded-[2rem] text-center font-btn leading-none 
							hover:bg-text hover:text-bg3 focus:bg-text focus:text-bg3"
              onClick={() =>
                quantity < 99 && setQuantity(Math.round(quantity + 1))
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
