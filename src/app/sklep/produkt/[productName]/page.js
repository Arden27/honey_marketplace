"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import ShopSortBtn from "@/components/btn/radio-button";
import OpinionBtn from "@/components/btn/radio-button";
import BottomBox from "@/components/box/bottom-box";

import { formatPrice } from "@/components/formatPrice";
import { openCart, addToCart, setShouldCloseCart } from "@/redux/store";

import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";

import dynamic from "next/dynamic";

const RadioButton = dynamic(() => import("@/components/btn/radio-button"), {
  ssr: false,
});

// import ShopBreadcrumb from "@/components/btn/shop-breadcrumb";
// ARTEM, Trzeba do bazy danych dodać też tagi na produkt na daną stronę i krótki opis z metadata

// export const metadata = {
//   title: "Miód Gryczany - Miody - Dobry Bartnik",
//   description: "OPIS",
//   keywords: "TAGI",
// };

export default function ProductPage({ params }) {
  const items = useSelector((state) => state.items);
  const item = items.find((item) => item.tag === params.productName);

  // Find the default size object
  const defaultSize =
    item.sizes.find((sizeObj) => sizeObj.default) || item.sizes[1]; // Fallback to first size if no default found

  // Initialize state to store the currently selected size and price
  const [selectedSize, setSelectedSize] = useState(defaultSize.size);
  const [selectedPrice, setSelectedPrice] = useState(defaultSize.price);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleSizeChange = (size, price) => {
    setSelectedSize(size);
    setSelectedPrice(price);
  };

  return (
    <main className="">
      <div className="page-wrapper mb-sm">
        <div className="box-lg">
          {/* <ShopBreadcrumb/> */}

          <div className="h-[calc(theme(spacing.lg)+theme(spacing.3xs))] w-full rounded-[2rem] bg-red-500">
            BREADCRUMB
          </div>

          <section className="grid  min-h-[30rem] w-full grid-rows-[1fr_auto] md:grid-cols-[minmax(50%,1fr)_auto] ">
            <div className="overflow-hidden rounded-t-[2rem] md:!rounded-l-[2rem] md:!rounded-tr-none">
              <Image
                className="h-[calc(100svh-2*theme(spacing.3xl)-theme(spacing.2xl))] min-h-[30rem] w-full  object-cover object-center duration-300 ease-in-out hover:scale-110
                "
                src={item.image}
                width={500}
                height={500}
                alt={item.name}
              />
            </div>

            <div
              className="flex flex-col justify-between overflow-hidden rounded-b-[2rem]
            bg-bg3 p-sm  md:max-w-[calc(30rem-theme(spacing.lg))]  md:rounded-r-[2rem] md:rounded-bl-none"
            >
              <div className="pb-sm">
                <h1 className="">{item.name}</h1>
                <h2 className="pb-2xs">{item.name2}</h2>

                <div className="flex items-end pb-sm">
                  <h3 className=" font-sans text-lg">
                    {formatPrice(selectedPrice)} zł
                  </h3>
                  <h3 className="mx-xs font-sans text-warning line-through">
                    {formatPrice(selectedPrice, 1.1)} zł
                  </h3>
                </div>

                <p className="pb-sm">{item.descriptionShort}</p>
                <div>
                  <span className="font-btn text-sm uppercase text-text">
                    Data rozlewu:&nbsp;
                  </span>
                  {item.harvestDate}
                </div>
                <div>
                  <span className="font-btn text-sm uppercase text-text">
                    Data ważności:&nbsp;
                  </span>
                  {item.terminationDate}
                </div>
                <div>
                  <span className="font-btn text-sm uppercase text-text">
                    Konsystencja:&nbsp;
                  </span>
                  {item.consistency}
                </div>
                <div>
                  <span className="font-btn text-sm uppercase text-text">
                    Barwa:&nbsp;
                  </span>
                  {item.color}
                </div>

                <div>
                  <span className="font-btn text-sm uppercase text-text ">
                    Waga:&nbsp;
                  </span>
                </div>

                {/* ARTEM - wklej tutaj proszę listę rozwijaną na wagę */}

                <div className="flex items-center">
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
              </div>

              <div>
                <div className="relative  flex rounded-[2rem]">
                  <button
                    className=" btn-lg w-full overflow-ellipsis whitespace-break-spaces border-text  pl-[calc(theme(spacing.3xl))] pr-2xs hover:text-bg3 hover:text-shop-item focus:text-bg3 315px:pl-[calc(theme(spacing.3xl)+theme(spacing.sm))]  315px:pr-md"
                    onClick={() => {
                      dispatch(setShouldCloseCart(false));
                      // console.log("after click on Dodaj", shouldCloseCart)
                      dispatch(
                        addToCart({
                          id: item.id,
                          weight: selectedSize,
                          quantity,
                        }),
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
                      className="ml-3xs h-md w-md justify-center rounded-[2rem] text-center font-btn leading-none hover:bg-text hover:text-bg3 focus:bg-text focus:text-bg3"
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
                      className="mr-3xs h-md w-md justify-center rounded-[2rem] text-center font-btn leading-none	hover:bg-text hover:text-bg3 focus:bg-text focus:text-bg3"
                      onClick={() =>
                        quantity < 99 && setQuantity(Math.round(quantity + 1))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="box-sm">
            <h2>{item.type}</h2>
            <p>opis z typu miodu</p>
            <br />
            <h2>Zbiory {item.harvestDate}</h2>
            <p>{item.descriptionLong}</p>
          </section>
          <section className="box-sm">
            <h2>Nasze {item.categories}</h2>
            <p>opis z kategorii</p>
          </section>
        </div>
      </div>
      <BottomBox />
    </main>
  );
}
