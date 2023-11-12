"use client";
// components
import ShopRadioGroup from "@/app/sklep/_shopComponents/ShopRadioGroup";
import AddToCartGroup from "@/components/AddToCartGroup";
// libs
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// utils
import { formatPrice } from "@/utils/formatPrice";

export default function ShopItem({ item }) {
  // Find the default size object
  // const defaultSize =
  //   item.sizes.find((sizeObj) => sizeObj.default) || item.sizes[1]; // Fallback to first size if no default found

  // Initialize state to store the currently selected size and price
  const [selectedSize, setSelectedSize] = useState();
  const [selectedPrice, setSelectedPrice] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const defaultSize =
      item.sizes.find((sizeObj) => sizeObj.default) || item.sizes[1];

    setSelectedSize(defaultSize.size);
    setSelectedPrice(defaultSize.price);
  }, []);

  const handleSizeChange = (size, price) => {
    console.log("handleSizeChange triggered");
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
          className="object-cover object-center duration-300 ease-in-out hover:scale-110"
          fill={true}
          src={item.image}
          alt={`${item.name} ${item.name2}`}
          sizes="w-full"
        />
      </Link>

      <div className="flex flex-col items-center justify-between gap-sm  p-sm ">
        <div className="h-[calc(theme(spacing.2xl)+theme(spacing.xs))] !justify-start  ">
          <h2 className="text-center">{item.name}</h2>

          <h3 className="text-center">{item.name2}</h3>

          <h4 className="mt-3xs text-center">{item.harvestDate}</h4>
        </div>

        <ShopRadioGroup
          item={item}
          handleSizeChange={handleSizeChange}
          selectedSize={selectedSize}
          className={"flex [&>*]:mx-[calc(1/2*theme(spacing.3xs))]"}
        />

        <div className="flex">
          <h3 className="font-sans text-warning line-through">
            {formatPrice(selectedPrice, 1.1)} zł
          </h3>
          <h3 className="mx-xs font-sans text-lg">
            {formatPrice(selectedPrice)} zł
          </h3>
        </div>

        {/* 
        ARTEM - Przestawić to wszystko do AddToCartbutton */}

        <AddToCartGroup
          item={item}
          quantity={quantity}
          setQuantity={setQuantity}
          selectedSize={selectedSize}
          className="flex h-[calc(theme(spacing.lg)+theme(spacing.xs))] items-center  rounded-[2rem] border-2 border-text pl-[calc(theme(spacing.3xl))] pr-2xs font-btn text-sm uppercase hover:bg-text  hover:text-bg3 315px:pl-[calc(theme(spacing.3xl)+theme(spacing.sm))] 315px:pr-md"
        />
      </div>
    </section>
  );
}
