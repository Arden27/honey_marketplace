import React from "react";
import Link from "next/link";

import Image from "next/image";
import FacebookIcon from "public/icons/facebook.svg";
import InstagramIcon from "public/icons/at.svg";
import YouTubeIcon from "public/icons/youtube.svg";
import SignalIcon from "public/icons/at.svg";
import TelegramIcon from "public/icons/at.svg";

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
          </address>
          Nr weterynaryjny 14156077
        </div>
      </div>

      <div className="page-wrapper gap-xs grid grid-cols-[auto,auto] [&>*]:flex [&>*]:h-xl [&>*]:items-center">
        <ul className=" [&_li>*]:btn-sm md:col-start-4 md:col-end-[-1] md:row-start-2 md:justify-end md:text-right [&_a>*]:h-[25px] [&_a>*]:w-[25px] [&_a>*]:stroke-text  [&_a>*]:stroke-2 [&_a]:mr-3xs md:[&_a]:ml-3xs md:[&_a]:mr-3xs [&>*]:hover:[&_a]:stroke-header">
          <li>
            <Link href="/">
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link href="/">
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link href="/">
              <YouTubeIcon />
            </Link>
          </li>
          <li>
            <Link href="/">
              <SignalIcon />
            </Link>
          </li>
          <li>
            <Link href="/">
              <TelegramIcon />
            </Link>
          </li>
        </ul>

        <p className="col-span-full h-xl md:col-start-1  px-sm md:col-end-4 md:row-start-2">
          Copyright &copy; 2023&nbsp;<Link href="/">Kurpiowski Bartnik</Link>.
        </p>
      </div>
    </footer>
  );
}
