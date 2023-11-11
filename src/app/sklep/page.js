"use client";

import Box from "@/app/_layout/Box";

import DropdownMenu from "@/components/DropdownMenu";

import ShopMenu from "@/app/sklep/_shopComponents/ShopMenu";
import Pagination from "@/components/Pagination";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";
import Breadcrumb from "./_shopComponents/Breadcrumb";

import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import dynamic from "next/dynamic";

const Items = dynamic(() => import("@/app/sklep/_shopComponents/Items"), {
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

  const [sortType, setSortType] = useState("Od A do Z");
  const sortOptions = [
    "Od A do Z",
    "Od Z do A",
    "Od najniższej ceny",
    "Od najwyższej ceny",
  ];

  const handleSort = (type) => {
    setSortType(type);
  };

  return (
    <main className="">
      <ShopMenu />
      <Box format="lg">
        <div className="flex flex-col gap-sm ">
          <div className="flex h-[calc(theme(spacing.lg)+theme(spacing.3xs))] items-center justify-between">
            <Breadcrumb
              // baseDomain={baseDomain}
              pathname={pathname}
              category={category}
              searchParams={searchParams}
            />

            {/* Artem - Sortowanie jest schrzanione */}

            <DropdownMenu onSelect={handleSort}>
              <DropdownMenu.Button>Sortuj</DropdownMenu.Button>
              <DropdownMenu.List
                className="absolute -right-2xs z-50 mt-3xs flex flex-col justify-center gap-3xs whitespace-nowrap rounded-[2rem] bg-bar
                  p-xs text-end font-btn text-sm shadow"
              >
                {sortOptions.map((option, index) => (
                  <DropdownMenu.Item
                    key={index}
                    className="!hover:bg-inherit w-full !justify-end border-transparent hover:text-bar"
                  >
                    {option}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.List>
            </DropdownMenu>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-sm grid-rows-2">
            <Items sortType={sortType} category={category} />
          </div>

          <Pagination />
        </div>
      </Box>

      <BottomBox />
    </main>
  );
}
