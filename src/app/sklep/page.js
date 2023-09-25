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

const Breadcrumb = ({ baseDomain, pathname, category, searchParams }) => {
  return (
    <div>
      <Link className="hover:underline" href="/">
        {baseDomain}
      </Link>
      <span>/</span>
      {pathname === "/sklep" && !category ? (
        "sklep"
      ) : (
        <Link className="hover:underline" href="/sklep">
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
              href={`/sklep?kategoria=${category}`}
            >
              {category}
            </Link>
          )}
        </>
      )}
    </div>
  );
};

// ARTEM - Czemu wykomentowane metadane? Jak to teraz działa?:

// export const metadata = {
//   title: "Sklep - Kurpiowski Bartnik",
//   description: "OPIS",
//   keywords: "TAGI",
// };

// ARTEM - "Czemu wykomentowane metadane? Jak to teraz działa?:"

export default function Shop() {
  const pathname = usePathname();
  const searchParams = new URLSearchParams(useSearchParams());
  const category = searchParams.get("kategoria");

  const [sortType, setSortType] = useState("A-Z");

  let baseDomain = "KurpiowskiBartnik.pl";
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
      <section className="page-wrapper mb-sm">
        <div
          className="box-lg grid grid-cols-1
        sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="col-span-full flex items-center justify-between">
            <Breadcrumb
              baseDomain={baseDomain}
              pathname={pathname}
              category={category}
              searchParams={searchParams}
            />
            <ShopSortBtn onSelect={handleSort} />
          </div>

          <Items sortType={sortType} category={category} />

          <ShopPagination />
        </div>
      </section>
      <BottomBox />
    </main>
  );
}
