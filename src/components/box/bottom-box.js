import React from "react";
import Link from "next/link";

import PromoBox from "@/components/box/promo-box";
import RecommendedBox from "@/components/box/recommended-box";
import ArticlesBox from "@/components/box/articles-box";

export default function BottomBox() {
  return (
    <div className="page-wrapper mb-xl grid gap-gap md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr]">
      <PromoBox />
      <RecommendedBox />
      <ArticlesBox />
    </div>
  );
}
