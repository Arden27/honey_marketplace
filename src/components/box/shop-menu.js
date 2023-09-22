import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ShopMenu() {
  return (
    <section className="w-100 page-wrapper [&_img]:rh-shop-menu-img hidden h-shop-menu grid-cols-5 pb-2xl sm:grid [&>*]:grid [&>*]:justify-items-center [&_h2]:mt-xs [&_h2]:text-center [&_h2]:text-base [&_h2]:uppercase [&_img]:h-shop-menu-img [&_img]:w-shop-menu-img [&_img]:rounded-full ">
      <div>
        <Link href="/sklep?categoria=promocje" aria-hidden="true" tabIndex={-1}>
          <Image src="/img/logo.png" width={80} height={80} alt="Promocje" />
        </Link>
        <Link href="/sklep?categoria=promocje">
          <h2>Promocje</h2>
        </Link>
      </div>
      <div>
        <Link href="/sklep?categoria=miody" aria-hidden="true" tabIndex={-1}>
          <Image src="/img/logo.png" width={80} height={80} alt="Miody" />
        </Link>
        <Link href="/sklep?categoria=miody">
          <h2>Miody</h2>
        </Link>
      </div>
      <div>
        <Link href="/sklep?categoria=produkty-pszczele" aria-hidden="true" tabIndex={-1}>
          <Image
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Produkty Pszczele"
          />
        </Link>
        <Link href="/sklep?categoria=produkty-pszczele">
          <h2 className="max-w-[20rem]">Produkty Pszczele</h2>
        </Link>
      </div>
      <div>
        <Link href="/sklep?categoria=swiece" aria-hidden="true" tabIndex={-1}>
          <Image src="/img/logo.png" width={80} height={80} alt="Świece" />
        </Link>
        <Link href="/sklep?categoria=swiece">
          <h2>Świece</h2>
        </Link>
      </div>
      <div>
        <Link href="/sklep?categoria=zestawy" aria-hidden="true" tabIndex={-1}>
          <Image
            className="h-shop-menu-img w-shop-menu-img  rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Zestawy"
          />
        </Link>
        <Link href="/sklep?categoria=zestawy">
          <h2>Zestawy</h2>
        </Link>
      </div>
    </section>
  );
}
