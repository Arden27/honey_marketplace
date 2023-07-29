import React from "react";
import Link from "next/link";
import Image from "next/image";

import Nav from "./nav";
import Logo from "./logo";
import UserBar from "@/components/user-bar";
import SearchBar from "@/components/search-bar";
// import CartBar from "@/components/cart-bar";

import dynamic from "next/dynamic";

const CartBar = dynamic(() => import("@/components/cart-bar"), { ssr: false });

export default function Header() {
  return (
    <header className="sticky top-0 z-10 mb-2xl grid h-header-sm w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] bg-header md:h-header-lg">
      <Nav />

      <Logo />

      <div className="m-auto w-[calc(100%-2*theme(spacing.md))] ">
        <div
          className=" flex h-3xl items-center justify-end
        md:h-[calc(theme(spacing.3xl)+theme(spacing.sm))]"
        >
          <SearchBar />

          <UserBar />

          <CartBar />
        </div>
      </div>
    </header>
  );
}
