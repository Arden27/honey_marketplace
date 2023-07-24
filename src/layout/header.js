import React from "react";
import Link from "next/link";
import Image from "next/image";

import Nav from "./nav";
import Nav2 from "./nav-2";
import ShopMenu from "./shop-menu";

export default function Header() {
  return (
    <header>
      <div
        className="fixed grid h-header-bar-sm w-full grid-cols-3 bg-header-bar-bg 
        md:h-header-bar-lg"
      >
        <Nav />

        <div className="relative flex justify-center">
          <div
            className="absolute -top-4
              h-[calc(theme(spacing.3xl)+3rem)] w-[calc(theme(spacing.3xl)+3rem)] rounded-full bg-header-bar-bg
              md:h-[calc(theme(spacing.3xl)+theme(spacing.sm)+3rem)] md:w-[calc(theme(spacing.3xl)+theme(spacing.sm)+3rem)]
            "
          ></div>

          <Link className="flex justify-center" href="/">
            <Image
              className="absolute h-[calc(theme(spacing.3xl)+1rem)] w-[calc(theme(spacing.3xl)+1rem)] rounded-full 
                md:h-[calc(theme(spacing.3xl)+theme(spacing.sm)+1rem)] md:w-[calc(theme(spacing.3xl)+theme(spacing.sm)+1rem)]"
              src="/img/logo.png"
              width={80}
              height={80}
              alt="Logo pasieki Kurpiowski Bartnik"
            />
          </Link>
        </div>

        <Nav2 />
      </div>

      <ShopMenu />
    </header>
  );
}
