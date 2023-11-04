import React from "react";


import Nav from "./Nav.js";
import BurgerMenu from "./menu/BurgerMenu.js";
import Logo from "./Logo.js";
import UserMenu from "@/layout/menu/UserMenu";
import SearchMenu from "@/layout/menu/SearchMenu";
// import CartMenu from "@/layout/Menu/CartMenu";

// ARTEM - Tego chyba tutaj nie powinno być, a w @/layout/Menu/CartMenu
import dynamic from "next/dynamic";
import PageWrapper from "@/components/PageWrapper";

const CartMenu = dynamic(() => import("@/layout/menu/CartMenu"), {
  ssr: false,
});

export default function Header() {
  return (
    <header className=" z-50 mb-[calc(theme(spacing.lg)+theme(spacing.xs)+theme(spacing.sm))] h-[calc(theme(spacing.2xl)+theme(spacing.sm))] w-full 330px:mb-0">
      <div className="fixed left-0 z-50 grid h-[calc(theme(spacing.2xl)+theme(spacing.sm))] w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]  px-2xs 315px:px-sm">
        <div className="fixed left-0 -z-10 h-[calc(theme(spacing.2xl)+theme(spacing.sm))] w-full bg-header shadow"></div>

        <div className=" top-0 flex h-[calc(theme(spacing.2xl)+theme(spacing.sm))] grid-cols-[]  items-center ">
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