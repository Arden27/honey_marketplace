import Link from "next/link";

import ShopMenu from "@/components/box/shop-menu";
import FilterItemsBtn from "@/components/btn/filter-items-btn";
import Pagination from "@/components/btn/pagination";

import BottomBox from "@/components/box/bottom-box";

import DB from "@/components/db";

export const metadata = {
  title: "Sklep - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Shop() {
  return (
    <main>
      <ShopMenu />
      <section
        className="page-wrapper mb-gap grid  grid-cols-1  gap-gap overflow-hidden rounded-[3rem] bg-shop p-gap 
        sm:grid-cols-2 lg:grid-cols-3"
      >
        <div className="col-span-full flex items-center justify-between">
          <div>PANEL</div>
          <FilterItemsBtn />
        </div>

        <DB />

        <Pagination />
      </section>
      <BottomBox />
    </main>
  );
}
