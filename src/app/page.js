import Link from "next/link";

import ShopMenu from "@/components/box/shop-menu";
import HeroBox from "@/components/box/hero-box";
import HowToBox from "@/components/box/how-to-box";
import AboutBox from "@/components/box/about-box";

import BottomBox from "@/components/box/bottom-box";

export const metadata = {
  title: "Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Home() {
  return (
    <main>
      <ShopMenu />

      <div className="page-wrapper grid h-[calc(100svh-theme(spacing.3xl)-theme(spacing.2xl)-theme(spacing.md)-theme(spacing.3xs))] grid-rows-2 gap-sm min-h-[30rem]
      330px:h-[calc(100svh-theme(spacing.3xl)-theme(spacing.md)-theme(spacing.3xs))] 
      sm:h-[calc(100svh-2*theme(spacing.3xl)-theme(spacing.2xl)-theme(spacing.sm)-theme(spacing.3xs))] md:grid-cols-[3fr_2fr] md:grid-rows-1 ">
        <HeroBox />

        <HowToBox />
      </div>

      <AboutBox />

      <BottomBox />
    </main>
  );
}
