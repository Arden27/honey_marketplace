import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PromoBox() {
  return (
    <section className=".min-h-[30rem] grid grid-rows-[1fr_auto] items-center justify-items-center overflow-hidden rounded-[2rem] bg-warning p-sm [&>*]:text-center ">
      <h2 className="p-sm text-3xl font-bold leading-none">
        Załóż konto
        <br />
        <span className="whitespace-nowrap">i zyskaj</span>
        <br />
        {/* MACIEK, trzeba zmienić czcionkę: */}
        <span className="text-[5rem] font-bold">5%</span>
        <br />
        rabatu
      </h2>

      <Link
        className="btn-lg 
         bottom-0 bg-bg 
        hover:text-bg"
        href="/rejestracja"
      >
        Zarejestruj się
      </Link>
    </section>
  );
}
