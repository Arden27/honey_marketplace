import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ShopMenu() {
  return (
    <div
      className="hidden w-100 mx-auto mt-header-bar-l md:grid h-shop-menu max-w-screen-xl grid-cols-5
      "
    >
      <div className="grid items-end justify-items-center">
        <Link className="" href="/sklep/promocje">
          <Image
            className="w-shop-menu-img"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Promocje"
          />
        </Link>
        <Link className="self-start" href="/sklep/promocje">
          <h2 className="">Promocje</h2>
        </Link>
      </div>

      <div className="grid items-end justify-items-center">
        <Link className="" href="/sklep/miody">
          <Image
            className="w-shop-menu-img"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Promocje"
          />
        </Link>
        <Link className="self-start" href="/sklep/miody">
          <h2 className="">Miody</h2>
        </Link>
      </div>

      <div className="grid items-end justify-items-center">
        <Link className="" href="/sklep/produkty-pszczele">
          <Image
            className="w-shop-menu-img"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Promocje"
          />
        </Link>
        <Link className="self-start" href="/sklep/produkty-pszczele">
          <h2 className="">Produkty pszczele</h2>
        </Link>
      </div>

      <div className="grid items-end justify-items-center">
        <Link className="" href="/sklep/swiece">
          <Image
            className="w-shop-menu-img"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Promocje"
          />
        </Link>
        <Link className="self-start" href="/sklep/swiece">
          <h2 className="">Świece</h2>
        </Link>
      </div>

      <div className="grid items-end justify-items-center">
        <Link className="" href="/sklep/zestawy">
          <Image
            className="w-shop-menu-img"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Promocje"
          />
        </Link>
        <Link className="self-start" href="/sklep/zestawy">
          <h2 className="">Zestawy</h2>
        </Link>
      </div>
    </div>
  );
}
