import React from "react";

import Link from "next/link";
import BottomBox from "@/components/box/bottom-box";
import ShopSortBtn from "@/components/btn/radio-button";

import Image from "next/image";

// import ShopBreadcrumb from "@/components/btn/shop-breadcrumb";
// ARTEM, Trzeba do bazy danych dodać też tagi na produkt na daną stronę i krótki opis z metadata

export const metadata = {
  title: "Miód Gryczany - Miody - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function ProductPage() {
  return (
    <main className="">
      <div className="page-wrapper mb-sm">
        <div className="box-lg">
          {/* <ShopBreadcrumb/> */}

          <div className="h-[calc(theme(spacing.lg)+theme(spacing.3xs))] w-full rounded-[2rem] bg-red-500">
            BREADCRUMB
          </div>

          <div className="grid  md:grid-cols-2">
            <div className="overflow-hidden rounded-t-[2rem] md:!rounded-l-[2rem] md:!rounded-tr-none">
              <Image
                className="h-[30rem] w-full object-cover object-center duration-300 ease-in-out hover:scale-110"
                src="/img/products/honey/honey3.webp"
                width={500}
                height={500}
                alt="Nasze nowości"
              />
            </div>

            <div className="overflow-hidden rounded-b-[2rem] bg-bg3 p-sm md:rounded-r-[2rem] md:rounded-bl-none">
              <h1>Miód Rzepakowy</h1>
              <h2>z nutką gryki</h2>
              <h3 className="mt-xs">IV 2023</h3>
              <p>WAGA</p>
              <div className="flex h-2xl [&>*]:mx-[calc(1/2*theme(spacing.3xs))]">
                <button className="btn-sm">5 KG</button>
                <button className="btn-sm">5 KG</button>
                <button className="btn-sm">5 KG</button>
              </div>

              <button className="btn-lg overflow-ellipsis whitespace-break-spaces border-text  pl-[calc(theme(spacing.3xl))] pr-2xs hover:text-bg3 hover:text-shop-item focus:text-bg3 315px:pl-[calc(theme(spacing.3xl)+theme(spacing.sm))]  315px:pr-md">
                Dodaj do koszyka
              </button>
            </div>
          </div>
          <div className="box-sm">Opis</div>
          <div className="box-sm">Opis2</div>
        </div>
      </div>
      <BottomBox />
    </main>
  );
}


