import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ShopItem() {
  return (
    <section className="grid h-[calc(100svh-2*theme(spacing.3xl)-theme(spacing.2xl)-theme(spacing.2xs))] min-h-[50rem] grid-cols-1 grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-[3rem] bg-shop-item-bg md:h-[calc(100svh-5*theme(spacing.3xl)-theme(spacing.lg)-theme(spacing.xs))]">
      <Image
        className="h-full w-full object-cover object-center"
        src="/img/home/jak-rozpoznac.jpg"
        width={100}
        height={100}
        alt="Nazwa produktu"
      />

      <div className="grid grid-cols-1 grid-rows-[theme(spacing.2xl)_theme(spacing.3xl)_theme(spacing.2xl)_auto] items-center justify-items-center p-gap ">
        <h2 className="text-center">Miód rzepakowy z nutką gryki</h2>

        <div className="flex">
          <button className="btn-sm hover:text-shop-item-bg">250 g</button>
          <button className="btn-sm hover:text-shop-item-bg">450 g</button>
          <button className="btn-sm hover:text-shop-item-bg">1 kg</button>
        </div>

        <div className="flex">
          <div className="mx-xs ">
            <h3>
              <del className="text-warning">99,90 zł</del>
            </h3>
          </div>
          <div className="mx-xs">
            <h3>99,90 zł</h3>
          </div>
        </div>

        <div className="relative flex rounded-[3rem]">
          <div
            className="absolute flex h-btn-lg items-center justify-items-center rounded-[3rem] border-2 border-text bg-shop-item-bg
          "
          >
            <button
              className="ml-3xs h-md w-md justify-center rounded-[3rem] text-center font-btn leading-none 
            hover:bg-text hover:text-bg"
            >
              -
            </button>
            <input
              className="h-xl w-xl rounded-[3rem] bg-transparent text-center font-btn text-sm"
              type="number"
              defaultValue="1"
              min="1"
              max="99"
            />
            <button
              className="mr-3xs h-md w-md justify-center rounded-[3rem] text-center font-btn leading-none 
            hover:bg-text hover:text-bg"
            >
              +
            </button>
          </div>
          <button className="btn-lg border-text pl-[calc(theme(spacing.xl)+2*theme(spacing.md)+2*theme(spacing.3xs)+theme(spacing.md))] hover:text-shop-item-bg">
            Dodaj do koszyka <span className="sr-only">PRODUCT_NAME</span>
          </button>
        </div>
      </div>
    </section>
  );
}
