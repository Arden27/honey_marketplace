import React from "react";

import Nav from "./Nav";
import BurgerBar from "./bars/BurgerBar";
import Logo from "./Logo";
import UserBar from "@/layout/bars/UserBar";
import SearchBar from "@/layout/bars/SearchBar";
// import CartBar from "@/layout/bar/cart-bar";

// ARTEM - Tego chyba tutaj nie powinno być, a w @/layout/bar/cart-bar
import dynamic from "next/dynamic";

const CartBar = dynamic(() => import("@/layout/bars/CartBar"), {
  ssr: false,
});

export default function Header() {
  return (
    <header className="z-50 mb-[calc(theme(spacing.lg)+theme(spacing.xs)+theme(spacing.sm))] w-full 330px:mb-0">
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
