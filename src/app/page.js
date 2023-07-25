import Link from "next/link";

import AboutBox from "@/components/about-box";
import ArticlesBox from "@/components/articles-box";
import HeroBox from "@/components/hero-box";
import HowToBox from "@/components/how-to-box";
import RecommendedBox from "@/components/recommended-box";
import RegisterBox from "@/components/register-box";

export const metadata = {
  title: "Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Home() {
  return (
    <main>
      <div
        className="w-100 mx-auto mt-header-bar-sm grid h-80 max-w-screen-xl gap-gap pt-2xl md:mt-0
      md:grid-cols-2 md:pt-0"
      >
        <HeroBox />

        <HowToBox />
      </div>

      <AboutBox />

      <div className="w-100 mx-auto grid max-w-screen-xl gap-gap md:grid-cols-2 ">
        <RegisterBox />
        <RecommendedBox />
        <ArticlesBox />
      </div>
    </main>
  );
}
