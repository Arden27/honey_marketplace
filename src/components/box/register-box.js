import React from "react";
import Link from "next/link";

export default function RegisterBox() {
  return (
    <section className="box-lg bg-bg2">
      <h2>Zarejestruj się</h2>
      <Link
        className="btn-lg bottom-sm bg-bg hover:text-bg self-end"
        href="/rejestracja"
      >
        Zarejestruj się
      </Link>
    </section>
  );
}
