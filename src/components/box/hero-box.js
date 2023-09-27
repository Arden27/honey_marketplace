import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroBox() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden rounded-[2rem] [&>*]:text-center">
      <Image
        className="top-0 h-full w-full object-cover object-left-bottom"
        src="/img/logo.png"
        width={500}
        height={500}
        alt="Nasze nowości"
      />

      <h2 className="absolute m-sm">Zobacz nasze najnowsze zbiory!</h2>

      <Link className="btn-lg absolute m-sm bg-bg hover:text-bg" href="/sklep">
        Przejdź do sklepu
      </Link>
    </section>
  );
}
