import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PromoBox() {
  return (
    <section className="grid min-h-[30rem] grid-rows-[1fr_auto] items-center justify-items-center overflow-hidden rounded-[2rem] bg-warning p-sm [&>*]:text-center ">
      <h2 className="p-sm text-[5rem] font-bold">
        Załóż konto
        <br /> i zyskaj
        <br />
        <span className="text-[10rem] leading-tight">5%</span>
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
