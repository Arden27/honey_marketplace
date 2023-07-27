import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroBox() {
  return (
    <section className="box relative flex h-[calc(60svh-theme(spacing.3xl)-theme(spacing.2xl)-2*theme(spacing.md))] min-h-[30rem] items-center justify-center md:h-[calc(100svh-4*theme(spacing.3xl)-theme(spacing.xl)-theme(spacing.2xs))]">
      <Image
        className="absolute top-0 h-full w-full object-cover object-left-bottom"
        src="/img/home/hero.png"
        width={500}
        height={500}
        alt="Nasze nowości"
      />

      <Link
        className="btn-lg absolute bottom-0 m-gap bg-bg 
        hover:text-bg"
        href="/sklep"
      >
        Przejdź do sklepu
      </Link>
    </section>
  );
}

// "calc(2 * theme('spacing.3xl') + theme('spacing.lg') + theme('spacing.sm'))",
