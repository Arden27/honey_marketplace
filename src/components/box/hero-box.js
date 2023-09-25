import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroBox() {
  return (
    <section className="relative flex h-[calc(60svh-theme(spacing.3xl)-theme(spacing.xl))] items-center justify-center overflow-hidden rounded-[1.5rem] sm:h-[calc(100svh-3*theme(spacing.3xl)-theme(spacing.md))] [&>*]:text-center">
      <Image
        className="top-0 h-full w-full object-cover object-left-bottom"
        src="/img/logo.png"
        width={500}
        height={500}
        alt="Nasze nowości"
      />

      <h2 className="absolute m-sm">Zobacz nasze najnowsze zbiory!</h2>

      <Link
        className="btn-lg absolute m-sm bg-bg hover:text-bg"
        href="/sklep"
      >
        Przejdź do sklepu
      </Link>
    </section>
  );
}
