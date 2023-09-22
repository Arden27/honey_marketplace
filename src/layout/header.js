import React from "react";
import Link from "next/link";
import Image from "next/image";

import Nav from "./nav";
import BurgerBar from "../components/bar/burger-bar";
import Logo from "./logo";
import UserBar from "@/components/bar/user-bar";
import SearchBar from "@/components/bar/search-bar";
// import CartBar from "@/components/cart-bar";

import dynamic from "next/dynamic";

const CartBar = dynamic(() => import("@/components/bar/cart-bar"), {
  ssr: false,
});

export default function Header() {
  return (
    <header className=" fixed z-50 h-[calc(theme(spacing.2xl)+theme(spacing.sm))] w-full">
      <div className="mx-sm grid h-[calc(theme(spacing.2xl)+theme(spacing.sm))] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <div className="fixed left-0 -z-10 h-[calc(theme(spacing.2xl)+theme(spacing.sm))] w-full bg-header shadow"></div>

        <div className="flex  h-[calc(theme(spacing.2xl)+theme(spacing.sm))]  items-center justify-start [&>button]:mr-3xs">
          <BurgerBar />
          <Nav />
        </div>

        <Logo />

        <div className="flex h-[calc(theme(spacing.2xl)+theme(spacing.sm))]  items-center justify-end [&>button]:ml-3xs">
          <SearchBar />

          <UserBar />

          <CartBar />
        </div>
      </div>
    </header>
  );
}
