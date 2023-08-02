import React from "react";
import Link from "next/link";

export default function RegisterBox() {
  return (
    <section className="box-lg">
      <h2>Zarejestruj się</h2>
      <Link
        className="btn-lg bottom-gap bg-bg hover:text-bg"
        href="/rejestracja"
      >
        Zarejestruj się
      </Link>
    </section>
  );
}
