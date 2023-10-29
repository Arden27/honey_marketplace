"use client";
import Link from "next/link";

import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";

import ShopMenu from "@/app/sklep/shop-menu";
// import Breadcrumb from "@/components/btn/shop-breadcrumb";
import ShopSortBtn from "@/components/btn/shop-sort-btn";
import Pagination from "@/components/btn/pagination";
import BottomBox from "@/layout/bottom-box/bottom-box";

import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import dynamic from "next/dynamic";

const Items = dynamic(() => import("@/components/items"), {
  ssr: false,
});

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
      <PageWrapper>
        <Box type="lg">
          <div className="flex flex-col">
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

            <Pagination />
          </div>
        </Box>
      </PageWrapper>
      <BottomBox />
    </main>
  );
}
