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

      <div className="page-wrapper grid gap-gap md:grid-cols-[2fr_1fr]">
        <HeroBox />

        <HowToBox />
      </div>

      <AboutBox />

      <BottomBox />
    </main>
  );
}
