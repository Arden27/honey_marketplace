import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-wrapper footer-wrapper">
        <div className="footer__item footer__item--menu">
          <h2>Menu</h2>
          <ul>
            <li>
              <Link  href="/sklep">
                Sklep
              </Link>
            </li>
            <li>
              <Link  href="/artykuly">
                Artykuły
              </Link>
            </li>
            <li>
              <Link  href="/o-nas">
                O nas
              </Link>
            </li>
            <li>
              <Link  href="/matki">
                Matki
              </Link>
            </li>
            <li>
              <Link  href="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__item footer__item--info">
          <h2>Informacje</h2>
          <ul>
            <li>
              <Link  href="/regulamin">
                Regulamin
              </Link>
            </li>
            <li>
              <Link  href="/prywatnosc">
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link  href="/dostawa">
                Dostawa
              </Link>
            </li>
            <li>
              <Link  href="/reklamacje">
                Zwroty i reklamacje
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__item footer__item--account">
          <h2>Moje konto</h2>
          <ul>
            <li>
              <Link  href="/zamowienia">
                Zamówienia
              </Link>
            </li>
            <li>
              <Link  href="/opinie">
                Opinie
              </Link>
            </li>
            <li>
              <Link  href="/ustawienia">
                Ustawienia
              </Link>
            </li>
            <li>
              <Link  href="/">
                Wyloguj się
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__item footer__item--data">
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
        <div className="footer__item footer__item--media-bar">
          <ul>
            <li>
              <Link  href="/">
                Fb
              </Link>
              <Link  href="/">
                Ins
              </Link>
              <Link  href="/">
                Sig
              </Link>
              <Link  href="/">
                Tel
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__item footer__item--copyrights">
          <p>
            Copyright &copy; 2023 <Link href="/">Kurpiowski Bartnik</Link>.
            Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
