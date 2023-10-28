import React from "react";
import Link from "next/link";

export default function RegisterBox() {
  return (
    <section className="box-sm">
      <h2>Zarejestruj się</h2>
      <Link
        className="btn-lg bottom-sm bg-bg2 hover:text-bg self-end"
        href="/rejestracja"
      >
        Zarejestruj się
      </Link>
    </section>
  );
}
