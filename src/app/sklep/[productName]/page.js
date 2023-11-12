"use client";

// components
import PageWrapper from "@/app/_layout/PageWrapper";
import Box from "@/app/_layout/Box";
import AddToCartGroup from "@/components/AddToCartGroup";
import DropdownMenu from "@/components/DropdownMenu";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

// libs
import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

import { formatPrice } from "@/utils/formatPrice";

import Image from "next/image";

import { useSelector } from "react-redux";
import { setShouldRefresh } from "@/redux/store";

export default function ProductPage({ params }) {
  const items = useSelector((state) => state.items);
  //const item = items.find((item) => item.tag === params.productName);
  const [item, setItem] = useState({
    id: 0,
    position: 0,
    recommended: true,
    promotion: true,
    name: "",
    name2: "",
    tag: "",
    image: "/img/logo.png",
    sizes: [],
    categories: [],
    type: "",
    harvestDate: "",
    terminationDate: "",
    consistency: "",
    color: "",
    descriptionShort: "",
    descriptionLong: "",
    metadataTitle: "",
    metadataDescription: "",
    metadataKeywords: "",
  });
  const [sizes, setSizes] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedPrice, setSelectedPrice] = useState();
  const [quantity, setQuantity] = useState(1);
  const [dropdownSelected, setDropdownSelected] = useState("");

  useEffect(() => {
    const foundItem = items.find((item) => item.tag === params.productName);
    const foundDefaultSize =
      foundItem.sizes.find((sizeObj) => sizeObj.default) || item.sizes[1];
    const foundSizes = foundItem.sizes.reduce((acc, sizeObj) => {
      acc[sizeObj.size] = sizeObj.price;
      return acc;
    }, {});
    setItem(foundItem);
    setSizes(foundSizes);
    setSelectedPrice(foundDefaultSize.price);
    setSelectedSize(foundDefaultSize.size);
    setDropdownSelected(foundDefaultSize.size);
  }, []);

  const handleSizeChange = (option) => {
    setSelectedSize(option);
    setSelectedPrice(sizes[option]);
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

                <DropdownMenu
                  onSelect={handleSizeChange}
                  selected={dropdownSelected}
                  setSelected={setDropdownSelected}
                >
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
                <AddToCartGroup
                  item={item}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  selectedSize={selectedSize}
                  className="flex h-[calc(theme(spacing.lg)+theme(spacing.xs))] items-center  rounded-[2rem] border-2 border-text pl-[calc(theme(spacing.3xl))] pr-2xs font-btn text-sm uppercase hover:bg-text  hover:text-bg3 315px:pl-[calc(theme(spacing.3xl)+theme(spacing.sm))] 315px:pr-md"
                />
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
