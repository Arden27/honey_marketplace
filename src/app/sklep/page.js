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
      <section
        className=" w-100 rounded-[3rem] bg-shop-bg mx-auto grid max-w-screen-2xl grid-cols-1 grid-rows-[auto_1fr_auto] overflow-hidden 
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

      <section className="w-100 mx-auto  grid max-w-screen-2xl md:grid-cols-2 ">
        <RegisterBox />
        <RecommendedBox />
        <ArticlesBox />
      </section>
    </main>
  );
}
