import Link from "next/link";

import ShopMenu from "@/components/shop-menu";
import FilterItemsBtn from "@/components/filter-items-btn";
import ShopItem from "@/components/shop-item";
import Pagination from "@/components/pagination";

<<<<<<< HEAD
import RegisterBox from "@/components/register-box";
import RecommendedBox from "@/components/recommended-box";
import ArticlesBox from "@/components/articles-box";
=======
import BottomBox from "@/components/bottom-box";
>>>>>>> Tailwind

export const metadata = {
  title: "Sklep - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Home() {
  return (
    <main className="mx-auto w-[calc(100%-2*theme(spacing.md))]">
      <ShopMenu />
      <section
        className="  grid max-w-screen-2xl grid-cols-1 grid-rows-[auto_1fr_auto] gap-gap overflow-hidden rounded-[3rem] bg-shop-bg p-gap mb-gap
        md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div className="col-span-full flex items-center justify-between">
          <div>PANEL</div>
          <FilterItemsBtn />
        </div>

        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />

        <Pagination />
      </section>

<<<<<<< HEAD
      <section className="w-100 m-auto  mx-auto grid w-[calc(100%-2*theme(spacing.md))] max-w-screen-2xl md:grid-cols-2">
        <RegisterBox />
        <RecommendedBox />
        <ArticlesBox />
      </section>
=======
      <BottomBox />
>>>>>>> Tailwind
    </main>
  );
}
