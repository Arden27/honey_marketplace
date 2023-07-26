import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroBox() {
  return (
    <section className="box relative flex items-center justify-center ">
      <Image
        className="absolute top-0 h-full w-full object-cover object-left-bottom"
        src="/img/home/hero.png"
        width={500}
        height={500}
        alt="Nasze nowości"
      />

      <Link
        className="btn-lg btn-border absolute bottom-0 m-gap bg-bg 
        hover:text-bg"
        href="/sklep"
      >
        Przejdź do sklepu
      </Link>
    </section>
  );
}
