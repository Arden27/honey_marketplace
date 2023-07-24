import React from "react";
import Link from "next/link";

import CartBar from "../components/cart-bar";
import SearchBar from "../components/search-bar";
import UserBar from "../components/user-bar";

export default function Nav2() {
  return (
    <div className="w-100 relative">
      <div
        className=" flex h-3xl items-center justify-end
        md:h-[calc(theme(spacing.3xl)+theme(spacing.s))]"
      >
        <SearchBar />

        <UserBar />

        <CartBar />
      </div>
    </div>
  );
}
