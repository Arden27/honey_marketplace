"use client";
import Link from "next/link";

import ShopMenu from "@/components/box/shop-menu";
import ShopSortBtn from "@/components/btn/shop-sort-btn";
import ShopPagination from "@/components/btn/shop-pagination";
import BottomBox from "@/components/box/bottom-box";
// import ShopBreadcrumb from "@/components/btn/shop-breadcrumb";

import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import dynamic from "next/dynamic";

const Items = dynamic(() => import("@/components/items"), {
  ssr: false,
});

// ARTEM - Zrób proszę z tego oddzielny komponent shop-breadcrumb.js zmień nazwę zmiennej na ShopBreadcrumb i wrzuć do components/btn:

const Breadcrumb = ({ pathname, category, searchParams }) => {
  return (
    <div className="w-full ">
      <Link className="hover:underline" href="">
        {/* {baseDomain} */}
      </Link>
      <span>/</span>
      {pathname === "sklep" && !category ? (
        "sklep"
      ) : (
        <Link className="hover:underline" href="sklep">
          sklep
        </Link>
      )}
      {category && (
        <>
          <span>/</span>
          {category === searchParams.get("kategoria") ? (
            category
          ) : (
            <Link
              className="hover:underline"
              href={`sklep?kategoria=${category}`}
            >
              {category}
            </Link>
          )}
        </>
      )}
    </div>
  );
};



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

  // let baseDomain = "DobryBartnik.pl";
  let displayPath = pathname;

  // append the category if it exists
  if (category) {
    displayPath += "/" + category;
  }

  const handleSort = (type) => {
    setSortType(type);
  };

  return (
    <main>
      <ShopMenu />
      <section className="page-wrapper mb-sm ">
        <div className="box-lg bg-bg2 flex flex-col">
          <div className="flex h-[calc(theme(spacing.lg)+theme(spacing.3xs))] items-center justify-between bg-red-600">
            <Breadcrumb
              // baseDomain={baseDomain}
              pathname={pathname}
              category={category}
              searchParams={searchParams}
            />
            <ShopSortBtn onSelect={handleSort} />
          </div>
          <div className="grid grid-cols-1 gap-sm sm:grid-cols-2 lg:grid-cols-3 ">
            <Items sortType={sortType} category={category} />
          </div>

          <ShopPagination />
        </div>
      </section>
      <BottomBox />
    </main>
  );
}
