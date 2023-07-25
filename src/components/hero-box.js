import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroBox() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden rounded-[3rem]">
      <Image
        className="h-full w-full object-cover object-left-bottom"
        src="/img/home/hero.png"
        width={500}
        height={500}
        alt="Nasze nowości"
      />

      <Link className="absolute bottom-0 m-gap" href="/sklep/promocje">
        Przejdź do sklepu
      </Link>
    </section>
  );
}
