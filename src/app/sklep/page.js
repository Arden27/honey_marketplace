"use client";

import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";
import DropdownWrapper from "@/components/btn/DropdownWrapper";
import DropdownMenu from "@/components/btn/DropdownMenu";

import ShopMenu from "@/app/sklep/shop-menu";
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
                pathname={pathname}
                category={category}
                searchParams={searchParams}
              />

              {/* <DropdownWrapper onSelect={handleSort}>
                <div className="cursor-pointer hover:bg-bg3">
                  A-Z
                </div>
                <div className="cursor-pointer hover:bg-bg3">
                  Z-A
                </div>
                <div className="cursor-pointer hover:bg-bg3">
                  By price from lowest
                </div>
                <div className="cursor-pointer hover:bg-bg3">
                  By price from highest
                </div>
              </DropdownWrapper> */}
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
