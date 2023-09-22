import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroBox() {
  return (
    <section className="relative flex h-[calc(60svh-theme(spacing.3xl)-theme(spacing.2xl)-2*theme(spacing.md))] min-h-[30rem] items-center justify-center overflow-hidden rounded-3xl
    sm:h-[calc(60svh-3*theme(spacing.3xl)-theme(spacing.lg)-theme(spacing.xs))]
    md:h-[calc(100svh-4*theme(spacing.3xl)-theme(spacing.xl)-theme(spacing.2xs))] [&>*]:text-center">
      <Image
        className="top-0 h-full w-full object-cover object-left-bottom"
        src="/img/logo.png"
        width={500}
        height={500}
        alt="Nasze nowości"
      />

      <h2 className="absolute">Zobacz nasze najnowsze zbiory!</h2>

      <Link
        className="btn-lg absolute bottom-gap bg-bg 
        hover:text-bg"
        href="/sklep"
      >
        Przejdź do sklepu
      </Link>
    </section>
  );
}
