import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ShopItem() {
  return (
    <section className="grid h-[calc(theme(spacing.header-bar-lg)+3rem)] min-h-[50rem] grid-cols-1 grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-[3rem] bg-shop-item-bg">
      <Image
        className="h-full w-full object-cover object-center"
        src="/img/home/jak-rozpoznac.jpg"
        width={100}
        height={100}
        alt="Nazwa produktu"
      />

      <div className="grid-rows-[theme(spacing.2xl)_theme(spacing.3xl)_theme(spacing.2xl)_auto] p-gap grid grid-cols-1 justify-items-center items-center ">
        <h2 className="text-center">Miód rzepakowy z nutką gryki</h2>

        <div className="flex">
          <button className="btn-sm hover:text-shop-item-bg">250 g</button>
          <button className="btn-sm hover:text-shop-item-bg">450 g</button>
          <button className="btn-sm hover:text-shop-item-bg">1 kg</button>
        </div>

        <div className="flex">
          <div className="mx-xs text-warning line-through">
            <h2>99,90 zł</h2>
          </div>
          <div className="mx-xs">
            <h2>99,90 zł</h2>
          </div>
        </div>

        <div className="flex border-2 border-text rounded-[3rem]">
          <div className="flex">
            <button className="">-</button>
            <input className="max-w-min " type="number" defaultValue="1" min="1" />
            <button className="">+</button>
          </div>
          <button className="btn-lg  hover:text-shop-item-bg">
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </section>
  );
}
