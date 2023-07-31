import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HowToBox() {
  return (
    <section className="grid min-h-[30rem] grid-rows-[1fr_auto] items-center justify-items-center overflow-hidden rounded-[3rem] bg-warning p-gap [&>*]:text-center ">
      <h2 className="max-w-[10ch] p-gap text-[5rem] font-bold">
        Załóż konto<br />i zyskaj<br />
        <bold className="text-[10rem]">5%</bold>
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
