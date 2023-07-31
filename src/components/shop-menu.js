import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ShopMenu() {
  return (
    <section
      className="w-100 p m-auto mx-auto hidden h-shop-menu w-[calc(100%-2*theme(spacing.md))] max-w-screen-2xl grid-cols-5 pb-2xl md:grid
      "
    >
      <div className="grid justify-items-center ">
        <Link
          className=""
          href="/sklep/promocje"
          aria-hidden="true"
          tabIndex={-1}
        >
          <Image
            className="h-shop-menu-img w-shop-menu-img rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Promocje"
          />
        </Link>
        <Link className="mt-xs" href="/sklep/promocje">
          <h2 className="text-center text-base uppercase">Promocje</h2>
        </Link>
      </div>
      <div className="grid justify-items-center">
        <Link className="" href="/sklep/miody" aria-hidden="true" tabIndex={-1}>
          <Image
            className="h-shop-menu-img w-shop-menu-img rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Miody"
          />
        </Link>
        <Link className="mt-xs" href="/sklep/miody">
          <h2 className="max-w-[8ch] text-center text-base uppercase">Miody</h2>
        </Link>
      </div>
      <div className="grid justify-items-center">
        <Link
          className=""
          href="/sklep/produkty-pszczele"
          aria-hidden="true"
          tabIndex={-1}
        >
          <Image
            className="h-shop-menu-img w-shop-menu-img rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Produkty Pszczele"
          />
        </Link>
        <Link className="mt-xs" href="/sklep/produkty-pszczele">
          <h2 className="max-w-[8ch] text-center text-base uppercase">
            Produkty Pszczele
          </h2>
        </Link>
      </div>
      <div className="grid justify-items-center">
        <Link
          className=""
          href="/sklep/swiece"
          aria-hidden="true"
          tabIndex={-1}
        >
          <Image
            className="h-shop-menu-img w-shop-menu-img rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Świece"
          />
        </Link>
        <Link className="mt-xs" href="/sklep/swiece">
          <h2 className="max-w-[8ch] text-center text-base uppercase">
            Świece
          </h2>
        </Link>
      </div>
      <div className="grid justify-items-center">
        <Link
          className=""
          href="/sklep/zestawy"
          aria-hidden="true"
          tabIndex={-1}
        >
          <Image
            className="h-shop-menu-img w-shop-menu-img  rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Zestawy"
          />
        </Link>
        <Link className="mt-xs" href="/sklep/zestawy">
          <h2 className="max-w-[8ch] text-center text-base uppercase">
            Zestawy
          </h2>
        </Link>
      </div>
    </section>
  );
}
