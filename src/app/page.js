import Link from "next/link";

import ShopMenu from "@/components/box/shop-menu";
import HeroBox from "@/components/box/hero-box";
import HowToBox from "@/components/box/how-to-box";
import AboutBox from "@/components/box/about-box";

import BottomBox from "@/components/box/bottom-box";

export const metadata = {
  title: "Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Home() {
  return (
    <main>
      <ShopMenu />

      <div className="page-wrapper grid h-[calc(100svh-theme(spacing.3xl)-theme(spacing.2xl)-theme(spacing.md)-theme(spacing.3xs))] 380px:h-[calc(100svh-theme(spacing.2xl)-theme(spacing.md)-theme(spacing.3xs))] grid-rows-2 gap-sm md-grid-rows-1 md:grid-cols-[2fr_1fr]">
        <HeroBox />

        <HowToBox />
      </div>

      <AboutBox />

      <BottomBox />
    </main>
  );
}
