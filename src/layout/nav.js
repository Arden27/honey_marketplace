import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div
      className="flex h-3xl items-center
        md:h-[calc(theme(spacing.3xl)+theme(spacing.sm))]"
    >
      <button className="md:hidden">
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <Link
        className="font-btn text-m 
            md:hidden"
        href="/sklep"
      >
        Sklep
      </Link>

      <nav
        className="!md:[all:unset] hidden fixed top-header-bar-sm  h-full w-3/5 bg-red-900

          md:fixed md:top-0 md:flex md:h-header-bar-lg md:items-center md:bg-transparent"
      >
        <ul className="md:flex">
          <li className="">
            <Link className="" href="/sklep">
              Sklep
            </Link>

            <ul className="md:hidden">
              <li className="">
                <Link className="" href="/sklep/promocje">
                  Promocje
                </Link>
              </li>
              <li className="">
                <Link className="" href="/sklep/miody">
                  Miody
                </Link>
              </li>
              <li className="">
                <Link className="" href="/sklep/produkty-pszczele">
                  Produkty pszczele
                </Link>
              </li>
              <li className="">
                <Link className="" href="/sklep/swiece">
                  Świece
                </Link>
              </li>
              <li className="">
                <Link className="" href="/sklep/zestawy">
                  Zestawy
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav__list__item">
            <Link className="button nav__list__item--btn" href="/o-nas">
              O nas
            </Link>
          </li>
          <li className="nav__list__item">
            <Link className="button nav__list__item--btn" href="/artykuly">
              Artykuły
            </Link>
          </li>
          <li className="nav__list__item">
            <Link className="button nav__list__item--btn" href="/matki">
              Matki
            </Link>
          </li>
          <li className="nav__list__item">
            <Link className="button nav__list__item--btn" href="/kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
