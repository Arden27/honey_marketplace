import React from "react";


import Nav from "./Nav.js";
import BurgerMenu from "./menu/burgerMenu/BurgerMenu.js";
import Logo from "./Logo.js";
import UserMenu from "@/app/_layout/menu/userMenu/UserMenu.js";
import SearchMenu from "@/app/_layout/menu/searchMenu/SearchMenu.js";
// import CartMenu from "@/layout/Menu/CartMenu";

// ARTEM - Tego chyba tutaj nie powinno być, a w @/layout/Menu/CartMenu
import dynamic from "next/dynamic";
import PageWrapper from "@/app/_layout/PageWrapper.js";

const CartMenu = dynamic(() => import("@/app/_layout/menu/cartMenu/CartMenu.js"), {
  ssr: false,
});

export default function Header() {
  return (
    <header className=" z-50 mb-[calc(theme(spacing.lg)+theme(spacing.xs)+theme(spacing.sm))] h-[calc(theme(spacing.3xl)+theme(spacing.sm))] w-full 330px:mb-0">
      <div className="fixed left-0 z-50 grid h-[calc(theme(spacing.2xl)+theme(spacing.sm))] w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]  px-2xs 315px:px-sm">
        <div className="fixed left-0 -z-10 h-[calc(theme(spacing.2xl)+theme(spacing.sm))] w-full bg-header shadow"></div>

        <div className=" top-0 flex h-[calc(theme(spacing.2xl)+theme(spacing.sm))]  items-center ">
          <BurgerMenu />
          <Nav />
        </div>

        <Logo />

        <div className="flex h-[calc(theme(spacing.2xl)+theme(spacing.sm))] items-center justify-end">
          <SearchMenu />

          <UserMenu />

          <CartMenu />
        </div>
      </div>
    </header>
  );
}
