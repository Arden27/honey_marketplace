import React from "react";

import Nav from "./nav";
import BurgerBar from "./bar/burger-bar";
import Logo from "./logo";
import UserBar from "@/layout/bar/user-bar";
import SearchBar from "@/layout/bar/search-bar";
// import CartBar from "@/layout/bar/cart-bar";

// ARTEM - Tego chyba tutaj nie powinno być, a w @/layout/bar/cart-bar
import dynamic from "next/dynamic";

const CartBar = dynamic(() => import("@/layout/bar/cart-bar"), {
  ssr: false,
});

export default function Header() {
  return (
    <header className="z-50 mb-[calc(theme(spacing.3xl))] h-[calc(theme(spacing.2xl)+theme(spacing.2xs)+theme(spacing.3xs))] w-full 330px:mb-lg">
      <div className="mx-sm grid h-[calc(theme(spacing.2xl)+theme(spacing.sm))] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <div className="fixed left-0 -z-10 h-[calc(theme(spacing.2xl)+theme(spacing.sm))] w-full bg-header shadow"></div>

        <div className="flex h-[calc(theme(spacing.2xl)+theme(spacing.sm))] items-center justify-start [&>button]:mr-3xs">
          <BurgerBar />
          <Nav />
        </div>

        <Logo />

        <div className="flex h-[calc(theme(spacing.2xl)+theme(spacing.sm))] items-center justify-end [&>button]:ml-3xs">
          <SearchBar />

          <UserBar />

          <CartBar />
        </div>
      </div>
    </header>
  );
}
