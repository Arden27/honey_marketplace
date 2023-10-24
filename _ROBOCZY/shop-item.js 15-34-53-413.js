"use client";

import Image from "next/image";

export default function ShopItem() {
  return (
    <section className="grid h-[calc(theme(spacing.header-lg)+3rem)] min-h-[50rem] grid-cols-1 grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-[2rem] bg-bg3">
      <Image
        className="h-full w-full object-cover object-center"
        src="/img/home/jak-rozpoznac.jpg"
        width={100}
        height={100}
        alt="Nazwa produktu"
      />

      <div className="grid grid-cols-1 grid-rows-[theme(spacing.2xl)_theme(spacing.3xl)_theme(spacing.2xl)_auto] items-center justify-items-center p-sm ">
        <h2 className="text-center">{item.name}</h2>

        <div className="flex">
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

        <div className="flex">
          <div className="mx-xs text-warning line-through">
            <h3>99,90 zł</h3>
          </div>
          <div className="mx-xs">
            <h3>99,90 zł</h3>
          </div>
        </div>

        <div className="relative flex rounded-[2rem]">
          <div
            className="absolute flex h-btn-lg items-center justify-items-center rounded-[2rem] border-2 border-text bgbg3
          "
          >
            <button
              className="ml-3xs h-md w-md justify-center rounded-[2rem] text-center font-btn leading-none 
            hover:bg-text hover:text-bg"
            >
              -
            </button>
            <input
              className="h-xl w-xl rounded-[2rem] bg-transparent text-center font-btn text-sm"
              type="number"
              defaultValue="1"
              min="1"
              max="99"
            />
            <button
              className="mr-3xs h-md w-md justify-center rounded-[2rem] text-center font-btn leading-none 
            hover:bg-text hover:text-bg"
            >
              +
            </button>
          </div>
          <button
            className="btn-lg border-text pl-[calc(theme(spacing.xl)+2*theme(spacing.md)+2*theme(spacing.3xs)+theme(spacing.md))] hover:text-shop-item"
            
          >
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </section>
  );
}