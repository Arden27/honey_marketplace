"use client";

import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";
import DropdownMenu from "@/components/btn/DropdownMenu";

import ShopMenu from "@/app/sklep/_shopComponents/ShopMenu";
import Pagination from "@/components/btns/Pagination";
import BottomBox from "@/layout/bottom-box/BottomBox";
import Breadcrumb from "./_shopComponents/Breadcrumb";

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

  const handleSort = (type) => {
    setSortType(type);
  };

  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <ShopMenu />
        <Box type="lg">
          <div className="flex flex-col gap-sm ">
            <div className="flex h-[calc(theme(spacing.lg)+theme(spacing.3xs))] items-center justify-between bg-red-600">
              <Breadcrumb
                // baseDomain={baseDomain}
                pathname={pathname}
                category={category}
                searchParams={searchParams}
              />
              <DropdownMenu onSelect={handleSort}>
                {/* <DropdownMenu.Button></DropdownMenu.Button> */}

                <DropdownMenu.Option>A-Z</DropdownMenu.Option>
                <DropdownMenu.Option>Z-A</DropdownMenu.Option>
                <DropdownMenu.Option>By price from lowest</DropdownMenu.Option>
                <DropdownMenu.Option>By price from highest</DropdownMenu.Option>
              </DropdownMenu>
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
