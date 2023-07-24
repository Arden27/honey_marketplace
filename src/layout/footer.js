import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer-bg">
      <div
        className="w-100 mx-auto mb-gap mt-xl grid max-w-screen-xl grid-cols-2 justify-between gap-gap
        md:grid-cols-4"
      >
        <ul className="">
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

        <ul>
          <h2>Informacje</h2>
          <li>
            <Link href="/regulamin">Regulamin</Link>
          </li>
          <li>
            <Link href="/prywatnosc">Polityka prywatności</Link>
          </li>
          <li>
            <Link href="/dostawa">Dostawa</Link>
          </li>
          <li>
            <Link href="/reklamacje">Zwroty i reklamacje</Link>
          </li>
        </ul>

        <ul>
          <h2>Moje konto</h2>
          <li>
            <Link href="/zamowienia">Zamówienia</Link>
          </li>
          <li>
            <Link href="/opinie">Opinie</Link>
          </li>
          <li>
            <Link href="/ustawienia">Ustawienia</Link>
          </li>
          <li>
            <Link href="/">Wyloguj się</Link>
          </li>
        </ul>

        <div>
          <h2>Dane Pasieki</h2>
          <p>
            Stanisław Młynarczyk
            <br />
            Olszyny 26
            <br />
            07-430 Myszyniec
            <br />
            Nr weterynaryjny 14156077
            <br />
          </p>
        </div>

        <ul className="col-span-full">
          <li>
            <Link href="/">Fb</Link>
            <Link href="/">Ins</Link>
            <Link href="/">Sig</Link>
            <Link href="/">Tel</Link>
          </li>
        </ul>

        <p className="col-span-full">
          Copyright &copy; 2023 <Link href="/">Kurpiowski Bartnik</Link>.
          Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
