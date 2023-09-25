import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HowToBox() {
  return (
    <section className="relative flex h-[40svh] items-center justify-center overflow-hidden rounded-[1.5rem] sm:h-[calc(100svh-3*theme(spacing.3xl)-theme(spacing.md))] [&>*]:text-center">
      <Image
        className="top-0 h-full w-full object-cover object-left-bottom"
        src="/img/logo.png"
        width={500}
        height={500}
        alt="Prawdziwy miód"
      />

      <h2 className="absolute p-sm">
        Jak poznać <strong>prawdziwy</strong> miód?
      </h2>

      <Link
        className="btn-lg absolute  bottom-sm bg-bg 
        hover:text-bg"
        href="/sklep"
      >
        Sprawdź już dziś!
      </Link>
    </section>
  );
}
