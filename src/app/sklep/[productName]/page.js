"use client";

// components
import PageWrapper from "@/app/_layout/PageWrapper";
import Box from "@/app/_layout/Box";
import SetQuantityButton from "@/components/SetQuantityButton";
import InputQuantity from "@/components/InputQuantity";
import AddToCartButton from "@/app/sklep/_shopComponents/AddToCartButton";
import DropdownMenu from "@/components/DropdownMenu";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

// libs
import React from "react";
import { useState } from "react";
import Link from "next/link";

import { formatPrice } from "@/utils/formatPrice";

import Image from "next/image";

import { useSelector } from "react-redux";

export default function ProductPage({ params }) {
  const items = useSelector((state) => state.items);
  const item = items.find((item) => item.tag === params.productName);

  console.log("item found: ", item);
  // Find the default size object
  const defaultSize =
    item.sizes.find((sizeObj) => sizeObj.default) || item.sizes[1]; // Fallback to first size if no default found
  
  // Initialize state to store the currently selected size and price
  const [selectedSize, setSelectedSize] = useState(defaultSize.size);
  const [selectedPrice, setSelectedPrice] = useState(defaultSize.price);
  const [quantity, setQuantity] = useState(1);
  //const sizes = item.sizes.map((sizeObj) => ({ [sizeObj.size]: sizeObj.price }));
  const sizes = item.sizes.reduce((acc, sizeObj) => {
    acc[sizeObj.size] = sizeObj.price;
    return acc;
  }, {});
  console.log("sizes: ", sizes);
  // const options = Object.keys(sizes);
  // console.log("options:", options);

  const handleSizeChange = (option) => {
    setSelectedSize(option);
    setSelectedPrice(sizes[option]);
    console.log("sizes[option]", sizes[option]);
  };

  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box format="lg">
          <div className="h-[calc(theme(spacing.lg)+theme(spacing.3xs))] w-full rounded-[2rem] bg-red-500">
            <span>/</span>
            <Link className="hover:underline" href="/sklep">
              sklep
            </Link>
            <span>/</span>
            <>{params.productName}</>
          </div>

          <section
            className="grid min-h-[30rem] grid-rows-[1fr_auto]
          md:grid-cols-[minmax(50%,auto)_minmax(30%,50%)] "
          >
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
            bg-bg3 p-sm   md:rounded-r-[2rem] md:rounded-bl-none"
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

                <DropdownMenu onSelect={handleSizeChange}>
                  <DropdownMenu.List className="">
                    {item.sizes.map((option, index) => (
                      <DropdownMenu.Item
                        className=""
                        isDefault={option.default}
                        key={index}
                      >
                        {option.size}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.List>
                </DropdownMenu>

                {/* ARTEM - tutaj dostępność towaru. Jak poniżej 20 słoików. Jak powyżej to wpisać: dostępny. Jak powyżej 50słoików to dużo a jak powyżej 100 to bardzo dużo  */}

                <div className="mt-sm">
                  <span className="font-btn text-sm uppercase text-text ">
                    Dostępność:&nbsp;
                  </span>
                  zostało jedynie 14 szt.
                </div>
              </div>

              <div>
                <div className="relative  flex rounded-[2rem]">
                  <AddToCartButton
                    id={item.id}
                    selectedSize={selectedSize}
                    quantity={quantity}
                    className={
                      "w-full overflow-ellipsis whitespace-break-spaces border-text  pl-[calc(theme(spacing.3xl))] pr-2xs hover:bg-text hover:text-bg3 315px:pl-[calc(theme(spacing.3xl)+theme(spacing.sm))]  315px:pr-md"
                    }
                  />

                  <div className="absolute left-0 flex h-[calc(theme(spacing.lg)+theme(spacing.xs))] items-center justify-items-center rounded-[2rem] border-2 border-text bg-bg3">
                    <SetQuantityButton
                      quantity={quantity}
                      setQuantity={setQuantity}
                      direction={"minus"}
                      className={
                        "mr-3xs h-md w-md justify-center rounded-[2rem] text-center font-btn leading-none hover:bg-text hover:text-bg3"
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
                        "mr-3xs h-md w-md justify-center rounded-[2rem] text-center font-btn leading-none hover:bg-text hover:text-bg3"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Box format="sm">
            <h2>{item.type}</h2>
            <p>opis z typu miodu</p>
            <br />
            <h2>Zbiory {item.harvestDate}</h2>
            <p>{item.descriptionLong}</p>
          </Box>
          <Box format="sm">
            <h2>Nasze {item.categories}</h2>
            <p>opis z kategorii</p>
          </Box>
        </Box>
      </PageWrapper>
      <BottomBox />
    </main>
  );
}
