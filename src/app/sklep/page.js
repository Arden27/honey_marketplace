"use client"

import Link from "next/link";

import ShopMenu from "@/components/box/shop-menu";
import SortItemsBtn from "@/components/btn/sort-items-btn";
import Pagination from "@/components/btn/pagination";

import BottomBox from "@/components/box/bottom-box";

import { useState, useEffect } from "react";

// import DB from "@/components/db";

import dynamic from "next/dynamic";

const Items = dynamic(() => import("@/components/items"), {
  ssr: false,
});

// export const metadata = {
//   title: "Sklep - Kurpiowski Bartnik",
//   description: "OPIS",
//   keywords: "TAGI",
// };

export default function Shop() {
  const [sortType, setSortType] = useState('A-Z');

  const handleSort = (type) => {
    setSortType(type);
  };

  return (
    <main>
      <ShopMenu />
      <section
        className="page-wrapper mb-gap grid grid-cols-1  gap-gap overflow-hidden rounded-[3rem] bg-shop p-gap 
        sm:grid-cols-2 lg:grid-cols-3"
      >
        <div className="col-span-full flex items-center justify-between">
          <div>PANEL</div>
          <SortItemsBtn onSelect={handleSort} />
          
        </div>

        <Items sortType={sortType} />

        <Pagination />
      </section>
      <BottomBox />
    </main>
  );
}
