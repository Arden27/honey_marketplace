import React from "react";
import Link from "next/link";
import Image from "next/image";
import Btn from "@/components/btns/Btn";

export default function HeroBox() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden rounded-[2rem] [&>*]:text-center">
      <Image
        className="top-0 h-full w-full object-cover object-left-bottom "
        src="/img/logo.png"
        width={500}
        height={500}
        alt="Nasze nowości"
      />

      <h2 className="absolute p-sm">Zobacz nasze najnowsze zbiory!</h2>

      <Btn
        className="absolute bottom-sm border-transparent bg-bg"
        href="/sklep"
        type="lg"
        hoverColor="bg"
      >
        Przejdź do sklepu
      </Btn>
    </section>
  );
}
