import React from "react";
import Link from "next/link";
import Image from "next/image";

import LogInBox from "@/components/box/log-in-box";
import NoRegisterBox from "@/components/box/no-register-box";
import ShopSortBtn from "@/components/btn/radio-button";

// import ShopBreadcrumb from "@/components/btn/shop-breadcrumb";

// ARTEM, Trzeba do bazy danych dodać też tagi na produkt na daną stronę i krótki opis z metadata

export const metadata = {
  title: "Miód Gryczany - Miody - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function ProductPage() {
  return (
    <div className="box-lg">
      {/* <ShopBreadcrumb/> */}

      <div className="h-[calc(theme(spacing.lg)+theme(spacing.3xs))] w-full rounded-[2rem] bg-text"></div>
      <div className="overflow-hidden rounded-[2rem] bg-bg3">
        <div className="h-[20rem] overflow-hidden ">
          <Image
            className="w-full object-cover object-center duration-300 ease-in-out hover:scale-110"
            src="/img/products/candles/candle1.webp"
            width={500}
            height={500}
            alt="Nasze nowości"
          />
        </div>
        <div className="m-sm flex [&>*]:h-3xl [&>*]:w-3xl">
          <Image
            className="w-full object-cover object-center duration-300 ease-in-out hover:scale-110"
            src="/img/products/candles/candle1.webp"
            width={500}
            height={500}
            alt="Nasze nowości"
          />
          <Image
            className="w-full object-cover object-center duration-300 ease-in-out hover:scale-110"
            src="/img/products/candles/candle1.webp"
            width={500}
            height={500}
            alt="Nasze nowości"
          />
        </div>
        <div className="m-sm">

          <h1>Miód Rzepakowy</h1>
          <h2>z nutką gryki</h2>
        </div>
      </div>
    </div>
  );
}

