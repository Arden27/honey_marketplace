import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed left-[calc(theme(spacing.sm)+theme(spacing.lg)+theme(spacing.xs)+theme(spacing.3xs))] z-20 lg:left-sm">
      <ul className="[&_a]:btn-sm flex [&>*]:mr-3xs [&>*]:hidden [&>*]:lg:flex hover:[&_a]:text-header focus:[&_a]:text-header">
        <li className="430px:!flex">
          <Link className=" !border-text" href="/sklep">
            Sklep
          </Link>
        </li>
        <li className="lg:!hidden xl:!flex">
          <Link href="/">Główna</Link>
        </li>
        <li>
          <Link href="/o-nas">O nas</Link>
        </li>
        <li>
          <Link href="/artykuly">Artykuły</Link>
        </li>
        <li className="!hidden">
          <Link href="/matki">Matki</Link>
        </li>

        <li>
          <Link href="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
