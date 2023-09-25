import React from "react";
import Link from "next/link";

export default function NoRegisterBox() {
  return (
    <section className="box-lg md:col-span-full xl:col-span-1 ">
      <h2>Zamówienie bez rejestracji</h2>
      <button className="btn-lg bottom-sm bg-bg hover:text-bg" href="/">
        Kontynuuj
      </button>
    </section>
  );
}
