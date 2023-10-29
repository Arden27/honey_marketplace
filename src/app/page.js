import Link from "next/link";

import PageWrapper from "@/components/page-wrapper";
import ShopMenu from "@/app/sklep/shop-menu";
import HeroBox from "@/app/hero-box";
import HowToBox from "@/app/how-to-box";
import AboutBox from "@/app/about-box";
import BottomBox from "@/layout/bottom-box/bottom-box";

export const metadata = {
  title: "Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Home() {
  return (
    <main>
      <ShopMenu />

      <PageWrapper>
        <div
          className="
          grid h-[calc(100svh-theme(spacing.3xl)-theme(spacing.2xl)-theme(spacing.md)-theme(spacing.3xs))] min-h-[30rem] grid-rows-2 gap-sm
          330px:h-[calc(100svh-theme(spacing.3xl)-theme(spacing.md)-theme(spacing.3xs))] 
          sm:h-[calc(100svh-2*theme(spacing.3xl)-theme(spacing.2xl)-theme(spacing.sm)-theme(spacing.3xs))] 
          md:grid-cols-[3fr_2fr] md:grid-rows-1 "
        >
          <HeroBox />

          <HowToBox />
        </div>
      </PageWrapper>

      <AboutBox />

      <BottomBox />
    </main>
  );
}
