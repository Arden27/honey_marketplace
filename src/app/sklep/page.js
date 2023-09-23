"use client"
import Link from "next/link";

import ShopMenu from "@/components/box/shop-menu";
import SortItemsBtn from "@/components/btn/sort-items-btn";
import Pagination from "@/components/btn/pagination";
import BottomBox from "@/components/box/bottom-box";

import { useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation';

import dynamic from "next/dynamic";

const Items = dynamic(() => import("@/components/items"), {
  ssr: false,
});

const Breadcrumb = ({ baseDomain, pathname, category, searchParams }) => {
  return (
    <div>
      <Link className="hover:underline" href="/">
        {baseDomain}
      </Link>
      <span>/</span>
      { pathname === '/sklep' && !category ? (
        'sklep'
      ) : (
        <Link className="hover:underline" href="/sklep">
          sklep
        </Link>
      )}
      { category && (
        <>
          <span>/</span>
          { category === searchParams.get('categoria') ? (
            category
          ) : (
            <Link className="hover:underline" href={`/sklep?categoria=${category}`}>
              {category}
            </Link>
          )}
        </>
      )}
    </div>
  );
};

// export const metadata = {
//   title: "Sklep - Kurpiowski Bartnik",
//   description: "OPIS",
//   keywords: "TAGI",
// };

export default function Shop() {
  const pathname = usePathname();
  const searchParams = new URLSearchParams(useSearchParams());
  const category = searchParams.get('categoria');

  const [sortType, setSortType] = useState('A-Z');

  let baseDomain = 'KurpiowskiBartnik.pl';
  let displayPath = pathname;

  // append the category if it exists
  if (category) {
    displayPath += '/' + category;
  }

  const handleSort = (type) => {
    setSortType(type);
  };

  return (
    <main>
      <ShopMenu />
      <section
        className="page-wrapper mb-gap grid grid-cols-1  gap-gap overflow-hidden rounded-[2rem] bg-shop p-gap 
        sm:grid-cols-2 lg:grid-cols-3"
      >
        <div className="col-span-full flex items-center justify-between">
          <Breadcrumb 
            baseDomain={baseDomain} 
            pathname={pathname} 
            category={category} 
            searchParams={searchParams}
          />
          <SortItemsBtn onSelect={handleSort} />
        </div>

        <Items sortType={sortType} category={category} />

        <Pagination />
      </section>
      <BottomBox />
    </main>
  );
}
