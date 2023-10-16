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
        <div className="box-lg bg-bg2">
          {/* <ShopBreadcrumb/> */}

          <div className="h-[calc(theme(spacing.lg)+theme(spacing.3xs))] w-full rounded-[2rem] bg-red-500">
            BREADCRUMB
          </div>

          <div className="grid md:grid-cols-2">
            <div className="overflow-hidden rounded-t-[2rem] md:!rounded-l-[2rem] md:!rounded-tr-none">
              <Image
                className="h-[30rem] w-full object-cover object-center duration-300 ease-in-out hover:scale-110"
                src="/img/products/honey/honey3.webp"
                width={500}
                height={500}
                alt="Nasze nowości"
              />
            </div>

            <div className="flex flex-col justify-between overflow-hidden rounded-b-[2rem] bg-bg3 p-sm md:rounded-r-[2rem] md:rounded-bl-none">
              <div className="[&>div>span]:font-btn [&>div>span]:text-sm [&>div>span]:uppercase [&>div>span]:text-text">
                <h1>Miód Rzepakowy</h1>
                <h2>z nutką gryki</h2>
                <p>
                  Krótki opis produktu Lorem, ipsum dolor sit amet consectetur
                  adipisicing.
                </p>
                <div>
                  <span>DATA ROZLEWU:&nbsp;</span>
                  IV 2023
                </div>
                <div>
                  <span>DATA WAŻNOŚCI:&nbsp;</span>
                  IV 2026
                </div>
                <div>
                  <span>Konsystencja:&nbsp;</span>
                  skrystalizowany, kremowy
                </div>
                <div>
                  <span>Barwa:&nbsp;</span>
                  jasno-żółta
                </div>
              </div>

              <div>
                <div> Pole rozwijane z wyborem wagi</div>
                <div className="flex items-center text-center [&>*]:font-sans">
                  <h3 className="text-warning line-through">99,99 zł</h3>
                  <h3 className="mx-xs text-lg">99,99 zł</h3>
                </div>
                <button className="btn-lg overflow-ellipsis whitespace-break-spaces border-text  pl-[calc(theme(spacing.3xl))] pr-2xs hover:text-bg3 hover:text-shop-item focus:text-bg3 315px:pl-[calc(theme(spacing.3xl)+theme(spacing.sm))]  315px:pr-md">
                  Dodaj do koszyka
                </button>
              </div>
            </div>
          </div>

          <div className="box-sm bg-bg3">
            <h2>Tutuł opisu tego rodzaju miodu</h2>
            <p>Opis tego rodzaju miodu</p>
          </div>
          <div className="box-sm bg-bg3">
            <h2>Tutuł opisu tej partii miodu</h2>
            <p>Opis tej partii miodu</p>
          </div>
          <div className="box-sm bg-bg3">
            <h2>O miodzie słów kilka...</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              veritatis at, dignissimos iure nulla aliquid nisi quo minima omnis
              eius recusandae, voluptatem eligendi illo? Aut corrupti quasi odit
              natus, omnis deleniti tempora dolorem. Fuga assumenda eos minus
              autem, et quaerat sunt eligendi aspernatur odit laboriosam
              voluptas distinctio commodi molestias quae consequatur laborum
              officiis est dolorem! Quas autem quo corrupti, voluptatum
              architecto debitis ut animi voluptatem.
            </p>
          </div>
        </div>
      </div>
      <BottomBox />
    </main>
  );
}
