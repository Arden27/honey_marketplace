import Link from "next/link";

import ShopMenu from "@/components/shop-menu";
import FilterItemsBtn from "@/components/filter-items-btn";
import Pagination from "@/components/pagination";

import BottomBox from "@/components/bottom-box";

import DB from "@/components/db";

export const metadata = {
  title: "Sklep - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Shop() {
  return (
    <main className="">
      <ShopMenu />
      <section
        className="mx-auto mb-gap grid w-[calc(100%-2*theme(spacing.md))] max-w-screen-2xl grid-cols-1  gap-gap overflow-hidden rounded-[3rem] bg-shop p-gap
        md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div className="col-span-full flex items-center justify-between">
          <div>PANEL</div>
          <FilterItemsBtn />
        </div>

				<DB />

        <Pagination />
      </section>
    </main>
  );
}
