import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ShopMenu() {
  return (
    <section className="mb-sm hidden h-[calc(theme(spacing.3xl)+theme(spacing.md))] grid-cols-4 sm:grid">
      <div className="grid justify-items-center">
        <Link href="/sklep?kategoria=promocje" aria-hidden="true" tabIndex={-1}>
          <Image
            className="h-2xl w-2xl rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Promocje"
          />
        </Link>
        <Link href="/sklep?kategoria=promocje">
          <h2 className="pt-sm text-center text-md uppercase">Promocje</h2>
        </Link>
      </div>
      <div className="grid justify-items-center">
        <Link href="/sklep?kategoria=miody" aria-hidden="true" tabIndex={-1}>
          <Image
            className="h-2xl w-2xl rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Miody"
          />
        </Link>
        <Link href="/sklep?kategoria=miody">
          <h2 className="pt-sm text-center text-md uppercase">Miody</h2>
        </Link>
      </div>
      <div className="grid justify-items-center">
        <Link
          href="/sklep?kategoria=produkty-pszczele"
          aria-hidden="true"
          tabIndex={-1}
        >
          <Image
            className="h-2xl w-2xl rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Produkty Pszczele"
          />
        </Link>
        <Link href="/sklep?kategoria=produkty-pszczele">
          <h2 className="pt-sm text-center text-md uppercase">
            Produkty Pszczele
          </h2>
        </Link>
      </div>
      <div className="hidden justify-items-center">
        <Link
          href="/sklep?kategoria=miody-pitne"
          aria-hidden="true"
          tabIndex={-1}
        >
          <Image
            className="h-2xl w-2xl rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Miody Pitne"
          />
        </Link>
        <Link href="/sklep?kategoria=miody-pitne">
          <h2 className="pt-sm text-center text-md uppercase">Miody Pitne</h2>
        </Link>
      </div>
      <div className="hidden justify-items-center">
        <Link href="/sklep?kategoria=swiece" aria-hidden="true" tabIndex={-1}>
          <Image
            className="h-2xl w-2xl rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Świece"
          />
        </Link>
        <Link href="/sklep?kategoria=swiece">
          <h2 className="pt-sm text-center text-md uppercase">Świece</h2>
        </Link>
      </div>
      <div className="grid justify-items-center">
        <Link href="/sklep?kategoria=zestawy" aria-hidden="true" tabIndex={-1}>
          <Image
            className="h-2xl w-2xl rounded-full"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="Zestawy"
          />
        </Link>
        <Link href="/sklep?kategoria=zestawy">
          <h2 className="pt-sm text-center text-md uppercase">Zestawy</h2>
        </Link>
      </div>
    </section>
  );
}
