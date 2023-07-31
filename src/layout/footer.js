import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div
        className="page-wrapper mb-gap gap-gap mt-xl grid  grid-cols-2 justify-between 
        md:grid-cols-4"
      >
        <ul >
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
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          </li>
          <li>
            <Link href="/dostawa">Dostawa</Link>
          </li>
          <li>
            <Link href="/zwroty-i-reklamacje">Zwroty i reklamacje</Link>
          </li>
        </ul>

        <ul>
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

        <div>
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

        <ul className=" grid  md:col-start-4 md:col-end-[-1]  md:row-start-2 md:text-right">
          <li>
            <Link href="/">Fb</Link>
            <Link href="/">Ins</Link>
            <Link href="/">Sig</Link>
            <Link href="/">Tel</Link>
          </li>
        </ul>

        <p className="col-span-full md:col-start-1  md:col-end-4 md:row-start-2">
          Copyright &copy; 2023 <Link href="/">Kurpiowski Bartnik</Link>.
          Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
