"use client";
// components
import RadioGroup from "@/components/btns/RadioGroup";
import SetQuantityButton from "@/components/btns/SetQuantityButton";
import InputQuantity from "@/components/btns/InputQuantity";
import AddToCartButton from "@/components/btns/AddToCartButton";
// libs
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// utils
import { formatPrice } from "@/components/formatPrice";

export default function ShopItem({ item }) {
  // Find the default size object
  const defaultSize =
    item.sizes.find((sizeObj) => sizeObj.default) || item.sizes[1]; // Fallback to first size if no default found

  // Initialize state to store the currently selected size and price
  const [selectedSize, setSelectedSize] = useState(defaultSize.size);
  const [selectedPrice, setSelectedPrice] = useState(defaultSize.price);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (size, price) => {
    setSelectedSize(size);
    setSelectedPrice(price);
  };

  useEffect(() => {
    console.log(item.tag);
  });

  return (
    <section
      className="grid h-[calc(100svh-2*theme(spacing.3xl)-theme(spacing.2xl))] min-h-[30rem] w-full grid-cols-1 grid-rows-[1fr_auto] overflow-hidden rounded-[2rem] bg-bg3
      330px:h-[calc(100svh-2*theme(spacing.3xl)-theme(spacing.3xs))]
      sm:h-[calc(100svh-3*theme(spacing.3xl)-theme(spacing.lg)-theme(spacing.xs))]"
    >
      <Link href={`/sklep/${item.tag}`} className="relative overflow-hidden">
        <Image
          className="object-cover  object-center duration-300 ease-in-out hover:scale-110"
          fill={true}
          src={item.image}
          alt={`${item.name} ${item.name2}`}
          sizes="w-full"
        />
      </Link>

      <div className="flex flex-col items-center justify-between gap-sm  p-sm [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:text-center">
        <div className=" h-[calc(theme(spacing.2xl)+theme(spacing.xs))] flex-col !justify-start  ">
          <h2 className="">{item.name}</h2>

          <h3 className="">{item.name2}</h3>

          <h4 className="mt-3xs">{item.harvestDate}</h4>
        </div>

        <RadioGroup
          item={item}
          handleSizeChange={handleSizeChange}
          selectedSize={selectedSize}
          className={" [&>*]:mx-[calc(1/2*theme(spacing.3xs))]"}
        />

        <div className="[&>*]:font-sans">
          <h3 className="text-warning line-through">
            {formatPrice(selectedPrice, 1.1)} zł
          </h3>
          <h3 className="mx-xs text-lg">{formatPrice(selectedPrice)} zł</h3>
        </div>

        <div className="relative rounded-[2rem]">
          <AddToCartButton
            id={item.id}
            selectedSize={selectedSize}
            quantity={quantity}
            className={
              "btn-lg hover:text-shop-item overflow-ellipsis whitespace-break-spaces  border-text pl-[calc(theme(spacing.3xl))] pr-2xs hover:text-bg3 focus:text-bg3 315px:pl-[calc(theme(spacing.3xl)+theme(spacing.sm))]  315px:pr-md"
            }
          />

          <div
            className="absolute left-0 flex h-[calc(theme(spacing.lg)+theme(spacing.xs))] items-center justify-items-center rounded-[2rem] border-2 border-text bg-bg3
					"
          >
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
      </div>
    </section>
  );
}
