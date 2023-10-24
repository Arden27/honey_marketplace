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
    <footer className="[&>*]:page-wrapper bg-footer pt-lg">
      <div
        className="[&>*]:box-sm mb-sm grid w-full grid-cols-1  gap-sm sm:grid-cols-2 lg:grid-cols-4 
        [&_h2]:mb-2xs"
      >
        <ul>
          <h2>Menu</h2>
          <li>
            <Link href="/sklep">Sklep</Link>
          </li>
          <li>
            <Link href="/o-nas">O nas</Link>
          </li>
          <li>
            <Link href="/artykuly">Artykuły</Link>
          </li>

          {/* <li>
            <Link href="/matki">Matki</Link>
          </li> */}
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
          <li>
            <Link href="/kontakt">Współpraca</Link>
          </li>
        </ul>

        <ul>
          <h2>Moje konto</h2>
          <li>
            <Link href="/konto/zamowienia">Zamówienia</Link>
          </li>
          {/* <li>
            <Link href="/konto/opinie">Opinie</Link>
          </li> */}
          <li>
            <Link href="/konto/ustawienia">Ustawienia</Link>
          </li>
          <li>
            <button>Wyloguj się</button>
          </li>
        </ul>

        <div>
          <h2>Dane pasieki</h2>
          <address className="not-italic">
            Maciej Brydak
            <br />
            Olszyny 26
            <br />
            07-430 Myszyniec
          </address>
          Nr weterynaryjny: 12349329
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[auto,auto] [&>*]:mb-sm [&>*]:flex [&>*]:items-center">
        <ul className="[&_a]:btn-icon flex-wrap sm:col-start-2 sm:!justify-end sm:text-right [&_a>*]:h-[25px] [&_a>*]:w-[25px] [&_a]:ml-3xs [&>*]:hover:[&_a]:stroke-footer [&>*]:focus:[&_a]:stroke-footer">
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

        <div className="col-span-full rounded-[3rem] border-2 border-transparent px-2xs sm:col-span-1 sm:col-start-1 sm:row-start-1 ">
          <Link href="/" className="font-btn text-sm uppercase ">
            Copyright &copy; 2023 Dobry Bartnik
          </Link>
        </div>
      </div>
    </footer>
  );
}
