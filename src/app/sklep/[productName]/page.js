"use client";

// components
import RadioGroup from "@/components/btn/RadioGroup";
import SetQuantityButton from "@/components/btn/SetQuantityButton";
import InputQuantity from "@/components/btn/InputQuantity";
import AddToCartButton from "@/components/btn/AddToCartButton";
import PageWrapper from "@/components/page-wrapper";
import BottomBox from "@/layout/bottom-box/bottom-box";
import SelectButton from "@/components/btn/SelectButton";
// libs
import React from "react";
import { useState } from "react";

// Artem - Breadcrumb
// import ShopBreadcrumb from "@/components/btn/shop-breadcrumb";

import { formatPrice } from "@/components/formatPrice";

import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";

import dynamic from "next/dynamic";

const RadioBtn = dynamic(() => import("@/components/btn/radio-btn"), {
  ssr: false,
});

// export const metadata = {
//   title: "Miód Gryczany - Miody - Dobry Bartnik",
//   description: "OPIS",
//   keywords: "TAGI",
// };

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
  console.log("sizes: ", sizes)
  const options = Object.keys(sizes);

  const handleSizeChange = (option) => {
    setSelectedSize(option);
    setSelectedPrice(sizes[option]);
    console.log("sizes[option]", sizes[option])
  };

  return (
    <main>
      <PageWrapper>
        <div className="box-lg mb-sm">
          {/* <ShopBreadcrumb/> */}

          <div className="h-[calc(theme(spacing.lg)+theme(spacing.3xs))] w-full rounded-[2rem] bg-red-500">
            BREADCRUMB
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

                {/* ARTEM - wklej tutaj proszę listę rozwijaną na wagę */}

                {/* <RadioGroup
                  item={item}
                  handleSizeChange={handleSizeChange}
                  selectedSize={selectedSize}
                  className={"flex items-center"}
                /> */}

                <SelectButton options={options} onSelect={handleSizeChange}/>

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
                      " btn-lg hover:text-shop-item w-full overflow-ellipsis whitespace-break-spaces  border-text pl-[calc(theme(spacing.3xl))] pr-2xs hover:text-bg3 focus:text-bg3 315px:pl-[calc(theme(spacing.3xl)+theme(spacing.sm))]  315px:pr-md"
                    }
                  />

                  <div className="absolute left-0 flex h-[calc(theme(spacing.lg)+theme(spacing.xs))] items-center justify-items-center rounded-[2rem] border-2 border-text bg-bg3">
                    <SetQuantityButton
                      quantity={quantity}
                      setQuantity={setQuantity}
                      direction={"minus"}
                      className={
                        "mr-3xs h-md w-md justify-center rounded-[2rem] text-center font-btn leading-none hover:bg-text hover:text-bg3 focus:bg-text focus:text-bg3"
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
      </PageWrapper>
      <BottomBox />
    </main>
  );
}
