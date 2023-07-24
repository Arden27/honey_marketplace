import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ShopMenu() {
  return (
    <div
      className="w-100  mx-auto mt-header-bar-lg hidden max-w-screen-xl grid-cols-5 md:grid
      "
    >
      <div className="my-2xl grid justify-items-center">
        <Link className="" href="/sklep/promocje">
          <Image
            className="h-shop-menu-img w-shop-menu-img  rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Promocje"
          />
        </Link>
        <Link className="mt-sm" href="/sklep/promocje">
          <h2 className="text-center text-base uppercase">Promocje</h2>
        </Link>
      </div>
      <div className="my-2xl grid justify-items-center">
        <Link className="" href="/sklep/miody">
          <Image
            className="h-shop-menu-img w-shop-menu-img rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Miody"
          />
        </Link>
        <Link className="mt-sm" href="/sklep/miody">
          <h2 className="text-center text-base uppercase">Miody</h2>
        </Link>
      </div>
      <div className="my-2xl grid justify-items-center">
        <Link className="" href="/sklep/produkty-pszczele">
          <Image
            className="h-shop-menu-img w-shop-menu-img rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Produkty Pszczele"
          />
        </Link>
        <Link className="mt-sm" href="/sklep/produkty-pszczele">
          <h2 className="text-center text-base uppercase max-w-min">Produkty Pszczele</h2>
        </Link>
      </div>
      <div className="my-2xl grid justify-items-center">
        <Link className="" href="/sklep/swiece">
          <Image
            className="h-shop-menu-img w-shop-menu-img rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Świece"
          />
        </Link>
        <Link className="mt-sm" href="/sklep/swiece">
          <h2 className="text-center text-base uppercase">Świece</h2>
        </Link>
      </div>
      <div className="my-2xl grid justify-items-center">
        <Link className="" href="/sklep/zestawy">
          <Image
            className="h-shop-menu-img w-shop-menu-img rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Zestawy"
          />
        </Link>
        <Link className="mt-sm" href="/sklep/zestawy">
          <h2 className="text-center text-base uppercase">Zestawy</h2>
        </Link>
      </div>
    </div>
  );
}
