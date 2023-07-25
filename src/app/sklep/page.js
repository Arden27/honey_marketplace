import Link from "next/link";


import FilterItemsBtn from "@/components/filter-items-btn";
import ShopItem from "@/components/shop-item";
import Pagination from "@/components/pagination";

import RegisterBox from "@/components/register-box";
import RecommendedBox from "@/components/recommended-box";
import ArticlesBox from "@/components/articles-box";


export const metadata = {
  title: "Sklep - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Home() {
  return (
    <main>
      <section className="grid grid-rows-[auto_1fr_auto]">
        <div className="flex items-center justify-between">
          <div>PANEL</div>
          <FilterItemsBtn />
        </div>
        <div>
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
        </div>
        <Pagination />
      </section>

      <section className="w-100 mx-auto  grid max-w-screen-xl md:grid-cols-2 ">
        <RegisterBox />
        <RecommendedBox />
        <ArticlesBox />
      </section>
    </main>
  );
}
