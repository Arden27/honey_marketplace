import React from "react";
import Image from "next/image";
import Link from "next/link";

import NavBar from "../components/header/nav-bar";
import CartBar from "../components/header/cart-bar";
import ShopMenu from "../components/header/shop-menu";

export default function Header() {
  return (
    <header className="header">
      <NavBar />

      <div className="header-bar">
        <div className="page-wrapper header-bar-wrapper">
          <div className="header-bar__1 "></div>

          <div className="logo">
            <div className="logo__shadow"></div>

            <Link className="logo__link" href="/">
              <Image
                className="logo__img"
                src="/img/logo.png"
                width={80}
                height={80}
                alt="Logo pasieki Kurpiowski Bartnik"
              />
            </Link>
          </div>

          <div className="header-bar__2">
            <button className="button header-bar__2__item">
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
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            <button className="button header-bar__2__item">
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
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              </svg>
            </button>

            <CartBar />
          </div>
        </div>
      </div>

      <ShopMenu />
    </header>
  );
}
