import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="[&>*]:page-wrapper bg-footer [&>*]:mb-gap">
      <div
        className="mt-xl grid grid-cols-2  justify-between gap-gap md:grid-cols-4
        [&_h2]:mb-2xs"
      >
        <ul className="box-sm bg-footer-item">
          <h2>Menu</h2>
          <li>
            <Link href="/sklep">Sklep</Link>
          </li>
          <li>
            <Link href="/artykuly">Artykuły</Link>
          </li>
          <li>
            <Link href="/o-nas">O nas</Link>
          </li>
          <li>
            <Link href="/matki">Matki</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>

        <ul className="box-sm bg-footer-item">
          <h2>Informacje</h2>
          <li>
            <Link href="/regulamin">Regulamin</Link>
          </li>
          <li>
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          </li>
          <li>
            <Link href="/dostawa">Dostawa</Link>
          </li>
          <li>
            <Link href="/zwroty-i-reklamacje">Zwroty i reklamacje</Link>
          </li>
          <li>
            <Link href="/kontakt">Współpraca</Link>
          </li>
        </ul>

        <ul className="box-sm bg-footer-item">
          <h2>Moje konto</h2>
          <li>
            <Link href="/konto/zamowienia">Zamówienia</Link>
          </li>
          <li>
            <Link href="/konto/opinie">Opinie</Link>
          </li>
          <li>
            <Link href="/konto/ustawienia">Ustawienia</Link>
          </li>
          <li>
            <button>Wyloguj się</button>
          </li>
        </ul>

        <div className="box-sm bg-footer-item">
          <h2>Dane Pasieki</h2>
          <address>
            Stanisław Młynarczyk
            <br />
            Olszyny 26
            <br />
            07-430 Myszyniec
            <br />
            Nr weterynaryjny 14156077
            <br />
          </address>
        </div>
      </div>

      <div className="page-wrapper grid grid-cols-[auto,auto] [&>*]:flex [&>*]:h-xl [&>*]:items-center">
        <ul className=" [&_li]:btn-sm md:col-start-4 md:col-end-[-1] md:row-start-2 md:justify-end md:text-right [&_a]:mr-3xs  md:[&_a]:ml-3xs md:[&_a]:mr-3xs hover:[&_li]:[&_*]:bg-red-400">
          <li>
            <Link href="/">Fb</Link>
          </li>
          <li>
            <Link href="/">Ins</Link>
          </li>
          <li>
            <Link className="" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="feather feather-youtube"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/">Sig</Link>
          </li>
          <li>
            <Link href="/">Tel</Link>
          </li>
        </ul>

        <p className="col-span-full h-xl md:col-start-1  md:col-end-4 md:row-start-2">
          Copyright &copy; 2023 <Link href="/">Kurpiowski Bartnik</Link>.
        </p>
      </div>
    </footer>
  );
}
