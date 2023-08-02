import React from "react";
import Link from "next/link";

export default function NoRegisterBox() {
  return (
    <section className="box-lg">
      <h2>Zamówienie bez rejestracji</h2>
      <button className="btn-lg bottom-gap bg-bg hover:text-bg" href="/">
        Kontynuuj
      </button>
    </section>
  );
}
