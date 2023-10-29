"use client";

import PageWrapper from "@/components/page-wrapper";

import ShopMenu from "@/app/sklep/shop-menu";
import ShopSortBtn from "@/components/btn/shop-sort-btn";
import Pagination from "@/components/btn/pagination";
import BottomBox from "@/layout/bottom-box/bottom-box";
import Breadcrumb from "./Breadcrumb";

import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import dynamic from "next/dynamic";

const Items = dynamic(() => import("@/components/items"), {
  ssr: false,
});

// export const metadata = {
//   title: "Sklep - Dobry Bartnik",
//   description: "OPIS",
//   keywords: "TAGI",
// };

export default function Shop() {
  const pathname = usePathname();
  const searchParams = new URLSearchParams(useSearchParams());
  const category = searchParams.get("kategoria");

  const [sortType, setSortType] = useState("A-Z");

  const sortOptions = ['A-Z', 'Z-A', 'By price from lowest', 'By price from highest'];

  const handleSort = (type) => {
    setSortType(type);
  };

  return (
    <main>
      <ShopMenu />
      <PageWrapper>
        <section>
          <div className="box-lg flex flex-col">
            <div className="flex h-[calc(theme(spacing.lg)+theme(spacing.3xs))] items-center justify-between bg-red-600">
              <Breadcrumb
                // baseDomain={baseDomain}
                pathname={pathname}
                category={category}
                searchParams={searchParams}
              />
              <ShopSortBtn options={sortOptions} onSelect={handleSort} />
            </div>
            <div className="grid grid-cols-1 gap-sm sm:grid-cols-2 lg:grid-cols-3 ">
              <Items sortType={sortType} category={category} />
            </div>

            <Pagination />
          </div>
        </section>
      </PageWrapper>
      <BottomBox />
    </main>
  );
}
