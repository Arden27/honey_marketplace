import Link from "next/link";

import PageWrapper from "@/app/_layout/PageWrapper";
import Box from "@/app/_layout/Box";
import ShopMenu from "@/app/sklep/_shopComponents/ShopMenu";
import HeroBox from "@/app/_homeComponents/HeroBox";
import HowToBox from "@/app/_homeComponents/HowToBox";
import AboutBox from "@/app/_homeComponents/AboutBox";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

export const metadata = {
  title: "Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <ShopMenu />
        <div className="grid h-[calc(100svh-theme(spacing.3xl)-theme(spacing.2xl)-theme(spacing.md)-theme(spacing.3xs))] .min-h-[25rem] grid-rows-2 gap-sm
        330px:h-[calc(100svh-theme(spacing.3xl)-theme(spacing.md)-theme(spacing.2xs))]
        sm:h-[calc(100svh-2*theme(spacing.3xl)-theme(spacing.2xl)-theme(spacing.2xs))]
        md:grid-cols-[3fr_2fr] md:grid-rows-1"
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
