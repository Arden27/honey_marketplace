import Link from "next/link";

import ShopMenu from "@/components/shop-menu";
import HeroBox from "@/components/hero-box";
import HowToBox from "@/components/how-to-box";
import AboutBox from "@/components/about-box";
import RegisterBox from "@/components/register-box";
import RecommendedBox from "@/components/recommended-box";
import ArticlesBox from "@/components/articles-box";

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
        className="w-100 mx-auto grid h-80 w-[calc(100%-2*theme(spacing.md))] max-w-screen-2xl gap-gap 
      md:grid-cols-2"
      >
        <HeroBox />

        <HowToBox />
      </div>

      <AboutBox />

      <div className="w-100 mx-auto grid w-[calc(100%-2*theme(spacing.md))] max-w-screen-2xl gap-gap md:grid-cols-2 ">
        <RegisterBox />
        <RecommendedBox />
        <ArticlesBox />
      </div>
    </main>
  );
}
