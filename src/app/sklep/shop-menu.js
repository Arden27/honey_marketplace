import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ShopMenu() {
  return (
    <section
      className=" page-wrapper my-sm hidden h-[calc(theme(spacing.3xl)+theme(spacing.md))] grid-cols-4 sm:grid
      [&>*]:grid [&>*]:justify-items-center
      [&_ch2]:h-xl [&_h2]:pt-sm [&_h2]:text-center [&_h2]:text-md [&_h2]:uppercase
      [&_img]:h-2xl [&_img]:w-2xl [&_img]:rounded-full "
    >
      <div>
        <Link href="/sklep?kategoria=promocje" aria-hidden="true" tabIndex={-1}>
          <Image src="/img/logo.png" width={80} height={80} alt="Promocje" />
        </Link>
        <Link href="/sklep?kategoria=promocje">
          <h2>Promocje</h2>
        </Link>
      </div>
      <div>
        <Link href="/sklep?kategoria=miody" aria-hidden="true" tabIndex={-1}>
          <Image src="/img/logo.png" width={80} height={80} alt="Miody" />
        </Link>
        <Link href="/sklep?kategoria=miody">
          <h2>Miody</h2>
        </Link>
      </div>
      <div>
        <Link
          href="/sklep?kategoria=produkty-pszczele"
          aria-hidden="true"
          tabIndex={-1}
        >
          <Image
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Produkty Pszczele"
          />
        </Link>
        <Link href="/sklep?kategoria=produkty-pszczele">
          <h2 className="">Produkty Pszczele</h2>
        </Link>
      </div>
      <div className="!hidden">
        <Link
          href="/sklep?kategoria=miody-pitne"
          aria-hidden="true"
          tabIndex={-1}
        >
          <Image src="/img/logo.png" width={80} height={80} alt="Miody Pitne" />
        </Link>
        <Link href="/sklep?kategoria=miody-pitne">
          <h2 className="max-w-[10rem]">Miody Pitne</h2>
        </Link>
      </div>
      <div className="!hidden">
        <Link href="/sklep?kategoria=swiece" aria-hidden="true" tabIndex={-1}>
          <Image src="/img/logo.png" width={80} height={80} alt="Świece" />
        </Link>
        <Link href="/sklep?kategoria=swiece">
          <h2>Świece</h2>
        </Link>
      </div>
      <div>
        <Link href="/sklep?kategoria=zestawy" aria-hidden="true" tabIndex={-1}>
          <Image
            className="h-shop-menu-img w-shop-menu-img  rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Zestawy"
          />
        </Link>
        <Link href="/sklep?kategoria=zestawy">
          <h2>Zestawy</h2>
        </Link>
      </div>
    </section>
  );
}
