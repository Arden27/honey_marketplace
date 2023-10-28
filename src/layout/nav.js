import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed left-[calc(theme(spacing.sm)+theme(spacing.lg)+theme(spacing.xs)+theme(spacing.3xs))] z-20 lg:left-sm">
      <ul className="flex">
        <li className="mr-3xs hidden 380px:!flex lg:flex">
          <Link
            href="/sklep"
            className=" btn-sm !border-text hover:text-header focus:text-header"
          >
            Sklep
          </Link>
        </li>
        <li className="mr-3xs hidden lg:!hidden xl:!flex">
          <Link
            href="/"
            className=" btn-sm hover:text-header focus:text-header"
          >
            Główna
          </Link>
        </li>
        <li className="mr-3xs hidden lg:flex ">
          <Link
            href="/artykuly/o-nas"
            className=" btn-sm hover:text-header focus:text-header"
          >
            O nas
          </Link>
        </li>
        <li className="mr-3xs hidden lg:flex ">
          <Link
            href="/artykuly"
            className=" btn-sm hover:text-header focus:text-header"
          >
            Artykuły
          </Link>
        </li>
        <li className="mr-3xs hidden lg:flex ">
          <Link
            href="/kontakt"
            className=" btn-sm hover:text-header focus:text-header"
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
