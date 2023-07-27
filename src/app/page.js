import Link from "next/link";

import ShopMenu from "@/components/shop-menu";
import HeroBox from "@/components/hero-box";
import HowToBox from "@/components/how-to-box";
import AboutBox from "@/components/about-box";


import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Home() {
  return (
    <main className="">
      <ShopMenu />

      <div
        className="mx-auto grid h-80 w-[calc(100%-2*theme(spacing.md))] max-w-screen-2xl gap-gap 
      md:grid-cols-2"
      >
        <HeroBox />

        <HowToBox />
      </div>

      <AboutBox />
      <div className="mx-auto w-[calc(100%-2*theme(spacing.md))]">
        <BottomBox />
      </div>
    </main>
  );
}
